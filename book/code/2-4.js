// Programming Quantum Computers
//   by Eric Johnston, Nic Harrigan and Mercedes Gimeno-Segovia
//   O'Reilly Media

qc.reset(3);
qc.discard();
var a = qint.new(1, 'alice');
var fiber = qint.new(1, 'fiber');
var b = qint.new(1, 'bob');

function random_bit(q) {
    q.write(0);
    q.had();
    return q.read();
}

qc.label('get two random bits');
var send_had = random_bit(a);
var send_value = random_bit(a);
qc.label('');

// Prepare Alice's qubit
a.write(0);
qc.label('set value');
qc.nop();
if (send_value)
    a.not();
qc.nop();
qc.label('');
qc.nop();
qc.label('apply had');
qc.nop();
if (send_had)
    a.had();
qc.nop();
qc.label('');

// Send the qubit!
fiber.exchange(a);

// Activate the spy
var spy_is_present = true;
if (spy_is_present)
{
    var spy_had = 1;
    qc.nop();
    qc.label('spy');
    if (spy_had)
        fiber.had();
    stolen_data = fiber.read();
    fiber.write(0);
    if (stolen_data)
        fiber.not();
    if (spy_had)
        fiber.had();
    qc.label('');
    qc.nop();
}

// Receive the qubit!
var recv_had = random_bit(b);
fiber.exchange(b);
qc.label('apply had');
qc.nop();
if (recv_had)
    b.had();
qc.nop();
qc.label('');
qc.nop();
qc.label('read value');
qc.nop();
recv_val = b.read();
qc.nop();
qc.label('');
qc.nop();

// Now Alice emails Bob to tell
// him her had setting and value.
// If the had setting matches and the
// value does not, there's a spy!
if (send_had == recv_had)
    if (send_value != recv_val)
        qc.print('Caught a spy!\n');