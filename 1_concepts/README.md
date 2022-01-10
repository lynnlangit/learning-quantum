# Quantum Programming Concepts

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/1_concepts/images/bloch.png" width=200 align=right>

- QPUs (qubits) are the units of computation for quantum programs.  
- A [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere), shown to the right is usually used to visualize the state(s) of the associated qubits when running a quantum program.
- The north and south poles of the Bloch sphere are typically chosen to correspond to the standard basis vectors |0>  and |1> (on the Z-axis).

## Quantum Computing Languages and Libraries

- There are a growing nubmer of quantum computing languages and libraries.    
- Many of these languages are designed to run on a particular vendor's environment.    
- This includes cloud vendors - see this [link](https://github.com/lynnlangit/learning-quantum/blob/main/CLOUD-VENDORS.md)

### Summary Table

| Name   |      Type      |  Vendor | Runtime Envs | Notes |
|----------|:-------------:|:------:|:------:|:------:|
| QCEngine |  library | O'Reilly book | browser --> [link](https://oreilly-qc.github.io/) | multiple languages |
| Qiskit |    library  |  IBM | IBM Quantum Lab / Jupyter notebook | IBM SDK |
| OpenQASM | language |    IBM | IBM Quantum Composer --> [link](https://quantum-computing.ibm.com/) | IBM SDK |
| Braket | SDK | AWS | Sagemaker Notebook | Example notebook uses `conda_braket` library |
| Q# | language | Microsoft | Jupyter notebook or VSCode --> [link](https://docs.microsoft.com/en-us/azure/quantum) | can call from Python (notebook) |
| Cirq | library | Google | Colab or GCP / QCS | Python env, includes quantum function libraries: qsim, qsimh... |
| PennyLane | library | AWS Braket SDK and others | uses examples on hardware from D-Wave, IonQ or Rigetti | often used with ML (see below) |

<img src=https://github.com/lynnlangit/learning-quantum/blob/main/images/penny-lane-ml.png width=700>
