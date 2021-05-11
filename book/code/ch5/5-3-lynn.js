var num_qubits = 6;
qc.reset(num_qubits);
var a = qint.new(4, 'a');
var b = qint.new(2, 'b');

qc.label('prepare');
a.write(1);
a.hadamard(0x4);            // same as a.had(0x4);
//a.had(0x4);
a.phase(45, 0x4);

b.write(1);
b.hadamard(0x2);
b.phase(90, 0x2);
qc.nop();
qc.label('');
qc.nop();

qc.label('a += b * b');
a.addSquared(b);            // a += b * b
qc.label('');
qc.nop();

// what does the `addSquared(b)' method do?
// cnot 12 times - number of args differs

qc.print(''+ a.addSquared.toString());