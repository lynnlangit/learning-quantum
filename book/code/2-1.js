// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=2-1

// This sample generates a single random bit.

qc.reset(1);         // allocate one qubit
qc.write(0);         // write the value zero
qc.had();            // place it into superposition of 0 and 1
var result = qc.read();  // read the result as a digital bit
qc.print('result: ' + result + '\n');