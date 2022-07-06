# use SciPy to generate a random matrix
import numpy as np
import scipy.linalg as la
import matplotlib.pyplot as plt
import braket

# generate a random matrix
n = 3
A = np.random.rand(n, n)

# create a braket.Matrix object
matrix = braket.Matrix(A)

# create a braket.Circuit object
circuit = braket.Circuit(matrix)

# create a braket.Session object
session = braket.Session()

# create a braket.Job object
job = session.create_job(circuit)

# run the job
job.run()

# get the results
results = job.results()

# plot the results
plt.imshow(results.data)
plt.show()

# close the session
session.close()

# close the job
job.close()
