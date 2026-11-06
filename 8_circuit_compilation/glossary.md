# Glossary

Terms used in these notes, in plain language. Back to the [overview](README.md).

| Term | Meaning |
|---|---|
| **Clifford gates** | Gates such as H, S, CNOT and CZ. Cheap on an error-corrected machine; on their own they can be simulated efficiently by a classical computer. |
| **Non-Clifford gate** | A gate such as T, Toffoli or a small rotation. Needed for quantum advantage and expensive on fault-tolerant hardware. |
| **Toffoli (CCX)** | A controlled-controlled-NOT: flips a target if both controls are 1. The unit of cost in these tasks. CCZ is the same up to Clifford gates. |
| **T gate / T-count** | A π/8 phase gate; the count of T gates is the classic cost metric. Here the scoring counts Toffolis + T/4. |
| **Magic state** | A special resource state consumed to perform a non-Clifford gate. "Magic-state factories" produce them and take most of a fault-tolerant machine's qubits. |
| **Ancilla** | A helper qubit used temporarily and returned to \|0⟩. |
| **Uncomputation** | Running a computation backwards to return ancillas to \|0⟩, so they don't spoil the quantum state. |
| **Measurement-based uncomputation** | Measuring a temporary qubit in the X basis and fixing the resulting phase with a cheap CZ, instead of paying Toffolis to undo it. |
| **Peak qubits (Q)** | The most qubits alive at any moment; this, not the average, is what the cost charges. |
| **Pebbling** | Scheduling which intermediate values to keep and which to recompute, trading qubits for gates. |
| **Phase oracle** | A circuit that multiplies each input \|x⟩ by a phase e<sup>iθ(x)</sup>. The invsqrt task computes θ = 2π/√x. |
| **DQI** | Decoded Quantum Interferometry, an optimization algorithm whose cost is dominated by a reversible classical decoder (here Reed–Solomon over GF(2¹²)). |
| **Reed–Solomon decoding** | Correcting errors in a code built from polynomials over a finite field; the decoder solves a "key equation" with field arithmetic. |
| **GF(2ⁿ)** | A finite field with 2ⁿ elements. Multiplying two elements costs as many Toffolis as the **tensor rank** of the multiplication map. |
| **Tensor rank** | The fewest products needed to compute a bilinear map. For GF(2¹²) multiplication, today's best is 42. |
| **Shot / failed shot** | One run of the circuit on one sampled input. In DQI, a failed shot is an input the decoder gets wrong; each one raises the penalty R. |
| **Salt / seed** | The random seed for measurement outcomes and sampled inputs. Kaggle uses a secret salt, so results can differ from local runs. |
| **Block encoding** | Embedding a matrix (here a molecular Hamiltonian) in a corner of a unitary so phase estimation can use it. |
| **DF-THC** | Double-factorized tensor hypercontraction: a compact factorization of the chemistry Hamiltonian. Its quality is measured by λ. |
| **λ (lambda), λ<sub>eff</sub>** | The 1-norm of the factorized Hamiltonian; the number of block-encoding calls needed scales with it. |
| **mHa** | Milli-Hartree, the unit of energy error; each chemistry accuracy limit is 20 mHa. |
| **Angle loader** | A circuit that looks up the rotation angles for each address (a QROM-like table); its cost is the number of AND products. |
| **Geometric mean** | The competition's overall score: the cube root of the product of the three task ratios. A 1% gain on one task adds ~0.33% to the score. |
