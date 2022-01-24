# Quantum Program Flow

There are a number of steps that generally repeat in quantum program development.  

## One-time Setup Steps

**IMPORTANT** For reproducibility note versions of all hardware, software, tools and libraries used.

1. Define Biz Problem - is it a fit for quantum algorithms?
2. Psuedo-code & split (quantum / classical portions)
3. Select quantum hardware vendor - note capacity (# qubits, etc...)
4. Select quantum language/library - note version
5. Select cloud run env - note runtime version
6. Setup Dev Env - local or cloud-based IDE and tools and note version (Juptyper notebook, Python, other libraries...)
7. Review IDE visualization tools (if any) - qubit and/or register visualizers
8. Select & configure quantum simulators - local and cloud-based

## Quantum Code Development Steps

1. Write quantum code, review using tools (linters, visualizers...)
2. Run locally (debug and/or observe results with Z gates as needed)
3. Add unit tests and re-run locally
4. Test run on vendor quantum cloud simulator
5. Review results from cloud simulator run for accuracy
6. Review transpiled quantum code (which quantum gate types are used?) from cloud simulator
7. Estimate and verify QPU & quantum gate types needed & estimated time to run
8. Refactor code and/or reduce dataset size to reduce computational complexity

## Quantum Job Run Steps

1. Configure shot count for job run
2. Submit job to queue to be run - evaluate job progress / status (can configure max allowable values, time, % QPU usage, etc...)
3. Poll running job (on configured Cloud QPU / qubit values) to access status / completion
4. Evaluate job run result quality
5. Evaluate job run log files for run details (does it match your expectations for gates, number of qubits...)
6. Evaluate job run Run overhead (compare to classical alternative algorithm)
