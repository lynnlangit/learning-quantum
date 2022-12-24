# Quantum Computing on AWS

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/aws-hardware.png" width=400 align=left>  

AWS partners with a number of quantum computer manufacturers (shown to the left) to provide customers access to qubits and QPUs.  The AWS quantum programming service is called Amazon Braket.  

Below is an example architecture which perform quantum calculations on the AWs cloud using a Amazon Braket (SageMaker) notebook, S3 file storage bucket, the Amazon Braket services (which includes managed quantum simulators) & executes on partner quantum QPUs.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/aws-braket-arch.png" width=800>

## Amazon Braket

STATUS: AVAILABLE

Amazon Braket is a fully managed quantum computing service that helps researchers and developers get started with the technology to accelerate research and discovery. Amazon Braket provides a development environment for you to explore and build quantum algorithms, test them on quantum circuit simulators, and run them on different quantum hardware technologies (IonQ, D-Wave...)

### Basics

- :book: AWS Braket - https://aws.amazon.com/braket/
- 📘 Example AWS Braket Jupyter notebooks here --> https://github.com/aws/amazon-braket-examples
- 📖 AWS Quantum blog - https://aws.amazon.com/blogs/quantum-computing
- :octocat: Learn more about AWS Braket - https://github.com/lynnlangit/Hello-AWS-Data-Services/tree/master/7_quantum-computing

### Learn More and Tools 
- :book: AWS Braket near real-time pricing tools - https://docs.aws.amazon.com/braket/latest/developerguide//braket-pricing.html
- 📖 AWS Braket Hybrid Tool guide (and link to example notebook) - https://docs.aws.amazon.com/braket/latest/developerguide/braket-jobs.html
- :book: AWS Quantum papers - https://www.amazon.science/blog/aws-scientists-coauthor-13-qip-2021-quantum-computing-papers
- :book: Pennylane.ai for QML on AWS Braket - https://pennylane.ai/qml/demos/braket-parallel-gradients.html
- 🎥 Talk "Noise in Quantum Computing - https://www.youtube.com/watch?v=y9RzCGIjSBQ
- :octocat: Qiskit provider for AWS Braket - https://github.com/qiskit-community/qiskit-braket-provider

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/aws-braket.png" width=800>

### @Werner interviews

Werner Vogels interview series for Quantum Computing.
- 🎥 first video "Dr. John Preskill" -- https://www.youtube.com/watch?v=tcTF_ag_wWU

### PennyLane Library

Penny Lane - PennyLane is a cross-platform Python library for differentiable programming of quantum computers. Train a quantum computer the same way as a neural network. Image from QT Conference talk by PennyLane team member. The PennyLane quantum machine learning library is compatible with the AWS Braket service.
- :octocat: Github - https://github.com/PennyLaneAI/pennylane
- 📘 Demos - https://pennylane.ai/qml/demos_basics.html

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/penny-lane-ml.png" width=600>


