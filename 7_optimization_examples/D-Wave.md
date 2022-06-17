# D-Wave Optimization Examples

## Not-All-Equal 3-Satisfiability (NAE3SAT)

The code reformulates NAE3SAT instances as Ising problems, embeds these onto the QPU graphs, and analyzes the solution quality obtained from both QPUs. From this Repo --> https://github.com/dwave-examples/NAE3SAT. 

Explantion (from Repo): "*NAE3SAT is an NP-complete Boolean satisfiability (SAT) problem that has clauses of three literals each and requires that for every clause the literals are not all equal to each other; i.e., all configurations are valid except (-1, -1, -1) and (+1, +1, +1) (for spin-valued variables, or (0,0,0) and (1, 1, 1) for binary-valued variables).*"

## Run in D-Wave Leap IDE

D-Wave provides a [browser-based version of VSCode IDE](https://ide.dwavesys.io/#https://github.com/dwave-examples/NAE3SAT) with libraries pre-loaded.  This allows you to quickly try out this example.  Screenshot (example output) shown below.

<img src="https://github.com/lynnlangit/learning-quantum/blob/main/images/d-wave-ide.png" width=800>
