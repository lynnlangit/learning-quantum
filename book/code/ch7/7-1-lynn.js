qc_options.color_by_phase = true;
qc_options.book_render = true;

var num_qubits = 4;        // try 1, 2...6 to see QFT function
qc.reset(num_qubits);
var signal = qint.new(num_qubits, 'signal')
var which_signal = 'A';   // change from A to B then C

qc.label('prepare');
signal.write(0);
signal.had();
if (which_signal == 'A') {
    signal.phase(180, 1);
} else if (which_signal == 'B') {
    signal.phase(90, 1);
    signal.phase(180, 2);
} else if (which_signal == 'C') {
    signal.phase(45, 1);
    signal.phase(90, 2);
    signal.phase(180, 4);
}
qc.label();
qc.nop();

qc.label('QFT');
signal.QFT();             // compute in superposition by easily preparing complex superpositions of a register
qc.label();
qc.nop();