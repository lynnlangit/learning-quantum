function shor_sample_steps()
{
    var N = 15;             
    var precision_bits = 4; 
    var coprime = 2;        
    var result = Shor(N, precision_bits, coprime);

    if (result != null)
        qc.print('Success! '+N+'='+result[0]+'*'+result[1]+'\n');
    else
        qc.print('Failure: No non-trivial factors were found.\n')
}

function Shor(N, precision_bits, coprime)
{
    var repeat_period = ShorQPU(N, precision_bits, coprime); // quantum part
    var factors = ShorLogic(N, repeat_period, coprime);      // classical part
    return check_result(N, factors);
}

function get_greatestCommonDivisor(Num1, Num2)
{
    while (Num2) {
      var m = Num1 % Num2;
      Num1 = Num2;
      Num2 = m;
    }
    return Num1;
}

function check_result(N, factor_candidates)
{
    for (var i = 0; i < factor_candidates.length; ++i)
    {
        var factors = factor_candidates[i];
        if (factors[0] * factors[1] == N)
        {
            if (factors[0] != 1 && factors[1] != 1)
            {
                return factors;
            }
        }
    }
    return null;
}

function ShorLogic(N, repeat_period_candidates, coprime)
{
    qc.print('Repeat period candidates: '+repeat_period_candidates+'\n');
    var factor_candidates = [];
    for (var i = 0; i < repeat_period_candidates.length; ++i)
    {
        var repeat_period = repeat_period_candidates[i];
        var ar2 = Math.pow(coprime, repeat_period / 2.0);
        var factor1 = greatestCommonDivisor(N, ar2 - 1);
        var factor2 = greatestCommonDivisor(N, ar2 + 1);
        factor_candidates.push([factor1, factor2]);
    }
    return factor_candidates;
}

function ShorQPU(N, precision_bits, coprime)
{
    var increase_speed = false; // switch drawing off to increase sim speed
    setup_speed();
    // Quantum part of Shor's algorithm
    // For this implementation, the coprime must be 2.
    coprime = 2;

    // For some numbers (like 15 and 21) the "mod" in a^xmod(N)
    // is not needed, because a^x wraps neatly around. This makes the
    // code simpler, and much easier to follow.
    if (N == 15 || N == 21)
        return ShorQPU_WithoutModulo(N, precision_bits, coprime)
    else
        return ShorQPU_WithModulo(N, precision_bits, coprime)
}
function setup_speed()
{
    if (increase_speed)
    {
        qc.disableRecording();
        qc.disableAnimation();
    }
    else
    {
        qc.enableRecording();
        qc.enableAnimation();
    }
}

function read_unsigned(qreg)
{
    var value = qreg.read();
    return value & ((1 << qreg.numBits) - 1);
}

// This is the short/simple version of ShorQPU() where we can perform a^x and
// don't need to be concerned with performing a quantum int modulus.
function ShorQPU_WithoutModulo(N, precision_bits, coprime)
{
    var N_bits = 1;
    while ((1 << N_bits) < N)
        N_bits++;
    if (N != 15) // For this implementation, numbers other than 15 need an extra bit
        N_bits++;
    var total_bits = N_bits + precision_bits;

    // Set up the QPU and the working registers
    qc.reset(total_bits);
    var num = qint.new(N_bits, 'work');
    var precision = qint.new(precision_bits, 'precision');

    qc.label('init');
    num.write(1);
    precision.write(0);
    precision.hadamard();

    // Perform 2^x for all possible values of x in superposition
    for (var iter = 0; iter < precision_bits; ++iter)
    {
        qc.label('iter ' + iter);
        var num_shifts = 1 << iter;
        var condition = precision.bits(num_shifts);
        num_shifts %= num.numBits;
        num.rollLeft(num_shifts, condition);
    }
    qc.label('QFT');
    precision.QFT();
    qc.label('');

    var read_result = read_unsigned(precision);
    qc.print('QPU read result: '+read_result+'\n')
    var repeat_period_candidates = estimate_num_spikes(read_result, 1 << precision_bits);

    return repeat_period_candidates;
}

// This is the complicated version of ShorQPU() where we DO
// need to be concerned with performing a quantum int modulus.
// That's a complicated operation, and it also requires us to
// do the shifts one at a time.
function ShorQPU_WithModulo(N, precision_bits, coprime)
{
    var scratch = null;
    var max_value = 1;
    var mod_engaged = false;

    var N_bits = 1;
    var scratch_bits = 0;
    while ((1 << N_bits) < N)
        N_bits++;
    if (N != 15) // For this implementation, numbers other than 15 need an extra bit
        N_bits++;
    scratch_bits = 1;
    var total_bits = N_bits + precision_bits + scratch_bits;

    // Set up the QPU and the working registers
    qc.reset(total_bits);
    var num = qint.new(N_bits, 'work');
    var precision = qint.new(precision_bits, 'precision');
    var scratch = qint.new(1, 'scratch');

    qc.label('init');
    num.write(1);
    precision.write(0);
    precision.hadamard();
    scratch.write(0);

    var N_sign_bit_place = 1 << (N_bits - 1);
    var N_sign_bit = num.bits(N_sign_bit_place);
    for (var iter = 0; iter < precision_bits; ++iter)
    {
        var condition = precision.bits(1 << iter);
        var N_sign_bit_with_condition = num.bits(N_sign_bit_place);
        N_sign_bit_with_condition.orEquals(condition);

        var shifts = 1 << iter;
        for (var sh = 0; sh < shifts; ++sh)
        {
            qc.label('num *= coprime');
            num.rollLeft(1, condition);   // Multiply by the coprime
            max_value <<= 1;
            if (max_value >= N)
                mod_engaged = true;
            if (mod_engaged)
            {
                qc.label('modulo N');
                var wrap_mask = scratch.bits();
                var wrap_mask_with_condition = scratch.bits();
                wrap_mask_with_condition.orEquals(condition);

                // Here's the modulo code.
                num.subtract(N, condition); // subtract N, causing this to go negative if we HAVEN'T wrapped.
                scratch.cnot(N_sign_bit_with_condition); // Skim off the sign bit
                num.add(N, wrap_mask_with_condition); // If we went negative, undo the subtraction.
                num.not(1);
                scratch.cnot(num, 1, condition); // If it's odd, then we wrapped, so clear the wrap bit
                num.not(1);
            }
        }
    }
    qc.label('QFT');
    precision.QFT();
    qc.label('');

    var read_result = read_unsigned(precision);
    qc.print('QPU read result: '+read_result+'\n')
    var repeat_period_candidates = estimate_num_spikes(read_result, 1 << precision_bits);

    return repeat_period_candidates;
}

function estimate_num_spikes(spike, range)
{
    if (spike < range / 2)
        spike = range - spike;
    var best_error = 1.0;
    var e0 = 0;
    var e1 = 0;
    var e2 = 0;
    var actual = spike / range;
    var candidates = []
    for (denom = 1.0; denom < spike; ++denom)
    {
        var numerator = Math.round(denom * actual);
        var estimated = numerator / denom;
        var error = Math.abs(estimated - actual);
        e0 = e1;
        e1 = e2;
        e2 = error;
        // Look for a local minimum which beats our
        // current best error
        if (e1 <= best_error && e1 < e0 && e1 < e2)
        {
            var repeat_period = denom - 1;
            candidates.push(repeat_period);
            best_error = e1;
        }
    }
    return candidates;
}

shor_sample_steps();

// Here are some values of N to try:
// 15, 21, 35, 39, 51, 55, 69, 77, 85, 87, 91, 93, 95, 111, 115, 117,
// 119, 123, 133, 155, 187, 203, 221, 247, 259, 287, 341, 451

// Larger numbers require more bits of precision.
// N = 15    precision_bits >= 4
// N = 21    precision_bits >= 5
// N = 35    precision_bits >= 6
// N = 123   precision_bits >= 7
// N = 341   precision_bits >= 8  time: about 6 seconds
// N = 451   precision_bits >= 9  time: about 23 seconds
