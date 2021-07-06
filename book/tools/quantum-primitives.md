# Quantum Primitives

Summary from 'Programming Quantum Computers' O'Reilly book

- **AA** - Amplititude Amplification --> turn relative-phase differences into READable differences in magnitudes (PREP | FLIP | MIRROR)
  - Extract information about discrete values encoded in the phases of our register
  - Converts phase differences into magnitude differences, 
  - Allows amplitude amplification from a QPU program to provide useful output relating to phase information from a state that would otherwise remain invisible
- **QFT** - Quantum Fourier Transform --> enables ability to compute in superposition
  - Extract information about patterns of information encoded in the QPU register
    - **invQFT** - inverse QFT --> enables xxx
- **PE** - Quantum Phase Estimation --> an attribute of an operation acting on a QPU register. 
  - Extracts information that QPU operations encode in the global phases of a register
  - By transforming the global phase information into relative phase information in a second quantum register...
  - and then applying invQFT to extract that information in a READable format
    - **eigenphase/state** - xxx --> yyy
    - **phase kickback** -->
    - **construction of controlled unitaries** -->
    - **invQFT** --> used here
