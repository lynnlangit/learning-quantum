qc.reset(3);
qc.discard();
var a = qint.new(1, 'ALICE');
var fiber = qint.new(1, 'fiber');
var b = qint.new(1, 'BETTY');

qc.label('2 BITS');
var send_had = random_bit(a);      //WRITE, HAD, READ
var send_value = random_bit(a);    //WRITE, HAD, READ

a.write(0);
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
        fiber.not();            // Runs conditionally
    if (spy_had)
        fiber.had();
}
qc.nop();
qc.label('???');                // B does something

var recv_had = random_bit(b);   //WRITE, HAD, READ
fiber.exchange(b);

qc.label('READ');
recv_val = b.read();
qc.nop();

if (send_had == recv_had) {
    if (send_value != recv_val) {
        qc.print('CAUGHT A SPY at ');
        qc.print(`${new Date()}\n\n`);
    }
    else {
        qc.print('Did NOT catch a spy at ' );
        qc.print(`${new Date()}\n\n`);
    }
}  
else {
    qc.print('UNCLEAR at ');
    qc.print(`${new Date()}\n\n`);
}

// UTILITY FUNCTION
function random_bit(q) {
    q.write(0);
    q.had();
    return q.read();
}
