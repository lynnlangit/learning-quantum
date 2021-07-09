var inputRegSizeEigenstate = 1;
var outputRegSizeAnswerPrecision = 3;
qc.reset(outputRegSizeAnswerPrecision + inputRegSizeEigenstate);
var qin = qint.new(inputRegSizeEigenstate, 'input');
var qout = qint.new(outputRegSizeAnswerPrecision, 'output');

qc.label('init');
qout.write(0);
qin.write(0);       // this state has eigenphase 180
qin.roty(-135);     // for eigenphase 0, use qin.roty(45)
// In this example, the starting state is not important because
// out U has been chosen to have an eigenphase of 150 for all inputs.

qc.label('phase estimation');
phase_estimation(qin, qout, conditional_unitary);
qout.read();

function phase_estimation(q_in, q_out, conditional_unitary)
{
    q_out.had();
    for (var j = 0; j < q_out.numBits; j++)
        conditional_unitary(q_out, q_in, 1 << j);
    q_out.invQFT();
}

function conditional_unitary(qcontrol, qtarget, control_count) 
{
    // The simple unitary should have an eigenphase of 150 degrees for all inputs.
    // Using single_op, perform multiple apps by rotating the phase farther.

    // Perform the controlled unitary between q1 and q2 iter times
    var theta = 150;
    var single_op = true;
    var q1 = qcontrol.bits(control_count);
    var q2 = qtarget;

    if (single_op)
    {
        qc.phase(-theta / 2 * control_count, q2, q1);
        qc.cnot(q2,q1);
        qc.phase(-theta * control_count, q2, q1);
        qc.cnot(q2,q1);
        qc.phase(-theta / 2 * control_count, q2, q1);
    }
    else
    {
        for (var i = 0; i < control_count; ++i)
        {
            qc.phase(-theta / 2, q2, q1);
            qc.cnot(q2,q1);
            qc.phase(-theta, q2, q1);
            qc.cnot(q2,q1);
            qc.phase(-theta / 2, q2, q1);
        }
    }
}


