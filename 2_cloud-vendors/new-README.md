# Cloud Quantum Computing Vendors - Comparison Guide

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/all.png" width=900>

All major cloud vendors have quantum computing services.  Service offerings vary widely, as the underlying hardware differs depending on which types of quantum computer the particular vendor offers.

- Look in each cloud vendor's folder (i.e. Azure, AWS, etc...) for detail about that particular vendor's offering.  
- IMPORTANT: this section is a very active area of development, please do PRs if you notice new capabilities for a quantum service provided by one these vendors
- Start with the cloud vendor that you are using for regular services - i.e. AWS, etc...

## Quick Comparison Table (2025)

| Provider | Primary Technology | Physical Qubits | Logical Qubits | Key 2024-2025 Achievement |
|----------|-------------------|----------------|----------------|---------------------------|
| **AWS Braket** | Multi-vendor platform | Via partners | Ocelot: 9 cat qubits | First proprietary chip + CUDA-Q integration |
| **Microsoft Azure** | Topological + Partners | Via partners | 24 (world record) | Majorana 1 + highest logical qubit count |
| **IBM Quantum** | Superconducting | 156 (Heron) | In development | 5,000-gate circuits (utility-scale) |
| **Google** | Superconducting | 105 (Willow) | Demonstrated | Error correction threshold breakthrough |
| **IonQ** | Trapped ions | 36 algorithmic | Roadmap: 1,600 by 2028 | 99.9% fidelity + path to 2M qubits |
| **Rigetti** | Superconducting | 84 (Ankaa-3) | In development | Multi-chip architecture + 100+ qubits by 2025 |

## Major Industry Breakthroughs (2024-2025)

### Error Correction Revolution

**The Inflection Point:**
2024-2025 marked the transition from "if quantum error correction will work" to "how to scale it." Multiple providers crossed critical thresholds:

1. **Google Willow** (December 2024)
   - First demonstration of **exponential error reduction** as qubits scale
   - Broke the quantum error correction threshold
   - Proved scalable quantum computing is achievable

2. **Microsoft Logical Qubits** (2024)
   - **800x error rate improvement** over physical qubits
   - Created **24 entangled logical qubits** (world record)
   - 14,000 error-free operations demonstrated

3. **IBM Utility-Scale** (November 2024)
   - 5,000-gate circuits on 156-qubit system
   - Crossed threshold for classical simulation
   - Utility-scale quantum computing achieved

### Hardware Innovation

**Proprietary Quantum Chips:**
- **AWS Ocelot**: Cat qubits with 90% error correction cost reduction
- **Microsoft Majorana 1**: World's first topological quantum processor
- **IBM Flamingo**: 462 qubits with quantum communication links

**Fidelity Records:**
- IonQ: 99.9% two-qubit fidelity (barium qubits)
- Atom Computing: 99.6% (neutral atoms, commercial system)
- Quantinuum: 99.8% (trapped ions)

### Enterprise Readiness

All major platforms launched quantum-ready programs in 2024-2025:
- **AWS Quantum Embark**: Modular advisory program
- **Microsoft Quantum Ready**: Enterprise preparation initiative
- **IBM Quantum Services**: Consulting and solutions

## Platform Selection Guide

### Choose AWS Braket if you want:
✅ Access to **multiple hardware types** (superconducting, ion trap, annealing, photonic, neutral atom)
✅ Integration with **AWS ecosystem** (SageMaker, EC2, S3, Lambda)
✅ **Vendor-neutral** quantum development environment
✅ **GPU+quantum hybrid** computing (CUDA-Q integration)
✅ **Multi-cloud strategy** with hardware flexibility

**Best for:** Organizations exploring multiple quantum modalities, AWS-native companies, research requiring diverse hardware access

### Choose Microsoft Azure Quantum if you want:
✅ **Highest-fidelity logical qubits** (24 entangled - world record)
✅ **Integrated AI+HPC+quantum** platform (Azure Elements)
✅ Access to **topological qubits** (Majorana 1 - unique)
✅ **Enterprise quantum-ready** consulting and programs
✅ **Microsoft ecosystem** integration (.NET, Azure services)

**Best for:** Enterprises needing the most advanced logical qubits, organizations wanting comprehensive quantum-ready support, chemistry/materials science research

### Choose IBM Quantum if you want:
✅ **Utility-scale computing** (5,000-gate circuits)
✅ **Most mature superconducting** platform
✅ **Open-source tools** (Qiskit - most popular framework)
✅ **Largest quantum ecosystem** (200+ institutional partners)
✅ **Clear roadmap to 2029** fault tolerance

**Best for:** Organizations wanting proven quantum advantage, developers preferring open-source, academic institutions, enterprises needing extensive partner ecosystem

### Choose IonQ (via AWS/Azure) if you want:
✅ **Highest physical qubit fidelity** (99.9%)
✅ **All-to-all qubit connectivity** (no architectural limits)
✅ **Quantum networking** capabilities
✅ **Datacenter-ready** systems (room temperature capable)
✅ **Most aggressive roadmap** (2M qubits by 2030)

**Best for:** Applications requiring highest fidelity, organizations interested in quantum networking, enterprises planning long-term quantum strategies

### Choose Rigetti (via AWS) if you want:
✅ **Multi-chip quantum** architecture
✅ **On-premises quantum** systems
✅ Fast **development and iteration** cycles (Fab-1)
✅ Customizable quantum hardware

**Best for:** Quantum algorithm researchers, organizations wanting on-premises systems, superconducting qubit research

## Industry Timeline Convergence

**Consensus Timeline to Fault-Tolerant Quantum Computing:**

| Period | Expected Industry Progress |
|--------|---------------------------|
| **2025** | 100-500 physical qubits; logical qubit demonstrations mature; enterprise pilots expand |
| **2026-2027** | 500-5,000 physical qubits; 10-100 logical qubits; quantum networking demonstrations |
| **2028-2029** | 1,000-20,000 physical qubits; 100-1,000 logical qubits; quantum advantage in specific domains |
| **2030+** | 10,000+ physical qubits; 1,000+ logical qubits; fault-tolerant systems; widespread applications |

**Key Insight:** All major providers are converging on **2028-2030** as the timeframe for practical, fault-tolerant quantum computers capable of solving commercially-relevant problems.

## Access Methods & Tools

### Cloud Web Interfaces
- **IBM Quantum Composer**: Visual circuit builder with drag-and-drop
- **AWS Braket Console**: Unified access to multiple quantum providers
- **Azure Quantum Portal**: Integrated platform with AI/HPC tools

### Programming Frameworks (2025)

| Framework | Provider | Language | Best For |
|-----------|----------|----------|----------|
| **Qiskit** | IBM (open-source) | Python | General quantum computing, most popular |
| **Q#** | Microsoft | Q# | Enterprise applications, .NET integration |
| **Cirq** | Google | Python | Research, custom gate sets |
| **Braket SDK** | AWS | Python | Multi-vendor access, hybrid computing |
| **PennyLane** | Xanadu (open-source) | Python | Quantum machine learning |

### API Access
All platforms support:
- REST APIs for programmatic access
- Python SDKs for quantum development
- Integration with classical computing workflows
- Job submission and result retrieval

## Pricing Models Overview (2025)

### General Pricing Structure

1. **Simulator Time**
   - Usually free or very low cost
   - Local simulators included with SDKs
   - Cloud simulators for larger circuits

2. **QPU Time**
   - **Per-shot pricing**: Cost per measurement
   - **Per-task pricing**: Fixed cost per job submission
   - **Priority access**: Premium tiers for queue priority

3. **Premium Features**
   - Logical qubit systems (higher pricing)
   - Error-corrected quantum computing
   - Enterprise support and consulting
   - Reserved capacity options

### Free Tiers & Credits

- **IBM Quantum**: Open plan with free access to select systems
- **AWS Braket**: Free simulator time; pay for QPU usage
- **Azure Quantum**: $500 free credits for new users
- All platforms: Free educational resources and learning paths

### Enterprise Pricing
- Custom agreements with volume discounts
- Dedicated systems or reserved capacity
- Technical support and consulting
- On-premises deployment options (select providers)

## Hybrid Quantum-Classical Computing (2025 Trend)

**Industry-Wide Shift to Hybrid Architectures:**

All major platforms now emphasize tight integration between quantum and classical computing:

### AWS + NVIDIA
- **CUDA-Q integration** for GPU+quantum workflows
- Accelerated quantum simulation
- Hybrid algorithm development

### Microsoft Azure Elements
- **AI + HPC + Quantum** integration
- Generative chemistry tools
- End-to-end scientific workflows
- Copilot-assisted quantum development

### IBM Quantum-Centric Supercomputing
- Integration with classical HPC clusters
- AI-powered quantum transpilation
- Qiskit Functions for domain applications
- Unified Qiskit framework across all components

### Google (Research Focus)
- Integration with TensorFlow Quantum
- Quantum machine learning frameworks
- Classical post-processing optimization

## Hardware Technology Comparison

### Superconducting Qubits
**Providers:** IBM, Google, AWS (Ocelot), Rigetti

**Pros:**
- Fast gate operations (10s-100s ns)
- Mature fabrication processes
- Most developed error correction research

**Cons:**
- Requires cryogenic cooling (~15 mK)
- Limited coherence times (100s μs)
- Connectivity constraints (nearest neighbor)

**Best for:** Near-term applications, research, development

### Trapped Ions
**Providers:** IonQ, Quantinuum (via Azure)

**Pros:**
- Highest fidelity (99.9%)
- Long coherence times (seconds)
- All-to-all connectivity
- Identical qubits (atomic clocks)

**Cons:**
- Slower gates (μs)
- Challenging to scale (networking required)
- Complex control systems

**Best for:** High-fidelity applications, quantum networking, algorithms requiring high connectivity

### Neutral Atoms
**Providers:** Atom Computing (via Azure), QuEra (via AWS)

**Pros:**
- Scalable to hundreds of qubits
- Reconfigurable architectures
- Good coherence times
- Flexible connectivity

**Cons:**
- Moderate fidelities (improving to 99.6%)
- Complex control systems
- Relatively new technology

**Best for:** Large-qubit-count applications, optimization, simulation

### Topological Qubits
**Providers:** Microsoft (Majorana 1)

**Pros:**
- Hardware-protected from errors
- Potential to scale to millions of qubits
- Fundamentally different approach

**Cons:**
- Still in prototype phase (2025)
- Unproven at scale
- Complex fabrication

**Best for:** Long-term fault tolerance, future scalability

### Photonic Qubits
**Providers:** Xanadu (via AWS)

**Pros:**
- Room temperature operation
- Network compatibility
- Fast operations

**Cons:**
- Limited gate set
- Challenging to scale
- Specialized applications

**Best for:** Quantum communication, specific computational tasks

## Quantum-Safe Cryptography

**Post-Quantum Cryptography (PQC) Transition:**

All major cloud providers are implementing quantum-safe cryptography:

### Timeline
- **2024-2025**: NIST PQC standards finalized and adoption begins
- **2025-2030**: Gradual migration of systems
- **2030-2035**: Widespread deployment of PQC

### Provider Initiatives
- **Microsoft Quantum Safe Program**: Enterprise cryptography transition support
- **AWS**: PQC implementation in services
- **IBM**: Quantum-safe encryption research
- **Google**: Post-quantum algorithms in Chrome

### Why It Matters
- Quantum computers may eventually break current encryption (RSA, ECC)
- "Store now, decrypt later" attacks are concern
- Transition takes years, so starting early is critical

## Educational Resources & Learning Paths

### Free Learning Platforms

**IBM Quantum Learning:**
- Comprehensive courses from beginner to advanced
- Qiskit textbook (free, open-source)
- Quantum badges and certifications
- Regular challenges and competitions

**AWS Braket Digital Learning Plan:**
- Free structured learning program
- Earn digital credentials
- Hands-on with real quantum hardware
- No prior quantum knowledge required

**Microsoft Learn:**
- Quantum computing fundamentals
- Q# programming tutorials
- Azure Quantum workshops
- Integration with classical computing

### Academic Programs
- **IBM Quantum Network**: 200+ university partnerships
- **AWS Research Programs**: Academic grants and access
- **Microsoft Academic Partnerships**: University collaborations
- **Quantum computing degrees**: Growing number of universities

### Certifications & Credentials
- IBM Quantum badges
- Cloud provider certifications
- Academic quantum computing courses
- Professional quantum developer programs

## Research & Open Source

### Open Source Frameworks

**Qiskit (IBM):**
- Most popular quantum framework
- 500,000+ users globally
- Comprehensive documentation
- Active community
- GitHub: https://github.com/Qiskit/

**Cirq (Google):**
- Research-oriented framework
- Custom gate operations
- Integration with TensorFlow Quantum
- GitHub: https://github.com/quantumlib/Cirq

**PennyLane (Xanadu):**
- Quantum machine learning focus
- Cross-platform compatibility
- Differentiable quantum computing
- GitHub: https://github.com/PennyLaneAI/pennylane

**Amazon Braket SDK:**
- Multi-vendor access
- Python-native interface
- Open-source
- GitHub: https://github.com/aws/amazon-braket-sdk-python

### Academic Access Programs
- Grants for quantum research
- Free or discounted quantum computing time
- Collaboration opportunities
- Publication support

## Application Domains (2025)

### Chemistry & Materials Science
**Status:** Most mature application area
- Molecular simulation
- Drug discovery
- Catalyst design
- Battery materials

**Leaders:** Azure Quantum Elements, IBM Quantum

### Optimization
**Status:** Near-term practical applications
- Portfolio optimization (finance)
- Supply chain and logistics
- Resource allocation
- Scheduling problems

**Leaders:** All platforms; D-Wave for specific problems

### Machine Learning
**Status:** Active research, emerging applications
- Quantum neural networks
- Feature mapping
- Classification problems
- Generative models

**Leaders:** IBM Qiskit, PennyLane, TensorFlow Quantum

### Cryptography & Security
**Status:** Long-term concern, immediate preparation
- Post-quantum cryptography
- Quantum key distribution
- Random number generation
- Secure communications

**Leaders:** IonQ (quantum networking), Microsoft (quantum-safe)

### Financial Services
**Status:** Pilot projects and research
- Risk analysis
- Derivatives pricing
- Fraud detection
- Portfolio optimization

**Partners:** Major banks with all quantum providers

## Future Outlook (2025-2030)

### 2025 Focus Areas
- Scaling logical qubit counts
- Improving error correction efficiency
- Developing quantum algorithms for practical problems
- Building enterprise quantum applications
- Expanding quantum networking

### 2026-2029 Goals
- Demonstrating quantum advantage in multiple domains
- Industry-specific quantum solutions in production
- Quantum networking between processors
- Integrated quantum-classical workflows at scale
- Hundreds to thousands of logical qubits

### 2030+ Vision
- Quantum internet infrastructure
- Cryptographically-relevant systems operational
- Mainstream quantum computing applications
- Quantum-enhanced AI and machine learning
- Thousands of logical qubits enabling complex algorithms

## Key Takeaways for 2025

### For Developers:
✅ Now is the time to **learn quantum computing** - practical systems arriving by 2028-2030
✅ **Pick a platform** and start experimenting with free resources
✅ Focus on **hybrid algorithms** combining quantum and classical computing
✅ Qiskit is the most popular framework to learn first

### For Enterprises:
✅ **Evaluate quantum readiness** through vendor programs (Quantum Embark, Quantum Ready)
✅ Identify potential **use cases** in your industry
✅ Start **small pilots** to understand the technology
✅ Prepare for **quantum-safe cryptography** transition

### For Researchers:
✅ Multiple quantum platforms now at **utility scale**
✅ **Error correction** is proven - focus on algorithms
✅ Opportunities in **quantum networking** and distributed computing
✅ **Hybrid approaches** showing most promise near-term

## Directory Structure

- `/aws-braket/` - Amazon Braket quantum service (Ocelot chip, multi-vendor)
- `/azure/` - Microsoft Azure Quantum (Majorana 1, logical qubits)
- `/ibm/` - IBM Quantum (Heron, utility-scale, Qiskit)
- `/google/` - Google Quantum AI (Willow chip, error correction)
- `/ionq/` - IonQ trapped-ion quantum (highest fidelity, networking)
- `/rigetti/` - Rigetti superconducting systems (multi-chip architecture)

---

## Conclusion

**The quantum computing industry has reached an inflection point.** 

The 2024-2025 breakthroughs in error correction, logical qubits, and utility-scale computing have transformed quantum computing from a research curiosity to an engineering challenge with a clear path to practical systems.

**Key Industry Consensus:**
- Error correction **works** in practice
- Fault-tolerant quantum computing is **achievable** by 2028-2030
- Focus has shifted from "if" to "**when**" and "**how**"
- Hybrid quantum-classical systems will be the **norm**

**What This Means:**
- Enterprises should **prepare now** for quantum advantage
- Developers should **start learning** quantum programming
- The quantum computing industry will see **rapid growth** through 2030
- Investment and talent are flowing into the quantum sector

**The quantum future is not just coming — it's already here.**

---

*For detailed information on each platform, see the individual README files in their respective directories.*
