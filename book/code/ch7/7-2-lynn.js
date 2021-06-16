var num_qubits = 1;  // vary from 1 to 4
qc.reset(num_qubits);
var signal = qint.new(num_qubits, 'signal')

qc.label('prep');
signal.write(0);
signal.had();
signal.phase(45, 1);
signal.phase(90, 2);
signal.phase(180, 4);

qc.label('QFT');
signal.QFT();
signal.QFT();  // reversibility