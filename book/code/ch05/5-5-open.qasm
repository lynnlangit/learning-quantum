OPENQASM 2.0;
include "qelib1.inc";

qreg a[3];
qreg b[2];

// add classical register to run on IBM env
creg d[3];

h a[0];
h a[1];
x b[0];
h b[1];
barrier a[0],a[1],a[2],b[0],b[1];
x a[0];
x a[1];
cx a[1],a[2];
cx a[0],a[1];
ccx a[0],a[1],a[2];
barrier a[0],a[1],a[2],b[0],b[1];
x b[1];
h b[1];
ccx a[2],b[0],b[1];
h b[1];
x b[1];
barrier a[0],a[1],a[2],b[0],b[1];
ccx a[0],a[1],a[2];
cx a[0],a[1];
x a[0];
cx a[1],a[2];
x a[1];

//add measure to run on IBM env
measure a[2] -> d[2];