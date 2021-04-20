// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

// To run this online, go to http://oreilly-qc.github.io?p=2-3

// demo constructs a ROOTNOT operation using HAD and PHASE operations.
// shows the built-in ROOTNOT operator -- it has the same effect. 
// Note that applying ROOTNOT twice is the equivalent of a single NOT operator.

qc.reset(1);
qc.write(0);

qc.label("RNOT")
qc.had();
qc.phase(-90);
qc.had();
qc.label();
qc.nop()

qc.label("RNOT")
qc.had();
qc.phase(-90);
qc.had();
qc.label("")
qc.nop()

qc.label("Built-in RNOT")
qc.rootnot();
qc.nop()
qc.rootnot();
qc.label()

var result = qc.read();
qc.print('result: ' + result + '\n');