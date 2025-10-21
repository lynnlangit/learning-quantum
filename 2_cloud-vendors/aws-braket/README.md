# Quantum Computing on AWS

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/aws-hardware.png" width=400 align=left>  

AWS partners with a number of quantum computer manufacturers (shown to the left) to provide customers access to qubits and QPUs.  The AWS quantum programming service is called Amazon Braket.  

Below is an example architecture which perform quantum calculations on the AWs cloud using a Amazon Braket (SageMaker) notebook, S3 file storage bucket, the Amazon Braket services (which includes managed quantum simulators) & executes on partner quantum QPUs.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/aws-braket-arch.png" width=800>

## Amazon Braket

STATUS: AVAILABLE

Amazon Braket is a fully managed quantum computing service that helps researchers and developers get started with the technology to accelerate research and discovery. Amazon Braket provides a development environment for you to explore and build quantum algorithms, test them on quantum circuit simulators, and run them on different quantum hardware technologies (IonQ, D-Wave...)

### Basics

- :book: AWS Braket - https://aws.amazon.com/braket/
- 📘 Example AWS Braket Jupyter notebooks here --> https://github.com/aws/amazon-braket-examples
- 📖 AWS Quantum blog - https://aws.amazon.com/blogs/quantum-computing
- :octocat: Learn more about AWS Braket - https://github.com/lynnlangit/Hello-AWS-Data-Services/tree/master/7_quantum-computing

### Learn More and Tools 
- :book: AWS Braket near real-time pricing tools - https://docs.aws.amazon.com/braket/latest/developerguide//braket-pricing.html
- 📖 AWS Braket Hybrid Tool guide (and link to example notebook) - https://docs.aws.amazon.com/braket/latest/developerguide/braket-jobs.html
- :book: AWS Quantum papers - https://www.amazon.science/blog/aws-scientists-coauthor-13-qip-2021-quantum-computing-papers
- :book: Pennylane.ai for QML on AWS Braket - https://pennylane.ai/qml/demos/braket-parallel-gradients.html
- 🎥 Talk "Noise in Quantum Computing - https://www.youtube.com/watch?v=y9RzCGIjSBQ
- :octocat: Qiskit provider for AWS Braket - https://github.com/qiskit-community/qiskit-braket-provider

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/aws-braket.png" width=800>

### @Werner interviews

Werner Vogels interview series for Quantum Computing.
- 🎥 first video "Dr. John Preskill" -- https://www.youtube.com/watch?v=tcTF_ag_wWU

### PennyLane Library

Penny Lane - PennyLane is a cross-platform Python library for differentiable programming of quantum computers. Train a quantum computer the same way as a neural network. Image from QT Conference talk by PennyLane team member. The PennyLane quantum machine learning library is compatible with the AWS Braket service.
- :octocat: Github - https://github.com/PennyLaneAI/pennylane
- 📘 Demos - https://pennylane.ai/qml/demos_basics.html

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/penny-lane-ml.png" width=600>

---

## Recent Major Updates (2024-2025)

### AWS Ocelot Chip (February 2025)
**First proprietary AWS quantum chip** using cat qubit architecture

- **9-qubit system** demonstrating 90% reduction in error correction costs
- Based on bosonic quantum error correction
- Cat qubits intrinsically suppress bit-flip errors, reducing resources required for quantum error correction
- Developed at AWS Center for Quantum Computing at Caltech
- Scalable architecture using microelectronics industry fabrication processes
- Paper published in **Nature** (February 2025)
- Accelerates timeline to practical quantum computing by up to **5 years**

**Technical Details:**
- 5 cat qubits (bosonic) + 4 transmon qubits
- Cat qubits store information, transmons monitor for errors
- Hollow tantalum structures containing microwave radiation
- More efficient error correction than conventional approaches
- Chip size: ~1 cm square, requires cryogenic cooling

**More info:** https://www.aboutamazon.com/news/aws/quantum-computing-aws-ocelot-chip

### Quantum Embark Program (November 2024)
AWS launched a modular advisory program to help organizations evaluate quantum readiness without long-term commitments.

**Three Core Modules:**

1. **Use Case Discovery**
   - Workshops to identify quantum applications relevant to your business
   - Assess computing challenges suitable for quantum solutions
   - Output: High-level whitepaper summarizing quantum opportunities
   - Helps distinguish genuine opportunities from industry hype

2. **Technical Enablement**
   - 2-day hands-on workshop
   - Learn quantum computing basics
   - Engage with quantum programming frameworks
   - Use Amazon Braket to experiment with real quantum hardware
   - For organizations ready to move beyond initial exploration

3. **Deep Dive**
   - Advanced exploration of specific quantum applications
   - For users ready to develop and test quantum algorithms
   - Focus on targeted use cases and implementation

**Early Adopters:**
- **Westpac**: Investigating quantum-inspired solutions for financial services
- **Vanguard**: Assessing quantum algorithms for portfolio optimization and risk management

**How to Join:** Sign up through the Amazon Braket console

**More info:** https://thequantuminsider.com/2024/11/23/aws-launches-quantum-embark-program-to-guide-businesses-into-quantum-computing/

### Hardware Expansions (2024-2025)

**New QPU Access:**

- **Rigetti Ankaa-2** (August 2024)
  - 84-qubit superconducting processor
  - Square-lattice layout
  - Improved two-qubit gate fidelity
  - Available through Amazon Braket

- **IQM Emerald** (2025)
  - 54-qubit superconducting QPU
  - 2D grid architecture
  - General availability on Braket

- **IonQ Systems**
  - Continued availability of trapped-ion processors
  - IonQ Forte with 36 algorithmic qubits
  - High-fidelity operations

**NVIDIA Integration (December 2024):**
- **CUDA-Q Platform** integrated with Amazon Braket at AWS re:Invent 2024
- Enables hybrid quantum-classical computing
- Combines quantum processors with GPU acceleration
- Open-source quantum development environment
- Accelerates quantum simulation and algorithm development

**More info:** https://www.constellationr.com/blog-news/insights/practical-quantum-computing-advances-ramp-going-2025

### Free Learning Resources (2024)

**Amazon Braket Digital Learning Plan:**
- Free educational program for quantum computing foundations
- Series of learning courses covering quantum basics
- Earn digital badge after completing courses and scoring 80%+ on assessment
- No additional cost
- Accessible to all developers

## Available Hardware (As of 2025)

| Provider | Technology | Qubits | Notes |
|----------|-----------|--------|-------|
| **AWS Ocelot** | Cat qubits (superconducting) | 9 | Proprietary, error-correction focused |
| **IonQ Forte** | Trapped ions | 36 algorithmic | High fidelity, all-to-all connectivity |
| **Rigetti Ankaa-2** | Superconducting | 84 | Square-lattice, improved fidelity |
| **IQM Emerald** | Superconducting | 54 | 2D grid architecture |
| **D-Wave Advantage** | Quantum annealing | 5000+ | Optimization problems |
| **Xanadu Borealis** | Photonic | 216 | Boson sampling, room temperature |
| **QuEra Aquila** | Neutral atoms | 256 | Analog quantum simulator |

## Architecture

Below is an example architecture which performs quantum calculations on the AWS cloud using Amazon Braket (SageMaker) notebook, S3 file storage bucket, the Amazon Braket services (which includes managed quantum simulators) & executes on partner quantum QPUs.

**Updated Architecture Components (2025):**
- Integration with AWS SageMaker for hybrid quantum-classical algorithms
- CUDA-Q support for GPU acceleration
- Enhanced Braket SDK with error mitigation tools
- S3 integration for quantum job results and data persistence
- CloudWatch monitoring for quantum workloads
- AWS Ocelot chip access for error-correction research

## Getting Started

### Prerequisites
```bash
pip install amazon-braket-sdk --upgrade
pip install pennylane-braket --upgrade
```

### Updated Code Example (2025)
```python
from braket.aws import AwsDevice
from braket.circuits import Circuit

# Access to quantum hardware options (2025)
device_rigetti = AwsDevice("arn:aws:braket:us-west-1::device/qpu/rigetti/Ankaa-2")
device_ionq = AwsDevice("arn:aws:braket:us-east-1::device/qpu/ionq/Forte")
device_iqm = AwsDevice("arn:aws:braket:eu-north-1::device/qpu/iqm/Emerald")

# Create a simple circuit
circuit = Circuit().h(0).cnot(0, 1)

# Run on quantum hardware
task = device_ionq.run(circuit, shots=1000)
result = task.result()
print(result.measurement_counts)
```

### Accessing AWS Ocelot (Research Access)
```python
from braket.aws import AwsDevice
from braket.circuits import Circuit

# Note: Ocelot access may require special permissions
device_ocelot = AwsDevice("arn:aws:braket:us-west-1::device/qpu/aws/Ocelot")

# Cat qubit circuits require specific gate sets
# Consult AWS documentation for Ocelot-specific programming
```

### Using CUDA-Q with Braket (2025)
```python
import cudaq
from braket.aws import AwsDevice

# Define quantum kernel using CUDA-Q
@cudaq.kernel
def bell_state():
    qubits = cudaq.qvector(2)
    h(qubits[0])
    cx(qubits[0], qubits[1])
    mz(qubits)

# Execute on AWS Braket device
device = AwsDevice("arn:aws:braket:us-east-1::device/qpu/ionq/Forte")
result = cudaq.sample(bell_state, shots_count=1000)
print(result)
```

## Quantum Embark Program - Getting Started

### Step 1: Assess Your Readiness
Visit the [Amazon Braket Console](https://console.aws.amazon.com/braket/) and complete the Quantum Embark assessment to understand your organization's quantum readiness level.

### Step 2: Use Case Discovery Workshop
Work with AWS quantum experts to:
- Identify potential quantum applications for your business
- Assess computing challenges suitable for quantum solutions
- Understand near-term vs. long-term quantum opportunities
- Receive a whitepaper outlining quantum possibilities

### Step 3: Technical Enablement
- 2-day hands-on workshop
- Learn quantum computing basics and principles
- Experiment with quantum programming frameworks
- Use Amazon Braket with real quantum hardware
- Understand hybrid quantum-classical workflows

### Step 4: Deep Dive (Advanced)
- Explore specific quantum applications relevant to your industry
- Develop proof-of-concept quantum algorithms
- Test algorithms on simulators and quantum hardware
- Receive guidance on quantum algorithm design

## Simulators

Amazon Braket provides managed simulators for quantum algorithm development:

### SV1 - State Vector Simulator
- Simulates up to 34 qubits
- Full state vector simulation
- Ideal for algorithm development and debugging

### DM1 - Density Matrix Simulator  
- Simulates noisy quantum circuits
- Up to 17 qubits
- Models realistic quantum hardware behavior

### TN1 - Tensor Network Simulator
- Simulates up to 50 qubits for certain circuit types
- Efficient for circuits with limited entanglement
- Cost-effective for large-scale simulations

### Local Simulator
- Run simulations on your local machine
- Free for development and testing
- Included in Braket SDK

## Penny Lane Integration

PennyLane is a cross-platform Python library for differentiable programming of quantum computers. Train a quantum computer the same way as a neural network.

The PennyLane quantum machine learning library is fully compatible with the AWS Braket service.

```python
import pennylane as qml

# Use Amazon Braket device with PennyLane
device = qml.device('braket.aws.qubit', device_arn='arn:aws:braket:us-east-1::device/qpu/ionq/Forte', wires=2)

@qml.qnode(device)
def circuit(params):
    qml.RX(params[0], wires=0)
    qml.RY(params[1], wires=1)
    qml.CNOT(wires=[0, 1])
    return qml.expval(qml.PauliZ(0))

# Optimize quantum circuit
optimizer = qml.GradientDescentOptimizer(stepsize=0.1)
params = [0.1, 0.2]

for i in range(100):
    params = optimizer.step(circuit, params)
```

## Resources

### Official AWS Resources
- **AWS Braket Documentation**: https://docs.aws.amazon.com/braket/
- **AWS Quantum Technologies Blog**: https://aws.amazon.com/blogs/quantum-computing/
- **Quantum Embark Program**: Sign up via Braket console
- **Digital Learning Plan**: Free at AWS Training portal
- **CUDA-Q Integration Guide**: AWS + NVIDIA documentation
- **GitHub Examples**: https://github.com/aws/amazon-braket-examples

### Academic Papers
- **Ocelot Chip** (2025): Published in Nature - Bosonic quantum error correction with cat qubits
- **Palace Simulation Tool**: Open-source electromagnetic simulation for quantum hardware design
- **AWS Center for Quantum Computing research**: Various publications on quantum error correction

### Example Projects & Tutorials
- Quantum machine learning with PennyLane
- Variational Quantum Eigensolver (VQE) for chemistry
- Quantum Approximate Optimization Algorithm (QAOA)
- Hybrid quantum-classical algorithms with CUDA-Q
- Error mitigation tutorials
- Quantum Embark use case templates

### Community
- AWS Quantum Computing forum
- Amazon Braket Slack community  
- Academic partnerships and research programs

## Pricing (Updated 2025)

Amazon Braket pricing varies by usage:

### Simulator Pricing
- **Per-shot pricing** for managed simulators
- **Per-minute pricing** for long-running simulations
- **Local simulator**: Free

### QPU Pricing
- **Per-shot pricing**: Varies by hardware provider
- **Per-task pricing**: Fixed cost per quantum task submitted
- **Note**: Rigetti Ankaa-2 and IQM Emerald have different pricing than earlier systems
- AWS Ocelot pricing available for qualified research partners

### Free Tier
- Free simulator time for algorithm development
- Limited free credits for new AWS accounts

**Current pricing details**: https://aws.amazon.com/braket/pricing/

## Use Cases & Applications

### Chemistry & Materials Science
- Molecular simulation and drug discovery
- Materials property prediction
- Chemical reaction modeling

### Optimization
- Portfolio optimization (financial services)
- Supply chain and logistics optimization  
- Resource allocation problems

### Machine Learning
- Quantum neural networks
- Quantum feature maps
- Variational quantum algorithms

### Cryptography & Security
- Post-quantum cryptography research
- Quantum key distribution studies
- Random number generation

## Roadmap Insights

Based on AWS announcements and industry positioning:

**2025 Focus:**
- Scaling Ocelot cat qubit architecture
- Expanding third-party hardware access
- Enhancing CUDA-Q hybrid workflows
- Growing Quantum Embark program

**2025-2026:**
- Expansion of cat qubit systems
- More advanced error correction demonstrations
- Industry-specific quantum solutions

**2027+:**
- Target of **5x acceleration** in timeline to practical quantum computing (via Ocelot architecture)
- Continued hardware partner expansion
- Quantum-classical integration maturity
- Enterprise production workloads

## Key Differentiators

1. **Hardware Diversity**: Access to 7+ different quantum technologies through one platform
2. **AWS Ocelot**: Only cloud provider with proprietary cat qubit chip
3. **CUDA-Q Integration**: Seamless GPU + quantum hybrid computing
4. **Fully Managed**: No infrastructure management required
5. **AWS Ecosystem**: Integration with SageMaker, S3, Lambda, CloudWatch
6. **Quantum Embark**: Structured program for enterprise quantum readiness
7. **Scalability**: From research to production-scale workloads

---

**Learn more about AWS Braket**: https://aws.amazon.com/braket/

**For more AWS data services including quantum**: https://github.com/lynnlangit/Hello-AWS-Data-Services/tree/master/7_quantum-computing

