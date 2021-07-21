namespace QSharp.Chapter12
{
    open Microsoft.Quantum.Canon;
    open Microsoft.Quantum.Intrinsic;
    open Microsoft.Quantum.Diagnostics;
    open Microsoft.Quantum.Arithmetic;
    open Microsoft.Quantum.Convert;
    open Microsoft.Quantum.Math;
    open Microsoft.Quantum.Oracles;
    open Microsoft.Quantum.Characterization;

    operation ApplyOrderFindingOracle(generator : Int, modulus : Int, power : Int, target : Qubit[]) : Unit is Adj + Ctl {
        MultiplyByModularInteger(ExpModI(generator, power, modulus), modulus, LittleEndian(target));
    }

    operation EstimatePeriod(generator : Int, modulus : Int) : Int {
        mutable result = 1;
        let bitsize = BitSizeI(modulus);
        let bitsPrecision = 2 * bitsize + 1;
        
        repeat {
            mutable dyadicFractionNum = 0;

            use eigenstateRegister = Qubit[bitsize];
            let eigenstateRegisterLE = LittleEndian(eigenstateRegister);
            ApplyXorInPlace(1, eigenstateRegisterLE);

            let oracle = DiscreteOracle(ApplyOrderFindingOracle(generator, modulus, _, _));

            use register = Qubit[bitsPrecision];
            let dyadicFractionNumerator = LittleEndian(register);

            QuantumPhaseEstimation(oracle, eigenstateRegisterLE!, LittleEndianAsBigEndian(dyadicFractionNumerator));

            set dyadicFractionNum = MeasureInteger(dyadicFractionNumerator);

            ResetAll(eigenstateRegister);

            if (dyadicFractionNum == 0) {
                fail "We measured 0 for the numerator";
            }

            Message($"Estimated eigenvalue is {dyadicFractionNum}/2^{bitsPrecision}.");

            let (numerator, period) = (ContinuedFractionConvergentI(Fraction(dyadicFractionNum, 2 ^ bitsPrecision), modulus))!;
            let (numeratorAbs, periodAbs) = (AbsI(numerator), AbsI(period));

            Message($"Estimated divisor of period is {periodAbs}, " + $" we have projected on eigenstate marked by {numeratorAbs}.");

            set result = (periodAbs * result) / GreatestCommonDivisorI(result, periodAbs);
        }
        until (ExpModI(generator, result, modulus) == 1)
        fixup {
            Message("It looks like the period has divisors and we have found only a divisor of the period. Trying again ...");
        }

        return result;
    }

    operation ShorsAlgorithm (periodFindingRoutine : ((Int, Int) => Int)) : Unit {
        // This code is a general-purpose implementation of Shor's algorithm, so it's not optimized for coprime=2
        // N = 21 runs a fairly long time, and we don't recommend trying N = 35 and higher.
        let N = 15;
        let coprime = 2;
    
        Message($"Estimating period of {coprime}...");

        // Call Quantum Period finding algorithm for `coprime` mod `N`.
        let period = periodFindingRoutine(coprime, N);

        // Period finding reduces to factoring only if period is even
        if (period % 2 == 0) {

            // Compute `coprimeCandidate` ^ `period/2` mod `N`
            let halfPower = ExpModI(coprime, period / 2, N);

            if (halfPower != N - 1) {
                // When the halfPower is not -1 mod N,
                // halfPower-1 or halfPower+1 share non-trivial divisor with `N`
                let factor = MaxI(GreatestCommonDivisorI(halfPower - 1, N), 
                                  GreatestCommonDivisorI(halfPower + 1, N));

                // Return computed non-trivial factors.
                Message($"Factors are {factor} and {N / factor}");
            } else {
                // If we are unlucky, halfPower is just -1 mod N
                // This is a trivial case not useful for factoring
                fail "Residue xᵃ = -1 (mod N) where a is a period.";
            }
        } else {
            // When period is odd we have to pick another number to estimate
            // period of and start over.
            fail "Period is odd.";
        }

    }

    operation RunShorsAlgorithmQPU () : Unit {
        ShorsAlgorithm(EstimatePeriod);
    }
}