# Quantum Machine Learning

To implement quantum machine learning you will want to try out using purpose-built examples and libraries...
- such as those found in IBM QiskitML, TensorFlow-Quantum or PennyLane from Xanadu. 
- PennyLane works with the AWS Braket Quantum Computing cloud service.  
- Also many of the quantum learning libraries, such as Quantum-Inspire, include examples of implementing quantum machine learning.

---


## Quantum Classification Example

This (abbreviated) definition is from the learning site `Quantum-Inspire` and this [link](https://www.quantum-inspire.com/kbase/quantum-classification/)  

- **Classification** is a form of machine learning in which labels are assigned to data, often with respect to other data. 
    - For example - you can classify between animals as having 22 or 44 legs or a different number. 
    - Usually you classify new data based on already classified (learned) data. 
    - Classify this new data point by representing all data points by features or characteristics 
        - compute the distance between the features of the new data point and the features of the learned data points. 
        - the new data point is assigned the label to which it has the shortest distance.
- **Classification using a Quantum ML algorithm** --> distance classification using a quantum machine learning algorithm (register shown below)
  - Prepare input data using a number of gates - NOTE: this is a non-trivial set of steps!
  - Implement the ML classification using an H gate
  - Measure to read the result
- This example uses **kk-nearest neighbor classification** with k=Nk=N.  
    - Using a quantum-based approach, you do the same computations, but now only requiring one single-qubit operation and two measurements. 
        - The quantum-based approach is in theory better than the classical one. 
        - A caveat is however that the result is **probabilistic**, so, multiple measurement rounds must be needed. 
        - Also, a specific quantum state is assumed to begin with. 
        - IMPORANT: without something like a quantum RAM or a quantum process that produces the input state efficiently, you are left with the **same complexity** as the classical approach.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/quantum-classifier.png" width=900>

---

## More Examples

- On TensorFlow site (For Google Quantum AI)
    -  TensorFlow Quantum example "Hello many worlds" - https://www.tensorflow.org/quantum/tutorials/hello_many_worlds
    -  More TF-Quantum example notebooks - https://www.tensorflow.org/quantum/design
- On Qiskit site (for IBM Quantum)
    - Qiskit ML Tutorials - https://qiskit.org/documentation/machine-learning/tutorials/index.html
    - Qiskit Textbook - https://qiskit.org/textbook/content/ch-ex/
    - HHL example - https://qiskit.org/textbook/ch-applications/hhl_tutorial.html  
    - On IBM Quantum Lab - https://quantum-computing.ibm.com/lab/files/qiskit-textbook/content/ch-applications/hhl_tutorial.ipynb
- On PennyLane site (for AWS Braket and others)
    - what is QML - https://pennylane.ai/qml/whatisqml.html
    - glossary - https://pennylane.ai/qml/glossary.html
    - Advanced example "Learning to Learn" - https://pennylane.ai/qml/demos/learning2learn.html
 


