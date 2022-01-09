# Learning Cloud Quantum Programming

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/bit-vs-qbit.png" width=400 align=left>

This repo contains my study resources for learning cloud quantum computing programming.  Shown to the left is a conceptual rendering of a bit vs a qubit, which is a fundamental concept or work in quantum computing.    

A qubit is a two-state (or two-level) quantum-mechanical system, one of the simplest quantum systems displaying the peculiarity of quantum mechanics. 

This Repo is organized by folder as follows:
- `concepts` - quantum languages, libraries, operations and notation
- `cloud-vendors` - quantum runtime environments (and simulators) organized by cloud vendor (AWS, Azure, GCP and IBM)
- `whitepapers` - academic research papers of interest including quantum programming algorithms and examples
- `o-reilly-book` - code examples, slides and link from bookclub (see section below)

---


## QPUs - Quantum Hardware 

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/d-wave-hardware.png" width=600 align=right>

There are a number of quantum computing vendors.  They produce hardware (quatum computers) which contain a particular number of qubits.    

The qubits are used by quantum computing programming languages or libraries for execution with QPUs.   

One example is the [D-Wave](https://www.dwavesys.com/) company.  Shown here are photos from one of D-Wave's quantum computers.  This computer contains QPU units, which is hardware with qubits (image taken from D-Wave whitepaper). To run quantum programs on quantum hardware, use quantum languages or libraries.  Generally quantum programs are run on quantum simulators prior to being run on quantum hardware due to the cost and time run on live QPUs.


---

## Quantum Programs and IDEs

Shown below are screenshots from a couple of quantum programming development environments.  This is just a small subset of the available options.  Generally these IDEs are either cloud-based (IBM Composer) or downloadable via a SDK (D-Wave).  

- The first example (shown below) shows running a quantum program in the IBM Quantum Composer IDE.  This example runs the `Grover-example` quantum program. The visual environment includes the composer, which shows quantum operations and a number of other visualization tools. 
<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/grover.png" width=800>

- The second example (shown below) is from from D-Wave Systems cloud at https://cloud.dwavesys.com/ and is being run using VSCode as an IDE.  The sample shows a path optimization solver and is called `path` in the D-Wave examples. This IDE is a more traditional environment and doesn't include as many visualization tools for the state of the qubits used in computation.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/dwave-ide.png" width=800>

- Yet another example of a quantum program visualization tools is the `Quantum Playground` - http://www.quantumplayground.net/

---

## Book Club

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/quantum.png" width=300 align=right>

A small group of developers participated a 15-week long book club where we studied the book ['Programming Quantum Computers'](https://learning.oreilly.com/library/view/programming-quantum-computers/9781492039679/) by Eric R. Johnston, Nic Harrigan & Mercedes Gimeno-Segovia. Resources are in the `o-reilly-book` folder of this Repo and linked via the following locations:  

- Our YouTube channel - https://www.youtube.com/channel/UCSmWWIRx1dT2QO5gcCTjKYA
- Jeremy's repo w/experiments - https://github.com/jeremybytes/quantum-programming-experiments
- Our Slack - `program-quantum.slack.com`
- Book Author's Github and programming environment - https://oreilly-qc.github.io/
- Book Author's errata - http://oreilly.com/catalog/0636920167433/errata

---



