OPENQASM 2.0;
include "qelib1.inc";

qreg alice[1];
qreg fiber[1];
qreg bob[1];
creg ahad[1];
creg aval[1];
creg fval[1];
creg bhad[1];
creg bval[1];

reset alice[0];
h alice[0];
measure alice[0] -> ahad[0];
reset alice[0];
h alice[0];
measure alice[0] -> aval[0];

reset alice[0];
if(aval==1) x alice[0];
if(ahad==1) h alice[0];

swap alice[0],fiber[0];

barrier alice[0],fiber[0],bob[0];
h fiber[0];
measure fiber[0] -> fval[0];
reset fiber[0];
if(fval==1) x fiber[0];
h fiber[0];
barrier alice[0],fiber[0],bob[0];

reset bob[0];
h bob[0];
measure bob[0] -> bhad[0];

swap fiber[0],bob[0];
if(bhad==1) h bob[0];
measure bob[0] -> bval[0];
