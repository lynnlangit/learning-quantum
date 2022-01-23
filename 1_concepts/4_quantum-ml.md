# Quantum Machine Learning

Use libraries, such as PennyLane (shown below). PennyLane works with the AWS Braket Quantum Computing cloud service.

<img src=https://github.com/lynnlangit/learning-quantum/blob/main/images/penny-lane-ml.png width=700>

## More Examples

- On Qiskit site
    - Qiskit ML Tutorials - https://qiskit.org/documentation/machine-learning/tutorials/index.html
    - Qiskit Textbook - https://qiskit.org/textbook/content/ch-ex/
    - HHL example - https://qiskit.org/textbook/ch-applications/hhl_tutorial.html  
    - On IBM Quantum Lab - https://quantum-computing.ibm.com/lab/files/qiskit-textbook/content/ch-applications/hhl_tutorial.ipynb
- On PennyLane site 
    - what is QML - https://pennylane.ai/qml/whatisqml.html
    - glossary - https://pennylane.ai/qml/glossary.html
    - Advanced example "Learning to Learn" - https://pennylane.ai/qml/demos/learning2learn.html
- On TensorFlow site
    -  TensorFlow Quantum example "Hello many worlds" - https://www.tensorflow.org/quantum/tutorials/hello_many_worlds
    -  More TF-Quantum example notebooks - https://www.tensorflow.org/quantum/design

---


## Quantum Classification Example

Definition from the learning site `Quantum-Inspire` and this [link](https://www.quantum-inspire.com/kbase/quantum-classification/)  

- *"Classification is a form of machine learning in which labels are assigned to data, often with respect to other data. For instance, we can classify between animals having 22 or 44 legs or a different number. Often we classify new data based on already classified (learned) data. We classify this new data point by representing all data points by features or characteristics and compute the distance between the features of the new data point and the features of the learned data points. The new data point is assigned the label to which it has the shortest distance.*
- *Our example uses kk-nearest neighbor classification with k=Nk=N.  Classification has wide-spread use in everyday life and we often classify objects without fully realizing we do it. Classically, naively we would have to compute the distance between the new data point and all other data points separately, after which we combine the results. This approach can be approved upon, but we are still left with a complexity of \mathcal{O}(NM)O(NM).*
- *With a quantum-based approach, we do the same computations, but now only requiring one single-qubit operation and two measurements. Hence, the quantum-based approach is in theory better than the classical one. A caveat is however that the result is probabilistic, hence, multiple measurement rounds must be needed. Furthermore, a specific quantum state is assumed to begin with. Without something like a quantum RAM or a quantum process that produces the input state efficiently, we are left with the same complexity as the classical approach."*

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/quantum-classifier.png" width=900>

- **Classification using a Quantum ML algorithm** --> distance classification using a quantum machine learning algorithm (register shown above)
  - Prepare input data using a number of gates - NOTE: this is a non-trivial set of steps!
  - Implement the ML classification using an H gate
  - Measure to read the result
 


