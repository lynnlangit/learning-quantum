# Quantum Programs

Types of problems for quantum computers include cryptography, search, system simulations, general machine learning, computational biology, and generative chemistry.  Shown below are basic reference programs, these are often used in vendor examples and documentation.

---

## Superposition and Entangelement

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/h-op.png" width=500 align=right>


- **Hello World(s)** --> entangle 2 or more qubits and read the result from the histogram of the shots run. Runnable example written in cQASM on `quantum-inspire` shown to the right - [link](https://www.quantum-inspire.com/kbase/hello-quantum-world/)  
  - Init the register with 2 qubits
  - Use H gate to put the first qubit into a superposition 
  - Use CNOT gates to entangle the qubits
  - Use READ operation to get value (not in this example)
    - For **deterministic** algorithms - you end the algorithm with a measurement instruction (READ) is usually **not** required when you run the algorithm on a emulator. Here you sample from all possible outcomes.
    - For **non-deterministic** algorithms - you must add a measurement statement at the end of the algorithm in order to get meaningful results. The runtime of your algorithm will increase because multiple executions will have to be executed in order to get a **histogram** of all possible final states.  
    
NOTE: This `hello-worlds` program is a kind of a random number generator

---

## Factoring (Shor's Algo)

- Explanation of algorithm from IBM Quantum documenation - [link](https://quantum-computing.ibm.com/composer/docs/iqx/guide/shors-algorithm)
- More at this section of this repo (many code examples too! - [link](https://github.com/lynnlangit/learning-quantum/tree/main/4_oreilly-book/code/ch12)

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/shors-algo.png">

- **Shor's Algorithm** --> factoring problem
  - Shown in `Inspect` (debug) mode in IBM Composer
  - Written in OPENQASM
  - Uses X(NOT) and CX (CNOT) gates
  - Measures

----

## Search (Grover's Algo)

Solves unstructured search. Grover's algorithm uses a diffusion operator (also called amplitude purification)  calculates the mean probability amplitude μ of all states and inverts the probability amplitudes around this mean. 

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/grovers-op.png" width=525 align=right>

- **Grovers's Algorithm** --> example 1 from `quantum-inspire`(in-browser site) - [link](https://www.quantum-inspire.com/kbase/grover-algorithm/)
  - The example (see code to the right) consists of the following steps:
    - Uses 3 qubits
    - Initialization of the qubits in the ∣0⟩ state and creation of a uniform superposition of all basis inputs
    - Execution of the Oracle 
      - a function that returns 'zero' for all possible input states, except one input state
    - Application of Grover's diffusion operator (inversion about the mean)
      - Repetitions of step 2 and 3
    - Final measurement  
    
---

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/grover.png" width=625 align=right>

- **Grovers's Algorithm** --> example 2 from `IBM Quantum` runtime environment and examples
  - The second example shown to the right is also an implementation of `grovers-algorithm'
    - Uses 2 qubits
    - The example is written in OPENQASM
    - Note that the measurement operation (`Z`) is shown at the end of the program visualization
    - Also the IBM `Q-Sphere` visualizer and the IBM `Probabilities` (results) windows are included in this development environment

----


 


