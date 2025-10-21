# Quatum Computing Cloud Vendors - IBM

STATUS: AVAILABLE

IBM's offer includes a number of tools, languages and simulators, including IBM Quantum Composer and IBM Quantum Lab.
Languages include OPENQASM and Qiskit.

- IBM Quantum computing - https://quantum-computing.ibm.com/
- Qiskit textbook - https://qiskit.org/textbook/ch-states/introduction.html
- Sample from IBM Quantum Composer examples.  Example shown below is the `Grover-example`.
- Roadmap and direction summary article - https://thenextweb.com/news/ibms-new-qiskit-primitives-make-easier-develop-algorithms-quantum-computers

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/grover.png" width=800>

---

## Major Updates (2024-2025)

### IBM Heron Processor Evolution

**Upgraded Specifications (November 2024):**
- **156 qubits** (upgraded from 133 qubits)
- **Capable of running 5,000 two-qubit gate operations** - nearly double the 2023 capacity
- Heavy-hex lattice topology with tunable coupler architecture
- Significantly improved fidelity and noise suppression
- **150,000+ circuit layer operations per second (CLOPS)** - industry-leading throughput
- Powered by next-generation Qiskit Runtime engine with parametric compilation

**Significance:** IBM Heron is the first quantum system to reliably execute 5,000-gate circuits, fulfilling IBM's roadmap promise from 2023 and marking the achievement of **utility-scale quantum computing**.

**Technical Improvements:**
- Enhanced qubit coherence times
- Improved gate fidelities across all operations
- Better connectivity and reduced crosstalk
- Advanced calibration and tuning procedures

**More info:** https://nand-research.com/insights-from-the-2024-ibm-quantum-developer-conference/

### 5,000-Gate Milestone: Utility-Scale Computing Achieved

**What It Means:**
The 5,000-gate milestone represents a critical threshold where quantum circuits become too complex for exact classical simulation, entering the **"utility scale"** era where quantum computers can explore computational spaces beyond classical reach.

**Achievement Details:**
- Demonstrated at IBM Quantum Developer Conference (November 2024)
- Runs reliably on 156-qubit IBM Heron processor
- Enables execution of more complex quantum algorithms
- Opens door to practical quantum applications

**Impact:** This crosses the boundary from experimental to utility-scale quantum computing, allowing researchers and developers to explore problems that were previously inaccessible.

### Modular Quantum Architecture (2024-2025)

IBM is pioneering modular approaches to scaling quantum computers:

**Flamingo Processor (Expected 2025):**
- **462 qubits** with built-in quantum communication links
- Features pioneering **l-couplers** for long-range CNOT gates between chips
- Demonstrated proof-of-concept with 3.5% error rates for 235ns cross-chip operations
- Production release scheduled for 2025
- Enables quantum parallelization and distributed quantum computing

**Crossbill Prototype (2024):**
- Connects **three Heron chips** via m-couplers
- Demonstrates modular, high-density quantum systems
- Proof-of-concept for multi-chip scaling
- Precursor to thousand-qubit systems

**Kookaburra Processor (2025 Roadmap):**
- Next-generation processor integrating all scaling advances
- Will incorporate lessons from Flamingo and Crossbill
- Expected to push boundaries of qubit count and connectivity

**Vision:** IBM's modular approach mirrors classical computing's evolution, enabling scaling beyond single-chip limitations.

**More info:** https://www.ibm.com/quantum/blog/ibm-quantum-roadmap-2025

### Global Expansion (2024-2025)

**IBM Quantum Data Center - Europe (October 2024):**
- **First IBM Quantum Data Center outside North America**
- Opened in Germany with Chancellor Olaf Scholz in attendance
- Provides European organizations with local quantum computing access
- Supports EU data sovereignty requirements
- Multiple IBM Quantum systems available

**IBM Quantum System Two - Japan:**
- Installed at **RIKEN** national research laboratory in Kobe
- Co-located with **Fugaku supercomputer** (world's fastest in 2020-2021)
- Enables cutting-edge quantum-classical hybrid supercomputing research
- Partnership with Japan's premier scientific institution

**National Quantum Algorithm Center - Chicago (January 2025):**
- Anchored by next-generation **IBM Quantum System Two**
- Located in **Illinois Quantum and Microelectronics Park**
- Partnership with Illinois universities and industries
- Focus: Advancing useful quantum applications
- Accelerating quantum algorithm development for real-world problems

**More info:** https://newsroom.ibm.com/announcements

### IBM Quantum Roadmap to 2029

**The Journey to Fault-Tolerant Quantum Computing**

IBM has published one of the industry's most detailed roadmaps to fault-tolerant quantum computing:

| Year | Milestone | Details |
|------|-----------|---------|
| **2024** | ✅ Utility-scale achieved | 156-qubit Heron, 5,000-gate circuits |
| **2025** | 🔄 Flamingo & Kookaburra | 462+ qubits, quantum communication links |
| **2026** | 📅 Error mitigation maturity | Advanced techniques in Qiskit Runtime |
| **2027** | 📅 Multi-chip systems | Distributed quantum computing at scale |
| **2028** | 📅 Quantum parallelization | Multiple processors working together |
| **2029** | 🎯 **Fault-tolerant QC** | **~200 logical qubits**, quantum advantage |

**CEO Vision (March 2025):**

IBM CEO Arvind Krishna stated: *"We feel over the next three, four, five years — I give myself till the end of the decade — we will see something remarkable happen on that front and I'm really happy where our team is."*

**Technical Goals:**
- Extend qubit **coherence times to 1 millisecond** (currently ~100 microseconds)
- Demonstrate quantum advantage in multiple application domains
- Build quantum-centric supercomputers integrating quantum + classical + AI

**More info:** https://thequantuminsider.com/2025/03/03/ibm-ceo-sees-something-remarkable-happening-in-quantum-over-next-three-to-five-years/

## Qiskit - Quantum Software Stack (Updated 2025)

### Qiskit SDK 1.0+ Features

Qiskit 1.0 launched in 2024 represents a major evolution of the world's most popular quantum computing framework:

**Key Improvements:**
- **Utility-scale performance** optimizations
- **ISA (Instruction Set Architecture)** circuit requirements for hardware execution
- **Parametric circuit compilation** for faster execution
- **Advanced error mitigation** techniques built-in
- **AI-powered transpilation** using machine learning
- **Improved stability** and modular architecture
- **Faster execution** for quantum-classical hybrid algorithms

### Qiskit Runtime Evolution (2024-2025)

**Enhanced Capabilities:**
- **Parallelized quantum processors**: Automatic distribution of work
- **Execution modes**: Optimized for reliability, speed, or cost
- **Integration with classical HPC**: Seamless hybrid computing
- **Error mitigation primitives**: Built into the runtime
- **Improved throughput**: 150,000+ CLOPS on Heron systems

**New Tools (2024-2025):**
- **Qiskit Code Assistant** (Preview for Premium Plan users): AI-powered coding assistance
- **Qiskit Serverless**: Distributed quantum computing workflows
- **Qiskit Functions**: Partner-developed domain-specific applications

### Qiskit Primitives V2

Modern quantum applications use **Primitives** - high-level interfaces abstracting hardware details:

**Sampler V2:**
- Executes quantum circuits and returns measurement outcomes
- Optimized for sampling probability distributions
- Built-in error mitigation

**Estimator V2:**
- Computes expectation values of observables
- Essential for variational algorithms (VQE, QAOA)
- Automatic error suppression

```python
from qiskit_ibm_runtime import QiskitRuntimeService, Session, SamplerV2, EstimatorV2
from qiskit import QuantumCircuit
from qiskit.quantum_info import SparsePauliOp

# Connect to IBM Quantum
service = QiskitRuntimeService(channel="ibm_quantum")

# Create session with backend
with Session(service=service, backend="ibm_osaka") as session:
    
    # Use Sampler for circuit execution
    sampler = SamplerV2(session=session)
    circuit = QuantumCircuit(2)
    circuit.h(0)
    circuit.cx(0, 1)
    circuit.measure_all()
    
    job = sampler.run([circuit], shots=10000)
    result = job.result()
    print(f"Counts: {result[0].data.c.get_counts()}")
    
    # Use Estimator for expectation values
    estimator = EstimatorV2(session=session)
    observable = SparsePauliOp(["ZZ", "XX"])
    
    job = estimator.run([(circuit, observable)])
    result = job.result()
    print(f"Expectation: {result[0].data.evs}")
```

## Available Systems (As of 2025)

### Production Quantum Computers

| System Name | Qubits | Technology | Access Level | Location |
|-------------|--------|------------|--------------|----------|
| **ibm_heron** | 156 | Heavy-hex superconducting | Premium | US |
| **ibm_osaka** | 127 | Heavy-hex superconducting | All users | US |
| **ibm_kyoto** | 127 | Heavy-hex superconducting | Open plan | US |
| **European Systems** | Varies | Superconducting | Premium/Open | Germany |

### IBM Quantum System Two

- **Modular architecture** supporting multiple quantum processors
- **Deployed locations**: RIKEN (Japan), Illinois (US), future sites
- **Classical control integration**: Seamless hybrid computing
- **Cryogenic infrastructure**: Supports future processor scaling
- **Next-generation platform** for fault-tolerant quantum computing

### Simulators

- **Cloud-based simulators**: Available for algorithm development
- **Local simulators**: Qiskit Aer for laptop/workstation use
- **Specialized simulators**: Noise models, stabilizer circuits, etc.

## IBM Quantum Network (Updated 2025)

### Scale & Reach
- **200+ partners** worldwide (universities, research institutions, Fortune 500 companies)
- **Most extensive quantum ecosystem** in the industry
- **Academic Hub** for quantum computing research and education

### Academic Partners
- Over 150 universities worldwide
- New partnerships: RIKEN (Japan), Illinois universities, European research centers
- Access to quantum systems for research and education

### Enterprise Partners
- Fortune 500 companies across all industries
- Focus sectors: Finance, pharmaceuticals, materials science, logistics, energy
- Custom quantum solutions and consulting

### Government & National Labs
- **National Quantum Algorithm Center** (Chicago)
- Various defense and intelligence agencies
- International government partnerships

### IBM Quantum Hubs
- Regional centers of excellence
- Providing local access and support
- Collaborative research environments

## IBM Quantum Developer Conference 2024

**First-Ever IBM Quantum Developer Conference (November 13-15, 2024):**

Key announcements and highlights:
- **Heron processor** upgrade to 156 qubits
- **5,000-gate capability** demonstration
- **Flamingo and Crossbill** prototype revelations
- **Qiskit Code Assistant** preview launch
- **Updated 2025 roadmap** presentation
- **Developer tools** and ecosystem expansion

**Apply for future conferences:** https://docs.quantum.ibm.com/

## IBM Quantum Challenge (Annual Event)

**2024 IBM Quantum Challenge (June 5-15):**
- Tested latest **Qiskit SDK 1.0** features
- Utility-scale experiments and problems
- Open to participants of **all skill levels**
- Certificates and badges for completion
- Global community participation

**Register for upcoming challenges:** https://quantum.cloud.ibm.com/challenges

## Strategic Partnerships (2024-2025)

### Pasqal Collaboration (November 2024)

**Quantum-Centric Supercomputing Initiative:**
- Partnership between IBM (superconducting) and Pasqal (neutral atoms)
- Developing **unified Qiskit programming model**
- Integrating diverse quantum hardware + classical HPC
- Building frameworks for advanced workflows
- Goal: Heterogeneous quantum-classical computing systems

### Semiconductor Partnerships

**Rapidus Corporation (Japan, June 2024):**
- Collaboration on **2nm-generation semiconductors**
- Chiplet packaging technology development
- Advancing quantum chip fabrication capabilities
- Joint development agreement

**NSTC EUV Accelerator (December 2024):**
- **$825 million federal investment** under CHIPS and Science Act
- Based at **Albany NanoTech Complex** (IBM's semiconductor research hub)
- Developing next-generation chip manufacturing
- Supporting quantum hardware advancement
- EUV lithography for quantum circuits

## Getting Started with IBM Quantum

### Access IBM Quantum

**Three Access Tiers:**

1. **Open Plan** (Free)
   - Access to select quantum systems (ibm_kyoto, ibm_osaka)
   - Cloud-based simulators
   - Qiskit SDK and documentation
   - Learning resources

2. **Premium Plan**
   - Priority access to all quantum systems
   - Access to newest, most advanced processors
   - Qiskit Code Assistant (AI-powered coding)
   - Enhanced support
   - Reserved capacity options

3. **Enterprise Plan**
   - Custom solutions for organizations
   - Dedicated systems available
   - Quantum consulting services
   - On-premises options

**Sign up:** https://quantum.ibm.com/

### Installation (Updated 2025)

```bash
# Install latest Qiskit SDK (1.0+)
pip install qiskit --upgrade

# Install IBM Quantum Runtime
pip install qiskit-ibm-runtime --upgrade

# Install local simulator
pip install qiskit-aer --upgrade

# Optional: visualization tools
pip install qiskit-visualization --upgrade
```

### Hello Quantum - 2025 Edition

```python
from qiskit import QuantumCircuit
from qiskit_ibm_runtime import QiskitRuntimeService, SamplerV2
from qiskit.transpiler.preset_passmanagers import generate_preset_pass_manager

# Initialize IBM Quantum service
service = QiskitRuntimeService()

# Select backend (least busy quantum computer)
backend = service.least_busy(operational=True, simulator=False)
print(f"Using backend: {backend.name}")

# Create quantum circuit
circuit = QuantumCircuit(2)
circuit.h(0)              # Hadamard gate on qubit 0
circuit.cx(0, 1)          # CNOT gate
circuit.measure_all()     # Measure all qubits

# Transpile for target backend (ISA circuit requirement)
pm = generate_preset_pass_manager(target=backend.target, optimization_level=3)
isa_circuit = pm.run(circuit)

print(f"Original gates: {circuit.count_ops()}")
print(f"Transpiled gates: {isa_circuit.count_ops()}")

# Execute on quantum hardware using Sampler V2
sampler = SamplerV2(backend=backend)
job = sampler.run([isa_circuit], shots=1000)

# Get results
result = job.result()
counts = result[0].data.c.get_counts()

print(f"\nMeasurement results from {backend.name}:")
print(counts)

# Expected: roughly 50% |00⟩ and 50% |11⟩ (Bell state)
```

### Advanced Example: Variational Quantum Eigensolver (VQE)

```python
from qiskit_ibm_runtime import EstimatorV2, Session
from qiskit.circuit.library import TwoLocal
from qiskit.quantum_info import SparsePauliOp
from scipy.optimize import minimize
import numpy as np

# Define Hamiltonian (example: H2 molecule)
hamiltonian = SparsePauliOp.from_list([
    ("II", -1.052373245772859),
    ("IZ", 0.39793742484318045),
    ("ZI", -0.39793742484318045),
    ("ZZ", -0.01128010425623538),
    ("XX", 0.18093119978423156)
])

# Create parameterized circuit (ansatz)
ansatz = TwoLocal(2, 'ry', 'cz', entanglement='linear', reps=2)

# Set up IBM Quantum backend
service = QiskitRuntimeService()
backend = service.backend("ibm_osaka")

# Use Estimator V2 in a session
with Session(service=service, backend=backend) as session:
    estimator = EstimatorV2(session=session)
    
    def cost_function(params):
        job = estimator.run([(ansatz, hamiltonian, params)])
        result = job.result()
        return result[0].data.evs[0]
    
    # Optimize
    initial_params = np.random.random(ansatz.num_parameters)
    result = minimize(cost_function, initial_params, method='COBYLA')
    
    print(f"Ground state energy: {result.fun}")
```

## Resources

### Official IBM Quantum Resources
- **Documentation**: https://docs.quantum.ibm.com/
- **Quantum Blog**: https://www.ibm.com/quantum/blog/
- **Learning Platform**: https://learning.quantum.ibm.com/
- **Qiskit Textbook**: https://qiskit.org/textbook/ (free, comprehensive)
- **GitHub**: https://github.com/Qiskit/
- **Community Forum**: https://quantumcomputing.stackexchange.com/

### 2024-2025 Key Papers & Announcements
- **IBM Quantum Roadmap** (Updated 2024): Path to 2029 fault tolerance
- **Heron 5,000-gate milestone** (November 2024): Utility-scale achievement
- **Flamingo architecture**: Multi-chip quantum systems
- **Qiskit 1.0 documentation**: Complete framework overhaul

### Educational Programs
- **IBM Quantum Learning**: Free courses and tutorials
- **Quantum Badges**: Earn credentials through challenges
- **Quantum Network Member Resources**: Curated learning paths for partners
- **Academic Research Program**: University collaborations
- **Qiskit Global Summer School**: Annual intensive program

### Code Examples & Tutorials
- Qiskit patterns and best practices
- Quantum machine learning tutorials
- Quantum optimization examples
- Error mitigation techniques
- Hybrid quantum-classical algorithms

## Performance Metrics (2025)

### EPLG (Error Per Layered Gate)
IBM introduced EPLG as a comprehensive quality metric:
- Measures error rates across full circuits (not just individual gates)
- Better predictor of algorithm performance
- Accounts for real-world circuit execution

### CLOPS (Circuit Layer Operations Per Second)
- **150,000+ CLOPS** achieved on Heron systems (2024)
- Measures throughput of quantum-classical systems
- Critical for utility-scale applications
- Improved through parametric compilation and runtime optimization

### Quantum Volume
- Historical metric for overall system capability
- IBM quantum systems regularly achieve high quantum volumes
- Being supplemented by more comprehensive metrics

## Pricing (Updated 2025)

### IBM Quantum Plans

**Open Plan (Free):**
- Access to select quantum systems
- Simulator time included
- Learning resources
- Community support

**Premium Plan:**
- Contact IBM for pricing
- Priority queue access to all systems
- Qiskit Code Assistant (AI-powered)
- Advanced technical support
- Reserved capacity options

**Enterprise Plan:**
- Custom pricing for organizations
- Dedicated quantum systems available
- On-premises deployment options
- Quantum consulting services
- Custom SLAs

### Usage-Based Components
- Quantum runtime seconds on hardware
- Classical compute integration
- Premium backend access
- Support and consulting services

**More info:** Contact IBM Quantum sales team

## Key Differentiators

1. **Most extensive quantum ecosystem** (200+ institutional partners)
2. **Proven utility-scale computing** (5,000-gate circuits on 156-qubit system)
3. **Modular quantum architecture** (multi-chip systems for scaling)
4. **Open-source leadership** (Qiskit - industry-standard SDK)
5. **Clear roadmap to 2029 fault tolerance** (~200 logical qubits)
6. **Global infrastructure** (US, Europe, Japan quantum data centers)
7. **Longest track record** (cloud quantum computing since 2016)
8. **Enterprise focus** (Fortune 500 customers, proven applications)

## Application Focus Areas

### Materials Discovery
- New materials for batteries, catalysts, semiconductors
- Property prediction and optimization
- Quantum chemistry simulations

### Drug Development
- Molecular simulation for pharmaceuticals
- Protein folding and interactions
- Drug candidate screening

### Financial Modeling
- Portfolio optimization
- Risk analysis
- Derivatives pricing
- Fraud detection

### Supply Chain & Logistics
- Route optimization
- Resource allocation
- Scheduling problems
- Network optimization

### Machine Learning
- Quantum neural networks
- Feature mapping
- Classification and clustering
- Quantum kernel methods

## Long-Term Strategy: Quantum-Centric Supercomputing

IBM's vision for the future combines three pillars:

1. **Scalable Quantum Processors**
   - Superconducting qubits with improving fidelity
   - Modular multi-chip architecture
   - Path to millions of operations

2. **Classical Supercomputers**
   - HPC integration for hybrid algorithms
   - Pre- and post-processing
   - Error mitigation and correction

3. **AI-Powered Tools**
   - Quantum circuit optimization using ML
   - Error mitigation strategies
   - Algorithm discovery and design

**Unified Software Stack (Qiskit):**
- Single framework for all three components
- Seamless orchestration
- Developer-friendly APIs

**Target Applications:**
- Problems requiring all three technologies working together
- Commercially valuable quantum advantage
- Transformative impact on industries

---

*IBM Quantum remains the industry leader in superconducting quantum computing with the most comprehensive roadmap to fault-tolerant systems by 2029. The achievement of utility-scale computing in 2024 marks quantum computing's transition from pure research to practical applications, with IBM at the forefront of this transformation.*

**Get Started:** https://quantum.ibm.com/

**Learn More:** https://www.ibm.com/quantum/



