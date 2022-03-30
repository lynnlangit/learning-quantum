// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=3-2

qc.reset(2);
var a = qint.new(1, 'a');
var b = qint.new(1, 'b');
qc.write(0);
qc.nop();

qc.label('superpose then entangle');
a.had();           // Place into superposition
b.cnot(a);         // Entangle
qc.label();

//qc.label('entangle then superpose');
//b.cnot(a);         // Entangle
//a.had();           // Place into superposition
//qc.label();

qc.nop();
var a_result = a.read();  // The two bits will be random,
var b_result = b.read();  // but always the same.
qc.print(a_result);
qc.print(b_result);
