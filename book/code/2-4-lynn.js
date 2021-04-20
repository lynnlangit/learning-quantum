qc.reset(3);
qc.discard();
var a = qint.new(1, 'ALICE');
var fiber = qint.new(1, 'TRANSMIT');
var b = qint.new(1, 'BETTY');

function random_bit(q) {
    q.write(0);
    q.had();
    return q.read();
}

qc.label('2 BITS');
var send_had = random_bit(a);
var send_value = random_bit(a);

a.write(0);
qc.label('SET');
if (send_value)
    a.not();
qc.nop();
qc.nop();

qc.label('HAD');
if (send_had)
    a.had();
qc.nop();

fiber.exchange(a);

var spy_is_present = true;
if (spy_is_present)
{
    var spy_had = 1;
    qc.label('SPY');
    if (spy_had)
        fiber.had();
    stolen_data = fiber.read();
    fiber.write(0);
    if (stolen_data)
        fiber.not();
    if (spy_had)
        fiber.had();
}

var recv_had = random_bit(b);
fiber.exchange(b);
qc.label('HAD');
if (recv_had)
    b.had();
qc.nop();

qc.label('READ');
recv_val = b.read();
qc.nop();

if (send_had == recv_had)
    if (send_value != recv_val)
        qc.print('Caught a spy!\n');