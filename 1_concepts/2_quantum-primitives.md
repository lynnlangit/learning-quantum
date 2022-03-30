# Quantum Primitives

Summary from 'Programming Quantum Computers' O'Reilly book

- **AA/Amplititude Amplification** --> turn relative-phase differences into READable differences in magnitudes (PREP | FLIP | MIRROR)
  - Extract information about discrete values encoded in the phases of our register
  - Converts phase differences into magnitude differences, 
  - Allows amplitude amplification from a QPU program to provide useful output relating to phase information from a state that would otherwise remain invisible
<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/AA.png" width=600>

- **QFT/Quantum Fourier Transform** --> enables ability to compute in superposition
  - Extract information about patterns of information encoded in the QPU register
<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/QFT.png" width=600>  

  - The online tool "Quirk" has an animation of the QFT as well --> https://algassert.com/quirk
<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/QFT-animated.png" width=700>

- **invQFT/inverse QFT** --> preparing states with given frequencies  
  - Takes as its input a qubit register representing frequency space, and returns as output a register showing the signal that this corresponds to.
  - Prepare a quantum register representing the state you need in frequency space
  - Prepare a QPU register that varies periodically in magnitude rather than relative phase
  - Alter their frequency information
 <img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/invQFT.png" width=600>

- **PE/Quantum Phase Estimation** --> an attribute of an *operation* acting on a QPU register. 
  - Extracts information that QPU operations encode in the global phases of a register
  - By transforming the global phase information into relative phase information in a second quantum register...
  - and then applying invQFT to extract that information in a READable format
  - will help determine the eigenphases associated with the eigenstates of a QPU operation, returning a superposition of all the eigenphases
    - **eigenstate** - states impervious to a certain QPU’s operation in this way (except for global phases) - see definition at [link](https://en.wikipedia.org/wiki/Introduction_to_eigenstates)
    - **eigenphase** - global phase acquired by a particular eigenstate 
    - **phase kickback** - 
    - **construction of controlled unitaries** - 
    - **invQFT** --> used here
<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/PE.png" width=600>
