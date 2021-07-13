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
    var repeat_period = ShorCPU(N, precision_bits, coprime); 
    var factors = ShorFactorCandidates(N, repeat_period, coprime);      
    return check_result(N, factors);
}

function ShorCPU(N, precision_bits, coprime) {
    var work = 1;
    var max_loops = Math.pow(2, precision_bits);
    for (iter = 0; iter < max_loops; ++iter) {
        work = (work * coprime) % N;
        if (work == 1) 
            return [iter + 1];
    }
    return 0;
}

function ShorFactorCandidates(N, repeat_period_candidates, coprime)
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

function greatestCommonDivisor(Num, Divisor)
{
    while (Divisor) {
      var m = Num % Divisor;
      Num = Divisor;
      Divisor = m;
    }
    return Num;
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

shor_classical();


