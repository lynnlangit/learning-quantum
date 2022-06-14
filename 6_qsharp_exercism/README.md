# Q# Track on Exercism.io

I have started the process to create a Q# language learning track for the [`exercism.io`](https://exercism.org/) platform.  
- The process of building a language learning track is significant.  
- Previously I worked with Ballerina language team to build a track on this platform.  
- Given this experience, here is a //TODO list for Q# on Exercism.

Here is the checklist for the starting point --> https://github.com/exercism/qsharp/issues/1

## Env

All information is in the GitHub Repo for Q# Exercism - https://github.com/exercism/qsharp  
- Runtime Env --> Q# runtime (requires C# or .NET framework) and QDK
- Test Runner --> Xunit
- Linter and snippets/examples
- Must create DOCKERFILE --> requires Ubuntu
- Want to package & version (other tools and examples use Node.js and Python / Jupyter notebooks)
- Would like to include visualization tools (for qubit state and program register)

## Lesson Path

Concepts - superposition, entanglement, rotation and observation and primitives (AA, PE, QFT, invQFT) 
- Basic Quantum Gates - NOT (or X), CNOT (or CX), HAD (or H)
- Random Number Generator --> H + CX gates on 2 qubits
- Hello Worlds
- Teleport (Alice / Bob example)
- Shor's Algo (factoring) --> quantum part and classical part
- Grover's Algo (database search)
- ML problems? --> classifier, QCNN (mnist)

## Metadata
About this language, language version, dependencies

## Tools
Need to create a list of tools for this project

## Resources

Microsoft created [Q# code katas](https://github.com/microsoft/QuantumKatas/tree/main/BasicGates) that could be repurposed as Exercism Q# language lessons.  I have discussed this possibility with Microsoft Q# team and they are ok with this usage.

## Questions
- Where to run - need to use the local simulator (from the QDK)?
- Which visualization tools (if any) exist?
- For which cloud-QPUs (if any) should this code be targeted, i.e. D-Wave, Rigetti, IonQ, etc...?