# Learning Cloud Quantum Programming

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/bit-vs-qubit.png" width=375 align=left>

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


## Quantum Computer Vendors

There are a number of quantum computer vendors. These vendors produce hardware (quantum computers) which contains a particular number of qubits and QPUs.

One example is the [D-Wave](https://www.dwavesys.com/) company. Shown to the right are photos from one of D-Wave's quantum computers. This computer contains QPU units, which is hardware with qubits (image taken from D-Wave whitepaper). 

To run quantum programs on quantum hardware, use quantum languages or libraries.

**NOTE:** Generally quantum programs are run on quantum simulators prior to being run on quantum hardware due to the cost and time run on live QPUs.

## Development Environments

Shown below are screenshots from a couple of quantum programming development environments. This is just a small subset of the available options. Generally these IDEs are either cloud-based (IBM Composer) or downloadable via a SDK (D-Wave).

### IBM Quantum Composer
The first example (shown below) shows running a quantum program in the IBM Quantum Composer IDE. This example runs the Grover-example quantum program. The visual environment includes the composer, which shows quantum operations written in the OPENQASM quantum programming language and a number of other visualization tools.

### D-Wave Cloud
The second example (shown below) is from from D-Wave Systems cloud at [https://cloud.dwavesys.com/](https://cloud.dwavesys.com/) and is being run using VSCode as an IDE. The sample shows a path optimization solver and is called `path` in the D-Wave examples. The program is written using the D-Wave Python-like quantum programming library. This IDE is a more traditional environment and doesn't include as many visualization tools for the state of the qubits used in computation.

### Quantum Playground
Yet another example of a quantum program visualization tools is the browser-based Quantum Playground - [http://www.quantumplayground.net/](http://www.quantumplayground.net/). Shown below is an example of animated output using the H gate example code. This is a particularly good tool for gaining an intuition into key quantum operations and program examples.

### Educational Resources
The QuanTime website (partnership with National Q-12 Education Partnership group) aggregates resources and links to materials which are designed to be used by educators - [https://q12education.org/quantime](https://q12education.org/quantime)

## Getting Started with Cloud Quantum Computing

### Choose Your Platform

**For Hardware Diversity**: AWS Braket (access to IonQ, Rigetti, IQM, D-Wave, and more)<br>
**For Logical Qubits**: Microsoft Azure Quantum (24 entangled logical qubits, topological qubits)<br>
**For Utility-Scale Computing**: IBM Quantum (5,000-gate circuits, 156 qubits)<br>
**For Open Source**: IBM Quantum (Qiskit framework)<br>
**For Highest Fidelity**: IonQ via AWS/Azure (99.9% two-qubit gate fidelity)

### Learning Paths

1. **Courses**:
   - [LinkedIn Learning: Cloud Quantum Computing Essentials](https://www.linkedin.com/learning/cloud-quantum-computing-essentials)
   - IBM Qiskit Textbook
   - AWS Braket Digital Learning Plan (free credentials)
   - Microsoft Learn: Quantum Computing Fundamentals

2. **Hands-On Practice**:
   - IBM Quantum (free access to quantum computers)
   - AWS Braket (free simulator time)
   - Azure Quantum ($500 free credits)
   - Annual quantum coding challenges

3. **Community**:
   - Quantum Computing Stack Exchange
   - IBM Quantum Network
   - Cloud provider quantum communities

## Industry Timeline

Based on 2024-2026 announcements, the industry is converging on this timeline:

| Period | Expected Progress |
|--------|------------------|
| **2026** | 108-256 physical qubits; 94 logical qubits demonstrated; AI-for-quantum tooling matures |
| **2027-2028** | 500-5,000 physical qubits, 100+ logical qubits |
| **2029-2030** | 1,000-20,000 physical qubits, 1,000+ logical qubits |
| **2030+** | Fault-tolerant quantum computers, quantum advantage at scale |

## Key Technologies (2026)

### Qubit Technologies
- **Superconducting** (IBM, Google, AWS, Rigetti): Fast gates, cryogenic cooling required
- **Trapped Ion** (IonQ, Quantinuum): High fidelity, all-to-all connectivity
- **Neutral Atom** (Atom Computing, Pasqal): Scalability, reconfigurable
- **Topological** (Microsoft Majorana 1): Hardware-protected error resistance
- **Photonic** (Xanadu): Room temperature operation
- **Quantum Annealing** (D-Wave): Optimization problems

### Software Frameworks
- **Qiskit** (IBM): Most popular, open-source
- **Q#** (Microsoft): Enterprise-focused, integrated with .NET
- **Cirq** (Google): Research-oriented
- **Amazon Braket SDK**: Multi-platform access
- **PennyLane**: Quantum machine learning

## Resources

### Official Documentation
- [IBM Quantum Documentation](https://docs.quantum.ibm.com/)
- [AWS Braket Documentation](https://docs.aws.amazon.com/braket/)
- [Azure Quantum Documentation](https://docs.microsoft.com/azure/quantum/)
- [Qiskit Documentation](https://qiskit.org/documentation/)

### Recent Major Announcements (2024-2026)
- [Google Willow Quantum Chip](https://blog.google/technology/research/google-willow-quantum-chip/)
- [AWS Ocelot Chip](https://www.aboutamazon.com/news/aws/quantum-computing-aws-ocelot-chip)
- [Microsoft Majorana 1](https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/)
- [IBM Quantum Roadmap](https://www.ibm.com/quantum/blog/ibm-quantum-roadmap-2025)
- [Microsoft 24 Logical Qubits](https://azure.microsoft.com/en-us/blog/quantum/2024/11/19/microsoft-and-atom-computing-offer-a-commercial-quantum-machine-with-the-largest-number-of-entangled-logical-qubits-on-record/)
- [NVIDIA Ising — Quantum AI Models](https://nvidianews.nvidia.com/news/nvidia-launches-ising-the-worlds-first-open-ai-models-to-accelerate-the-path-to-useful-quantum-computers)
- [Quantinuum 94 Logical Qubits](https://thequantuminsider.com/2026/03/10/quantinuum-researchers-demonstrates-quantum-computations-with-dozens-of-protected-logical-qubits/)
- [IBM Nighthawk Processor](https://quantum.cloud.ibm.com/announcements/en/product-updates/2026-01-05-nighthawk)

### This Repository
Explore the `cloud-vendors` directory for detailed information about each platform, including:
- Getting started guides
- Code examples
- Hardware specifications
- Pricing information
- Recent updates and announcements

---





