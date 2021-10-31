// This sample generates a single random bit.

// create a register with one qubit
qc.reset(1);

// set 0 as the qubit's value
qc.write(0);

// set the qubit into superposition
qc.had();

// collapse the qubit and read the value
var result = qc.read();

// print the result value
qc.print('result: ' + result + '\n');
qc.print(`${new Date()}\n\n`);
