function shor_quantum()
{
    var N = 35;             
    var precision_bits = 6; 
    var coprime = 2;        
    var result = ShorAlgo(N, precision_bits, coprime);

    if (result !== null)
        qc.print('Success! '+N+'='+result[0]+'*'+result[1]+'\n');
    else
        qc.print('Failure: No non-trivial factors were found.\n');
}

function ShorAlgo(N, precision_bits, coprime)
{
    var repeat_period = ShorQPU(N, precision_bits, coprime);            // qunatum - use QFT to produce x's
    var factors = get_factor_candidates(N, repeat_period, coprime);     // classical - factor candidates
    return get_valid_factors(N, factors);                               // return valid factors (not 1)
}

function ShorQPU(N, precision_bits, coprime)
{
    set_setup_speed();
    coprime = 2;
    
    if (N === 15 || N === 21)                                           // For 15 & 21 "mod" in a^xmod(N) isn't needed
        return ShorQPU_WithoutModulo(N, precision_bits, coprime);
    else
        return ShorQPU_WithModulo(N, precision_bits, coprime);
}

function set_setup_speed()
{
    var increase_speed = false;     // switch drawing off to increase sim speed
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

function ShorQPU_WithoutModulo(N, precision_bits, coprime)
{
    var N_bits = 1;
    while ((1 << N_bits) < N)
    N_bits++;
    if (N !== 15)                
    N_bits++;
    var total_bits = N_bits + precision_bits;

    qc.reset(total_bits);
    var num = qint.new(N_bits, 'work');
    var precision = qint.new(precision_bits, 'precision');

    qc.label('init');
    num.write(1);
    precision.write(0);
    precision.had();

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

    var read_result = convert_to_unsigned(precision);
    qc.print('QPU read result: '+read_result+'\n');
    var repeat_period_candidates = estimate_num_spikes(read_result, 1 << precision_bits);

    return repeat_period_candidates;
}

function convert_to_unsigned(qreg)
{
    var value = qreg.read();
    return value & ((1 << qreg.numBits) - 1);
}

function estimate_num_spikes(spike, range)
{
    if (spike < range / 2)
        spike = range - spike;
    var best_error = 1.0;
    var e0 = 0, e1 = 0, e2 = 0;
    var actual = spike / range;
    var candidates = [];
    for (var denom = 1.0; denom < spike; ++denom)
    {
        var numerator = Math.round(denom * actual);
        var estimated = numerator / denom;
        var error = Math.abs(estimated - actual);
        e0 = e1;
        e1 = e2;
        e2 = error;

        // Look for a local minimum which beats our current best error
        if (e1 <= best_error && e1 < e0 && e1 < e2)
        {
            var repeat_period = denom - 1;
            candidates.push(repeat_period);
            best_error = e1;
        }
    }
    return candidates;
}

// Performs a quantum int modulus, does shifts one at a time
function ShorQPU_WithModulo(N, precision_bits, coprime)
{
    var scratch = null;
    var max_value = 1;
    var mod_engaged = false;

    var N_bits = 1;
    var scratch_bits = 0;
    while ((1 << N_bits) < N)
        N_bits++;
    if (N !== 15)                // numbers other than 15 need an extra bit
        N_bits++;
    scratch_bits = 1;
    var total_bits = N_bits + precision_bits + scratch_bits;

    qc.reset(total_bits);
    var num = qint.new(N_bits, 'work');
    var precision = qint.new(precision_bits, 'precision');
    scratch = qint.new(1, 'scratch');           

    qc.label('init');
    num.write(1);
    precision.write(0);
    precision.had();
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
            num.rollLeft(1, condition);                 // Multiply by the coprime
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
                num.subtract(N, condition);              // subtract N, causing this to go negative if we HAVEN'T wrapped.
                scratch.cnot(N_sign_bit_with_condition); // Skim off the sign bit
                num.add(N, wrap_mask_with_condition);    // If we went negative, undo the subtraction
                num.not(1);
                scratch.cnot(num, 1, condition);         // If it's odd, then we wrapped, so clear the wrap bit
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

function read_unsigned(qreg)
{
    var value = qreg.read();
    return value & ((1 << qreg.numBits) - 1);
}

function get_factor_candidates(N, repeat_period_candidates, coprime)
{
    qc.print('Repeat period candidates: '+repeat_period_candidates+'\n');
    factor_candidates = [];
    for (var i = 0; i < repeat_period_candidates.length; ++i)
    {
        var repeat_period = repeat_period_candidates[i];
        var ar2 = Math.pow(coprime, repeat_period / 2.0);
        var factor1 = get_greatestCommonDivisor(N, ar2 - 1);
        var factor2 = get_greatestCommonDivisor(N, ar2 + 1);
        factor_candidates.push([factor1, factor2]);
    }
    return factor_candidates;
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

function get_valid_factors(N, factor_candidates)
{
    for (var i = 0; i < factor_candidates.length; ++i)
    {
        var factors = factor_candidates[i];
        if (factors[0] * factors[1] === N)
        {
            if (factors[0] !== 1 && factors[1] !== 1)
            {
                return factors;
            }
        }
    }
    return null;
}

shor_quantum();
