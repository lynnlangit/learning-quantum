# Negative results: what we tried and why it closed

Closed ideas are as useful to the next person as open ones. Each row was measured with the official verifier or an exact model. Back to the [overview](README.md).

| Idea | Task | Tool / method | Result | Why it closed |
|---|---|---|---|---|
| GF(2¹²) multiplier with fewer than 42 ANDs | DQI | Symmetric SAT (cube-and-conquer), flip-graph search | None found | Coding-theory bound is ≥ 31; several symmetric families proven impossible; the hard cases stayed intractable |
| In-place field multiplier | DQI | Qubit/Toffoli analysis | No-go | Saved qubits cost more Toffolis than they were worth |
| Lower the peak qubit count by pebbling | DQI | Value liveness over 2,048 sampled shots + GF(2) rank tests | Net ≈ +0.01% score | 56 of ~200 peak moments hold only deep GF(2¹²) arithmetic (6–12 Toffolis to recompute each) |
| Cache and reuse intermediate values | DQI | Static scan for spare qubits at the peak | No gain | No spare qubits at the peak (the public authors later found exact product-caching sites, −1.4%) |
| Drop rarely used decoder branches | DQI | Instrumented simulator; held-out seed | −5% to −29% score | Rare branches fire ~1e-4–1e-3 per shot: too often for the failure penalty |
| Delete gates that never fire | invsqrt | Bitsliced scan over 3.1 M inputs, greedy official checks | Failed Kaggle's grader | The gates were phase corrections for rare measurement outcomes; one seed never drew them |
| Re-fit the chemistry factorization weights | Chemistry | Augmented Lagrangian; KKT check over 51,840 parameters | Already optimal | Gradient lies along the active accuracy and energy-gap limits |
| Fewer products in the angle loaders | Chemistry | Flip-graph search, 15 loaders × 300,000 steps | 0 saved | Public loaders come from stronger dedicated compilers |
| Logic-synthesis rewriting of loaders | Chemistry | Exact multiplicative-complexity rewriting | 339 → 339 ANDs | Don't-cares already exploited |
| 7-bit angle words | Chemistry | Quantization-aware fit | 347 mHa (limit 20) | Accuracy collapses below 8 bits for this factorization |
| Cheaper "coded" bit-planes added afterwards | Chemistry | Constrained refit | 76.6 mHa (limit 20) | The structure has to be designed into the fit from the start |
| Analogies from biology (photosynthesis, folding, tunneling) | All | Literature review | No transfer | They concern physical quantum effects, not logical-level compilation cost |

**Pattern:** every local lever saturated at a fraction of a percent. The gains that mattered came from new algorithm-level designs (new decoders, new chemistry tables and loaders) published by other teams.
