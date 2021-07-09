var inputRegSizeEigenstate = 1;
var outputRegSizeAnswerPrecision = 4;
qc.reset(outputRegSizeAnswerPrecision + inputRegSizeEigenstate);
var qin = qint.new(inputRegSizeEigenstate, 'input');
var qout = qint.new(outputRegSizeAnswerPrecision, 'output');

qc.label('init');
qout.write(0);
qin.write(0);       // this state has eigenphase 180
qin.roty(-135);     // for eigenphase 0, use qin.roty(45)

qc.label('phase estimation');
phase_estimation(qin, qout, conditional_unitary);
qout.read();

function conditional_unitary(qcontrol, qtarget, control_count) {
    
    if (control_count & 1)
        qtarget.chad(null, ~0, qcontrol.bits(control_count));
}

function phase_estimation(q_in, q_out, cont_u)
{
    q_out.had();

    for (var j = 0; j < q_out.numBits; j++)
    conditional_unitary(q_out, q_in, 1 << j);

    q_out.invQFT();
}