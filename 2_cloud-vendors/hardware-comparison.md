# Hardware Technology Comparison

## Superconducting Qubits
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

## Trapped Ions
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

## Neutral Atoms
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

## Topological Qubits
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

## Photonic Qubits
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

---

*Back to [Cloud Quantum Computing Vendors](README.md)*
