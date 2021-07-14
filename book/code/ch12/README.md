# Shor's Algorithm

- Core algo - can be implemented using classical algorithms only (for learning).  
- Optimization techniques are key to both classical and quantum implementations of Shor's Algorithm.

## What is it?

- Problem: Given an odd integer N, find its prime factors (p,q)
- Uses 'Period Finding' 
- The efficiency of Shor's algorithm is due to the efficiency of the quantum Fourier transform (QFT), and modular exponentiation by repeated squarings
Wikipedia definition - [link](https://en.wikipedia.org/wiki/Shor%27s_algorithm)

## Learn More

- Qiskit textbook - [link](https://qiskit.org/textbook/ch-algorithms/shor.html#1.-The-Problem:-Period-Finding)
- Classical example notebook - [link](https://github.com/PotatoDrug/Quantum-Cryptography/blob/master/Shor/Shor's%20Algorithm.ipynb)
- Medium Article - [link](https://towardsdatascience.com/quantum-factorization-b3f44be9d738)

### Other Info

Fermat’s little theorem implies that

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/fermat.png" width=300 align=left>

This hints us that such exponents may have periods.