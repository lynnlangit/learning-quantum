# Shor's Algorithm

## What is it?

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/shor-periodicity.png" width=500 align=right>

- Given an integer N, find its prime factors (p,q) in **polynomial time** 
    - NOTE: although you could use classical algorithms to factor the product of two primes, it requires superpolynomial time to do so for large numbers
    - By definition N must be an ODD integer
    - By definition p, q can NOT be equal to ONE  
- The algorithm is composed of two parts
    - **Classical part** -  turns the factoring problem into the problem of finding the period of a function 
    - **Quantum speedup** -  finds the period using the quantum Fourier transform (QFT) and modular exponentiation by repeated squarings
        -  Uses QFT to 'learn' the function's periodicity 
        -  Also called 'period finding' in polynomial time
- Why does it matter? 
    - RSA public-key encryption (and other methods) rely on the current INABILITY to quickly factorize large numbers
    - Being able to quickly determine the *complex periodicity* of a function has a number of potential applications

## Examples and Info

- Qiskit textbook - [link](https://qiskit.org/textbook/ch-algorithms/shor.html#1.-The-Problem:-Period-Finding)
- Classical example notebook - [link](https://github.com/PotatoDrug/Quantum-Cryptography/blob/master/Shor/Shor's%20Algorithm.ipynb)
- Medium Article - [link](https://towardsdatascience.com/quantum-factorization-b3f44be9d738)

### Detail about Shor's Algorithm & Fermat's Theorem

Fermat’s Theorem (pictured to the right) implies that...

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/fermat.png" width=200 align=right>

- This theorem gives us the hint that such exponents may have periods.  Potential factors are determined using classical methods, potential periods are found using quantum methods.
- Shor's Algo explained in greater detail at this post - https://www.quantiki.org/wiki/shors-factoring-algorithm  

