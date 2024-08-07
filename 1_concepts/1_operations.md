# Quantum Computing Instructions

The learning site [`Quantum Inspire`](https://www.quantum-inspire.com/) includes a series of articles, tutorials and also a programming environment for learning quantum computing concepts. 

- Read introductory article titled **"Hello Quantum World"**  --> [link](https://www.quantum-inspire.com/kbase/hello-quantum-world/)
- Read introductory article titled **"What is a Quantum Algorithm?"**  --> [link](https://www.quantum-inspire.com/kbase/what-is-a-quantum-algorithm/)

## Series of Conceptual Quantum Computing Articles 

Microsoft Quantom has an excellent series of short articles detailing quantum computing concepts on its documentaiton site.  An example of the content in the arti les in this series is shown below.  The graphic shows the math used in Hadamard (also called H or HAD) gates.

<kbd><img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/h-math.png" width=600></kbd>

- Math: **"Use Linear algebra for quantum computing"** --> [link](https://docs.microsoft.com/en-us/azure/quantum/overview-algebra-for-quantum-computing)
- Math: **"Work with vectors & matrices in quantum computing"** --> [link](https://docs.microsoft.com/en-us/azure/quantum/concepts-vectors-and-matrices)
- Math: **"Use Eigenvalues and Eigenvectors"** --> [link](https://docs.microsoft.com/en-us/azure/quantum/concepts-advanced-matrices)
- Quantum Primitives: **"Understand the Qubit"** --> [link](https://docs.microsoft.com/en-us/azure/quantum/concepts-the-qubit)
- Quantum Primitives: **"Perform Operations of Multiple Qubits"** --> [link](https://docs.microsoft.com/en-us/azure/quantum/concepts-multiple-qubits)

---

## Quantum Operators
Images and examples for study purposes (shown below) are from the O'Reilly book 'Programming Quantum Computers' by Johnston, Harrigan and Gimeno-Segovia  


| Symbol | Name| Example| English| 
| :---: |:---:|:---:|:---:|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/NOT.png" width=50>|  NOT (or X)  | qc.not(t)| logical bitwise NOT|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/CNOT.png" width=50>    | CNOT | qc.cnot(t,c)| controlled NOT, if (c) then NOT(t)| 
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/CCNOT.png" width=50>    | CCNOT (Toffoli) | qc.cnot(t,c1\|c2)| c, if (c1 AND c2) then NOT(t)| 
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/HAD.png" width=50> |  HAD (Hamamard)  | qc.had(t)| Hadamard gate, superposition|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/PHASE.png" width=50> |  PHASE  | qc.phase(angle,c)| relative phase rotation|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/Z.png" width=50> |  Z  | qc.phase(180,c)| relative phase rotation by 180°|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/S.png" width=50> |  S  | qc.phase(90,c)| relative phase rotation by 90°|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/T.png" width=50> |  T  | qc.phase(45,c)| relative phase rotation by 45°|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/CPHASE.png" width=50> |  CPHASE | qc.cphase(angle,c1\|c2)| conditional phase rotation|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/CZ.png" width=50> |  CZ  | qc.phase(180,c1\|c2)| conditional phase rotation by 180°|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/READ.png" width=50> |  READ  | val=qc.read(t)| read quibits|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/WRITE.png" width=50> |  WRITE  | qc.write(t,val)| write quibits|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/ROOT-NOT.png" width=50> |  ROOTNOT  | qc.rootnot(t)| root-of-NOT operation|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/SWAP.png" width=50> |  SWAP(EXCHANGE)  | qc.exchange(t1\|t2)| exchange two quibits|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/CSWAP.png" width=50> |  CSWAP(EXCHANGE)  | qc.exchange(t1\|t2,c)| conditional exchange of two quibits, if(c) the SWAP (t1,t2)|

## Degrees to Radians

| Degrees | 0° | 45° | 90° | 135° | 180° | 225° | 270° | 315° |
| :---: |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: |
| Radians |  0  | π/4| π/2|3π/4| π |5π/4|3π/2|7π/4|
| Name    | n/a | T  | S  | n/a | Z | n/a | n/a | n/a |

## Decomp Example - CCNOT / Toffoli Gate

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/decomp.png" width=700>

## Matrix Math for Operators

Great short article about the math of basic quantum operations "Intro to Quantum Programming" - [link](https://towardsdatascience.com/introduction-to-quantum-programming-a19aa0b923a9)  

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/gate-math.png" width=700>

## Example Orchestration

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/example.png" width=700>

