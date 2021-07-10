// Set input vector length to a power of two
var vector = [-1.0, 1.0, 1.0, 5.0, 5.0, 6.0, 6.0, 6.0];

// Create register of right size to amplitude encode vector
var num_qubits = Math.log2(vector.length);
qc.reset(num_qubits);
var amp_enc_reg = qint.new(num_qubits, 'amp_enc_reg');

// Generate amplitude encoding in amp_enc_reg
amplitude_encode(vector, amp_enc_reg);

function amplitude_encode(vec, qreg)
{
    var num_qubits = qreg.numBits;
    qreg.write(0);
    var reg_mask = (1 << num_qubits) - 1;
    var vec_mag_sqr = 0.0;

    for (var i = 0; i < vec.length; ++i)
        vec_mag_sqr += vec[i] * vec[i];

    var remaining_power = vec_mag_sqr;
    var first_phase = (vec[0] >= 0) ? 0 : 180;

    if (first_phase !== 0)
    {
        qreg.not(1);
        qreg.phase(first_phase, 1);
        qreg.not(1);
    }

    for (var i = 1; i < vec.length; ++i)
    {
        var power = vec[i] * vec[i];

        if (power > 0.0)
        {
            var phase = (vec[i] >= 0) ? 0 : 180;
            phase -= first_phase;

            while (phase <= -180)
                phase += 360;

            var top_bit = 1;

            while ((top_bit << 1) <= i)
                top_bit <<= 1;

            var cond_bits = reg_mask ^ top_bit;
            var split = power / remaining_power;
            var theta = 2 * Math.asin(Math.sqrt(split)) * 180 / Math.PI;
            var not_mask = reg_mask ^ top_bit;
            var cnot_mask = i ^ top_bit;

            if (phase == 180)
                theta = -theta;
            if (cnot_mask)
                qc.cnot(cnot_mask, top_bit);
            if (not_mask)
                qc.not(not_mask);
            qc.roty(theta, top_bit, cond_bits);
            if (phase !== 0 && phase != 180)
                qreg.cphase(phase);
            if (not_mask)
                qc.not(not_mask);
            if (cnot_mask)
                qc.cnot(cnot_mask, top_bit);
            remaining_power -= power;
        }
    }
}
