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

        let N = 15;
        let coprime = 2;
    
        Message($"Estimating period of {coprime}...");
        let period = periodFindingRoutine(coprime, N);

        if (period % 2 == 0) {
            let halfPower = ExpModI(coprime, period / 2, N);
            if (halfPower != N - 1) {
                let factor = MaxI(GreatestCommonDivisorI(halfPower - 1, N), 
                                  GreatestCommonDivisorI(halfPower + 1, N));
                Message($"Factors are {factor} and {N / factor}");
            } else {
                fail "Residue xᵃ = -1 (mod N) where a is a period.";
            }
        } else {
            fail "Period is odd.";
        }

    }

    operation RunShorsAlgorithmQPU () : Unit {
        ShorsAlgorithm(EstimatePeriod);
    }
}