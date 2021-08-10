# Chapter 13 - QML

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

## Examples

- On Qiskit 
    - Qiskit ML Tutorials - https://qiskit.org/documentation/machine-learning/tutorials/index.html
    - Qiskit Textbook - https://qiskit.org/textbook/content/ch-ex/
    - HHL example - https://qiskit.org/textbook/ch-applications/hhl_tutorial.html  
    - On IBM Quantum Lab - https://quantum-computing.ibm.com/lab/files/qiskit-textbook/content/ch-applications/hhl_tutorial.ipynb
- On PennyLane site 
    - what is QML - https://pennylane.ai/qml/whatisqml.html
    - glossary - https://pennylane.ai/qml/glossary.html
    - Advanced example "Learning to Learn" - https://pennylane.ai/qml/demos/learning2learn.html
