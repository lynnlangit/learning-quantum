# Quantum Computing Instructions

| Symbol | Name| Example| English| 
| :---: |:---:|:---:|:---:|
| <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/operators/NOT.png">|  NOT (or X)  | qc.not(t)| logical bitwise NOT|
| CNOT    | CNOT | qc.cnot(t,c)| controlled NOT, if (c) then NOT(t)| 
| CCNOT    | CCNOT (Toffoli) | qc.cnot(t,c1\|c2)| c, if (c1 AND c2) then NOT(t)| 
| HAD |  HAD (Hamamard)  | qc.had(t)| Hadamard gate, superposition|
| PHASE |  PHASE  | qc.phase(angle,c)| relative phase rotation|
| Z |  Z  | qc.phase(180,c)| relative phase rotation by 180°|
| S |  S  | qc.phase(90,c)| relative phase rotation by 90°|
| T |  T  | qc.phase(45,c)| relative phase rotation by 45°|
| CPHASE |  CPHASE | qc.cphase(angle,c1\|c2)| conditional phase rotation|
| CZ |  CZ  | qc.phase(180,c1\|c2)| conditional phase rotation by 180°|
| READ |  READ  | val=qc.read(t)| read quibits|
| WRITE |  WRITE  | qc.write(t,val)| write quibits|
| ROOTNOT |  ROOTNOT  | qc.rootnot(t)| root-of-NOT operation|
| SWAP |  SWAP(EXCHANGE)  | qc.exchange(t1\|t2)| exchange two quibits|
| CSWAP |  CSWAP(EXCHANGE)  | qc.exchange(t1\|t2,c)| conditional exchange of two quibits, if(c) the SWAP (t1,t2)|

## Degrees to Radians

| Degrees | 0° | 45° | 90° | 135° | 180° | 225° | 270° | 315° |
| :---: |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---: |
| Radians |  0  | π/4| π/2|3π/4| π |5π/4|3π/2|7π/4|
| Name    | n/a | T  | S  | n/a | Z | n/a | n/a | n/a |