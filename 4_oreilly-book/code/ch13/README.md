# Chapter 13 - QML

**IMPORTANT: See more examples using IBM, AWS or GCP via this [link](https://github.com/lynnlangit/learning-quantum/blob/main/1_concepts/4_quantum-ml.md)

The book discusses three examples, but does NOT present any sample code for the examples  
- solving systems of linear equations
- Quantum Principal Component Analysis (PCA)
- Quantum Support Vector Machines (SVM)

The techniques used are the following:
- HHL algorithm used to **invert** a normal matrix (best for sparse, well-conditioned Hermitian matrices)
    - efficiency of HHL / conjugate gradient descent method - can use `swap test`
    - uses eigendecomposition, writes out eigenvectors or uses eigenbasis to invert
    - inputs: scratch registers, amplitude encoding vector, QPU operation representing matrix A
    - outputs: solution register, scratch register
- matrix (linear equation) multiplication (inverting == solving)
    - matrix size (dimensionality)
    - matrix condition number (amount of error)
    - matrix sparsity (# of non-zero entries)
    - required solution precision (values represented in amplitudes)



