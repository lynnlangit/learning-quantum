// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// This sample generates a single random bit.

qc.print(`${new Date()}\n\n`);

qc.reset(1);
qc.write(0);
qc.had();
var result = qc.read();
qc.print('result: ' + result + '\n');
