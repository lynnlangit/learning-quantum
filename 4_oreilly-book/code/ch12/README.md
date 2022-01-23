# Shor's Algorithm

## What is it?

- Problem: Given an integer N, find its prime factors (p,q). 
    - By definition N must be an ODD integer
    - By definition p,q can NOT be equal to ONE  
- The algorithm is composed of two parts
    - **Classical part** -  turns the factoring problem into the problem of finding the period of a function 
    - **Quantum speedup** -  finds the period using the quantum Fourier transform (QFT) and modular exponentiation by repeated squarings
        -  Uses QFT to 'learn' the function's periodicity 
- Why does it matter? 
    - RSA public-key encryption (and other methods) rely on the current INABILITY to quickly factorize large numbers
    - Being able to quickly determine the *complex periodicity* of a function has a number of potential applications

## Examples and Info

- Qiskit textbook - [link](https://qiskit.org/textbook/ch-algorithms/shor.html#1.-The-Problem:-Period-Finding)
- Classical example notebook - [link](https://github.com/PotatoDrug/Quantum-Cryptography/blob/master/Shor/Shor's%20Algorithm.ipynb)
- Medium Article - [link](https://towardsdatascience.com/quantum-factorization-b3f44be9d738)

### Detail about the Algorithm

Fermat’s little theorem implies that...

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/fermat.png" width=300 align=left>

This theorem gives us the hint that such exponents may have periods.  Potential factors are determined using classical methods, potential periods are found using quantum methods.

---
## More Details

Shor's Algo explained in greater detail from - https://www.quantiki.org/wiki/shors-factoring-algorithm  

### The Classical Part

- Pick a pseudo-random odd number a < N
- Compute `gcd(a, N)`. This may be done using the [Euclidean algorithm](https://en.wikipedia.org/wiki/Euclidean_algorithm).
- If gcd(a, N) ≠ 1, then there is a nontrivial factor of N, so we are done.
- Otherwise, use the period-finding subroutine (psuedocode shown below) to find r, the period of the following function:

    ```
    f(x) = ax mod N     //i.e. the smallest integer r for which f(x + r) = f(x).
        If r is odd, go back to step 1.
        If a r/2 ≡ -1 (mod N), go back to step 1.
     The factors of N are gcd(ar/2 ± 1, N). We are done.
    ```


### The Quantum Part

- Period-finding subroutine: - Start with a pair of input and output qubit registers with log2N qubits each, and initialize them to
    ```
    N − 1/2∑x∣x⟩∣0⟩
    where x runs from 0 to N - 1
    ```

- Construct f(x) as a quantum function and apply it to the above state, to obtain
    ```
    N − 1/2∑x∣x⟩∣f(x)⟩
    ```

- Apply the quantum Fourier transform on the input register. The quantum Fourier transform on N points is defined by: 
    ```
    UQFT∣x⟩ = N − 1/2∑ye2πixy/N∣y⟩
    This leaves us in the following state:
    N − 1∑x∑ye2πixy/N∣y⟩∣f(x)⟩
    ```

- Perform a measurement. We obtain some outcome y in the input register and f(x0) in the output register. 
- Since f is periodic, the probability to measure some y is given by
    ```
    N − 1∣∑x :  f(x) = f(x0)e2πixy/N∣2 = N − 1∣∑be2πi(x0 + rb)y/N∣2
    ```

- Analysis now shows that this probability is higher, the closer yr/N is to an integer.
    ```
    Turn y/N into an irreducible fraction, and extract the denominator r′, which is a candidate for r.
    Check if f(x) = f(x + r′). If so, we are done.
    Otherwise, obtain more candidates for r by using values near y, or multiples of r′. If any candidate works, we are done.
    Otherwise, go back to step 1 of the subroutine.
    ```

### Explanation of the algorithm

The algorithm is composed of two parts. The first part of the algorithm turns the factoring problem into the problem of finding the period of a function, and may be implemented classically. The second part finds the period using the quantum Fourier transform, and is responsible for the quantum speedup.

- Obtaining factors from period
    - The integers less than N and coprime with N form a finite group under multiplication modulo N, which is typically denoted (Z/NZ)×. By the end of step 3, we have an integer a in this group. Since the group is finite, a must have a finite order r, the smallest positive integer such that
    ```
    ar ≡ 1 mod N
    Therefore, N | (a r − 1). Suppose we are able to obtain r, and it is even. Then
    ar − 1 = (ar/2 − 1)(ar/2 + 1) ≡ 0 mod N
    ⇒ N ∣(ar/2 − 1)(ar/2 + 1).
    ```

    - r is the smallest positive integer such that a r ≡ 1, so N cannot divide (a r / 2 − 1). If N also does not divide (a r / 2 + 1), then N must have a nontrivial common factor with each of (a r / 2 − 1) and (a r / 2 + 1).

    - Proof: For simplicity, denote (a r / 2 − 1) and (a r / 2 + 1) by u and v respectively. N | uv, so kN = uv for some integer k. Suppose gcd(u, N) = 1; then mu + nN = 1 for some integers m and n (this is a property of the greatest common divisor.) Multiplying both sides by v, we find that mkN + nvN = v, so N | v. By contradiction, gcd(u, N) ≠ 1. By a similar argument, gcd(v, N) ≠ 1.

    - This supplies us with a factorization of N. If N is the product of two primes, this is the only possible factorization.

- Finding the period
    - Shor's period-finding algorithm relies heavily on the ability of a quantum computer to be in many states simultaneously. 
    - Physicists call this behaviour a "superposition" of states. 
    - To compute the period of a function f, we evaluate the function at all points simultaneously.

    - Quantum physics does not allow us to access all this information directly, though. A measurement will yield only one of all possible values, destroying all others. Therefore we have to carefully transform the superposition to another state that will return the correct answer with high probability. This is achieved by the quantum Fourier transform.

    - Shor thus had to solve three "implementation" problems. All of them had to be implemented "fast", which means that they can be implemented with a number of quantum gates that is polynomial in logN.

    - Create a superposition of states. This can be done by applying Hadamard gates to all qubits in the input register. Another approach would be to use the quantum Fourier transform (see below).

    - Implement the function f as a quantum transform. To achieve this, Shor used repeated squaring for his modular exponentiation transformation.

    - Perform a quantum Fourier transform. By using controlled NOT gates and single qubit rotation gates Shor designed a circuit for the quantum Fourier transform that uses just O((logN)2) gates.

    - After all these transformations a measurement will yield an approximation to the period r. For simplicity assume that there is a y such that yr/N is an integer. Then the probability to measure y is 1. To see that we notice that then
    ```
     e2πibyr/N = 1 for all integers b
     Therefore the sum that gives us the probability to measure y will be N/r since b takes roughly N/r values and thus the probability is 1/r. 
     There are r y such that yr/N is an integer, so the probabilities sum to 1
     ```

Note: another way to explain Shor's algorithm is by noting that it is just the quantum phase estimation algorithm in disguise.


