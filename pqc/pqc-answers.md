# PQC Answers

This English guide contains **600 answer records**, corresponding to `pqc-questions-600.md`. Records are organized by primary domain and subtopic; join the files by permanent question ID rather than file position.

This edition preserves the 526 source answer records and adds Q527–Q600, with correct-answer letters, the corresponding option text, explanations, metadata and topic-relevant Further learning links. The additions cover Bloch-sphere geometry, quantum gates and circuits, measurement, no-cloning, error correction, Mosca timing, QKD interpretation and sector-specific standards and compliance.

**Revision scope — October 24, 2026:** the original Q001–Q526 records and their existing source-date snapshots are retained; this file-generation step is not a new comprehensive factual audit of those records. The source edition described its learning-reference review as October 9, 2026. The new records are original practice material, not an official or reconstructed examination bank, and do not provide a legal opinion or a copyright-clearance guarantee.

Time-sensitive standards, policy and roadmap questions must be read with their stated date, edition, jurisdiction and scope. Original October 8–9, 2026 snapshots remain historical snapshots rather than claims of the latest status. Public ISO scope pages do not replace the full applicable standards. New sector scenarios distinguish legislation, control guidance, algorithm specifications and implementation assurance; their organizations are hypothetical.

## Domain Index

Each question has one primary domain and is counted once in this table. Domain sizes reflect the questions' learning objectives, not preset quotas or official exam weights.

| Code | Study domain | Questions |
|---|---|---:|
| QF | [Quantum Computing Foundations](#quantum-computing-foundations) | 89 |
| QR | [Quantum Threats & Risk](#quantum-threats--risk) | 42 |
| QKD | [Quantum Key Distribution (QKD)](#quantum-key-distribution-qkd) | 58 |
| PQC | [PQC Algorithms & Mechanisms](#pqc-algorithms--mechanisms) | 56 |
| SCR | [Standards, Compliance & Roadmaps](#standards-compliance--roadmaps) | 95 |
| MIG | [PQC Migration & Program Management](#pqc-migration--program-management) | 109 |
| IPT | [Protocols, Implementation & Testing](#protocols-implementation--testing) | 93 |
| CYB | [Cybersecurity Fundamentals](#cybersecurity-fundamentals) | 58 |
| Total | All primary domains | 600 |

## Reading and Importing the Markdown

Both files use the same permanent question IDs and metadata fields. These are Markdown study files, not JSON exports and not fixed mock exams.

- **Record boundary**: Each question or answer starts at a heading such as `### Q001`; the next question heading or any level-two heading (`## `) ends that record, including the start of reference material.
- **Primary domain**: The `Domain` field contains one stable domain code from the index; use this field, not an old mock assignment, to select questions.
- **Subtopic**: The `Subtopic` field contains a stable topic ID; the `Subtopic name` field provides its readable label.
- **Tags**: Comma-separated format tags allow filters such as `hands_on`, `business_scenario`, `calculation` or `date_recall`; tags are not additional counted domains.
- **Difficulty**: The existing Foundational, Applied and Advanced learning labels are preserved; they are not official exam ratings.
- **Pairing**: Join questions and answers by permanent ID, regardless of their positions in a file or a generated study session.
- **Option identity**: A-D retain their original option order and answer mapping. If an application shuffles options, it must retain each original option identity and remap the displayed answer letter.

The eight domains are a custom study taxonomy. Hands-on is a cross-domain tag: a circuit exercise remains in Foundations, a QKD exercise remains in QKD, and a company planning scenario remains in Migration rather than being classified by its presentation alone.

## Quantum Computing Foundations

Quantum states, qubits, gates, circuits, measurement, entanglement, quantum algorithms and simulation fundamentals. This domain contains 89 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| Qubits, States and Superposition | 6 |
| Bloch Sphere and State Geometry | 10 |
| Gates and Quantum Circuits | 41 |
| Measurement, Probability and Sampling | 11 |
| Entanglement and No-Cloning | 7 |
| Quantum Algorithms and Computational Models | 8 |
| Simulation, Noise and Reproducibility | 2 |
| Quantum Error Correction and Logical Qubits | 4 |

### Q008

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

There are 2^n basis states, but a measurement does not read them all ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

The state space grows exponentially, but a single standard measurement produces a string of n bits ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Review the size of a joint n-qubit state space and the outcomes of standard-basis measurement; the number of amplitudes is not the number of results read out at once ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q018

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Representing the state of a single qubit ([IBM Quantum: Composer and the Bloch Sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer))

The Bloch sphere provides a view of a single qubit and is not, by itself, a complete description of an entangled joint state ([IBM Quantum: Composer and the Bloch Sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Read the phase-disk and q-sphere visualizations; distinguish a local single-qubit picture from the joint state of several qubits ([IBM Quantum: Composer and the Bloch Sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q106

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

A number whose squared magnitude determines the measurement probability ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

The Born rule uses the squared absolute value, so an amplitude is generally not itself the probability ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Work through state vectors, normalization and standard-basis measurement; square the magnitude of each relevant amplitude ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q190

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

They have a different relative phase between the 0 and 1 components ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

The two states have equal Z-basis probabilities, but their relative phase makes them distinguishable in an appropriate basis ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Compare global and relative phase, including the Hadamard test that distinguishes plus and minus states ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q205

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** D

They are not physically distinguishable through measurements ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

A global phase is unobservable; this does not imply that a relative phase between components is also meaningless ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Compare global and relative phase, including the Hadamard test that distinguishes plus and minus states ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q245

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

A state that is a linear combination of basis states ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

Superposition includes amplitudes and phases; it is not a store of classical outcomes all accessible in a single readout ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Work through state vectors, normalization and standard-basis measurement; square the magnitude of each relevant amplitude ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q527

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

\(\vert0\rangle\) and \(\vert1\rangle\)

**Explanation:** The conventional Bloch sphere places \(\vert0\rangle\) on the positive z-axis at the north pole and \(\vert1\rangle\) on the negative z-axis at the south pole. The x- and y-axis states are different superpositions, not the computational-basis poles. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish the z-axis basis states from the x- and y-axis superpositions. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q528

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Pure states away from the poles can also be superpositions; the equator specifically gives equal computational-basis probabilities

**Explanation:** Equal computational-basis probabilities characterize the equator, not superposition in general. A pure state with both computational-basis amplitudes nonzero is a superposition even when their magnitudes differ; such a state lies away from both poles and may lie off the equator. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Separate equal-amplitude superposition from superposition more generally. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q529

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

On the positive and negative x-axis, respectively

**Explanation:** The conventional coordinates are positive x for \(\vert+\rangle\) and negative x for \(\vert-\rangle\). Both give equal Z-basis probabilities, but their relative phases differ and an X-basis measurement distinguishes them. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Equal measurement probabilities in one basis do not establish state identity. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q530

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

Positive y

**Explanation:** The state \((\vert0\rangle+i\vert1\rangle)/\sqrt{2}\) has polar angle \(\pi/2\) and azimuth \(\pi/2\), placing its Bloch vector on positive y. Its Z-basis probabilities remain equal. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Connect the relative phase to the azimuthal angle. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q531

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The polar angle and the relative-phase-related azimuthal angle

**Explanation:** The parameter \(\theta\) is the polar angle, while \(\phi\) is the azimuth associated with the phase of the \(\vert1\rangle\) amplitude relative to \(\vert0\rangle\). At a pole, one amplitude is zero and the azimuth does not specify a different physical state. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Relate spherical coordinates to amplitude magnitudes and relative phase. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q532

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** A

\(\sin^2(\theta/2)\)

**Explanation:** The Born rule uses the squared magnitude of the amplitude, not the amplitude itself. Therefore \(P(1)=\lvert e^{i\phi}\sin(\theta/2)\rvert^2=\sin^2(\theta/2)\); the phase factor has unit magnitude. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Apply the squared-magnitude rule and distinguish amplitude from probability. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q533

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

At the same point, because the difference is a global phase

**Explanation:** Multiplication of the entire vector by a unit-magnitude phase changes neither its physical state nor its Bloch point. Changing only one nonzero component's phase is different: that changes relative phase and can move the point. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Distinguish a common global phase from a relative phase. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q534

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

The maximally mixed state \(I/2\)

**Explanation:** The Bloch-ball representation writes a qubit density matrix as \(\rho=(I+r_xX+r_yY+r_zZ)/2\). At the center the Bloch vector is zero, giving \(\rho=I/2\), the maximally mixed state rather than a pure superposition. ([IBM Quantum Learning: Density matrices and reduced-state descriptions](https://quantum.cloud.ibm.com/learning/en/courses/general-formulation-of-quantum-information/density-matrices/introduction)).

#### Further learning

- **Reading focus:** Distinguish the Bloch-ball interior from its pure-state surface. ([IBM Quantum Learning: Density matrices and reduced-state descriptions](https://quantum.cloud.ibm.com/learning/en/courses/general-formulation-of-quantum-information/density-matrices/introduction)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q535

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** A

The local vectors alone need not reveal the systems' different joint correlations

**Explanation:** A local Bloch vector describes a reduced single-qubit state, not all correlations of a joint system. For example, the Bell state \((\vert00\rangle+\vert11\rangle)/\sqrt{2}\) and the equal classical mixture of \(\vert00\rangle\) and \(\vert11\rangle\) both have maximally mixed local states, while their joint states differ. ([IBM Quantum Learning: Density matrices and reduced-state descriptions](https://quantum.cloud.ibm.com/learning/en/courses/general-formulation-of-quantum-information/density-matrices/introduction); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Local state information alone does not reconstruct an entangled joint state. ([IBM Quantum Learning: Density matrices and reduced-state descriptions](https://quantum.cloud.ibm.com/learning/en/courses/general-formulation-of-quantum-information/density-matrices/introduction); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bell state](https://en.wikipedia.org/wiki/Bell_state); [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q536

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Orthogonal pure single-qubit states

**Explanation:** Antipodal surface points correspond to orthogonal pure qubit states. Examples include the north and south poles, as well as positive and negative x; a suitable basis measurement can distinguish each such pair perfectly. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Distinguish antipodal states from vectors differing only by global phase. ([IBM Quantum: Single-qubit states and the Bloch sphere](https://quantum.cloud.ibm.com/docs/en/guides/composer); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q012

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

∣11⟩ ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

The control remains 1 and the target flips from 0 to 1; the qubit order is explicitly defined in the question ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Track the specified X, H or CNOT operation in the stated qubit order before computing the measurement outcome ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q039

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

00 or 11 with equal probability ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

The circuit prepares the Bell state ∣Φ+⟩ with equal amplitudes for 00 and 11 ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Prepare the Bell state with H on the control followed by CNOT; derive the correlated Z-basis outcomes ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Bell state](https://en.wikipedia.org/wiki/Bell_state); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q094

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

It swaps them ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

X is a quantum bit-flip gate in the computational basis, not a measurement or reset operation ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Track the specified X, H or CNOT operation in the stated qubit order before computing the measurement outcome ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q146

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

Apply H immediately before measuring in Z ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

H maps X-basis states to the Z basis, making the measurement equivalent to measuring the original state in X ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Track the specified X, H or CNOT operation in the stated qubit order before computing the measurement outcome ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q161

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

Hadamard, H ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

H creates an equal superposition of 0 and 1 from |0⟩; X alone transforms it to |1⟩ ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Track the specified X, H or CNOT operation in the stated qubit order before computing the measurement outcome ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q192

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual, circuit_analysis

**Correct answer:** D

The state remains |00⟩ ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

CNOT flips the target only when the control is 1, so it does not change the state here and does not create entanglement ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Track the specified X, H or CNOT operation in the stated qubit order before computing the measurement outcome ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q297

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

0 with certainty ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

Two consecutive H operations return the state to its initial state, so the result does not remain random ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Track the specified X, H or CNOT operation in the stated qubit order before computing the measurement outcome ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q537

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

A 180-degree rotation around the x-axis

**Explanation:** Pauli-X exchanges \(\vert0\rangle\) and \(\vert1\rangle\). Its action on Bloch vectors is a 180-degree x-axis rotation; with the standard rotation definition, \(R_x(\pi)=-iX\), so the matrices differ by a global phase. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Relate Pauli gates to rotations without confusing exact matrix equality with phase equivalence. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q538

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** D

\(Y\vert0\rangle=i\vert1\rangle\), \(Y\vert1\rangle=-i\vert0\rangle\)

**Explanation:** The conventional matrix is \(Y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}\), which gives \(Y\vert0\rangle=i\vert1\rangle\) and \(Y\vert1\rangle=-i\vert0\rangle\). Ignoring these factors would incorrectly identify Y with X on arbitrary superpositions. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Retain the phase factors when applying Pauli-Y. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q539

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

\(\vert-\rangle\)

**Explanation:** Z multiplies the \(\vert1\rangle\) amplitude by \(-1\), so it turns \((\vert0\rangle+\vert1\rangle)/\sqrt{2}\) into \((\vert0\rangle-\vert1\rangle)/\sqrt{2}=\vert-\rangle\). The computational-basis probabilities remain unchanged. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Understand a phase flip in both the computational and plus/minus bases. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q540

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** C

The vector becomes \(-\vert1\rangle\), representing the same physical state when considered on its own

**Explanation:** For an isolated \(\vert1\rangle\) input, the factor \(-1\) is global and does not change the physical state. The same Z operation on a superposition can change a meaningful relative phase, so it is not generally equivalent to doing nothing. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Do not confuse the global phase on one basis state with Z's action on all inputs. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q541

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

\(\vert-\rangle\)

**Explanation:** The Hadamard maps \(\vert0\rangle\) to \(\vert+\rangle\) and \(\vert1\rangle\) to \(\vert-\rangle\). The minus sign in the second result matters for interference and for the inverse transformation. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Learn both computational-basis images of H, not just its action on zero. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q542

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** D

\(\vert0\rangle\)

**Explanation:** Hadamard interchanges the computational and plus/minus bases: \(H\vert+\rangle=\vert0\rangle\). It can therefore remove a computational-basis superposition rather than always create one. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Apply H to superposed inputs as well as basis inputs. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q543

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

The original state \(\vert\psi\rangle\)

**Explanation:** The matrix identity \(H^2=I\) applies to every input state, not only \(\vert0\rangle\) or \(\vert1\rangle\). If the original input is a superposition, two consecutive ideal H gates restore that superposition, not a forced basis state. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Self-inverse means restoring the original input, whatever that input was. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q544

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** C

\(HZH=X\)

**Explanation:** Conjugating Z by H gives X: \(HZH=X\). Hadamard changes the basis in which a phase flip acts as a bit flip; it does not make the operation identity. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Use basis changes to connect bit-flip and phase-flip operations. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q545

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

\(\vert+i\rangle\)

**Explanation:** The standard S matrix is \(\operatorname{diag}(1,i)\). Applied to \(\vert+\rangle\), it produces \((\vert0\rangle+i\vert1\rangle)/\sqrt{2}=\vert+i\rangle\), retaining equal computational-basis probabilities. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Track the relative phase added by S. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q546

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

\(\pi/4\)

**Explanation:** The standard T matrix is \(\operatorname{diag}(1,e^{i\pi/4})\). It adds a relative phase of \(\pi/4\), corresponding to a 45-degree z-axis rotation of the Bloch vector; it does not change computational-basis populations. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Separate T's 45-degree phase shift from S's 90-degree shift. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q547

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

S

**Explanation:** Composing T twice adds the two \(\pi/4\) phase shifts, giving \(T^2=\operatorname{diag}(1,i)=S\). It does not undo T. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Use phase addition to derive relationships between T, S and Z. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q548

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

Z

**Explanation:** Applying S twice gives \(S^2=\operatorname{diag}(1,i^2)=\operatorname{diag}(1,-1)=Z\). S is therefore not self-inverse. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish S squared from S followed by its inverse. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q549

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** C

\(S^\dagger\)

**Explanation:** The conjugate transpose \(S^\dagger=\operatorname{diag}(1,-i)\) reverses S, giving \(S^\dagger S=I\). Applying S a second time instead gives Z. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish a gate's inverse from a second application of the gate. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q550

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

It is the inverse of T and adds the opposite relative phase

**Explanation:** The T-dagger gate is \(\operatorname{diag}(1,e^{-i\pi/4})\). Its phase cancels T's phase, and \(T^\dagger T=I\); unitary gates need not be self-inverse. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Recognize the inverse phase and the meaning of the dagger notation. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q551

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

They differ only by an overall global phase

**Explanation:** With conventional definitions, \(P(\lambda)=e^{i\lambda/2}R_z(\lambda)\). They therefore have the same standalone single-qubit physical action, up to global phase; this does not justify blindly substituting their controlled versions, where a branch-dependent phase can matter. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish phase-equivalent single-qubit gates from controlled-gate equivalence. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q552

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** C

\(R_x(\pi)=-iX\)

**Explanation:** Using \(R_x(\theta)=\cos(\theta/2)I-i\sin(\theta/2)X\), substitution of \(\theta=\pi\) gives \(R_x(\pi)=-iX\). The global factor explains identical Bloch-vector action without exact matrix equality. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Keep track of global factors when translating between rotations and Pauli gates. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Bloch sphere](https://en.wikipedia.org/wiki/Bloch_sphere); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q553

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

\(\vert+\rangle\)

**Explanation:** The conventional \(R_y\) matrix gives \(R_y(\pi/2)\vert0\rangle=(\vert0\rangle+\vert1\rangle)/\sqrt{2}=\vert+\rangle\). This specifies one input-output relation, not equality of the full \(R_y(\pi/2)\) and H matrices. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish matching behavior on one input from equality of two gates. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q554

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** D

Computational-basis probabilities remain unchanged, although probabilities in other bases can change

**Explanation:** A z-axis rotation changes component phases rather than their magnitudes, so Z-basis probabilities stay fixed. A later basis change can convert the relative-phase change into different outcome probabilities, so the invariance does not extend to every basis. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Separate population changes from observable phase effects after a basis change. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q555

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

Applying SX twice gives X

**Explanation:** The SX gate is the square root of Pauli-X and satisfies \(SX\,SX=X\). Although both SX and H can create equal-amplitude superpositions from \(\vert0\rangle\), they are different gates with different phases. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Do not identify all equal-probability state preparations with H. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q556

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

It leaves the input state unchanged

**Explanation:** Ideal identity leaves the input state unchanged, including any joint entanglement. It does not prepare zero or remove correlations; physical idle time can still be noisy, but that is distinct from the ideal mathematical operation. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Separate the ideal identity operator from reset and from real hardware idling. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q557

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The gate acts coherently on the superposed branches according to linearity

**Explanation:** CNOT is unitary and applies its basis-state rule coherently to superpositions by linearity. It does not measure the control to make a classical decision, and whether a particular input becomes entangled depends on both qubits. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Use linearity rather than an implicit measurement to analyze controlled gates. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q558

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** D

The state remains \(\vert+\rangle\vert+\rangle\), without creating entanglement

**Explanation:** Because \(X\vert+\rangle=\vert+\rangle\), the target is unchanged on both control branches. Thus the output remains \(\vert+\rangle\vert+\rangle\), showing that a superposed control does not by itself guarantee entanglement. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Check the target state before claiming that CNOT creates entanglement. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q559

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

Identity on the two-qubit state

**Explanation:** The second identical CNOT reverses the first conditional flip, so \(\operatorname{CNOT}^2=I\). Linearity extends this statement from basis inputs to arbitrary two-qubit states. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish the self-inverse property of CNOT from the three-gate SWAP construction. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q560

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

Only \(\vert11\rangle\)

**Explanation:** CZ has diagonal entries \((1,1,1,-1)\) in the specified basis. It changes the phase of the \(\vert11\rangle\) component without changing its measurement probability; on the isolated basis state alone that minus sign is global. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Track phase rather than treating CZ as a conditional bit flip. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q561

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

The output is entangled even though all four computational-basis outcomes still have probability 25%

**Explanation:** The output is \((\vert00\rangle+\vert01\rangle+\vert10\rangle-\vert11\rangle)/2\). Its amplitude matrix has nonzero determinant, so it cannot factor into two single-qubit vectors, even though all four Z-basis probabilities remain 25%. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Unchanged computational-basis probabilities do not rule out an entangling phase change. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q562

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** D

H on B, then CZ on A and B, then H on B

**Explanation:** Applying H to the target before and after CZ conjugates the target's Z action into X because \(HZH=X\). The result is CNOT with the same control and the specified target. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Place the Hadamard basis changes on the target, not the control. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q563

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

Three CNOT gates with alternating control directions can exchange the quantum states without requiring the physical devices to exchange positions

**Explanation:** The chronological sequence CNOT A-to-B, CNOT B-to-A, CNOT A-to-B maps \(\vert a,b\rangle\) to \(\vert b,a\rangle\), and linearity extends it to quantum states. The logical states are exchanged without a requirement to physically move the devices. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish state exchange, physical relocation and forbidden independent cloning. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q564

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

\(\vert111\rangle\)

**Explanation:** With both controls equal to 1, Toffoli flips the target. The specified input therefore becomes \(\vert111\rangle\), with both controls unchanged. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** State the control/target order before applying the CCNOT rule. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q565

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Yes; its unitary action extends coherently to superpositions

**Explanation:** Toffoli's action is unitary, so its conditional bit-flip rule extends coherently to superposed inputs. Measuring the controls first would generally implement a different process and could destroy coherence. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Analyze Toffoli as a quantum operation, not as a measurement-based classical decision. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q566

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** D

Its classical reversible universality does not mean that Toffoli alone is universal for quantum computation

**Explanation:** Classical reversible universality means that Toffoli can implement reversible classical computations with suitable auxiliary bits. Toffoli alone only permutes computational-basis states and cannot generate arbitrary quantum superpositions from basis initialization, so it is not by itself quantum-universal. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Qualify the type of universality claimed for a gate or gate set. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q567

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** A

H, T and CNOT

**Explanation:** H and T support approximate single-qubit universality, and CNOT provides the needed entangling operation for general multi-qubit circuits. The statement is about approximation to suitable accuracy, not exact finite synthesis of every arbitrary real-angle rotation. ([IBM Qiskit: Solovay-Kitaev approximate gate synthesis](https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.transpiler.passes.SolovayKitaev); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish approximate universality from exact synthesis of arbitrary rotations. ([IBM Qiskit: Solovay-Kitaev approximate gate synthesis](https://quantum.cloud.ibm.com/docs/api/qiskit/qiskit.transpiler.passes.SolovayKitaev); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q568

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

It applies U on the control-1 branch and identity on the control-0 branch, coherently

**Explanation:** A standard controlled-U is \(\vert0\rangle\langle0\vert\otimes I+\vert1\rangle\langle1\vert\otimes U\). The operation acts coherently on a superposed control rather than measuring it. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Identify the control branches and the target register explicitly. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q569

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

Applying its conjugate transpose \(U^\dagger\)

**Explanation:** Unitarity gives \(U^\dagger U=I\), so the conjugate transpose reverses U. Applying U twice works only for self-inverse gates; measurement and reset are not general inverses. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Use the unitary inverse rather than assuming every gate squares to identity. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information); [IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate).

### Q570

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

They are generally non-unitary operations and do not provide a unitary inverse restoring an arbitrary unknown input

**Explanation:** Measurement and reset are generally non-unitary as standalone qubit operations. They do not provide a unitary inverse that recovers an arbitrary unknown input; any fuller treatment of measuring apparatus or environment is a different system description. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Distinguish reversible unitary gates from non-unitary operations. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q005

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The first produces 0 with certainty, while the second produces 0 or 1 with equal probability ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

The outcome distribution depends on the amplitudes relative to the measurement basis ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Work through state vectors, normalization and standard-basis measurement; square the magnitude of each relevant amplitude ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q006

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** C

0 with certainty ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Measuring an ideal basis state in the same basis returns its value with certainty ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q015

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** scenario, hands_on

**Correct answer:** C

Finite counts vary statistically around the probability ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

Shots are samples, so even a theoretical 50% distribution does not require exact equality in every sample ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Review repeated shots and sampling fluctuations; a theoretical probability does not require exact equality of observed counts ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q024

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** D

64% ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

Under the Born rule, the probability is 0.8 squared, or 0.64; the amplitudes are already normalized ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Work through state vectors, normalization and standard-basis measurement; square the magnitude of each relevant amplitude ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q096

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

One classical result: 0 or 1 ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

Measurement produces one result according to probabilities derived from the squares of the amplitudes' magnitudes ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Work through state vectors, normalization and standard-basis measurement; square the magnitude of each relevant amplitude ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q104

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** D

The outcome corresponding to |+⟩ with certainty ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

|+⟩ is an X-basis state, so measurement in the same basis is deterministic under ideal conditions ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q129

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

The result is 1 again ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

After a Z measurement yielding 1, the state is |1⟩, so a repeated measurement in the same basis returns 1 ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Work through state vectors, normalization and standard-basis measurement; square the magnitude of each relevant amplitude ([IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q170

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Each measurement produces one sample from the distribution ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

The state is prepared and measured again to accumulate statistics; the same arbitrary state is not copied ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Review repeated shots and sampling fluctuations; a theoretical probability does not require exact equality of observed counts ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q183

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

The two X outcomes are equally likely ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

In BB84, mismatched bases give an equally random result here, so this event is discarded during sifting ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84); [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q228

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** C

About half 0 and half 1 ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information))

H prepares ∣+⟩, whose measurement in Z gives an equal distribution in expectation, not necessarily equal counts in a sample ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).

#### Further learning

- **Reading focus:** Review repeated shots and sampling fluctuations; a theoretical probability does not require exact equality of observed counts ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: States and Measurement](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/single-systems/quantum-information)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q571

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** B

The result is 0 with certainty, and the state remains \(\vert0\rangle\)

**Explanation:** An ideal projective Z measurement of its eigenstate \(\vert0\rangle\) gives result 0 with certainty and leaves that state unchanged. Measurement can disturb other inputs, but it is incorrect to say that every measurement must change every input state. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).

#### Further learning

- **Reading focus:** Qualify measurement disturbance by the input state and measurement basis. ([IBM Quantum: Circuit operations, phase and state visualizations](https://quantum.cloud.ibm.com/docs/en/guides/composer)).
- **Background (Wikipedia):** [Quantum logic gate](https://en.wikipedia.org/wiki/Quantum_logic_gate); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q048

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

All four Z outcomes are equally likely in expectation, and the state is not entangled ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

Local operations prepare ∣+⟩ on each qubit independently, resulting in a product state rather than an entangled state ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Use the tensor-product definition to distinguish independent pure states from an entangled joint state ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q181

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

A classical mixture can also produce the same Z-basis statistics ([IBM Quantum: Entanglement versus Classical Correlation](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/entanglement-in-action/introduction))

Correlations in a single basis do not describe the full state; additional tests are needed to distinguish coherence ([IBM Quantum: Entanglement versus Classical Correlation](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/entanglement-in-action/introduction)).

#### Further learning

- **Reading focus:** Compare a Bell state with classically correlated random bits; identify why a single measurement basis cannot distinguish them ([IBM Quantum: Entanglement versus Classical Correlation](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/entanglement-in-action/introduction)).
- **Background (Wikipedia):** [Bell state](https://en.wikipedia.org/wiki/Bell_state).

### Q185

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The prohibition is against universal cloning of an arbitrary unknown state ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information))

Preparing a known state again is different from making a perfect copy of an unknown state without disturbing it ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Read the no-cloning theorem and its assumptions; contrast cloning an arbitrary unknown state with preparing a known state again ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

### Q214

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

A joint state that cannot be written as the product of states of two separate qubits ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits))

Entanglement is a property of the joint state, not of physical proximity or a one-time equality of outcomes ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).

#### Further learning

- **Reading focus:** Use the tensor-product definition to distinguish independent pure states from an entangled joint state ([IBM Quantum: Multiple Quantum Systems](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/multiple-systems/quantum-information); [IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits)).
- **Background (Wikipedia):** [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q260

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

Perfect universal cloning of an arbitrary unknown quantum state ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information))

The prohibition applies to a perfect cloning machine for every unknown state, not to repeatedly preparing a known state ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Read the no-cloning theorem and its assumptions; contrast cloning an arbitrary unknown state with preparing a known state again ([IBM Quantum: Limitations and No-Cloning](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

### Q572

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

**Correct answer:** A

The circuit produces an entangled Bell state rather than two independent copies of \(\vert+\rangle\)

**Explanation:** CNOT maps \(\vert+\rangle\vert0\rangle\) to \((\vert00\rangle+\vert11\rangle)/\sqrt{2}\), not to the product \(\vert+\rangle\vert+\rangle\). The circuit copies computational-basis values but is not a universal copier for unknown quantum states. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Contrast Bell-state creation with independent cloning. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate); [Bell state](https://en.wikipedia.org/wiki/Bell_state); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q573

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Copying a state promised to be one of the orthogonal computational-basis states

**Explanation:** Orthogonal states from a known promised set can be copied; CNOT with a zero target copies computational-basis values. The no-cloning theorem instead rules out one perfect copying process that works on arbitrary unknown states, including nonorthogonal alternatives. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Separate copying orthogonal alternatives from universal unknown-state cloning. ([IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Controlled NOT gate](https://en.wikipedia.org/wiki/Controlled_NOT_gate).

### Q147

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

An operation that marks candidates satisfying the search condition ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Grover's Algorithm](https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm))

The oracle distinguishes desired candidates from others, and amplitude amplification increases the probability of measuring them ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Grover's Algorithm](https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm)).

#### Further learning

- **Reading focus:** Follow phase marking and amplitude amplification, then relate the iteration count to the square root of the search space ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Grover's Algorithm](https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm)).
- **Background (Wikipedia):** [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q247

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Speedup depends on the problem and the appropriate algorithm ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm))

Grover demonstrates a particular improvement for search and Shor for certain number-theoretic problems, not a general guarantee of speedup for every program ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).

#### Further learning

- **Reading focus:** Compare the specific search and number-theory problems addressed by Grover and Shor rather than assuming a speedup for every computation ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm); [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q252

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** A

2^64 ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

This is the square root of the size of the search space in the query model, not an estimate of the practical runtime of an attack on AES ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Apply the square-root query bound to the stated search space, then read NIST on why query counts are not physical attack runtimes ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q265

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

A quadratic improvement in the number of search queries ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Grover's Algorithm](https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm))

Grover reduces a search of order N to order √N in the query model; it is not a universal solution to every problem ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Grover's Algorithm](https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm)).

#### Further learning

- **Reading focus:** Follow phase marking and amplitude amplification, then relate the iteration count to the square root of the search space ([IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers); [IBM Quantum: Grover's Algorithm](https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm)).
- **Background (Wikipedia):** [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q501

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** B

Roughly 64 bits effective security ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers))

Grover's algorithm gives a quadratic speedup for unstructured search. A brute-force search of AES-128's 2^128 keys therefore falls to about 2^64 operations in the quantum query model, which is roughly 64 bits of effective security ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers)). That figure is a query bound, not evidence that AES-128 is broken on present hardware. 128 bits would be the classical key search, and 256 bits would describe AES-256's key length rather than the Grover bound on AES-128 ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Apply the square-root query bound to a 128-bit key, then read NIST on why that query count is not the same thing as a practical attack today ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers)).
- **Background (Wikipedia):** [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q502

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Advanced
- **Tags:** calculation

**Correct answer:** D

Roughly 85 bits collision resistance ([Brassard, Høyer, and Tapp: Quantum Cryptanalysis of Hash and Claw-Free Functions](https://arxiv.org/abs/quant-ph/9705002); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Against an idealized generic quantum attacker, the Brassard–Høyer–Tapp collision search uses on the order of 2^{n/3} queries. For SHA-256, n is 256, and 256/3 is about 85, so the idealized collision resistance is roughly 85 bits ([Brassard, Høyer, and Tapp: Quantum Cryptanalysis of Hash and Claw-Free Functions](https://arxiv.org/abs/quant-ph/9705002)). The classical birthday bound is about 128 bits. Treating collision search as a Grover square root of that birthday bound and answering 64 bits applies the wrong algorithm. 256 bits is the digest length, not the collision resistance ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

This 85-bit figure is the idealized query bound. It needs a very large quantum-accessible memory, and NIST still uses collision search on SHA-256 as a Category 2 reference rather than treating SHA-256 as practically reduced to 85 bits ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Contrast the classical 2^{n/2} birthday bound with the idealized quantum 2^{n/3} collision bound, and note NIST's caution about the memory that bound assumes ([Brassard, Høyer, and Tapp: Quantum Cryptanalysis of Hash and Claw-Free Functions](https://arxiv.org/abs/quant-ph/9705002); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q507

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

By reducing integer factorization and discrete logarithms to polynomial time using the quantum Fourier transform ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Shor's algorithm uses the quantum Fourier transform to find the period behind integer factorization and the discrete logarithm. On a cryptanalytically relevant quantum computer, those problems fall from the classical sub-exponential setting into polynomial time, which compromises RSA and elliptic-curve schemes whose security rests on them ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)). Unstructured key guessing is Grover's setting, not Shor's. Side channels and random-number quality are implementation concerns, not the reason Shor threatens the mathematical problems.

#### Further learning

- **Reading focus:** Follow how period finding and the quantum Fourier transform apply to factoring and discrete logarithms, and keep that separate from Grover's quadratic search speedup ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm); [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q513

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

A quantum device has performed a chosen task that is impractical for classical computers; the task itself need not be cryptographically relevant ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm))

Quantum advantage, sometimes called quantum supremacy, is a performance claim about a specific task. It does not mean the device can run Shor's algorithm against RSA or elliptic-curve keys in use ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)). A cryptanalytically relevant quantum computer is a different milestone: a machine able to break vulnerable public-key cryptography ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).

#### Further learning

- **Reading focus:** Separate a laboratory advantage on a chosen task from a cryptanalytically relevant quantum computer that can attack public-key schemes ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm); [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q278

- **Domain:** QF
- **Subtopic:** simulation-and-noise
- **Subtopic name:** Simulation, Noise and Reproducibility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

On hardware, error effects and implementation limitations must be tested ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Noise and Error Suppression](https://quantum.cloud.ibm.com/learning/en/courses/tools-for-quantum-advantage/error-suppression))

Experimental behavior depends on implementation and measurement quality; the theoretical result is not a perfect prediction of real hardware ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Noise and Error Suppression](https://quantum.cloud.ibm.com/learning/en/courses/tools-for-quantum-advantage/error-suppression)).

#### Further learning

- **Reading focus:** Compare ideal simulation with hardware noise and sampling; record circuit, backend, settings and shot count when reproducing an experiment ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Noise and Error Suppression](https://quantum.cloud.ibm.com/learning/en/courses/tools-for-quantum-advantage/error-suppression)).

### Q300

- **Domain:** QF
- **Subtopic:** simulation-and-noise
- **Subtopic name:** Simulation, Noise and Reproducibility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

The circuit, backend, number of shots, versions, and noise assumptions ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Noise and Error Suppression](https://quantum.cloud.ibm.com/learning/en/courses/tools-for-quantum-advantage/error-suppression))

Experimental results depend on preparation, execution, and sampling, so conditions beyond the final output must be described ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Noise and Error Suppression](https://quantum.cloud.ibm.com/learning/en/courses/tools-for-quantum-advantage/error-suppression)).

#### Further learning

- **Reading focus:** Compare ideal simulation with hardware noise and sampling; record circuit, backend, settings and shot count when reproducing an experiment ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program); [IBM Quantum: Noise and Error Suppression](https://quantum.cloud.ibm.com/learning/en/courses/tools-for-quantum-advantage/error-suppression)).

### Q574

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** C

The encoding distributes quantum information across a joint state instead of creating independent copies of the unknown state

**Explanation:** A quantum error-correcting encoding distributes logical information into a joint code state rather than placing an independent full copy in each physical qubit. Such encoding is compatible with no-cloning, and local measurements need not reveal the unknown logical state. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).

#### Further learning

- **Reading focus:** Understand encoding as distributed quantum information rather than ordinary replication. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction); [IBM Quantum Learning: Global phase, no-cloning and distinguishability](https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information/quantum-circuits/limitations-on-quantum-information)).
- **Background (Wikipedia):** [Quantum error correction](https://en.wikipedia.org/wiki/Quantum_error_correction); [Qubit](https://en.wikipedia.org/wiki/Qubit); [Quantum information](https://en.wikipedia.org/wiki/Quantum_information).

### Q575

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** A

To obtain information about correctable errors without directly reading out the protected logical information

**Explanation:** Syndrome checks extract information about errors through suitable measurements while preserving the protected logical information within the intended correctable-error model. The syndrome is not a readout of the unknown amplitudes of the logical qubit. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction)).

#### Further learning

- **Reading focus:** Distinguish error information from logical-state information. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction)).
- **Background (Wikipedia):** [Quantum error correction](https://en.wikipedia.org/wiki/Quantum_error_correction); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q576

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Protection depends on the code, noise and implementation; uncorrectable errors can still occur

**Explanation:** Codes protect against specified error patterns under implementation assumptions; sufficiently many errors or unsuitable noise can cause logical failure. Error correction does not make physical errors exactly zero or remove the need for repeated checks. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction)).

#### Further learning

- **Reading focus:** Identify the limits and assumptions of an error-correction claim. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction)).
- **Background (Wikipedia):** [Quantum error correction](https://en.wikipedia.org/wiki/Quantum_error_correction); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q577

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** D

The required resources depend on the error-correcting code, hardware noise and target logical reliability

**Explanation:** Different codes, physical error rates and target logical failure rates require different resources. Data qubits and syndrome-extraction resources may both contribute, so a physical-qubit count cannot be converted to logical capacity using one universal fixed ratio. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction)).

#### Further learning

- **Reading focus:** Compare code and reliability assumptions before comparing qubit counts. ([IBM Quantum Learning: Foundations of Quantum Error Correction](https://quantum.cloud.ibm.com/learning/en/courses/foundations-of-quantum-error-correction)).
- **Background (Wikipedia):** [Quantum error correction](https://en.wikipedia.org/wiki/Quantum_error_correction); [Qubit](https://en.wikipedia.org/wiki/Qubit).

## Quantum Threats & Risk

Quantum attack consequences, harvest-now-decrypt-later exposure, forgery, threat horizons and risk assessment. This domain contains 42 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| Quantum Attack Capabilities and Cryptographic Impact | 7 |
| Harvest Now, Decrypt Later | 14 |
| Authenticity, Signatures and Future Forgery | 7 |
| Risk Assessment, Timing and Mosca Models | 11 |
| Exposure and Vulnerable Trust Dependencies | 3 |

### Q007

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

RSA, DH, ECDH, ECDSA ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Integer factorization and discrete logarithms underlie the vulnerability of the RSA and DH/ECC families, not a generic search attack against AES ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Compare Shor-vulnerable public-key mechanisms with symmetric search risk; longer classical public keys and ordinary forward secrecy do not change the underlying quantum-vulnerable problem ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm).

### Q014

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

There is a theoretical speedup for search, but this does not prove practical breakability ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Distinguish a theoretical query estimate from the physical costs, circuit depth, and parallelism of an attack ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Use the technical FAQ matching the question; distinguish ideal quantum-query estimates, implementation costs and the permitted representation of private keys ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm).

### Q132

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The underlying mathematics remains vulnerable to Shor's algorithm ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

A longer RSA key may increase the cost of an attack, but it does not change the type of problem vulnerable to Shor's algorithm ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Compare Shor-vulnerable public-key mechanisms with symmetric search risk; longer classical public keys and ordinary forward secrecy do not change the underlying quantum-vulnerable problem ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm).

### Q153

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

No, a weakness against a quantum threat does not require a CVE for the product ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

The risk also stems from the algorithm's mathematical family, not only from a specific bug disclosed in a product ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Compare Shor-vulnerable public-key mechanisms with symmetric search risk; longer classical public keys and ordinary forward secrecy do not change the underlying quantum-vulnerable problem ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm).

### Q163

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

The key-establishment mechanism ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Increasing symmetric encryption strength does not fix a key-establishment mechanism that can be broken by a quantum computer ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Compare Shor-vulnerable public-key mechanisms with symmetric search risk; longer classical public keys and ordinary forward secrecy do not change the underlying quantum-vulnerable problem ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm).

### Q186

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

A quantum computer with a capability relevant to breaking vulnerable cryptography ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

The term refers to a relevant cryptanalytic capability, not merely to the existence of a quantum component ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Read the FAQs defining a cryptographically relevant quantum computer and discussing when one might exist; distinguish useful attack capability from a physical-qubit headline ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Background (Wikipedia):** [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q512

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Shor's algorithm breaks elliptic-curve cryptography, while Grover's algorithm is why longer symmetric keys, such as AES-256 instead of AES-128, are the usual margin ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm); [IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers))

Shor's algorithm targets factoring and discrete logarithms, so it threatens RSA and elliptic-curve schemes. It does not square-root an AES key ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)). Grover's algorithm gives a quadratic speedup for unstructured key search. That is why AES-128 has about 64 bits of effective security in the query model, and AES-256 is the usual way to keep a larger margin. Grover does not factor RSA, and neither algorithm makes every symmetric cipher useless ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Learning Grover's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/grovers)).

#### Further learning

- **Reading focus:** Assign Shor to factoring and discrete logarithms, and Grover to the square-root search bound on symmetric keys ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm); [Grover's algorithm](https://en.wikipedia.org/wiki/Grover%27s_algorithm).

### Q002

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Reducing unnecessary retention can reduce exposure, but does not replace protecting data that must be retained ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

The protection lifetime and the amount of sensitive data affect exposure, but copies already collected do not disappear ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q046

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** A

The long-lived secret is more exposed to valuable future decryption ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

The duration for which information retains its secrecy value is a key factor in prioritizing against data collected today and decrypted in the future ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q070

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

No, certificate lifetime and data confidentiality lifetime are different variables ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

For HNDL, assess how long the data must remain confidential rather than relying on the certificate's validity period ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q128

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Medical information that must remain confidential for decades ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

Long confidentiality lifetimes increase the period during which future decryption of recorded data could cause harm ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q184

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Migration takes a long time, and information can be collected beforehand ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

Migration time and the harvest-now-decrypt-later threat mean action must begin before the future attack date ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q194

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

A compliance deadline does not eliminate the risk of early collection of information ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

Information lifetime and current exposure must be considered, even if the compliance target is in the future ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q203

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

Collecting encrypted information today for decryption in the future ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

HNDL exploits the possibility that encrypted information collected now may be decryptable in the future, while it is still sensitive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q213

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The recording may still be at risk in the future ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

HNDL concerns recorded data whose original communication has already ended ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q246

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

A capable quantum attacker may solve the ECDH problem from the recorded exchange ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Deleting an ephemeral key protects against future compromise of a long-term key, but it does not make the ECDH problem quantum-resistant ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Compare Shor-vulnerable public-key mechanisms with symmetric search risk; longer classical public keys and ordinary forward secrecy do not change the underlying quantum-vulnerable problem ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm).

### Q276

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** C

Future decryption through the key envelope, even if the data is encrypted symmetrically ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html))

The key-protection chain and the period for which the backup remains sensitive must also be examined ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Trace the full key-protection chain, including RSA-wrapped data keys; strong symmetric payload encryption does not remove a vulnerable asymmetric wrapper ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later).

### Q290

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

The old copy remains with the attacker, protected by the old cryptography ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

Changing the protection today does not change ciphertext that has already been copied; this is the core of the HNDL risk ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q302

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Prioritize the research-data path: captured traffic could remain valuable throughout its ten-year confidentiality period ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

The research data has a long protection lifetime and vulnerable public-key transport, so captured ciphertext could retain value for future decryption ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). The catalogue's brief confidentiality need makes it a lower HNDL priority under the stated comparison; public exposure alone does not outweigh the difference in data lifetime ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

Exam trap: Ranking by the system's visibility while overlooking how long the protected data must remain confidential ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q340

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Recognize that offline status does not eliminate risk if the media or its RSA-wrapped keys can later be collected ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Air-gapping limits some network exposure but does not prevent later theft or collection of the media and its wrapped key ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). If the RSA-protected key is recovered in the future, the encrypted data may become accessible ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). ML-KEM is not a bulk cipher, and stronger AES does not remove the RSA key-wrapping dependency ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Treating offline storage as proof that its encrypted contents can never be collected ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Trace the full key-protection chain, including RSA-wrapped data keys; strong symmetric payload encryption does not remove a vulnerable asymmetric wrapper ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later).

### Q447

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

The migration protects future exchanges but cannot retrieve an adversary's existing archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

A migration can reduce exposure for future sessions, but it cannot erase ciphertext already copied by an adversary ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). Re-encrypting local data or replacing certificates does not alter the attacker's archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). The organization should account for the possibility that prior traffic remains at risk under its threat model ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

Exam trap: Future key exchange cannot retroactively remove an adversary's captured traffic ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q054

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Forging signatures when the mechanism is breakable ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

The threat to signatures concerns origin and integrity, and the possibility of forgery, not decrypting content that may be public to begin with ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Separate confidentiality of recorded data from future signature forgery and long-lived integrity/authentication dependencies ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q136

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The former targets the confidentiality of recordings; the latter targets integrity and authenticity ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

Map the protection objective and the time of use rather than automatically applying the same scenario to encryption and signatures ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Separate confidentiality of recorded data from future signature forgery and long-lived integrity/authentication dependencies ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later).

### Q166

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

It is necessary to consider when verification will be required and what trust evidence will be retained ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

Signature and verification scenarios differ from confidentiality scenarios, and the duration for which trust is needed and the components used for verification should be assessed ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Separate confidentiality of recorded data from future signature forgery and long-lived integrity/authentication dependencies ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q236

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

There is still a risk to integrity and source authentication ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

Public information may still require source and integrity protection, especially when it is used to trigger a sensitive action ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Separate confidentiality of recorded data from future signature forgery and long-lived integrity/authentication dependencies ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q314

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Focus on command authenticity and firmware trust, given the long-lived safety consequences of forgery ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

The central risk is malicious command or firmware forgery, not disclosure of readings that are already public ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)). Long-lived reliance on vulnerable authentication mechanisms can undermine the integrity and safety of control actions ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)). Encrypting public telemetry more strongly would not repair a vulnerable command-authentication or firmware-trust path ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

Exam trap: Treating absence of confidential data as absence of cryptographic risk ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Separate confidentiality of recorded data from future signature forgery and long-lived integrity/authentication dependencies ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q398

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** C

The RSA token signature remains a separate classical dependency; PQ-capable TLS does not change the token algorithm ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

TLS protects the channel according to its negotiated algorithms, while a JWT's signature is a separate cryptographic operation ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). A PQ-capable TLS connection does not alter an RSA signature embedded in a token or its verification assumptions ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). Both transport and token-validation dependencies should be assessed ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: A quantum-safe transport does not transform a separately signed token ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Separate JWT signature validation from transport protection and review the future forgery risk of classical RSA signatures ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q526

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

A recorded key-establishment transcript can be stored and attacked later; forging a signature requires the attack to succeed at the time of forgery, and long-lived signing keys can still be urgent ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

Harvest-now-decrypt-later is about confidentiality of material protected by a vulnerable key establishment that can be recorded today. Forging a signature becomes possible when the attacker can break that signature scheme, which for RSA and elliptic-curve signatures means having the relevant quantum capability at forgery time ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)). That timing difference does not make long-lived code-signing keys safe to ignore ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Separate a stored key-establishment transcript from a signature that must be forged when it is produced, and still treat long-lived signing keys as a migration concern ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later).

### Q025

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Attack capability also depends on quality, error correction, and computational resources ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

NCCoE emphasizes uncertainty and the challenges of scaling and error correction in reaching a CRQC ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Read the FAQs defining a cryptographically relevant quantum computer and discussing when one might exist; distinguish useful attack capability from a physical-qubit headline ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem); [Qubit](https://en.wikipedia.org/wiki/Qubit).

### Q029

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Plan scenarios and safety margins, and update assessments ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

Uncertainty about Z is a reason to analyze scenarios, not a justification for abandoning preparedness ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Read the X + Y > Z model alongside the FAQ on uncertain CRQC timing; use scenarios rather than a single certain arrival date ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q076

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

The length of time the information needs to remain protected ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

In this model, X is the required protection lifetime, Y is the migration time, and Z is the horizon for a relevant attack capability ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Find the X + Y > Z migration-risk model and the discussion of information lifetime, transition duration and uncertain attack timing ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q093

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

By impact, exposure, protection lifetime, and dependencies ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

The same primitive can serve different business functions with different risk levels and remediation timelines ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read risk prioritization using business impact, data lifetime, critical systems and dependencies; an unweighted count of the same algorithm does not rank business exposure ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q134

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

The estimated time until a relevant quantum attack capability ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

Z is an uncertain estimate of the threat horizon, not a definite date determined by the model ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Find the X + Y > Z migration-risk model and the discussion of information lifetime, transition duration and uncertain attack timing ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q239

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

The duration of the transition to suitable cryptography ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

Y includes the organization's technical and operational migration time, not just the time to install a library ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Find the X + Y > Z migration-risk model and the discussion of information lifetime, transition duration and uncertain attack timing ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q270

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** C

There is a timing gap that requires early action ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

12 plus 4 is greater than 10, but the inequality indicates timing risk; it does not prove that an attack has already occurred ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Find the X + Y > Z migration-risk model and the discussion of information lifetime, transition duration and uncertain attack timing ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q277

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** C

Even the transition time alone exceeds the estimated threat horizon ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

When Y is greater than Z, there is difficulty completing the change in time even before adding the confidentiality lifetime ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Find the X + Y > Z migration-risk model and the discussion of information lifetime, transition duration and uncertain attack timing ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q289

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** A

The timing gap is smaller, but this does not prove the absence of all risk ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

The inequality does not apply in this scenario, but the estimates are uncertain and the model does not cover every risk ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Find the X + Y > Z migration-risk model and the discussion of information lifetime, transition duration and uncertain attack timing ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q578

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** C

The combined 16-year protection-and-migration period exceeds the assumed threat timeline

**Explanation:** For the hypothetical inputs, \(X+Y=12+4=16\) years, exceeding the assumed \(Z=10\) years. The inequality is a planning warning under those assumptions, not evidence that a cryptanalytically relevant quantum computer will arrive on an exact date. ([NIST NCCoE: Migration to Post-Quantum Cryptography project description](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Apply the timeline inequality without treating the assumed horizon as a forecast. ([NIST NCCoE: Migration to Post-Quantum Cryptography project description](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q579

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The estimates provide no timing margin, so uncertainty and contingency planning remain important

**Explanation:** At \(X+Y=Z\), there is no slack between the estimated combined protection-and-transition period and the assumed threat horizon. Because these are uncertain estimates, equality should not be read as proof of safety; contingency planning is a risk-management inference from the model. ([NIST NCCoE: Migration to Post-Quantum Cryptography project description](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Consider uncertainty and safety margin in addition to the strict inequality. ([NIST NCCoE: Migration to Post-Quantum Cryptography project description](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q016

- **Domain:** QR
- **Subtopic:** exposure-and-trust-dependencies
- **Subtopic name:** Exposure and Vulnerable Trust Dependencies
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Exposure of the data key through the vulnerable wrapping mechanism ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html))

Risk analysis should also trace the protection of keys, not just the algorithm that encrypts the content ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Trace the full key-protection chain, including RSA-wrapped data keys; strong symmetric payload encryption does not remove a vulnerable asymmetric wrapper ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q229

- **Domain:** QR
- **Subtopic:** exposure-and-trust-dependencies
- **Subtopic name:** Exposure and Vulnerable Trust Dependencies
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Isolation reduces certain exposures but does not make the cryptography quantum-resistant ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

An isolated system may still rely on software signatures, keys, and data retained over time ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Separate confidentiality of recorded data from future signature forgery and long-lived integrity/authentication dependencies ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q294

- **Domain:** QR
- **Subtopic:** exposure-and-trust-dependencies
- **Subtopic name:** Exposure and Vulnerable Trust Dependencies
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Vulnerable uses in critical assets with known sensitivity and dependencies ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Prioritization is based on business context, protection time, and dependencies, not just an unweighted technical count ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read risk prioritization using business impact, data lifetime, critical systems and dependencies; an unweighted count of the same algorithm does not rank business exposure ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

## Quantum Key Distribution (QKD)

QKD protocol operations, BB84, sifting, QBER, reconciliation, privacy amplification, authentication and deployment limitations. This domain contains 58 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| BB84 Preparation, Bases and Measurement | 5 |
| Sifting and Key Rates | 7 |
| QBER, Sampling and Eavesdropping | 14 |
| Reconciliation and Privacy Amplification | 6 |
| Authentication and Use of Generated Keys | 12 |
| Deployment Limits, Trust and Security Assumptions | 14 |

### Q004

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

It removes the basis uncertainty on which the detection mechanism relies ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

In BB84, choosing between incompatible bases restricts an eavesdropper's ability to measure without causing disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q078

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

The basis alone does not reveal the value of the retained bit ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Alice and Bob publish the bases but not all the key values; the communication still needs authentication ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Section 4.7.6 on authenticating classical discussion; public basis information is different from unauthenticated messages ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q149

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Foundational
- **Tags:** protocol_analysis

**Correct answer:** D

Choose a random measurement basis and measure ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Bob does not know Alice's basis in advance, so some measurements will be made in a different basis ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q182

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

The information alone does not recover the bit values ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Knowing the basis is not the same as knowing the bit, and basis discussion takes place after the quantum stage ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q204

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

A random bit and preparation basis ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The choice of bit and basis determines which of the four corresponding states Alice prepares ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q038

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** C

The result follows from the two bases being chosen equally and independently here ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The calculation applies to the assumptions of basic BB84 in the question, and is not a universal claim about every choice of bases ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q044

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** protocol_analysis, hands_on

**Correct answer:** A

1 and 4 ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Only positions where the bases match are retained, regardless of the bit values ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q056

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** A

900 bits ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The test bits are deducted; further deductions may follow for processing and security estimation ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Follow sifting, disclosed test bits, reconciliation and privacy amplification; distinguish raw, sifted and final secret-key quantities ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q086

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

Keeping events with matching bases and discarding the others ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Sifting filters according to matching bases; it is not the same as error correction or privacy amplification ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q179

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Filtering, checks, and processing reduce the usable key material ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

It is necessary to distinguish the rate of raw events from the final key rate after the processing required for security ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Follow sifting, disclosed test bits, reconciliation and privacy amplification; distinguish raw, sifted and final secret-key quantities ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q249

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** A

One half ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

For each basis choice by Alice, the probability that it matches Bob's basis is one half ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q267

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** A

About 1,000 ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The probability of matching bases is one half, so this is an expected value, not a guaranteed count in every run ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q026

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Advanced
- **Tags:** calculation

**Correct answer:** D

0.75 to the power of n ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

To miss detection, all n bits must be error-free, so 0.75 is multiplied by itself n times ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the random-basis intercept-resend example; combine the stated independent probabilities rather than treating a toy model as a universal device guarantee ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q042

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** troubleshooting, protocol_analysis, hands_on

**Correct answer:** D

It counts expected randomness as if it were an error in the sifted bits ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

In the basic model, errors are estimated in the matching bits after sifting, not in events discarded because the bases differed ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q075

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

**Correct answer:** D

Stop key generation for that run and investigate the cause ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

When the security conditions are not met, the key must not be used as though its safety had been established ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read error estimation, finite-size cautions and device assumptions; security conclusions depend on the proof and its parameters, not a universal QBER number ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q148

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Advanced
- **Tags:** calculation, protocol_analysis

**Correct answer:** D

12.5% ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

In the given model, multiply the fraction of signals attacked by the 25% error rate among attacked signals: one half times one quarter ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the random-basis intercept-resend example; combine the stated independent probabilities rather than treating a toy model as a universal device guarantee ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q171

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

The rate of mismatches among the bits that are checked ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Quantum Bit Error Rate is a measure of errors in bits, not a measure of PQC algorithm performance ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Read Section 4.7.2 on error estimation and IBM’s tested-bit example; use errors divided by tested retained bits and distinguish noise from proof of attack ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q196

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis, hands_on

**Correct answer:** B

This sample does not provide absolute proof that there was no eavesdropping ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

Security inference is statistical and depends on the sample size and assumptions as well, not only on the observed error rate ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read error estimation, finite-size cautions and device assumptions; security conclusions depend on the proof and its parameters, not a universal QBER number ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q199

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** calculation, hands_on

**Correct answer:** C

5% ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Divide 10 by 200 to get 0.05; the calculation refers to the given sample ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Read Section 4.7.2 on error estimation and IBM’s tested-bit example; use errors divided by tested retained bits and distinguish noise from proof of attack ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q221

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The same noise and basis assumptions as far as possible, and a comparison of QBER ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program))

Controlling the experimental conditions makes it possible to attribute a difference in disturbance to the eavesdropping scenario being tested ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).

#### Further learning

- **Reading focus:** Use IBM’s simulated protocol and circuit examples to distinguish an educational simulation, its chosen attacker model and physical quantum-channel security ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q255

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

There may be noise, faults, or eavesdropping, and the result must be analyzed under the model ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Mismatches may result from noise or an attack, so QBER does not unambiguously identify an attacker ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Read Section 4.7.2 on error estimation and IBM’s tested-bit example; use errors divided by tested retained bits and distinguish noise from proof of attack ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q259

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The threshold depends on the protocol, the proof, and the implementation assumptions ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

A threshold number in a particular proof is not a general security certificate for every system and device ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read error estimation, finite-size cautions and device assumptions; security conclusions depend on the proof and its parameters, not a universal QBER number ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q280

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** calculation, protocol_analysis

**Correct answer:** B

25% ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Eve chooses the wrong basis in half the cases, and Bob then gets the bit wrong with probability one half, yielding an average of 25% ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the random-basis intercept-resend example; combine the stated independent probabilities rather than treating a toy model as a universal device guarantee ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q282

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** D

The second has an error rate five times higher ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The rates are 2% and 10%, so percentages, not just error counts, should be compared ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Read Section 4.7.2 on error estimation and IBM’s tested-bit example; use errors divided by tested retained bits and distinguish noise from proof of attack ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q508

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Measuring non-orthogonal polarization states alters the quantum state, introducing errors that appear in the sifted sample ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

In BB84, Alice's states are non-orthogonal across the two bases, so an eavesdropper who measures and resends cannot copy the unknown state. The measurement disturbs some of the signals. After sifting, Alice and Bob see that disturbance as an elevated quantum bit error rate ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)). Detection is not a thermal alarm, an acoustic signature of cloning, or a requirement that every photon be absorbed.

#### Further learning

- **Reading focus:** Connect no-cloning and measurement disturbance with the errors Alice and Bob compare after sifting; the error rate is evidence under the model, not a hardware alarm by itself ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q580

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Investigate the result under the protocol's security and operational rules; noise and equipment problems can also contribute to errors

**Explanation:** A higher QBER is not proof that a particular adversary intercepted the link; channel noise and equipment errors can also contribute. Evaluate the observation using the protocol's parameter-estimation, abort and security rules rather than accepting affected key material unconditionally. ([IBM Quantum Learning: Quantum Key Distribution](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Separate statistical security testing from attribution of malicious activity. ([IBM Quantum Learning: Quantum Key Distribution](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

### Q028

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

It may increase the eavesdropper's knowledge of the key material ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

Final key generation must account for information that may be available to Eve, including information from public discussion ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read Sections 4.7.3 and 4.7.5; distinguish matching the parties’ strings from reducing an eavesdropper’s information, including reconciliation leakage ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q067

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

**Correct answer:** B

No secret key material remains among them ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Testing a sample reveals the bits in that sample; publishing all of them leaves all the material known to an eavesdropper ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q103

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

They are removed from the secret key material ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The test bits are already known to an eavesdropper, so they cannot remain part of the secret key ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Work through the IBM QKD protocol example: random bits and bases, measurement, public basis comparison, retained bits and eavesdropper disturbance ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q122

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

To shorten a reconciled key to reduce possible information available to Eve ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

Privacy amplification produces a shorter, more secure key based on an estimate of the eavesdropper's information ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read Sections 4.7.3 and 4.7.5; distinguish matching the parties’ strings from reducing an eavesdropper’s information, including reconciliation leakage ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q162

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Identical strings may still be partially known to Eve ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

Agreeing on the same bits and keeping them secret are different goals that must both be addressed ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read Sections 4.7.3 and 4.7.5; distinguish matching the parties’ strings from reducing an eavesdropper’s information, including reconciliation leakage ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q299

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Reconciling mismatches between the parties’ bit strings ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf))

Information reconciliation concerns matching the strings, while privacy amplification reduces Eve’s information ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

#### Further learning

- **Reading focus:** Read Sections 4.7.3 and 4.7.5; distinguish matching the parties’ strings from reducing an eavesdropper’s information, including reconciliation leakage ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).

### Q033

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

One must distinguish key generation from encrypting data using that key ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Key distribution and content encryption are different operations, even when they are integrated into one product ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q047

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

A quantum channel and an authenticated classical channel ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

The quantum channel carries states, and the classical channel is used for coordination and processing and must be authenticated ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Section 4.7.6 on authenticating classical discussion; public basis information is different from unauthenticated messages ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q074

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Distributing a key to two parties is not a public signature on the file ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

QKD does not by itself provide a public-signature mechanism for authenticating software origin and integrity ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **Reading focus:** Read the explanation of signature authenticity and integrity, then distinguish the listed signature standards from encryption and KEM standards ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q116

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The channel can be public while being protected against modification and impersonation ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

The bases can be disclosed without revealing the key, but it must be verified that the communication actually comes from the right party ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Section 4.7.6 on authenticating classical discussion; public basis information is different from unauthenticated messages ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q208

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

It must not be reused to encrypt additional messages as an OTP ([Wikipedia: One-Time Pad](https://en.wikipedia.org/wiki/One-time_pad); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

Using QKD does not change the one-time-use requirement of a one-time pad ([Wikipedia: One-Time Pad](https://en.wikipedia.org/wiki/One-time_pad); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Review the four conditions of a one-time pad and its key-reuse failure; generating key material with QKD does not relax the pad-use rules ([Wikipedia: One-Time Pad](https://en.wikipedia.org/wiki/One-time_pad); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q211

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The parties' identity authentication mechanism ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

QKD does not provide source authentication by itself, so its installation should not be taken to have solved identity management ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q217

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Content security also depends on AES and how it is used ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

QKD provides key material, but it does not eliminate the security assumptions and implementation requirements of the encryption that uses it ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q226

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

A man-in-the-middle attack between Alice and Bob ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

An attacker can impersonate both parties; the channel's physics does not by itself provide source authentication ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Section 4.7.6 on authenticating classical discussion; public basis information is different from unauthenticated messages ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q235

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

An appropriate authentication mechanism based on a pre-shared key or signatures ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

NSA notes the need for authentication using asymmetric cryptography or pre-placed keys ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Section 4.7.6 on authenticating classical discussion; public basis information is different from unauthenticated messages ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q286

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

Shared key material for two parties ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

QKD produces key material; using it for encryption or authentication requires additional mechanisms ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q287

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

There must be a proper integration of key generation, authentication, and data encryption ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Combining components does not eliminate the security requirements of each component and of the interfaces between them ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q503

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

QKD gives confidentiality; authentication is external ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

QKD's product is shared secret keying material. Under the protocol assumptions, eavesdropping on the quantum channel is detectable, so the key can then protect confidentiality ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)). The quantum transmission does not prove who is at the other end. The classical channel has to be authenticated by a separate mechanism, such as a pre-shared key or signatures ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)). The auditor is therefore right about a confidentiality role and wrong that QKD itself supplies authentication.

#### Further learning

- **Reading focus:** Separate the secret key QKD can establish from the external authentication the classical channel still requires ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q013

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

A gap between the proof's assumptions and the device's behavior ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Implementation attacks need not violate a physical law; they can exploit equipment that does not implement the idealized model ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Sections 4.4.1 and 4.5 on device models and side channels; practical attacks can exploit the implementation without violating ideal quantum theory ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q060

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

The behavior of the model and code under the test conditions ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program))

A simulation does not give classical bits the no-cloning property of real quantum states ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).

#### Further learning

- **Reading focus:** Use IBM’s simulated protocol and circuit examples to distinguish an educational simulation, its chosen attacker model and physical quantum-channel security ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q071

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

It requires the physical capability to transmit and measure quantum states ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

QKD requires specialized physical equipment and infrastructure, unlike PQC algorithms, which are implemented on classical computers ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q079

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Infrastructure suitability, authentication, operational limitations, and the trust basis ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

A deployment decision should take specialized infrastructure, trust in the nodes, maintenance, and availability into account ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q108

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

PQC relies on computational hardness; QKD also uses physical properties of quantum information ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

The distinction is in the basis of the mechanism; in both cases, practical system security still depends on implementation and context ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Contrast mathematical quantum-resistant algorithms with physical quantum key distribution, then examine why both still depend on implementation and system assumptions ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Quantum information](https://en.wikipedia.org/wiki/Quantum_information).

### Q117

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

An attacker may cause key generation to stop without learning the key ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Availability can be disrupted by interfering with the channel even without recovering the key ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q126

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

The node becomes part of the trust base and must be protected ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

A network with trusted relays adds trust points, protection costs, and insider risks ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q172

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

The security assumptions, implementation details, and equipment testing ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Practical security depends on physical and engineering implementation, not only on the theoretical model ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read Sections 4.4.1 and 4.5 on device models and side channels; practical attacks can exploit the implementation without violating ideal quantum theory ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q210

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Ordinary protection of keys, permissions, and memory is required ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html))

QKD does not protect a secret stolen from an endpoint; its key material also requires operational protection ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read secure-perimeter/device assumptions and operational key protection; key distribution does not protect a key already stolen at an endpoint ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q232

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The former simulates a quantum process; the latter can operate cryptographically on a classical computer ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program))

A simulation teaches the protocol but does not create a physical channel that is resistant to copying, whereas PQC is intended for ordinary computers ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).

#### Further learning

- **Reading focus:** Use IBM’s simulated protocol and circuit examples to distinguish an educational simulation, its chosen attacker model and physical quantum-channel security ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q243

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** D

The simulation does not enforce the physical access limitations of the protocol ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program))

A state representation in a classical computer can be read and copied, so the experiment must define Eve's capabilities rather than claim physical security ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).

#### Further learning

- **Reading focus:** Use IBM’s simulated protocol and circuit examples to distinguish an educational simulation, its chosen attacker model and physical quantum-channel security ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q345

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Map QKD to the suitable physical-link use and assess separate approaches for signing, VPNs, and software constraints ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

QKD can be evaluated for a suitable link and architecture, but it does not automatically replace public-key signatures or solve every VPN and software integration problem ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)). Mapping the tool to actual use cases exposes deployment constraints and remaining cryptographic needs ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)). A link-level result cannot establish protection for unrelated application paths ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

Exam trap: Assuming one key-distribution technology solves every enterprise cryptographic function ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Compare QKD’s key-distribution role and deployment limitations with the separate purpose of public digital signatures ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q504

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

Its security depends on quantum physics, not on a computational math problem ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

QKD is called physical-layer cryptography because the security argument comes from quantum measurement and the no-cloning theorem, rather than from the assumed hardness of a problem such as factoring ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)). The quantum channel and the devices are part of that trust boundary ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)). AES hardware, RSA key wrapping, and TCP reliability are not the reason for the name.

#### Further learning

- **Reading focus:** Contrast a physics-based key-distribution argument with computational assumptions such as factoring, and notice that the hardware channel is inside the trust boundary ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q509

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

QKD needs dedicated optical links and trusted intermediate relays over long distances, whereas PQC runs as software over existing IP infrastructure ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: What is Post-Quantum Cryptography?](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography))

A QKD link depends on transmitting and measuring quantum states, so distance, fiber, and intermediate nodes are part of the design. A trusted relay that terminates the quantum channel becomes part of the trust base ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)). PQC algorithms are classical software and can run over existing IP networks ([NIST: What is Post-Quantum Cryptography?](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)). That contrast does not make PQC immune to every attack, and it does not mean QKD authentication is impossible.

#### Further learning

- **Reading focus:** Compare QKD's physical-channel and trusted-node limits with PQC as software on ordinary networks ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/); [NIST: What is Post-Quantum Cryptography?](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)).

## PQC Algorithms & Mechanisms

Post-quantum algorithm families, KEMs, signatures, parameter sets, technical security categories and hybrid constructions. This domain contains 56 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| KEM Operations, Keys and Shared Secrets | 16 |
| Post-Quantum Digital Signatures | 12 |
| Algorithm Families and Parameter Sets | 11 |
| Hybrid Constructions, Combiners and Context | 4 |
| Security Properties, Comparisons and Categories | 13 |

### Q053

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The public encapsulation key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Bob needs the public component to generate a ciphertext and shared secret, not Alice's private key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q057

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

A secret value that the parties derive for use in symmetric cryptography ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

A shared secret remains secret even though the encapsulation key and ciphertext can be sent over a public channel ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q062

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** C

An alternative secret is produced instead of directly exposing an internal failure ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST ACVP: ML-KEM Testing](https://pages.nist.gov/ACVP/draft-celi-acvp-ml-kem.txt))

An implicit rejection path produces an alternative value ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST ACVP: ML-KEM Testing](https://pages.nist.gov/ACVP/draft-celi-acvp-ml-kem.txt)). It should be distinguished from format or length errors, and handled at the protocol level without leakage ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST ACVP: ML-KEM Testing](https://pages.nist.gov/ACVP/draft-celi-acvp-ml-kem.txt)).

#### Further learning

- **Reading focus:** Compare FIPS 203 Section 6.3 implicit rejection with Section 7 input checks and ACVP decapsulation tests; keep length errors separate from internal ciphertext rejection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST ACVP: ML-KEM Testing](https://pages.nist.gov/ACVP/draft-celi-acvp-ml-kem.txt)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q133

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The private key and the ciphertext ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Decapsulation computes the secret from a ciphertext and a corresponding private key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q191

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

A KEM establishes a shared secret; a signature authenticates a message ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

These are different cryptographic purposes, so ML-KEM is not a direct replacement for ECDSA ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read Section 2 for KEM concepts, Section 3 for secure implementation requirements, and Section 4 for secure use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).
- **Reading focus:** Read the explanation of signature authenticity and integrity, then distinguish the listed signature standards from encryption and KEM standards ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q201

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

A ciphertext and a shared secret ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Encaps produces local secret material and a ciphertext that can be sent to the recipient ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q206

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

KeyGen, Encaps, Decaps ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

A KEM includes generation of a key pair, encapsulation using the public key, and decapsulation using the private key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q207

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

An attacker could replace it with their own key ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280))

The public key does not need confidentiality, but its association and identity must be verified to prevent malicious substitution ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read KEM secure-use/authentication conditions and public-key identity binding; a public key or matching secret alone does not establish the intended peer ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q257

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

The public key used to generate a ciphertext and shared secret ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

The encapsulation key is the public part of a KEM key pair; the decapsulation key is kept private ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q266

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

A private key that allows a secret to be derived from the ciphertext ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Decapsulation uses the private key and ciphertext, not a signature verification key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q293

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Send the ciphertext and keep the shared secret secret ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

The ciphertext enables the holder of the decapsulation key to derive the same secret without publishing it ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q295

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** C

Whether it is needed depends on the protocol and the required key material ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html))

A KEM secret may be ready for use, but a KDF is needed in cases such as deriving multiple keys or meeting the protocol’s structure ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Review separate purposes for derived keys, key confirmation and data protection; do not infer that one raw secret should be reused for every operation ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q399

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** C

A KEM shared secret alone does not authenticate real-world identities; the surrounding protocol must provide authentication and any needed key confirmation ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

A KEM establishes shared secret material, but that fact alone does not bind the secret to a real-world identity or prove which peer participated ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). The surrounding protocol needs suitable authentication, and may also need explicit key confirmation ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). Post-quantum security does not remove these protocol requirements ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

Exam trap: Successful key establishment is not the same as authenticated peer identity ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read KEM secure-use/authentication conditions and public-key identity binding; a public key or matching secret alone does not establish the intended peer ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q519

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

It makes polynomial multiplication much faster than multiplying polynomials in the naive way ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf))

ML-KEM multiplies polynomials in a ring. The number-theoretic transform turns that product into a form that can be computed much more quickly than the direct product of coefficients ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)). It does not shrink the public key to an elliptic-curve size, and it is not a source of quantum randomness.

#### Further learning

- **Reading focus:** Follow the number-theoretic transform in FIPS 203 as the fast polynomial-multiplication step ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q520

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Elliptic-curve Diffie-Hellman combines shares from both parties; ML-KEM encapsulates a fresh shared secret under the other party's public key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

In ML-KEM, encapsulation uses the recipient's encapsulation key and returns a ciphertext and a shared secret. Decapsulation recovers that secret ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)). Elliptic-curve Diffie-Hellman is an interactive agreement: each party contributes a share ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Contrast KEM encapsulation with an interactive Diffie-Hellman share exchange ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q521

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

FIPS 203 specifies an 1184-byte encapsulation key and a 1088-byte ciphertext, far larger than a 32-byte X25519 public key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [RFC 7748: Elliptic Curves for Security](https://www.rfc-editor.org/rfc/rfc7748))

FIPS 203 lists those ML-KEM-768 lengths. ML-KEM-1024 uses a 1568-byte encapsulation key and a 1568-byte ciphertext ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)). An X25519 public key is 32 bytes ([RFC 7748: Elliptic Curves for Security](https://www.rfc-editor.org/rfc/rfc7748)).

#### Further learning

- **Reading focus:** Compare the FIPS 203 length table with the 32-byte X25519 key ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [RFC 7748: Elliptic Curves for Security](https://www.rfc-editor.org/rfc/rfc7748)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [Curve25519](https://en.wikipedia.org/wiki/Curve25519).

### Q021

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The signer's public key ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

Signature verification is performed using a trusted public key; the verifier must not be given the private key ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Read Sections 5.2 and 5.3: signing uses a private key, verification takes the public key/message/signature and its Boolean result must be enforced ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q027

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

There is no need to track the use of internal one-time keys across signatures ([NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205); [NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures))

Stateless refers to signature-state management, not dispensing with a private key or its lifecycle management ([NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205); [NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures)).

#### Further learning

- **Reading focus:** Compare SLH-DSA’s stateless construction with LMS/XMSS signing-state requirements; stateless does not mean keyless ([NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205); [NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q102

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

A PQC digital signature ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

Authenticating an update requires integrity and a trusted source; key establishment and storage encryption are not substitutes for a signature ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read the explanation of signature authenticity and integrity, then distinguish the listed signature standards from encryption and KEM standards ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q195

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Preventing reuse of an internal signing state that must be one-time ([NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures))

NIST emphasizes that stateful signatures require careful state management and are suitable for controlled scenarios ([NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures)).

#### Further learning

- **Reading focus:** Read the LMS/XMSS explanation and why state tracking and controlled private-key use are security requirements ([NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q254

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

SLH-DSA ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

SLH-DSA is a hash-based signature; HQC is a KEM, not a signature ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the public abstract identifying SLH-DSA as a stateless hash-based signature derived from SPHINCS+ ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).
- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

### Q258

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

No, it changes the signature mechanism ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

Replacing the signature mechanism addresses integrity and authenticity; file confidentiality is a separate requirement ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read the explanation of signature authenticity and integrity, then distinguish the listed signature standards from encryption and KEM standards ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q264

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Hash-based diversification, alongside generally longer signatures ([NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

Signature selection requires consideration of size and performance, not just the mathematical problem family ([NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Compare the actual signature-size tables in the two final standards alongside their hash-based versus module-lattice construction families ([NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B).

### Q281

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

A signature protects authenticity and integrity; it does not encrypt the content ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

The mechanism must be chosen to match the protection goal, and confidentiality requires suitable encryption ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read the explanation of signature authenticity and integrity, then distinguish the listed signature standards from encryption and KEM standards ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q285

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

LMS and XMSS ([NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures))

LMS and XMSS are stateful signature schemes; they should be distinguished from SLH-DSA, which does not require tracking signature state in this way ([NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures)).

#### Further learning

- **Reading focus:** Read the LMS/XMSS explanation and why state tracking and controlled private-key use are security requirements ([NIST: Stateful Hash-Based Signatures](https://csrc.nist.gov/projects/stateful-hash-based-signatures)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q517

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The key is exhausted and must not be reused; a new key pair is required for further signatures ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf))

LMS and XMSS have a finite number of signature indexes. Reusing an index, including after a backup or clone restores an old state, can expose the private key ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)). When the indexes are used up, the key is retired rather than wrapped back to zero.

#### Further learning

- **Reading focus:** Read the state and index rules in SP 800-208; exhaustion means a new key, not reuse ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q518

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

It is a one-time signature; the hash tree authenticates those one-time keys ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf); [NIST FIPS 205: SLH-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf))

WOTS+ is a Winternitz one-time signature. XMSS and LMS use it at the leaves, and the Merkle tree authenticates the one-time public keys ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)). SLH-DSA also uses WOTS+ inside its hypertree ([NIST FIPS 205: SLH-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf)).

#### Further learning

- **Reading focus:** Separate the one-time signature that signs a message, or a tree node, from the hash tree that authenticates it ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf); [NIST FIPS 205: SLH-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q525

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

For controlled software or firmware signing, where the number of signatures is limited and the index cannot be rolled back ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf))

SP 800-208 specifies LMS and XMSS for applications that can protect signature state, such as signing software or firmware from a controlled build system ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)). A high-volume TLS signer that might restore an old virtual-machine image is a poor fit for that state rule.

#### Further learning

- **Reading focus:** Read the SP 800-208 use cases and the requirement that each index is used once ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q022

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

CRYSTALS-Kyber ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards))

ML-KEM is derived from Kyber; the submission name is no substitute for checking against the final standardized version ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

#### Further learning

- **Reading focus:** Read the August 13, 2024 announcement identifying FIPS 203, 204 and 205 and their original submission names; treat predictions in this historical announcement as historical ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q035

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

ML-KEM and ML-DSA ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

ML-KEM is intended for establishing a shared secret and ML-DSA for signatures; their roles must not be interchanged ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q064

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

ML-KEM-512, ML-KEM-768, ML-KEM-1024 ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

These are the three standardized ML-KEM parameter sets, not RSA key lengths or ML-DSA parameter-set names ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read the ML-KEM assumptions and parameter tables, then interpret strength through NIST security categories rather than names or shared-secret length ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q085

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

Hash-based signatures ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final))

SLH-DSA is a stateless hash-based signature and provides a basis different from that of lattice-based signatures ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).

#### Further learning

- **Reading focus:** Read the public abstract identifying SLH-DSA as a stateless hash-based signature derived from SPHINCS+ ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q087

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

SPHINCS+ ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final))

SLH-DSA is the standardized version derived from the SPHINCS+ family ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).

#### Further learning

- **Reading focus:** Read the public abstract identifying SLH-DSA as a stateless hash-based signature derived from SPHINCS+ ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q158

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

One is based on lattices and the other on hash functions ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf); [NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205))

Diversity in underlying assumptions can provide alternatives if cryptanalytic advances affect a particular family ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf); [NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205)).

#### Further learning

- **Reading focus:** Compare the module-lattice basis of ML-DSA with the hash-based construction of SLH-DSA rather than assuming all PQ signatures use the same mathematical family ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf); [NIST FIPS 205: Full SLH-DSA Standard](https://doi.org/10.6028/NIST.FIPS.205)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q173

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

CRYSTALS-Dilithium ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards))

ML-DSA is derived from Dilithium and is used for signatures, not for a KEM ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

#### Further learning

- **Reading focus:** Read the August 13, 2024 announcement identifying FIPS 203, 204 and 205 and their original submission names; treat predictions in this historical announcement as historical ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q234

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

44, 65, 87 ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

ML-DSA-44, ML-DSA-65, and ML-DSA-87 are the names of the ML-DSA signature parameter sets ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Use the final ML-DSA standard and its ML-DSA-44, ML-DSA-65 and ML-DSA-87 parameter sets instead of slide-deck shorthand ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q268

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The parameter-set choice depends on security requirements, policy, and cost ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

FIPS 203 presents parameter sets with different strengths and costs; the choice should suit the use and policy ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read the ML-KEM assumptions and parameter tables, then interpret strength through NIST security categories rather than names or shared-secret length ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q272

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

Module lattices and the Module Learning with Errors problem ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

ML-KEM is based on lattice problems with errors, not on the same mathematical problem as RSA or ECDH ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read the ML-KEM assumptions and parameter tables, then interpret strength through NIST security categories rather than names or shared-secret length ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q511

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

ML-KEM (from CRYSTALS-Kyber) ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf); [NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf))

FIPS 203 standardizes ML-KEM, derived from CRYSTALS-Kyber, for key encapsulation. ML-DSA in FIPS 204 is a lattice signature, not a KEM ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)). XMSS and LMS are stateful hash-based signature schemes ([NIST SP 800-208: Stateful Hash-Based Signatures](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)). FN-DSA, from Falcon, is a signature family, not the general-purpose KEM.

#### Further learning

- **Reading focus:** Separate the FIPS 203 KEM from the signature standards and from stateful hash-based signatures ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [Falcon (signature scheme)](https://en.wikipedia.org/wiki/Falcon_(signature_scheme)); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q001

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Some security is retained if at least one component is secure, subject to the construction's conditions ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

This property depends on the combiner, the security model, and the protocol ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). It does not follow merely from running two algorithms ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 4.6 on multi-algorithm KEMs and PQ/T hybrids, including approved combiners and their construction-specific security conditions ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q077

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Combining secrets from a traditional mechanism and a PQC mechanism using an appropriate combiner ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Cryptographic Hybrid combines contributions; it is not merely a menu in which a single mechanism is selected each time ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 4.6 on multi-algorithm KEMs and PQ/T hybrids, including approved combiners and their construction-specific security conditions ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q091

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Design and analysis of a combiner, encoding, and binding to context ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Secure combination requires an appropriate construction, not an arbitrary concatenation operation ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 4.6 on multi-algorithm KEMs and PQ/T hybrids, including approved combiners and their construction-specific security conditions ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q092

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** D

To bind the output to the components and context, and preserve desired security properties ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

SP 800-227 illustrates constructions in which component details and context are needed for security analysis, such as IND-CCA ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 4.6 on multi-algorithm KEMs and PQ/T hybrids, including approved combiners and their construction-specific security conditions ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q010

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Strength should not be compared across different families based only on the number of bits in the name ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

Parameter names and key sizes are not a uniform measure of strength; rely on the security categories and the algorithm ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read the ML-KEM assumptions and parameter tables, then interpret strength through NIST security categories rather than names or shared-secret length ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q036

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

Key search against AES-192 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

Category 3 uses AES-192 as its reference; the category should not be inferred from the number of digits in an algorithm's name ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read Section 4 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)). A.5, Security Strength Categories, and compare AES key-search references with hash-collision references ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

### Q040

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** C

Key search against AES-128 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

Category 1 is defined relative to the attack cost against a block cipher with a 128-bit key, such as AES-128 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read Section 4 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)). A.5, Security Strength Categories, and compare AES key-search references with hash-collision references ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

### Q068

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

Cryptography designed to withstand classical and quantum attacks ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography))

PQC is based on algorithms that can be implemented on classical computers; it should not be confused with QKD ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the definition of post-quantum cryptography and its mathematical approach, distinguishing PQC algorithms from a physical QKD channel ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later).

### Q145

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

A key search against AES-256 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

Category 5 is a strength comparison to the cost of a key search against AES-256 under NIST metrics ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read Section 4 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)). A.5, Security Strength Categories, and compare AES key-search references with hash-collision references ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

### Q150

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Implementations, protocols, and key management can also fail ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Mathematical resistance does not eliminate side channels, weak randomness, or errors in protocol integration ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 3 on secure KEM implementations, including input checks, randomness, secret handling and resistance to implementation leakage ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q165

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

1, 3, 5 ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

FIPS 203 assigns the three parameter sets to categories 1, 3, and 5 ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read the ML-KEM assumptions and parameter tables, then interpret strength through NIST security categories rather than names or shared-secret length ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q220

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

A comparison level against reference primitives and attack models ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

The categories enable comparison against reference problems such as AES key search or hash collisions ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read Section 4 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)). A.5, Security Strength Categories, and compare AES key-search references with hash-collision references ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

### Q222

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

They use a reference based on finding collisions in hash functions ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

Categories 2 and 4 refer to collisions in 256-bit and 384-bit hashes, respectively ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read Section 4 ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)). A.5, Security Strength Categories, and compare AES key-search references with hash-collision references ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

### Q225

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Resistance is an assessment under current assumptions and cryptographic knowledge ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Standardization and security analysis do not rule out advances in cryptanalysis or implementation weaknesses, so monitoring and agility are required ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Reading focus:** Read Section 2 for KEM concepts, Section 3 for secure implementation requirements, and Section 4 for secure use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q253

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The output length alone does not determine the mechanism’s strength ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

ML-KEM has three different security categories even though the shared secret is 256 bits long in all three ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

#### Further learning

- **Reading focus:** Read the ML-KEM assumptions and parameter tables, then interpret strength through NIST security categories rather than names or shared-secret length ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q515

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

2, 3, and 5 ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

FIPS 204 states that ML-DSA-44 is claimed at category 2, ML-DSA-65 at category 3, and ML-DSA-87 at category 5 ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)). Category 2 is the SHA-256 collision reference, not the AES-128 key-search reference used for category 1.

#### Further learning

- **Reading focus:** Read the FIPS 204 parameter claims and keep ML-DSA-44 at category 2, not category 1 ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q516

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

A bound on quantum-circuit depth used when estimating the cost of a quantum attack ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf))

NIST's category estimates use a parameter, MAXDEPTH, that limits how deep a quantum circuit is assumed to be when the cost of a quantum attack is counted ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)). It is not a fiber length, a RAM size, or a count of hybrid servers.

#### Further learning

- **Reading focus:** Treat MAXDEPTH as part of the quantum attack-cost model in the NIST call for proposals ([NIST: Security Category Definitions](https://csrc.nist.gov/csrc/media/projects/post-quantum-cryptography/documents/call-for-proposals-final-dec-2016.pdf)).

## Standards, Compliance & Roadmaps

Standards and policy documents, regulation, compliance scope, frameworks, validation, publication status and roadmap dates. This domain contains 95 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| Standards Bodies and Document Identification | 23 |
| Algorithm Standardization and Publication Status | 10 |
| Validation, Certification and Assurance Scope | 10 |
| Regulatory and Policy Applicability | 19 |
| Roadmaps, Transition Milestones and Dates | 24 |
| Risk Frameworks and Control Guidance | 9 |

### Q023

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Recommendations for the use and implementation of KEMs ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

SP 800-227 covers KEM properties, uses, and requirements and does not replace the FIPS 203 algorithm specification ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 2 for KEM concepts, Section 3 for secure implementation requirements, and Section 4 for secure use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q081

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

FIPS 203 ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf))

FIPS 203 defines ML-KEM for key establishment, while 204 and 205 define signatures ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)).

#### Further learning

- **Reading focus:** Read the final standard’s title, scope and Section 7 algorithms to identify FIPS 203 as the ML-KEM specification ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q090

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Internet protocol specifications and integrating mechanisms into them ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

A standardized algorithm must also be integrated into protocols, and IETF works on the internet protocol aspect ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Use RFC 8446 as a concrete Internet protocol specification and the migration FAQ’s protocol resources; distinguish algorithm standardization from protocol integration ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q112

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

FIPS 205 ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final))

FIPS 205 defines a stateless hash-based signature scheme ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).

#### Further learning

- **Reading focus:** Read the public abstract identifying SLH-DSA as a stateless hash-based signature derived from SPHINCS+ ([NIST FIPS 205: SLH-DSA](https://csrc.nist.gov/pubs/fips/205/final)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q135

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

A repeatable, phased framework for a transition to quantum-safe systems ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

The report addresses a transition framework and dependencies, including backward-compatibility approaches, parallel deployment, and full migration ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read the repeatable migration framework, including inventory, dependencies, risk analysis and department migration planning in Section 6 ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q143

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

A precise definition of the algorithm and required parameters ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

A standard specification enables consistent implementation, but the implementation, module, and integration must be assessed separately ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q144

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

Evaluating and standardizing algorithms and relevant guidance ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

NIST runs a cryptographic standardization process and validation programs and guidance, not the CQSP examination ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

### Q178

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Transitioning from quantum-vulnerable standards to PQC standards ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

The document addresses transition and the identification of vulnerable and resistant mechanisms; its draft status should be retained ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Read the November 2024 Initial Public Draft, especially algorithm background and Section 4 transition tables; keep the draft status and the asymmetric/symmetric distinction explicit ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).
- **Reading focus:** Use the named FAQs on cryptographic inventory, agility, HSMs, validation and migration; follow the topic relevant to this question rather than treating the whole FAQ as an algorithm specification ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q188

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

ISO/IEC 23837-1:2023 ([ISO/IEC 23837-1:2023: QKD Security Requirements](https://www.iso.org/standard/77097.html); [ISO/IEC 23837-2:2023: QKD Evaluation and Testing Methods](https://www.iso.org/standard/77309.html))

ISO/IEC 23837-1 addresses security requirements and testing and evaluation methods for QKD, not a software KEM algorithm ([ISO/IEC 23837-1:2023: QKD Security Requirements](https://www.iso.org/standard/77097.html); [ISO/IEC 23837-2:2023: QKD Evaluation and Testing Methods](https://www.iso.org/standard/77309.html)).

Scope clarification: ISO/IEC 23837-1 is Part 1, Requirements; the companion ISO/IEC 23837-2 is Part 2, Evaluation and testing methods ([ISO/IEC 23837-1:2023: QKD Security Requirements](https://www.iso.org/standard/77097.html); [ISO/IEC 23837-2:2023: QKD Evaluation and Testing Methods](https://www.iso.org/standard/77309.html)).

#### Further learning

- **Reading focus:** Compare the official scopes: Part 1 specifies security requirements and the evaluation framework; Part 2 specifies evaluation and testing methods ([ISO/IEC 23837-1:2023: QKD Security Requirements](https://www.iso.org/standard/77097.html); [ISO/IEC 23837-2:2023: QKD Evaluation and Testing Methods](https://www.iso.org/standard/77309.html)).

### Q292

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** B

FIPS 204 ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

FIPS 204 defines a digital signature based on module lattices ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Use the final ML-DSA standard and its ML-DSA-44, ML-DSA-65 and ML-DSA-87 parameter sets instead of slide-deck shorthand ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q467

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

FIPS 203 standardizes ML-KEM; SP 800-227, finalized in September 2025, provides guidance on KEM use ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

FIPS 203 specifies ML-KEM, while NIST SP 800-227 is the KEM use guidance finalized in September 2025 ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). An algorithm standard alone does not provide all protocol and deployment guidance for using a KEM safely ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

Exam trap: Confusing an algorithm standard with guidance on using KEMs ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Compare FIPS 203’s exact ML-KEM specification with the September 2025 final SP 800-227 guidance on using KEMs securely ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q470

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

**Correct answer:** C

EO 14412 is the executive order titled “Securing the Nation Against Advanced Cryptographic Attacks,” dated 22 June 2026 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

The executive order identifies EO 14412 by its title, 'Securing the Nation Against Advanced Cryptographic Attacks,' and date of 22 June 2026 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). It is an executive order, not a NIST technical report or EU instrument ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Confusing an executive order with a technical standard or recommendation ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read the order title/date and Section 4(a) on assigning an agency migration lead; distinguish governance actions from later technical milestones ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

### Q480

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

Verify the current controlling CNSSP and applicable CNSA profile version; keep source-specific schedules separate until resolved ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

The source limitation matters: the October 2026 summary is not the full policy or category-specific schedule ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). Conflicting dates should be resolved against the current controlling CNSSP and applicable profile rather than merged or averaged ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

Exam trap: Combining conflicting schedules without establishing which source controls ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

#### Further learning

- **Reading focus:** Use the October 1, 2026 NSA summary for the question’s stated scope, and keep it distinct from the controlling category-specific CNSS policy ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

### Q491

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

ISO 27001 sets ISMS requirements and is certifiable; ISO 27002 provides supporting control guidance ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)).

ISO/IEC 27001:2022 sets requirements for an information security management system and can support organizational certification ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)). ISO/IEC 27002:2022 provides control guidance rather than serving as a standalone ISMS requirements certification ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)).

Exam trap: Reversing which ISO standard contains certifiable ISMS requirements ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)).

#### Further learning

- **Reading focus:** Compare the public ISO descriptions of certifiable ISMS requirements and supporting security-control guidance ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)).

### Q493

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

**Correct answer:** B

It is an October 2024 technical report describing a repeatable quantum-safe migration framework, not binding EU law ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

ETSI TR 104 016 V1.1.1, published in October 2024, is a technical report describing a repeatable framework for quantum-safe migrations ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). It is not binding EU law ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Exam trap: Mistaking a technical report for a legally binding regulation ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read the report title/status and Section 6.4 migration approaches; pure, parallel and backwards-compatible strategies have different dependency and residual-risk implications ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q500

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Advanced
- **Tags:** policy_interpretation

**Correct answer:** B

SP 800-207 addresses Zero Trust Architecture; SP 800-61 Rev. 3 integrates incident response across CSF 2.0 risk management ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)).

SP 800-207 is NIST's Zero Trust Architecture publication, emphasizing resource-focused identity and device controls rather than implicit trust based on location ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)). SP 800-61 Rev. 3, finalized in April 2025, integrates incident response across CSF 2.0 risk management activities ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)).

Exam trap: Reversing the purposes of the Zero Trust and incident-response publications ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)).

#### Further learning

- **Reading focus:** Read the official publication abstracts and dates; distinguish resource-focused zero-trust architecture from CSF-aligned incident-response guidance ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)).

### Q514

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

To evaluate and standardize public-key algorithms intended to resist quantum attacks ([NIST: Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf))

NIST's project collected public-key submissions, subjected them to public analysis, and standardized algorithms for key encapsulation and signatures. FIPS 203, 204, and 205 are results of that work ([NIST: Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)). The project did not build a quantum computer, and it did not withdraw symmetric algorithms such as AES.

#### Further learning

- **Reading focus:** Read the project scope as public-key standardization, then connect it to FIPS 203, 204, and 205 rather than to a ban on symmetric cryptography ([NIST: Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q581

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** scenario, business_scenario

**Correct answer:** C

ISO 27799

**Explanation:** ISO 27799 adapts information-security control guidance to health information. It is not an encryption-algorithm specification; FIPS 203 addresses ML-KEM, while SP 800-208 addresses particular stateful signature schemes. ([ISO: Health informatics and health-information security standards](https://www.iso.org/news/thought-leadership/health-informatics)).

#### Further learning

- **Reading focus:** Match healthcare security guidance to its sector and distinguish it from an algorithm standard. ([ISO: Health informatics and health-information security standards](https://www.iso.org/news/thought-leadership/health-informatics)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q582

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

ISO/IEC 27017

**Explanation:** ISO/IEC 27017 provides cloud-specific security control guidance for cloud service providers and customers. The public scope description is useful for identifying the document, but it does not substitute for the full applicable standard or establish PQC algorithm validation. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html)).

#### Further learning

- **Reading focus:** Distinguish cloud-control responsibilities from algorithm specifications. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html)).

### Q583

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

It provides a migration framework that must be applied alongside the operator's applicable legal and regulatory requirements

**Explanation:** ETSI TR 104 016 describes a repeatable framework for prioritizing and executing enterprise quantum-safe migrations. Its status as a technical report does not itself create a worldwide statutory deadline or certify an operator's cryptographic modules. ([ETSI TR 104 016 V1.1.1: Quantum-safe migration framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Separate technical migration guidance from independently applicable legal obligations. ([ETSI TR 104 016 V1.1.1: Quantum-safe migration framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q590

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

LMS and XMSS, including their specified multi-tree variants

**Explanation:** SP 800-208 specifies LMS and XMSS and their multi-tree variants HSS and XMSSMT. These are stateful hash-based digital signatures, not KEMs, symmetric ciphers or the complete set of all NIST post-quantum signature algorithms. ([NIST SP 800-208: Stateful Hash-Based Signature Schemes](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)).

#### Further learning

- **Reading focus:** Match the publication number to its specific algorithm and state-management scope. ([NIST SP 800-208: Stateful Hash-Based Signature Schemes](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q591

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

SP 800-208 addresses stateful hash-based schemes, whereas FIPS 205 specifies the stateless SLH-DSA scheme

**Explanation:** SP 800-208 covers stateful hash-based signatures, while FIPS 205 specifies stateless SLH-DSA. Their common hash-based foundation does not make operational state requirements or implementation choices interchangeable. ([NIST SP 800-208: Stateful Hash-Based Signature Schemes](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf); [NIST FIPS 205: Stateless Hash-Based Digital Signature Standard](https://csrc.nist.gov/pubs/fips/205/final)).

#### Further learning

- **Reading focus:** Distinguish hash-based family membership from stateful versus stateless operation. ([NIST SP 800-208: Stateful Hash-Based Signature Schemes](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf); [NIST FIPS 205: Stateless Hash-Based Digital Signature Standard](https://csrc.nist.gov/pubs/fips/205/final)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q592

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Match the document to the selected signature scheme and operational requirements; SP 800-208 has a specific stateful hash-signature scope

**Explanation:** SP 800-208 is scoped to particular stateful hash-based signature schemes and carefully controlled state management. Applicability depends on the selected scheme and operational environment, not simply on whether an organization is a bank; it is not the mandatory umbrella for every PQC signature choice. ([NIST SP 800-208: Stateful Hash-Based Signature Schemes](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)).

#### Further learning

- **Reading focus:** Choose documents by cryptographic function, scheme and operational scope, not sector alone. ([NIST SP 800-208: Stateful Hash-Based Signature Schemes](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-208.pdf)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).

### Q009

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The name alone does not prove conformance to the final specification ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

NIST standards define precise versions, and implementation conformance must be verified rather than inferred from branding alone ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Compare the final ML-KEM specification with submission names and standardization status; a product label is not evidence of the exact algorithm version it implements ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q066

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

The version and its compatibility with final ML-KEM must be clarified ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

Submission names and experimental implementations are not necessarily identical to the final specification and protocol profile ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Compare the final ML-KEM specification with submission names and standardization status; a product label is not evidence of the exact algorithm version it implements ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q084

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** policy_interpretation

**Correct answer:** A

Learn the current mapping and version, and check SISA for exam expectations ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards))

A standard's status changes over time; preparation materials should distinguish current facts from historical documents ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).
- **Reading focus:** Read the August 13, 2024 announcement identifying FIPS 203, 204 and 205 and their original submission names; treat predictions in this historical announcement as historical ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

### Q138

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Role, family, standardization status, and version from a primary source ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

NIST distinguishes final standards, selected algorithms, and ongoing evaluation processes, so they should not automatically be treated as equivalent ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

### Q142

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Controlled integration can begin without waiting for all future alternatives ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

NIST states that the three standards provide a basis for deployments and that they can and should begin to be used ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q209

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** date_recall

**Correct answer:** D

A signature algorithm that was selected and whose NIST standardization is still in progress ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

Distinguish the selection of Falcon from publication of a final standard; NIST still describes the process as ongoing ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Use NIST’s ongoing-standardization status to distinguish Falcon/FN-DSA selection from a final published standard at the question’s reference date ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).
- **Background (Wikipedia):** [Falcon (signature scheme)](https://en.wikipedia.org/wiki/Falcon_(signature_scheme)).

### Q227

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Selection does not necessarily mean that specification and final publication are complete ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

An algorithm's status in the process and the status of a published standard are different stages that should be checked separately ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

### Q241

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** date_recall

**Correct answer:** C

It was selected for standardization as an additional KEM, and the process is ongoing ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

NIST states that HQC was selected for standardization and that the process is still ongoing, separately from the three final PQC standards ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the PQC Standards and Ongoing PQC Standardization Process sections; distinguish algorithm roles, selection and final publication ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

### Q461

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

**Correct answer:** C

It is an Initial Public Draft published on 12 November 2024, not a final FIPS or EU regulation ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

IR 8547 is identified as an Initial Public Draft published on 12 November 2024, with NIST still listing that draft status at the October 9, 2026 reference date ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). A proposed transition table is not a final FIPS or a regulation binding organizations worldwide ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Treating a NIST draft as a final standard or regulation ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read the dated Initial Public Draft and Section 4 tables; preserve draft status, security-strength rows, deprecation/disallowance wording and the separate treatment of AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q466

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

**Correct answer:** C

FIPS 203, 204 and 205 became final on 13 August 2024; that publication date does not signal quantum-computer arrival ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

NIST released final FIPS 203, FIPS 204 and FIPS 205 on 13 August 2024 ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)). Publication standardizes algorithms; it does not establish that a CRQC had arrived or broken RSA ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

Exam trap: Inferring a quantum-computer capability milestone from a standards publication date ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).

#### Further learning

- **Reading focus:** Read the August 13, 2024 announcement identifying FIPS 203, 204 and 205 and their original submission names; treat predictions in this historical announcement as historical ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B).

### Q020

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

An algorithm standard and cryptographic module validation are different things ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

CAVP covers algorithm validation and CMVP covers module validation; the actual scope and version must be checked ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q115

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Testing the conformance of implementations of approved algorithms ([NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

The Cryptographic Algorithm Validation Program validates algorithm implementations, not an organization as a whole ([NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Read what algorithm implementations and individual components are validated, which test system issues certificates, and what the validation-list entry identifies ([NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q256

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The module version, its configuration, and the algorithms within the scope of the validation ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

Distinguish validation of an algorithm, a module, and a product capability, and verify that the validation covers the intended use ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q273

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Validating cryptographic modules according to the relevant requirements ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

The Cryptographic Module Validation Program concerns the module and its requirements, beyond the selection of a standardized primitive ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q468

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

CAVP validates algorithm implementations; CMVP validates cryptographic modules, so the certificate alone does not establish HSM validation ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

CAVP concerns validation of algorithm implementations, whereas CMVP validates cryptographic modules under FIPS 140-3 ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)). Evidence for an implementation does not by itself establish validation of the complete HSM or product module ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

Exam trap: Treating an algorithm implementation certificate as module validation ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q469

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

CMVP validation establishes module assurance, but the organization must still assess deployment, dependencies and actual cryptographic use ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

CMVP addresses validation of a cryptographic module, not whether an enterprise has migrated all relevant systems and removed vulnerable paths ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)). Application use, integrations, certificates, endpoints and operational fallbacks still require assessment ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

Exam trap: Extending a component validation claim to an entire enterprise estate ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q492

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

The ISO certificate covers the supplier's ISMS scope; CAVP and CMVP require separate algorithm and module evidence ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules)).

An ISO 27001 certificate concerns the information security management system within its defined organizational scope ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules)). It does not establish CAVP algorithm validation or CMVP module validation, which are separate forms of evidence ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules)).

Exam trap: Treating organizational ISMS certification as cryptographic implementation validation ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules)).

#### Further learning

- **Reading focus:** Contrast organizational ISMS scope with the CMVP explanation of module and algorithm evidence; one certification does not substitute for another ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q597

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Record the applicable edition, assessed service scope and supporting evidence rather than relying on an unqualified standard number

**Explanation:** ISO/IEC 27017's guidance has a defined cloud-service scope and standards have editions and revision cycles. A procurement claim should therefore identify the edition, assessed service and supporting evidence instead of implying automatic coverage of every service or later revision. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html)).

#### Further learning

- **Reading focus:** Scope assurance claims by edition, service and assessment evidence. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html)).

### Q598

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

It provides health-information security guidance, while algorithm selection and implementation assurance require their own assessment

**Explanation:** ISO 27799 provides health-information security guidance and is technology-neutral rather than proof of every cryptographic component's quantum resistance. Algorithm selection, implementation assurance and applicable legal duties require their own assessment. ([ISO: Health informatics and health-information security standards](https://www.iso.org/news/thought-leadership/health-informatics)).

#### Further learning

- **Reading focus:** Separate organizational security guidance from cryptographic implementation assurance. ([ISO: Health informatics and health-information security standards](https://www.iso.org/news/thought-leadership/health-informatics)).

### Q599

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Evidence specific to the claimed algorithm implementation and validation scope, separately from cloud-control assurance

**Explanation:** ISO/IEC 27017 addresses cloud controls, whereas algorithm validation tests a specified cryptographic implementation within a defined scope. Request evidence for the actual ML-KEM validation claim rather than treating cloud-control assurance as a substitute. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Match each assurance artifact to the claim and implementation it actually covers. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/projects/cryptographic-algorithm-validation-program)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q177

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** policy_interpretation

**Correct answer:** D

The relevant target population, policy, and contractual obligations must be checked ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

NCCoE presents CNSA in the context of NSS and related assets; policy applicability must be assessed for the organization ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Read the NSS scope of CNSA-related guidance; distinguish an algorithm policy for a particular audience from a universal business obligation ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q244

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** policy_interpretation

**Correct answer:** B

A position that depends on the scope and requirements of NSS and on practical limitations ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/))

Keep the recommendation in scope: U.S. national security systems and the specified operational and security limitations ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

#### Further learning

- **Reading focus:** Read the separate QKD limitations concerning authentication, physical equipment, trusted relays, implementation security and denial of service ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).

### Q455

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

The UK roadmap is planning guidance; the EU roadmap is a coordinated recommendation primarily addressed to Member States ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

The NCSC roadmap provides indicative planning targets for large organizations and CNI; it is not a universal statute ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)). The EU coordinated roadmap follows a Commission Recommendation and primarily guides Member States, rather than imposing a blanket legal prohibition on private companies ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

Exam trap: Treating government planning recommendations as universally binding company law ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Compare the UK and EU roadmap wording, audiences and milestones side by side; do not combine separate jurisdictions into one invented deadline ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

### Q459

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

The summary describes migration for all systems as largely completed by end 2035, not an absolute legal deadline for every entity ([BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)).

The BSI summary describes migration for all systems as largely completed by the end of 2035 ([BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)). Preserve the qualifier 'largely': it does not turn the recommendation into an absolute statutory deadline for every entity ([BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)).

Exam trap: Dropping the qualifier 'largely' and converting a summary into a legal mandate ([BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)).

#### Further learning

- **Reading focus:** Read the BSI summary of the EU roadmap, especially the 2026, 2030 and 2035 milestones and the qualifier largely for 2035; the original page is in German ([BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)).
- **Official guidance:** [BSI TR-02102-1](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.html).

### Q472

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

The cited dates concern agency guidance for HVAs and high-impact systems excluding NSS; they are not worldwide private-company deadlines ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

The executive order limits Section 4(b) to agency-directed guidance for HVAs and high-impact systems excluding NSS ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). The order's scope should not be generalized to every company worldwide or to NSS ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Ignoring the order's specified federal, system and NSS scope ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read Section 4(b), including directed OMB guidance, covered HVAs/high-impact systems, NSS exclusion and the distinct key-establishment/signature dates ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

### Q475

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

The order directs the FAR Council to publish a proposed rule within 180 days; that does not establish an already-adopted final rule ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Section 6(c) directs the FAR Council to publish a proposed contractor rule within 180 days concerning applicable FIPS, including PQC by 31 December 2030 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). A direction to propose a rule is not evidence that a final rule is already in effect for every contractor ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Treating a proposed rulemaking action as an adopted final contractor requirement ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read Section 6(c) carefully: a direction to publish a proposed FAR rule is not itself proof of an effective final contractor rule ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

### Q477

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Foundational
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

CNSA is a Commercial National Security Algorithm profile for National Security Systems contexts, not a universal corporate risk framework ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

CNSA refers to a Commercial National Security Algorithm profile intended for NSS contexts ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). It is an algorithm suite and policy profile, not a general-purpose enterprise cybersecurity framework or universal private-sector mandate ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

Exam trap: Reading an algorithm profile as a broad organizational risk framework ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

#### Further learning

- **Reading focus:** Use the October 1, 2026 NSA summary for the question’s stated scope, and keep it distinct from the controlling category-specific CNSS policy ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

### Q479

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

Section 4(b) excludes NSS; apply the relevant CNSS policy and CNSA guidance to NSS separately ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/); [NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

The EO dates described in Section 4(b) explicitly exclude National Security Systems ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/); [NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). NSS should be assessed under their applicable CNSS policy and profile rather than assuming the non-NSS HVA dates automatically govern them ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/); [NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

Exam trap: Applying the non-NSS HVA dates to NSS without checking the separate policy route ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/); [NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

#### Further learning

- **Reading focus:** Compare the explicit NSS exclusion in EO Section 4(b) with the NSA article’s NSS/CNSA context; do not transfer non-NSS dates automatically ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/); [NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

### Q483

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

The hybrid recommendation concerns relevant migration use cases; it does not ban all AES-based symmetric encryption ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

The BSI notes recommend hybrid classical-plus-PQC approaches for the relevant asymmetric migration context and separately distinguish symmetric encryption ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)). They do not establish a blanket ban on AES ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

Exam trap: Expanding an asymmetric hybrid recommendation into a symmetric-algorithm ban ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

#### Further learning

- **Reading focus:** Compare the dated German announcement’s encryption, highly sensitive use-case and signature timelines, and its hybrid recommendation ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).
- **Official guidance:** [BSI TR-02102-1](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.html).

### Q485

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

ANSSI says buying products without PQC after 2030 is not reasonable; this is procurement guidance, not a universal statutory ban ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

ANSSI's FAQ characterizes its statement about buying non-PQC products after 2030 as procurement guidance: such purchases are described as not reasonable ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)). It is not a universal statutory ban applying to all products and organizations ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

Exam trap: Converting strong procurement advice into a universal legal prohibition ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

#### Further learning

- **Reading focus:** Read the relevant French FAQ answers on products entering qualification, post-2030 procurement and exceptions to systematic hybridization for hash-based signatures ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).
- **Official guidance:** [ANSSI follow-up position paper on post-quantum cryptography](https://cyber.gouv.fr/en/publications/follow-position-paper-post-quantum-cryptography).

### Q486

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

ANSSI does not recommend systematic hybridization for hash-based signatures such as SLH-DSA, XMSS and LMS ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

ANSSI recommends classical-plus-PQC hybridization in the short and medium term, but the FAQ states this is not systematic for hash-based signatures such as SLH-DSA, XMSS and LMS ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)). Guidance should therefore be applied by algorithm family, not generalized indiscriminately ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

Exam trap: Assuming a hybrid recommendation applies identically to every PQC family ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

#### Further learning

- **Reading focus:** Read the relevant French FAQ answers on products entering qualification, post-2030 procurement and exceptions to systematic hybridization for hash-based signatures ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).
- **Background (Wikipedia):** [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B); [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).
- **Official guidance:** [ANSSI follow-up position paper on post-quantum cryptography](https://cyber.gouv.fr/en/publications/follow-position-paper-post-quantum-cryptography).

### Q495

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

It calls for risk-proportionate cryptography policies and, where appropriate, encryption; it does not specify an ML-KEM deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

Article 21(2)(h) addresses policies and procedures regarding the use of cryptography and, where appropriate, encryption as part of risk-proportionate measures ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)). The directive text does not specify ML-KEM or set a PQC migration deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

Exam trap: Reading a general cryptography control as a named algorithm mandate ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

#### Further learning

- **Reading focus:** Compare Article 21(2)(h) cryptography-policy requirements with Article 41 national transposition dates; neither specifies the asserted PQC algorithm deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q498

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

Article 32 calls for appropriate, risk-based security measures reflecting state of the art and context; it names neither ML-KEM nor a universal PQC date ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)).

GDPR has applied since 25 May 2018, and Article 32 calls for appropriate measures considering factors including state of the art, context and risk ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)). It does not name ML-KEM or set a universal PQC migration date, and encryption does not eliminate other GDPR duties ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)).

Exam trap: Converting a technology-neutral, risk-based duty into a named algorithm deadline ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)).

#### Further learning

- **Reading focus:** Read Article 32 on risk-appropriate security and Article 99 on application; distinguish general security obligations from a named PQC algorithm mandate ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q584

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Distinguish the regulation's application date and resilience obligations from a separately established PQC-specific deployment requirement

**Explanation:** DORA addresses digital operational resilience in the financial sector, and Article 64 sets its application date at 17 January 2025. That application date is not a statement that every cryptographic mechanism had to be post-quantum by then; assess any PQC-specific obligation from its actual source and scope. ([EUR-Lex: DORA, Regulation (EU) 2022/2554, Articles 1, 2 and 64](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

#### Further learning

- **Reading focus:** Separate a regulation's application date from a named cryptographic deployment deadline. ([EUR-Lex: DORA, Regulation (EU) 2022/2554, Articles 1, 2 and 64](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

### Q585

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

It supports assessing appropriate security measures in light of risk and the state of the art, without itself prescribing a universal ML-KEM deployment date

**Explanation:** GDPR Article 32 requires appropriate security in light of risks, context and the state of the art. In this hypothetical long-lived-data setting, that supports reviewing cryptographic protection over time; Article 32 itself does not prescribe ML-KEM or one universal deployment date. ([EUR-Lex: GDPR, Regulation (EU) 2016/679, Article 32](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)).

#### Further learning

- **Reading focus:** Apply a technology-neutral security duty without inventing a named-algorithm deadline. ([EUR-Lex: GDPR, Regulation (EU) 2016/679, Article 32](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q586

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

It concerns policies and procedures on cryptography and, where appropriate, encryption; specific obligations must be assessed in their applicable legal context

**Explanation:** NIS2 Article 21(2)(h) addresses policies and procedures concerning cryptography and, where appropriate, encryption as part of proportionate cybersecurity risk management. Its application must be read with the relevant legal context, including applicable national measures; it is not an ML-KEM parameter-set specification. ([EUR-Lex: NIS2, Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

#### Further learning

- **Reading focus:** Distinguish a cryptography-policy obligation from algorithm certification or parameter selection. ([EUR-Lex: NIS2, Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q587

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Documenting and reviewing cryptographic cipher suites and protocols at least once every 12 months

**Explanation:** PCI DSS v4.0.1 requirement 12.3.3 calls for documented cipher suites and protocols, review at least once every 12 months, and attention to their continued viability. It does not establish the distractors' universal ML-KEM replacement date. ([PCI SSC: PCI DSS v4.0.1, requirement 12.3.3](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf)).

#### Further learning

- **Reading focus:** Check the requirement and version rather than inferring a PQC deadline from its existence. ([PCI SSC: PCI DSS v4.0.1, requirement 12.3.3](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q588

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Continue the required cryptographic review and manage emerging weaknesses rather than equating the absence of one deadline with the absence of obligations

**Explanation:** Requirement 12.3.3 includes inventory, continued-viability monitoring and response planning for anticipated cryptographic vulnerabilities. Not identifying a universal PQC date therefore does not justify stopping cryptographic review or treating existing algorithms as permanently suitable. ([PCI SSC: PCI DSS v4.0.1, requirement 12.3.3](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf)).

#### Further learning

- **Reading focus:** Separate absence of one asserted deadline from ongoing review and risk-management duties. ([PCI SSC: PCI DSS v4.0.1, requirement 12.3.3](https://docs-prv.pcisecuritystandards.org/PCI%20DSS/Standard/PCI-DSS-v4_0_1.pdf)).

### Q596

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Map each requirement to the relevant entity, jurisdiction, sector, document status and evidence obligation

**Explanation:** A defensible matrix distinguishes legal sources from standards and guidance, and determines which obligations apply to each entity and system. This is a practical application of context-sensitive risk management, not a claim that one technical standard overrides sectoral or national law. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [EUR-Lex: NIS2, Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng); [EUR-Lex: DORA, Regulation (EU) 2022/2554, Articles 1, 2 and 64](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

#### Further learning

- **Reading focus:** Record applicability and authority before declaring a cross-jurisdiction checklist legally sufficient. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [EUR-Lex: NIS2, Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng); [EUR-Lex: DORA, Regulation (EU) 2022/2554, Articles 1, 2 and 64](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

### Q097

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** date_recall, policy_interpretation

**Correct answer:** A

It is a migration target in the context of the document, not a certain prediction of when a CRQC will arrive ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography))

Distinguish a policy timeline from an uncertain technological prediction, and prioritize at-risk assets even earlier ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the transition timeline in context and distinguish its policy target from an uncertain quantum-computer arrival forecast ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography)).

### Q451

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Foundational
- **Tags:** date_recall, policy_interpretation

**Correct answer:** A

2028: discovery, assessment and an initial plan; 2031: priority migrations and a refined plan; 2035: migration complete, with a difficult technology tail possible ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The roadmap places discovery, assessment and an initial plan by 2028, prioritized early migration and a refined plan by 2031, and completed migration by 2035, while recognizing difficult technology may remain ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The milestones are not a claim that every organization must wait until each date to begin the associated work ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating the roadmap dates as sequential start dates rather than target milestones ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read the March 2025 timeline table: discovery and initial planning by 2028, highest-priority migration by 2031, and the 2035 migration target; distinguish targets from a CRQC prediction ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q452

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

The milestone is unmet: the organization still needs discovery, risk and dependency assessment, and an initial plan ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The 2028 target is discovery, assessment and an initial plan, not simply buying technology ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Waiting for 2031 would also misread the roadmap: assessment should inform early prioritization and migration planning well before then ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Equating product acquisition with organizational discovery and planning ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read the March 2025 timeline table: discovery and initial planning by 2028, highest-priority migration by 2031, and the 2035 migration target; distinguish targets from a CRQC prediction ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q453

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

Begin discovery and assessment now so they can guide priority migrations and a refined plan by 2031 ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The 2031 milestone concerns highest-priority early migrations and a refined plan; discovery and assessment are earlier planning work ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Starting discovery only in 2031 risks leaving insufficient time to understand dependencies and select sensible priorities ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Reading a migration milestone as permission to postpone discovery until that year ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read the March 2025 timeline table: discovery and initial planning by 2028, highest-priority migration by 2031, and the 2035 migration target; distinguish targets from a CRQC prediction ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q454

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

It is an indicative migration-completion target, with difficult technologies potentially extending beyond it ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The 2035 date is a migration target in NCSC planning guidance, and the roadmap acknowledges that some difficult technologies may take longer ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). It does not forecast a definite CRQC arrival or establish a universal statutory deadline ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing a preparedness target with a prediction or legal deadline ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read the March 2025 timeline table: discovery and initial planning by 2028, highest-priority migration by 2031, and the 2035 migration target; distinguish targets from a CRQC prediction ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q456

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Foundational
- **Tags:** date_recall

**Correct answer:** D

The Commission Recommendation came in April 2024, followed by the coordinated roadmap in June 2025 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

The EU coordinated roadmap followed the Commission Recommendation issued in April 2024 and was published in June 2025 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)). Reversing the dates incorrectly places the recommendation after the roadmap ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

Exam trap: Reversing the recommendation and coordinated roadmap dates ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the Commission’s Recommendation/roadmap history and the separate end-2026 start and end-2030 high-risk milestones ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

### Q457

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

Member States should begin transitioning by the end of 2026; the date does not require enterprise-wide completion by then ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

The EU roadmap calls for Member States to start transitioning by the end of 2026 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)). It does not say every organization must finish all migration by then; high-risk use cases have a later, distinct end-2030 target, with work to begin as soon as possible ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

Exam trap: Mistaking a transition-start date for an enterprise-wide completion deadline ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the Commission’s Recommendation/roadmap history and the separate end-2026 start and end-2030 high-risk milestones ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

### Q458

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

Complete the transition of high-risk use cases as soon as possible and no later than the end of 2030 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

The roadmap says high-risk use cases should transition as soon as possible and no later than the end of 2030 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)). It does not prescribe identical urgency for all low-risk systems or allow high-risk work to wait until the final date ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

Exam trap: Treating the high-risk end date as a start date or applying one urgency to all assets ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Read the Commission’s Recommendation/roadmap history and the separate end-2026 start and end-2030 high-risk milestones ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

### Q460

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

Keep the targets distinct: EU high-risk use cases by end 2030; UK highest-priority early migrations by 2031 ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

The EU and UK documents have distinct scopes and wording: the EU high-risk target is no later than end 2030, while the UK NCSC roadmap identifies priority early migrations by 2031 ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)). A cross-border plan can coordinate delivery, but should not merge jurisdictions' milestones into a falsely common requirement ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

Exam trap: Combining separate jurisdictions' milestones into one supposedly universal deadline ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

#### Further learning

- **Reading focus:** Compare the UK and EU roadmap wording, audiences and milestones side by side; do not combine separate jurisdictions into one invented deadline ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography)).

### Q462

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** policy_interpretation

**Correct answer:** D

For the 112-bit classical public-key category, the draft proposes deprecation after 2030 and disallowance after 2035 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

For the specified 112-bit-classical public-key category, the draft table distinguishes deprecation after 2030 from disallowance after 2035 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). The terms describe different transition statuses and should not be collapsed into one immediate cutoff ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Swapping or conflating deprecation and disallowance dates ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read the dated Initial Public Draft and Section 4 tables; preserve draft status, security-strength rows, deprecation/disallowance wording and the separate treatment of AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q463

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation

**Correct answer:** A

The draft also proposes disallowance after 2035 for quantum-vulnerable public-key algorithms at 128-bit or greater classical security ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

The initial public draft states that public-key algorithms at 112-bit security have earlier deprecation and later disallowance, while those at 128-bit or greater are also disallowed after 2035 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). Increasing RSA or ECC strength does not remove the underlying quantum vulnerability addressed by the transition table ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Assuming stronger classical RSA or ECC parameters are exempt from quantum transition ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read the dated Initial Public Draft and Section 4 tables; preserve draft status, security-strength rows, deprecation/disallowance wording and the separate treatment of AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q464

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation

**Correct answer:** D

The table gives no separate AES-128/192/256 disallowance dates; its public-key transition dates should not be transferred to AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

The described transition dates concern quantum-vulnerable public-key signatures and key-establishment algorithms ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). The draft explicitly distinguishes symmetric algorithms and say the table has no separate AES-128/192/256 disallowance dates ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Applying a public-key transition table directly to AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read the dated Initial Public Draft and Section 4 tables; preserve draft status, security-strength rows, deprecation/disallowance wording and the separate treatment of AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q465

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

It confuses deprecation with disallowance; the draft gives separate statuses and does not prescribe automatic removal of every use in 2031 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

The draft table differentiates deprecation after 2030 from disallowance after 2035 for the specified category ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). Deprecation should not be interpreted as an identical, immediate removal event, and the document is a draft rather than universal law ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Reading deprecation as the same transition status as disallowance ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read the dated Initial Public Draft and Section 4 tables; preserve draft status, security-strength rows, deprecation/disallowance wording and the separate treatment of AES ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q471

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation, date_recall

**Correct answer:** D

Key establishment by 31 December 2030 and signatures by 31 December 2031 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Section 4(b) directs OMB to issue guidance requiring agencies to review covered HVAs and high-impact systems, excluding NSS, with key establishment by 31 December 2030 and signatures by 31 December 2031 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). The 2027 date in the order applies to a NIST pilot, not completion of agency-wide migration ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Reversing the key-establishment and signature dates or expanding their scope ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read Section 4(b), including directed OMB guidance, covered HVAs/high-impact systems, NSS exclusion and the distinct key-establishment/signature dates ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q473

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

Assign an agency migration lead within 30 days, separately from the later system-migration dates ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Section 4(a) calls for an agency migration lead within 30 days ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). Naming a lead is an early governance action, distinct from the later migration milestones directed through OMB guidance ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Confusing an early accountability deadline with a system implementation deadline ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read the order title/date and Section 4(a) on assigning an agency migration lead; distinguish governance actions from later technical milestones ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

### Q474

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

Section 4(c) sets a deadline for completing a NIST pilot, not all federal migration ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

The order's 31 December 2027 milestone applies to completion of a NIST pilot ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). It is not a date for completing migration across all federal systems; the high-impact-system dates in Section 4(b) are later ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Turning a pilot completion date into an all-agency migration deadline ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read Section 4(c): the December 31, 2027 completion date concerns the NIST pilot, not every federal system ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q476

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

Section 5(d) gives CISA and NIST 270 days to publish public CBOM minimum-elements guidance, not to require enterprise cutover ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

The 270-day timeframe in Section 5(d) is for CISA and NIST to publish public guidance on CBOM minimum elements ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). It does not set a production migration deadline for every enterprise ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

Exam trap: Applying a government publication deadline to enterprise deployment ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).

#### Further learning

- **Reading focus:** Read Section 5(d): the 270-day action is public guidance on CBOM minimum elements, not enterprise-wide production cutover ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q478

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation, date_recall

**Correct answer:** A

New commercial NSS must support CNSA 2.0 by 2027, with legacy phase-out by 2030, as summarized in that article ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

The NSA article dated October 1, 2026 summarizes required CNSA 2.0 support for new commercial NSS by 2027 and legacy systems phased out by 2030 ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). This public article is a summary, not the full controlling policy or category-specific schedule ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

Exam trap: Presenting a dated summary as the full, universal controlling policy ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).

#### Further learning

- **Reading focus:** Use the October 1, 2026 NSA summary for the question’s stated scope, and keep it distinct from the controlling category-specific CNSS policy ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)).
- **Official guidance:** [CNSA 2.0 algorithms](https://media.defense.gov/2025/May/30/2003728741/-1/-1/0/CSA_CNSA_2.0_ALGORITHMS.PDF).

### Q481

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

Standalone classical asymmetric encryption should not be used alone after end 2031; highly sensitive applications are targeted by end 2030 ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

The BSI announcement recommends that classical asymmetric encryption not be used alone after end 2031, with highly sensitive applications already targeted for end 2030 and hybrid use with PQC recommended ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)). These dates concern asymmetric encryption, not all symmetric encryption ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

Exam trap: Mixing the highly sensitive 2030 target with the general 2031 recommendation ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

#### Further learning

- **Reading focus:** Compare the dated German announcement’s encryption, highly sensitive use-case and signature timelines, and its hybrid recommendation ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).
- **Official guidance:** [BSI TR-02102-1](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.html).

### Q482

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

Standalone classical signatures are planned for phase-out by end 2035, distinct from the encryption recommendation ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

BSI's February 2026 announcement distinguish standalone classical asymmetric encryption, with the end-2031 recommendation, from standalone classical signatures, whose phase-out is planned by end 2035 ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)). The dates should not be transferred between these uses ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

Exam trap: Applying the encryption recommendation date to signatures ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).

#### Further learning

- **Reading focus:** Compare the dated German announcement’s encryption, highly sensitive use-case and signature timelines, and its hybrid recommendation ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)).
- **Official guidance:** [BSI TR-02102-1](https://www.bsi.bund.de/SharedDocs/Downloads/EN/BSI/Publications/TechGuidelines/TG02102/BSI-TR-02102-1.html).

### Q484

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** C

The 2027 target concerns PQC requirements for products entering qualification, not completed migration by every French company ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

The 2027 ANSSI target concerns products entering qualification, not complete migration by every French company ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)). ANSSI's FAQ instead emphasizes inventory now and prioritizing critical use cases ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

Exam trap: Turning a product qualification target into a universal company completion date ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).

#### Further learning

- **Reading focus:** Read the relevant French FAQ answers on products entering qualification, post-2030 procurement and exceptions to systematic hybridization for hash-based signatures ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)).
- **Background (Wikipedia):** [Hash-based cryptography](https://en.wikipedia.org/wiki/Hash-based_cryptography).
- **Official guidance:** [ANSSI follow-up position paper on post-quantum cryptography](https://cyber.gouv.fr/en/publications/follow-position-paper-post-quantum-cryptography).

### Q496

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

Member States had to adopt and publish transposition measures by 17 October 2024, applying from 18 October; neither date is a PQC completion deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

The dates refer to national transposition: measures were to be adopted and published by 17 October 2024 and apply from 18 October 2024 ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)). They do not require covered entities to complete PQC migration by those dates ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

Exam trap: Confusing directive transposition dates with a cryptographic migration deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

#### Further learning

- **Reading focus:** Compare Article 21(2)(h) cryptography-policy requirements with Article 41 national transposition dates; neither specifies the asserted PQC algorithm deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

### Q497

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

DORA, Regulation 2022/2554, applies to the financial sector from 17 January 2025; that date is not a PQC deadline ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

DORA is the Digital Operational Resilience Act, an EU regulation for the financial sector that applies from 17 January 2025 ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)). Its governance and resilience requirements do not establish that date as a universal PQC completion deadline ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

Exam trap: Turning a regulation's application date into a specific PQC deadline ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

#### Further learning

- **Reading focus:** Read Articles 1-2 for scope, Article 28 for third-party responsibility and Article 64 for the January 17, 2025 application date ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)).

### Q499

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** D

The 51 future-dated requirements in PCI DSS v4.x became effective; this was not a payment-sector PQC deadline ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)).

PCI SSC's explanation says 51 future-dated v4.x requirements became effective on 31 March 2025 ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)). That timing does not mean all payment infrastructure had to complete PQC migration by then ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)).

Exam trap: Equating the effective date of future-dated PCI requirements with a PQC deadline ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)).

#### Further learning

- **Reading focus:** Read the official August 2024 PCI SSC explanation of the 51 future-dated v4.x requirements and their March 31, 2025 effective date ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)).

### Q487

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

CSF 2.0 has six concurrent functions: Govern, Identify, Protect, Detect, Respond and Recover ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

CSF 2.0 includes six concurrent high-level functions, adding Govern to the familiar Identify, Protect, Detect, Respond and Recover set ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Govern addresses organizational strategy, policy and accountability rather than serving as an optional algorithm category ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Using the older five-function list and omitting Govern ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read Section 2 and Appendix A: all six CSF 2.0 Functions, particularly GOVERN and supply-chain accountability ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q488

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** A

Govern, which addresses strategy, policy, accountability and supply-chain risk ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

CSF 2.0's Govern function covers strategy, policy and accountability, including supply-chain considerations such as supplier requirements ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Detect is about identifying cybersecurity events, not assigning enterprise program ownership ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Confusing governance and supplier accountability with technical event detection ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read Section 2 and Appendix A: all six CSF 2.0 Functions, particularly GOVERN and supply-chain accountability ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q489

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

They support gap-based planning between current and desired organizational outcomes; they do not validate a product implementation ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Current and Target Organizational Profiles help an organization describe outcomes and plan gaps between its present and desired state ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). They are planning tools, not product-validation certificates or proof of algorithm implementation validation ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Mistaking organizational planning profiles for product certification ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read Section 3.1 on Current and Target Organizational Profiles; these organize outcomes and gaps, not product-certification claims ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q490

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

**Correct answer:** B

CSF Tiers describe risk-management rigor, from Partial through Adaptive, rather than cryptographic strength ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

The CSF Tiers are Partial, Risk Informed, Repeatable and Adaptive, and they characterize the rigor of an organization's risk governance and management ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). They are not cryptographic bit-strength categories or module-validation certificates ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Confusing CSF organizational maturity Tiers with NIST algorithm security categories ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read Section 3.2 and Appendix B on the four Tiers; risk-governance rigor is not a cryptographic security category ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q589

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Clarifying responsibility for managed encryption, customer-controlled keys, configuration changes, evidence and service-exit arrangements

**Explanation:** Cloud services distribute control and responsibilities between providers and customers. The proposed contract discussion applies that principle to a hypothetical migration by clarifying who controls keys and configurations, supplies evidence and supports an orderly service exit; it does not assume either party controls everything. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html)).

#### Further learning

- **Reading focus:** Turn cloud shared responsibilities into explicit migration ownership and evidence requests. ([ISO: ISO/IEC 27017 cloud-security guidance and responsibilities](https://www.iso.org/news/2015/12/Ref2032.html)).

### Q593

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

It can provide a sector-relevant baseline of outcomes from which the organization develops its own profile

**Explanation:** A CSF Community Profile is a shared baseline of outcomes for a sector, technology, threat or other common interest. An organization can use it to develop its own Target Profile, but must still tailor its approach to its own requirements and risks. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Distinguish a shared baseline from an organization's own Current and Target Profiles. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q594

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Traceable inventory improvements, completed remediation actions and test evidence mapped to those outcomes

**Explanation:** CSF Profiles support identifying gaps, prioritizing an action plan and tracking improvements toward selected outcomes. In this hypothetical PQC program, inventory changes, remediation records and mapped tests supply evidence of progress; the existence of a profile alone does not show that outcomes were achieved. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Connect selected outcomes to implemented actions and verification evidence. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q595

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

The Functions are related and should be addressed concurrently, with activities operating continuously or when needed

**Explanation:** CSF 2.0 states that the Functions should be addressed concurrently. Govern, Identify, Protect and Detect activities operate continuously, while Respond and Recover should be ready at all times and occur as needed; the Functions are not one-time stages that can be permanently closed. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Avoid interpreting the framework as a sequential project checklist. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q600

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Applicable source and version, legal or advisory status, affected systems, required outcome, responsible owner and verification evidence

**Explanation:** A useful matrix makes the source, applicability, authority, owner and evidence traceable for each required outcome. This is a practical synthesis of risk-framework and scoped-source principles, not a requirement that every organization use one specific table layout; a product's algorithm name alone cannot establish organization-wide compliance. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [EUR-Lex: NIS2, Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

#### Further learning

- **Reading focus:** Distinguish implementation features from documented, applicable compliance evidence. ([NIST CSF 2.0: Functions, Organizational Profiles and Community Profiles](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [EUR-Lex: NIS2, Directive (EU) 2022/2555, Article 21](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)).

## PQC Migration & Program Management

Migration program setup, inventory, dependencies, prioritization, suppliers, transition strategies, rollout and progress assurance. This domain contains 109 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| Program Launch, Ownership and Governance | 6 |
| Discovery, Inventory and CBOM | 24 |
| Risk-Based Prioritization and Planning | 12 |
| Suppliers, Procurement and Shared Responsibilities | 16 |
| Migration Strategies, Dependencies and Crypto-Agility | 19 |
| Pilots, Rollout, Rollback and Exceptions | 18 |
| Completion Evidence, Coverage and Progress Metrics | 14 |

### Q037

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Consistency in profile selection and controlled change ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1))

A policy supports consistent flexibility, but how each product and protocol implements it must still be checked ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).

#### Further learning

- **Reading focus:** Read Sections 3-4 on protected negotiation, cryptographic policy and replaceable interfaces; agility should preserve security as well as operations ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q130

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Begin a documented, phased, risk-based transition without promising a CRQC date ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

NIST calls for beginning the transition using available standards, alongside discovery, prioritization, and testing ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study ownership, governance and alignment with existing enterprise programs; connect the technical work to accountable decisions ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q250

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Roles, expected changes, testing, and a process for handling exceptions ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A multi-system transition requires responsibility and coordination to implement a roadmap and maintain operations ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study ownership, governance and alignment with existing enterprise programs; connect the technical work to accountable decisions ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q301

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Begin with an accountable cross-functional mandate and scoped discovery of high-value services, data, and dependencies ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

An accountable mandate establishes ownership, while scoped discovery provides enough evidence to begin prioritizing without waiting for a perfect inventory ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Deferring discovery until every business unit can participate can stall the program ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A complete inventory is not required before useful initial prioritization and ownership decisions ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing a useful initial inventory with a requirement to inventory everything before starting ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q325

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Escalate a documented decision to the authorized risk owner, including controls and an expiry ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Residual risk must be accepted by an authorized owner through a documented decision, informed by the exposure, controls, and any time boundary ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Engineers can provide technical evidence but do not gain authority merely by understanding the system ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Silence or disagreement is not approval, and an unplanned removal can create other operational risks ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing technical responsibility for a system with authority to accept its business risk ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q338

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Explain affected assets and data, inventory gaps, dependencies, costs, milestones, and uncertainty ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A useful business case connects cryptographic exposure to assets, data lifetimes, dependencies, cost, and planned milestones, while making uncertainty and inventory gaps explicit ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). An exact quantum-arrival prediction is not supported by the evidence and is unnecessary for risk planning ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Algorithm names alone do not explain business impact or funding needs ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Claiming false precision about quantum timing instead of explaining present exposure and uncertainty ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q030

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Providing a capability and using it in practice are different things ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

A CBOM distinguishes capabilities provided by a component from an application's dependencies and uses; verify how the capability is activated ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare capabilities and dependencies in the CBOM with deployed versions, effective configuration and observed cryptographic use ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q052

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Check coverage, discovery methods, and dependencies before drawing a conclusion ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

A limited discovery method does not prove absence ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Distinguish between missing information and a dependency that has been investigated and ruled out ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Distinguish unknown or unobserved dependencies from a verified empty set; report the assessed population and incomplete discovery explicitly ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q058

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Mark the uncertainty and perform targeted discovery ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

Lack of information does not mean lack of dependency, so a useful inventory must distinguish between “not found” and “not checked.” ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

#### Further learning

- **Reading focus:** Distinguish unknown or unobserved dependencies from a verified empty set; report the assessed population and incomplete discovery explicitly ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q063

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Detect cryptographic and dependency changes in every version ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf))

Discovery in code and dependencies makes it possible to update the inventory as part of the development process, rather than only in a one-time survey ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf)).

#### Further learning

- **Reading focus:** Read inventory discovery in CI/CD and the CBOM lifecycle/dependency examples; a one-time list is not continuous evidence of use ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf)).

### Q073

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Maintain it throughout the system's life ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

NCCoE addresses building and maintaining an inventory because systems and risks change over time ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q127

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

Discover and inventory cryptographic uses ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

An inventory provides the basis for understanding the scope of vulnerable cryptographic dependencies and prioritizing the transition ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q141

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Other uses may be missed, including code signing, SSH, VPN, email, and storage keys ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

NCCoE defines a broad inventory of services, keys, certificates, and dependencies, not just HTTPS interfaces ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q151

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Applications may use different copies, versions, or paths ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

A dependency graph distinguishes capability providers from their consumers, and it is necessary to verify what is actually loaded and used ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare capabilities and dependencies in the CBOM with deployed versions, effective configuration and observed cryptographic use ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q164

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

It handles a communications path and does not necessarily handle the firmware trust mechanism ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

It is necessary to distinguish the different cryptographic roles and dependencies of the same asset ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q167

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

They rely on cryptography to establish trust in software ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

NCCoE explicitly includes cryptography for software and firmware updates in asset discovery ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q168

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

They are part of the protection chain and the context for keys and data ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs))

A comprehensive cryptographic inventory includes AES and hash functions alongside asymmetric cryptography, even though the nature of the threat differs ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).

### Q193

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Repeated discovery, policy checks, and change detection with oversight ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

Discovery tools help build visibility, but their output should be tied to context, policy, and the change process ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q230

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Combine network, code, asset, and configuration evidence within the authorized scope ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

Readiness guidance includes networks, endpoint and server assets, code, and dependencies in CI/CD ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q240

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

It may miss code, protocols, keys, and dependencies that are not represented by certificates ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

An inventory includes many components and uses beyond certificates, such as libraries, software signatures, and encryption services ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q263

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Responsibility for prioritization, change approval, and remediation ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

Linking the inventory to business context and responsibility makes it possible to turn discovery into a remediation plan rather than just a technical list ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q269

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Type, owner, use, algorithm, and lifecycle status ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html))

NCCoE recommends documenting key attributes without including the key material itself ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read inventory metadata guidance and secret-storage controls; a planning inventory should describe keys without distributing private-key material ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q275

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

A structured description of cryptographic assets and their dependencies ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/))

A Cryptography Bill of Materials describes algorithms, keys, certificates, protocols, and dependencies ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/)).

### Q310

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Begin scoped passive and configuration-based discovery, and seek approval before any active testing ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Scoped configuration and passive discovery can begin within authorized boundaries, while active tests can be planned through the required approval process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). An unapproved active scan disregards the required authorization even when rate-limited and scoped ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Lack of a production scanner is not a reason to abandon discovery or to substitute an unapproved network test ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Assuming urgency grants permission for an unapproved active production scan ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q311

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Enrich discovery with backend trust relationships and stored-key protection, and document the scan's visibility limits ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

A scan of the front-end listener is evidence about that observed hop, not the application's internal trust paths or key protection at rest ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Enriching the inventory across service-to-service dependencies and stored keys makes the scope clearer ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Assuming the backend matches the listener's configuration overstates what the scan established ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Exam trap: Turning a visible edge component into an unsupported claim about the entire application ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q323

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Use configuration or code evidence and schedule authorized observation when the monthly job runs ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

No observation during a period when the job did not run provides no evidence that it lacks cryptography or is compliant ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Configuration and code review can complement monitoring, and authorized testing can observe the scheduled behavior ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Disabling a backup or treating silence as assurance creates operational and evidentiary problems ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Exam trap: Interpreting non-observation as proof of non-use when the workload is periodic ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Distinguish unknown or unobserved dependencies from a verified empty set; report the assessed population and incomplete discovery explicitly ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q324

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Remove private keys from the export and retain safe metadata such as identifiers, owners, parameters, and lifecycle details ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

A cryptographic inventory should support discovery and planning through metadata, not become a repository of secrets ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Private keys should be removed from the shared export, with access to any legitimate key-management systems controlled separately ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Encrypting a broadly shared spreadsheet does not make exposing key material an appropriate inventory practice ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Assuming that encrypting an inventory makes it suitable to contain private keys ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read inventory metadata guidance and secret-storage controls; a planning inventory should describe keys without distributing private-key material ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q327

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Include ownership, discovery, versions, and dependencies in due diligence and the integration plan before sequencing changes ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Discovery and dependency mapping help the organization understand what it acquired before choosing a safe order for integration and migration ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Blind standardization can break interfaces or overlook unsupported versions and operational constraints ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Excluding the estate leaves risk unmanaged, while familiar algorithm names do not prove matching profiles or actual use ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing organizational standardization with evidence that an acquired estate is understood ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q343

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Assess client versions and populations, including the embedded mobile library and actual negotiated behavior ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The service's effective coverage depends on deployed clients, not just the desktop configuration ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The embedded mobile library may continue to create classical connections, so versions, population, and actual behavior need to be assessed ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Updating a record or assuming configuration inheritance does not prove that those users have migrated ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing a server-side or desktop update with coverage of every client population ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study cryptographic discovery and dependency records; distinguish missing evidence, available capabilities and actual deployed use ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q522

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

A software bill lists components; a cryptographic bill records the algorithms, parameters, and cryptographic dependencies, which the software list does not provide by itself ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/))

A software bill of materials identifies components and versions. A cryptographic bill of materials describes the cryptographic assets and dependencies associated with that estate ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/)). It does not replace the software inventory, and it is not a store of private keys.

#### Further learning

- **Reading focus:** Use a CBOM to see algorithms and dependencies, and keep that separate from a component list that does not name the cryptography ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/)).

### Q019

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Discovery, risk assessment, planning, pilot, deployment, and verification ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A migration program relies on understanding assets and risk, followed by evaluating solutions, making changes, and verifying them ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q098

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Sensitivity, protection lifetime, exposure, dependencies, and remediation time ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

A useful inventory links cryptography to the systems and information it protects, enabling risk-based prioritization ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q111

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

An easy solution does not necessarily address the most significant risk ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Risk-based prioritization includes asset value and impact, alongside migration constraints and dependencies ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q114

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Advance quick wins without postponing early planning for the critical system ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf))

A risk-based plan combines prioritization with migration timelines and dependencies, rather than equating ease of remediation with importance ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q125

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Long service life and a limited upgrade path ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Risk mapping must include firmware, signatures, and dependence on hardware replacement, not just traffic confidentiality ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q303

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Prioritize work on the four-year dependency while planning the three-month migration as an early result ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Migration lead time is part of the risk picture: a four-year dependency chain needs attention early even if deployment is difficult ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The three-month effort may provide a useful early win, but choosing solely by ease leaves the long-lead system exposed to schedule risk; equal sensitivity does not imply equal urgency ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Mistaking easiest-to-complete first for the best risk-based ordering ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q307

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Prioritize the root-CA and HSM upgrade because it enables migrations for 40 dependent services ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The prerequisite platform has leverage across 40 services and lies on their migration critical path, so prioritizing it can enable broader risk reduction ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). An isolated conversion may be a useful early win, but it does not remove the shared dependency ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Waiting for a single all-at-once release adds avoidable coordination risk ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Counting converted endpoints without noticing a shared dependency that blocks many others ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q313

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** D

Migrate the RSA key-wrapping dependency while maintaining appropriate controls for the data-encryption key and payload ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

The RSA wrapper protects access to the data-encryption key, so it is the vulnerable asymmetric dependency in this design ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). ML-KEM establishes shared secrets rather than encrypting bulk database payloads ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Increasing the AES key size does not remove the RSA exposure, and retaining the vulnerable wrapper would leave the key-release path unresolved ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Focusing on the bulk cipher while overlooking the asymmetric key that unlocks it ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Trace the full key-protection chain, including RSA-wrapped data keys; strong symmetric payload encryption does not remove a vulnerable asymmetric wrapper ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q328

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Reassess classification, approved retention, and legal constraints before estimating the required confidentiality period ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

HNDL prioritization depends on the period the information must remain protected, so actual classification and retention constraints matter ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). A legal hold may make an assumed early purge inaccurate ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). The team should use validated requirements rather than an unsupported deletion plan or an arbitrary assumption that every record needs permanent protection ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

Exam trap: Using an unverified purge expectation to shorten the protection lifetime in a risk ranking ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q337

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Fund early wins alongside the high-risk critical path and its enabling dependencies ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A balanced portfolio can deliver early, verifiable risk reduction while funding work that enables the most important long-term migrations ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Counting only easy conversions can neglect high-risk dependencies; focusing exclusively on the core can also miss practical progress opportunities ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Risk, dependencies, and milestones should inform the portfolio together ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Optimizing the program for visible conversion counts instead of risk reduction and dependencies ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q339

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** C

Consider exposure, threat conditions, existing controls, and other relevant risks in addition to lifetime and effort ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

With lifetime and migration effort held equal, exposure, threat conditions, and existing controls can distinguish the services' risk ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Algorithm identity is useful for finding vulnerable use but cannot fully rank otherwise different contexts ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Neither public exposure nor isolation alone dictates priority without considering the rest of the risk picture ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Assuming identical algorithm use means identical risk, or that one exposure label settles the ranking ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study risk-based prioritization using protection lifetime, business impact, migration duration and dependencies, not merely installation convenience ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q348

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Reassess data risk and the migration roadmap using the new lifetime and affected dependencies ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

Protection lifetime is a material risk input, so changing it from one year to 15 years can alter HNDL priority and migration urgency ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). The team should reassess affected systems and dependencies rather than freeze a ranking based on obsolete assumptions ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). A label change without path analysis does not update the risk decision ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

Exam trap: Treating a risk ranking as permanent after a key assumption has changed ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).

#### Further learning

- **Reading focus:** Connect the value and required secrecy lifetime of information with recorded ciphertext and migration lead time; changing current protection does not rewrite an attacker’s archive ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **Background (Wikipedia):** [Harvest now, decrypt later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later); [Mosca's theorem](https://en.wikipedia.org/wiki/Mosca%27s_theorem).

### Q017

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Coordinate the migration and testing with the partner and manage an approved temporary path ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Migration needs to preserve interoperability and manage dependencies between assets and organizations ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q041

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

How the data is protected both in transit and in systems under the partner's responsibility ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

Protecting data flows depends on the chain and the infrastructure of suppliers and partners, not just the organization's boundary ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q043

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Responsibility requires investigating the provider and understanding the boundaries of protection ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

External providers and services are part of the supply chain, and their readiness and protection scope must be investigated ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q055

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Check algorithms, firmware, interfaces, capacity, and validation scope ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

An HSM is part of the implementation and key-management chain, and its support must match the use case and validated configuration ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Distinguish an approved algorithm, a validated algorithm implementation, the exact validated module and the deployed application using it ([NIST CMVP: Understanding Module Validation](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q082

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

It adds uncertainty about migration time and dependencies ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Migration time also depends on supply-chain and vendor readiness, so schedules and alternatives should be clarified ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q121

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Creating a new dependency that may be difficult and costly to migrate later ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Vendor readiness and future upgradeability should be included in planning before hard-to-migrate assets accumulate ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q137

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

In which version, for which protocols, and by what date will support be available and testable ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))?

Vendor readiness requires a detailed roadmap, support scope, and testing, not a general promise ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q248

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

In which components, versions, and traffic paths the protection is actually active ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Distinguish product capability from actual use, and distinguish between different system layers ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare capabilities and dependencies in the CBOM with deployed versions, effective configuration and observed cryptographic use ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q262

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Define capabilities, upgradeability, evidence, support, and lifecycle requirements ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

Supply-chain readiness and supplier plans are explicit parts of a quantum-readiness program ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q283

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

A list of our uses and versions, together with compatibility requirements and tests ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

An inventory makes it possible to have a roadmap discussion focused on the actual impact on systems ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q308

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Require a supported migration path, interoperable profiles, firmware support, and lifecycle commitments for the deployment ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A supported migration path and lifecycle commitments address whether the appliance can actually change and interoperate during its service life ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A marketing label or larger key size does not establish deployed protocol support, firmware availability, or compatibility ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A promise of no future updates is especially unhelpful for a long-lived system facing changing requirements ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating a broad product label as evidence of a supported, deployable migration path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q309

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Request deployed versions, profile limitations, and evidence of successful negotiation in the relevant configuration ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

The organization needs to connect claimed capability to deployed versions and configurations, understand profile limitations, and verify that the intended peers actually negotiate the mechanism ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). A source-code reference or generic algorithm list cannot establish runtime use ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). A roadmap describes future intent, not current fleet coverage or successful interoperability ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Exam trap: Equating a product-family capability statement with evidence about the installed fleet ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q326

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

Obtain a scoped responsibility matrix, migration roadmap, and assurance evidence for provider functions and customer-managed connections ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A scoped responsibility matrix clarifies which party controls each cryptographic path, including custom connectors that may remain the customer's responsibility ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Roadmap and assurance evidence can then be assessed against that scope ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Assuming the provider handles all integrations leaves customer-managed dependencies unexamined, while an algorithm list alone does not define coverage ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating a SaaS provider's control of its service as control of every customer connection ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q332

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Require a credible trust-anchor lifecycle or hardware replacement plan that addresses the immutable anchor ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

An immutable boot-ROM trust anchor may be outside the reach of a software-library change, so the long hardware lifecycle needs an explicit trust-anchor plan ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). The buyer should understand how the device can transition or be replaced ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). A label or disabling verification does not resolve the security dependency and may undermine update integrity ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

Exam trap: Assuming a software update can replace an immutable hardware trust decision ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Review long-lived hardware, roots of trust, supplier dependencies and testing; cryptographic correctness does not prove compatibility with an immutable device or an OT process ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q336

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Replan alternatives, escalate appropriately through contractual channels, and document any bounded risk acceptance ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A slipped critical dependency changes the program's schedule and risk, so the plan and reporting should reflect that evidence ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Alternative paths and appropriate supplier escalation can reduce reliance on the delayed feature; any continued exposure needs explicit bounded acceptance ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Preserving a green status by ignoring the slip misrepresents readiness ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing a supplier's past roadmap commitment with current delivery evidence ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q349

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Define measurable acceptance criteria for protocol support, negotiation, fallback tests, version scope, and deployment limitations ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Measurable criteria turn a broad readiness phrase into evidence that can be evaluated for the intended deployment ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Supported protocols, actual negotiation, fallback behavior, version scope, and limitations clarify what is and is not covered ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). A product label or unspecified demonstration does not establish that the contracted configuration behaves as required ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Exam trap: Treating an undefined contract phrase as proof of deployed, testable capability ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Study supplier roadmaps, supported versions, integration requirements and lifecycle commitments for the particular service or device ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q011

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

A defined cryptographic interface and a version policy that can be checked ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1))

The ability to switch needs to be controlled and verifiable, not unlimited openness to negotiation or input ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).

#### Further learning

- **Reading focus:** Read Sections 3-4 on protected negotiation, cryptographic policy and replaceable interfaces; agility should preserve security as well as operations ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q032

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

To allow controlled replacement of algorithms and parameters ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1))

Cryptographic flexibility reduces the cost of change and preserves compatibility when alternatives are needed ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).

#### Further learning

- **Reading focus:** Read Sections 3-4 on protected negotiation, cryptographic policy and replaceable interfaces; agility should preserve security as well as operations ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q034

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

An upgraded system that continues to serve assets that have not been migrated ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Compatibility is preserved, but a vulnerable path and downgrade risk may remain and must be managed ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q157

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Operational complexity and continued exposure through the vulnerable path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Parallel deployment is a migration strategy, and fully reducing risk also requires addressing closure of the old path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q175

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

The ability to replace cryptography in a controlled way as requirements change ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1))

Cryptographic agility is intended to support changes to algorithms and components while maintaining operation and compatibility ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).

#### Further learning

- **Reading focus:** Read Sections 3-4 on protected negotiation, cryptographic policy and replaceable interfaces; agility should preserve security as well as operations ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q197

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The migration does not preserve the old capability on the same asset ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A complete migration can break dependencies with assets that have not been migrated, so the dependency graph must be coordinated ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q202

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Deploying a new system alongside the old one and migrating dependencies gradually ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Parallel deployment enables separation and gradual migration, at the cost of maintaining the legacy path and retaining its residual exposure ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q231

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

The CDN-Origin link or an internal dependency may remain vulnerable ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Risk assessment should trace data flows and every cryptographic dependency within the scope of protection ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q242

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Loss of policy control and the risk of an unsafe choice ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1))

Crypto-agility should enable controlled change, not unrestricted negotiation or arbitrary selection ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).

#### Further learning

- **Reading focus:** Read Sections 3-4 on protected negotiation, cryptographic policy and replaceable interfaces; agility should preserve security as well as operations ([NIST CSWP 39-upd1: Crypto Agility Strategies and Practices](https://doi.org/10.6028/NIST.CSWP.39-upd1)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q271

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

An understanding of which assets must change together and which are affected ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

ETSI uses dependencies to plan a transition sequence that does not break services and workflows ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q274

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Issuers, trust chains, keys, clients, and renewal processes ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Certificates and chains are system dependencies, so replacing a single component is not enough to ensure operation ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Trace certificate subject keys, issuer signatures and trust anchors across the accepted path, then read NCSC’s PKI migration discussion ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q291

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

When a gradual transition is needed, with separation between legacy and new populations ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

ETSI describes parallel deployment as a way to preserve service for legacy dependencies while transitioning assets to the new approach ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q305

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Upgrade the supported gateway and segment the controller, while planning an approved device change and tracking residual inner-link risk ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A supported gateway and segmentation can reduce exposure while respecting the controller's safety and maintenance constraints ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The plan should also prepare an approved device-level change and explicitly retain the residual risk of any classical inner link ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). An unapproved flash may create safety and reliability risks, while a gateway does not prove end-to-end protection ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating a compensating network control as if it removed every vulnerable cryptographic hop ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q306

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Use managed retirement, verify the end-of-life plan, and track accepted risk through decommissioning ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Retirement is a valid migration strategy when the service is genuinely near end of life and does not carry enduring confidentiality or signature-trust consequences ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). The decision should remain tracked through decommissioning ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). A major rewrite may add little risk reduction before retirement, while indefinite operation contradicts the established retirement plan ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Exam trap: Assuming every legacy system must be rewritten rather than considering verified retirement ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q330

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

Coordinate format versions, dependencies, dual-read/write behavior, and a tested cutover sequence ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

A producer and consumer must agree on compatible formats and transition behavior, not merely each implement a new format ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Version coordination, staged read/write compatibility, and a tested cutover reduce the risk of messages becoming unreadable ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Independent deployment can create an interface mismatch even when each team's local implementation works ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Exam trap: Assuming two individually successful upgrades will interoperate without a shared format plan ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q341

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** C

Stage the confidentiality improvement while documenting and managing the remaining classical authentication gap ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A staged improvement can reduce exposure of transmitted confidentiality while the authentication chain remains a separate unresolved dependency ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The service should report that boundary accurately and plan the remaining PKI transition ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Waiting for an all-at-once solution can defer useful protection, while disabling validation would create a serious authentication weakness ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating a partial confidentiality improvement as proof that authentication is also migrated ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q342

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Consider replatforming while testing data migration and dependent interfaces ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Replatforming can be a reasonable strategy when direct modification of an unsupported application is risky, but the replacement must be validated against data formats and dependencies ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Assuming that new software automatically preserves behavior can create outages or data incompatibility ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Indefinite reliance on unsupported code also leaves its broader lifecycle risk unresolved ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Exam trap: Assuming that replacing a platform eliminates the need to test migration and interfaces ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Compare migration strategies and dependencies, including parallel operation, replacement, compatibility and retirement of vulnerable paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q494

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** conceptual

**Correct answer:** B

Pure replaces the old approach directly; parallel runs a separate new system beside legacy; backwards-compatible support accommodates both, with possible downgrade risk ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

The report distinguishes direct replacement, a separate new system running alongside legacy, and backwards-compatible support for new and old participants ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Backwards compatibility can preserve a downgrade path, so it is not simply equivalent to a clean replacement ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

Exam trap: Swapping the meanings of parallel and backwards-compatible migration ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read the report title/status and Section 6.4 migration approaches; pure, parallel and backwards-compatible strategies have different dependency and residual-risk implications ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q510

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Use a modular cryptographic abstraction, centralized policy, automated algorithm negotiation, and fallback tests in a staging environment ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

Interoperability failures are a reason to test negotiation and fallback before production, not a reason to turn validation off or return to hardcoded RSA ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A defined cryptographic interface and a checked policy let the organization change algorithms without scattering one-off code ([CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). Manual daily replacement of symmetric keys does not fix a broken negotiation path.

#### Further learning

- **Reading focus:** Treat crypto-agility as a controlled interface, policy, and test practice; availability workarounds that disable validation are not a migration strategy ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q050

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Exit criteria, dependency readiness, and monitoring before blocking it ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Ending the old path should be part of the migration plan, based on dependencies and the risk of disruption ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q095

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Plan a replacement or a compensating control with a documented exception and timeline ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

ETSI includes full replacement as a migration option; a compensating control should address the residual risk, not conceal it ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q124

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

To enable controlled recovery while managing the risk of reverting ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

The ability to roll back protects the service, but reverting to a vulnerable path should be limited and approved according to risk ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q174

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The reason, risk owner, controls, reassessment date, and exit plan ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

This is a risk-based migration practice: disclose and limit residual exposure rather than conceal it ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q200

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Unnoticed exposure contrary to the protection policy ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Fallback to a vulnerable path should be controlled and reported, because backward compatibility may enable a downgrade ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q215

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Damage to compatibility and business availability ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A transition must also address the risks of the change itself, including dependencies between assets and disruption of processes ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q238

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Scope, assumptions, success criteria, measurements, and stop conditions ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A useful pilot tests compatibility and performance in a defined context and supports an evidence-based deployment decision ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q288

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Divide assets into groups according to risk, dependency, and readiness ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Grouping assets while taking dependencies and prioritization into account reduces the risk of disruption and enables gradual learning ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q296

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Forcing the use of a weaker mechanism despite support for a stronger one ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Backward compatibility can open a path to a vulnerable version, so negotiation policies and controls are required ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q316

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Pilot with representative legacy clients and proxies, a limited blast radius, and defined rollback criteria ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A representative, bounded pilot exposes important dependencies while limiting operational impact ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Including legacy clients and intermediaries makes results more relevant than testing only the newest endpoint, and explicit rollback criteria support controlled learning ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A full-fleet change without prior evidence magnifies failures before compatibility is understood ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Optimizing for speed by testing only the easiest client or by skipping a bounded pilot ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q319

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** C

Allow a monitored, time-bounded classical exception with an owner, and report the residual exposure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A controlled fallback may support safe piloting, but it leaves a classical exposure that must be bounded, monitored, owned, and time-limited ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The protection claim should reflect actual use and exceptions ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Removing all rollback may create availability risk, while silent indefinite fallback hides downgrade exposure and undermines the migration objective ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Reporting intended PQC preference as though every connection actually used the new path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q320

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Set measurable legacy-exit criteria, assign owners, track exceptions, and observe traffic on both paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Coexistence is a transition state, not evidence that vulnerable paths have been removed ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Measurable exit conditions, ownership, exception handling, and traffic visibility help determine when classical use can be retired safely ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A permanent dual-path design without those controls can preserve downgrade opportunities and leave migration progress unverifiable ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Mistaking successful dual operation for completion of the transition ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q333

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Pre-stage supplier qualification, lab testing, and spares so the change can use the approved maintenance window ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

The shutdown date is a fixed deployment constraint, not a reason to postpone preparatory work ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). Qualification, representative lab testing, and spare planning can reduce risk and make the approved window productive ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). Waiting until the window opens leaves little time to resolve compatibility problems, while an unapproved change may affect plant safety or availability ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

Exam trap: Treating a future change window as a reason to delay all migration preparation ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Review long-lived hardware, roots of trust, supplier dependencies and testing; cryptographic correctness does not prove compatibility with an immutable device or an OT process ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q335

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** C

Include emergency and disaster-recovery paths in scope and test their cryptographic behavior ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Emergency and recovery flows are part of the service's real trust and communication paths, even if they are rarely used ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). They need explicit scope and testing so their classical fallback is visible and managed ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Excluding them can leave an important bypass unexamined, and a successful primary path does not establish recovery-path protection ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Counting only the normal user journey while ignoring emergency access and recovery ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q344

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Use an approved lab replica or test environment to assess representative behavior within the authorized scope ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

An approved lab replica can support representative testing while respecting the exercise's safety and authorization boundaries ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Expanding scope unilaterally may create operational or governance risks, and office-system results do not prove behavior on safety equipment ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Exclusion from a test is not a reason to erase the asset from planning ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating technical curiosity as authorization to test excluded safety-critical systems ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q426

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** C

Use a bounded, approved exception with monitoring and a defined restoration target ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

A controlled rollback may be needed to restore critical service, but it should not silently become a permanent weakening of controls ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). An approved exception, monitoring, and a defined restoration target make the risk visible and bounded ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Indefinite retention removes the recovery objective and governance needed to close the gap ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: A rollback that restores availability still needs an explicit endpoint and oversight ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read incident-response roles, prioritization, recovery and improvement; connect telemetry and cryptographic events to accountable handling and validated restoration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q440

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

Use risk-assessed, bounded exceptions while staging compatibility and enforcement ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A staged rollout can preserve critical service while making exceptions explicit, bounded, and subject to risk review ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). It should include a path toward compatibility and enforcement rather than an open-ended waiver ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Immediate universal blocking may create unacceptable service disruption, while declaring migration from newest clients ignores the remaining fleet ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Avoid both unreviewed indefinite exceptions and a rollout that ignores critical service impact ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study representative pilots, staged rollout, continuity and rollback; record the owner and boundary of residual classical exposure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q450

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Add a review date, compensating controls, and a trigger for renewed migration action ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Risk acceptance should remain reviewable as dependencies, controls, and migration options change ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A review date, compensating controls, and a migration trigger prevent a temporary decision from becoming an unexamined permanent waiver ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Naming an owner is useful but does not by itself define when the decision must be revisited ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: An owner alone does not make an exception time-bounded or trigger a reassessment ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q069

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

The product's newness is not evidence of appropriate cryptographic use ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

Evidence of the algorithm, parameters, configuration, and use is required; the equipment's age is not enough ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study actual cryptographic-use verification and coverage; distinguish installation activity or a limited pilot from completed migration ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q100

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

The metric is limited to the coverage assessed and does not prove full organizational readiness ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/))

Inventory and assessment scope are the basis for interpreting migration metrics; coverage and uncertainty should also be reported ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Distinguish unknown or unobserved dependencies from a verified empty set; report the assessed population and incomplete discovery explicitly ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q118

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

The scope has been defined, required uses have been migrated and validated, and exceptions are documented ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Readiness is measured across assets and dependencies and includes validation and management of residual risk, not merely a decision or procurement ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study actual cryptographic-use verification and coverage; distinguish installation activity or a limited pilot from completed migration ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q139

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Support enables use; enforcement defines what is required and what is rejected ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A backward-compatible system can support a new protection while still allowing a vulnerable path, so the objectives are different ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Study actual cryptographic-use verification and coverage; distinguish installation activity or a limited pilot from completed migration ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q169

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Identify paths and components that were not tested or migrated ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Success within a defined scope does not prove coverage of all systems and dependencies ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q176

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

That the configuration, keys, and versions enable the required protection there as well ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

A migration plan should include the dependencies and paths within the service scope, not only the primary path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q223

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Evidence of operation in the target configuration and of handling dependencies and exceptions ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf))

Testing and verification complement installation and demonstrate the scope of the change actually completed ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

#### Further learning

- **Reading focus:** Read staged deployment, interoperability verification, business continuity and rollback alongside migration strategy; keep residual classical paths visible and bounded ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).

### Q237

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Percentage of critical use cases migrated and verified out of a known scope ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf))

A metric based on scope, criticality, and evidence represents risk reduction better than activity alone ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Study actual cryptographic-use verification and coverage; distinguish installation activity or a limited pilot from completed migration ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q312

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

Describe the front-end hop as upgraded and the backend hop as classical; end-to-end coverage remains incomplete ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The client-to-load-balancer hop and the load-balancer-to-database hop are distinct cryptographic connections ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Upgrading one does not change the other, so the report should state the covered hop and the remaining classical path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A new certificate or front-end profile cannot support an end-to-end claim when the backend remains vulnerable ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Confusing protection on one connection with protection across the full data path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Study actual cryptographic-use verification and coverage; distinguish installation activity or a limited pilot from completed migration ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q321

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Report risk-weighted verified coverage of high-risk flows, showing the denominator and unknowns ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Verified coverage of high-risk flows connects progress to actual use and makes the population being measured explicit ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Showing unknowns prevents incomplete discovery from disappearing in the metric ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Installed libraries or restarted servers may not be used by every application and do not, by themselves, establish compliant traffic or reduced risk ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Measuring installed capability rather than verified protection of important flows ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q322

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Report 40 verified passes and 60 services still unknown or unassessed ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

The evidence supports a passing result for the 40 assessed services, not a conclusion about the remaining 60 ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Reporting verified and unknown populations separately communicates progress without inflating readiness or assuming failure ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Calling the estate 100% ready confuses the assessed subset with the entire service population ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Exam trap: Applying the pass rate for an assessed sample to the whole known estate ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Distinguish unknown or unobserved dependencies from a verified empty set; report the assessed population and incomplete discovery explicitly ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q346

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Report the scoped milestone as complete and disclose remaining exceptions and residual risk ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The evidence supports completion of the defined high-priority scope, not an enterprise-wide claim while exceptions remain ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Reporting residual risks and their boundaries gives decision-makers an accurate view of progress and unfinished work ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Neither declaring full completion nor erasing real progress is justified by the stated validation results ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Turning a completed priority milestone into an unsupported claim about the whole enterprise ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q350

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Report validated risk reduction and scope, unresolved dependencies and exceptions, and decisions or resources needed next ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A board needs to understand what risk has demonstrably changed, what scope that evidence covers, and which dependencies or decisions threaten the next milestone ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Technical acronyms and activity counts do not show business impact ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A percentage that hides unknowns or blockers can misrepresent readiness and weaken governance decisions ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Reporting technical activity or a polished percentage instead of evidence, risk, and decisions ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Connect GOVERN accountability, risk decisions and supplier responsibilities with the NCSC discovery, prioritization and delivery process ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q444

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

The sample may be biased and does not establish enterprise-wide deployment coverage ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

A large count from one subnet may still be unrepresentative of the enterprise's services, locations, and paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). Coverage and sampling design matter alongside raw volume ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). The results can support a statement about the observed subset, but not an unqualified claim about unmeasured assets ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

Exam trap: A large sample from one location is not proof of enterprise-wide adoption ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

#### Further learning

- **Reading focus:** Review actual-use verification and representative interoperability testing; successful samples do not establish fleet coverage or rejection of forbidden fallback ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

## Protocols, Implementation & Testing

Protocol behavior, deployment configuration, cryptographic implementation, interoperability, diagnostic testing and performance. This domain contains 93 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| TLS Negotiation and Channel Protection | 18 |
| SSH Key Exchange and Authentication | 5 |
| IKE, IPsec and Post-Quantum Preshared Keys | 10 |
| PKI, Certificates and Trust Validation | 10 |
| HPKE and Hybrid Public-Key Encryption | 4 |
| Cryptographic Engineering and Implementation Safety | 17 |
| Interoperability, Positive and Negative Testing | 18 |
| Performance, Measurements and Diagnostics | 11 |

### Q261

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Advertised support does not prove what was selected in each connection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Readiness requires distinguishing capability, configuration, and actual use, and testing interoperability ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare advertised supported groups with the selected key share and NCSC’s instruction to verify actual PQC use rather than fallback ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q351

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Foundational
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** B

It specifies AES-256-GCM for records and SHA-384 for the key schedule, not the group or certificate signature ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

In TLS 1.3, the cipher suite identifies the record-layer AEAD and the hash used in the key schedule ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). The negotiated key-exchange group and certificate-signature algorithms are selected through separate handshake parameters, so this name alone does not establish either one ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Do not infer a post-quantum group or certificate signature from the cipher-suite name ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Read Section 4.1.1 and Appendix B.4; the TLS 1.3 cipher suite selects record AEAD and HKDF hash, while other parameters select exchange and signatures ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q352

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** A

The offer shows client capability; the selected X25519 exchange identifies the key establishment used on this connection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

An advertised group indicates a client's supported choices; it does not prove which group the server selected ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). The selected group or actual negotiated key exchange must be checked for the individual connection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). A certificate's signature algorithm is a separate authentication choice and cannot change the selected key exchange ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Treating an offered capability as proof of the negotiated connection is a common mistake ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Compare Section 4.2.7 supported_groups with Section 4.2.8 key_share and the completed handshake selection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).
- **Background (Wikipedia):** [Curve25519](https://en.wikipedia.org/wiki/Curve25519).

### Q353

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Foundational
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** B

supported_groups advertises acceptable groups, while key_share carries exchange material for groups supplied in the handshake ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

supported_groups communicates the groups the client is prepared to use, whereas key_share contains the actual key-exchange values it has sent ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). A listed group without a corresponding share has not thereby supplied exchange material ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). The extensions do not negotiate certificate signatures or record ciphers ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Confusing the supported-group list with the actual key shares overstates what the capture proves ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Compare Section 4.2.7 supported_groups with Section 4.2.8 key_share and the completed handshake selection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q354

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** D

The client should send a second ClientHello with the requested share; the retry adds a round trip but is not itself a failure ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

HelloRetryRequest can ask a client to provide a share for an acceptable group that was offered but absent from the initial key_share ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). The client then sends a second ClientHello with that material ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). This adds a handshake round trip; it does not by itself mean negotiation failed or justify sending application data first ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Do not interpret every retry as a downgrade or automatic cryptographic failure ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Read Sections 2.1 and 4.1.4 on HelloRetryRequest and the request for a share in a supported group ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q355

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** A

Check signature_algorithms and, where relevant, signature_algorithms_cert independently of the record cipher selection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

The cipher suite selects record protection and the HKDF hash; it does not select certificate authentication ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). TLS signature_algorithms advertises acceptable handshake signatures, while signature_algorithms_cert addresses certificate signatures ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). Authentication compatibility should therefore be diagnosed separately from the record cipher choice ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: A suitable cipher suite does not guarantee that the peer's certificate signature is acceptable ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Read Section 4.2.3 on signature_algorithms and signature_algorithms_cert, separately from cipher-suite negotiation ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q356

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

PQ key establishment can improve confidentiality, but RSA certificate authentication remains a classical dependency ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Post-quantum key establishment can address the confidentiality risk associated with recording traffic and later breaking classical key exchange ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). It does not change the independent algorithm used to authenticate the certificate ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). RSA authentication remains quantum-vulnerable, so the connection has not completed an authentication migration ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Do not equate PQ key establishment with PQ authentication ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Compare negotiated key establishment with certificate authentication and the quantum-vulnerable algorithm families; neither a protocol version nor a cipher name establishes complete PQC protection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q357

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** A

CertificateVerify signs transcript data with the certificate key; Finished authenticates the transcript using derived handshake secrets ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

CertificateVerify signs handshake transcript data using the certificate's private key, demonstrating possession and binding that key to the handshake ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). Finished is computed from derived handshake secrets and authenticates the transcript, providing key confirmation ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). Neither message selects the record cipher, and Finished is not another certificate signature ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Do not swap the private-key signature role and the key-derived MAC role ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Compare Section 4.4.3 CertificateVerify with Section 4.4.4 Finished and identify what each binds to the handshake ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q358

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** B

Without fresh (EC)DHE, later PSK compromise can expose recorded application traffic derived from that PSK ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

In psk_ke mode, traffic keys are derived without a fresh ephemeral Diffie-Hellman contribution ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). A later compromise of the PSK can therefore undermine confidentiality of recorded traffic protected by that PSK-derived session ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). The record cipher's AES key length does not add forward secrecy ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Do not assume that TLS 1.3 version selection alone guarantees forward secrecy ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read Section 2.2 and Appendix E.1 on PSK modes and forward secrecy, then distinguish classical ECDHE security from quantum resistance ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q359

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** B

Fresh (EC)DHE can provide classical forward secrecy, but ordinary ECDHE is not resistant to a capable quantum attack ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

A fresh (EC)DHE contribution can provide forward secrecy against later compromise of the PSK under the usual classical assumptions ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). Conventional ECDHE remains vulnerable to a sufficiently capable quantum computer, and adding it does not alter certificate authentication ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). The mode is distinct from PSK-only psk_ke ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Classical forward secrecy is not the same as post-quantum key establishment ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read Section 2.2 and Appendix E.1 on PSK modes and forward secrecy, then distinguish classical ECDHE security from quantum resistance ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q360

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Reject or defer payment instructions in early data, or enforce application-level replay-safe semantics before execution ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

TLS 1.3 early data does not provide guaranteed cross-connection replay protection, so non-idempotent payment instructions are unsafe to execute without application-level replay controls ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). The prudent choice is to disallow or defer them, or to design robust replay-safe semantics ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). Cipher strength and certificate algorithm do not remove replay risk ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Authentication of a request does not prove it has never been replayed ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Read Section 2.3, Section 8 and Appendix E.5 on 0-RTT data, early-data keys and replay limitations ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q361

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

Early data uses resumption-PSK-derived keys, so it does not automatically receive guarantees from the later PQ exchange ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

0-RTT early data is protected using keys derived from the resumption PSK, before the fresh full-handshake key exchange completes ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). A later PQ exchange does not retroactively change those early-data keys or remove early data's replay and forward-secrecy limitations ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). The report should distinguish early data from subsequent application records ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Do not attribute the later handshake's guarantees to data sent before that handshake completes ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Read Section 2.3, Section 8 and Appendix E.5 on 0-RTT data, early-data keys and replay limitations ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q362

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

**Correct answer:** D

KeyUpdate refreshes traffic secrets within the connection; a new asymmetric exchange requires another handshake ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

TLS KeyUpdate derives updated traffic secrets for record protection within the established connection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). It is not a new handshake and does not introduce a new asymmetric exchange or change the certificate ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). A fresh PQ key exchange requires a suitable new handshake rather than relying on traffic-secret rotation alone ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

Exam trap: Traffic-key rotation is not equivalent to fresh post-quantum key establishment ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

#### Further learning

- **Reading focus:** Read Section 4.6.3 and Section 7.2; a traffic-secret update is not a new asymmetric key exchange ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)).

### Q364

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, troubleshooting

**Correct answer:** A

Reject the record and fail the connection rather than accept plaintext whose authenticity was not verified ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

An AEAD tag failure means the record's authenticity and integrity have not been established ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). The plaintext must not be accepted or released to an untrusted consumer; the connection should fail according to protocol handling ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Availability goals do not justify bypassing authentication, since tampering could otherwise be treated as valid data ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: Plaintext output before tag validation is not authenticated plaintext ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read TLS record authentication and GCM authenticated decryption; tag failure must not become accepted application plaintext ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q365

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** B

TLS 1.3 support does not establish PQ use; verify PQ-capable groups are configured and negotiated on relevant connections ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

TLS 1.3 is a protocol version, not a guarantee that a deployment uses a post-quantum key exchange ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). The configured group set and per-connection negotiation must be checked ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). A PQ certificate migration addresses a separate authentication dependency and does not make a classical key exchange post-quantum ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: Do not use protocol version as a proxy for negotiated cryptographic algorithms ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Compare negotiated key establishment with certificate authentication and the quantum-vulnerable algorithm families; neither a protocol version nor a cipher name establishes complete PQC protection ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q505

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The code point 0x11EC (X25519MLKEM768) ([RFC 10024: PQ/T Hybrid Key Agreement for TLS 1.3](https://www.rfc-editor.org/rfc/rfc10024); [IANA: TLS Supported Groups](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-8))

IANA registers X25519MLKEM768 as TLS Supported Group 4588, which is 0x11EC. It combines X25519 with ML-KEM-768 and is marked recommended ([RFC 10024: PQ/T Hybrid Key Agreement for TLS 1.3](https://www.rfc-editor.org/rfc/rfc10024); [IANA: TLS Supported Groups](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-8)). 0x0023 and 0x002F are not that hybrid group, and 0xFFFF is not the registered value.

#### Further learning

- **Reading focus:** Read the IANA Supported Groups entry for value 4588 and the RFC 10024 registration, and keep cipher-suite numbers separate from group code points ([RFC 10024: PQ/T Hybrid Key Agreement for TLS 1.3](https://www.rfc-editor.org/rfc/rfc10024); [IANA: TLS Supported Groups](https://www.iana.org/assignments/tls-parameters/tls-parameters.xhtml#tls-parameters-8)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [Curve25519](https://en.wikipedia.org/wiki/Curve25519).

### Q523

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The specified shared secret is the concatenation of the ML-KEM shared secret and the X25519 shared secret, and TLS then runs its key schedule ([RFC 10024: PQ/T Hybrid Key Agreement for TLS 1.3](https://www.rfc-editor.org/rfc/rfc10024))

RFC 10024 defines the X25519MLKEM768 shared secret as that concatenation. TLS 1.3 uses the result in its existing key schedule ([RFC 10024: PQ/T Hybrid Key Agreement for TLS 1.3](https://www.rfc-editor.org/rfc/rfc10024)). This is a specified construction. It is not permission to concatenate two secrets in an application that has no analyzed combiner.

#### Further learning

- **Reading focus:** Read the RFC 10024 shared-secret construction, then keep it separate from an ad-hoc concatenation that has no specified key schedule ([RFC 10024: PQ/T Hybrid Key Agreement for TLS 1.3](https://www.rfc-editor.org/rfc/rfc10024)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [Curve25519](https://en.wikipedia.org/wiki/Curve25519).

### Q524

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

A post-quantum certificate chain, or a key share such as ML-KEM-1024 plus handshake overhead, can exceed a typical 1500-byte frame and be split across packets ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

An ML-KEM-768 encapsulation key is 1184 bytes, so that key alone can fit in a 1500-byte Ethernet frame. An ML-KEM-1024 encapsulation key or ciphertext is 1568 bytes, and ML-DSA or SLH-DSA certificate material is larger still ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)). Those messages can be segmented, which adds failure modes on paths that mishandle fragmentation.

#### Further learning

- **Reading focus:** Compare the FIPS 203 and FIPS 204 lengths with a 1500-byte frame, and do not treat every ML-KEM-768 key share as larger than that frame by itself ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [SPHINCS+](https://en.wikipedia.org/wiki/SPHINCS%2B).

### Q366

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** C

It combines ML-KEM-768 and X25519 for key agreement, with SHA-256 in the method; transport cipher and host authentication are separate ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

The algorithm name denotes a hybrid key exchange combining ML-KEM-768 with X25519, and includes SHA-256 as part of the method ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). SSH separately negotiates transport ciphers and authenticates the server with a host key ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). The key-exchange name does not imply AES-256 or RSA authentication ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

Exam trap: A hybrid SSH key-exchange name does not specify the host-key algorithm or transport cipher ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

#### Further learning

- **Reading focus:** Read the official OpenSSH page on hybrid key agreement, host-signature limitations and warning configuration; verify the negotiated method rather than its display ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM); [Curve25519](https://en.wikipedia.org/wiki/Curve25519).

### Q367

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

The exchange can improve key-establishment confidentiality, while classical host-key authentication remains a separate dependency ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

SSH key exchange establishes shared transport secrets, while host-key signatures authenticate the server ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). A PQ or hybrid exchange does not automatically replace classical host authentication ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). The deployment can gain a confidentiality improvement while still retaining a quantum-vulnerable authentication path that should be inventoried separately ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

Exam trap: Do not conflate SSH key exchange with host-key authentication ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

#### Further learning

- **Reading focus:** Read the official OpenSSH page on hybrid key agreement, host-signature limitations and warning configuration; verify the negotiated method rather than its display ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

### Q368

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** D

Inspect effective server configuration and the key-exchange method actually negotiated for the connection ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

A warning typically concerns the key exchange selected for the connection, which depends on both peers and their effective configuration ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). Checking the server configuration and actual negotiated algorithm provides relevant evidence ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). Suppressing a warning changes its display, not the cryptographic negotiation or security properties ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

Exam trap: Warning suppression is not evidence that a stronger method was negotiated ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

#### Further learning

- **Reading focus:** Read the official OpenSSH page on hybrid key agreement, host-signature limitations and warning configuration; verify the negotiated method rather than its display ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

### Q369

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Foundational
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

The setting affects warning output, not the algorithms negotiated or the security of the resulting session ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

A warning-display control can silence or alter diagnostic output without changing the algorithms available to either peer or the one selected ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). The report needs evidence from effective configuration and actual per-connection negotiation ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). Absence of a warning after changing its display setting is not proof of improved cryptography ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

Exam trap: Never treat a silenced diagnostic as a cryptographic control ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

Terminology clarification: the documented OpenSSH option is WarnWeakCrypto, with no-pq-kex shown as a setting to suppress the PQ warning; DisableWarnWeakCrypto in the original scenario is not the documented OpenSSH directive ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

#### Further learning

- **Reading focus:** Read the official OpenSSH page on hybrid key agreement, host-signature limitations and warning configuration; verify the negotiated method rather than its display ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

### Q370

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** A

The captured session’s selected algorithm is decisive for that connection; investigate effective configuration and negotiation causes ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

A server's software version or configured support does not prove what a particular connection negotiated ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). The per-connection selected key-exchange method is the relevant evidence for that session ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). Effective configuration, client capabilities, and negotiation preferences should be examined to explain the classical selection ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

Exam trap: Support or advertisement is not the same as per-connection selection ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

#### Further learning

- **Reading focus:** Read the official OpenSSH page on hybrid key agreement, host-signature limitations and warning configuration; verify the negotiated method rather than its display ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)).

### Q371

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

The mechanism combines contributions from multiple exchanges into derived key material, potentially mixing classical and PQ inputs ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

IKE's multiple key-exchange mechanism is intended to combine contributions into the resulting key material, allowing different exchanges to contribute to protection ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). It is not merely a race between alternative profiles where one successful exchange is chosen ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). Authentication remains a distinct part of IKE security ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

Exam trap: Do not interpret multiple exchanges as choose-one fallback profiles ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

#### Further learning

- **Reading focus:** Read Section 2.2.1 for additional-exchange negotiation, including NONE, and Section 2.2.2 for contributions to derived key material ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

### Q372

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, troubleshooting

**Correct answer:** B

Use IKE_INTERMEDIATE for extra exchanges after IKE_SA_INIT and IKE fragmentation where applicable, rather than relying on IP fragmentation ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

IKE_INTERMEDIATE provides a mechanism for additional exchanges after IKE_SA_INIT, and IKE fragmentation can carry large IKE messages in protocol-aware fragments ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). The initial IKE_SA_INIT exchange is not simply an encrypted exchange that guarantees successful IP fragmentation ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). Real path behavior should be tested rather than assumed ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

Exam trap: Do not assume IP fragmentation will reliably transport large initial IKE messages ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

#### Further learning

- **Reading focus:** Compare IKE_INTERMEDIATE in Section 2.2.2 with IKE_FOLLOWUP_KE in Section 2.2.4 and the large-payload/fragmentation rationale ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

### Q373

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** D

IKE_INTERMEDIATE supports extra exchanges after IKE_SA_INIT; IKE_FOLLOWUP_KE is associated with CREATE_CHILD_SA or rekey ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

IKE_INTERMEDIATE is used for additional exchanges after IKE_SA_INIT during initial SA establishment ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). IKE_FOLLOWUP_KE is used for an additional key exchange in connection with CREATE_CHILD_SA or rekey ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). Their roles are protocol-stage specific, not cipher or certificate choices ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

Exam trap: Keep the initial-SA exchange stage separate from the CREATE_CHILD_SA/rekey stage ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

#### Further learning

- **Reading focus:** Compare IKE_INTERMEDIATE in Section 2.2.2 with IKE_FOLLOWUP_KE in Section 2.2.4 and the large-payload/fragmentation rationale ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

### Q374

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** A

If NONE is acceptable for the additional exchange, an SA may omit it; verify negotiation and policy enforcement ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

If NONE is an acceptable proposal for the additional exchange, an SA may be established without that contribution ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). The presence of a supported PQ method therefore demonstrates capability, not enforcement ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)). The negotiated exchange set and policy requirements must be verified for actual connections ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

Exam trap: An optional additional exchange is not proof that every SA uses it ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

#### Further learning

- **Reading focus:** Read Section 2.2.1 for additional-exchange negotiation, including NONE, and Section 2.2.2 for contributions to derived key material ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).

### Q375

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

The contribution can improve protection of derived keys, while peer authentication remains dependent on the classical signature ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Key establishment and peer authentication serve separate functions ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). Adding a PQ contribution can improve protection of derived key material, but a classical signature still authenticates the IKE peers and remains a quantum-vulnerable dependency ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). A complete assessment must describe both components ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

Exam trap: A PQ shared secret does not make a classical authentication signature post-quantum ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

#### Further learning

- **Reading focus:** Read RFC 9370 Section 4 and the classical signature threat; additional key exchanges do not automatically replace peer authentication ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)).

### Q376

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** D

Ordinary IKE PSK authentication and RFC 8784 PPK are distinct; the ordinary authentication PSK is not the PPK derivation input ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

An ordinary IKE authentication PSK is used to authenticate peers and is not the same mechanism as RFC 8784 PPK, which is mixed into specified key derivation ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). Configuring one does not establish use of the other ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). PPK also does not remove the need for proper peer authentication ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

Exam trap: The word PSK does not make the authentication secret equivalent to an RFC 8784 PPK ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

#### Further learning

- **Reading focus:** Read Sections 1-2 distinguishing the ordinary IKE authentication PSK from a separate PPK mixed into the specified key derivation ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

### Q377

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Fail establishment under the mandatory-PPK policy until the required PPK is available or an authorized policy change is made ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

A mandatory PPK policy means the peer must not silently fall back to ordinary IKE when the PPK is unavailable ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). The connection should fail until the required secret is available or an authorized policy change is made ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). Silent fallback would defeat the explicit enforcement goal ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

Exam trap: Do not turn a mandatory PPK policy into an undocumented optional fallback ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

#### Further learning

- **Reading focus:** Read Sections 3-4 on USE_PPK and mandatory versus optional PPK negotiation; compare failure with authorized fallback ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

### Q378

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

Prefer independently provisioned high-entropy PPKs or limited scopes; a shared secret increases blast radius and distribution risk ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

A PPK shared by many gateways creates a large compromise blast radius and increases the importance of secure distribution and rotation ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). Independently provisioned, high-entropy secrets or carefully limited scopes reduce the number of systems exposed by one leak ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). A common human password is not an adequate substitute ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

Exam trap: Convenient group-wide provisioning can turn one secret compromise into an enterprise-wide exposure ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

#### Further learning

- **Reading focus:** Read Section 6 on entropy and shared-key risks and Section 5.2.1 on out-of-band PPK provisioning ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

### Q379

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

PPK protects specified derived keys, including Child-SA and subsequent rekeyed IKE-SA keys, but not all initial control traffic or metadata ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

RFC 8784 PPK is mixed into specified key derivation, protecting Child-SA keys and subsequent rekeyed IKE-SA keys ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). It does not support an unrestricted claim that all initial IKE control traffic or sensitive metadata is protected ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). Designs with sensitive initial metadata may need additional measures such as childless setup and rekey ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

Exam trap: Do not extend PPK's key-derivation scope to every initial message and identity field ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

#### Further learning

- **Reading focus:** Read Section 3 and Appendix A for the keys protected by PPK and the limitations on initial IKE control traffic ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

### Q380

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Use the random high-entropy PPK; length alone does not establish passphrase entropy, and secure provisioning remains necessary ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

PPKs should be independently generated with high entropy, with at least 256 bits recommended in the cited guidance ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). A long human-created string may have far less unpredictability than its length suggests ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). Secure out-of-band provisioning and lifecycle handling are also essential to preserve the secret's value ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

Exam trap: Do not equate the number of passphrase characters with cryptographic entropy ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

#### Further learning

- **Reading focus:** Read Section 6 on entropy and shared-key risks and Section 5.2.1 on out-of-band PPK provisioning ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)).

### Q045

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

There may be vulnerable signatures or trust components in the chain ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Certificates, signatures, and dependencies must be mapped throughout the chain, rather than checking only the end-entity key ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Trace certificate subject keys, issuer signatures and trust anchors across the accepted path, then read NCSC’s PKI migration discussion ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q089

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** B

This could solve a compatibility issue at the cost of vulnerability to impersonation ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

The fully authenticated protocol must be evaluated; technical success must not be achieved by removing an essential protection ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read certification-path validation and KEM authentication requirements; successful key establishment is not a reason to disable identity checks ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q101

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

The algorithms and keys in it and in the trust chain must be checked ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

A cryptographic inventory should include certificates and trust chains alongside algorithms and their uses, not merely the existence of a certificate ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Trace certificate subject keys, issuer signatures and trust anchors across the accepted path, then read NCSC’s PKI migration discussion ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q315

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Assess the complete path to relying-party trust anchors and plan how legacy trust paths will be removed or handled ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

The leaf subject-key algorithm and the algorithm used by its issuer are separate parts of authentication ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A classical issuer and accepted classical anchor can leave vulnerable dependencies in the trust path, so validation and legacy exit need to be assessed end to end ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A PQC leaf alone does not establish a PQC-resistant chain ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Checking the leaf's public key while ignoring how the certificate and its trust are established ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare subjectPublicKeyInfo with the issuer signature, then follow the whole certification path and the NCSC PKI migration discussion ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q381

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** B

The leaf has an ML-DSA subject key, but the RSA issuer signature is a separate classical dependency in the path ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A certificate's subject public-key algorithm and the issuer's signature algorithm are distinct fields with distinct roles ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). An ML-DSA leaf key does not remove the RSA signature used by the issuer to sign that certificate ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The full certification path must be assessed for classical dependencies ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Do not confuse the leaf's public-key algorithm with the algorithm that signed its certificate ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare subjectPublicKeyInfo with the issuer signature, then follow the whole certification path and the NCSC PKI migration discussion ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q382

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** C

The classical intermediate signature remains a vulnerable dependency; assess the full validated path and trust policy ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Certificate security depends on the full path accepted by the relying party, not only the leaf's subject key ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A classical intermediate signature can remain a quantum-vulnerable dependency even when the leaf uses a PQ algorithm ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Trust anchors and path-validation policy also affect the assessment ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: A PQ leaf does not erase classical signatures elsewhere in the accepted path ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare subjectPublicKeyInfo with the issuer signature, then follow the whole certification path and the NCSC PKI migration discussion ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q383

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, troubleshooting

**Correct answer:** D

Accept it only if it chains to a trust anchor recognized under the relying party’s approved trust policy ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

A self-signature can demonstrate consistency with the certificate's own key, but it does not establish that the key belongs to a trusted service ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). Trust must come from the relying party's approved trust-anchor policy, delivered through an appropriate trusted process ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). Using a PQ algorithm does not create trust ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

Exam trap: Cryptographic self-consistency is not the same as trusted identity ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read Sections 3.2, 6.1.1 and 6.2 on trust anchors and relying-party policy; a self-signature or strong algorithm does not authorize a new root ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q384

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** C

Do not assume it is suitable for TLS server authentication; both key usage and extended key usage must permit that purpose ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

Certificate use is constrained by both key usage and extended key usage, as well as path and relying-party policy ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). A digitalSignature bit does not override an extendedKeyUsage limited to code signing ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). PQ capability of the key does not broaden the certificate's permitted purpose ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

Exam trap: A generic digitalSignature permission does not override a code-signing-only EKU ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read Sections 4.2.1.3 and 4.2.1.12; keyUsage and extendedKeyUsage constraints must both permit the intended use ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q385

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

**Correct answer:** D

With CA:true, it may issue leaf certificates, but pathLenConstraint zero disallows another non-self-issued intermediate beneath it ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

A CA certificate with CA:true may issue certificates subject to its constraints ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). A pathLenConstraint of zero permits no additional non-self-issued intermediate CA below it, while still allowing issuance of end-entity certificates ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). Algorithm choice does not change that path-length rule ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

Exam trap: Path length zero does not mean the CA cannot issue leaf certificates ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read Section 4.2.1.9 Basic Constraints and its pathLenConstraint treatment of non-self-issued intermediate CAs ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q386

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, troubleshooting

**Correct answer:** A

Revoke or otherwise invalidate the credential, then rotate to a new key and certificate without waiting for expiry ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

A certificate's validity period does not neutralize a compromised private key ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). The organization should respond through its revocation or invalidation process, rotate the key, and issue a replacement as appropriate ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Waiting for scheduled expiry leaves the compromised credential usable during the remaining validity period ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Expiry is not a substitute for revocation and rotation after compromise ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read revocation in Sections 3.3 and 6.3 and key-compromise recovery; scheduled expiry is not a response to a known stolen private key ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q393

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Foundational
- **Tags:** scenario

**Correct answer:** C

In HPKE, hybrid describes the asymmetric and symmetric components; it does not necessarily mean classical plus PQ algorithms ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

HPKE composes a KEM, a KDF, and an AEAD, combining asymmetric establishment of a secret with symmetric encryption of content ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). The term hybrid in this construction does not by itself mean a classical-plus-PQ algorithm combination ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). The selected suite determines the actual primitives ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

Exam trap: Do not transfer the PQ/T meaning of hybrid to HPKE's composition terminology ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

#### Further learning

- **Reading focus:** Read Sections 4 and 5 on the KEM, KDF and AEAD roles and the stateful encryption context; hybrid here is not automatically classical-plus-PQC ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

### Q394

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

Base mode encrypts to the recipient but does not authenticate the sender’s identity ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

HPKE Base mode allows a sender to encrypt to a recipient's public key, but it does not establish the sender's real-world identity ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). Sender authentication requires an appropriate authenticated mode or a separate authentication mechanism with suitable identity binding ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). Including a name in encrypted content is not proof of authorship ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

Exam trap: Confidentiality to a recipient does not prove who created the ciphertext ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

#### Further learning

- **Reading focus:** Compare Base mode with authenticated modes in Sections 5.1 and 9.1; successful decryption is not proof of sender identity ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

### Q395

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** D

Use the KEM to establish a shared secret, derive AEAD keys with the KDF, and encrypt payload data in the AEAD context ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

HPKE's KEM establishes a shared secret, the KDF derives keying material, and the AEAD encrypts and authenticates the payload ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). Bulk content should use the symmetric AEAD rather than repeated public-key encapsulation ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). The context also manages appropriate state such as sequencing for messages ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

Exam trap: The KEM establishes a secret; it is not the bulk-data encryption mechanism ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

#### Further learning

- **Reading focus:** Read Sections 4 and 5 on the KEM, KDF and AEAD roles and the stateful encryption context; hybrid here is not automatically classical-plus-PQC ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

### Q396

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

**Correct answer:** C

It cannot claim forward secrecy against compromise of the recipient's private key; retained ciphertexts may be exposed ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

HPKE Base mode encrypts to the recipient's public key and does not guarantee forward secrecy against later compromise of the corresponding long-term private key ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). An attacker who retained ciphertexts may then be able to recover their contents ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). Per-message encapsulation does not change the recipient key's long-term compromise risk ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

Exam trap: Ephemeral sender-side encapsulation does not automatically protect against recipient private-key compromise ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

#### Further learning

- **Reading focus:** Read Sections 9.1 and 9.7.4 on compromise of recipient secrets and the absence of recipient-compromise forward secrecy ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)).

### Q059

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Test identifiers, parameters, and results, without secrets ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html))

Logs should provide evidence without creating a channel for leaking keys, seeds, or sensitive intermediate material ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read Data to exclude and Protection; log useful operational evidence without copying plaintext, keys or other primary secrets into diagnostics ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

### Q105

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Validate and reject them according to the specification without exposing secrets or sensitive failure details ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

KEM guidance requires input validation and failure handling that prevents information leakage outside the module ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 3 on secure KEM implementations, including input checks, randomness, secret handling and resistance to implementation leakage ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q131

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Prefer a maintained, tested implementation and assess its suitability for the requirements ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Secure implementation requires more than the formula: input handling, randomness, secret protection, testing, and module requirements ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 3 on secure KEM implementations, including input checks, randomness, secret handling and resistance to implementation leakage ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q156

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

It does not, by itself, test authentication, side channels, randomness, or input handling ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

Correctness of a pair of outputs is only part of the requirements for secure implementation and use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Read KEM implementation/validation requirements and the black-box CAVP workflow; functional test success does not prove every input or side-channel property ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q187

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Reduce leakage of secret information through execution timing ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Protection against timing side channels concerns the dependence between secrets and computation time, not fixed network latency ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 3 on secure KEM implementations, including input checks, randomness, secret handling and resistance to implementation leakage ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q189

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Messages with invalid signatures may be accepted ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

Secure verification requires the application to act on the verification result, not merely call the function ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Read Sections 5.2 and 5.3: signing uses a private key, verification takes the public key/message/signature and its Boolean result must be enforced ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q298

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Loss of confidentiality even if the algorithm itself is standardized ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html))

A KEM requires an appropriate source of randomness; mathematical strength does not compensate for predictable secret material ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read FIPS 203 randomness requirements and OWASP’s CSPRNG guidance; output length cannot compensate for predictable secret inputs ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q387

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** C

Coordinate unique IV allocation across uses of the shared key, or use suitably independent keys for the replicas ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

AES-GCM requires nonce uniqueness for every encryption under a given key, including across replicas and restarts ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Reuse can reveal relationships between plaintexts and enable forgeries ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). The system should coordinate IV allocation or use suitably independent keys; increasing key length does not repair nonce misuse ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: A counter that is unique per process may still collide under a shared key ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read Section 8 and Appendix A; IV uniqueness is per key across invocations, replicas and restarts, independently of AES key size ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q389

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** B

Buffer or quarantine provisional plaintext and release it only after the AEAD tag has been verified ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

A decryption API may produce provisional bytes before final tag verification, but those bytes are not authenticated until verification succeeds ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). The application must prevent untrusted consumers from acting on them until success is confirmed ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Parsing or format checks do not substitute for AEAD authentication ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: Decryption output is not trustworthy before the final authentication result ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read Section 7.2 authenticated decryption: accept plaintext only on successful authentication, otherwise return failure ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q390

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** C

The key-size upgrade does not address nonce reuse; AES-GCM still requires unique IVs under each key ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

AES-GCM security relies on nonce uniqueness under each key regardless of whether the AES key is 128 or 256 bits ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). A longer key does not prevent two encryptions from reusing an IV or repair the resulting security failure ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). The nonce-generation design must be fixed independently ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: Do not treat a longer AES key as a remedy for mode misuse ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read Section 8 and Appendix A; IV uniqueness is per key across invocations, replicas and restarts, independently of AES key size ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q392

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Replace the construction with a maintained, approved authenticated-encryption scheme and handle authentication failures safely ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

AES-CTR provides confidentiality but does not itself authenticate ciphertext, so a recipient may accept modified plaintext ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). A maintained AEAD construction such as an approved authenticated mode provides integrity as well as confidentiality when used correctly ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Increasing key length does not add authentication ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: Encryption alone does not establish that ciphertext was not modified ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Compare unauthenticated cipher modes with AEAD and authenticated decryption; a larger key does not add missing integrity ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q400

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** C

Use a maintained, validated implementation with input checks, side-channel protections, and careful failure handling ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

KEM implementations need appropriate input validation and side-channel protections, with failures handled so they do not expose secrets through timing or diagnostic behavior ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). A maintained and validated library is preferable to weakening checks for latency ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). Input length alone does not make malformed cryptographic values safe ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

Exam trap: Do not trade away input validation to mask performance problems ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 3 on secure KEM implementations, including input checks, randomness, secret handling and resistance to implementation leakage ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q421

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** D

Assess and mitigate implementation leakage, including secret-dependent execution paths ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

Mathematical security of an algorithm does not automatically prevent implementation leakage ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)). Secret-correlated timing can expose information and warrants implementation-level analysis and countermeasures ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)). Known-answer tests check functional outputs; they do not establish resistance to side channels ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

Exam trap: A standardized algorithm can still have a vulnerable implementation ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Read KEM implementation/validation requirements and the black-box CAVP workflow; functional test success does not prove every input or side-channel property ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).
- **Background (Wikipedia):** [Quantum algorithm](https://en.wikipedia.org/wiki/Quantum_algorithm).

### Q422

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** A

Restrict dump collection and access, and minimize the time secrets remain in memory ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Temporary secrets can persist in memory or diagnostics artifacts and become accessible to people or systems that do not need them ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Restricting dumps, limiting their contents and access, and destroying unneeded intermediates reduce exposure ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Transport encryption does not protect secrets copied into a broadly accessible diagnostic store ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Ephemeral secrets can still leak through crash dumps and memory handling ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read management and destruction of secret/intermediate values, including protection in volatile memory and diagnostics handling ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q434

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, hands_on

**Correct answer:** A

Reject the record and alert on the authentication failure ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

AEAD decryption must not release or process plaintext as authenticated data when tag verification fails ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Plausible values do not establish integrity, and retrying arbitrary nonces does not repair tampering ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Rejecting and alerting preserves the authentication boundary and enables investigation ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: Plausible plaintext is not trustworthy when the AEAD tag fails ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read Section 7.2 authenticated decryption: accept plaintext only on successful authentication, otherwise return failure ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q435

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** D

Ensure nonce uniqueness under the key across nodes and restore epochs ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

GCM requires nonce uniqueness for each key across all encryptions, including distributed instances and restored state ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). The design needs coordinated counters, unique epochs, key rotation, or another robust uniqueness strategy ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Increasing the AES key size does not remove the nonce requirement, and nonces need not be secret ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: A snapshot can restore counters into a state that reuses nonces under one key ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read Section 8 and Appendix A; IV uniqueness is per key across invocations, replicas and restarts, independently of AES key size ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q441

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

The external segment is protected; the backend path needs separate controls and risk treatment ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

The gateway's external connection does not provide cryptographic protection for a separate plain-text backend hop ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). The report should describe the boundary accurately and address the inner segment through appropriate controls and migration planning ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Treating an internal network as inherently safe would reintroduce implicit trust ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Exam trap: Protection to a gateway does not automatically extend across its backend connection ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

#### Further learning

- **Reading focus:** Map each data flow, trust boundary and attacker action; transport confidentiality, backend protection and authorization solve different problems ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

### Q003

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Comparing outputs for given inputs with expected results to check correctness ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

Test vectors help check conformance, but do not prove correctness for every input or the security of the entire system ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Read KEM implementation/validation requirements and the black-box CAVP workflow; functional test success does not prove every input or side-channel property ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q051

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** hands_on, scenario

**Correct answer:** C

Verification will fail ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

A signature is associated with the corresponding key of its signer, not merely with the algorithm name ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Read Sections 5.2 and 5.3: signing uses a private key, verification takes the public key/message/signature and its Boolean result must be enforced ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q065

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** C

Client capabilities, configuration, policy, profile, and negotiation evidence ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Distinguish available support from the path actually selected, and check whether the decision complies with policy ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare advertised supported groups with the selected key share and NCSC’s instruction to verify actual PQC use rather than fallback ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q088

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** C

No, matching and completion of the protocol must be verified ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

The correct length does not prove equality or peer authentication; key confirmation checks possession of matching key material ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 4.4 on key confirmation; distinguish proof of matching derived material from length checks and independent identity authentication ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q107

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** D

Isolate the cause of the compatibility issue and select an approved remediation path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf))

A compatibility failure calls for analysis of the implementation and its dependencies, not blindly removing protections or concluding that the algorithm has been broken ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

#### Further learning

- **Reading focus:** Study actual-path interoperability and staged testing, including legacy clients and alternate routes; a local or nominal-route success is not complete deployment evidence ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

### Q123

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

New sizes, encodings, and algorithm identifiers may require adaptations ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

A primitive's standard does not guarantee that interfaces and dependent systems will accept its representations and sizes ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q140

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

There is evidence for the scenarios tested, not proof of absolute security ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program))

Testing provides limited assurance within its scope and is not proof for every input, protocol, and deployment environment ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

#### Further learning

- **Reading focus:** Read KEM implementation/validation requirements and the black-box CAVP workflow; functional test success does not prove every input or side-channel property ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Cryptographic Algorithm Validation Program](https://csrc.nist.gov/Projects/cryptographic-algorithm-validation-program)).

### Q198

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** A

A client and server from independent implementations using compatible profiles and parameters ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Interoperability tests operation between components and implementations, not merely internal success within one library ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q216

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Protocol implementations and products need to integrate and test it ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

NIST emphasizes the need to update products, services, and protocols, and to test interoperability ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare publication of an algorithm standard with the NCSC requirements for product, protocol and deployed-use verification ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q279

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** hands_on

**Correct answer:** B

Changing the message and checking that the existing signature is rejected ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

A signature is intended to detect unauthorized changes, so rejection must be tested as well as successful verification ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Read Sections 5.2 and 5.3: signing uses a private key, verification takes the public key/message/signature and its Boolean result must be enforced ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q318

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, troubleshooting

**Correct answer:** A

Resolve and test interoperability through the middlebox before optimizing small performance differences ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A fast implementation that cannot communicate through a required intermediary does not meet the deployment goal ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The team should first establish compatible behavior across the real handshake path, then optimize performance if needed ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A library benchmark measures only one component and cannot substitute for system-level interoperability evidence ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Treating a favorable microbenchmark as proof that a production connection will work ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q331

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** B

Assess device memory, verification limits, boot and update chains, and feasible upgrade or replacement paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

The device's ROM buffer and firmware-verification chain are deployment constraints that a desktop benchmark cannot capture ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). The team must establish whether the existing hardware can verify the signature or whether a supported hardware or lifecycle change is required ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). A transport workaround does not prove the ROM can process the signature safely ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

Exam trap: Choosing a scheme from desktop performance results without checking the actual verifier's limits ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Review long-lived hardware, roots of trust, supplier dependencies and testing; cryptographic correctness does not prove compatibility with an immutable device or an OT process ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q334

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Test restoration of historical archives and confirm controlled availability of any old decryption keys they require ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A successful test of new data does not demonstrate that historical archives remain decryptable after key-management changes ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The organization should verify archive restoration and ensure any retired keys needed for recovery are retained securely under controlled access ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Deleting old keys can make records unrecoverable, while new-data tests do not exercise the legacy path ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Assuming a new backup workflow proves recovery for data protected under older keys ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read secure escrow/backup and migration recovery planning; test that historical data is usable with its required keys, metadata and permissions ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q347

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, troubleshooting

**Correct answer:** B

Test compatibility and cryptographic behavior on the failover route as part of the service path ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

Failover changes the path used by real service traffic and can expose different protocol support or fallback behavior ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). Testing it is necessary to understand whether the service remains compatible and protected during provider failure ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). A nominal-route success or matching marketing terminology does not establish failover interoperability ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

Exam trap: Treating high availability as separate from cryptographic compatibility and path coverage ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

#### Further learning

- **Reading focus:** Study actual-path interoperability and staged testing, including legacy clients and alternate routes; a local or nominal-route success is not complete deployment evidence ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

### Q431

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Correlate build inventory, deployed versions, runtime configuration, and observed negotiations ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A build inventory describes what was present in a build, not necessarily what is deployed or selected at runtime ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Correlating versions, configuration, and observed negotiation establishes whether the intended provider and policy are actually in use ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A local test cannot establish production behavior when versions differ ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: A PQC library in a build does not prove the production connection uses it ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Compare capabilities and dependencies in the CBOM with deployed versions, effective configuration and observed cryptographic use ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q433

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** D

Authenticity is necessary, but compatibility and operational safety require staged validation ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

A valid signature supports confidence in origin and integrity, but it does not guarantee compatibility with a particular configuration or process ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). Staged testing and validated change planning are still needed, especially in operational environments ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)). Disabling signature checks would remove an important authenticity safeguard without solving compatibility ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

Exam trap: Authentic firmware can still be incompatible with a specific operational environment ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

#### Further learning

- **Reading focus:** Review long-lived hardware, roots of trust, supplier dependencies and testing; cryptographic correctness does not prove compatibility with an immutable device or an OT process ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [CISA, NSA, and NIST: Quantum Readiness](https://www.nccoe.nist.gov/sites/default/files/2023-08/quantum-readiness-fact-sheet.pdf)).

### Q445

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Test representative older, mobile, proxy, failover, and negative-use cases ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

A successful test of one client class and route does not establish compatibility or enforcement across a heterogeneous fleet ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). Representative legacy, mobile, proxy, failover, and negative cases reveal operational and policy gaps ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). Repeating the same happy path produces more data about that path, not missing coverage ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

Exam trap: A canary limited to new clients cannot validate the older and alternate paths ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

#### Further learning

- **Reading focus:** Review actual-use verification and representative interoperability testing; successful samples do not establish fleet coverage or rejection of forbidden fallback ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

### Q448

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on

**Correct answer:** D

Attempt a classical-only connection and verify rejection with policy evidence in the logs ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

A successful post-quantum connection proves support on that path, but not rejection of disallowed classical alternatives ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). A controlled negative test demonstrates enforcement, while logs help establish how the policy acted ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)). Configuration text and library presence do not prove the runtime selection or rejection behavior ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

Exam trap: Positive support testing alone does not show that a classical fallback is blocked ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

#### Further learning

- **Reading focus:** Review actual-use verification and representative interoperability testing; successful samples do not establish fleet coverage or rejection of forbidden fallback ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf)).

### Q049

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Keys and signatures may change the size of protocol messages ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Migration assessment includes protocol compatibility and performance, not just local signing time ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q080

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** D

3KB ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Subtract the baseline from the new size; distinguish the absolute increase from a factor of 2.5 ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q110

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Edge resources can be a bottleneck different from the server's ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

NIST considers a range of platforms, including computers, mobile devices, and controllers, so server performance does not represent them all ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q119

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

To attribute differences to the change rather than to different loads or environments ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Useful performance comparisons require a baseline and comparable conditions as part of migration testing ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q160

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

**Correct answer:** D

Size limits, buffers, encoding, and compatibility throughout the path ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

PQC integration also depends on interfaces and protocol and application limitations ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q219

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** calculation

**Correct answer:** C

50% ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

The increase is 10 over a baseline of 20, which is 50%; the calculation alone does not determine whether the impact is acceptable ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q224

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Handshake times, failure rate, traffic volume, and compatibility ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

NCCoE emphasizes interoperability and performance testing for protocols, rather than a single metric for an isolated algorithm ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q233

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** troubleshooting

**Correct answer:** B

The effect of tail latency on service experience and the SLO ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Transition measurement should reflect protocol behavior under usage conditions, rather than relying on an average that hides outliers ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q251

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

The same scenario, hardware, workload, and relevant security level ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines))

Performance comparisons require comparable conditions and parameters, not just a fast number from a different environment ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q317

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, troubleshooting

**Correct answer:** C

Investigate the handshake path, message sizes, packet loss, retransmissions, and remote-link capacity before expansion ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Recurring p99 outages indicate a serious tail-reliability issue that a good median can hide ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). The team should investigate the complete handshake and network path, including loss, message sizes, and capacity constraints ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). A central CPU benchmark or average-latency comparison cannot explain failures concentrated on remote links ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: Using an acceptable average to dismiss failures that affect the worst-performing connections ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q439

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Request the tested asset, version, configuration, and provenance needed to reproduce the result ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A result cannot be reliably connected to a deployed asset or reproduced if the tested version and configuration are unknown ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Provenance and test context let reviewers assess whether the evidence applies to the target environment ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). More aggregate data does not repair the missing identity and configuration of the measured system ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: A benchmark result without tested version and configuration may not apply to production ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Use the report’s documented test configurations, baselines, latency and interoperability experiments to design a comparable measurement; perform the question’s arithmetic on its own stated values ([NIST SP 1800-38C: Interoperability and Performance Experiments (December 2023 Preliminary Draft)](https://www.nccoe.nist.gov/sites/default/files/2023-12/pqc-migration-nist-sp-1800-38c-preliminary-draft.pdf); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

## Cybersecurity Fundamentals

Supporting cryptographic concepts, keys and secrets, authorization, passwords, application security, incident response and resilience. This domain contains 58 questions; the same ID and metadata appear in the question and answer files.

| Subtopic | Questions |
|---|---:|
| Supporting Cryptography Concepts | 11 |
| Key and Secret Management | 10 |
| Identity, Authorization and Zero Trust | 5 |
| Password Storage and Verification | 5 |
| Tokens and Application Security | 6 |
| Incident Response, Evidence and Recovery | 13 |
| Defensive Controls, Monitoring and Resilience | 8 |

### Q061

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Peer authentication and a sound protocol are also required ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280))

A KEM does not necessarily authenticate the parties; the keys must be bound to identities and the communication context ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read KEM secure-use/authentication conditions and public-key identity binding; a public key or matching secret alone does not establish the intended peer ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q083

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Factoring the modulus compromises the private key ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm))

Shor's algorithm includes a quantum solution to the factorization problem on which RSA security relies ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).

#### Further learning

- **Reading focus:** Follow the reduction from factoring to order finding and quantum phase estimation; distinguish the small worked example from cryptographically relevant factoring ([IBM Quantum: Shor's Algorithm](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/shors-algorithm)).
- **Background (Wikipedia):** [Shor's algorithm](https://en.wikipedia.org/wiki/Shor%27s_algorithm).

### Q109

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

They can be combined in one protocol for different purposes ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

An asymmetric KEM can establish a secret that is then used by a symmetric algorithm to protect data ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q159

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** D

Symmetric encryption such as AES ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

A KEM establishes a shared secret and symmetric encryption protects the content; a signature does not conceal the message ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Follow the KeyGen, Encaps and Decaps inputs and outputs in FIPS 203 Section 7, then relate the shared secret to symmetric data protection ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).

### Q180

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

A message and a private signing key ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf))

The signing operation requires a private key, while verification uses the corresponding public key ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

#### Further learning

- **Reading focus:** Read Sections 5.2 and 5.3: signing uses a private key, verification takes the public key/message/signature and its Boolean result must be enforced ([NIST FIPS 204: ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf)).

### Q212

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

Authenticating the source and integrity of information ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures))

Signatures are intended to detect changes and authenticate the signer, not to provide content confidentiality ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read the explanation of signature authenticity and integrity, then distinguish the listed signature standards from encryption and KEM standards ([NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q218

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** A

Otherwise, an attacker can provide their own key and a valid signature of their own ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280))

Mathematical verification of a signature does not by itself prove that the key belongs to the intended identity ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read KEM secure-use/authentication conditions and public-key identity binding; a public key or matching secret alone does not establish the intended peer ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q284

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** C

A secret, random key at least as long as the message, used only once ([Wikipedia: One-Time Pad](https://en.wikipedia.org/wiki/One-time_pad); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution))

The perfect secrecy of an OTP depends on the key being secret and random, being long enough, and being used only once ([Wikipedia: One-Time Pad](https://en.wikipedia.org/wiki/One-time_pad); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).

#### Further learning

- **Reading focus:** Review the four conditions of a one-time pad and its key-reuse failure; generating key material with QKD does not relax the pad-use rules ([Wikipedia: One-Time Pad](https://en.wikipedia.org/wiki/One-time_pad); [IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Background (Wikipedia):** [BB84](https://en.wikipedia.org/wiki/BB84).

### Q388

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** scenario

**Correct answer:** C

AAD is authenticated but not encrypted; the identifier remains visible unless separately protected ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Associated data is covered by the authentication tag, so unauthorized modification can be detected, but it is not encrypted by GCM ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). A customer identifier placed in AAD remains visible to observers who can see the record structure ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)). Sensitive metadata should be encrypted if confidentiality is required ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

Exam trap: Authentication of metadata does not provide confidentiality for it ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

#### Further learning

- **Reading focus:** Read Section 5.2.1.1 on additional authenticated data; separate integrity protection from confidentiality ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)).

### Q418

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

At-rest encryption does not prevent privileged access to plaintext on a running host ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Disk encryption primarily protects storage when it is powered off or otherwise inaccessible through the authorized runtime ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Once the system is running and data is available to a privileged compromised process, at-rest encryption alone is not an isolation control ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Network cryptography does not prevent local operating-system access ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Do not treat full-disk encryption as protection from a compromised running host ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Use Where to Perform Encryption and Secure Random Number Generation to connect the actual threat to the required control ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q506

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

**Correct answer:** A

Symmetric block or stream ciphers ([NIST FIPS 197: AES](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf); [RFC 8439: ChaCha20 and Poly1305](https://www.rfc-editor.org/rfc/rfc8439); [NIST SP 800-67 Rev. 2: Triple DES](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-67r2.pdf))

AES and 3DES are symmetric block ciphers, and ChaCha20 is a symmetric stream cipher. All three encrypt and decrypt with a shared secret key ([NIST FIPS 197: AES](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf); [RFC 8439: ChaCha20 and Poly1305](https://www.rfc-editor.org/rfc/rfc8439); [NIST SP 800-67 Rev. 2: Triple DES](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-67r2.pdf)). They are not public-key cryptosystems, not key-encapsulation mechanisms, and not hash functions. 3DES is a legacy algorithm; the question asks only which kind of cryptography these three names belong to.

#### Further learning

- **Reading focus:** Separate symmetric block and stream ciphers from public-key mechanisms, KEMs, and hash functions ([NIST FIPS 197: AES](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf); [RFC 8439: ChaCha20 and Poly1305](https://www.rfc-editor.org/rfc/rfc8439)).

### Q031

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

Use it for one key-establishment run and delete it as soon as possible after use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

SP 800-227 guidance specifies single-run use and prompt deletion for an ephemeral KEM key pair ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Sections 4.1-4.2 on static and ephemeral KEM key pairs and the required lifecycle of ephemeral key material ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q072

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Checking that the other party possesses matching key material ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

Key confirmation indicates possession of matching material, but does not by itself replace identity authentication ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Section 4.4 on key confirmation; distinguish proof of matching derived material from length checks and independent identity authentication ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q113

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

The key pair can be regenerated from it ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

NIST permits a seed to be used as an alternative representation of a private key in applicable cases, so it must not be exposed ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read the FAQ allowing seeds as private-key representations and KEM Section 3.2; protect material from which private keys can be regenerated ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q152

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** D

It reduces unsafe cross-use and links each key to its role ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html))

KEM guidance, for example, separates a key for key confirmation from data keys, with appropriate use and deletion ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Review separate purposes for derived keys, key confirmation and data protection; do not infer that one raw secret should be reused for every operation ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q154

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

It is intended for a particular key-establishment run rather than for long-term use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf))

The distinction concerns lifecycle and use, and an ephemeral KEM key pair should be deleted as soon as possible after use ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

#### Further learning

- **Reading focus:** Read Sections 4.1-4.2 on static and ephemeral KEM key pairs and the required lifecycle of ephemeral key material ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).

### Q391

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Rewrap each DEK under the new KEK without bulk payload re-encryption, while recognizing copied old wraps cannot be recalled ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

If the DEKs remain uncompromised, a KEK change can be handled by unwrapping and rewrapping DEKs without re-encrypting bulk payloads ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Rotation cannot erase copies of old wrapped DEKs already obtained by an attacker, so the old wrapping exposure must be considered in the threat response and key lifecycle ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Rewrapping reduces future dependence on the old KEK but cannot recall stolen ciphertext or wraps ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read Encrypting Stored Keys and key-compromise recovery; separate KEK rewrapping from payload re-encryption and exposure of old wrapped copies ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q417

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Protect the key-management and export path with appropriate access controls ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Strong encryption of the backup blob is ineffective if its key is exposed through an unprotected export path ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Key storage, access, transfer, and recovery procedures need appropriate controls, separate from the archive's storage boundary ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Increasing cipher key length cannot compensate for disclosure of the key itself ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Assess the protection of the key path, not just the encrypted backup file ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Follow key compromise, purpose separation, secure storage and lifecycle guidance; identify which secret is exposed and what data or authority it protects ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q419

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** C

Use separate keys for distinct purposes, or an approved derivation scheme ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Keys should be separated by cryptographic purpose so that exposure or misuse in one role does not automatically compromise another ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Approved key derivation can provide distinct purpose-specific keys when designed for that use ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). A longer shared key and faster rotation do not address the underlying role conflation ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Key length and secure storage do not justify reusing one key across roles ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Follow key compromise, purpose separation, secure storage and lifecycle guidance; identify which secret is exposed and what data or authority it protects ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q420

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Generate the key with an operating-system-backed cryptographically secure random generator ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

A long output from a predictable or non-cryptographic generator is not a secure key ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Key generation requires a CSPRNG designed to produce unpredictable values ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Hashing or extending weakly generated output cannot reliably create entropy that the source did not provide ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Output length does not compensate for a predictable random-number generator ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Use Where to Perform Encryption and Secure Random Number Generation to connect the actual threat to the required control ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q438

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Move keys behind an independent, access-controlled key-management boundary ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Encryption cannot protect data from a party that can obtain both ciphertext and the key needed to decrypt it ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Separating keys into a controlled vault or equivalent boundary reduces the chance that one storage exposure compromises both ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Obscure names and longer data keys do not repair shared world-readable access ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Ciphertext and its usable decryption key should not share the same exposed boundary ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Follow key compromise, purpose separation, secure storage and lifecycle guidance; identify which secret is exposed and what data or authority it protects ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q363

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** A

Authenticate the client with mTLS, then apply separate policies to authorize particular resources and operations ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Mutual TLS can authenticate a client and demonstrate possession of the corresponding private key ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). It does not determine which API resources or actions that identity may use ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). The application must still enforce authorization based on its policies, roles, scopes, or other appropriate context ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Exam trap: Authentication answers who is connecting; it does not grant blanket resource authorization ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

#### Further learning

- **Reading focus:** Read per-request and object-level permission checks; successful authentication or encryption does not grant unrestricted resource access ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

### Q401

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** C

Authenticate each workload and authorize access to the specific resource it requests ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Encrypted transport protects a connection but does not establish that a workload is entitled to use every resource ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Resource-focused authentication and authorization remain necessary even inside a mesh ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Subnet trust is the strongest distractor, but it reintroduces location-based implicit trust that the design should avoid ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Exam trap: Do not confuse a secure channel with authorization to access every internal resource ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

#### Further learning

- **Reading focus:** Read per-request and object-level permission checks; successful authentication or encryption does not grant unrestricted resource access ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

### Q402

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Check the tenant boundary and the caller's authorization for the requested record ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Mutual TLS authenticates the client endpoint, while the application must separately decide whether that identity may access the requested object ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). The valid-certificate option proves identity, not tenant-scoped entitlement ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Authorization should be checked against the specific record and the caller's permitted scope ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Exam trap: A valid client certificate is not an object-level permission grant ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

#### Further learning

- **Reading focus:** Read per-request and object-level permission checks; successful authentication or encryption does not grant unrestricted resource access ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

### Q416

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** C

Limit decrypt permissions by workload and purpose, and audit the authorization boundaries ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

The key risk is excessive authority: a compromised or misused service identity can decrypt unrelated tenant data ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Least privilege, workload binding, and auditability constrain that path ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). A stronger algorithm or internal network placement does not remove the service account's broad authorization ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Exam trap: An algorithm upgrade does not correct overbroad KMS permissions ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

#### Further learning

- **Reading focus:** Read per-request and object-level permission checks; successful authentication or encryption does not grant unrestricted resource access ([OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

### Q436

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

Revoke the session and apply contextual access checks to subsequent requests ([OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html); [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)).

TLS protects the connection, but a stolen bearer session token can still authorize an attacker who presents it ([OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html); [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)). Revoking the session and applying contextual checks address the credential misuse ([OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html); [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)). A stronger channel does not prove that the current operator is the legitimate user ([OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html); [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)).

Exam trap: Strong transport does not distinguish a legitimate user from someone holding a stolen token ([OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html); [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read server-side session invalidation and anomaly detection, then resource authorization; a stolen token remains a problem even over a protected connection ([OWASP: Session Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html); [OWASP: Authorization Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)).

### Q404

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** A

Use a maintained adaptive password hash, such as Argon2id, with a tested cost setting ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

A stolen password database can be attacked offline, outside the protected transport channel ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). A modern adaptive password-hashing scheme raises the cost of each guess and supports work-factor tuning ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). A fixed salt does not prevent shared precomputation as effectively as per-password random salts, and transport security does not change stored-hash properties ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Exam trap: A stronger network channel does not make fast password hashes resistant to offline guessing ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read the relevant password-hashing, salting, peppering, work-factor and upgrade sections; the storage threat remains separate from TLS protection ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).
- **Background (Wikipedia):** [Argon2](https://en.wikipedia.org/wiki/Argon2).

### Q405

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Foundational
- **Tags:** scenario

**Correct answer:** D

The hashes should differ, limiting reuse of one precomputed result across accounts ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

A unique random salt causes identical passwords to produce different stored hash values and frustrates amortized precomputation across accounts ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). It does not increase the password's entropy, so the users still share a guessable secret ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). Treating salts as secret authentication factors misunderstands their purpose ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Exam trap: Salting changes stored hash behavior, not the strength of a user's chosen password ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read the relevant password-hashing, salting, peppering, work-factor and upgrade sections; the storage threat remains separate from TLS protection ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

### Q406

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** C

Replace the exposed pepper, arrange affected password resets, and keep its replacement in a separately controlled vault or HSM ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Moving an already exposed pepper does not restore its secrecy ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). Replace it and arrange affected password resets, with the new pepper held outside the password database in a restricted vault or HSM ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). A unique salt still serves a different purpose and cannot substitute for this secret separation ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Exam trap: A separate database field is not an independent secret store ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read the relevant password-hashing, salting, peppering, work-factor and upgrade sections; the storage threat remains separate from TLS protection ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

### Q407

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** B

Benchmark suitable costs under expected load and apply request rate limits ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Adaptive hash costs should be selected through security and capacity testing, not maximized without regard to denial-of-service and availability risks ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). Benchmarking with realistic load and rate limiting balances password-guess resistance against service stability ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). Switching to a fast hash would reduce load but would also weaken stored-password protection ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Exam trap: Maximum memory cost is not automatically the safest production configuration ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read the relevant password-hashing, salting, peppering, work-factor and upgrade sections; the storage threat remains separate from TLS protection ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).
- **Background (Wikipedia):** [Argon2](https://en.wikipedia.org/wiki/Argon2).

### Q408

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** A

Rehash a supplied password after it verifies at login or during a reset ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Password hashes are not reversible encryption, so the plaintext cannot be recovered from the stored value ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). After a user supplies a password and it verifies against the legacy hash, the service can hash that supplied password with the new scheme ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)). Hashing the old hash as a substitute creates a different credential workflow and does not perform a normal password migration ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

Exam trap: A password hash cannot be decrypted to recover the user's original password ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read the relevant password-hashing, salting, peppering, work-factor and upgrade sections; the storage threat remains separate from TLS protection ([OWASP: Password Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html)).

### Q397

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Foundational
- **Tags:** scenario

**Correct answer:** D

A signed JWT is generally readable by token holders; its signature and TLS transport do not encrypt claims at rest ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

A signed JWT provides integrity and issuer authentication when validated correctly, but its payload is typically readable by anyone who obtains the token ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). TLS protects data in transit on that connection, not the token in later logs or storage ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Confidential claims require an appropriate encryption design and careful handling ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Exam trap: Do not confuse a signed token with an encrypted token ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

#### Further learning

- **Reading focus:** Read Section 2.3 and Section 3.3; distinguish signing from encryption and validate every required layer of a nested JWT ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

### Q409

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** A

Pin permitted algorithms and bind each verification key to its intended algorithm ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

The token header is attacker-controlled input and must not dictate the verifier's security policy ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). The verifier should allow only configured algorithms and use keys only with their intended algorithms ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Checking the issuer claim alone does not prevent algorithm confusion, and transport encryption does not validate a token's signature ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Exam trap: Do not let an untrusted JWT header choose the verification algorithm ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

#### Further learning

- **Reading focus:** Read Section 3.1 Perform Algorithm Verification; allowed algorithms and compatible keys are verifier policy, not a choice delegated to untrusted token input ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

### Q410

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** A

Check that the token audience and context are valid for the receiving API ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

A valid issuer signature establishes that the token was issued and not altered, but it does not establish that it was intended for this API ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Audience and relevant token-context validation prevent cross-service substitution ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Re-signing with the same issuer's key does not supply the missing intended-recipient check ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Exam trap: Issuer and signature validation do not replace audience validation ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

#### Further learning

- **Reading focus:** Read Sections 3.8 and 3.9 on issuer, subject and audience; a valid signature does not make a token suitable for every API ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

### Q411

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** A

Reject the token because the required inner signature did not validate ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Decryption protects confidentiality for the outer layer; it does not make an invalid inner signature valid ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). When the token format requires both operations, each must succeed before claims are trusted ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Retrying algorithms selected by an untrusted header would introduce a separate validation weakness rather than fix the failed signature ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Exam trap: Successful outer decryption does not waive inner-token signature validation ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

#### Further learning

- **Reading focus:** Read Section 2.3 and Section 3.3; distinguish signing from encryption and validate every required layer of a nested JWT ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

### Q412

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

Apply distinct token validation rules, including type and audience checks ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Tokens intended for different purposes should be distinguished through their type, audience, keys, and applicable validation rules ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). A valid signature proves integrity under a key but does not establish that the token type is appropriate for an API ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Expiration and transport separation do not resolve that semantic substitution ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Exam trap: A valid signature does not make an identity token an access token ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

#### Further learning

- **Reading focus:** Read Sections 2.8, 3.11 and 3.12 on cross-JWT confusion, explicit typing and mutually exclusive validation rules ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

### Q413

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

Generate and manage a high-entropy secret suitable for HS256 ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

An attacker who obtains a token can attempt offline guesses against a weak HMAC key; TLS does not strengthen that key ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). HS256 requires a high-entropy secret generated and managed appropriately ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Appending a predictable service name adds little uncertainty and does not substitute for a securely generated key ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

Exam trap: Post-quantum transport does not make a human password a strong HMAC key ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

#### Further learning

- **Reading focus:** Read Section 3.5 on sufficient key entropy; encrypted transport does not strengthen a weak HMAC signing secret ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)).

### Q099

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Assess the scope, update or replace the implementation, and evaluate key impact ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html))

A mathematical standard does not eliminate implementation flaws, and crypto-agility enables controlled remediation ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Use risk-based incident triage and containment, establish the affected implementation and credentials, and separate an active incident from a future algorithm migration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q120

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** B

Address the compromise, keys, and permissions ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html))

PQC does not protect a secret that has been stolen directly or an application controlled by an attacker ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read resource/identity controls and protection of keys at the endpoint; a quantum-resistant channel cannot repair a compromised authorized process ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

### Q304

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Contain and investigate the exploited flaw through incident response while the migration work proceeds separately ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

An actively exploited flaw requires risk-based incident handling, including coordinated containment and investigation; PQC work does not replace that response ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). The pilot can continue as a separate risk-management activity ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Pausing containment confuses a future cryptographic transition with an immediate security incident and increases current exposure ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Letting a future quantum-risk project distract from an active, ordinary security incident ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Use risk-based incident triage and containment, establish the affected implementation and credentials, and separate an active incident from a future algorithm migration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q403

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** B

Contain the host and identity, restrict decryption rights, and investigate prior key use ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

The compromised application can make authorized decryption requests, so stronger transport does not stop misuse of its identity and host ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Containment, access restriction, and investigation address the active path ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Re-encryption alone is the tempting distractor, but it does not prevent a still-authorized compromised application from decrypting data again ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Do not treat transport protection as a defense against authorized malware ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Use risk-based incident triage and containment, establish the affected implementation and credentials, and separate an active incident from a future algorithm migration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q414

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

Treat the key as exposed, revoke or rotate it, and investigate possible prior use ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Removing a secret from the latest revision does not erase copies from repository history or determine whether it was used ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). The existing key should be treated as compromised, with rotation or revocation and investigation of potential use ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). A future algorithm migration does not contain today's exposure ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Deleting the visible line does not revoke a key already exposed in history ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Follow key compromise, purpose separation, secure storage and lifecycle guidance; identify which secret is exposed and what data or authority it protects ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q415

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** C

A future key exchange cannot undo exposure of data decryptable with the stolen key ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

A stolen DEK can decrypt any ciphertext protected by that key that the attacker possesses, independent of how future KMS sessions are established ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Future post-quantum exchange protects future communications, not already captured data under the compromised key ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). The response must assess exposed data and contain or replace the compromised key as appropriate ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Do not confuse protection for future key exchange with recovery from a stolen DEK ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Follow key compromise, purpose separation, secure storage and lifecycle guidance; identify which secret is exposed and what data or authority it protects ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q423

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario, troubleshooting

**Correct answer:** D

Determine the implementation's exposure and impact before characterizing the algorithm family ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

An implementation bug can create real operational or security risk without demonstrating a break of the underlying algorithm family ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Triage should establish affected versions, attack conditions, and impact before making broader claims ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)). Ignoring it because the algorithm is standardized confuses algorithm assurance with implementation correctness ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

Exam trap: Do not equate one library defect with a break of an entire algorithm family ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Use risk-based incident triage and containment, establish the affected implementation and credentials, and separate an active incident from a future algorithm migration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html)).
- **Background (Wikipedia):** [ML-KEM](https://en.wikipedia.org/wiki/ML-KEM).
- **Official guidance:** [NIST Post-Quantum Cryptography](https://csrc.nist.gov/projects/post-quantum-cryptography).

### Q424

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** D

Stop unauthorized signing, revoke or rotate the key, and investigate potentially affected artifacts ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

A compromised signing key can make malicious artifacts appear authentic, so unauthorized use must be stopped and the trust material addressed ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). The organization should investigate potentially affected artifacts and validate clean recovery ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Re-signing without provenance analysis risks legitimizing an artifact that has not been established as trustworthy ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Key rotation alone is incomplete without investigating artifacts signed during exposure ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read incident-response roles, prioritization, recovery and improvement; connect telemetry and cryptographic events to accountable handling and validated restoration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q425

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Preserve relevant evidence with restricted access while containing the incident ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Logs may be essential to determine scope, chronology, and affected artifacts, so indiscriminate deletion can undermine response and recovery ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Preserve relevant evidence while limiting access and containing the incident ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Broad publication increases exposure, while waiting for exhaustive review can delay urgent containment ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Containment does not require destroying potentially important evidence ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read incident-response roles, prioritization, recovery and improvement; connect telemetry and cryptographic events to accountable handling and validated restoration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q427

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** B

Test the required keys, permissions, metadata, and restored-data integrity ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

A backup is recoverable only if the organization can access the appropriate keys, metadata, and authorization path needed to interpret and decrypt it ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Testing the file alone establishes availability of bytes, not recovery of usable data ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Historical archives may require retained keys and validated integrity checks ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

Exam trap: A readable backup file is not necessarily a recoverable database ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

#### Further learning

- **Reading focus:** Read secure escrow/backup and migration recovery planning; test that historical data is usable with its required keys, metadata and permissions ([OWASP: Key Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Key_Management_Cheat_Sheet.html); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)).

### Q443

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** D

Assign ownership and define triage, escalation, and response actions for alerts ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Detection information has little operational value without people and processes to assess and act on it ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Ownership, triage criteria, escalation, and response workflow should be established before increasing alert volume ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Broadcasting every alert without responsibility can worsen noise without improving incident handling ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: More telemetry cannot compensate for an alert queue with no owner ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read incident-response roles, prioritization, recovery and improvement; connect telemetry and cryptographic events to accountable handling and validated restoration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q446

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

**Correct answer:** A

Restore trust anchors through an approved, integrity-protected distribution process ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

A relying party's trust depends on which anchors it accepts and how that set is protected and distributed ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). A strong algorithm does not make an attacker-added root trustworthy ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). Restoring and securing approved trust-store distribution addresses the compromise; increasing key size does not ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

Exam trap: Algorithm strength cannot compensate for a compromised trust-anchor distribution path ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

#### Further learning

- **Reading focus:** Read Sections 3.2, 6.1.1 and 6.2 on trust anchors and relying-party policy; a self-signature or strong algorithm does not authorize a new root ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)).

### Q449

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Update dependency maps, runbooks, monitoring, and training based on the findings ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

A useful review turns observed gaps into improvements across asset knowledge, response procedures, monitoring, and staff readiness ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Blaming an algorithm without evidence misses the operational causes, while restoration alone does not ensure readiness for recurrence ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Lessons should inform risk management and future recovery plans ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Do not attribute an outage to an algorithm before examining the full incident ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read incident-response roles, prioritization, recovery and improvement; connect telemetry and cryptographic events to accountable handling and validated restoration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q155

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** conceptual

**Correct answer:** C

Disclosure outside the cryptographic protection ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html))

System security also depends on protecting data and secrets at the endpoint, not only on the key-establishment mechanism ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read Data to exclude and Protection; log useful operational evidence without copying plaintext, keys or other primary secrets into diagnostics ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

### Q329

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** C

Apply validated data minimization and remove it through the controlled disposal process ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

When information has no approved retention, legal, or business reason to remain, validated minimization reduces the amount of data exposed to future compromise ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Encryption does not eliminate all risks of retaining unnecessary information ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). Indefinite retention or extra copies extend exposure without a stated need ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

Exam trap: Treating encryption as a reason to retain data beyond its justified lifecycle ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read Minimise the Storage of Sensitive Information within the architecture guidance; encryption does not justify retaining data without an approved need ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)).

### Q428

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** C

Use segmentation and least privilege, and validate tested recovery procedures ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

PQC can protect communications against certain cryptographic threats, but it does not prevent an attacker with valid credentials from encrypting accessible files ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Segmentation and least privilege limit reach, while tested recovery supports availability ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Stronger transport alone does not constrain the ransomware's authorized access ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

Exam trap: Encryption used by the attacker is not an availability safeguard ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

#### Further learning

- **Reading focus:** Read incident-response roles, prioritization, recovery and improvement; connect telemetry and cryptographic events to accountable handling and validated restoration ([NIST SP 800-61 Rev. 3: Full Incident Response Guide](https://doi.org/10.6028/NIST.SP.800-61r3); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).

### Q429

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** A

Mark the evidence incomplete and restore or verify monitoring coverage ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)).

No observed alerts are meaningful only when the monitoring source is functioning and has adequate coverage ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)). An offline collector makes the absence of events inconclusive, so the dashboard should reflect unknown or incomplete evidence until health and data flow are confirmed ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)). Green status would overstate assurance ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)).

Exam trap: No alert from a silent collector is not evidence of no downgrade ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)).

#### Further learning

- **Reading focus:** Read logging Operation and Verification, then unknown inventory completeness; distinguish healthy zero findings from absent or broken telemetry ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)).

### Q430

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Separate unknown coverage from pass and fail, and document the scan limitation ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

An unreachable system has not produced evidence of compliance or noncompliance, so it should not be treated as a pass ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Distinguishing unknown coverage from pass and fail makes the gap visible and supports follow-up ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Calling every unknown a failure may also misrepresent what the scan established ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

Exam trap: A scanner that found nothing because it could not connect has not verified compliance ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

#### Further learning

- **Reading focus:** Distinguish unknown or unobserved dependencies from a verified empty set; report the assessed population and incomplete discovery explicitly ([CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

### Q432

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

**Correct answer:** B

Require appropriate evidence of package authenticity and integrity as well ([NIST: Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

A benchmark can provide performance evidence but does not establish the authenticity or integrity of the software package being installed ([NIST: Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)). Supply-chain controls remain necessary to verify that the delivered update is trusted ([NIST: Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)). Treating performance evidence as package provenance confuses separate assurance questions ([NIST: Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

Exam trap: Algorithm performance evidence does not authenticate the delivered software ([NIST: Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

#### Further learning

- **Reading focus:** Read software protection and provenance alongside the purpose of a digital signature; a benchmark does not authenticate the delivered update ([NIST: Secure Software Development Framework](https://csrc.nist.gov/Projects/ssdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).

### Q437

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario

**Correct answer:** D

Minimize and redact sensitive log fields, and restrict access to retained logs ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

Network encryption protects data in transit but does not protect plaintext copied into application logs ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). Reducing sensitive content, redacting necessary fields, and restricting access address the actual exposure ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)). Increasing transport strength has no effect on records already written to the analytics platform ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

Exam trap: Data logged before encryption remains exposed despite a secure network channel ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

#### Further learning

- **Reading focus:** Read Data to exclude and Protection; log useful operational evidence without copying plaintext, keys or other primary secrets into diagnostics ([OWASP: Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)).

### Q442

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

**Correct answer:** A

Select controls according to each attacker's objective, capability, and access path ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Passive collection and active credential misuse have different objectives and capabilities, so the relevant safeguards differ ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Post-quantum transport can address some confidentiality risks against future decryption, while identity, endpoint, and authorization controls address active misuse ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). Modeling only passive collection leaves the active path unexamined ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

Exam trap: Do not assume a transport upgrade addresses an attacker using valid stolen credentials ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

#### Further learning

- **Reading focus:** Map each data flow, trust boundary and attacker action; transport confidentiality, backend protection and authorization solve different problems ([OWASP: Threat Modeling Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Threat_Modeling_Cheat_Sheet.html); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).

## Reference and Revision Material

The sections below retain the previous edition's revision notes, glossary, date tables and decision checklist. They are supporting study material, not additional question records or fixed exam assignments.

## Key Distinctions: Revision Sheet

Read this section after checking the answers to a study session. The aim is to correct your understanding rather than memorize answer letters.

- **Shor versus Grover**: Shor threatens RSA and DH/ECC through their underlying mathematical problems, while Grover provides a generic quadratic search speedup ([NIST IR 8547: Draft Transition Guidance](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf); [NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)). A theoretical speedup does not establish that AES has already been broken in practice ([NIST: Technical PQC FAQ](https://csrc.nist.gov/Projects/post-quantum-cryptography/faqs)).
- **ML-KEM versus signatures**: A KEM establishes a shared secret; ML-DSA and SLH-DSA provide digital signatures ([NIST: PQC Project and Standardization Status](https://csrc.nist.gov/projects/post-quantum-cryptography); [NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). Content encryption, key establishment, and source authentication serve different purposes ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST: Digital Signatures](https://csrc.nist.gov/projects/digital-signatures)).
- **Standards mapping**: FIPS 203 specifies ML-KEM, derived from Kyber; FIPS 204 specifies ML-DSA, derived from Dilithium; FIPS 205 specifies SLH-DSA, derived from SPHINCS+ ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards)). An implementation must conform to the standardized version, not merely carry the historical submission name ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **Hybrid constructions**: Secure combination depends on the construction, the combiner, and its integration with the protocol ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). Supporting two alternative algorithms does not necessarily mean combining them cryptographically ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)).
- **HNDL**: The confidentiality lifetime of the data matters more than the certificate's validity period alone ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Changing encryption now does not change an encrypted copy that an attacker already possesses ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)).
- **Mosca's model**: Check whether X + Y approaches or exceeds Z, where X is the required protection lifetime, Y is migration time, and Z is the estimated threat horizon ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)). This is an estimate-based planning model, not a certain forecast or proof that a compromise has occurred ([NIST NCCoE: Migration and Mosca's Model](https://www.nccoe.nist.gov/sites/default/files/2022-07/pqc-migration-project-description-final.pdf)).
- **QKD**: A quantum channel and authenticated classical communication are needed; QKD alone does not replace party authentication ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution); [NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)). Physical security in a theoretical model does not remove the need to secure implementations and endpoints ([NSA: QKD Limitations](https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/)).
- **BB84**: With two equally likely, independently chosen bases, about half the events survive sifting on average ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)). In the idealized model of intercept-resend on all signals with Eve choosing a random basis, the expected sifted-bit QBER is 25%; these results follow from the stated assumptions and are not constants for every QKD system ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)).
- **Reconciliation versus privacy amplification**: Reconciliation resolves disagreements; privacy amplification reduces the eavesdropper's potential information by deriving a shorter key ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)). Leakage during classical processing must also be accounted for ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)).
- **Inventory and CBOM**: Record algorithms, parameters, uses, key metadata, certificates, and dependencies ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf)). A library's supported capability does not prove application use, and missing information does not prove that no dependency exists ([CycloneDX: Authoritative Guide to CBOM](https://cyclonedx.org/guides/OWASP_CycloneDX-Authoritative-Guide-to-CBOM-en.pdf); [CycloneDX: Dependencies and Inventory Completeness](https://cyclonedx.org/docs/1.7/proto/)).
- **Support versus enforcement**: A product may support PQC while still permitting classical traffic ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Verify the profile actually negotiated and identify remaining paths and exceptions ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Standards versus product validation**: An algorithm FIPS, CAVP algorithm validation, and CMVP module validation are different layers ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). An algorithm name in a presentation is not evidence that a module or an entire configuration has been validated ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Laboratory testing**: A successful round trip or a fast benchmark does not establish complete security ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Include negative tests, randomness, secret protection, authentication, and deployment conditions ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Circuits**: H applied to ∣0⟩ produces ∣+⟩; two consecutive H gates return the state to its original value; H followed by a suitable CNOT can prepare a Bell state ([IBM Quantum: Bits, Gates, and Circuits](https://quantum.cloud.ibm.com/learning/en/courses/utility-scale-quantum-computing/bits-gates-and-circuits); [IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)). Measurement statistics are accumulated over repeated runs ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)).

## Working Glossary

Use this glossary alongside the explanations rather than memorizing acronyms in isolation. Advanced mathematical terms are included for enrichment, not as a claim about the actual exam's difficulty.

| Term | Meaning and use |
|---|---|
| PQC | Post-Quantum Cryptography: cryptography designed to withstand both classical and quantum adversaries ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| CRQC | Cryptanalytically Relevant Quantum Computer: a quantum computer capable of relevant cryptanalytic attacks ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| KEM | Key-Encapsulation Mechanism: a mechanism for establishing a shared secret using KeyGen, Encaps, and Decaps ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). |
| KDF | Key-Derivation Function: a function that derives keying material from suitable input according to protocol requirements ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). |
| PQ/T hybrid | A construction combining a post-quantum mechanism and a traditional mechanism ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). |
| Key confirmation | Assurance that the other party possesses matching keying material, not necessarily proof of real-world identity by itself ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). |
| Encapsulation key | The public key of a KEM ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)). |
| Decapsulation key | The private key of a KEM ([NIST FIPS 203: ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf)). |
| IND-CCA | Indistinguishability under chosen-ciphertext attack; for this bank, the key point is that a combination of mechanisms may fail to preserve this security property ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). |
| QKD | Quantum Key Distribution: distributing keying material using properties of quantum information ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)). |
| QBER | Quantum Bit Error Rate: the error rate in the relevant sample of bits ([ETSI GS QKD 005: Security Proofs and Key Processing](https://www.etsi.org/deliver/etsi_gs/QKD/001_099/005/01.01.01_60/gs_QKD005v010101p.pdf)). |
| OTP | One-time pad: encryption using a random, secret key of sufficient length, without reusing it ([IBM Quantum: BB84 and QKD](https://quantum.cloud.ibm.com/learning/en/modules/computer-science/quantum-key-distribution)). |
| HNDL | Harvest now, decrypt later: collecting ciphertext now in the hope of decrypting it in the future ([NIST: PQC and Harvest Now, Decrypt Later](https://www.nist.gov/cybersecurity-and-privacy/what-post-quantum-cryptography)). |
| CBOM | Cryptography Bill of Materials: a structured inventory of cryptographic assets and dependencies ([CycloneDX: CBOM](https://cyclonedx.org/capabilities/cbom/)). |
| PKI / CA | Public Key Infrastructure / Certificate Authority: public-key infrastructure and an authority that binds keys to identities ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| HSM | Hardware Security Module: hardware that protects keys and performs cryptographic operations ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| CAVP / CMVP | NIST's Cryptographic Algorithm Validation Program and Cryptographic Module Validation Program, respectively ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| Shots | Repeated state-preparation and measurement runs used to collect statistics ([IBM Quantum: Bell Circuits and Repeated Shots](https://quantum.cloud.ibm.com/learning/en/courses/use-a-qc-today/build-and-run-your-first-quantum-program)). |
| SLO / p99 | In the performance questions: a service-level objective / the measured time below which 99% of observations fall; these are the working definitions used in this bank. |
| CI/CD / DR | In the enterprise questions: continuous integration and delivery or deployment processes / disaster recovery; these provide operational contexts for migration planning. |

## Suggested Error Log

Copy a row for every mistake and every correct answer you guessed. Try to express the correct principle in your own words rather than copying only the answer letter.

| Question | Domain | My choice and reasoning | Correct principle | Material to revisit | Retest date |
|---|---|---|---|---|---|
| __ | __ | __ | __ | __ | __ |
| __ | __ | __ | __ | __ | __ |
| __ | __ | __ | __ | __ | __ |


## Roadmap and Date Revision Table

Memorize each date together with its document, scope, status and required action. This table is a study aid checked on October 9, 2026; questions about dated drafts or summaries test those specified documents, not an assumption that every milestone is universally binding.

| Document or body | Type and scope | Date or milestone | What to remember |
|---|---|---|---|
| UK NCSC migration guidance ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)) | Guidance published March 20, 2025; mainly large organizations and CNI ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)) | 2028 / 2031 / 2035 ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)) | By 2028: discovery, assessment and initial plan ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). By 2031: highest-priority early migrations ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). By 2035: complete migration, with a possible difficult technology tail ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Planning targets, not a forecast of quantum-computer arrival ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). |
| EU coordinated PQC roadmap ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography); [BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)) | Recommendations following April 2024 Commission Recommendation; roadmap published June 23, 2025; primarily Member States ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography); [BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)) | End 2026 / end 2030 / end 2035 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography); [BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)) | Start transition by end 2026; high-risk use cases as soon as possible and no later than end 2030 ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography); [BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)). BSI describes the end-2035 goal as migration for all systems largely completed, not an absolute statutory 100% deadline for every company ([European Commission: PQC Policy and Roadmap](https://digital-strategy.ec.europa.eu/en/policies/post-quantum-cryptography); [BSI: EU PQC Roadmap Milestones](https://www.bsi.bund.de/DE/Service-Navi/Presse/Alle-Meldungen-News/Meldungen/EU-Roadmap_Quantenkryptografie_250711.html)). |
| NIST IR 8547 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)) | Initial Public Draft, November 12, 2024; federal/industry transition planning ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)) | After 2030 / after 2035 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)) | Draft tables: quantum-vulnerable public-key schemes at 112-bit classical security deprecated after 2030 and disallowed after 2035 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). At least 128-bit classical public-key security is also disallowed after 2035 ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). These are not AES retirement dates or final universal law ([NIST IR 8547: Initial Public Draft, November 2024](https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf)). |
| U.S. Executive Order 14412 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)) | Executive order dated June 22, 2026; Section 4(b) directs OMB guidance for federal HVAs/high-impact systems, excluding NSS ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)) | December 31, 2030 / December 31, 2031 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)) | PQC key establishment by December 31, 2030; PQC digital signatures by December 31, 2031, in the specified federal scope ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). Do not generalize these dates to all companies or NSS ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). |
| EO 14412 supporting actions ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)) | Governance, pilot, guidance and rulemaking instructions, not identical to migration completion ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)) | 30 / 180 / 270 days; December 31, 2027 ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)) | Agency lead within 30 days; NIST pilot completed by December 31, 2027; public CBOM minimum-elements guidance within 270 days ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). FAR Council instructed to publish a proposed contractor rule within 180 days: proposed rulemaking is not evidence of a final rule already in effect ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). |
| CNSSP 15 / CNSA 2.0, NSA summary ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)) | October 1, 2026 public NSA article; commercial National Security Systems ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)) | 2027 / 2030, in this summary ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)) | The article summarizes new commercial NSS support for CNSA 2.0 by 2027 and legacy systems phased out by 2030 ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). This is not a substitute for the current underlying policy, category-specific profile, exceptions or implementation schedule ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). |
| BSI TR-02102 recommendations ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)) | Official February 11, 2026 announcement; technical recommendations, with mandatory conformity in some regulated products ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)) | End 2030 / end 2031 / end 2035 ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)) | Standalone classical asymmetric encryption should end by end 2031, already end 2030 for highly sensitive applications; use hybrid PQC protection ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)). Standalone classical-signature phase-out planned by end 2035 ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)). Not a ban on AES or a universal law ([BSI: 2026 Recommendations for Classical Asymmetric Cryptography](https://www.bsi.bund.de/DE/Service-Navi/Presse/Pressemitteilungen/Presse2026/260211_Ende_klassischer_Verschluesselungsverfahren.html)). |
| ANSSI PQC FAQ ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)) | French guidance with distinct regulated product/qualification contexts ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)) | From 2027 / after 2030 ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)) | Aims to introduce PQC requirements for products entering qualification from 2027 ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)). Buying products without PQC after 2030 is described as unreasonable, not a universal legal ban ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)). Evaluate the applicable regulated scope separately ([ANSSI: Post-Quantum Cryptography FAQ](https://cyber.gouv.fr/enjeux-technologiques/cryptographie-post-quantique/faq-pqc/)). |
| FIPS 203, 204, 205 ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | Final NIST algorithm standards ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | August 13, 2024 ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | Publication of ML-KEM, ML-DSA and SLH-DSA standards, respectively ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Publication is not an automatic rollout deadline or proof that a product implementation is validated ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| NIST SP 800-227 ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)) | Final recommendations for KEMs ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)) | September 2025 ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)) | Guidance for secure KEM implementation and use, including authentication, validation, key handling and deployment considerations ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). It is not a replacement name for FIPS 203 ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf)). |
| NIS2, Directive (EU) 2022/2555 ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)) | Directive implemented through national measures for covered essential/important entities ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)) | October 17 and 18, 2024 ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)) | National transposition measures to be adopted and published by October 17; measures applied from October 18 ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)). Article 21(2)(h) addresses policies/procedures for cryptography and, where appropriate, encryption ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)). Neither date is a PQC migration deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng)). |
| DORA, Regulation (EU) 2022/2554 ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)) | Financial-sector digital operational resilience regulation ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)) | January 17, 2025 ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)) | Application date for the regulation, not a universal PQC cutover date ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)). Focus includes ICT risk, resilience, incident management and third-party risk ([EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng)). |
| GDPR, Regulation (EU) 2016/679 ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)) | Personal-data protection regulation ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)) | May 25, 2018 ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)) | Application date; Article 32 requires risk-appropriate security considering the state of the art, including encryption as appropriate ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)). It does not name ML-KEM or a fixed universal PQC deadline ([EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)). |
| PCI DSS v4.x / v4.0.1 ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)) | Payment-card industry security standard; v4.0.1 limited revision released June 2024 ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)) | March 31, 2025 ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)) | The future-dated v4.x requirements became effective ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)). This is not a deadline to replace all payment cryptography with PQC ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)). |
| NIST CSF 2.0 ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)) | Cybersecurity risk/outcome framework ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)) | February 26, 2024 ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)) | Publication date for the framework, including Govern alongside Identify, Protect, Detect, Respond and Recover ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Not an algorithm certification or a PQC migration deadline ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). |
| ETSI TR 104 016 V1.1.1 ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)) | Technical Report: A Repeatable Framework for Quantum-Safe Migrations ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)) | October 2024 ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)) | Repeatable migration process and pure, parallel and backwards-compatible approaches ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Technical framework, not binding EU legislation ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). |
| NIST SP 800-61 Revision 3 ([NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)) | Final incident-response recommendations; CSF 2.0 Community Profile ([NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)) | April 3, 2025 ([NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)) | Supersedes Revision 2 and integrates incident response throughout cybersecurity risk management ([NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)). This date is a publication milestone, not a PQC mandate ([NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final)). |

## Framework and Document-Type Revision Table

Use this table to identify what a document can actually demonstrate. A claim of compliance with one type of document should not be silently promoted into assurance belonging to another type.

| Type | Example | Exam distinction |
|---|---|---|
| Algorithm standard ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | FIPS 203 / 204 / 205 ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | Specifies algorithms ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Does not by itself prove that a deployed product, protocol or estate is secure ([NIST: First Three Final PQC Standards](https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| Algorithm implementation validation ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | NIST CAVP ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | Tests algorithm implementations ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Distinguish production validation from demo testing and vendor self-claims ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| Cryptographic module validation ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | CMVP / FIPS 140-3 ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | Assesses a cryptographic module, not an organization-wide PQC migration programme ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| Risk framework ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)) | NIST CSF 2.0 ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)) | Organizes outcomes and governance ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). Profiles describe current and target outcomes; Tiers describe governance rigor ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). |
| ISMS requirements standard ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | ISO/IEC 27001:2022 ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)) | An organization can obtain certification for a defined ISMS scope ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). This is not an ML-KEM implementation certificate ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| Security control guidance ([ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)) | ISO/IEC 27002:2022 ([ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)) | Provides controls and implementation guidance supporting an ISMS ([ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)). Distinct from certification to 27001 ([ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)). |
| Architecture guidance ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)) | NIST SP 800-207 ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)) | Zero trust: network location or ownership alone does not establish implicit trust ([NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)). |
| Migration technical report ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)) | ETSI TR 104 016 ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)) | Provides a repeatable process and migration approaches ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). Not equivalent to an EU directive or regulation ([ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)). |
| Protocol specification ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)) | RFC 8446 / 9370 / 8784 ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)) | Defines protocol behavior; deployment security also depends on selected algorithms, profiles, authentication and enforcement ([RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). |
| Government policy/profile ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)) | CNSSP 15 / CNSA 2.0 ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)) | Specific NSS context; read current controlling policy and profile rather than treating a public summary as the full schedule ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). |
| Directive versus regulation ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng); [EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng); [EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)) | NIS2 versus DORA / GDPR ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng); [EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng); [EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)) | NIS2 specifies national transposition; DORA and GDPR are regulations with their own scopes and application dates ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng); [EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng); [EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)). None of those application dates is itself a universal PQC deadline ([EU Directive 2022/2555: NIS2](https://eur-lex.europa.eu/eli/dir/2022/2555/oj/eng); [EU Regulation 2022/2554: DORA](https://eur-lex.europa.eu/eli/reg/2022/2554/oj/eng); [EU Regulation 2016/679: GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)). |
| Industry security standard ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)) | PCI DSS ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)) | Do not confuse the v4.x future-dated requirements becoming effective with a PQC-specific cutover ([PCI SSC: PCI DSS v4.x Future-Dated Requirements](https://blog.pcisecuritystandards.org/now-is-the-time-for-organizations-to-adopt-the-future-dated-requirements-of-pci-dss-v4-x)). |

## Additional Acronyms and Technical Terms

Use these definitions when reviewing the new modules. Several exam traps rely on confusing two terms that address different layers or security properties.

| Term | Meaning and distinction |
|---|---|
| AEAD / AAD | Authenticated Encryption with Associated Data / Additional Authenticated Data ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf); [RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). AAD is authenticated but not encrypted by the AEAD operation ([NIST SP 800-38D: GCM and GMAC](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf); [RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180)). |
| KDF / HKDF | Key Derivation Function / HMAC-based Key Derivation Function ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180); [RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). Derivation and context binding are distinct from bulk payload encryption ([RFC 9180: Hybrid Public Key Encryption](https://www.rfc-editor.org/rfc/rfc9180); [RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446)). |
| KEX | Key exchange, including SSH key-agreement mechanisms ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). It is distinct from host-key or user-signature authentication ([OpenSSH: Post-Quantum Cryptography](https://www.openssh.com/pq.html)). |
| PPK | Post-quantum Preshared Key in RFC 8784 ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). It is mixed into specified IKEv2 key derivation and is not the ordinary authentication PSK ([RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). |
| SA | Security Association ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). IKE and Child SAs have different roles and key-derivation stages; protection of one does not justify an unrestricted claim about all initial traffic ([RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370); [RFC 8784: Post-Quantum Preshared Keys in IKEv2](https://www.rfc-editor.org/rfc/rfc8784)). |
| DEK / KEK | Data Encryption Key / Key Encryption Key ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). The DEK encrypts data; the KEK protects the DEK ([OWASP: Cryptographic Storage Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html)). |
| JWT / JWS / JWE | JSON Web Token / JSON Web Signature / JSON Web Encryption ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). Signing claims does not by itself encrypt them, and nested operations require the relevant validations ([RFC 8725: JWT Best Current Practices](https://www.rfc-editor.org/rfc/rfc8725)). |
| PKI / CA | Public Key Infrastructure / Certificate Authority ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). Assess the accepted certification path, constraints and trust-anchor policy, not just the leaf public-key algorithm ([RFC 5280: X.509 Certification Path Validation](https://www.rfc-editor.org/rfc/rfc5280)). |
| HVA / NSS | High-Value Asset / National Security System ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). EO 14412 Section 4(b) addresses HVAs and high-impact systems excluding NSS ([White House: Executive Order 14412, 22 June 2026](https://www.whitehouse.gov/presidential-actions/2026/06/securing-the-nation-against-advanced-cryptographic-attacks/)). |
| CNSA | Commercial National Security Algorithm ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). CNSA 2.0 concerns the NSS algorithm-policy context, not a universal organizational risk framework ([NSA: Post-Quantum Cryptography, A Digital Armor (1 October 2026)](https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/)). |
| ISMS | Information Security Management System ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)). ISO/IEC 27001 specifies requirements, while ISO/IEC 27002 provides supporting control guidance ([ISO/IEC 27001:2022: ISMS Requirements](https://www.iso.org/standard/27001); [ISO/IEC 27002:2022: Information Security Controls](https://www.iso.org/standard/75652.html)). |
| CSF | Cybersecurity Framework ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). CSF 2.0 organizes Govern, Identify, Protect, Detect, Respond and Recover outcomes ([NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)). |
| CAVP / CMVP | Cryptographic Algorithm Validation Program / Cryptographic Module Validation Program ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). Algorithm implementation validation and module validation are different assurance scopes ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)). |
| CBOM | Cryptography Bill of Materials ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Inventory metadata and dependencies do not constitute proof that a particular algorithm is negotiated or enforced at runtime ([NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/); [UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). |
| OT / ICS | Operational Technology / Industrial Control Systems ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). Long replacement cycles, safety, constrained devices and update trust can dominate migration planning ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines)). |

## Enterprise Scenario Decision Checklist

Use this as a reasoning aid after attempting the scenario modules. It is an author-created synthesis of migration and risk-management guidance, not a mandatory universal implementation order.

- **Define the decision**: Identify the business service, protection objective, data lifetime, owner, threat and current project phase ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).
- **Check immediate harm**: Do not defer containment of a current compromise merely because a future PQC rollout is planned ([NIST SP 800-61 Revision 3: Incident Response](https://csrc.nist.gov/pubs/sp/800/61/r3/final); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).
- **Map the real dependency path**: Include clients, proxies, libraries, certificate chains, key wrapping, update trust, suppliers and recovery paths, not just the public endpoint ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).
- **Prioritize by risk and lead time**: Long-lived confidential data, long-lived trust anchors, high-impact services and hard-to-change infrastructure can justify early action even when easier conversions exist ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [ETSI TR 104 016: Migration Framework](https://www.etsi.org/deliver/etsi_tr/104000_104099/104016/01.01.01_60/tr_104016v010101p.pdf)).
- **Separate security properties**: Key establishment, encryption, authentication and authorization are different controls; improving one does not automatically establish the others ([NIST SP 800-227: Recommendations for KEMs](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-227.pdf); [RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [NIST SP 800-207: Zero Trust Architecture](https://csrc.nist.gov/pubs/sp/800/207/final)).
- **Prove behavior**: Distinguish advertised support, deployed configuration, observed negotiation and enforced policy; include negative and fallback tests within approved scope ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [RFC 8446: TLS 1.3](https://www.rfc-editor.org/rfc/rfc8446); [RFC 9370: Multiple Key Exchanges in IKEv2](https://www.rfc-editor.org/rfc/rfc9370)).
- **Preserve operations deliberately**: Pilot representative paths, measure tail performance, plan approved rollback, test restore and record bounded residual-risk exceptions ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST Cybersecurity Framework 2.0](https://nvlpubs.nist.gov/nistpubs/CSWP/NIST.CSWP.29.pdf)).
- **Report the denominator**: State which assets and flows were verified, which failed and which remain unknown; an unobserved asset is not automatically safe ([UK NCSC: PQC Migration Timelines](https://www.ncsc.gov.uk/guidance/pqc-migration-timelines); [NIST NCCoE: PQC Migration FAQ](https://pages.nist.gov/nccoe-migration-post-quantum-cryptography/FAQ/)).

## Using Domain-Based Study Sessions

Choose the number of questions you want from each primary domain, optionally filtering by subtopic, difficulty or tags. Review wrong answers and correct guesses using the stable question IDs, then select a new set without changing or duplicating the underlying records.

- **Focused learning**: Study one subtopic, then select unseen questions from its parent domain.
- **Technical practice**: Filter for `hands_on`, `protocol_analysis`, `troubleshooting` or `circuit_analysis` across relevant domains.
- **Business scenarios**: Filter for `business_scenario` without moving those questions out of their knowledge domains.
- **Date and policy revision**: Filter the Standards domain for `date_recall` or `policy_interpretation`, preserving each question's stated source snapshot.
- **Scoring**: Divide correct responses by attempted questions for the selected session or domain; the study-domain proportions are not official exam weights.
