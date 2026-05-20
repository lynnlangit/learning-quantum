# Cloud Quantum Computing Vendors - Comparison Guide

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/all.png" width=900>

All major cloud vendors have quantum computing services.  Service offerings vary widely, as the underlying hardware differs depending on which types of quantum computer the particular vendor offers.

- Look in each cloud vendor's folder (i.e. Azure, AWS, etc...) for detail about that particular vendor's offering.  
- IMPORTANT: this section is a very active area of development, please do PRs if you notice new capabilities for a quantum service provided by one these vendors
- Start with the cloud vendor that you are using for regular services - i.e. AWS, etc...

## Quick Comparison Table (2026)

| Provider | Primary Technology | Physical Qubits | Logical Qubits | Key 2026 Achievement |
|----------|-------------------|----------------|----------------|----------------------|
| **AWS Braket** | Multi-vendor platform | Via partners | Ocelot: cat qubits | Ocelot chip — 90% error correction cost reduction |
| **Microsoft Azure** | Topological + Partners | Via partners | 24 (world record) | Magne quantum computer co-design with Atom Computing |
| **IBM Quantum** | Superconducting | 120 (Nighthawk) | In development | Nighthawk processor — 120 qubits, 350μs T1 coherence |
| **Google** | Superconducting | 105 (Willow) | Demonstrated | Willow Early Access Program for researchers |
| **IonQ** | Trapped ions | 256 (6th gen) | Roadmap: 2028 | First 256-qubit chip-based system sold |
| **Rigetti** | Superconducting | 108 (Cepheus) | In development | Cepheus-1-108Q: 12-chiplet modular system |

## Industry Breakthroughs (2024-2026)

Quantum computing crossed major thresholds in 2024-2026: error correction proven at scale, 94 logical qubits demonstrated beyond break-even, and AI-powered tools accelerating development. Industry consensus targets fault-tolerant systems by 2028-2030.

For detailed coverage, see [Breakthroughs](../1_concepts/breakthroughs/README.md).

## Platform Selection Guide

### Choose AWS Braket if you want:
✅ Access to **multiple hardware types** (superconducting, ion trap, annealing, photonic, neutral atom).<br>
✅ Integration with **AWS ecosystem** (SageMaker, EC2, S3, Lambda).<br>
✅ **Vendor-neutral** quantum development environment.<br>
✅ **GPU+quantum hybrid** computing (CUDA-Q integration).<br>
✅ **Multi-cloud strategy** with hardware flexibility. 

**Best for:** Organizations exploring multiple quantum modalities, AWS-native companies, research requiring diverse hardware access

### Choose Microsoft Azure Quantum if you want:
✅ **Highest-fidelity logical qubits** (24 entangled - world record).<br>
✅ **Integrated AI+HPC+quantum** platform (Azure Elements).<br>
✅ Access to **topological qubits** (Majorana 1 - unique).<br>
✅ **Enterprise quantum-ready** consulting and programs.<br>
✅ **Microsoft ecosystem** integration (.NET, Azure services). 

**Best for:** Enterprises needing the most advanced logical qubits, organizations wanting comprehensive quantum-ready support, chemistry/materials science research

### Choose IBM Quantum if you want:
✅ **Utility-scale computing** (5,000-gate circuits).<br>
✅ **Most mature superconducting** platform.<br>
✅ **Open-source tools** (Qiskit - most popular framework).<br>
✅ **Largest quantum ecosystem** (200+ institutional partners).<br>
✅ **Clear roadmap to 2029** fault tolerance. 

**Best for:** Organizations wanting proven quantum advantage, developers preferring open-source, academic institutions, enterprises needing extensive partner ecosystem

### Choose IonQ (via AWS/Azure) if you want:
✅ **Highest physical qubit fidelity** (99.9%).<br>
✅ **All-to-all qubit connectivity** (no architectural limits).<br>
✅ **Quantum networking** capabilities.<br>
✅ **Datacenter-ready** systems (room temperature capable).<br>
✅ **Most aggressive roadmap** (2M qubits by 2030). 

**Best for:** Applications requiring highest fidelity, organizations interested in quantum networking, enterprises planning long-term quantum strategies

### Choose Rigetti (via AWS) if you want:
✅ **Multi-chip quantum** architecture.<br>
✅ **On-premises quantum** systems.<br>
✅ Fast **development and iteration** cycles (Fab-1).<br>
✅ Customizable quantum hardware. 

**Best for:** Quantum algorithm researchers, organizations wanting on-premises systems, superconducting qubit research

## Industry Timeline Convergence

**Consensus Timeline to Fault-Tolerant Quantum Computing:**

| Period | Expected Industry Progress |
|--------|---------------------------|
| **2026** | 100-500 physical qubits; 24-94 logical qubits demonstrated; AI-for-quantum tooling matures; enterprise pilots expand |
| **2027-2028** | 500-5,000 physical qubits; 100+ logical qubits; quantum networking demonstrations |
| **2029-2030** | 1,000-20,000 physical qubits; 1,000+ logical qubits; quantum advantage in specific domains |
| **2030+** | 10,000+ physical qubits; fault-tolerant systems; widespread applications |

**Key Insight:** All major providers are converging on **2028-2030** as the timeframe for practical, fault-tolerant quantum computers capable of solving commercially-relevant problems.

## Access Methods & Tools

### Cloud Web Interfaces
- **IBM Quantum Composer**: Visual circuit builder with drag-and-drop
- **AWS Braket Console**: Unified access to multiple quantum providers
- **Azure Quantum Portal**: Integrated platform with AI/HPC tools

### Programming Frameworks (2026)

| Framework | Provider | Language | Best For |
|-----------|----------|----------|----------|
| **Qiskit** | IBM (open-source) | Python | General quantum computing, most popular |
| **Q#** | Microsoft | Q# | Enterprise applications, .NET integration |
| **Cirq** | Google | Python | Research, custom gate sets |
| **Braket SDK** | AWS | Python | Multi-vendor access, hybrid computing |
| **PennyLane** | Xanadu (open-source) | Python | Quantum machine learning |
| **CUDA-Q** | NVIDIA (open-source) | Python/C++ | GPU-accelerated hybrid quantum-classical |

### API Access
All platforms support:
- REST APIs for programmatic access
- Python SDKs for quantum development
- Integration with classical computing workflows
- Job submission and result retrieval

## Pricing Models Overview (2026)

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

## Hybrid Quantum-Classical Computing (2026)

**Industry-Wide Shift to Hybrid Architectures:**

All major platforms now emphasize tight integration between quantum and classical computing:

### AWS + NVIDIA
- **CUDA-Q integration** for GPU+quantum workflows
- Accelerated quantum simulation
- Hybrid algorithm development
- **[NVIDIA Ising models](https://nvidianews.nvidia.com/news/nvidia-launches-ising-the-worlds-first-open-ai-models-to-accelerate-the-path-to-useful-quantum-computers)** for AI-powered quantum calibration and error correction

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
For a detailed comparison of qubit technologies (superconducting, trapped ions, neutral atoms, topological, photonic), see [Hardware Comparison](hardware-comparison.md).

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
For free learning platforms, academic programs, certifications, and open-source frameworks, see [Educational Resources](educational-resources.md).

## Application Domains (2026)
For quantum computing use cases across chemistry, optimization, ML, cryptography, and finance, see [Application Domains](application-domains.md).

## Future Outlook (2026-2030)

### 2026 Focus Areas
- Scaling logical qubit counts beyond break-even
- AI-powered quantum error correction (NVIDIA Ising, others)
- Developing quantum algorithms for practical problems
- Building enterprise quantum applications
- Expanding quantum networking

### 2027-2029 Goals
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

## Key Takeaways for 2026

### For Developers:
✅ Now is the time to **learn quantum computing** - practical systems arriving by 2028-2030.<br>
✅ **Pick a platform** and start experimenting with free resources.<br>
✅ Focus on **hybrid algorithms** combining quantum and classical computing.<br>
✅ Qiskit is the most popular framework to learn first. 

### For Enterprises:
✅ **Evaluate quantum readiness** through vendor programs (Quantum Embark, Quantum Ready).<br>
✅ Identify potential **use cases** in your industry.<br>
✅ Start **small pilots** to understand the technology.<br>
✅ Prepare for **quantum-safe cryptography** transition. 

### For Researchers:
✅ Multiple quantum platforms now at **utility scale**.<br>
✅ **Error correction** is proven - focus on algorithms.<br>
✅ Opportunities in **quantum networking** and distributed computing.<br>
✅ **Hybrid approaches** showing most promise near-term. 

## Directory Structure

- `/aws-braket/` - Amazon Braket quantum service (Ocelot chip, multi-vendor)
- `/azure/` - Microsoft Azure Quantum (Majorana 1, logical qubits)
- `/ibm/` - IBM Quantum (Heron, utility-scale, Qiskit)
- `/google/` - Google Quantum AI (Willow chip, error correction)
- `/ionq/` - IonQ trapped-ion quantum (highest fidelity, networking)
- `/rigetti/` - Rigetti superconducting systems (multi-chip architecture)

---

## Conclusion

**2026 marks the year AI-for-quantum became mainstream and logical qubits crossed the break-even threshold.**

Building on the 2024-2025 breakthroughs in error correction and utility-scale computing, 2026 has seen AI models (NVIDIA Ising) accelerate quantum error correction, Quantinuum demonstrate 94 logical qubits beyond break-even, and new processors from IBM, IonQ, and Rigetti push qubit counts and coherence times to new highs.

**Key Industry Consensus:**
- Logical qubits now **outperform** physical qubits (beyond break-even)
- AI-powered tools are **accelerating** quantum development
- Fault-tolerant quantum computing is **on track** for 2028-2030
- Hybrid quantum-classical systems are the **standard architecture**

**What This Means:**
- Enterprises should **prepare now** for quantum advantage
- Developers should **start learning** quantum programming
- AI-for-quantum is a **critical new skill** area
- The quantum computing industry will see **rapid growth** through 2030

**The quantum future is not just coming — it's already here.**

---

*For detailed information on each platform, see the individual README files in their respective directories.*
