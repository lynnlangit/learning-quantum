# Learning Cloud Quantum Programming

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/bit-vs-qbit.png" width=400 align=left>

This repo contains my study resources for learning cloud quantum computing programming.  Shown to the left is a conceptual rendering of a bit vs a qubit, which is a fundamental concept or work in quantum computing.    

A qubit is a two-state (or two-level) quantum-mechanical system, one of the simplest quantum systems displaying the peculiarity of quantum mechanics. 

This Repo is organized by folder as follows:
- `concepts` - quantum languages, libraries, operations and notation
- `cloud-vendors` - quantum runtime environments (and simulators) organized by cloud vendor
- `whitepapers` - academic research papers of interest using quantum programming
- `o-reilly-book` - code examples, slides and link from bookclub (see section below)

---


## QPUs - Quantum Hardware 

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/d-wave-hardware.png" width=600 align=right>

There are a number of quantum computing vendors.  They produce hardware (quatum computers) which contain a particular number of qubits.    

The qubits are used by quantum computing programming languages or libraries for execution with QPUs.   

One example is the [D-Wave](https://www.dwavesys.com/) company.  Shown here are photos from one of D-Wave's quantum computers.  This computer contains QPU units, which is hardware with qubits (image taken from D-Wave whitepaper). To run quantum programs on quantum hardware, use quantum languages or libraries.  Generally quantum programs are run on quantum simulators prior to being run on quantum hardware due to the cost and time run on live QPUs.


---

## Quantum Programs by Example

- The first sample shown below is from the IBM Quantum Composer examples.  It implements the `Grover-example`.  
- The second sample is from from D-Wave Systems cloud at https://cloud.dwavesys.com/ and is using VSCode as an IDE
- Another example of a quantum program visualization tools is the `Quantum Playground` - http://www.quantumplayground.net/

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/grover.png" width=800>

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/dwave-ide.png" width=800>

### Book Club

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/quantum.png" width=300 align=right>

A small group of developers participated a 15-week long book club where we studied the book ['Programming Quantum Computers'](https://learning.oreilly.com/library/view/programming-quantum-computers/9781492039679/) by Eric R. Johnston, Nic Harrigan & Mercedes Gimeno-Segovia. Resources are in the `o-reilly-book` folder of this Repo and linked via the following locations:  

- Our YouTube channel - https://www.youtube.com/channel/UCSmWWIRx1dT2QO5gcCTjKYA
- Jeremy's repo w/experiments - https://github.com/jeremybytes/quantum-programming-experiments
- Our Slack - `program-quantum.slack.com`
- Book Author's Github and programming environment - https://oreilly-qc.github.io/
- Book Author's errata - http://oreilly.com/catalog/0636920167433/errata

---

### Links and Example Notebooks
Additional quantum programming examples from Jupyter notebooks (Microsoft Quantum Katas), which are linked below and use Q# running on Jupyter Notebooks.  
- Awesome Q# link list - https://github.com/ebraminio/awesome-qsharp
- Quantum Katas - https://github.com/Microsoft/QuantumKatas/
- Quatum Kata Notebooks (run in Binder from GitHub) - https://mybinder.org/v2/gh/Microsoft/QuantumKatas/master?filepath=index.ipynb

#### Global Phase

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/global-phase.png" width=800>

#### Hadamard Gate

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/hadamard.png" width=800>

---


