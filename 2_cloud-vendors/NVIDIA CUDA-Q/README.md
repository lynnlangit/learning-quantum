# NVIDIA CUDA-Q & Quantum Cloud

[NVIDIA CUDA-Q](https://developer.nvidia.com/cuda-q) is a powerful tool designed to boost the performance of quantum computing applications. It leverages the parallel computing capabilities of NVIDIA GPUs to accelerate quantum simulations, offering significant improvements in speed and efficiency.

## CUDA-Q Key Features and Enhancements

The latest release of NVIDIA CUDA-Q introduces several new features and enhancements that are aimed at optimizing quantum application performance. These include:

- **Improved Simulation Performance:** CUDA-Q now supports faster simulation of quantum circuits, thanks to optimized algorithms and better utilization of GPU resources.
- **Enhanced Qubit Management:** The new version provides more efficient management of qubits, allowing for the simulation of larger quantum circuits.
- **Advanced Noise Models:** CUDA-Q includes more realistic noise models, enabling more accurate simulation of quantum systems in the presence of environmental noise.

For a detailed overview of all the new features and improvements, refer to the official NVIDIA blog post: [New NVIDIA CUDA-Q Features Boost Quantum Application Performance](https://developer.nvidia.com/blog/new-nvidia-cuda-q-features-boost-quantum-application-performance/).

## Getting Started with CUDA-Q

To start using CUDA-Q for your quantum computing projects, follow the QuickStart guide available at [CUDA-Q QuickStart](https://nvidia.github.io/cuda-quantum/latest/using/quick_start.html). This guide provides step-by-step instructions on how to set up your environment, compile and run quantum simulations using CUDA-Q.  NOTE: *"CUDA-Q does not require a GPU to use, but some components are GPU-accelerated."*  

### What is a CUDA-Q Kernel?

[From NVIDIA's documentation](https://nvidia.github.io/cuda-quantum/latest/using/basics/kernel_intro.html) *"Quantum kernels are defined as functions that are executed on a quantum processing unit (QPU) or a simulated QPU. They generalize quantum circuits and provide a new abstraction for quantum programming. Quantum kernels can be combined with classical functions to create quantum-classical applications that can be executed on a heterogeneous system of QPUs, GPUs, and CPUs to solve real-world problems.  Every quantum circuit is a kernel, but not every quantum kernel is a circuit. For instance, a quantum kernel can be built up from other kernels, allowing us to interpret a large quantum program as a sequence of subroutines or subcircuits."*

## Quantum Cloud for CUDA-Q

CUDA-Q can currently be run on simulators or one of two cloud backends - [Amazon Braket](https://nvidia.github.io/cuda-quantum/latest/using/backends/cloud/braket.html) or [NVIDIA Quantum Cloud](https://nvidia.github.io/cuda-quantum/latest/using/backends/cloud/nvqc.html).
