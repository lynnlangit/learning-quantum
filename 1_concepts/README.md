# Quantum Programming Concepts

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/1_concepts/images/bloch.png" width=200 align=right>

QPUs or quantum processor units which act on qubits are the units of computation for quantum programs.  There are a number of core concepts associated with QPUs and qubits. 
- A [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere), shown to the right is usually used to visualize the state(s) of the associated qubits when running a quantum program.
  - Video - "How do you make a Quantum Bit[quibit]?" by Veritasium - [link](https://www.youtube.com/watch?v=zNzzGgr2mhk)
  - Video - "The Math of Quantum Computer" by Infinite Series - [link](https://www.youtube.com/watch?v=IrbJYsep45E)
  - Video - on quantum superposition and decoherence - [link](https://www.youtube.com/watch?v=7B1llCxVdkE)
- The north and south poles of the Bloch sphere are typically chosen to correspond to the standard basis vectors ∣0⟩ and ∣1⟩ on the Z-axis.
  - IMPORTANT: Post - explaining **'Qubit Basis States'** (Z-basis and more) - [link](https://www.quantum-inspire.com/kbase/qubit-basis-states/)

## Quantum Computing Languages and Libraries

- There are a growing nubmer of quantum computing languages and libraries.    
- Many of these languages are designed to run on a particular vendor's environment.    
- This includes offerings from public cloud vendors - see this [link](https://github.com/lynnlangit/learning-quantum/blob/main/CLOUD-VENDORS.md)

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

---

### Talks, Papers and Articles
- 📺 Video: "Lunch & Learn: Quantum Computing" 40 min talk -[link](https://www.youtube.com/watch?v=7susESgnDv8)
- 📺 Video: "The Map of Quantum Computing" 30 min talk - [link](https://www.youtube.com/watch?v=-UlxHPIEVqA)
- 📺 Video: "Companies and Types of Quantum Computers" 12 min talk - [link](https://www.youtube.com/watch?v=gcbMKt079l8)
- 📺 Video: "Quantum Steampunk" 55 min talk by theoretical physicist Nicole Yunger Halpern - [link](https://www.youtube.com/watch?v=Hwa-YU19ey0)
- 🗣️ Podcast: "Screaming in the cloud: Quantum Leaps in Bioinformatics" me chatting with @QuinnyPig - [link](https://www.lastweekinaws.com/podcast/screaming-in-the-cloud/quantum-leaps-in-bioinformatics-with-lynn-langit/)
- 📓 Article: "Quantum computing has a hype problem" - [link](https://www.technologyreview.com/2022/03/28/1048355/quantum-computing-has-a-hype-problem/)
