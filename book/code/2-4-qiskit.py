from qiskit import QuantumRegister, ClassicalRegister, QuantumCircuit
from numpy import pi

qreg_alice = QuantumRegister(1, 'alice')
qreg_fiber = QuantumRegister(1, 'fiber')
qreg_bob = QuantumRegister(1, 'bob')
creg_ahad = ClassicalRegister(1, 'ahad')
creg_aval = ClassicalRegister(1, 'aval')
creg_fval = ClassicalRegister(1, 'fval')
creg_bhad = ClassicalRegister(1, 'bhad')
creg_bval = ClassicalRegister(1, 'bval')
circuit = QuantumCircuit(qreg_alice, qreg_fiber, qreg_bob, creg_ahad, creg_aval, creg_fval, creg_bhad, creg_bval)

circuit.reset(qreg_alice[0])
circuit.h(qreg_alice[0])
circuit.measure(qreg_alice[0], creg_ahad[0])
circuit.reset(qreg_alice[0])
circuit.h(qreg_alice[0])
circuit.measure(qreg_alice[0], creg_aval[0])
circuit.reset(qreg_alice[0])
circuit.x(qreg_alice[0]).c_if(creg_aval, 1)
circuit.h(qreg_alice[0]).c_if(creg_ahad, 1)
circuit.swap(qreg_alice[0], qreg_fiber[0])
circuit.barrier(qreg_alice[0], qreg_fiber[0], qreg_bob[0])
circuit.h(qreg_fiber[0])
circuit.measure(qreg_fiber[0], creg_fval[0])
circuit.reset(qreg_fiber[0])
circuit.x(qreg_fiber[0]).c_if(creg_fval, 1)
circuit.h(qreg_fiber[0])
circuit.barrier(qreg_alice[0], qreg_fiber[0], qreg_bob[0])
circuit.reset(qreg_bob[0])
circuit.h(qreg_bob[0])
circuit.measure(qreg_bob[0], creg_bhad[0])
circuit.swap(qreg_fiber[0], qreg_bob[0])
circuit.h(qreg_bob[0]).c_if(creg_bhad, 1)
circuit.measure(qreg_bob[0], creg_bval[0])

editor = CircuitComposer(circuit=circuit)
editor