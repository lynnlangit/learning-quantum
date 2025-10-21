# Learning Cloud Quantum Programming

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/bit-vs-qubit.png" width=375 align=left>

This repo contains my study resources for learning **cloud quantum programming**.    

Shown to the left is a conceptual rendering of a bit vs a qubit, which is a fundamental concept of work in quantum computing.  The Repo is a companion to my LI_L course ["Cloud Quantum Computing Essentials"](https://www.linkedin.com/learning/cloud-quantum-computing-essentials)

A **qubit** is a two-state (or two-level) quantum-mechanical system, one of the simplest quantum systems displaying the peculiarity of quantum mechanics. A quantum computer performs quantum computations using the principles of quantum mechanics.   

A **QPU** (quantum processing units) manipulates the quantum states of available qubits in a controlled way to perform computations, such as algorithms. A qubit is a quantum bit of information.  

A **quantum computer** contains QPU processors, some number of qubits and the support mechanisms which allow these items to interact based on quantum instructions or programs.

----

## What's Here

This Repo is organized by folder as follows:
- [`concepts`](https://github.com/lynnlangit/learning-quantum/tree/main/1_concepts) - info about quantum languages, libraries, operations, reference programs (Shor's, Grover's, etc...) and notation
- [`cloud-vendors`](https://github.com/lynnlangit/learning-quantum/tree/main/2_cloud-vendors) - info about quantum runtime environments (and simulators) organized by cloud vendor (AWS, Azure, GCP and IBM)
- [`whitepapers`](https://github.com/lynnlangit/learning-quantum/tree/main/3_whitepapers) - academic research papers of interest including quantum programming algorithms and examples
- [`o-reilly-book`](https://github.com/lynnlangit/learning-quantum/tree/main/4_oreilly-book) - code examples, slides and link from a 15-week-long bookclub covering the referenced book on quantum programming

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

## 2024-2025 Industry Breakthroughs

The quantum computing industry achieved major milestones in 2024-2025, marking the transition from research to practical engineering:

### Error Correction Threshold Achieved
- **Google Willow**: First demonstration of exponential error reduction as qubits scale
- **Microsoft**: 800x error rate improvement, created 24 entangled logical qubits (world record)
- **IBM**: Achieved 5,000-gate circuit execution on 156-qubit system

### Proprietary Hardware Innovation
- **AWS Ocelot**: First AWS quantum chip using cat qubits (90% error correction cost reduction)
- **Microsoft Majorana 1**: World's first topological quantum processor, designed to scale to 1 million qubits on single chip

### Enterprise Readiness
- All major cloud providers launched quantum-ready programs (AWS Quantum Embark, Microsoft Quantum Ready, IBM advisory services)
- Focus on hybrid quantum-classical computing integrating AI and HPC
- Industry consensus: Fault-tolerant quantum computing by 2028-2030

### Current State (2025)
Modern cloud quantum systems range from 50-156 physical qubits with several platforms now demonstrating logical qubits with error correction. Key systems include:
- **Google Willow**: 105 qubits with error correction breakthrough
- **IBM Heron**: 156 qubits running 5,000-gate circuits
- **Microsoft + Atom Computing**: 24 logical qubits
- **AWS Ocelot**: 9 cat qubits (proprietary)
- **IonQ Forte Enterprise**: 36 algorithmic qubits with 99.9% fidelity

## Repository Structure

This Repo is organized by folder as follows:

### 📚 concepts
Info about quantum languages, libraries, operations, reference programs (Shor's, Grover's, etc...) and notation

### ☁️ cloud-vendors
Info about quantum runtime environments (and simulators) organized by cloud vendor:
- **AWS Braket** - Multi-vendor platform with Ocelot chip, Quantum Embark program
- **Microsoft Azure Quantum** - Logical qubits, Majorana 1, integrated AI+HPC platform
- **IBM Quantum** - Utility-scale computing, 156-qubit Heron, path to 2029 fault tolerance
- **Google Quantum AI** - Willow chip with error correction breakthrough
- **IonQ** - Trapped-ion systems, 99.9% fidelity, path to 2M qubits
- **Rigetti** - Superconducting multi-chip architecture

### 📄 whitepapers
Academic research papers of interest including quantum programming algorithms and examples

### 📖 o-reilly-book
Code examples, slides and link from a 15-week-long bookclub covering the referenced book on quantum programming

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

**For Hardware Diversity**: AWS Braket (access to IonQ, Rigetti, IQM, D-Wave, and more)
**For Logical Qubits**: Microsoft Azure Quantum (24 entangled logical qubits, topological qubits)
**For Utility-Scale Computing**: IBM Quantum (5,000-gate circuits, 156 qubits)
**For Open Source**: IBM Quantum (Qiskit framework)
**For Highest Fidelity**: IonQ via AWS/Azure (99.9% two-qubit gate fidelity)

### Learning Paths

1. **Free Courses**:
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

Based on 2024-2025 announcements, the industry is converging on this timeline:

| Period | Expected Progress |
|--------|------------------|
| **2025** | 100-500 physical qubits, maturing logical qubit technology |
| **2026-2027** | 500-5,000 physical qubits, 10-100 logical qubits |
| **2028-2029** | 1,000-20,000 physical qubits, 100-1,000 logical qubits |
| **2030+** | Fault-tolerant quantum computers, quantum advantage at scale |

## Key Technologies (2025)

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

### Recent Major Announcements (2024-2025)
- [Google Willow Quantum Chip](https://blog.google/technology/research/google-willow-quantum-chip/)
- [AWS Ocelot Chip](https://www.aboutamazon.com/news/aws/quantum-computing-aws-ocelot-chip)
- [Microsoft Majorana 1](https://azure.microsoft.com/en-us/blog/quantum/2025/02/19/microsoft-unveils-majorana-1-the-worlds-first-quantum-processor-powered-by-topological-qubits/)
- [IBM Quantum Roadmap](https://www.ibm.com/quantum/blog/ibm-quantum-roadmap-2025)
- [Microsoft 24 Logical Qubits](https://azure.microsoft.com/en-us/blog/quantum/2024/11/19/microsoft-and-atom-computing-offer-a-commercial-quantum-machine-with-the-largest-number-of-entangled-logical-qubits-on-record/)

### This Repository
Explore the `cloud-vendors` directory for detailed information about each platform, including:
- Getting started guides
- Code examples
- Hardware specifications
- Pricing information
- Recent updates and announcements

---

*The quantum computing industry is at an inflection point. 2024-2025 breakthroughs have proven that fault-tolerant quantum computing is achievable, with all major providers targeting the late 2020s for practical, commercially-relevant systems. Now is the time to start learning and experimenting with quantum computing.*





