# Learning Cloud Quantum Programming

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/bit-vs-qubit-animated.gif?raw=true" width=470 align=left>

This repo contains my study resources for learning **cloud quantum programming**.    

Shown to the left is a conceptual rendering of a bit vs a qubit, which is a fundamental concept of work in quantum computing.  The Repo is a companion to my LI_L course ["Cloud Quantum Computing Essentials"](https://www.linkedin.com/learning/cloud-quantum-computing-essentials)

A **qubit** is a two-state (or two-level) quantum-mechanical system, one of the simplest quantum systems displaying the peculiarity of quantum mechanics. A quantum computer performs quantum computations using the principles of quantum mechanics.   

A **QPU** (quantum processing units) manipulates the quantum states of available qubits in a controlled way to perform computations, such as algorithms. A qubit is a quantum bit of information.  

A **quantum computer** contains QPU processors, some number of qubits and the support mechanisms which allow these items to interact based on quantum instructions or programs.

----

## Repository Structure

This Repo is organized by folder as follows:

### 📚 concepts
[Conceptual information](https://github.com/lynnlangit/learning-quantum/tree/main/1_concepts) about quantum languages, libraries, operations, reference programs (Shor's, Grover's, etc...) and notation

### ☁️ cloud-vendors
Info about quantum runtime environments (and simulators) organized by [cloud vendor](https://github.com/lynnlangit/learning-quantum/tree/main/2_cloud-vendors):
- **AWS Braket** - Multi-vendor platform with Ocelot chip, Quantum Embark program
- **Microsoft Azure Quantum** - Logical qubits, Majorana 1, integrated AI+HPC platform
- **IBM Quantum** - Utility-scale computing, 156-qubit Heron, path to 2029 fault tolerance
- **Google Quantum AI** - Willow chip with error correction breakthrough
- **IonQ** - Trapped-ion systems, 99.9% fidelity, path to 2M qubits
- **Rigetti** - Superconducting multi-chip architecture
- **NVIDIA CUDA-Q** - GPU-accelerated quantum simulation, Ising AI models for QEC

### 📄 whitepapers
[Academic research papers](https://github.com/lynnlangit/learning-quantum/tree/main/3_whitepapers) of interest including quantum programming algorithms and examples

### 📖 o-reilly-book
Code examples, slides and link from a [15-week-long bookclub](https://github.com/lynnlangit/learning-quantum/tree/main/4_oreilly-book) covering the referenced book on quantum programming

---


## Quantum Computer Example

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/d-wave-hardware.png" width=600 align=right>

There are a number of quantum computer vendors.  These vendors produce hardware (quantum computers) which contains a particular number of qubits and QPUs.   

One example is the [D-Wave](https://www.dwavesys.com/) company.  Shown to the right are photos from one of D-Wave's quantum computers.  This computer contains QPU units, which is hardware with qubits (image taken from D-Wave whitepaper). To run quantum programs on quantum hardware, use quantum languages or libraries.    

NOTE: Generally quantum programs are run on quantum simulators prior to being run on quantum hardware due to the cost and time run on live QPUs.


---

## Quantum Programs and IDEs

Shown below are screenshots from a couple of quantum programming development environments.  This is just a small subset of the available options.  Generally these IDEs are either cloud-based (IBM Composer) or downloadable via a SDK (D-Wave).  

- The first example (shown below) shows running a quantum program in the IBM Quantum Composer IDE.  This example runs the `Grover-example` quantum program. The visual environment includes the composer, which shows quantum operations written in the OPENQASM quantum programming language and a number of other visualization tools. 
<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/grover.png" width=800>

- The second example (shown below) is from from D-Wave Systems cloud at https://cloud.dwavesys.com/ and is being run using VSCode as an IDE.  The sample shows a path optimization solver and is called `path` in the D-Wave examples. The program is written using the D-Wave Python-like quantum programming library. This IDE is a more traditional environment and doesn't include as many visualization tools for the state of the qubits used in computation.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/dwave-ide.png" width=800>

## Resources for Learning

- Yet another example of a quantum program visualization tools is the browser-based `Quantum Playground` - http://www.quantumplayground.net/.  Shown below is an example of animated output using the H gate example code.  This is a particularly good tool for gaining an intuition into key quantum operations and program examples.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/quantum-playground.png" width=800>

- The QuanTime website (partnership with National Q-12 Education Partnership group) aggregates resources and links to materials which are designed to be used by educators - https://q12education.org/quantime

---

## Industry Breakthroughs (2024-2026)

Quantum computing crossed major thresholds in 2024-2026: error correction proven at scale, 94 logical qubits demonstrated beyond break-even, and AI-powered tools accelerating development. Industry consensus targets fault-tolerant systems by 2028-2030.

For detailed coverage, see [Breakthroughs](1_concepts/breakthroughs/README.md).

