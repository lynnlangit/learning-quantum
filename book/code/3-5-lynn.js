// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=3-5

//var theta = 90;
var theta = 180;             // ADJUST value to viz 
qc.reset(2);
qc.write(0);
qc.hadamard();              // EQUIVALENT to qc.had();?

// Using two CNOTs and three PHASEs...
qc.phase( theta / 2, 0x2);  // ADJUST the phase by 45 for qubit2
qc.cnot(0x2, 0x1);          // ENTANGLE
qc.phase(-theta / 2, 0x2);  // ADJUST the phase by -45 for qubit2
qc.cnot(0x2, 0x1);          // ENTANGLE
qc.phase( theta / 2, 0x1);  // ADJUST the phase by 45 for entangled qubit1

// Builds the same operation as a 2-qubit CPHASE
qc.phase(theta, 0x1, 0x2);  // ADJUST the phase by 90 for qubit1,2
