# Quantum Computing Languages and Libraries

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
