qc.reset(3);
qc.discard();
var a = qint.new(1, 'ALICE');
var fiber = qint.new(1, 'fiber');
var b = qint.new(1, 'BETTY');

function random_bit(q) {
    q.write(0);
    q.had();
    return q.read();
}

// Generate two random bits
qc.label('random bits for encode');
var send_had = random_bit(a);
var send_value = random_bit(a);
qc.label('');

// Alice sets value & encodes
a.write(0);
qc.label('set value');
qc.nop();
if (send_value) // set value to 0 or 1
    a.not();
qc.nop();
qc.label('');
qc.nop();
qc.label('apply had');
qc.nop();
if (send_had)
    a.had(); // apply 'had' based on random bit
qc.nop();
qc.label('');

// Send the qubit!
fiber.exchange(a);

// Spy code
qc.nop();
qc.label('spy');
fiber.had();
stolen_data = fiber.read();
fiber.write(0);
if (stolen_data)
    fiber.not();
fiber.had();
qc.label('');
qc.nop();

// Betty received & decodes
var recv_had = random_bit(b);
fiber.exchange(b);
qc.label('apply had');
qc.nop();
if (recv_had) // apply 'had' based on random bit
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

// Check results

// encode & decode 'had's match
if (send_had == recv_had) {
    // sent value does not match received value
    if (send_value != recv_val) {
        qc.print('CAUGHT A SPY at ');
        qc.print(`${new Date()}\n\n`);
    }
    // sent value matches received value
    else {
        qc.print('Spy NOT detected ');
        qc.print(`${new Date()}\n\n`);
    }
}
// encode & decode 'had's do NOT match
// decoding the value is invalid
else {
    qc.print('INVALID DATA - "apply had" do not match at ');
    qc.print(`${new Date()}\n\n`);
}
