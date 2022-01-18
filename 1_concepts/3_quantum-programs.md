# Quantum Programs

Types of problems for QPUs include cryptography, search, system simulations, general machine learning, computational biology, and generative chemistry.  

---

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

- **Shor's Algorithm** --> factoring problem
  - H and CNOT to entangle
  - AA and QFT

- **MNIST using a QNN** --> digit classification using a quantum neural network
  - H and CNOT to entangle
  - AA and QFT


