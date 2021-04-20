// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=2-2

// This sample generates a single random byte,
// using eight unentangled qubits.

qc.reset(8);
qc.write(0);
qc.had(); 
var result = qc.read();
qc.print('result: ' + result + '\n');