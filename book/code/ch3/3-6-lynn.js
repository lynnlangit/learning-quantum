qc.reset(2);
var a = qint.new(1, 'a');
var b = qint.new(1, 'b');
qc.write(0);

a.had();
// now prob of a is 50%
b.had();
b.phase(45);        // COMMENT out this phase to understand Line 10
b.had();            // HAD after PHASE --> prob of b is 15%
b.cnot(a);

// Now, you can read *either*
// qubit and get 50% prob.
// If the result is 0, then
// the prob of the *remaining*
// qubit is 15%, else it's 85%
var a_result = a.read();
var b_result = b.read();
qc.print(a_result + ' ');
qc.print(b_result + '\n');
