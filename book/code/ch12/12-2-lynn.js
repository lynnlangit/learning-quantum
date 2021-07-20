function shor_classical()
{
    var N = 15;             
    var precision_bits = 4; 
    var coprime = 2;        
    var result = ShorAlgo(N, precision_bits, coprime);

    if (result !== null)
        qc.print('Success! '+N+'='+result[0]+'*'+result[1]+'\n');
    else
        qc.print('Failure: No non-trivial factors were found.\n')
}

function ShorAlgo(N, precision_bits, coprime)
{
    var repeat_period = set_repeat_period(N, precision_bits, coprime); 
    var factors = get_factor_candidates(N, repeat_period, coprime);      
    return get_valid_factors(N, factors);
}

function set_repeat_period(N, precision_bits, coprime) {
    var work = 1;
    var max_loops = Math.pow(2, precision_bits);
    for (iter = 0; iter < max_loops; ++iter) {
        work = (work * coprime) % N;
        if (work == 1) 
            return [iter + 1];
    }
    return 0;
}

function get_factor_candidates(N, repeat_period_candidates, coprime)
{
    qc.print('Repeat period candidates: '+repeat_period_candidates+'\n');
    var factor_candidates = [];
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
    return Num;
}

function get_valid_factors(N, factor_candidates)
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

shor_classical();

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

// To obtain the final result as 3 and 5, greatest common divisor is used;
// gcd(p,N) = gcd((a^(r/2)-1),N) = gcd(48,15) = 3
// gcd(q,N) = gcd((a^(r/2)+1),N) = gcd(50,15) = 5
