# PQC Questions

This English study bank contains **600 practice questions**, organized by eight learning domains and their subtopics. It preserves the 526 source question records and adds 74 questions, Q527–Q600. Existing question texts, option orders and permanent IDs are retained.

Q527–Q577 expand Bloch-sphere geometry, single- and multi-qubit gates, circuit identities, measurement, no-cloning and quantum error correction. Q578–Q579 expand Mosca-style timing analysis, Q580 addresses interpretation of QKD errors, and Q581–Q600 expand standards, sector applicability, cloud responsibilities and compliance evidence.

Use `pqc-answers.md` for the corresponding correct answers, explanations and learning links. This is independent practice material, not an official or reconstructed examination bank. There are no fixed mock-exam assignments.

**Revision scope — October 24, 2026:** Q001–Q526 are retained from the supplied files and were not comprehensively fact-audited again during this merge. The new questions are original practice scenarios and explanations based on the discussed topics; no copyright-clearance guarantee is implied. Time-sensitive original questions retain their stated historical snapshots.

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

What is true about the number of basis states for n qubits?

- **A.** There are n basis states, and they are all read out together
- **B.** There are 2n states, each providing an independent key
- **C.** There are always two basis states, regardless of n
- **D.** There are 2^n basis states, but a measurement does not read them all

### Q018

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Applied
- **Tags:** conceptual

What is a principal use of the Bloch sphere?

- **A.** Fully representing all correlations in a multi-qubit system using one local sphere
- **B.** Showing all PKI dependencies
- **C.** Proving the strength of ML-KEM
- **D.** Representing the state of a single qubit

### Q106

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Foundational
- **Tags:** conceptual

What does the amplitude of a basis state represent?

- **A.** The probability itself for each state
- **B.** A number whose squared magnitude determines the measurement probability
- **C.** The length of time the qubit remains intact
- **D.** The number of bits that can be read from the qubit

### Q190

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between |+⟩ and |−⟩?

- **A.** They have different numbers of qubits
- **B.** They have a different relative phase between the 0 and 1 components
- **C.** They have different probabilities in a direct Z-basis measurement
- **D.** One is classical and the other is quantum

### Q205

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Advanced
- **Tags:** conceptual

What do different global phases of the same quantum state have in common?

- **A.** They encode an additional bit that can be read
- **B.** They necessarily turn a pure state into a mixed state
- **C.** They always produce different Z probabilities
- **D.** They are not physically distinguishable through measurements

### Q245

- **Domain:** QF
- **Subtopic:** qubits-and-states
- **Subtopic name:** Qubits, States and Superposition
- **Difficulty:** Foundational
- **Tags:** conceptual

Which statement about superposition is precise?

- **A.** The ability to read all computational solutions in a single measurement
- **B.** The storage of two classical bits that can be read together
- **C.** A state that is a linear combination of basis states
- **D.** Classical mixing only, with no significance to phase

### Q527

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

In the standard Bloch-sphere representation, which pair of states occupies the north and south poles?

- **A.** \(\vert+\rangle\) and \(\vert-\rangle\)
- **B.** \(\vert0\rangle\) and \(\vert1\rangle\)
- **C.** \(\vert+i\rangle\) and \(\vert-i\rangle\)
- **D.** The maximally mixed state and the identity operator

### Q528

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

A learner says that a qubit is in a superposition of the computational basis states only when its Bloch vector lies on the equator. Which correction is accurate?

- **A.** Superposition is possible only at the poles
- **B.** Every superposition must have real amplitudes
- **C.** Points away from the equator represent classical bits
- **D.** Pure states away from the poles can also be superpositions; the equator specifically gives equal computational-basis probabilities

### Q529

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

Where are \(\vert+\rangle\) and \(\vert-\rangle\) located on the conventional Bloch sphere?

- **A.** On the positive and negative x-axis, respectively
- **B.** On the positive and negative z-axis, respectively
- **C.** At the center and the north pole, respectively
- **D.** At the same point because their computational-basis probabilities are equal

### Q530

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

The state \(\vert+i\rangle=(\vert0\rangle+i\vert1\rangle)/\sqrt{2}\) points along which conventional Bloch-sphere direction?

- **A.** Positive z
- **B.** Negative x
- **C.** Positive y
- **D.** Negative z

### Q531

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

Consider the pure-state parameterization
\[
\vert\psi\rangle=\cos(\theta/2)\vert0\rangle+e^{i\phi}\sin(\theta/2)\vert1\rangle.
\]
What do \(\theta\) and \(\phi\) describe?

- **A.** Two independently measurable classical bits stored in the qubit
- **B.** The polar angle and the relative-phase-related azimuthal angle
- **C.** The number of qubits and the circuit depth
- **D.** The physical temperature and the error-correction rate

### Q532

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** calculation

For the parameterization in Q531, what is the probability of outcome 1 in a computational-basis measurement?

- **A.** \(\sin^2(\theta/2)\)
- **B.** \(\sin(\theta/2)\)
- **C.** \(\phi/(2\pi)\)
- **D.** \(\cos^2(\theta/2)\)

### Q533

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

Two normalized state vectors differ only by multiplication by \(e^{i\gamma}\). How are they represented on the Bloch sphere?

- **A.** At opposite poles
- **B.** At different longitudes separated by \(\gamma\)
- **C.** With different Bloch-vector lengths
- **D.** At the same point, because the difference is a global phase

### Q534

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Foundational
- **Tags:** conceptual

What single-qubit state is represented by the center of the Bloch ball?

- **A.** The pure state \(\vert0\rangle\)
- **B.** The pure state \(\vert+\rangle\)
- **C.** The maximally mixed state \(I/2\)
- **D.** An invalid state with zero measurement probability

### Q535

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Advanced
- **Tags:** conceptual

Two different two-qubit systems produce identical local Bloch vectors for each individual qubit. What can be concluded?

- **A.** The local vectors alone need not reveal the systems' different joint correlations
- **B.** The complete two-qubit states must be identical
- **C.** Neither system can be entangled
- **D.** The qubits must have identical physical implementations

### Q536

- **Domain:** QF
- **Subtopic:** bloch-sphere
- **Subtopic name:** Bloch Sphere and State Geometry
- **Difficulty:** Applied
- **Tags:** conceptual

What do antipodal points on the surface of the Bloch sphere represent?

- **A.** Two vectors differing only by a global phase
- **B.** Orthogonal pure single-qubit states
- **C.** Two copies of the maximally mixed state
- **D.** States that cannot be distinguished in any measurement basis

### Q012

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Using the notation ∣A,B⟩, apply CNOT with A as the control to ∣10⟩. What is the output?

- **A.** ∣11⟩
- **B.** ∣01⟩
- **C.** ∣00⟩
- **D.** ∣10⟩

### Q039

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Starting with ∣00⟩, apply H to qubit A and then CNOT from A to B. What is expected when both are measured in Z?

- **A.** 01 or 10 with equal probability
- **B.** 00 or 11 with equal probability
- **C.** All four outcomes with equal probability
- **D.** 00 only

### Q094

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

What does the X gate do to the basis states ∣0⟩ and ∣1⟩?

- **A.** It resets both to state 0
- **B.** It always copies them to a new qubit
- **C.** It measures them
- **D.** It swaps them

### Q146

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

How can one measure in the X basis when the measurement operation is in Z?

- **A.** Apply CNOT with an unrelated qubit
- **B.** Apply H immediately before measuring in Z
- **C.** Apply only X before measuring in Z
- **D.** Change only the variable name from Z to X

### Q161

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

Which gate transforms |0⟩ into the state |+⟩?

- **A.** Pauli-Z alone
- **B.** Hadamard, H
- **C.** Pauli-X alone
- **D.** Measurement in the Z basis

### Q192

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual, circuit_analysis

What happens if only CNOT is applied to |00⟩, without H?

- **A.** The result is |11⟩
- **B.** The result is always a Bell state
- **C.** The result is |01⟩
- **D.** The state remains |00⟩

### Q297

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

A circuit starts in ∣0⟩ and applies H, then H. What is the result of a Z measurement without noise?

- **A.** 0 with certainty
- **B.** A result that cannot be described classically
- **C.** 0 and 1 with equal probability
- **D.** 1 with certainty

### Q537

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

Ignoring an overall global phase, what geometric transformation does the Pauli-X gate implement?

- **A.** A 90-degree rotation around the z-axis
- **B.** A projection onto the x-axis
- **C.** A 180-degree rotation around the x-axis
- **D.** A contraction of the Bloch vector toward the center

### Q538

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Which pair correctly describes the action of the conventional Pauli-Y matrix?

- **A.** \(Y\vert0\rangle=\vert0\rangle\), \(Y\vert1\rangle=-\vert1\rangle\)
- **B.** \(Y\vert0\rangle=\vert+\rangle\), \(Y\vert1\rangle=\vert-\rangle\)
- **C.** \(Y\vert0\rangle=\vert1\rangle\), \(Y\vert1\rangle=\vert0\rangle\), with no phase factors
- **D.** \(Y\vert0\rangle=i\vert1\rangle\), \(Y\vert1\rangle=-i\vert0\rangle\)

### Q539

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

What is the result of applying Z to \(\vert+\rangle\)?

- **A.** \(\vert-\rangle\)
- **B.** \(\vert0\rangle\)
- **C.** \(\vert1\rangle\)
- **D.** The maximally mixed state

### Q540

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

A qubit is prepared in \(\vert1\rangle\), and Z is applied. Which statement is precise?

- **A.** The qubit changes to \(\vert0\rangle\)
- **B.** Its probability of outcome 1 changes to 50%
- **C.** The vector becomes \(-\vert1\rangle\), representing the same physical state when considered on its own
- **D.** The gate performs a measurement and records the value 1

### Q541

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

Which state results from applying H to \(\vert1\rangle\)?

- **A.** \(\vert+\rangle\)
- **B.** \(\vert-\rangle\)
- **C.** \(\vert+i\rangle\)
- **D.** \(\vert0\rangle\)

### Q542

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

A qubit is already in \(\vert+\rangle\). What does applying H produce?

- **A.** Another equal-probability superposition in the computational basis
- **B.** \(\vert1\rangle\)
- **C.** A random classical bit
- **D.** \(\vert0\rangle\)

### Q543

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

An ideal circuit applies H twice to an arbitrary input state \(\vert\psi\rangle\), with no intervening operation. What is the output?

- **A.** The original state \(\vert\psi\rangle\)
- **B.** Always \(\vert0\rangle\)
- **C.** Always \(\vert+\rangle\)
- **D.** The original state only if it was a computational-basis state

### Q544

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Which identity explains how Hadamard gates can convert a phase flip into a computational-basis bit flip?

- **A.** \(HZH=Z\)
- **B.** \(HZH=H\)
- **C.** \(HZH=X\)
- **D.** \(HZH=I\)

### Q545

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

What is the result of applying S to \(\vert+\rangle\)?

- **A.** \(\vert-\rangle\)
- **B.** \(\vert+i\rangle\)
- **C.** \(\vert1\rangle\)
- **D.** \(\vert0\rangle\)

### Q546

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

What relative phase does the standard T gate add to the \(\vert1\rangle\) component, leaving the \(\vert0\rangle\) component unchanged?

- **A.** \(\pi\)
- **B.** \(\pi/2\)
- **C.** \(2\pi\)
- **D.** \(\pi/4\)

### Q547

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

Which standard gate is obtained by applying T twice?

- **A.** S
- **B.** H
- **C.** X
- **D.** \(T^\dagger\)

### Q548

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

Which standard gate is obtained by applying S twice?

- **A.** H
- **B.** Z
- **C.** X
- **D.** I

### Q549

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

A circuit applies S and must then undo that operation exactly. Which gate should follow it?

- **A.** H
- **B.** T
- **C.** \(S^\dagger\)
- **D.** Z

### Q550

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

Which statement correctly describes \(T^\dagger\)?

- **A.** It measures in the T basis
- **B.** It is identical to T because every quantum gate is self-inverse
- **C.** It resets the phase to zero for every input
- **D.** It is the inverse of T and adds the opposite relative phase

### Q551

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** hands_on, circuit_analysis

How are the standard phase gate \(P(\lambda)\) and \(R_z(\lambda)\) related?

- **A.** They differ only by an overall global phase
- **B.** One performs a measurement while the other is unitary
- **C.** They rotate about different Bloch-sphere axes
- **D.** They are equivalent only when the input is \(\vert0\rangle\)

### Q552

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Using \(R_x(\theta)=e^{-i\theta X/2}\), which expression is correct?

- **A.** \(R_x(\pi)=I\)
- **B.** \(R_x(\pi)=H\)
- **C.** \(R_x(\pi)=-iX\)
- **D.** \(R_x(\pi)=Z\)

### Q553

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Using the conventional rotation definition, what is \(R_y(\pi/2)\vert0\rangle\)?

- **A.** \(\vert1\rangle\)
- **B.** \(\vert+\rangle\)
- **C.** \(\vert-\rangle\)
- **D.** \(\vert+i\rangle\)

### Q554

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

A qubit undergoes an \(R_z\) rotation. Which statement about measurement probabilities is generally correct?

- **A.** Probabilities remain unchanged in every possible measurement basis
- **B.** The probability of outcome 1 always increases
- **C.** The state becomes maximally mixed
- **D.** Computational-basis probabilities remain unchanged, although probabilities in other bases can change

### Q555

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

What distinguishes the SX gate from the X gate?

- **A.** Applying SX twice gives X
- **B.** SX acts on two qubits while X acts on one
- **C.** SX is a measurement operation
- **D.** Applying SX twice always gives H

### Q556

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the ideal mathematical action of the identity gate I on a qubit?

- **A.** It prepares \(\vert0\rangle\), regardless of the input
- **B.** It leaves the input state unchanged
- **C.** It removes any entanglement with other qubits
- **D.** It converts a pure state into the maximally mixed state

### Q557

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

A CNOT control qubit is in superposition. How should the gate's conditional behavior be understood?

- **A.** The gate first measures the control and stores a classical decision
- **B.** The gate randomly chooses whether to flip the target
- **C.** The gate acts coherently on the superposed branches according to linearity
- **D.** CNOT is undefined unless the control is definitely 0 or 1

### Q558

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Let the first qubit be the CNOT control. What happens when CNOT is applied to \(\vert+\rangle\vert+\rangle\)?

- **A.** It always produces the Bell state \((\vert00\rangle+\vert11\rangle)/\sqrt{2}\)
- **B.** It produces \(\vert00\rangle\)
- **C.** It measures both qubits
- **D.** The state remains \(\vert+\rangle\vert+\rangle\), without creating entanglement

### Q559

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Two consecutive identical CNOT gates act on the same control and target, with nothing between them. What is their combined action?

- **A.** Identity on the two-qubit state
- **B.** SWAP
- **C.** CZ
- **D.** Measurement of the target

### Q560

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

Using the ordered computational basis \(\vert00\rangle,\vert01\rangle,\vert10\rangle,\vert11\rangle\), which basis component receives a minus sign under CZ?

- **A.** Only \(\vert00\rangle\)
- **B.** Only \(\vert10\rangle\)
- **C.** Only \(\vert11\rangle\)
- **D.** Both \(\vert01\rangle\) and \(\vert10\rangle\)

### Q561

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** hands_on, circuit_analysis

CZ is applied to \(\vert+\rangle\vert+\rangle\). Which description is correct?

- **A.** The output remains a product state because its computational-basis probabilities are unchanged
- **B.** The output is entangled even though all four computational-basis outcomes still have probability 25%
- **C.** Only the outcome 11 remains possible
- **D.** The output is a classical mixture of four basis states

### Q562

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Which chronological sequence implements CNOT with control A and target B?

- **A.** H on A, then CZ on A and B, then H on A
- **B.** Z on B, then SWAP, then Z on B
- **C.** H on both qubits, followed by SWAP
- **D.** H on B, then CZ on A and B, then H on B

### Q563

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Which statement correctly describes a standard SWAP implementation?

- **A.** Three CNOT gates with alternating control directions can exchange the quantum states without requiring the physical devices to exchange positions
- **B.** SWAP creates an independent copy of each input state
- **C.** SWAP first measures both qubits and then prepares replacement states
- **D.** A single CNOT exchanges arbitrary states

### Q564

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** hands_on, circuit_analysis

Use the order \(\vert c_1,c_2,t\rangle\) for a Toffoli gate's two controls and target. What is its action on \(\vert110\rangle\)?

- **A.** \(\vert000\rangle\)
- **B.** \(\vert111\rangle\)
- **C.** \(\vert101\rangle\)
- **D.** \(\vert011\rangle\)

### Q565

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

Can a Toffoli gate operate when its controls are in superposition?

- **A.** No; both controls must first be measured
- **B.** No; Toffoli is only a classical operation
- **C.** Yes; its unitary action extends coherently to superpositions
- **D.** Yes, but only by discarding the relative phases

### Q566

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** conceptual

Which qualification is needed when Toffoli is called a universal gate?

- **A.** Toffoli alone can approximate every single-qubit rotation
- **B.** Universality means that Toffoli can copy every unknown quantum state
- **C.** Toffoli alone prepares arbitrary superpositions from computational-basis inputs
- **D.** Its classical reversible universality does not mean that Toffoli alone is universal for quantum computation

### Q567

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Advanced
- **Tags:** conceptual

Which finite gate set can approximate arbitrary quantum circuits to suitable accuracy?

- **A.** H, T and CNOT
- **B.** X and SWAP only
- **C.** Z and CZ only
- **D.** CNOT and Toffoli only, with computational-basis initialization

### Q568

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

A controlled-U gate has one control and a target register. What is its standard action?

- **A.** It applies U regardless of the control
- **B.** It applies U on the control-1 branch and identity on the control-0 branch, coherently
- **C.** It applies U to the control rather than to the target
- **D.** It measures the target to decide whether U is needed

### Q569

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Foundational
- **Tags:** conceptual

For an ideal unitary gate U, which operation reverses its action?

- **A.** A computational-basis measurement
- **B.** Applying U again in every case
- **C.** Applying its conjugate transpose \(U^\dagger\)
- **D.** Resetting the qubit

### Q570

- **Domain:** QF
- **Subtopic:** gates-and-circuits
- **Subtopic name:** Gates and Quantum Circuits
- **Difficulty:** Applied
- **Tags:** conceptual

Why should measurement and reset not be treated as ordinary reversible unitary gates?

- **A.** They can operate only on classical registers
- **B.** They always preserve the original state vector
- **C.** Their inverses are always the same operation
- **D.** They are generally non-unitary operations and do not provide a unitary inverse restoring an arbitrary unknown input

### Q005

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between the state ∣0⟩ and ∣+⟩ in an ideal measurement in the Z basis?

- **A.** Both always produce 0
- **B.** The first produces 0 with certainty, while the second produces 0 or 1 with equal probability
- **C.** The first is random and the second is deterministic
- **D.** Both always produce 1

### Q006

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Alice prepares ∣0⟩ and Bob measures in the Z basis, with no noise. What is the result?

- **A.** 1 with certainty
- **B.** Measurement cannot be performed
- **C.** 0 with certainty
- **D.** 0 or 1 with equal probability

### Q015

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** scenario, hands_on

Why do 498 outcomes of 0 and 502 outcomes of 1 not prove that there is a fault in an ideal H circuit?

- **A.** An ideal result must be exactly 500 of each value
- **B.** H always requires a ratio of 498 to 502
- **C.** Finite counts vary statistically around the probability
- **D.** Every deviation indicates Eve

### Q024

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** calculation

A qubit state has amplitudes of 0.6 for 0 and 0.8 for 1. What is the probability of measuring 1?

- **A.** 36%
- **B.** 80%
- **C.** 50%
- **D.** 64%

### Q096

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Foundational
- **Tags:** conceptual

What is obtained from a single measurement of a qubit in the Z basis?

- **A.** Always the state with the largest amplitude
- **B.** One classical result: 0 or 1
- **C.** Both results together as a pair of bits
- **D.** All the state's amplitudes

### Q104

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Alice prepares |+⟩ and Bob measures in the X basis, with no noise. What is expected?

- **A.** Both outcomes simultaneously
- **B.** Both X outcomes with equal probability
- **C.** The outcome corresponding to |−⟩ with certainty
- **D.** The outcome corresponding to |+⟩ with certainty

### Q129

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

What happens if a qubit is measured in Z and the result is 1, then immediately measured again in Z with no change or noise?

- **A.** The result is 1 again
- **B.** The result is 0 with certainty
- **C.** All the original amplitudes are obtained
- **D.** The result is always a 50% chance of each outcome

### Q170

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** conceptual

Why are repeated experiments needed to estimate a measurement distribution?

- **A.** A single measurement always recovers only half the key
- **B.** Each repetition duplicates an unknown state without changing it
- **C.** A quantum computer cannot produce a bit
- **D.** Each measurement produces one sample from the distribution

### Q183

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Alice prepares |0⟩ and Bob measures in the X basis, with no noise. What is expected?

- **A.** The two X outcomes are equally likely
- **B.** One X outcome with certainty
- **C.** A measurement that recovers all of Alice's amplitudes
- **D.** An outcome that reveals Alice's basis with certainty

### Q228

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

A circuit starts in ∣0⟩, applies H, and then measures in Z. What is expected over many ideal runs?

- **A.** Both outcomes in every run
- **B.** Always 1
- **C.** About half 0 and half 1
- **D.** Always 0

### Q571

- **Domain:** QF
- **Subtopic:** measurement-and-probability
- **Subtopic name:** Measurement, Probability and Sampling
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

An ideal projective Z-basis measurement is performed on a qubit already in \(\vert0\rangle\). What happens?

- **A.** The measurement must change it to \(\vert+\rangle\)
- **B.** The result is 0 with certainty, and the state remains \(\vert0\rangle\)
- **C.** The result is random because every measurement necessarily changes its input
- **D.** The qubit becomes maximally mixed

### Q048

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

Two qubits start in ∣00⟩ and each receive H, with no gate between them. What is true?

- **A.** All four Z outcomes are equally likely in expectation, and the state is not entangled
- **B.** Always 00
- **C.** Only 01 and 10
- **D.** Only 00 and 11, and therefore necessarily entangled

### Q181

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Advanced
- **Tags:** conceptual

Why are only 00/11 outcomes in Z-basis measurements not complete proof of entanglement?

- **A.** It is impossible to prepare a Bell state
- **B.** A classical mixture can also produce the same Z-basis statistics
- **C.** Z measurements are not valid
- **D.** Every correlation is entanglement by definition

### Q185

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** conceptual

Why does no-cloning not mean that it is impossible to prepare the state |0⟩ again?

- **A.** Every measured state can always be copied back to its original state
- **B.** The theorem applies only to classical computers
- **C.** The prohibition is against universal cloning of an arbitrary unknown state
- **D.** The state |0⟩ is not a valid quantum state

### Q214

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Foundational
- **Tags:** conceptual

What is entanglement in a pure state of two qubits?

- **A.** Any pair of qubits measured at the same time
- **B.** A joint state that cannot be written as the product of states of two separate qubits
- **C.** Two qubits stored in the same computer
- **D.** Two qubits with only the same classical value

### Q260

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Foundational
- **Tags:** conceptual

What does the No-cloning theorem prohibit?

- **A.** Measuring two qubits in the same basis
- **B.** Perfect universal cloning of an arbitrary unknown quantum state
- **C.** Copying a file containing classical bits
- **D.** Repeatedly preparing the same known state

### Q572

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** hands_on, circuit_analysis

A proposed copying circuit applies CNOT to an arbitrary input qubit and a blank target initialized to \(\vert0\rangle\). What happens for the input \(\vert+\rangle\)?

- **A.** The circuit produces an entangled Bell state rather than two independent copies of \(\vert+\rangle\)
- **B.** The circuit produces \(\vert+\rangle\vert+\rangle\)
- **C.** The input is automatically measured and then copied
- **D.** The circuit fails to be unitary

### Q573

- **Domain:** QF
- **Subtopic:** entanglement-and-no-cloning
- **Subtopic name:** Entanglement and No-Cloning
- **Difficulty:** Applied
- **Tags:** conceptual

Which task is consistent with the no-cloning theorem?

- **A.** Building one perfect copier that works for every unknown pure state
- **B.** Perfectly distinguishing every pair of nonorthogonal states from one copy
- **C.** Copying an arbitrary unknown superposition using CNOT and a blank target
- **D.** Copying a state promised to be one of the orthogonal computational-basis states

### Q147

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

What is an oracle in a conceptual explanation of Grover's algorithm?

- **A.** A database that contains the correct key in the clear in advance
- **B.** A source for generating photons in QKD
- **C.** An operation that marks candidates satisfying the search condition
- **D.** A certificate server that approves the search

### Q247

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about the claim that "a quantum computer speeds up every program"?

- **A.** Every search receives an exponential speedup
- **B.** Every classical operation becomes constant-time
- **C.** Converting bits to qubits is sufficient to obtain a speedup
- **D.** Speedup depends on the problem and the appropriate algorithm

### Q252

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** calculation

In an ideal search over a space of 2^128 keys, what is the order of the number of Grover queries?

- **A.** 2^64
- **B.** 128
- **C.** 2^128
- **D.** 64

### Q265

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Foundational
- **Tags:** conceptual

What generic improvement does Grover provide for unstructured search?

- **A.** Turning a hash function into an invertible function
- **B.** Solving every problem in constant time
- **C.** Factoring in classical polynomial time
- **D.** A quadratic improvement in the number of search queries

### Q501

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** calculation

What is the post-quantum effective brute-force security of AES-128 under Grover's algorithm?

- **A.** Roughly 128 bits effective security
- **B.** Roughly 64 bits effective security
- **C.** Roughly 256 bits effective security
- **D.** Roughly 96 bits effective security

### Q502

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Advanced
- **Tags:** calculation

What is the post-quantum collision resistance of SHA-256 against an idealized quantum attacker?

- **A.** Roughly 128 bits collision resistance
- **B.** Roughly 256 bits collision resistance
- **C.** Roughly 64 bits collision resistance
- **D.** Roughly 85 bits collision resistance

### Q507

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

A financial institution is evaluating the long-term risk of its legacy PKI infrastructure. How does Shor's algorithm fundamentally compromise traditional asymmetric algorithms such as RSA and elliptic-curve cryptography?

- **A.** By exponentially accelerating brute-force guessing of private keys through unstructured database searching
- **B.** By exploiting side-channel emissions during modular exponentiation on classical coprocessors
- **C.** By reducing integer factorization and discrete logarithms to polynomial time using the quantum Fourier transform
- **D.** By degrading the entropy of pseudo-random number generators through entangled qubit injection

### Q513

- **Domain:** QF
- **Subtopic:** quantum-algorithms
- **Subtopic name:** Quantum Algorithms and Computational Models
- **Difficulty:** Applied
- **Tags:** conceptual

What does a claim of quantum advantage mean for cryptography?

- **A.** Public-key algorithms such as RSA and elliptic-curve schemes have been broken
- **B.** A quantum device has performed a chosen task that is impractical for classical computers; the task itself need not be cryptographically relevant
- **C.** Every symmetric cipher has been mathematically defeated
- **D.** A global satellite QKD network is now in operation

### Q278

- **Domain:** QF
- **Subtopic:** simulation-and-noise
- **Subtopic name:** Simulation, Noise and Reproducibility
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between an ideal simulator and a run on noisy hardware?

- **A.** Hardware always returns exactly the theoretical distribution
- **B.** Every simulator proves that the hardware is resistant to attack
- **C.** Noise changes the Born rule itself
- **D.** On hardware, error effects and implementation limitations must be tested

### Q300

- **Domain:** QF
- **Subtopic:** simulation-and-noise
- **Subtopic name:** Simulation, Noise and Reproducibility
- **Difficulty:** Applied
- **Tags:** conceptual

What should be documented to reproduce a quantum circuit experiment?

- **A.** Only the name of the H gate
- **B.** Only a single histogram image
- **C.** Only the first measurement result
- **D.** The circuit, backend, number of shots, versions, and noise assumptions

### Q574

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Advanced
- **Tags:** conceptual

Why does encoding a logical qubit across multiple physical qubits not violate no-cloning?

- **A.** The theorem stops applying when more than two qubits are used
- **B.** Every physical qubit contains a complete independent copy of the logical input
- **C.** The encoding distributes quantum information across a joint state instead of creating independent copies of the unknown state
- **D.** The encoding first learns all amplitudes by measurement

### Q575

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Advanced
- **Tags:** conceptual

What is the purpose of syndrome extraction in quantum error correction?

- **A.** To obtain information about correctable errors without directly reading out the protected logical information
- **B.** To reveal the complete unknown logical state after every gate
- **C.** To replace quantum redundancy with ordinary backups of the state
- **D.** To prove that the hardware has no remaining noise

### Q576

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Applied
- **Tags:** conceptual

Which statement about quantum error correction is accurate?

- **A.** Any code corrects any number of errors
- **B.** Protection depends on the code, noise and implementation; uncorrectable errors can still occur
- **C.** Error correction makes physical gate errors exactly zero
- **D.** Once encoded, a logical qubit needs no further error monitoring

### Q577

- **Domain:** QF
- **Subtopic:** quantum-error-correction
- **Subtopic name:** Quantum Error Correction and Logical Qubits
- **Difficulty:** Advanced
- **Tags:** conceptual

Why is there no single universal conversion ratio from physical qubits to logical qubits?

- **A.** A logical qubit is always exactly one physical qubit
- **B.** All codes use exactly the same number of data and syndrome qubits
- **C.** The ratio is determined only by the algorithm's name
- **D.** The required resources depend on the error-correcting code, hardware noise and target logical reliability

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

Which group is directly vulnerable to Shor's algorithm on a capable quantum computer?

- **A.** ML-KEM, ML-DSA, SLH-DSA
- **B.** AES-256, ChaCha20, SHA-384
- **C.** RSA, DH, ECDH, ECDSA
- **D.** AES, SHA-256, HMAC

### Q014

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about AES-256 against Grover's algorithm?

- **A.** Grover recovers the key without computing AES
- **B.** AES-256 is immediately broken as soon as any quantum computer appears
- **C.** AES-256 relies on integer factorization
- **D.** There is a theoretical speedup for search, but this does not prove practical breakability

### Q132

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

The organization doubled the RSA key length. What is true about the quantum threat?

- **A.** The underlying mathematics remains vulnerable to Shor's algorithm
- **B.** RSA has become a PQC algorithm
- **C.** The need to migrate disappears regardless of the attacker's resources
- **D.** The only remaining threat is Grover's algorithm

### Q153

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

Does the absence of a CVE for an RSA system prove PQC readiness?

- **A.** Yes, if an RSA key currently meets the classical bit-strength threshold specified in policy
- **B.** Yes, as long as the product version is up to date and the vendor has not announced a specific vulnerability
- **C.** No, but replacing the hash alone is sufficient because there is no flaw in the RSA implementation
- **D.** No, a weakness against a quantum threat does not require a CVE for the product

### Q163

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A team proposes increasing AES-128 to AES-256 while leaving vulnerable ECDH in place. What still needs to be addressed?

- **A.** Only the hash algorithm, because AES-256 also fixes the weakness in ECDH
- **B.** No further action is needed if the ECDH keys are ephemeral and deleted
- **C.** Only the certificate renewal cycle, without changing the key-establishment mechanism
- **D.** The key-establishment mechanism

### Q186

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Foundational
- **Tags:** conceptual

What is a CRQC in the security context?

- **A.** A quantum processor containing more qubits than the number of bits in the public key
- **B.** Any cloud quantum service capable of successfully running a small example of Shor's algorithm
- **C.** A quantum computer with a capability relevant to breaking vulnerable cryptography
- **D.** A classical simulator that precisely computes the state of a limited number of qubits

### Q512

- **Domain:** QR
- **Subtopic:** quantum-attack-impact
- **Subtopic name:** Quantum Attack Capabilities and Cryptographic Impact
- **Difficulty:** Applied
- **Tags:** conceptual

Which statement accurately compares the impact of Shor's algorithm and Grover's algorithm on legacy cryptography?

- **A.** Shor's algorithm reduces AES-256 security to an effective 128-bit key strength
- **B.** Grover's algorithm renders RSA-4096 completely obsolete
- **C.** Shor's algorithm breaks elliptic-curve cryptography, while Grover's algorithm is why longer symmetric keys, such as AES-256 instead of AES-128, are the usual margin
- **D.** Both algorithms completely neutralize symmetric block ciphers

### Q002

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about data-retention policies and a PQC program?

- **A.** Deleting the source is sufficient even if encrypted data has already been copied by an attacker
- **B.** After migrating to PQC, any data can be kept forever without considering exposure
- **C.** Reducing unnecessary retention can reduce exposure, but does not replace protecting data that must be retained
- **D.** Every retention period should be shortened regardless of business and legal obligations

### Q046

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

All else being equal, what is the risk of a short-lived trade secret compared with a long-lived one?

- **A.** The long-lived secret is more exposed to valuable future decryption
- **B.** The duration of secrecy is unrelated to prioritization
- **C.** They always have the same priority, regardless of duration
- **D.** The short-lived secret is always more at risk

### Q070

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

A server certificate is valid for only 30 days. Does that eliminate HNDL risk for confidential information kept for 15 years?

- **A.** Yes, the certificate validity period always determines the maximum confidentiality period of the data
- **B.** Yes, certificate expiration makes the previous session key worthless to an attacker
- **C.** Yes, if the certificate was renewed every month, recordings from previous months cannot be attacked
- **D.** No, certificate lifetime and data confidentiality lifetime are different variables

### Q128

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Which asset should receive priority against HNDL, given similar exposure?

- **A.** Pricing data that is published to the public one hour later and has no other confidential value
- **B.** A short-lived server certificate that protects only content that has already been made public
- **C.** An anonymized operational log with no confidentiality requirement after the incident is closed
- **D.** Medical information that must remain confidential for decades

### Q184

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

Why should we not wait for a definitive announcement of a CRQC?

- **A.** Migration takes a long time, and information can be collected beforehand
- **B.** Because the attack date is known with certainty, there is no need to analyze scenarios
- **C.** Because every existing quantum computer can already decrypt RSA at enterprise scale
- **D.** Because a PQC standard requires replacing every symmetric algorithm before any asset discovery

### Q194

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is the error in the claim, “We will meet the regulatory deadline, so there is no HNDL risk until then”?

- **A.** The risk starts only after a certificate expires if its validity extends beyond the migration deadline
- **B.** A regulatory deadline is an accurate estimate of the day RSA will become breakable
- **C.** A compliance deadline does not eliminate the risk of early collection of information
- **D.** Any information sent before the compliance date is protected from future decryption by virtue of compliance

### Q203

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Foundational
- **Tags:** conceptual

What is harvest now, decrypt later?

- **A.** Collecting encrypted information today for decryption in the future
- **B.** Stealing a quantum key only after it has been destroyed
- **C.** Deleting information before its retention period ends
- **D.** Re-signing every document at the time it is collected

### Q213

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

The transfer of confidential data ended before a CRQC exists. What is true?

- **A.** The recording may still be at risk in the future
- **B.** Ending the connection and deleting the session protect the recording from all quantum analysis
- **C.** HNDL is relevant only to a connection that remains active when the attacker operates a CRQC
- **D.** The certificate's expiration permanently prevents use of the recorded key-establishment material

### Q246

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** conceptual

Why is ECDHE with classical forward secrecy not a complete solution to quantum HNDL?

- **A.** Because every ephemeral ECDHE key is necessarily stored by the certificate authority
- **B.** Because exchanging keys in every session makes the recording resistant to Shor
- **C.** Because forward secrecy protects only authentication, not session confidentiality
- **D.** A capable quantum attacker may solve the ECDH problem from the recorded exchange

### Q276

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

What is a risk of a long-term backup whose keys are protected by vulnerable asymmetric cryptography?

- **A.** All the risk can be estimated solely from the original certificate’s expiration date
- **B.** The backup is safe if it is offline now, even if a copy and its key envelope were collected in the past
- **C.** Future decryption through the key envelope, even if the data is encrypted symmetrically
- **D.** AES-256 eliminates the need to examine how the data key is protected in the backup

### Q290

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario

Why is information already collected by an attacker not necessarily protected by re-encryption on our side?

- **A.** Because replacing keys on the server also updates every ciphertext recorded in the past
- **B.** Because removing the old key from the inventory deletes copies kept outside the organization
- **C.** Because the issue is limited to signed files and is not relevant to recorded traffic
- **D.** The old copy remains with the attacker, protected by the old cryptography

### Q302

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A company must choose which of two systems to assess first. One carries confidential research data that must remain secret for ten years and uses classical public-key transport; the other publishes a public catalogue whose confidentiality matters for only minutes. Other known factors are similar. Which should receive priority?

- **A.** Assess the public catalogue first because its exposure makes it the more urgent cryptographic target, even though its confidentiality value is brief.
- **B.** Prioritize the research-data path: captured traffic could remain valuable throughout its ten-year confidentiality period.
- **C.** Assess both systems equally because they use the same class of public-key transport.
- **D.** Prioritize the catalogue because public-facing systems generally have more attackers.

### Q340

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A research workflow uses offline media encrypted with AES, and the data-encryption key is wrapped using classical RSA. The team argues that air-gapping removes the quantum concern. What is the strongest response?

- **A.** Replace AES with ML-KEM while keeping the existing RSA-wrapped data key.
- **B.** Recognize that offline status does not eliminate risk if the media or its RSA-wrapped keys can later be collected.
- **C.** Treat the media as protected from future collection because it is kept offline.
- **D.** Retain RSA wrapping because the AES-protected payload cannot be accessed through its key.

### Q447

- **Domain:** QR
- **Subtopic:** harvest-now-decrypt-later
- **Subtopic name:** Harvest Now, Decrypt Later
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

An organization begins migrating a long-lived confidential service to post-quantum key establishment. A threat assessment confirms that an adversary may already have recorded the service's earlier classical traffic. What can the organization accurately claim about those recordings?

- **A.** Replacing certificates makes previously captured ciphertext unusable to the attacker.
- **B.** The migration protects future exchanges but cannot retrieve an adversary's existing archive.
- **C.** Re-encrypting local copies changes the protection of traffic already captured in transit, making the adversary's retained ciphertext obsolete.
- **D.** The new deployment retrieves and protects recordings already held by the adversary.

### Q054

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

What is a quantum risk to RSA or ECDSA code-signing signatures?

- **A.** Only shortening the validity period of the signing certificate, with no ability to create accepted signatures
- **B.** Affecting only AES confidentiality, with no effect whatsoever on source authentication
- **C.** Forging signatures when the mechanism is breakable
- **D.** Exposing all signed code, even if that code is already publicly distributed

### Q136

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

What is an important distinction between HNDL and signature forgery?

- **A.** HNDL threatens only real-time authentication, while signature forgery threatens only confidentiality
- **B.** Every signature forgery first requires collecting secret ciphertext for years
- **C.** The former targets the confidentiality of recordings; the latter targets integrity and authenticity
- **D.** Both scenarios are addressed by the same change: increasing the storage AES key length

### Q166

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about long-term signature security?

- **A.** It is sufficient that the signature was valid on the day it was created, exempting all future verification from review
- **B.** Replacing the KEM used for traffic automatically updates signatures already stored in an archive
- **C.** It is necessary to consider when verification will be required and what trust evidence will be retained
- **D.** A new signature on a file by itself guarantees all facts about when it was created in the past

### Q236

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about a system that has no secrets but distributes software updates?

- **A.** There is still a risk to integrity and source authentication
- **B.** Cryptography is unnecessary because the content is public
- **C.** PQC is relevant only to medical data
- **D.** Signatures are not affected by quantum computing

### Q314

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Remote OT sensors transmit readings that are public, but forged control commands could cause dangerous changes for the next 20 years. Which cryptographic migration concern should take priority?

- **A.** Focus on command authenticity and firmware trust, given the long-lived safety consequences of forgery.
- **B.** Strengthen encryption of the readings while retaining the existing command-authentication mechanism, since remote links can expose sensor traffic.
- **C.** Defer migration because public telemetry does not require cryptographic protection.
- **D.** Prioritize confidentiality for sensor readings because the readings travel over remote links.

### Q398

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Advanced
- **Tags:** scenario

An organization has migrated its TLS key exchange to a PQ-capable profile, but its access tokens remain signed with RSA. The team argues that the tokens are safe from quantum-related forgery because they are transported over the new channel. Which assessment is correct?

- **A.** RSA token signatures are quantum resistant when the token is sent over a hybrid key exchange.
- **B.** The JWT signature is irrelevant when the API validates it over an authenticated HTTPS connection.
- **C.** The RSA token signature remains a separate classical dependency; PQ-capable TLS does not change the token algorithm.
- **D.** The PQ TLS exchange converts the JWT’s RSA signature into a PQ signature while the token is in transit.

### Q526

- **Domain:** QR
- **Subtopic:** authenticity-and-forgery
- **Subtopic name:** Authenticity, Signatures and Future Forgery
- **Difficulty:** Applied
- **Tags:** conceptual

Why can vulnerable key establishment be urgent even when a cryptanalytically relevant quantum computer does not yet exist, while a new signature forgery still depends on that capability?

- **A.** Signatures are immune to Shor's algorithm, so they never need migration
- **B.** A recorded key-establishment transcript can be stored and attacked later; forging a signature requires the attack to succeed at the time of forgery, and long-lived signing keys can still be urgent
- **C.** Harvest-now-decrypt-later applies only to AES, not to public-key establishment
- **D.** Certificates cannot carry a post-quantum public key

### Q025

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** conceptual

Why is a forecast based only on the number of physical qubits insufficient for making a decision?

- **A.** The number of physical qubits is always equivalent to the same number of logical qubits without error
- **B.** Attack capability also depends on quality, error correction, and computational resources
- **C.** Attack capability can be inferred from any small factoring demonstration without examining scale
- **D.** It is sufficient to compare the number of qubits with the length of an RSA key to determine an attack date

### Q029

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** conceptual

What is preferable when the date of a CRQC is uncertain?

- **A.** Plan scenarios and safety margins, and update assessments
- **B.** Plan everything around the latest forecast and present it as a certain baseline
- **C.** Treat a regulatory date as if it were a proven technological forecast
- **D.** Delay asset discovery until qubit measurements make it possible to determine an exact year

### Q076

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Foundational
- **Tags:** conceptual

What does X represent in the common Mosca model?

- **A.** The length of time the information needs to remain protected
- **B.** The RSA key length in bits
- **C.** The number of vendors in the organization
- **D.** The duration of the performance test run

### Q093

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

How should two assets using the same vulnerable algorithm be compared?

- **A.** By random order of discovery, to avoid assessing sensitivity and data lifetimes
- **B.** By key length alone, since it also determines the business impact of the compromise
- **C.** By impact, exposure, protection lifetime, and dependencies
- **D.** Always assign them the same priority because the algorithm name is the same for both assets

### Q134

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Foundational
- **Tags:** conceptual

What does Z represent in Mosca's model?

- **A.** The validity period of the current certificate
- **B.** The number of algorithms in the inventory
- **C.** The estimated time until a relevant quantum attack capability
- **D.** The length of an AES key

### Q239

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Foundational
- **Tags:** conceptual

What does Y represent in the Mosca model?

- **A.** ML-DSA signature size
- **B.** The duration of the transition to suitable cryptography
- **C.** The duration for which the information must remain confidential
- **D.** The retention time of a single log

### Q270

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

X is 12 years, Y is 4, and Z is 10. What does the model mean?

- **A.** There is no risk because the transition time, four years, is shorter than the threat horizon
- **B.** The need for transition starts only in six years, because 16 minus 10 equals 6
- **C.** There is a timing gap that requires early action
- **D.** The inequality proves that an attacker has already decrypted some of the collected information

### Q277

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

X is 3, Y is 8, and Z is 6. What is the key point?

- **A.** The relevant time is only the difference Y minus X, so there is no gap
- **B.** It is possible to wait three years because X is less than Z, even though the transition itself takes eight years
- **C.** Even the transition time alone exceeds the estimated threat horizon
- **D.** Y can be ignored in systems with confidentiality lifetimes shorter than the threat horizon

### Q289

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

X is 2, Y is 1, and Z is 15. What can be concluded from the model alone?

- **A.** The timing gap is smaller, but this does not prove the absence of all risk
- **B.** The system is proven safe in every scenario, so an inventory is no longer needed
- **C.** Preparation may begin only after X and Y have actually exceeded Z
- **D.** The model guarantees that the threat will arrive exactly 15 years from now, so this can be treated as certain

### Q578

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** calculation

In a Mosca-style planning exercise, information must remain confidential for 12 years, migration is expected to take 4 years, and a relevant quantum attack capability is assumed to be 10 years away. What does the model indicate?

- **A.** There is no urgency because migration takes less than 10 years
- **B.** Only the 12-year confidentiality period matters
- **C.** The combined 16-year protection-and-migration period exceeds the assumed threat timeline
- **D.** The calculation proves that a quantum computer will arrive in exactly 10 years

### Q579

- **Domain:** QR
- **Subtopic:** risk-assessment-and-timing
- **Subtopic name:** Risk Assessment, Timing and Mosca Models
- **Difficulty:** Applied
- **Tags:** conceptual

A team's estimates satisfy \(X+Y=Z\) in Mosca's model. Which planning conclusion is most defensible?

- **A.** Equality proves that the organization is safe
- **B.** The estimates provide no timing margin, so uncertainty and contingency planning remain important
- **C.** Equality means that migration is unnecessary
- **D.** The model has established an exact CRQC arrival date

### Q016

- **Domain:** QR
- **Subtopic:** exposure-and-trust-dependencies
- **Subtopic name:** Exposure and Vulnerable Trust Dependencies
- **Difficulty:** Applied
- **Tags:** scenario

A system encrypts with AES-256 but wraps the data key with RSA. What should be checked?

- **A.** Only the RSA key size, and treat every doubling of it as completing the PQC migration
- **B.** Exposure of the data key through the vulnerable wrapping mechanism
- **C.** Only AES-256, because the data key is not information that needs separate protection
- **D.** Only the validity of the certificate, because after it expires the RSA envelope cannot be decrypted

### Q229

- **Domain:** QR
- **Subtopic:** exposure-and-trust-dependencies
- **Subtopic name:** Exposure and Vulnerable Trust Dependencies
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about an isolated, air-gapped system?

- **A.** Physical isolation means the transition can be deferred until internet connectivity, without examining data lifetime and firmware
- **B.** Physical isolation changes the mathematical problem and therefore protects RSA from Shor
- **C.** Isolation makes it possible to exempt update signatures from verification as long as the software is brought in manually
- **D.** Isolation reduces certain exposures but does not make the cryptography quantum-resistant

### Q294

- **Domain:** QR
- **Subtopic:** exposure-and-trust-dependencies
- **Subtopic name:** Exposure and Vulnerable Trust Dependencies
- **Difficulty:** Applied
- **Tags:** conceptual

What is a better risk metric than counting all RSA certificates without context?

- **A.** Vulnerable uses in critical assets with known sensitivity and dependencies
- **B.** The percentage of libraries offering PQC, even if applications do not use it
- **C.** Counting all certificates as equally important without examining their use
- **D.** The number of supplier statements about future support, without linking them to critical assets

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

Why is choosing one fixed, known basis not the basic BB84 protocol?

- **A.** It automatically adds mutual authentication
- **B.** It removes the basis uncertainty on which the detection mechanism relies
- **C.** It turns every signal into an entangled state
- **D.** It doubles the number of bases

### Q078

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Foundational
- **Tags:** conceptual

Why is it permissible to publish the bases over the classical channel?

- **A.** The bases cease to be classical information
- **B.** An authenticated classical channel is always confidential
- **C.** Publishing the basis encrypts the bit
- **D.** The basis alone does not reveal the value of the retained bit

### Q149

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Foundational
- **Tags:** protocol_analysis

What does Bob do before Alice announces the bases in basic BB84?

- **A.** Announce the final key
- **B.** Copy every qubit and keep a perfect copy
- **C.** Always measure in the basis supplied in advance by Alice
- **D.** Choose a random measurement basis and measure

### Q182

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

Eve learns the measurement bases only after the signals have been measured. What is true?

- **A.** The bases themselves are the shared secret
- **B.** She can change Bob's results retroactively
- **C.** The information alone does not recover the bit values
- **D.** She immediately learns the entire final key

### Q204

- **Domain:** QKD
- **Subtopic:** bb84-and-basis-selection
- **Subtopic name:** BB84 Preparation, Bases and Measurement
- **Difficulty:** Foundational
- **Tags:** conceptual

What does Alice choose when preparing each signal in basic BB84?

- **A.** Bob's measurement result in advance
- **B.** A random bit and preparation basis
- **C.** Only a fixed RSA key
- **D.** Bob's basis after he measures

### Q038

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Advanced
- **Tags:** conceptual

Why is 50% survival in sifting not a rule for every QKD protocol?

- **A.** Every protocol always retains exactly 50%
- **B.** It follows only from the length of an AES key
- **C.** The result follows from the two bases being chosen equally and independently here
- **D.** It applies only when RSA is used

### Q044

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** protocol_analysis, hands_on

Alice chose bases Z, X, Z, X and Bob chose Z, Z, X, X. Which positions are retained in sifting?

- **A.** 1 and 4
- **B.** 3 and 4
- **C.** 1 and 2
- **D.** 2 and 3

### Q056

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** calculation

After sifting, 1,000 bits remain, and 100 are disclosed for error testing. What is the upper bound before further deductions?

- **A.** 900 bits
- **B.** 1,100 bits
- **C.** 1,000 bits
- **D.** 100 bits

### Q086

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Foundational
- **Tags:** conceptual

What is sifting?

- **A.** Signing the key with ML-DSA
- **B.** Keeping events with matching bases and discarding the others
- **C.** Extending the key by duplicating bits
- **D.** Correcting every error in the physical channel

### Q179

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** conceptual

Why is the raw key rate not the same as the secret key rate?

- **A.** The raw key rate already automatically includes every security assumption
- **B.** Filtering, checks, and processing reduce the usable key material
- **C.** The secret key rate measures only CPU usage
- **D.** Every raw bit becomes two secret bits

### Q249

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** calculation

In ideal BB84, the two bases are chosen uniformly and independently. What fraction of events survives sifting on average?

- **A.** One half
- **B.** One quarter
- **C.** All of them
- **D.** Three quarters

### Q267

- **Domain:** QKD
- **Subtopic:** sifting-and-key-rates
- **Subtopic name:** Sifting and Key Rates
- **Difficulty:** Applied
- **Tags:** calculation

There are 2,000 signals, all are received, and the bases match independently. How many are expected to survive sifting before testing?

- **A.** About 1,000
- **B.** About 500
- **C.** Exactly 100
- **D.** Exactly 2,000

### Q026

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Advanced
- **Tags:** calculation

In a model where each test bit has an independent 25% probability of error, what is the probability that no error is detected in n bits?

- **A.** 0.25 to the power of n
- **B.** 1 minus 0.75 to the power of n
- **C.** 0.75 multiplied by n
- **D.** 0.75 to the power of n

### Q042

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** troubleshooting, protocol_analysis, hands_on

What is the bug if the code compares QBER even for events where Alice and Bob used different bases?

- **A.** It turns BB84 into ML-KEM
- **B.** It always improves the accuracy of the final key estimate
- **C.** There is no problem because all bases are equivalent
- **D.** It counts expected randomness as if it were an error in the sifted bits

### Q075

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

After exceeding the error threshold defined by the protocol, what is the appropriate action?

- **A.** Change the key's name without changing anything else
- **B.** Accept all the bits to preserve availability
- **C.** Publish the key and request approval
- **D.** Stop key generation for that run and investigate the cause

### Q148

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Advanced
- **Tags:** calculation, protocol_analysis

Eve performs intercept-resend at random on only half the signals, in an ideal model. What is her expected contribution to the sifted QBER?

- **A.** 50%
- **B.** 6.25%
- **C.** 25%
- **D.** 12.5%

### Q171

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Foundational
- **Tags:** conceptual

What is QBER?

- **A.** The rate of mismatches among the bits that are checked
- **B.** The length of the final key in bytes
- **C.** The Grover speedup rate
- **D.** The ratio of the number of keys to the number of certificates

### Q196

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis, hands_on

A small sample is tested and no errors are found. What is the cautious conclusion?

- **A.** Party authentication can be omitted
- **B.** This sample does not provide absolute proof that there was no eavesdropping
- **C.** All the remaining bits are necessarily identical
- **D.** The channel has been proven secure for all time

### Q199

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** calculation, hands_on

200 bits were checked after sifting, and 10 mismatches were found. What is the QBER in the sample?

- **A.** 20%
- **B.** 0.5%
- **C.** 5%
- **D.** 10%

### Q221

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

What is needed for a fair comparison of BB84 with and without Eve in a simulation?

- **A.** The same noise and basis assumptions as far as possible, and a comparison of QBER
- **B.** Checking only the length of the variable name Eve
- **C.** A completely different number of bits without normalization
- **D.** Changing all conditions at once

### Q255

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

A nonzero QBER is measured. What can be concluded?

- **A.** The entire key must be published to correct it
- **B.** An active attacker has definitely been detected
- **C.** There may be noise, faults, or eavesdropping, and the result must be analyzed under the model
- **D.** There is definitely no attacker if the QBER is below 50%

### Q259

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

Why is it incorrect to use a single QBER threshold as a universal approval criterion for all QKD?

- **A.** The threshold depends on the protocol, the proof, and the implementation assumptions
- **B.** QBER is always measured without noise
- **C.** A numerical threshold replaces the need for privacy amplification
- **D.** All QKD protocols are identical to BB84

### Q280

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** calculation, protocol_analysis

In the ideal BB84 model, Eve measures and resends every signal using a random basis. What QBER is expected in the sifted bits?

- **A.** 100%
- **B.** 25%
- **C.** 0%
- **D.** 50%

### Q282

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** calculation

There were 8 errors among 400 test bits and 8 among 80 in another experiment. What is correct?

- **A.** The rate cannot be calculated without knowing the AES
- **B.** The rates are equal because the error counts are equal
- **C.** The first has an error rate five times higher
- **D.** The second has an error rate five times higher

### Q508

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** conceptual

During a security review of a QKD link using BB84, an auditor asks how an eavesdropper attempting to intercept photons is detected. What is the fundamental physical mechanism?

- **A.** The eavesdropper's measurement causes phase decoherence in the fiber cladding and triggers a hardware thermal alarm
- **B.** The eavesdropper must clone the photon, which generates observable acoustic vibrations in the optical switch
- **C.** Measuring non-orthogonal polarization states alters the quantum state, introducing errors that appear in the sifted sample
- **D.** The eavesdropper absorbs every photon, which immediately stops the stream and drops the signal-to-noise ratio to zero

### Q580

- **Domain:** QKD
- **Subtopic:** qber-and-eavesdropping
- **Subtopic name:** QBER, Sampling and Eavesdropping
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A QKD link shows an increased quantum bit error rate. Which response avoids overstating what this observation proves?

- **A.** Investigate the result under the protocol's security and operational rules; noise and equipment problems can also contribute to errors
- **B.** Announce that malicious interception has been conclusively identified
- **C.** Assume that every retained bit is now public
- **D.** Ignore the increase because only deliberate interception can affect security

### Q028

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

Why must information revealed during error correction be taken into account?

- **A.** It automatically makes all bits public
- **B.** It may increase the eavesdropper's knowledge of the key material
- **C.** It replaces the need for error estimation
- **D.** Classical information cannot affect QKD security

### Q067

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

What is the risk of publishing all sifted bits for “quality verification”?

- **A.** It turns them into an ML-KEM key
- **B.** No secret key material remains among them
- **C.** It necessarily causes a quantum measurement error
- **D.** Publishing them strengthens their confidentiality

### Q103

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Foundational
- **Tags:** conceptual

What happens to bits that are publicly disclosed for error checking?

- **A.** They are used specifically as the final key
- **B.** They are duplicated to increase the length
- **C.** They are removed from the secret key material
- **D.** They are encrypted again using those same bits

### Q122

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

What is the role of privacy amplification?

- **A.** To shorten a reconciled key to reduce possible information available to Eve
- **B.** To authenticate Bob's identity without a pre-shared key
- **C.** To increase the number of key bits without limit
- **D.** To correct all hardware errors

### Q162

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

Why is information reconciliation not the same as privacy amplification?

- **A.** Error correction always creates a digital signature
- **B.** If the strings are identical, Eve cannot have any information
- **C.** Privacy amplification changes only the destination address
- **D.** Identical strings may still be partially known to Eve

### Q299

- **Domain:** QKD
- **Subtopic:** reconciliation-and-privacy-amplification
- **Subtopic name:** Reconciliation and Privacy Amplification
- **Difficulty:** Applied
- **Tags:** conceptual

What is the purpose of Information reconciliation?

- **A.** Making every key unlimited in length
- **B.** Identifying legal ownership of a certificate
- **C.** Replacing the quantum channel with an HTTP channel
- **D.** Reconciling mismatches between the parties’ bit strings

### Q033

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

What is correct about the claim “QKD encrypts business information by itself”?

- **A.** One must distinguish key generation from encrypting data using that key
- **B.** The claim is correct even without an additional encryption algorithm
- **C.** QKD replaces all TLS and application layers
- **D.** Every business message must be transmitted as qubits

### Q047

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Foundational
- **Tags:** conceptual

Which channels are required in practical BB84?

- **A.** A quantum channel only, with no classical communication
- **B.** A secret but unauthenticated classical channel only
- **C.** Two TLS channels with no quantum component
- **D.** A quantum channel and an authenticated classical channel

### Q074

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

Why should you not expect QKD to replace signature verification for publicly distributed firmware?

- **A.** QKD is a signature with a larger private key
- **B.** Firmware does not require integrity
- **C.** Any public file cannot be attacked
- **D.** Distributing a key to two parties is not a public signature on the file

### Q116

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between confidentiality and authentication on the classical channel in BB84?

- **A.** A public channel can never be authenticated
- **B.** Authentication requires concealing the measurement bases
- **C.** The channel can be public while being protected against modification and impersonation
- **D.** An encrypted channel always authenticates identity automatically

### Q208

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

Which statement is true about an OTP key generated by QKD?

- **A.** It can be published because its source is physical
- **B.** A quantum source makes it possible to reuse it without limit
- **C.** It can be arbitrarily shorter than the OTP message
- **D.** It must not be reused to encrypt additional messages as an OTP

### Q211

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

Which component is not automatically replaced after installing a QKD link?

- **A.** Key material that the link actually produces
- **B.** The parties' identity authentication mechanism
- **C.** The measurement of signals performed by the QKD equipment
- **D.** The physical process of that link

### Q217

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about a key generated by QKD and used in AES?

- **A.** Content security also depends on AES and how it is used
- **B.** There is no need to protect the key in memory
- **C.** There is no need for key lifecycle management
- **D.** The content automatically receives information-theoretic security

### Q226

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

What is the risk if the classical channel is not authenticated?

- **A.** The key grows beyond the available memory
- **B.** Grover operates faster on photons
- **C.** A man-in-the-middle attack between Alice and Bob
- **D.** The bases automatically become identical

### Q235

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

Which solution can authenticate QKD communication?

- **A.** Choosing the same fixed basis in every message
- **B.** Publishing all key bits during preparation
- **C.** Relying on the mere existence of the fiber
- **D.** An appropriate authentication mechanism based on a pre-shared key or signatures

### Q286

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the primary output of QKD?

- **A.** A public signature for every document
- **B.** A digital identity certificate
- **C.** Automatic encryption of all applications
- **D.** Shared key material for two parties

### Q287

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

What is correct about combining QKD with symmetric encryption?

- **A.** It is sufficient to transfer the key to all applications without controls
- **B.** Every such combination is, by definition, an OTP
- **C.** There must be a proper integration of key generation, authentication, and data encryption
- **D.** The key source removes the need to protect endpoints

### Q503

- **Domain:** QKD
- **Subtopic:** authentication-and-key-use
- **Subtopic name:** Authentication and Use of Generated Keys
- **Difficulty:** Applied
- **Tags:** conceptual

An auditor claims "QKD provides both confidentiality and authentication." The most accurate response is:

- **A.** QKD provides authentication only, not confidentiality
- **B.** QKD provides only message integrity in the channel
- **C.** QKD gives confidentiality; authentication is external
- **D.** The auditor is correct on both stated counts

### Q013

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

What can an attack on a detector in a QKD system cause?

- **A.** Turn the entire system into ML-KEM
- **B.** Change the no-cloning theorem itself
- **C.** A gap between the proof's assumptions and the device's behavior
- **D.** Automatic immunity to man-in-the-middle attacks

### Q060

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A vendor demonstrates a successful BB84 simulation on a laptop. What does it prove?

- **A.** Full compliance with production requirements
- **B.** The equipment's resistance to side-channel attacks
- **C.** The behavior of the model and code under the test conditions
- **D.** The existence of a secure physical quantum channel

### Q071

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

Why is QKD generally not a software-only upgrade for an internet service?

- **A.** It cannot perform classical processing
- **B.** It works only on unencrypted information
- **C.** It necessarily requires replacing AES with RSA
- **D.** It requires the physical capability to transmit and measure quantum states

### Q079

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What should be checked before selecting QKD between two sites?

- **A.** Infrastructure suitability, authentication, operational limitations, and the trust basis
- **B.** Only the network administrator's password length
- **C.** Only whether they use ML-DSA
- **D.** Only whether a new browser is installed

### Q108

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

What is the central difference between the security assumptions of PQC and QKD?

- **A.** They are the same mechanism under different names
- **B.** QKD is a family of lattices and PQC is a family of photons
- **C.** PQC requires no assumptions at all, while QKD requires only RSA
- **D.** PQC relies on computational hardness; QKD also uses physical properties of quantum information

### Q117

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

How does QKD's sensitivity to interference affect availability?

- **A.** It guarantees availability even when the fiber is cut
- **B.** Confidentiality security eliminates the possibility of DoS
- **C.** Every disturbance lengthens the key
- **D.** An attacker may cause key generation to stop without learning the key

### Q126

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

What is a central risk of a trusted relay in a QKD network?

- **A.** It replaces every shared secret with a public key
- **B.** It eliminates the need for authentication altogether
- **C.** It proves that physical protection is unnecessary
- **D.** The node becomes part of the trust base and must be protected

### Q172

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

What information is missing from the claim, “The system uses the laws of physics, so it is secure”?

- **A.** Only the number of users in the presentation
- **B.** Only the color of the communication cable
- **C.** Only the length of the protocol name
- **D.** The security assumptions, implementation details, and equipment testing

### Q210

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about protecting secrets at QKD endpoints?

- **A.** QKD keys are safe even when written to a public log
- **B.** QKD prevents all malware at the endpoint
- **C.** A key can be exposed after every encryption operation, regardless of how it is used
- **D.** Ordinary protection of keys, permissions, and memory is required

### Q232

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** conceptual

What is the correct distinction between a QKD simulation and a PQC implementation?

- **A.** PQC is just another name for a BB84 simulation
- **B.** A classical simulation automatically provides the security of a quantum channel
- **C.** The former simulates a quantum process; the latter can operate cryptographically on a classical computer
- **D.** Both require photons even in a simulation

### Q243

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Advanced
- **Tags:** conceptual

What is the risk in demonstrating "QKD security" in a simulation where Eve can read the entire simulator state?

- **A.** Reading the statevector is allowed to a real eavesdropper without causing disturbance
- **B.** This proves that no-cloning is false
- **C.** The simulation turns the classical channel into a quantum channel
- **D.** The simulation does not enforce the physical access limitations of the protocol

### Q345

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A supplier offers a QKD system for a physical link between two facilities. The organization's broader requirements include software signing, VPN authentication, and distributed application connections. What should the architecture team do?

- **A.** Map QKD to the suitable physical-link use and assess separate approaches for signing, VPNs, and software constraints.
- **B.** Treat the QKD link as a substitute for all enterprise signing and authentication mechanisms.
- **C.** Reject QKD for the link because it cannot be used in any key-establishment architecture.
- **D.** Use the link test to establish that application connections across the enterprise are protected, since the facilities share the QKD-secured network.

### Q504

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the chief reason QKD has been described as "physical-layer cryptography"?

- **A.** Its security depends on quantum physics, not on a computational math problem
- **B.** Its security depends on AES-256 hardware modules
- **C.** Its security depends on RSA-2048 key wrapping
- **D.** Its security depends on TCP transport reliability

### Q509

- **Domain:** QKD
- **Subtopic:** deployment-and-security-assumptions
- **Subtopic name:** Deployment Limits, Trust and Security Assumptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A global enterprise is deciding between QKD and PQC for a WAN that spans thousands of miles. From a systems perspective, what is a primary limitation of QKD compared with PQC?

- **A.** QKD needs dedicated optical links and trusted intermediate relays over long distances, whereas PQC runs as software over existing IP infrastructure
- **B.** QKD is susceptible only to classical man-in-the-middle attacks, whereas PQC provides mathematical end-to-end immunity
- **C.** QKD algorithms consume excessive CPU cycles on routers, whereas PQC is entirely passive
- **D.** QKD works only with symmetric ciphers, so authentication is impossible without pre-existing certificates

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

Alice generates an ML-KEM key pair. What does she provide to Bob for encapsulation?

- **A.** The public encapsulation key
- **B.** The secret generation seed
- **C.** The private decapsulation key
- **D.** Both private keys

### Q057

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

What is a shared secret in the context of a KEM?

- **A.** The public key sent over the network
- **B.** A secret value that the parties derive for use in symmetric cryptography
- **C.** A certificate that anyone can download
- **D.** The certificate authority's signature

### Q062

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** conceptual

An ML-KEM ciphertext is replaced with a different value of the correct length, and it fails the internal check. What is characteristic of implicit rejection?

- **A.** The ciphertext is necessarily corrected to its original value
- **B.** The private key is returned to the attacker
- **C.** An alternative secret is produced instead of directly exposing an internal failure
- **D.** A guarantee that the parties will obtain the same secret

### Q133

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

What is the Decaps input in ML-KEM?

- **A.** The public key and the message to be signed
- **B.** A CA certificate only
- **C.** The private key and the ciphertext
- **D.** The other party's secret in the clear

### Q191

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

What is the main difference between a KEM and a signature?

- **A.** A KEM establishes a shared secret; a signature authenticates a message
- **B.** The difference is only the key length
- **C.** A KEM authenticates a message; a signature establishes a shared secret
- **D.** Both replace symmetric encryption of files

### Q201

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

What are the outputs of ML-KEM Encaps?

- **A.** Plaintext of a business file
- **B.** A signature and certificate
- **C.** Two private keys only
- **D.** A ciphertext and a shared secret

### Q206

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the typical order of KEM operations?

- **A.** Sign, Verify, Revoke
- **B.** Sift, Measure, Amplify
- **C.** KeyGen, Encaps, Decaps
- **D.** Encrypt, Hash, Sign only

### Q207

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

Why does a public KEM key still require integrity protection?

- **A.** Publishing a public key always reveals the private key
- **B.** An attacker could replace it with their own key
- **C.** To prevent it from becoming a signing key
- **D.** Integrity is required only for AES keys

### Q257

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the Encapsulation key in ML-KEM?

- **A.** The public key used to generate a ciphertext and shared secret
- **B.** A password manually chosen by the recipient
- **C.** The private key used to decapsulate the file
- **D.** A certificate authority’s signing key

### Q266

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the Decapsulation key in ML-KEM?

- **A.** A confirmation message sent by the other party
- **B.** A private key that allows a secret to be derived from the ciphertext
- **C.** The public key for verifying a signature
- **D.** A public AES initialization vector

### Q293

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

Which output of Encaps is sent to the recipient, and which is kept secret?

- **A.** Send the secret and keep the ciphertext secret
- **B.** Send both values in the clear
- **C.** Send the ciphertext and keep the shared secret secret
- **D.** Send nothing and let the recipient guess

### Q295

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** conceptual

What is correct about using a KDF after a KEM?

- **A.** It always makes an unauthenticated KEM authenticated
- **B.** It must not be used with a standardized KEM
- **C.** Whether it is needed depends on the protocol and the required key material
- **D.** It allows the original secret to be published without risk

### Q399

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** scenario

Two devices run a post-quantum KEM and derive matching shared secrets. The system owner claims this proves that each device is communicating with the intended named peer. What additional distinction must the protocol address?

- **A.** Using the same KDF on both devices proves that the intended named peer participated.
- **B.** The KEM ciphertext identifies the intended peer if its length and encoding are valid.
- **C.** A KEM shared secret alone does not authenticate real-world identities; the surrounding protocol must provide authentication and any needed key confirmation.
- **D.** Matching KEM secrets establish identity whenever the selected KEM is designed to resist quantum attacks, because only the intended peer can derive them securely.

### Q519

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Advanced
- **Tags:** conceptual

What does the number-theoretic transform contribute in ML-KEM?

- **A.** It harvests quantum randomness
- **B.** It makes polynomial multiplication much faster than multiplying polynomials in the naive way
- **C.** It shrinks an ML-KEM public key to 32 bytes
- **D.** It stops a passive network recorder

### Q520

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

How does ML-KEM encapsulation differ from elliptic-curve Diffie-Hellman?

- **A.** They are the same interactive exchange under two names
- **B.** Elliptic-curve Diffie-Hellman combines shares from both parties; ML-KEM encapsulates a fresh shared secret under the other party's public key
- **C.** ML-KEM is only a signature, and elliptic-curve Diffie-Hellman is only a hash
- **D.** ML-KEM requires both parties to send elliptic-curve shares and no ciphertext

### Q521

- **Domain:** PQC
- **Subtopic:** kem-operations
- **Subtopic name:** KEM Operations, Keys and Shared Secrets
- **Difficulty:** Applied
- **Tags:** conceptual

How do ML-KEM-768 sizes compare with an X25519 public key?

- **A.** The ML-KEM-768 encapsulation key is 32 bytes, the same as X25519
- **B.** FIPS 203 specifies an 1184-byte encapsulation key and a 1088-byte ciphertext, far larger than a 32-byte X25519 public key
- **C.** The two public keys are the same size, and ML-KEM has no ciphertext
- **D.** ML-KEM-768 has no public key; only a ciphertext is sent

### Q021

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

Which key is needed to verify an ML-DSA signature?

- **A.** The file's AES key
- **B.** The signer's private key
- **C.** The signer's public key
- **D.** The recipient's decryption key

### Q027

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

What does Stateless mean in SLH-DSA, compared with a stateful signature scheme?

- **A.** There is no need to store a private key
- **B.** Every signature is valid for every message
- **C.** There is no need to track the use of internal one-time keys across signatures
- **D.** There is no need to verify signatures

### Q102

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

Which choice is suitable for authenticating a software update without concealing its contents?

- **A.** QKD alone without a signature
- **B.** Increasing the disk encryption key length
- **C.** KEM alone without authentication
- **D.** A PQC digital signature

### Q195

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

What is the special challenge with stateful hash-based signatures?

- **A.** The need for a quantum computer to sign
- **B.** Preventing reuse of an internal signing state that must be one-time
- **C.** The requirement to transmit photons to every recipient
- **D.** The inability to verify with a public key

### Q254

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

A standardized signature that is not lattice-based is required. Which choice is suitable?

- **A.** ML-KEM
- **B.** SLH-DSA
- **C.** ML-DSA
- **D.** HQC

### Q258

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

Does replacing ECDSA with ML-DSA encrypt the update file?

- **A.** Yes, if the filename ends in .bin
- **B.** Yes, every PQC signature is also encryption
- **C.** No, it changes the signature mechanism
- **D.** Only if the verification key is kept secret

### Q264

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

What is a notable trade-off of SLH-DSA compared with ML-DSA?

- **A.** ML-DSA requires a quantum channel
- **B.** SLH-DSA cannot be publicly verified
- **C.** Hash-based diversification, alongside generally longer signatures
- **D.** SLH-DSA is always shorter and faster on every metric

### Q281

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

Why does a PQC signature on a document not, by itself, solve the document’s confidentiality?

- **A.** A signature protects authenticity and integrity; it does not encrypt the content
- **B.** A signature makes the document unreadable forever
- **C.** Every signed document must be public
- **D.** ML-DSA encrypts only the header

### Q285

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

Which pair consists of stateful hash-based signatures?

- **A.** ML-KEM and HQC
- **B.** LMS and XMSS
- **C.** RSA and ECDSA
- **D.** ML-DSA and SLH-DSA

### Q517

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

What should happen when a stateful hash-based signature key, such as LMS or XMSS, has used every available index?

- **A.** The index may return to zero and sign again with the same leaves
- **B.** The key is exhausted and must not be reused; a new key pair is required for further signatures
- **C.** The scheme automatically becomes stateless
- **D.** The key drops to NIST category 1 and may continue

### Q518

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Advanced
- **Tags:** conceptual

What is the role of WOTS+ inside XMSS, LMS, and SLH-DSA?

- **A.** It encrypts bulk files inside a memory enclave
- **B.** It is a one-time signature; the hash tree authenticates those one-time keys
- **C.** It is the number-theoretic transform used by ML-KEM
- **D.** It offloads matrix arithmetic to a GPU

### Q525

- **Domain:** PQC
- **Subtopic:** digital-signatures
- **Subtopic name:** Post-Quantum Digital Signatures
- **Difficulty:** Applied
- **Tags:** conceptual

Where are stateful hash-based signatures such as LMS and XMSS a considered fit, despite the state-management risk?

- **A.** As the default high-volume signature on ordinary TLS handshakes
- **B.** For controlled software or firmware signing, where the number of signatures is limited and the index cannot be rolled back
- **C.** As a replacement for ephemeral key establishment
- **D.** Nowhere, because they have no resistance to Shor's algorithm

### Q022

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which submission is ML-KEM derived from?

- **A.** SPHINCS+
- **B.** CRYSTALS-Kyber
- **C.** CRYSTALS-Dilithium
- **D.** Falcon

### Q035

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Applied
- **Tags:** conceptual

Which pair is suitable for key establishment and signing, respectively?

- **A.** ML-KEM and ML-DSA
- **B.** ML-DSA and SLH-DSA
- **C.** ML-DSA and ML-KEM
- **D.** SLH-DSA and ML-KEM

### Q064

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which parameter sets are included in FIPS 203?

- **A.** ML-KEM-128, ML-KEM-192, ML-KEM-256
- **B.** ML-KEM-512, ML-KEM-768, ML-KEM-1024
- **C.** ML-KEM-2048, ML-KEM-3072, ML-KEM-4096
- **D.** ML-KEM-44, ML-KEM-65, ML-KEM-87

### Q085

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which construction family is used in SLH-DSA?

- **A.** Hash-based signatures
- **B.** Entanglement-based QKD
- **C.** Code-based KEM
- **D.** ECC-based key exchange

### Q087

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which submission is SLH-DSA derived from?

- **A.** Kyber
- **B.** HQC
- **C.** Falcon
- **D.** SPHINCS+

### Q158

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Applied
- **Tags:** conceptual

Why is there mathematical diversity between ML-DSA and SLH-DSA?

- **A.** One is classical and the other requires photons
- **B.** One is based on lattices and the other on hash functions
- **C.** One is a signature and the other is AES
- **D.** Both are based on RSA exactly

### Q173

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which submission is ML-DSA derived from?

- **A.** CRYSTALS-Dilithium
- **B.** SPHINCS+
- **C.** CRYSTALS-Kyber
- **D.** HQC

### Q234

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which names belong to the ML-DSA parameter sets?

- **A.** 128, 192, 256 only
- **B.** 44, 65, 87
- **C.** 2048, 3072, 4096
- **D.** 512, 768, 1024

### Q268

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Applied
- **Tags:** conceptual

What is correct about the claim, “ML-KEM-1024 is always the best choice”?

- **A.** 512 and 768 are not standardized parameter sets
- **B.** A higher category eliminates all performance costs
- **C.** The parameter-set choice depends on security requirements, policy, and cost
- **D.** The 1024 parameter set is used only for signatures

### Q272

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

Which problem family is used in ML-KEM?

- **A.** Detecting a change in photon polarization
- **B.** Factoring an RSA modulus
- **C.** The discrete logarithm problem on an elliptic curve
- **D.** Module lattices and the Module Learning with Errors problem

### Q511

- **Domain:** PQC
- **Subtopic:** families-and-parameters
- **Subtopic name:** Algorithm Families and Parameter Sets
- **Difficulty:** Foundational
- **Tags:** conceptual

An organization must replace legacy asymmetric key establishment. Which NIST-standardized algorithm is the primary choice for general encryption and key encapsulation?

- **A.** ML-DSA (from CRYSTALS-Dilithium)
- **B.** ML-KEM (from CRYSTALS-Kyber)
- **C.** FN-DSA (from Falcon)
- **D.** XMSS or LMS

### Q001

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Applied
- **Tags:** conceptual

What is the conditional promise of a well-designed hybrid combination?

- **A.** Quantum resistance is guaranteed in every configuration that offers two algorithms
- **B.** Security is automatically improved by combining them, without needing to analyze the combiner
- **C.** Security is preserved as long as the resulting key is long, even if both components have been broken
- **D.** Some security is retained if at least one component is secure, subject to the construction's conditions

### Q077

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Applied
- **Tags:** conceptual

What is Hybrid key establishment in the PQ/T context?

- **A.** Combining secrets from a traditional mechanism and a PQC mechanism using an appropriate combiner
- **B.** Installing a PQC library alongside an RSA library while the application continues to use only RSA
- **C.** Using ML-KEM for new data and RSA for old data without a joint construction
- **D.** Supporting two mechanisms and selecting only one per connection, without combining secrets

### Q091

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Applied
- **Tags:** conceptual

What is missing from the claim “There are two secrets, so we can simply concatenate them and use them”?

- **A.** Design and analysis of a combiner, encoding, and binding to context
- **B.** A sufficiently long output, even if the composition has not been analyzed and the inputs are not encoded properly
- **C.** Selecting the longer secret and discarding the contribution of the other mechanism
- **D.** A guarantee that every combination preserves IND-CCA when at least one component does

### Q092

- **Domain:** PQC
- **Subtopic:** hybrid-constructions
- **Subtopic name:** Hybrid Constructions, Combiners and Context
- **Difficulty:** Advanced
- **Tags:** conceptual

Why might a hybrid combiner include ciphertexts, public keys, and a domain separator?

- **A.** To avoid any security analysis
- **B.** To replace the secrets with public values only
- **C.** To publish the private keys
- **D.** To bind the output to the components and context, and preserve desired security properties

### Q010

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

Which statement about key length is correct?

- **A.** ML-KEM-768 provides 768 bits of security
- **B.** A public key twice as long is always twice as secure
- **C.** Every 256-bit key is protected to the same degree
- **D.** Strength should not be compared across different families based only on the number of bits in the name

### Q036

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

What is the reference primitive for Category 3?

- **A.** Key search against AES-128
- **B.** Key search against AES-192
- **C.** Collision search against SHA-256
- **D.** Factoring RSA-3072

### Q040

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

What is the reference primitive for Category 1?

- **A.** RSA-1024 signatures
- **B.** Collisions in SHA-512 only
- **C.** Key search against AES-128
- **D.** QKD with a single basis

### Q068

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Foundational
- **Tags:** conceptual

Which best describes PQC?

- **A.** Cryptography that requires every user to have a quantum computer
- **B.** Encryption intended only for information created on a quantum computer
- **C.** Cryptography designed to withstand classical and quantum attacks
- **D.** Distributing keys using photons only

### Q145

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

What is the reference primitive for Category 5?

- **A.** A collision in SHA-256
- **B.** A key search against AES-256
- **C.** A discrete logarithm on some curve
- **D.** A key search against AES-128

### Q150

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

Why is it incorrect to conclude that PQC is immune to every attack?

- **A.** Because PQC cannot run on ordinary hardware
- **B.** Because PQC protects only against quantum computers
- **C.** Implementations, protocols, and key management can also fail
- **D.** Because all PQC algorithms rely on RSA

### Q165

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

Which security categories are assigned to ML-KEM-512/768/1024, respectively?

- **A.** 1, 3, 5
- **B.** 3, 4, 5
- **C.** 2, 3, 5
- **D.** 1, 2, 3

### Q220

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

What does a NIST security category describe?

- **A.** A comparison level against reference primitives and attack models
- **B.** The number of bits in the public key
- **C.** The algorithm's expiration date
- **D.** The number of qubits definitely required for an attack

### Q222

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

What distinguishes categories 2 and 4 from categories 1, 3, and 5?

- **A.** They are categories with no reference primitive at all
- **B.** They use a reference based on finding collisions in hash functions
- **C.** They measure only certificate size
- **D.** They are intended only for classical computers

### Q225

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between quantum-resistant and "unbreakable forever"?

- **A.** There is no difference between the terms
- **B.** Quantum resistance prevents all information leakage
- **C.** Resistance is an assessment under current assumptions and cryptographic knowledge
- **D.** A NIST standard proves that no weakness will be discovered

### Q253

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

What is wrong with the claim, “The ML-KEM secret is 256 bits long, so all parameter sets have equal strength”?

- **A.** The output length alone does not determine the mechanism’s strength
- **B.** The output is not secret in any parameter set
- **C.** The ML-KEM output is always the length of the parameter-set name
- **D.** All ML-KEM parameter sets are actually signatures

### Q515

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Applied
- **Tags:** conceptual

Which NIST security categories do ML-DSA-44, ML-DSA-65, and ML-DSA-87 claim, respectively?

- **A.** 1, 3, and 5
- **B.** 2, 3, and 5
- **C.** 2, 4, and 5
- **D.** 1, 2, and 3

### Q516

- **Domain:** PQC
- **Subtopic:** security-properties-and-categories
- **Subtopic name:** Security Properties, Comparisons and Categories
- **Difficulty:** Advanced
- **Tags:** conceptual

What is MAXDEPTH in NIST's post-quantum security estimates?

- **A.** The maximum fiber length of a QKD link
- **B.** A bound on quantum-circuit depth used when estimating the cost of a quantum attack
- **C.** The RAM required to run ML-KEM on a laptop
- **D.** The number of servers in a hybrid deployment

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

What is the focus of SP 800-227?

- **A.** Defining photonic equipment only
- **B.** Recommendations for the use and implementation of KEMs
- **C.** Defining the SLH-DSA algorithm
- **D.** Certification testing for QKD specialists

### Q081

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

Which standard defines ML-KEM?

- **A.** FIPS 205
- **B.** FIPS 203
- **C.** FIPS 204
- **D.** FIPS 140-3

### Q090

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

What is IETF's relevant role in the PQC transition?

- **A.** Managing permissions for every internet server
- **B.** Internet protocol specifications and integrating mechanisms into them
- **C.** Approving SISA professional certification programs
- **D.** Manufacturing all commercial HSMs

### Q112

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

Which standard defines SLH-DSA?

- **A.** FIPS 205
- **B.** FIPS 204
- **C.** SP 800-56A
- **D.** FIPS 203

### Q135

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

What is the focus of ETSI TR 104 016?

- **A.** A validation test for photon detectors only
- **B.** A repeatable, phased framework for a transition to quantum-safe systems
- **C.** The AES encryption specification
- **D.** The ML-DSA specification itself

### Q143

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

What does an algorithm standard guarantee beyond a marketing label such as “quantum-safe”?

- **A.** Automatic compliance with every regulation in the world
- **B.** Protection against misuse of keys
- **C.** Complete security of the entire product
- **D.** A precise definition of the algorithm and required parameters

### Q144

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

What is NIST's role in the PQC program?

- **A.** Managing registration for SISA assessment
- **B.** Evaluating and standardizing algorithms and relevant guidance
- **C.** Manufacturing all QKD devices
- **D.** Issuing every TLS certificate in the world

### Q178

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

What is the focus of the draft NIST IR 8547 cited in the material?

- **A.** Transitioning from quantum-vulnerable standards to PQC standards
- **B.** Proving that all AES has already been broken
- **C.** Defining the BB84 protocol
- **D.** Registration for CQSP exams

### Q188

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** conceptual

Which document addresses security requirements and evaluation for QKD, according to the NCCoE list?

- **A.** NIST SP 800-227
- **B.** FIPS 204
- **C.** ISO/IEC 23837-1:2023
- **D.** FIPS 203

### Q292

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

Which standard defines ML-DSA?

- **A.** FIPS 205
- **B.** FIPS 204
- **C.** FIPS 203
- **D.** SP 800-227

### Q467

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

An engineering team cites FIPS 203 as its complete operational guide for deploying a KEM in a production protocol. Which description best distinguishes the relevant NIST publications?

- **A.** FIPS 203 standardizes ML-KEM; SP 800-227, finalized in September 2025, provides guidance on KEM use.
- **B.** Both publications certify complete production protocols that use any standardized KEM.
- **C.** SP 800-227 specifies ML-KEM, while FIPS 203 gives general operational guidance for KEM protocols and their production deployment.
- **D.** SP 800-227 is a transition-table draft, and FIPS 203 is its deployment checklist.

### Q470

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

A briefing note calls EO 14412 a NIST technical report. Which identification is supported by the research snapshot dated 9 October 2026?

- **A.** EO 14412 is the NSA's CNSA 2.0 profile, dated 1 October 2026.
- **B.** EO 14412 is an EU Commission Recommendation issued on 22 June 2026.
- **C.** EO 14412 is the executive order titled “Securing the Nation Against Advanced Cryptographic Attacks,” dated 22 June 2026.
- **D.** EO 14412 is NIST IR 8547, finalized on 22 June 2026, with agency migration dates.

### Q480

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

An engineer finds an older product-category schedule that conflicts with an NSA news summary dated 1 October 2026. The migration plan merges both sets of dates into one table. What is the sound next step?

- **A.** Average the dates in the two sources to create one implementation milestone.
- **B.** Use the earliest date in either source as the controlling deadline for every NSS category, avoiding delays from reconciling different schedules.
- **C.** Verify the current controlling CNSSP and applicable CNSA profile version; keep source-specific schedules separate until resolved.
- **D.** Treat the news summary as a full replacement for category-specific policy schedules.

### Q491

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** scenario, business_scenario, policy_interpretation

A company wants a certifiable information security management system and also needs practical control guidance to support it. Which pairing correctly describes ISO/IEC 27001:2022 and ISO/IEC 27002:2022?

- **A.** ISO 27001 validates each endpoint's cryptography, while ISO 27002 certifies the organization and its security management system.
- **B.** ISO 27001 sets ISMS requirements and is certifiable; ISO 27002 provides supporting control guidance.
- **C.** Both standards validate PQC algorithms and cryptographic modules.
- **D.** ISO 27002 specifies certifiable ISMS requirements; ISO 27001 is supporting control guidance.

### Q493

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

A legal reviewer is asked whether ETSI TR 104 016 V1.1.1 creates a binding EU PQC migration deadline. Which description matches the publication's title and status?

- **A.** It is an EU regulation from June 2025 requiring every firm to migrate by 2030, establishing a binding completion date across Member States.
- **B.** It is an October 2024 technical report describing a repeatable quantum-safe migration framework, not binding EU law.
- **C.** It transposes NIS2 into national law and sets a PQC completion date.
- **D.** It is a final FIPS standard for ML-KEM and ML-DSA deployment.

### Q500

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Advanced
- **Tags:** policy_interpretation

A security architect is sorting two NIST publications: SP 800-207, published in August 2020, and SP 800-61 Rev. 3, finalized in April 2025. Which pairing correctly identifies their principal purposes?

- **A.** SP 800-207 addresses Zero Trust Architecture, while SP 800-61 Rev. 3 specifies cryptographic module validation and approved algorithm testing.
- **B.** SP 800-207 addresses Zero Trust Architecture; SP 800-61 Rev. 3 integrates incident response across CSF 2.0 risk management.
- **C.** SP 800-207 covers incident response, while SP 800-61 Rev. 3 defines Zero Trust Architecture.
- **D.** SP 800-207 defines PQC inventory requirements, while SP 800-61 Rev. 3 provides the transition schedule for quantum-vulnerable public-key algorithms.

### Q514

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

What was the aim of NIST's post-quantum cryptography standardization project?

- **A.** To create criminal offenses for attacks that use a quantum computer
- **B.** To build a quantum computer for cryptographic agencies
- **C.** To evaluate and standardize public-key algorithms intended to resist quantum attacks
- **D.** To withdraw every symmetric algorithm from federal use by 2030

### Q581

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** scenario, business_scenario

A hospital wants information-security guidance adapted to the handling of health information, rather than a specification of a particular encryption algorithm. Which standard is the closest fit?

- **A.** FIPS 203
- **B.** NIST SP 800-208
- **C.** ISO 27799
- **D.** A TLS cipher-suite registry

### Q582

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

A cloud customer and provider need guidance addressing cloud-specific security controls and their respective responsibilities. Which standard is directly relevant?

- **A.** FIPS 204
- **B.** ISO 27799
- **C.** A quantum-gate specification
- **D.** ISO/IEC 27017

### Q583

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A telecommunications operator uses ETSI TR 104 016 to structure a quantum-safe migration program. What is the appropriate role of that document?

- **A.** It automatically establishes the same legally binding completion date for every operator worldwide
- **B.** It provides a migration framework that must be applied alongside the operator's applicable legal and regulatory requirements
- **C.** It replaces the need to inventory cryptographic dependencies
- **D.** It certifies the operator's cryptographic modules

### Q590

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Foundational
- **Tags:** conceptual

Which algorithm group is specifically addressed by NIST SP 800-208?

- **A.** LMS and XMSS, including their specified multi-tree variants
- **B.** ML-KEM and ECDH
- **C.** AES and ChaCha20
- **D.** Every digital-signature algorithm selected by NIST

### Q591

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A design document treats SP 800-208 and FIPS 205 as interchangeable because both concern hash-based signatures. What important distinction is missing?

- **A.** FIPS 205 defines a KEM, whereas SP 800-208 defines encryption
- **B.** SP 800-208 is a cloud-control framework
- **C.** SP 800-208 addresses stateful hash-based schemes, whereas FIPS 205 specifies the stateless SLH-DSA scheme
- **D.** Hash-based signatures never use private keys

### Q592

- **Domain:** SCR
- **Subtopic:** standards-bodies-and-documents
- **Subtopic name:** Standards Bodies and Document Identification
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A financial-sector architect says that SP 800-208 is the general standard that every post-quantum signing deployment must use. Which response is most accurate?

- **A.** Agree, because all post-quantum signatures are stateful hash-based schemes
- **B.** Match the document to the selected signature scheme and operational requirements; SP 800-208 has a specific stateful hash-signature scope
- **C.** Replace the signature requirement with ML-KEM
- **D.** Select the document only by whether the organization operates in finance

### Q009

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

What is the risk of using an old algorithm version that has a familiar name?

- **A.** An old submission version automatically becomes validated as soon as a FIPS publication appears
- **B.** Every implementation called Kyber necessarily conforms to every final ML-KEM profile
- **C.** The name alone does not prove conformance to the final specification
- **D.** A familiar name means parameter checks can be skipped as long as the code is open source

### Q066

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

What is correct about the string “Kyber” in a product document?

- **A.** It requires the use of QKD
- **B.** It is sufficient proof of FIPS 140-3 compliance
- **C.** It means that the product supports signatures
- **D.** The version and its compatibility with final ML-KEM must be clarified

### Q084

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** policy_interpretation

What should you do when old course material presents a Draft that has since been superseded?

- **A.** Learn the current mapping and version, and check SISA for exam expectations
- **B.** Assume that every draft is identical to the final standard
- **C.** Memorize only the draft's year
- **D.** Ignore the course material completely

### Q138

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

What is the right way to verify the status of a new algorithm?

- **A.** Role, family, standardization status, and version from a primary source
- **B.** Only a vendor's claim that it is quantum-proof
- **C.** Only the number of mentions online
- **D.** Only whether open-source code exists

### Q142

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

What is a correct conclusion from the completion of FIPS 203/204/205?

- **A.** Every protocol in the world has already migrated
- **B.** Controlled integration can begin without waiting for all future alternatives
- **C.** No additional security testing is needed
- **D.** One must wait for HQC before any pilot

### Q209

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** date_recall

What is true about Falcon/FN-DSA according to the sources reviewed as of October 8, 2026?

- **A.** A KEM mechanism in FIPS 203
- **B.** It is already one of the three final FIPS standards from 2024
- **C.** A new name for SLH-DSA
- **D.** A signature algorithm that was selected and whose NIST standardization is still in progress

### Q227

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between "selected for standardization" and "final standard"?

- **A.** Selection does not necessarily mean that specification and final publication are complete
- **B.** Selection proves that every commercial product is validated
- **C.** There is no difference
- **D.** A final standard is only a research proposal with no specification

### Q241

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Applied
- **Tags:** date_recall

What is the status of HQC according to the sources reviewed as of October 8, 2026?

- **A.** It is a final signature in FIPS 205
- **B.** It is another name for BB84
- **C.** It was selected for standardization as an additional KEM, and the process is ongoing
- **D.** It has already replaced ML-DSA in FIPS 204

### Q461

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

A policy memo describes NIST IR 8547 as a final FIPS standard and a binding EU regulation. Which description matches NIST's publication status at the October 9, 2026 reference date?

- **A.** It is a final NIST special publication establishing mandatory migration dates.
- **B.** It is a final FIPS standard issued in November 2024, with transition dates binding on all organizations.
- **C.** It is an Initial Public Draft published on 12 November 2024, not a final FIPS or EU regulation.
- **D.** It is an EU regulation published in November 2024 that adopts NIST transition dates.

### Q466

- **Domain:** SCR
- **Subtopic:** standardization-status
- **Subtopic name:** Algorithm Standardization and Publication Status
- **Difficulty:** Foundational
- **Tags:** policy_interpretation

A training slide says NIST finalized its first PQC standards on the day a quantum computer became capable of breaking RSA. Which correction is accurate?

- **A.** Only FIPS 203 became final in August 2024; FIPS 204 and 205 followed after a CRQC demonstration.
- **B.** The three FIPS were finalized in 2035 after quantum computers demonstrated RSA factorization.
- **C.** FIPS 203, 204 and 205 became final on 13 August 2024; that publication date does not signal quantum-computer arrival.
- **D.** NIST finalized SP 800-227 and IR 8547 as its first PQC standards in August 2024.

### Q020

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

Why does selecting an algorithm listed in FIPS not prove that a product is FIPS 140-3 validated?

- **A.** Every product using AES is automatically validated
- **B.** An algorithm standard and cryptographic module validation are different things
- **C.** There is no module validation program
- **D.** FIPS 140-3 concerns only QKD

### Q115

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

What is the primary role of CAVP?

- **A.** Testing the conformance of implementations of approved algorithms
- **B.** Managing TLS keys throughout an organization
- **C.** Approving the CQSP curriculum
- **D.** Operating government QKD channels

### Q256

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

What information should be checked in a supplier’s cryptographic validation certificate?

- **A.** Only the year the company was founded
- **B.** Only whether the word FIPS appears on the website
- **C.** The module version, its configuration, and the algorithms within the scope of the validation
- **D.** Only the company name

### Q273

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** conceptual

What is the primary role of CMVP?

- **A.** Assigning CQSP exam scores
- **B.** Issuing signatures to every client
- **C.** Selecting the year a CRQC will arrive
- **D.** Validating cryptographic modules according to the relevant requirements

### Q468

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A vendor provides a CAVP certificate for its cryptographic algorithm implementation and claims that its entire hardware security module is therefore FIPS 140-3 validated. What is the correct assessment?

- **A.** CMVP validates algorithm implementations, while CAVP certifies the complete cryptographic module.
- **B.** CAVP and CMVP are interchangeable enterprise certifications for PQC migration.
- **C.** CAVP validates algorithm implementations; CMVP validates cryptographic modules, so the certificate alone does not establish HSM validation.
- **D.** A CAVP certificate validates the vendor's complete module whenever the algorithm is implemented in hardware, including the HSM boundary and configuration.

### Q469

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A firm has a CMVP-validated cryptographic module containing a PQC algorithm. Its migration lead proposes marking the enterprise migration complete without checking applications, endpoints or operational paths. What is the key flaw?

- **A.** Enterprise migration is complete once each application receives a CAVP certificate.
- **B.** A validated module proves that all applications and endpoints use it without classical fallbacks.
- **C.** The module certificate converts existing certificates and trust chains to PQC across the enterprise, provided applications link to the validated product.
- **D.** CMVP validation establishes module assurance, but the organization must still assess deployment, dependencies and actual cryptographic use.

### Q492

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A supplier holds an ISO/IEC 27001:2022 certificate for its ISMS and presents it as proof that its ML-KEM implementation has a CAVP certificate and its module has CMVP validation. What evidence distinction should the buyer make?

- **A.** CAVP and CMVP validate the supplier's organizational risk-management system.
- **B.** The ISO certificate covers the supplier's ISMS scope; CAVP and CMVP require separate algorithm and module evidence.
- **C.** The ISO certificate proves every supplier endpoint uses the certified ML-KEM implementation.
- **D.** ISO 27001 automatically establishes CAVP validation for ML-KEM and CMVP validation for the module within the certified ISMS scope.

### Q597

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A procurement questionnaire asks whether a supplier “complies with ISO/IEC 27017” but records no edition, assessment date or service scope. What is the most useful improvement?

- **A.** Remove the question because standards never change
- **B.** Assume that the supplier's answer covers every service and every later edition
- **C.** Treat the answer as proof of PQC algorithm validation
- **D.** Record the applicable edition, assessed service scope and supporting evidence rather than relying on an unqualified standard number

### Q598

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A hospital selects ISO 27799 as part of its security program. Which statement avoids overstating what that choice establishes?

- **A.** It automatically proves that every deployed cryptographic implementation resists quantum attacks
- **B.** It replaces all other legal and technical requirements
- **C.** It provides health-information security guidance, while algorithm selection and implementation assurance require their own assessment
- **D.** It mandates one identical cryptographic configuration for every healthcare system

### Q599

- **Domain:** SCR
- **Subtopic:** validation-and-certification
- **Subtopic name:** Validation, Certification and Assurance Scope
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A cloud supplier presents ISO/IEC 27017-related assurance as proof that its ML-KEM implementation has algorithm validation. What should the buyer request?

- **A.** Evidence specific to the claimed algorithm implementation and validation scope, separately from cloud-control assurance
- **B.** No further evidence, because all security assurance has the same scope
- **C.** Only the supplier's corporate logo
- **D.** A longer cloud-services contract instead of technical evidence

### Q177

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** policy_interpretation

What is the error in applying CNSA to every business worldwide without checking applicability?

- **A.** CNSA does not address cryptography
- **B.** Every U.S. document automatically binds every company
- **C.** Every company may ignore all regulations
- **D.** The relevant target population, policy, and contractual obligations must be checked

### Q244

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** policy_interpretation

What is the correct interpretation of the NSA recommendation against QKD for NSS uses while its limitations remain unresolved?

- **A.** A recommendation to replace QKD with RSA only
- **B.** A position that depends on the scope and requirements of NSS and on practical limitations
- **C.** A worldwide legal ban on QKD research
- **D.** Proof that every QKD protocol is mathematically incorrect

### Q455

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A multinational compliance team is comparing the UK NCSC's March 2025 roadmap with the EU's coordinated roadmap published in June 2025. Which statement best distinguishes their character and scope?

- **A.** The UK roadmap is planning guidance; the EU roadmap is a coordinated recommendation primarily addressed to Member States.
- **B.** Both documents impose the same statutory completion deadline on every private organization.
- **C.** The EU roadmap applies only to EU institutions, while the NCSC roadmap is an EU-wide legal requirement.
- **D.** The UK roadmap is binding on all UK companies, while the EU roadmap binds private entities across the Union through its coordinated schedule.

### Q459

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A procurement lead cites the BSI's 11 July 2025 summary of the EU roadmap and says every entity is legally required to finish every migration by the end of 2035. What is the most accurate correction?

- **A.** The summary describes migration for all systems as largely completed by end 2035, not an absolute legal deadline for every entity.
- **B.** It requires every entity to complete every migration by end 2035 under a binding EU regulation, regardless of system risk or national implementation.
- **C.** It limits the end-2035 target to national high-risk systems, excluding other systems.
- **D.** It sets end 2035 as the date Member States must begin migrating high-risk systems.

### Q472

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A multinational supplier is told that EO 14412's agency deadlines automatically require every private company worldwide, including National Security Systems, to complete PQC migration by 2031. What is the most accurate response?

- **A.** The order covers private suppliers only and excludes federal HVAs and high-impact systems.
- **B.** The order directly sets 2031 as the migration deadline for all private firms, including NSS operators, because suppliers support federal systems.
- **C.** The cited dates concern agency guidance for HVAs and high-impact systems excluding NSS; they are not worldwide private-company deadlines.
- **D.** The dates apply to EU Member States, while US agencies follow a separate 2027 deadline.

### Q475

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

A contractor compliance memo says EO 14412 proves a final FAR rule already requires every covered contractor to meet PQC controls. What does the executive order actually establish?

- **A.** The order requires contractors to self-certify within 30 days without further rulemaking.
- **B.** The order directs the FAR Council to publish a proposed rule within 180 days; that does not establish an already-adopted final rule.
- **C.** The FAR Council must issue a final rule within 180 days, so all contractors are already covered by the order's PQC requirements immediately.
- **D.** The proposed rule is due in 270 days and applies only to National Security Systems.

### Q477

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Foundational
- **Tags:** scenario, business_scenario, policy_interpretation

A commercial enterprise wants to use CNSA 2.0 as its universal corporate cybersecurity framework. Which description better fits NSA's description of CNSA 2.0?

- **A.** CNSA is a NIST governance tier used to rank enterprise quantum-readiness programs.
- **B.** CNSA is an EU-wide corporate framework that mandates controls for all private firms and provides a universal organizational readiness assessment.
- **C.** CNSA replaces the NIST Cybersecurity Framework across public and private sectors.
- **D.** CNSA is a Commercial National Security Algorithm profile for National Security Systems contexts, not a universal corporate risk framework.

### Q479

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

A federal architect applies EO 14412 Section 4(b)'s HVA dates to an NSS migration, arguing that all federal systems follow the same route. What distinction should the architect preserve?

- **A.** Section 4(b) explicitly includes NSS, while CNSSP 15 applies only to private-sector systems and does not affect federal architecture.
- **B.** CNSA 2.0 replaces EO 14412 for every civilian agency system.
- **C.** Section 4(b) excludes NSS; apply the relevant CNSS policy and CNSA guidance to NSS separately.
- **D.** The two routes are identical because both address post-quantum cryptography.

### Q483

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A product manager hears that BSI recommends hybrid classical-plus-PQC protection and concludes that every AES-based symmetric encryption use must be banned. Which response is best supported?

- **A.** The hybrid recommendation concerns relevant migration use cases; it does not ban all AES-based symmetric encryption.
- **B.** Hybrid protection means keeping classical algorithms alone until PQC deployment is complete, then replacing all symmetric encryption including AES.
- **C.** The recommendation calls for replacing AES with public-key signatures by end 2031.
- **D.** The recommendation applies only to AES-128 and excludes other symmetric algorithms.

### Q485

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A buyer says ANSSI has enacted a universal statutory ban on purchasing any non-PQC product after 2030. What is the more precise characterization of the ANSSI statement in the cited guidance?

- **A.** The statement makes non-PQC procurement unlawful worldwide after 2030, regardless of sector.
- **B.** It requires all existing products to be withdrawn by law at the end of 2030.
- **C.** ANSSI says buying products without PQC after 2030 is not reasonable; this is procurement guidance, not a universal statutory ban.
- **D.** ANSSI recommends continuing to buy non-PQC products after 2030 while planning eventual upgrades, because its statement is merely advisory.

### Q486

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

An architect reads ANSSI's short- and medium-term hybridization recommendation and mandates hybrid signatures for every PQC family, including SLH-DSA, XMSS and LMS. Which refinement matches the cited guidance?

- **A.** ANSSI rejects hybrid protection for all PQC families, including lattice-based algorithms.
- **B.** ANSSI does not recommend systematic hybridization for hash-based signatures such as SLH-DSA, XMSS and LMS.
- **C.** ANSSI requires hash-based signatures to be paired with RSA for the foreseeable future.
- **D.** ANSSI's hybrid guidance applies only to AES and symmetric encryption.

### Q495

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

A covered entity's compliance team cites NIS2 Article 21(2)(h) as explicitly requiring ML-KEM deployment by a fixed EU-wide date. What does the directive provision actually address in the cited guidance?

- **A.** It names ML-KEM as mandatory for covered entities but leaves the deployment date to each organization, requiring eventual named-algorithm adoption.
- **B.** It calls for risk-proportionate cryptography policies and, where appropriate, encryption; it does not specify an ML-KEM deadline.
- **C.** It requires CMVP validation for all EU TLS modules, regardless of entity risk.
- **D.** It requires every covered entity to replace RSA and ECC by a fixed EU-wide date.

### Q498

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

A privacy officer says GDPR Article 32 requires ML-KEM for all personal data from 2030 onward. Which interpretation best matches GDPR Article 32?

- **A.** Article 32 sets no PQC date, so risk owners may exclude quantum threats until a separate binding regulation explicitly mandates PQC migration.
- **B.** GDPR requires encryption in every case and removes other controller duties once encryption is applied.
- **C.** Article 32 calls for appropriate, risk-based security measures reflecting state of the art and context; it names neither ML-KEM nor a universal PQC date.
- **D.** Article 32 names ML-KEM as mandatory for personal data from 2030 onward.

### Q584

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A bank's migration plan treats DORA's application date as the date by which every cryptographic mechanism had to become post-quantum. What is the correct response?

- **A.** Distinguish the regulation's application date and resilience obligations from a separately established PQC-specific deployment requirement
- **B.** Accept the plan because every cybersecurity regulation has an implicit PQC deadline
- **C.** Replace every symmetric cipher without reviewing its use
- **D.** Treat DORA as an algorithm-validation certificate

### Q585

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A health-research organization processes personal genomic information that may remain sensitive for decades. How should GDPR Article 32 inform its cryptographic planning?

- **A.** It guarantees that any currently deployed algorithm remains suitable indefinitely
- **B.** It names ML-KEM as the required algorithm for every processing activity
- **C.** It makes data-protection lifetime irrelevant
- **D.** It supports assessing appropriate security measures in light of risk and the state of the art, without itself prescribing a universal ML-KEM deployment date

### Q586

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** conceptual

An organization within the applicable NIS2 scope reviews Article 21(2)(h). Which interpretation is appropriate?

- **A.** The provision is a certification scheme for individual PQC implementations
- **B.** It specifies the exact ML-KEM parameter set for every covered entity
- **C.** It concerns policies and procedures on cryptography and, where appropriate, encryption; specific obligations must be assessed in their applicable legal context
- **D.** It exempts entities from cryptographic risk assessment until a CRQC is demonstrated

### Q587

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** conceptual

Which activity is directly supported by PCI DSS v4.0.1 requirement 12.3.3?

- **A.** Documenting and reviewing cryptographic cipher suites and protocols at least once every 12 months
- **B.** Replacing every payment-system algorithm with ML-KEM on one universal date
- **C.** Removing symmetric encryption from payment processing
- **D.** Treating a product's marketing label as sufficient cryptographic evidence

### Q588

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A payment processor argues that it need not track cryptographic obsolescence because it has not identified a universal PCI DSS PQC cutover date. Which response is best?

- **A.** Agree; absence of a universal PQC date removes the need for cryptographic review
- **B.** Continue the required cryptographic review and manage emerging weaknesses rather than equating the absence of one deadline with the absence of obligations
- **C.** Stop maintaining the cryptographic inventory until a deadline appears
- **D.** Assume that every algorithm currently accepted will remain acceptable permanently

### Q596

- **Domain:** SCR
- **Subtopic:** regulatory-and-policy-scope
- **Subtopic name:** Regulatory and Policy Applicability
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A multinational group prepares one PQC compliance checklist for hospitals, payment services and telecom subsidiaries in several countries. What should it do before declaring the checklist legally sufficient?

- **A.** Assume that a technical standard overrides all local laws
- **B.** Map each requirement to the relevant entity, jurisdiction, sector, document status and evidence obligation
- **C.** Apply the earliest date mentioned anywhere to every subsidiary
- **D.** Replace all jurisdictional analysis with a vendor certificate

### Q097

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** date_recall, policy_interpretation

What is correct about the year 2035 mentioned in NIST migration guidance?

- **A.** It is a migration target in the context of the document, not a certain prediction of when a CRQC will arrive
- **B.** It is the day when all AES will stop working
- **C.** It is a proven date for breaking all RSA
- **D.** It is the start date for all migration programs

### Q451

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Foundational
- **Tags:** date_recall, policy_interpretation

A UK critical-infrastructure operator is briefing its board on the NCSC's March 2025 migration roadmap. Which sequence correctly pairs the three indicative milestones with their intended outcomes?

- **A.** 2028: discovery, assessment and an initial plan; 2031: priority migrations and a refined plan; 2035: migration complete, with a difficult technology tail possible.
- **B.** 2028: inventory only; 2031: initial migration plan and first pilots; 2035: highest-priority migration, with general completion deferred.
- **C.** 2028: discovery and initial plan; 2031: complete all key-establishment migration; 2035: complete signatures, with priority determined solely by primitive.
- **D.** 2028: initial plan; 2031: complete all infrastructure migration; 2035: review exceptions and retain remaining classical systems without a retirement plan.

### Q452

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A UK company reports in 2028 that it purchased a post-quantum cryptography library, but has not inventoried its cryptographic use, assessed risks or dependencies, or drafted a migration plan. How should its progress be judged against the NCSC's March 2025 roadmap?

- **A.** The milestone is unmet: the organization still needs discovery, risk and dependency assessment, and an initial plan.
- **B.** Purchasing the library meets the milestone if the organization has selected a supported PQC algorithm.
- **C.** The organization should wait for the 2031 priority-migration target before assessing cryptographic use.
- **D.** The milestone is met once the library has been tested in a production-like environment, even without a migration plan.

### Q453

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

In 2027, a UK organization plans to postpone cryptographic discovery until 2031, arguing that the NCSC milestone is when it should first identify high-priority systems. What is the best correction?

- **A.** Begin discovery and assessment now so they can guide priority migrations and a refined plan by 2031.
- **B.** Wait until 2031 to discover systems, then select priorities using the refined plan.
- **C.** Migrate the highest-priority systems first, then inventory their dependencies during rollout, using implementation work to reveal the estate.
- **D.** Use 2031 as the expected year when quantum computers will make current cryptography unsafe.

### Q454

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A board member says the NCSC's March 2025 roadmap proves a cryptographically relevant quantum computer will arrive in 2035. Which interpretation of the roadmap's 2035 target is most accurate?

- **A.** It establishes a legal deadline for every organization to remove all classical cryptography by 2035.
- **B.** It marks the point by which discovery and assessment should first be completed.
- **C.** It is an indicative migration-completion target, with difficult technologies potentially extending beyond it.
- **D.** It is a forecast that a cryptographically relevant quantum computer will arrive by the end of 2035.

### Q456

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Foundational
- **Tags:** date_recall

A policy analyst is tracing the EU coordinated PQC roadmap's publication history. Which sequence is supported by the European Commission's publication history?

- **A.** The coordinated roadmap appeared in April 2024, followed by the Commission Recommendation in June 2025.
- **B.** The recommendation and roadmap were published together in April 2024.
- **C.** The Commission Recommendation and the coordinated roadmap were both published in June 2025.
- **D.** The Commission Recommendation came in April 2024, followed by the coordinated roadmap in June 2025.

### Q457

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

An EU-based organization reads the coordinated roadmap and schedules its entire enterprise migration to be finished by the end of 2026. What does the roadmap actually say about that date?

- **A.** The end of 2026 is the deadline to replace classical signatures across the EU.
- **B.** Member States should begin transitioning by the end of 2026; the date does not require enterprise-wide completion by then.
- **C.** Private organizations should finish migration by end 2026, while Member States may begin later under their national implementation plans.
- **D.** Member States should complete all high-risk and low-risk migrations by the end of 2026.

### Q458

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A public-sector planner must prioritize EU roadmap work in a portfolio containing high-risk and low-risk systems. Which approach best reflects the June 2025 coordinated roadmap?

- **A.** Start high-risk transition work by end 2030, with completion left to each Member State.
- **B.** Finish low-risk systems by end 2030, then begin high-risk transitions as soon as resources allow.
- **C.** Complete the transition of high-risk use cases as soon as possible and no later than the end of 2030.
- **D.** Complete all use cases by the end of 2026, using 2030 only for post-migration review.

### Q460

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

A cross-border operator is preparing one migration plan for EU and UK operations. Its executive dashboard proposes a single high-risk deadline of 2030 for both jurisdictions. What is the best way to represent the source milestones?

- **A.** Use 2030 for both jurisdictions because EU recommendations also govern UK operations.
- **B.** Keep the targets distinct: EU high-risk use cases by end 2030; UK highest-priority early migrations by 2031.
- **C.** Use 2031 for both jurisdictions because the later UK target supersedes the EU roadmap and provides a consistent cross-border deadline.
- **D.** Average the dates into one 2030.5 deadline for the combined enterprise plan.

### Q462

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** policy_interpretation

A standards team is interpreting the proposed IR 8547 transition table for quantum-vulnerable public-key algorithms at 112-bit classical security. Which statement preserves the draft's distinction between its two status dates?

- **A.** The draft proposes disallowance after 2030 and deprecation after 2035 for that category.
- **B.** It gives 2030 as the sole cutoff, using deprecation and disallowance interchangeably.
- **C.** It proposes deprecation after 2035, with disallowance beginning immediately after 2030.
- **D.** For the 112-bit classical public-key category, the draft proposes deprecation after 2030 and disallowance after 2035.

### Q463

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation

A vendor argues that an RSA or ECC public key at 128-bit or greater classical security escapes the proposed IR 8547 post-2035 transition because it is stronger than the 112-bit category. What does the draft table indicate?

- **A.** The draft also proposes disallowance after 2035 for quantum-vulnerable public-key algorithms at 128-bit or greater classical security.
- **B.** Raising RSA or ECC strength removes the quantum vulnerability, so the proposed dates do not apply to systems using larger key sizes and parameters.
- **C.** The table includes only 112-bit public-key algorithms; higher-strength RSA and ECC are exempt.
- **D.** The 128-bit-or-greater category is treated like AES and has no proposed transition date.

### Q464

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation

An engineer copies the proposed IR 8547 public-key transition dates into a policy saying AES-128 will be disallowed after 2035. Which review finding is best supported by the initial public draft?

- **A.** The draft assigns AES-128 the same deprecation and disallowance dates as 112-bit public-key algorithms, because both have comparable classical strength.
- **B.** The public-key dates apply to AES-128 only when it is used for key establishment.
- **C.** All symmetric algorithms are listed for disallowance after 2035, regardless of strength.
- **D.** The table gives no separate AES-128/192/256 disallowance dates; its public-key transition dates should not be transferred to AES.

### Q465

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A project manager reads the draft IR 8547 status 'deprecated after 2030' for a public-key category and orders all uses removed immediately on 1 January 2031. What is the best assessment of that decision?

- **A.** It is correct only for symmetric encryption; public-key algorithms remain unaffected by the draft transition categories and their stated dates.
- **B.** It should instead remove all use immediately, since deprecation begins before 2030.
- **C.** It confuses deprecation with disallowance; the draft gives separate statuses and does not prescribe automatic removal of every use in 2031.
- **D.** It follows the draft exactly, which makes every use illegal on 1 January 2031.

### Q471

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation, date_recall

A federal agency is reviewing the directed OMB guidance described in EO 14412 Section 4(b). For high-value assets and high-impact systems outside National Security Systems, which dates apply to key establishment and signatures?

- **A.** Both controls by 31 December 2035 under an agency-wide schedule.
- **B.** Both key establishment and signatures by 31 December 2027.
- **C.** Key establishment by 31 December 2031 and signatures by 31 December 2030, preserving the agency's separate milestones for the two controls
- **D.** Key establishment by 31 December 2030 and signatures by 31 December 2031.

### Q473

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A federal agency has started technical migration work but has not assigned an accountable migration lead. Under EO 14412, which governance action is distinct from the later system-migration dates?

- **A.** Wait until the 2030 key-establishment milestone before assigning an accountable lead.
- **B.** Complete agency-wide PQC deployment within 30 days, then appoint a lead to maintain it and coordinate any remaining implementation work.
- **C.** Ask the FAR Council to select a technical migration lead for each agency.
- **D.** Assign an agency migration lead within 30 days, separately from the later system-migration dates.

### Q474

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A program report states that EO 14412 requires all federal systems to complete PQC migration by 31 December 2027. Which provision has likely been misread?

- **A.** Section 5(d) requires enterprise CBOM deployment across federal systems by 2027.
- **B.** Section 4(b) sets 2027 as the deadline for signatures on every federal system.
- **C.** Section 6(c) sets the final contractor-rule compliance date as 31 December 2027.
- **D.** Section 4(c) sets a deadline for completing a NIST pilot, not all federal migration.

### Q476

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A supplier claims that EO 14412 gives every enterprise a 270-day deadline to cut over production systems to PQC. Which order provision is the likely source of confusion?

- **A.** Section 5(d) gives CISA and NIST 270 days to publish public CBOM minimum-elements guidance, not to require enterprise cutover.
- **B.** Section 4(a) requires agencies to appoint migration leads within 270 days.
- **C.** Section 4(b) gives agencies 270 days to complete migration of all enterprise systems, including their production services and suppliers.
- **D.** Section 6(c) requires contractors to deploy CBOMs in production within 270 days.

### Q478

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** policy_interpretation, date_recall

A report explicitly asks what the NSA article summary dated 1 October 2026 says about commercial NSS support for CNSA 2.0. Which answer accurately states that summary without claiming it reproduces the full policy schedule?

- **A.** New commercial NSS must support CNSA 2.0 by 2027, with legacy phase-out by 2030, as summarized in that article.
- **B.** New commercial NSS support for CNSA 2.0 is due by 2030, with legacy phase-out by 2035, according to that summary.
- **C.** All existing and new NSS must complete migration by 2027; the 2030 date applies exclusively to non-NSS federal systems.
- **D.** The 2027 date is only a research target; 2030 starts voluntary new procurement adoption without requiring a legacy phase-out.

### Q481

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, policy_interpretation

A German operator is planning to apply the BSI recommendation announced on 11 February 2026 to a highly sensitive application that uses standalone classical asymmetric encryption. Which timing statement matches BSI's February 2026 announcement?

- **A.** Standalone classical asymmetric encryption should end by end 2030 for all uses, with no separate sensitivity distinction in the recommendation.
- **B.** All classical and symmetric encryption, including AES, should be discontinued by end 2031.
- **C.** Standalone classical asymmetric encryption should not be used alone after end 2031; highly sensitive applications are targeted by end 2030.
- **D.** The recommendation concerns standalone classical signatures by end 2031 and leaves asymmetric encryption unrestricted.

### Q482

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A compliance analyst applies the BSI's end-2031 standalone classical asymmetric encryption recommendation to standalone classical signatures as well. What distinction should the analyst preserve?

- **A.** The end-2035 phase-out applies to AES, while classical signatures have no separate target.
- **B.** The BSI recommendation excludes signature migration and addresses encryption only.
- **C.** Standalone classical signatures and asymmetric encryption share the end-2031 date.
- **D.** Standalone classical signatures are planned for phase-out by end 2035, distinct from the encryption recommendation.

### Q484

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A French procurement report says ANSSI requires all French companies to complete PQC migration in 2027. Which statement more accurately reflects the ANSSI guidance in the cited guidance?

- **A.** Organizations should postpone inventory and critical-use assessment until after 2030.
- **B.** The target requires all EU high-risk use cases to finish qualification in 2027.
- **C.** The 2027 target concerns PQC requirements for products entering qualification, not completed migration by every French company.
- **D.** All installed products and business systems must complete migration by the start of 2027, so organizations should treat it as a general deadline.

### Q496

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A national regulator's briefing says NIS2 required every covered entity to complete PQC migration by 17 October 2024. Which date interpretation is supported by the directive notes?

- **A.** Both dates are EU roadmap milestones for starting high-risk migration.
- **B.** Member States had to adopt and publish transposition measures by 17 October 2024, applying from 18 October; neither date is a PQC completion deadline.
- **C.** The directive applies from 17 October 2030, with national transposition due the following day, so covered entities receive a later migration schedule by default.
- **D.** Covered entities had to finish PQC migration by 17 October and deploy it from 18 October.

### Q497

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A financial entity's project plan uses 17 January 2025 as its mandatory PQC completion date because DORA began applying then. Which statement correctly identifies the date's significance?

- **A.** DORA applies from 17 January 2025 to non-financial suppliers, not financial entities, setting the start date for supplier PQC obligations.
- **B.** The date marks the EU roadmap deadline for Member States to complete transition.
- **C.** DORA requires all financial-sector algorithms to change to PQC on 17 January 2025.
- **D.** DORA, Regulation 2022/2554, applies to the financial sector from 17 January 2025; that date is not a PQC deadline.

### Q499

- **Domain:** SCR
- **Subtopic:** roadmaps-and-dates
- **Subtopic name:** Roadmaps, Transition Milestones and Dates
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A payment provider cites 31 March 2025 as the PCI DSS deadline for completing PQC migration across payment infrastructure. What does PCI SSC's explanation say became effective on that date?

- **A.** PCI DSS v4.0.1 became a general statute requiring every organization to deploy ML-KEM by that date across payment and non-payment systems.
- **B.** The date ended the EU high-risk-use-case transition period for payment providers.
- **C.** All payment networks had to replace RSA and ECC with PQC by 31 March 2025.
- **D.** The 51 future-dated requirements in PCI DSS v4.x became effective; this was not a payment-sector PQC deadline.

### Q487

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Foundational
- **Tags:** conceptual

A consultant presents the familiar five-function version of the NIST Cybersecurity Framework as the full CSF 2.0 function set. Which correction is accurate?

- **A.** CSF 2.0 has six concurrent functions: Govern, Identify, Protect, Detect, Respond and Recover.
- **B.** CSF 2.0 defines six cryptographic categories for algorithm validation.
- **C.** CSF 2.0 replaces Protect and Identify with a single Migrate function.
- **D.** CSF 2.0 has five functions; Govern is an optional maturity tier rather than a function, so the familiar list remains complete.

### Q488

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A security team is using CSF 2.0 to establish PQC program ownership. Its draft puts supplier contracts, policy approval and executive accountability under Detect because the team monitors network traffic. Where do these responsibilities fit best?

- **A.** Govern, which addresses strategy, policy, accountability and supply-chain risk.
- **B.** Detect, because executive sponsorship is primarily a form of network monitoring.
- **C.** Recover, because accountability and supplier requirements begin after an incident.
- **D.** Protect, because supplier contracts and policy approval are technical safeguards only.

### Q489

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

An auditor sees a CSF 2.0 Current Profile and Target Profile and concludes that a vendor's PQC product has been independently certified. What is the correct interpretation of those profiles?

- **A.** They confirm that the vendor's cryptographic module has CMVP validation.
- **B.** They support gap-based planning between current and desired organizational outcomes; they do not validate a product implementation.
- **C.** They are product certificates confirming that each listed PQC implementation has passed NIST validation and can be deployed across the organization.
- **D.** They measure algorithm strength and replace the need for asset discovery.

### Q490

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, policy_interpretation

A program manager reports that a CSF Tier of Adaptive means the organization's cryptography has the highest quantum-security category. Which correction is accurate?

- **A.** A CSF Tier certifies that the organization's products have passed CMVP.
- **B.** CSF Tiers describe risk-management rigor, from Partial through Adaptive, rather than cryptographic strength.
- **C.** The Tiers rank algorithms by key size and signature length.
- **D.** Adaptive is a cryptographic security category assigned to the strongest ML-KEM parameter set.

### Q589

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A SaaS customer is planning a cryptographic migration. Which contract discussion best reflects cloud-specific security responsibilities?

- **A.** Assuming that the provider owns every security task because it hosts the infrastructure
- **B.** Assuming that the customer can change all provider-managed cryptographic components
- **C.** Replacing responsibility allocation with a general “quantum-safe” statement
- **D.** Clarifying responsibility for managed encryption, customer-controlled keys, configuration changes, evidence and service-exit arrangements

### Q593

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** conceptual

How can a sector-specific Community Profile help an organization using NIST CSF 2.0?

- **A.** It establishes a new NIST algorithm security category
- **B.** It guarantees that every supplier is PQC-ready
- **C.** It replaces the organization's need to consider its own risks
- **D.** It can provide a sector-relevant baseline of outcomes from which the organization develops its own profile

### Q594

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A PQC program uses a CSF Target Profile. Which supporting evidence best demonstrates movement toward its selected outcomes?

- **A.** Traceable inventory improvements, completed remediation actions and test evidence mapped to those outcomes
- **B.** The existence of the Target Profile alone
- **C.** A supplier's unqualified use of the phrase “quantum-proof”
- **D.** The number of algorithm names in a presentation

### Q595

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A program schedules the six CSF 2.0 Functions as a one-time sequence, allowing governance to stop before protection and detection begin. What is the better interpretation?

- **A.** Only Recover must operate continuously
- **B.** Every organization must finish one Function permanently before starting the next
- **C.** The Functions are related and should be addressed concurrently, with activities operating continuously or when needed
- **D.** Govern applies only after an incident

### Q600

- **Domain:** SCR
- **Subtopic:** frameworks-and-controls
- **Subtopic name:** Risk Frameworks and Control Guidance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Which row design is most useful in a sector-specific PQC compliance matrix?

- **A.** Organization name, preferred algorithm and an unsupported universal deadline
- **B.** Applicable source and version, legal or advisory status, affected systems, required outcome, responsible owner and verification evidence
- **C.** A list of standards without applicability or ownership
- **D.** A single “compliant/noncompliant” flag based only on whether ML-KEM appears in a product brochure

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

What is a benefit of centralized cryptographic policy management?

- **A.** The ability to forgo client testing because the profile is defined centrally
- **B.** Consistency in profile selection and controlled change
- **C.** Proof that every product enforces the requirements as soon as the policy document is published
- **D.** Less need to document exceptions because, in principle, the policy applies to everyone

### Q130

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** conceptual

What is an accurate management message about PQC?

- **A.** Declare the entire organization ready after choosing an algorithm, even without measuring its use
- **B.** Wait until all standardization processes are complete before discovering assets and planning for vendors
- **C.** Plan a uniform replacement based on a certain CRQC date instead of analyzing risk and dependencies
- **D.** Begin a documented, phased, risk-based transition without promising a CRQC date

### Q250

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** conceptual

What is suitable content for an organizational PQC communication plan?

- **A.** An announcement that the algorithm selection is complete, without describing the impact on system owners
- **B.** Roles, expected changes, testing, and a process for handling exceptions
- **C.** An instruction that all teams perform the same migration immediately without checking dependencies and exceptions
- **D.** A promise that there will be no operational changes before compatibility testing has been performed

### Q301

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A global company has no PQC sponsor, agreed scope, or asset owners. During the first 30 days, leadership wants a credible program start without delaying useful work. What is the best initial action?

- **A.** Ask infrastructure teams to identify easily changed systems and use those as the initial program scope.
- **B.** Begin with an accountable cross-functional mandate and scoped discovery of high-value services, data, and dependencies.
- **C.** Commission a complete inventory before assigning owners or selecting any near-term priorities.
- **D.** Set a provisional enterprise-wide target, then defer discovery until every business unit can participate, so the plan starts with consistent coverage.

### Q325

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A business owner and security lead disagree about who may accept the residual risk of retaining a classical path. The technical team has documented the path and proposed controls, but no authorized decision has been made. What should happen next?

- **A.** Escalate a documented decision to the authorized risk owner, including controls and an expiry.
- **B.** Remove the path immediately without considering service continuity or recovery requirements.
- **C.** Continue the classical path while the business owner and security lead resolve their disagreement.
- **D.** Ask the engineering team to accept the risk because it understands the implementation and controls.

### Q338

- **Domain:** MIG
- **Subtopic:** program-governance
- **Subtopic name:** Program Launch, Ownership and Governance
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A CISO asks for a business case before approving migration funding. Quantum attack timing is uncertain, and the inventory has gaps. Which presentation best supports a sound decision?

- **A.** Present a predicted quantum-arrival date and use it as the primary basis for the funding request, giving leadership a clear decision horizon.
- **B.** Propose an enterprise-wide rewrite before identifying the services and dependencies in scope.
- **C.** List the algorithms in use and request funding to replace each one across the enterprise.
- **D.** Explain affected assets and data, inventory gaps, dependencies, costs, milestones, and uncertainty.

### Q030

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

Why is the finding “RSA is present in the library” not equivalent to proof that it is used at runtime?

- **A.** Providing a capability and using it in practice are different things
- **B.** The library name is sufficient to know exactly which parameters are selected in production
- **C.** The presence of code cannot provide any indication of a cryptographic dependency
- **D.** Every algorithm provided by a library is necessarily activated in every application that uses it

### Q052

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What should you do if a scan finds no cryptography in an application?

- **A.** Mark it PQC-ready by default when no algorithm is found in a single scan
- **B.** Assume that every cryptographic use would appear in the service's public certificate
- **C.** Check coverage, discovery methods, and dependencies before drawing a conclusion
- **D.** Conclude that the application does not use cryptography if a network scanner finds no TLS

### Q058

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What should you do when information about an asset's cryptographic use is not yet available?

- **A.** Mark the uncertainty and perform targeted discovery
- **B.** Count the asset as resistant so the lack of information does not affect progress percentages
- **C.** Infer readiness from the server's age and complete the record without evidence
- **D.** Mark it as having no cryptographic dependency as long as the scan returned no finding

### Q063

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

What is an appropriate use of a CBOM in CI/CD?

- **A.** Create a CBOM only once and use it as evidence for all future product versions
- **B.** Block every build containing the word RSA without determining whether the code is active and what its role is
- **C.** Automatically approve every build that installs a library offering at least one PQC algorithm
- **D.** Detect cryptographic and dependency changes in every version

### Q073

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

What is correct about updating the inventory after deployment?

- **A.** Freeze the records after the pilot and rely on a one-time report until the next upgrade
- **B.** Update only the number of assets, without changing parameters or evidence of use
- **C.** Maintain it throughout the system's life
- **D.** Keep only records that have been migrated and exclude exceptions from program metrics

### Q127

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Foundational
- **Tags:** conceptual

After appointing a team and approving the scope of a PQC program, what is a basic step in technical planning?

- **A.** Announce a uniform completion date without checking migration timelines
- **B.** Replace all organizational certificates before investigating key uses
- **C.** Select a target algorithm and commit to procurement before mapping dependencies
- **D.** Discover and inventory cryptographic uses

### Q141

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

What is a risk-management mistake when focusing only on TLS traffic?

- **A.** Other uses may be missed, including code signing, SSH, VPN, email, and storage keys
- **B.** TLS does not use cryptography
- **C.** Internal traffic is never relevant
- **D.** All other uses are already PQC by definition

### Q151

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

Why does updating a single library not prove that all applications have migrated?

- **A.** Applications may use different copies, versions, or paths
- **B.** The state of the clients can be inferred from the server's ability to generate a new key
- **C.** The update proves that all applications have migrated as long as the shared package name is identical
- **D.** Loading the library proves that every connection uses the strongest profile it supports

### Q164

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Why does a proxy that supports PQC not necessarily fix an old firmware signature on a device?

- **A.** Because upgrading all TLS traffic automatically changes the device's trust anchor as well
- **B.** Because a gateway can protect only confidentiality and can never perform authentication
- **C.** It handles a communications path and does not necessarily handle the firmware trust mechanism
- **D.** Because every firmware signature must be implemented using QKD

### Q167

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

Why should code signing and Secure Boot be included in the migration map?

- **A.** Because migrating TLS automatically changes all update signatures as well
- **B.** Because every existing Secure Boot mechanism is already based on a resistant signature
- **C.** Because a PQC signature also replaces boot verification and file permissions
- **D.** They rely on cryptography to establish trust in software

### Q168

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

Why is it desirable to document symmetric uses in a PQC inventory as well?

- **A.** Because every AES encryption must be replaced with a PQC signature before migration is possible
- **B.** Because the number of bits in a symmetric key makes it possible to infer the strength of the entire protection chain
- **C.** They are part of the protection chain and the context for keys and data
- **D.** Because every use of a hash is vulnerable to Shor's algorithm exactly like RSA and ECDH

### Q193

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

What is an appropriate use of automation in a PQC program?

- **A.** Automatically approve every unidentified record to avoid migration delays
- **B.** Repeated discovery, policy checks, and change detection with oversight
- **C.** Replace configuration and runtime checks with capability statements from product catalogs
- **D.** Apply blanket remediation based on an algorithm name without determining its role or dependency

### Q230

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

How can cryptographic discovery be improved in a complex enterprise network?

- **A.** Rely on the capabilities of the installed library instead of checking runtime usage
- **B.** Rely on a comprehensive external scan and apply its conclusions to every application
- **C.** Combine network, code, asset, and configuration evidence within the authorized scope
- **D.** Collect only active certificates and assume they also represent stored keys

### Q240

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

Why is a certificate list alone not a complete cryptographic inventory?

- **A.** It may miss code, protocols, keys, and dependencies that are not represented by certificates
- **B.** It should be replaced by an operating-system version list without details of usage
- **C.** It is complete as long as every certificate lists some signature algorithm
- **D.** A certificate list is sufficient if all certificates were collected from active external servers

### Q263

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What does a business owner add to a cryptographic asset record?

- **A.** Proof that the cryptography meets all requirements once the asset owner approves it
- **B.** Authorization to waive exposure measurement if the implementation is very important to the business
- **C.** Responsibility for prioritization, change approval, and remediation
- **D.** The ability to transfer all implementation responsibility from system owners to the procurement team

### Q269

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

What should a key inventory include without turning it into a repository of secrets?

- **A.** Public certificates only, omitting keys that are not part of PKI
- **B.** Type, owner, use, algorithm, and lifecycle status
- **C.** Type, owner, and the full private key so each record can be validated
- **D.** Algorithm and date only, without associating it with a service, to reduce documentation overhead

### Q275

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Foundational
- **Tags:** conceptual

What is a CBOM?

- **A.** A certification report proving quantum resistance of every component in an organization
- **B.** A list of software components and versions only, without cryptographic details
- **C.** A central repository of private key material for strength scanning
- **D.** A structured description of cryptographic assets and their dependencies

### Q310

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A security team has no approved production scanner, but needs an initial view of cryptographic use. The network owner requires change approval for active scans. What is the best next step?

- **A.** Ask each service owner to report its configuration without independently checking the results.
- **B.** Begin scoped passive and configuration-based discovery, and seek approval before any active testing.
- **C.** Run an active scan from an administrator workstation, limiting its rate and target range to reduce operational risk while obtaining timely evidence.
- **D.** Wait until an approved production scanner is available before starting discovery.

### Q311

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A network scan identifies a public load balancer using a modern key-establishment profile. The application behind it also has service-to-service connections and stored credentials, none visible to the scan. What should the inventory team do next?

- **A.** Enrich discovery with backend trust relationships and stored-key protection, and document the scan's visibility limits.
- **B.** Record the load balancer's profile and treat it as representative of application traffic unless failures are reported, keeping discovery proportionate.
- **C.** Replace the load balancer before collecting further evidence about the application.
- **D.** Infer backend configuration from the public listener and verify it during a later migration test.

### Q323

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A passive monitor has not observed cryptographic traffic from a backup job, but the job runs only once each month and has not run during the observation period. What should the team do?

- **A.** Use configuration or code evidence and schedule authorized observation when the monthly job runs.
- **B.** Record no cryptographic use because the monitor observed none during its collection period.
- **C.** Treat the job as compliant unless a later monitoring alert identifies a problem.
- **D.** Extend passive monitoring until it captures at least one run, then use that observation as the sole evidence for the job's cryptographic behavior.

### Q324

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An inventory export includes private keys alongside algorithm names and system owners. The inventory is shared with a broad planning group. What corrective action is appropriate?

- **A.** Delete the inventory because recording cryptographic information creates unacceptable exposure.
- **B.** Remove private keys from the export and retain safe metadata such as identifiers, owners, parameters, and lifecycle details.
- **C.** Keep the keys in the spreadsheet and restrict access with a shared password.
- **D.** Move the keys to a second file and distribute it only to service owners.

### Q327

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An acquired business has an estate with unknown cryptographic owners, dependencies, and software versions. Integration leadership wants to standardize its platforms quickly. What is the better migration approach?

- **A.** Include ownership, discovery, versions, and dependencies in due diligence and the integration plan before sequencing changes.
- **B.** Keep the acquired estate outside the migration program until all platforms have been replaced.
- **C.** Standardize cryptographic components immediately, then investigate dependencies reported after integration, using the common platform as the migration baseline.
- **D.** Treat familiar algorithm names as sufficient evidence that acquired systems will interoperate.

### Q343

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A service team updates the desktop configuration to a new cryptographic profile. Its mobile agent embeds a separate older library, and the team has not measured how many users still run that agent. What should happen before declaring the service migrated?

- **A.** Assess client versions and populations, including the embedded mobile library and actual negotiated behavior.
- **B.** Update the inventory entry and treat unreported mobile clients as using the new profile.
- **C.** Declare completion based on the desktop configuration, which represents the supported service profile and can guide users toward updated clients.
- **D.** Assume mobile agents inherit the desktop configuration unless users report connection failures.

### Q522

- **Domain:** MIG
- **Subtopic:** discovery-inventory-and-cbom
- **Subtopic name:** Discovery, Inventory and CBOM
- **Difficulty:** Applied
- **Tags:** conceptual

How does a cryptographic bill of materials differ from a software bill of materials?

- **A.** A cryptographic bill replaces the software bill and makes it obsolete
- **B.** A cryptographic bill covers only firmware and ignores software components
- **C.** A software bill lists components; a cryptographic bill records the algorithms, parameters, and cryptographic dependencies, which the software list does not provide by itself
- **D.** A software bill stores private keys, and a cryptographic bill stores only the transport protocol

### Q019

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** conceptual

Which workflow is the most reasonable?

- **A.** Discovery, risk assessment, planning, pilot, deployment, and verification
- **B.** Select a vendor, declare readiness, and perform discovery only on assets that report problems
- **C.** Select an algorithm, deploy it across the organization, and then map issues and dependencies
- **D.** Replace all certificates, close the project, and then assess business impact

### Q098

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What information is needed to prioritize migration beyond the algorithm name?

- **A.** The NIST category level of the alternative only, without migration time or business context
- **B.** The number of certificates in each system, with every certificate counted as having the same impact
- **C.** Sensitivity, protection lifetime, exposure, dependencies, and remediation time
- **D.** The software's last update date as a substitute for mapping data lifetimes and dependencies

### Q111

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** conceptual

Why should “risk severity” be separated from “ease of remediation”?

- **A.** An easy solution does not necessarily address the most significant risk
- **B.** So that systems that are difficult to migrate can be marked as low-risk until the vendor is ready
- **C.** So that easy fixes always take priority even when critical assets will exceed the threat horizon
- **D.** So that low cost becomes the sole metric and business impact is excluded from prioritization

### Q114

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

One system can be migrated quickly but does not protect important information. Another is critical but complex. What is reasonable?

- **A.** Always prioritize the easy system, even if the critical system's migration time exceeds the threat horizon
- **B.** Address only the critical system and avoid any other changes until it is fully completed
- **C.** Advance quick wins without postponing early planning for the critical system
- **D.** Prioritize based only on licensing cost and ignore information lifetime and exposure

### Q125

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An OT device will remain in the field for 20 years and authenticates updates using RSA, which cannot be replaced in software. What raises its priority?

- **A.** The absence of a permanent internet connection, which allows the device to be excluded from the migration plan
- **B.** Long service life and a limited upgrade path
- **C.** The presence of AES encryption in transit, which makes update-signature remediation unnecessary
- **D.** The validity period of the management interface's HTTPS certificate alone, without checking update trust

### Q303

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Two systems protect information of equal sensitivity and lifetime. One migration is estimated to take four years because of hardware and supplier dependencies; the other can be completed in three months. Which planning decision best reflects migration risk?

- **A.** Prioritize work on the four-year dependency while planning the three-month migration as an early result.
- **B.** Assess both systems equally because their sensitivity and protection lifetimes match, and avoid letting implementation difficulty influence risk sequencing.
- **C.** Start the shorter migration first and reassess the longer dependency chain after it is complete.
- **D.** Defer sequencing until quantum threat estimates can distinguish the systems more precisely.

### Q307

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A funded root-CA and HSM upgrade is a prerequisite for migrating 40 dependent services. A separate leaf service can also be converted now, and both candidates have been risk-assessed. What should the program prioritize?

- **A.** Convert the isolated leaf service first, since direct production changes provide the clearest evidence of progress.
- **B.** Wait until all 40 services can move in a single coordinated release.
- **C.** Choose the project with the simpler validation plan, then revisit the shared dependency.
- **D.** Prioritize the root-CA and HSM upgrade because it enables migrations for 40 dependent services.

### Q313

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A database payload is encrypted with AES-256, while its data-encryption key is wrapped using RSA-2048. The migration team wants to reduce quantum-related exposure without re-encrypting all payloads. Which dependency should it target first?

- **A.** Retain RSA wrapping because AES-256 already protects the database payload.
- **B.** Replace AES-256 with ML-KEM so that both the data and its key use post-quantum encryption, addressing the database cryptography in one change.
- **C.** Increase the AES key size and keep the existing RSA-wrapped data key.
- **D.** Migrate the RSA key-wrapping dependency while maintaining appropriate controls for the data-encryption key and payload.

### Q328

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A set of confidential records is scheduled for ten-year retention and is also subject to a legal hold. A migration team proposes lowering its priority because it expects to purge the data soon. What should the team do?

- **A.** Assume permanent confidentiality is required for every record subject to a legal hold.
- **B.** Use the planned purge date to lower priority, and revisit the records if the legal hold changes.
- **C.** Delete the records now so their protection lifetime no longer affects migration priority.
- **D.** Reassess classification, approved retention, and legal constraints before estimating the required confidentiality period.

### Q337

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A funding decision pits a quick, low-risk migration against a slower, high-risk core dependency. Leadership wants visible near-term progress without neglecting the critical path. What is the best portfolio approach?

- **A.** Fund early wins alongside the high-risk critical path and its enabling dependencies.
- **B.** Fund only the quick migration because visible completions are the most reliable portfolio measure.
- **C.** Choose the project with the lowest engineering estimate, regardless of its risk contribution.
- **D.** Reserve all funding for the core dependency and postpone smaller migrations until it is complete.

### Q339

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

Two services have equal data-protection lifetimes and estimated migration durations. One is a public endpoint; the other is fully isolated behind controls. Their cryptographic algorithms are the same. What should determine their relative priority?

- **A.** Prioritize the public endpoint without further analysis because it is reachable from outside.
- **B.** Rank the services equally because their algorithms, data lifetimes, and migration durations are the same.
- **C.** Consider exposure, threat conditions, existing controls, and other relevant risks in addition to lifetime and effort.
- **D.** Prioritize the isolated service because internal systems should generally migrate before public endpoints, applying a consistent rule across the estate.

### Q348

- **Domain:** MIG
- **Subtopic:** prioritization-and-planning
- **Subtopic name:** Risk-Based Prioritization and Planning
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A data owner's requirement for a record set changes from one year of confidentiality to 15 years. The migration team has already ranked its systems using the original lifetime. What should it do?

- **A.** Lower priority because the longer confidentiality period makes migration timing less predictable.
- **B.** Keep the approved ranking because changing protection requirements should not alter an active roadmap.
- **C.** Reassess data risk and the migration roadmap using the new lifetime and affected dependencies.
- **D.** Update the retention label and defer cryptographic path review until the next planning cycle.

### Q017

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What should be done when a system depends on an external partner that does not yet support the new profile?

- **A.** Coordinate the migration and testing with the partner and manage an approved temporary path
- **B.** Allow an undocumented fallback for all partners instead of coordinating capabilities and timelines
- **C.** Change the profile on our side and consider the service migrated even though the partner is disconnected
- **D.** Delay the entire organizational PQC program until all partners have completed theirs

### Q041

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** conceptual

What should be asked about data transferred to a business partner?

- **A.** Only whether the partner's browser offers PQC, without checking the actual data flow
- **B.** Only whether the partner encrypted its disk, without asking about links and key protection
- **C.** How the data is protected both in transit and in systems under the partner's responsibility
- **D.** Only whether the partner's email signature mentions compliance with any standard

### Q043

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** conceptual

What is true about relying on SaaS in a PQC program?

- **A.** There is no need to include a cloud service in the organization's inventory because the servers are not owned by us
- **B.** The SaaS provider's external HTTPS protection proves that storage, signatures, and internal links have also been migrated
- **C.** A SaaS provider's statement is sufficient to close all cryptography findings related to the service
- **D.** Responsibility requires investigating the provider and understanding the boundaries of protection

### Q055

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

How should HSMs be handled in a PQC program?

- **A.** Move signing to software without examining the change to key protection and the scope of the validation
- **B.** Assume that updating the application library automatically adds support inside the HSM
- **C.** Check algorithms, firmware, interfaces, capacity, and validation scope
- **D.** Rely on any FIPS certification from the vendor without checking the version or algorithms

### Q082

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Why does a vendor without a support date or upgrade path increase risk?

- **A.** The lack of a support date reduces risk because it prevents migration too early
- **B.** It adds uncertainty about migration time and dependencies
- **C.** A general roadmap is sufficient for planning migration time even without a version, scope, or date
- **D.** A long hardware warranty proves that the product will receive all cryptographic upgrades

### Q121

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is a risk of procuring a long-lifecycle system without PQC clauses?

- **A.** Creating a new dependency that may be difficult and costly to migrate later
- **B.** Deferring investigation until the end of the system's life because the procurement date determines the risk
- **C.** Relying on current compliance approval to guarantee that the root of trust can be changed in the future
- **D.** Assuming that a long warranty period proves the hardware will support any future algorithm

### Q137

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Which vendor question is most useful to a migration program?

- **A.** Does the underlying library support PQC, without needing to determine whether the product enables it?
- **B.** In which version, for which protocols, and by what date will support be available and testable?
- **C.** Was one benchmark run in a lab, instead of requesting details about protocols and clients?
- **D.** Is the transition included in the general roadmap, even if there is no version or binding scope?

### Q248

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A supplier claims "PQC support." What is the most important risk question to ask?

- **A.** Whether a single demo was performed, instead of asking what is actually selected in production paths
- **B.** In which components, versions, and traffic paths the protection is actually active
- **C.** Whether the product name appears on a supplier list, without checking version and configuration
- **D.** Whether the library supports any algorithm, without needing to check the protocol

### Q262

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

How should PQC be incorporated into new procurement?

- **A.** Require support for one algorithm forever to avoid future testing costs
- **B.** Define capabilities, upgradeability, evidence, support, and lifecycle requirements
- **C.** Make procurement conditional on a high bit count alone, without checking protocols or upgradeability
- **D.** Require a “quantum-safe” declaration without specifying which components and paths it covers

### Q283

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is useful evidence for a supplier meeting?

- **A.** A list of our uses and versions, together with compatibility requirements and tests
- **B.** A statement that all systems are equally critical, without criteria or testing
- **C.** A list of algorithms supported by the supplier instead of documentation of our own uses
- **D.** A list of product names only, without versions, roles, or business dependencies

### Q308

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A procurement team is evaluating an appliance expected to remain in service for five years, with no planned upgrade. Which requirement best reduces the risk of buying a product that cannot participate in the organization's migration?

- **A.** Require a supported migration path, interoperable profiles, firmware support, and lifecycle commitments for the deployment.
- **B.** Accept a supplier's quantum-ready designation if the appliance meets current performance requirements.
- **C.** Compare current key sizes and select the appliance with the largest supported value.
- **D.** Require the supplier to certify that cryptographic updates will not be needed during the product's service life.

### Q309

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A software supplier says its product supports ML-KEM, but the fleet contains unknown software versions and configurations. What evidence should the organization request before recording the product as migrated?

- **A.** Use a supplier roadmap to infer which installed versions support the mechanism.
- **B.** Accept a source-code reference to ML-KEM as evidence of current fleet capability.
- **C.** Record support if the supplier's product documentation lists ML-KEM as available, since a documented product capability is a reasonable indicator of fleet readiness.
- **D.** Request deployed versions, profile limitations, and evidence of successful negotiation in the relevant configuration.

### Q326

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A SaaS provider controls the service's public TLS and managed PKI, while the customer operates custom connectors and data integrations. What should the customer obtain for migration planning?

- **A.** Rely on the provider to migrate the full service, including custom connectors and integrations, because those components connect to the SaaS platform.
- **B.** Obtain a scoped responsibility matrix, migration roadmap, and assurance evidence for provider functions and customer-managed connections.
- **C.** Accept a general quantum-readiness statement while the customer plans its connector changes.
- **D.** Request a list of provider algorithms and infer which customer connections they protect.

### Q332

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A planned 12-year hardware purchase has an immutable classical trust anchor in boot ROM, and the supplier offers only a software-library update. What should the buyer address before committing?

- **A.** Require a credible trust-anchor lifecycle or hardware replacement plan that addresses the immutable anchor.
- **B.** Disable signature verification after initial provisioning to avoid dependence on the old anchor.
- **C.** Accept the library update because the boot-ROM verification step is outside the application runtime.
- **D.** Ask the supplier to confirm quantum readiness for the product's full service life.

### Q336

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A supplier's promised migration feature is a critical dependency, but its delivery date has slipped beyond the program's planned milestone. The status report is due this week. What should the program do?

- **A.** Record the feature as delivered because the supplier has not withdrawn its commitment.
- **B.** Keep the milestone green while the supplier's original roadmap remains publicly available.
- **C.** Replan alternatives, escalate appropriately through contractual channels, and document any bounded risk acceptance.
- **D.** Remove the supplier dependency from the schedule and leave the target date unchanged.

### Q349

- **Domain:** MIG
- **Subtopic:** suppliers-and-procurement
- **Subtopic name:** Suppliers, Procurement and Shared Responsibilities
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A contract requires a supplier product to be 'quantum ready' but does not define the supported protocols, product versions, or acceptable fallback behavior. Before accepting delivery, what should the buyer require?

- **A.** Accept a demonstration on an unspecified version as representative of all deployed configurations.
- **B.** Accept the wording as sufficient and use the supplier's general product documentation as evidence, since the contract already requires quantum readiness.
- **C.** Require a quantum-ready label on the product page before approving delivery.
- **D.** Define measurable acceptance criteria for protocol support, negotiation, fallback tests, version scope, and deployment limitations.

### Q011

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

Which development choice contributes to crypto-agility?

- **A.** Dynamically selecting any algorithm requested by the other party, without an allowlist
- **B.** Copying the same cryptographic code into every application to avoid a shared dependency
- **C.** A defined cryptographic interface and a version policy that can be checked
- **D.** Fixing parameters in every application to avoid testing when policy changes

### Q032

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the purpose of crypto-agility in product design?

- **A.** To allow controlled replacement of algorithms and parameters
- **B.** To centralize all cryptography with a single vendor and provide no replacement path
- **C.** To allow free negotiation of any algorithm without requiring a policy
- **D.** To retain every old algorithm forever to ensure maximum compatibility

### Q034

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What is a Backwards-compatible migration according to the ETSI framework?

- **A.** Combining two secrets in every connection without allowing any classical-only use
- **B.** An upgraded system that continues to serve assets that have not been migrated
- **C.** A separate system for new customers without changing the original system
- **D.** Completely changing the asset while ending its ability to serve legacy customers

### Q157

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What is the main disadvantage of keeping both paths indefinitely?

- **A.** Maintaining two paths makes it possible to stop measuring use of the old protocol
- **B.** Operational complexity and continued exposure through the vulnerable path
- **C.** The old path becomes quantum-resistant merely because a new path exists
- **D.** Every connection automatically receives the strength of both paths, even if it selected only the old one

### Q175

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What is the conceptual advantage of crypto-agility?

- **A.** A guarantee that there will be no need to replace an algorithm
- **B.** Automatic selection of the shortest algorithm
- **C.** Eliminating the need for compatibility testing
- **D.** The ability to replace cryptography in a controlled way as requirements change

### Q197

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What characterizes pure migration compared with a backward-compatible approach?

- **A.** The migration does not preserve the old capability on the same asset
- **B.** It necessarily retains the legacy protocol to serve clients that have not been upgraded
- **C.** It always preserves compatibility with all asset dependencies without coordination
- **D.** It requires maintaining separate legacy infrastructure indefinitely

### Q202

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What is parallel migration?

- **A.** A single system that offers both an old and a new profile in the same service
- **B.** Running two algorithms inside one KEM without deploying an additional system
- **C.** Deploying a new system alongside the old one and migrating dependencies gradually
- **D.** A direct transition in which all clients must change at the same time

### Q231

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

Why is migrating only the browser-CDN link not necessarily the end of the work?

- **A.** Because browser-CDN protection automatically replaces code-signing keys
- **B.** Because every CDN service supports PQC in the same way on internal links too
- **C.** The CDN-Origin link or an internal dependency may remain vulnerable
- **D.** Because terminating TLS at the CDN guarantees that the link to the Origin does not need encryption

### Q242

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What is the risk of allowing every application unrestricted algorithm choice?

- **A.** It guarantees that every application will choose the strongest algorithm because the choice is dynamic
- **B.** It eliminates the need for version management because the algorithm is selected at runtime
- **C.** It makes backward compatibility safer without any need to protect negotiation
- **D.** Loss of policy control and the risk of an unsafe choice

### Q271

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What does a dependency graph add to a list of algorithms?

- **A.** A guarantee that every component can be upgraded independently even without checking communication protocols
- **B.** An understanding of which assets must change together and which are affected
- **C.** Proof that every algorithm provided by a library is actually activated in all dependent applications
- **D.** The ability to replace every owner record with the same library owner without checking business use

### Q274

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** conceptual

What should be checked before migrating a PKI?

- **A.** Issuers, trust chains, keys, clients, and renewal processes
- **B.** Only certificate expiration dates, without checking the capability to issue and verify under the new approach
- **C.** Only the end-entity certificate algorithm, because it does not depend on issuer-chain signatures
- **D.** Only the CA’s signing speed, assuming all clients will accept any new format

### Q291

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

When should parallel deployment be considered?

- **A.** When only one infrastructure may be operated and there is no way to run a new one alongside it
- **B.** When legacy shutdown is complete and all clients already support the same profile
- **C.** When changing a local constant is sufficient and there are no external dependencies
- **D.** When a gradual transition is needed, with separation between legacy and new populations

### Q305

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A safety-critical controller cannot be patched until its annual shutdown, which is 11 months away. Its vendor supports a gateway that can be upgraded now and segmented from other networks. What is the best interim plan?

- **A.** Upgrade the supported gateway and segment the controller, while planning an approved device change and tracking residual inner-link risk.
- **B.** Leave the controller connected as it is until the annual shutdown, then address all exposures together under the approved maintenance process.
- **C.** Use the gateway upgrade as evidence that every cryptographic hop to the controller is protected.
- **D.** Install an unapproved firmware image to remove the controller's remaining classical connection.

### Q306

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A legacy scheduling service is confirmed to retire in six months. It holds no long-lived confidential data, creates no lasting signature trust, and its owner has accepted the remaining risk through the organization's process. Which strategy is reasonable?

- **A.** Record the service as migrated once its planned retirement date appears in the inventory.
- **B.** Keep the service running after its scheduled retirement because accepted risk does not need further review.
- **C.** Use managed retirement, verify the end-of-life plan, and track accepted risk through decommissioning.
- **D.** Replace the service now, even if the rewrite is unlikely to finish before its planned retirement.

### Q330

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

Two independent teams are upgrading a message producer and consumer. Each plans a new serialization format, but neither has confirmed compatibility with the other's release. What is the best coordination step?

- **A.** Have the consumer reject existing messages as soon as its release is available.
- **B.** Coordinate format versions, dependencies, dual-read/write behavior, and a tested cutover sequence.
- **C.** Allow independent deployments because each team has verified its own new format, then resolve any interface differences through routine release support.
- **D.** Complete the consumer migration before testing producer compatibility.

### Q341

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A high-risk TLS service can migrate its key establishment now, but its PKI signing chain is not yet ready for a PQC transition. The program wants meaningful risk reduction without concealing the remaining gap. What is the best plan?

- **A.** Relax certificate validation during the transition so classical signatures do not block deployment, while the new key-establishment profile protects traffic.
- **B.** Wait until key establishment and every certificate signature can migrate in the same release.
- **C.** Stage the confidentiality improvement while documenting and managing the remaining classical authentication gap.
- **D.** Report full PQC protection once the new key-establishment profile is enabled.

### Q342

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A legacy application is unstable and unsupported, and modifying its cryptographic code would require extensive reverse engineering. A replacement platform is available, but it changes data formats and service dependencies. What is the sound migration choice?

- **A.** Update the documented algorithm name while retaining the existing runtime and interfaces.
- **B.** Replatform without compatibility testing, since the replacement removes the unsupported cryptographic code.
- **C.** Continue patching the unsupported application indefinitely to avoid changing its dependencies.
- **D.** Consider replatforming while testing data migration and dependent interfaces.

### Q494

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Advanced
- **Tags:** conceptual

An enterprise architect is comparing the migration types described in ETSI TR 104 016. Which description correctly distinguishes pure migration, parallel migration and backwards-compatible support?

- **A.** Pure and parallel both use one shared system; backwards-compatible avoids transition testing.
- **B.** Pure replaces the old approach directly; parallel runs a separate new system beside legacy; backwards-compatible support accommodates both, with possible downgrade risk.
- **C.** Pure retains classical systems permanently; parallel disables PQC during failures.
- **D.** Pure adds a new system beside legacy; parallel replaces the old approach; backwards-compatible removes support for older participants.

### Q510

- **Domain:** MIG
- **Subtopic:** strategies-and-dependencies
- **Subtopic name:** Migration Strategies, Dependencies and Crypto-Agility
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A legacy application fails to interoperate after algorithm-agility wrappers are introduced, and transactions time out intermittently. Which governance approach addresses that failure without dropping the security requirements?

- **A.** Use a modular cryptographic abstraction, centralized policy, automated algorithm negotiation, and fallback tests in a staging environment
- **B.** Disable algorithm validation in the middleware so availability takes priority over confidentiality
- **C.** Revert to hardcoded RSA until standards bodies declare quantum computers commercially mainstream
- **D.** Replace symmetric encryption keys daily by manual administration instead of automated rotation

### Q050

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

What should be defined in order to end support for a temporary classical path?

- **A.** Exit criteria, dependency readiness, and monitoring before blocking it
- **B.** A uniform end date without checking actual usage, to prevent discussion of exceptions
- **C.** Installing the new software alone, even when clients continue to connect using the old profile
- **D.** A vendor decision that the product supports PQC, without checking the organization's dependencies

### Q095

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What should be done with equipment that cannot be migrated before end of support?

- **A.** Only extend the RSA key and mark migration to a resistant algorithm as complete
- **B.** Plan a replacement or a compensating control with a documented exception and timeline
- **C.** Install a gateway and close all findings without checking what remains in the device
- **D.** Keep it active and assume that the warranty period also indicates PQC readiness

### Q124

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

What is the role of a rollback plan?

- **A.** To make successful installation the sole condition for proceeding, even if service is impaired
- **B.** To enable controlled recovery while managing the risk of reverting
- **C.** To return the entire system to the old path after any failure without measuring exposure
- **D.** To permanently permit classical profiles for every client to avoid failures

### Q174

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

What should be included in a temporary exception for a legacy system?

- **A.** Remove the asset from the readiness report instead of documenting the exposure and compensating controls
- **B.** Describe the issue and obtain the vendor's signature only, without a risk owner or exit plan
- **C.** The reason, risk owner, controls, reassessment date, and exit plan
- **D.** Temporary approval without an expiration date, as long as the system owner has reported operational difficulty

### Q200

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is a risk of silent fallback to a classical path when PQC fails?

- **A.** Unnoticed exposure contrary to the protection policy
- **B.** Fallback preserves quantum resistance if the original proposal included PQC
- **C.** The connection can be reported as PQC-protected if one of the parties was ready to use it
- **D.** Fallback is safe without monitoring as long as the symmetric encryption remains AES-256

### Q215

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is the risk of a wholesale replacement without transition testing?

- **A.** It removes supplier risk because backward compatibility is no longer needed
- **B.** It is guaranteed to reduce the attack surface even if clients stop being authenticated
- **C.** It is safe if the algorithm is standardized, regardless of the profile and implementation dependencies
- **D.** Damage to compatibility and business availability

### Q238

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** conceptual

What should be defined before a PQC pilot?

- **A.** Scope, assumptions, success criteria, measurements, and stop conditions
- **B.** Target algorithm, completion date, and the assumption that one latency measurement will suffice
- **C.** Server configuration only, with no need to define which clients and flows are tested
- **D.** Preferred supplier and desired outcome in advance, to prevent the pilot from taking too long

### Q288

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is correct about a transition “in waves”?

- **A.** Migrate each component as soon as a patch is available, without coordinating its impact on dependent clients
- **B.** Divide assets into groups according to risk, dependency, and readiness
- **C.** Always start with all external assets and defer internal dependencies, even if they block the transition
- **D.** Migrate assets in the order they were acquired, without checking which depend on one another

### Q296

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is a downgrade attack in a transition program?

- **A.** Forcing the use of a weaker mechanism despite support for a stronger one
- **B.** Replacing an expired certificate
- **C.** Legitimately reducing a file’s size after compression
- **D.** Using a higher security category

### Q316

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A production fleet includes legacy clients, proxies, and systems with limited rollback options. The program has not yet tested the new profile. Which first deployment is most appropriate?

- **A.** Pilot with representative legacy clients and proxies, a limited blast radius, and defined rollback criteria.
- **B.** Pilot only with the newest client to establish a clean performance baseline.
- **C.** Use a small production change without monitoring, then roll back if users report problems.
- **D.** Deploy fleet-wide to expose compatibility problems consistently across the environment.

### Q319

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A highly confidential service pilot has a rollback plan that restores classical transport if failures occur. The organization wants to proceed while avoiding an unqualified PQC-protection claim. What is the best approach?

- **A.** Keep fallback available and classify the service as protected whenever the new profile is preferred, preserving availability for clients that need compatibility.
- **B.** Remove rollback so that no classical connection can occur during the pilot.
- **C.** Allow a monitored, time-bounded classical exception with an owner, and report the residual exposure.
- **D.** Retain classical fallback without an expiry so that compatibility is not disrupted.

### Q320

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A phased migration is operating with new and classical paths side by side, and the coexistence period has no planned end. What should program leadership add?

- **A.** End traffic monitoring after the new path is enabled to avoid delaying rollout decisions.
- **B.** Measure progress by the number of systems that can support either path.
- **C.** Set measurable legacy-exit criteria, assign owners, track exceptions, and observe traffic on both paths.
- **D.** Make dual-path operation the steady state once both paths pass functional tests.

### Q333

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A plant's next approved maintenance window is 18 months away, and an OT device migration must occur during that shutdown. What should the program do while waiting?

- **A.** Begin planning when the shutdown opens, when the device can be tested in its operating environment and the approved change can be made.
- **B.** Pre-stage supplier qualification, lab testing, and spares so the change can use the approved maintenance window.
- **C.** Remove the device from migration planning until it becomes eligible for maintenance.
- **D.** Make an unapproved live change now to avoid the delay before the next maintenance window.

### Q335

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A service passes its normal PQC connection tests, but its break-glass recovery procedure reconnects through a classical transport path. What is the appropriate migration action?

- **A.** Exclude break-glass access because it is used only during exceptional incidents, while normal connections demonstrate the service's intended protection.
- **B.** Report full service coverage based on the successful normal-connection tests.
- **C.** Include emergency and disaster-recovery paths in scope and test their cryptographic behavior.
- **D.** Disable the recovery procedure until its classical transport can be replaced.

### Q344

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A red-team exercise is approved for enterprise systems but explicitly excludes safety-critical equipment. The team wants to evaluate a migration's behavior in a representative environment. What is the appropriate next step?

- **A.** Remove the safety systems from the migration inventory until the red-team exercise ends.
- **B.** Apply office-endpoint results to the excluded safety systems and mark them as tested.
- **C.** Use an approved lab replica or test environment to assess representative behavior within the authorized scope.
- **D.** Scan the safety systems because representative coverage outweighs the stated test exclusions.

### Q426

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A production cryptographic migration causes a critical service outage. The approved incident process allows rollback, but the rollback restores a weaker control. Service restoration is the immediate goal. What should the incident commander require for that exception?

- **A.** Let each service owner choose an undocumented rollback approach.
- **B.** Keep the weaker configuration indefinitely once service stability has returned, since an additional migration attempt could create another outage.
- **C.** Use a bounded, approved exception with monitoring and a defined restoration target.
- **D.** Pause security monitoring until the migration can be retried.

### Q440

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A clinical service has older clients that do not yet support a new cryptographic profile. Immediate fail-closed enforcement would interrupt a critical service, but leaving every client on the old path indefinitely is unacceptable. What rollout decision best balances these constraints?

- **A.** Allow the legacy path throughout the fleet without a review date or migration condition.
- **B.** Use risk-assessed, bounded exceptions while staging compatibility and enforcement.
- **C.** Declare migration complete because the newest clients support the profile.
- **D.** Block every older client immediately, irrespective of clinical service impact.

### Q450

- **Domain:** MIG
- **Subtopic:** rollout-and-exceptions
- **Subtopic name:** Pilots, Rollout, Rollback and Exceptions
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A business accepts temporary use of a classical cryptographic path because a supplier cannot yet support the target profile. The exception has a named owner but no review date or migration trigger. What should be added to make the acceptance actively governed?

- **A.** Duplicate the risk description without defining any follow-up action.
- **B.** Make the waiver permanent because the business owner accepted the risk, avoiding repeated review while the supplier limitation persists.
- **C.** Keep the exception valid until the system is eventually replaced.
- **D.** Add a review date, compensating controls, and a trigger for renewed migration action.

### Q069

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is wrong with defining “PQC-ready” based only on new equipment?

- **A.** A new installation guarantees that all defaults use resistant profiles
- **B.** A new product is sufficient proof of readiness if the manufacturer's name appears in a standards project
- **C.** The manufacturing date makes it possible to skip checking negotiation and library dependencies
- **D.** The product's newness is not evidence of appropriate cryptographic use

### Q100

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What does a 100% migration rate mean if only 10% of assets were measured?

- **A.** Report 100% organizational readiness and mention coverage only in a separate technical document
- **B.** The numerator being complete is sufficient, even if most assets and dependencies have not yet been mapped
- **C.** The metric can be extrapolated to the whole organization if the sample included new servers
- **D.** The metric is limited to the coverage assessed and does not prove full organizational readiness

### Q118

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

What is a better definition of “the transition is complete”?

- **A.** All vendors have published roadmaps, so the transition can be closed before deployment
- **B.** All servers offer at least one PQC algorithm, without checking selection or dependencies
- **C.** The scope has been defined, required uses have been migrated and validated, and exceptions are documented
- **D.** All end-entity certificates have been replaced, even if storage keys and software signatures have not been checked

### Q139

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

What is the difference between a “support” objective and an “enforcement” objective?

- **A.** Enforcement means listing the profile in the roadmap without changing acceptance policy
- **B.** Support enables use; enforcement defines what is required and what is rejected
- **C.** Installing a library is enough to prove that classical connections are also blocked
- **D.** Support for a new profile proves that every client must actually use it

### Q169

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

How should residual risk be treated after a successful PQC pilot?

- **A.** Assume that installing the library on all servers is sufficient, without checking actual use
- **B.** Identify paths and components that were not tested or migrated
- **C.** Close all findings from the same product family even when their versions differ
- **D.** Extrapolate from the success of one client to all production and recovery paths

### Q176

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

What should be checked in a disaster recovery (DR) path?

- **A.** Rely on the primary production configuration and exempt emergency paths from protection policy
- **B.** Assume the DR site has the same protection level if its service names match those of the primary site
- **C.** Check only the availability of the backup site, without checking its keys and communication profiles
- **D.** That the configuration, keys, and versions enable the required protection there as well

### Q223

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

What is an important condition for closing a migration task?

- **A.** Evidence of operation in the target configuration and of handling dependencies and exceptions
- **B.** A screenshot showing that the new profile exists, without evidence that it was actually selected
- **C.** Confirmation that the library was installed, even if clients continue to use the old path
- **D.** A general supplier commitment to future support instead of testing the target configuration

### Q237

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** conceptual

Which management metric is a better indicator of real progress?

- **A.** Percentage of critical use cases migrated and verified out of a known scope
- **B.** Number of algorithms approved in policy, without measuring how many assets were migrated
- **C.** Percentage of servers with a supporting library, without checking usage or negotiation
- **D.** Number of suppliers that have declared future intent, instead of evidence of actual deployment

### Q312

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A cloud load balancer has been upgraded to a PQC-capable profile, but its backend connection to a legacy database still uses classical key establishment. How should the migration report describe the result?

- **A.** Count the service as migrated if its public certificate uses the new profile.
- **B.** Describe the front-end hop as upgraded and the backend hop as classical; end-to-end coverage remains incomplete.
- **C.** Report the public-facing connection as upgraded and treat the internal database hop as a separate follow-up.
- **D.** Report full service coverage because the load balancer terminates the external connection.

### Q321

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

The board asks whether the migration is reducing exposure. One team reports how many libraries are installed; another proposes the percentage of high-risk flows verified compliant, with a known denominator and unknowns shown. Which metric is more informative?

- **A.** Count procurement items that specify post-quantum algorithms as a measure of exposure reduction.
- **B.** Report installed libraries, since their presence indicates that applications can use the new mechanisms.
- **C.** Report the percentage of servers restarted after updates, including systems whose traffic is not yet verified.
- **D.** Report risk-weighted verified coverage of high-risk flows, showing the denominator and unknowns.

### Q322

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An organization has assessed 40 of 100 known services, and all 40 meet its current migration checks. How should the status be reported?

- **A.** Report no migration progress until every known service has been assessed.
- **B.** Report all 100 services as ready because the assessed services passed their checks.
- **C.** Report a 40% pass rate for the whole estate, treating unassessed services as failures.
- **D.** Report 40 verified passes and 60 services still unknown or unassessed.

### Q346

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

All services in the approved top-priority migration scope have passed validation, but several lower-priority legacy exceptions remain. The board asks whether the enterprise transition is complete. What is the accurate report?

- **A.** Count exceptions as migrated when their owners have recorded a remediation plan.
- **B.** Report no progress until every legacy exception has been removed from the estate.
- **C.** Report enterprise completion because every service in the highest-priority scope passed validation.
- **D.** Report the scoped milestone as complete and disclose remaining exceptions and residual risk.

### Q350

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A board requests a quarterly update on the PQC program. Which report is most useful for governance and funding decisions?

- **A.** Summarize program meetings and documents completed during the quarter.
- **B.** Provide a completion percentage that excludes unassessed services and supplier blockers, allowing the board to track progress against a simple target.
- **C.** List algorithm acronyms adopted by each technical team and note when deployment began.
- **D.** Report validated risk reduction and scope, unresolved dependencies and exceptions, and decisions or resources needed next.

### Q444

- **Domain:** MIG
- **Subtopic:** assurance-and-progress
- **Subtopic name:** Completion Evidence, Coverage and Progress Metrics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A migration dashboard records ten thousand successful handshakes, all from one subnet. The report labels the entire enterprise compliant, although other regions and connection types were not sampled. What is the main evidence limitation?

- **A.** Ten thousand observations are too numerous to support a useful conclusion.
- **B.** Successful handshakes cannot provide evidence about cryptographic deployment.
- **C.** The subnet results establish that every service negotiates the same configuration.
- **D.** The sample may be biased and does not establish enterprise-wide deployment coverage.

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

What is a gap in evidence based only on “supported groups” on a server?

- **A.** The advertised support proves that every client is forced to select the hybrid group
- **B.** Advertised support does not prove what was selected in each connection
- **C.** It allows one to infer that the entire certificate-signature chain is already quantum-resistant
- **D.** It also allows one to infer the profile of backend links that were not tested

### Q351

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Foundational
- **Tags:** scenario, hands_on, protocol_analysis

A TLS 1.3 trace reports the cipher suite TLS_AES_256_GCM_SHA384. An analyst is asked to document what this field establishes, without drawing conclusions from separate handshake fields. Which interpretation is correct?

- **A.** It specifies AES-256-GCM and an RSA key exchange, with SHA-384 used to authenticate the server.
- **B.** It specifies AES-256-GCM for records and SHA-384 for the key schedule, not the group or certificate signature.
- **C.** It identifies AES-256-GCM and the certificate signature hash; the key schedule hash is negotiated separately.
- **D.** It identifies AES-256-GCM and X25519 as the key-exchange group, while the certificate signature comes from a separate field.

### Q352

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

A client includes a post-quantum group in its supported_groups extension, but the completed handshake selects X25519. The deployment team wants evidence that connections actually use PQ key establishment. What should it conclude from this trace?

- **A.** The offer shows client capability; the selected X25519 exchange identifies the key establishment used on this connection.
- **B.** The trace shows a hybrid exchange because the client advertised PQ support while the server selected X25519.
- **C.** The server’s certificate determines whether the advertised PQ group was used alongside X25519.
- **D.** The client’s offer establishes that the connection used the PQ group, even though X25519 appears in the completed handshake.

### Q353

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Foundational
- **Tags:** scenario, hands_on, protocol_analysis

A packet capture shows a client listing several groups in supported_groups but sending key_share material for only one of them. A reviewer claims every listed group was used in the handshake. Which explanation best corrects that claim?

- **A.** key_share lists certificate-signature preferences, while supported_groups identifies record protection options.
- **B.** supported_groups advertises acceptable groups, while key_share carries exchange material for groups supplied in the handshake.
- **C.** Both extensions advertise capability; the server obtains the client’s actual exchange material in its response.
- **D.** supported_groups identifies the selected group, and key_share provides certificate parameters for that selection, clarifying what the client chose.

### Q354

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

A TLS server supports a group the client offered, but the client did not include a key share for that group in its initial ClientHello. The server responds with HelloRetryRequest requesting that group's share. What is the expected protocol interpretation?

- **A.** The server has selected the group, so the client can omit a share and continue with the original ClientHello.
- **B.** The retry indicates that the requested group is incompatible with the client’s offer and the handshake should fail.
- **C.** The client should switch to the server certificate’s public-key algorithm rather than send another key share.
- **D.** The client should send a second ClientHello with the requested share; the retry adds a round trip but is not itself a failure.

### Q355

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

During a TLS 1.3 configuration review, a server's record cipher is acceptable, but its certificate chain uses a signature algorithm the client does not accept. Which configuration principle should guide diagnosis?

- **A.** Check signature_algorithms and, where relevant, signature_algorithms_cert independently of the record cipher selection.
- **B.** Check supported_groups first, since that extension determines which certificate signatures the client accepts.
- **C.** Check whether the selected cipher suite implies a certificate signature the client accepts before inspecting signature extensions.
- **D.** Replace the record cipher with one using a compatible hash, which also changes certificate-signature negotiation.

### Q356

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A service deploys a post-quantum key-establishment method, while its TLS certificate is still authenticated using an RSA signature. The service owner asks whether this makes the entire connection quantum resistant. Which assessment is most accurate?

- **A.** RSA authentication prevents the PQ key exchange from protecting any application data in the connection.
- **B.** The PQ exchange authenticates the server’s certificate, so the RSA signature no longer affects the assessment.
- **C.** PQ key establishment can improve confidentiality, but RSA certificate authentication remains a classical dependency.
- **D.** The connection is quantum resistant if its record cipher has a 256-bit key, regardless of certificate authentication.

### Q357

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

A TLS 1.3 incident review finds a valid CertificateVerify followed by a valid Finished message. The reviewer must explain what each message demonstrates. Which description is correct?

- **A.** CertificateVerify signs transcript data with the certificate key; Finished authenticates the transcript using derived handshake secrets.
- **B.** CertificateVerify confirms the derived traffic keys, while Finished proves possession of the certificate's private key, separating the two checks.
- **C.** Both messages are signatures made with the certificate key, but only Finished covers the full handshake transcript.
- **D.** CertificateVerify authenticates the record cipher choice, while Finished verifies the certificate chain.

### Q358

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A constrained TLS 1.3 service is configured for PSK-only key establishment, without a fresh (EC)DHE contribution. The operator asks whether previously captured application traffic remains protected if the PSK is later compromised. Which answer is best?

- **A.** PSK-only mode provides forward secrecy as long as the selected AEAD cipher uses a 256-bit key.
- **B.** Without fresh (EC)DHE, later PSK compromise can expose recorded application traffic derived from that PSK.
- **C.** Later PSK compromise affects authentication only; the application traffic keys are independent of the PSK.
- **D.** The absence of an ephemeral exchange affects early data but not application data sent after the handshake.

### Q359

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A TLS 1.3 service resumes sessions using a PSK plus (EC)DHE rather than PSK-only mode. The security team wants to describe the additional property accurately, including its limit against quantum attacks. Which statement is correct?

- **A.** The (EC)DHE contribution changes the certificate signature’s security properties without changing its algorithm.
- **B.** Fresh (EC)DHE can provide classical forward secrecy, but ordinary ECDHE is not resistant to a capable quantum attack.
- **C.** Using a PSK with (EC)DHE makes the key exchange quantum resistant, though certificate authentication remains classical.
- **D.** PSK resumption remains equivalent to psk_ke for forward secrecy, even when the handshake includes fresh (EC)DHE.

### Q360

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A bank's payment API accepts a money-transfer instruction in TLS 1.3 early data to reduce latency. The service must not execute a payment twice if an early-data request is replayed. What is the best design decision?

- **A.** Reject or defer payment instructions in early data, or enforce application-level replay-safe semantics before execution.
- **B.** Use 0-RTT for the instruction and rely on the TLS record cipher to prevent duplicate execution.
- **C.** Keep payment instructions in early data if TLS authenticates them, since authenticated requests cannot be replayed.
- **D.** Require a client certificate for early data; certificate authentication provides cross-connection replay protection for each payment request.

### Q361

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A client sends TLS 1.3 early data using a previously issued PSK. The later full handshake successfully negotiates a post-quantum key-exchange group. How should the application security report characterize the already-sent early data?

- **A.** The application should retransmit all early data after the handshake to make its original transmission PQ protected.
- **B.** The early data is authenticated by the certificate signature in the later handshake, even though it was sent earlier under the resumption PSK.
- **C.** Early data uses resumption-PSK-derived keys, so it does not automatically receive guarantees from the later PQ exchange.
- **D.** The later PQ exchange strengthens the entire connection, including early data already sent under the resumption PSK.

### Q362

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, protocol_analysis

A long-lived TLS connection sends KeyUpdate messages regularly, and an operator claims that this rotates the connection onto a newly negotiated PQ key exchange. What does KeyUpdate actually provide?

- **A.** KeyUpdate adds a fresh key share to the existing handshake while keeping the current certificate unchanged.
- **B.** KeyUpdate replaces the certificate and signature algorithm but leaves record traffic secrets unchanged.
- **C.** KeyUpdate negotiates a replacement group and derives new shared secrets from that group.
- **D.** KeyUpdate refreshes traffic secrets within the connection; a new asymmetric exchange requires another handshake.

### Q364

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Advanced
- **Tags:** scenario, troubleshooting

A TLS implementation encounters a record whose AEAD authentication tag does not verify. A product owner suggests delivering the decrypted bytes anyway because the service must remain available during intermittent network errors. What should the implementation do?

- **A.** Reject the record and fail the connection rather than accept plaintext whose authenticity was not verified.
- **B.** Deliver plaintext only when it passes application-format checks, since those checks can substitute for the failed tag.
- **C.** Release the decrypted bytes with a warning if the failure appears consistent with a network error.
- **D.** Retry decryption under another negotiated cipher before deciding whether the record was modified.

### Q365

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

An organization has upgraded all web servers to TLS 1.3 and marks its external services as post-quantum ready. A representative handshake review shows only classical groups are configured and negotiated. What correction is needed in the assessment?

- **A.** Replace server certificates with PQ certificates; this makes the classical groups in the handshake post-quantum and completes the service assessment.
- **B.** TLS 1.3 support does not establish PQ use; verify PQ-capable groups are configured and negotiated on relevant connections.
- **C.** TLS 1.3 implies post-quantum key exchange, so the review need only confirm the negotiated record cipher.
- **D.** A TLS version change cannot support PQ groups, so the organization should assess a different transport protocol.

### Q505

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

Which is a typical IANA TLS supported-group code point for X25519 + ML-KEM-768 hybrid?

- **A.** The code point 0x11EC (X25519MLKEM768)
- **B.** The code point 0x0023 (legacy SECP)
- **C.** The code point 0x002F (legacy SECP)
- **D.** The code point 0xFFFF (private-use)

### Q523

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

How does TLS 1.3 form the shared secret for the hybrid group X25519MLKEM768?

- **A.** The client discards the X25519 secret whenever ML-KEM succeeds
- **B.** The specified shared secret is the concatenation of the ML-KEM shared secret and the X25519 shared secret, and TLS then runs its key schedule
- **C.** The two secrets are multiplied by a quantum logic gate
- **D.** TLS alternates between the two secrets once a minute

### Q524

- **Domain:** IPT
- **Subtopic:** tls
- **Subtopic name:** TLS Negotiation and Channel Protection
- **Difficulty:** Applied
- **Tags:** conceptual

What network effect can a large post-quantum handshake have on a typical Ethernet path?

- **A.** An ML-KEM-768 encapsulation key alone is always larger than 1500 bytes
- **B.** A post-quantum certificate chain, or a key share such as ML-KEM-1024 plus handshake overhead, can exceed a typical 1500-byte frame and be split across packets
- **C.** Post-quantum handshakes remove TCP
- **D.** Public keys are never carried in the handshake

### Q366

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

An SSH connection negotiates mlkem768x25519-sha256. A configuration reviewer interprets the name as specifying AES-256 encryption and RSA host authentication. Which interpretation of this negotiated method is accurate?

- **A.** The name specifies ML-KEM-768 key establishment and AES-256 transport encryption, with RSA host authentication.
- **B.** It specifies X25519 key establishment and an ML-KEM host signature, while transport encryption is separate.
- **C.** It combines ML-KEM-768 and X25519 for key agreement, with SHA-256 in the method; transport cipher and host authentication are separate.
- **D.** It denotes a hybrid host-signature scheme combining ML-DSA with RSA and using SHA-256 for the record layer.

### Q367

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

An organization deploys a post-quantum SSH key-exchange method, but its servers continue to authenticate with classical host keys. The migration lead asks whether the new exchange completes SSH's quantum-risk migration. Which assessment is most accurate?

- **A.** Classical host authentication cancels the confidentiality improvement from the PQ exchange, so the deployment gains no benefit.
- **B.** Password-based user login converts the classical host key into a post-quantum authentication method.
- **C.** The exchange can improve key-establishment confidentiality, while classical host-key authentication remains a separate dependency.
- **D.** The PQ exchange authenticates the server as well as establishing transport secrets, so classical host keys are no longer relevant to the migration.

### Q368

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

A new SSH client warns that a connection to an older server uses weak key exchange. The operator's goal is to determine whether the production connection can negotiate an approved method, not merely suppress the warning. What should be checked first?

- **A.** Increase the transport-cipher key length, which addresses a weak key-exchange warning without further checks.
- **B.** Replace the user’s authentication key first, since SSH authentication-key type determines the negotiated key exchange.
- **C.** Suppress the warning and record the client version; this establishes that the production session uses an approved method.
- **D.** Inspect effective server configuration and the key-exchange method actually negotiated for the connection.

### Q369

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Foundational
- **Tags:** scenario, protocol_analysis

A fleet administrator sets DisableWarnWeakCrypto to stop SSH clients from printing a weak-cryptography warning. A compliance report then treats the absence of warnings as proof that every session uses approved key exchange. What is the flaw?

- **A.** The setting changes the server’s permitted key exchanges so clients select a stronger algorithm.
- **B.** The setting prevents weak algorithms from being negotiated while retaining the existing warning text, so the report can use warning status as evidence.
- **C.** The setting affects warning output, not the algorithms negotiated or the security of the resulting session.
- **D.** The setting proves approved key exchange when the client no longer prints a warning.

### Q370

- **Domain:** IPT
- **Subtopic:** ssh
- **Subtopic name:** SSH Key Exchange and Authentication
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

An SSH server configuration advertises a hybrid key-exchange algorithm, but a packet capture from a sampled session shows that a classical algorithm was selected. The binary version string is recent. What should the audit record emphasize?

- **A.** The captured session’s selected algorithm is decisive for that connection; investigate effective configuration and negotiation causes.
- **B.** The host-key algorithm determines whether a session’s negotiated key exchange was hybrid.
- **C.** The recent binary version establishes that the sampled session used the advertised hybrid algorithm.
- **D.** The server’s advertised method takes precedence over a packet capture showing the selected classical method.

### Q371

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

An IPsec design review sees an IKE configuration with multiple key exchanges and proposes treating them as two alternative profiles, with the gateway choosing whichever one succeeds first. What is the purpose of the multiple-exchange mechanism?

- **A.** The exchanges are independent alternatives; only the selected exchange contributes to the resulting key material, allowing a compatible choice.
- **B.** One exchange authenticates the peers while the other supplies a fallback encryption algorithm.
- **C.** The mechanism combines contributions from multiple exchanges into derived key material, potentially mixing classical and PQ inputs.
- **D.** The gateway tries both exchanges and retains whichever one finishes first to minimize setup latency.

### Q372

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, troubleshooting

A VPN pilot adds a large post-quantum key-exchange payload to IKE setup. The team assumes ordinary IP fragmentation will reliably carry the initial IKE_SA_INIT exchange across all paths. Which design consideration is best supported?

- **A.** Move additional key exchanges into the VPN’s data plane so that initial IKE message sizing is unchanged.
- **B.** Use IKE_INTERMEDIATE for extra exchanges after IKE_SA_INIT and IKE fragmentation where applicable, rather than relying on IP fragmentation.
- **C.** Assume large IKE_SA_INIT messages are encrypted and fragmented by the protocol before traversing the network.
- **D.** Rely on IP fragmentation for IKE_SA_INIT, then use IKE_INTERMEDIATE only if the network drops encrypted traffic, reducing setup complexity initially.

### Q373

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

An engineer is documenting an IKE deployment and must distinguish extra exchanges during initial SA establishment from an additional exchange associated with CREATE_CHILD_SA or rekey. Which description is correct?

- **A.** Both names denote the same exchange stage, with the choice determined by the negotiated encryption algorithm and the gateway's preferred configuration.
- **B.** IKE_INTERMEDIATE authenticates certificates, whereas IKE_FOLLOWUP_KE negotiates the Child-SA cipher.
- **C.** IKE_FOLLOWUP_KE is used after IKE_SA_INIT, while IKE_INTERMEDIATE is reserved for rekey exchanges.
- **D.** IKE_INTERMEDIATE supports extra exchanges after IKE_SA_INIT; IKE_FOLLOWUP_KE is associated with CREATE_CHILD_SA or rekey.

### Q374

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A gateway advertises an additional IKE key exchange and also proposes NONE as an acceptable option. An operator claims that the configuration proves every resulting SA includes a PQ contribution. What is the sound conclusion?

- **A.** If NONE is acceptable for the additional exchange, an SA may omit it; verify negotiation and policy enforcement.
- **B.** Advertising a PQ exchange makes it mandatory even when NONE is also proposed for the additional exchange.
- **C.** NONE disables the classical exchange, so the additional PQ contribution must be present in each SA.
- **D.** A server-supported PQ method is sufficient evidence of use because the peer cannot select NONE.

### Q375

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A VPN deployment adds a PQ key-exchange contribution to IKE but continues authenticating peers with classical signatures. The security owner wants to state the benefit without overstating it. Which statement is correct?

- **A.** The change provides no security benefit unless every data-plane cipher is replaced at the same time.
- **B.** A classical signature makes the PQ key exchange unusable for protecting data-plane traffic.
- **C.** The contribution can improve protection of derived keys, while peer authentication remains dependent on the classical signature.
- **D.** The PQ contribution converts the classical peer signatures during key derivation, completing authentication migration for the VPN peers.

### Q376

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A security team already configures an ordinary IKEv2 authentication PSK and concludes that it has satisfied a requirement to mix an RFC 8784 Post-quantum Preshared Key into key derivation. What is the correct diagnosis?

- **A.** An authentication PSK can serve as an RFC 8784 PPK whenever it has sufficient entropy.
- **B.** RFC 8784 PPK replaces peer authentication, so the configured authentication PSK should be removed.
- **C.** Any IKE authentication PSK is automatically included in session-key derivation, so a sufficiently strong configured secret meets the PPK requirement.
- **D.** Ordinary IKE PSK authentication and RFC 8784 PPK are distinct; the ordinary authentication PSK is not the PPK derivation input.

### Q377

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An organization requires RFC 8784 PPK for a particular VPN profile. During maintenance, one peer cannot obtain its provisioned PPK, and the operator proposes silently continuing with ordinary IKE to avoid an outage. What action matches the stated policy?

- **A.** Use another site’s PPK temporarily; mandatory policy requires a PPK but not the provisioned one.
- **B.** Fail establishment under the mandatory-PPK policy until the required PPK is available or an authorized policy change is made.
- **C.** Continue with ordinary IKE authentication, since it supplies an equivalent secret to key derivation and avoids a maintenance outage.
- **D.** Establish the tunnel without peer authentication and add the PPK after traffic begins.

### Q378

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A company proposes using one RFC 8784 PPK across 500 gateways because it is easier to distribute. Its objective is to limit the impact of a single credential compromise while retaining manageable provisioning. Which recommendation best addresses that objective?

- **A.** Use a short common passphrase and rotate it often; the rotation frequency compensates for limited entropy.
- **B.** Prefer independently provisioned high-entropy PPKs or limited scopes; a shared secret increases blast radius and distribution risk.
- **C.** Use one PPK across the fleet and depend on certificates to revoke any exposed copies.
- **D.** Use one group-wide PPK, since sharing it across gateways limits the impact of a single compromise.

### Q379

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

A VPN architect claims that RFC 8784 PPK makes every initial IKE control message and all associated identity metadata quantum confidential. The deployment mixes PPK into derived key material for Child SAs but uses a normal initial exchange. Which correction is accurate?

- **A.** PPK encrypts all initial identity exchanges once configured, regardless of the IKE exchange sequence.
- **B.** PPK makes all peer identities anonymous, even when the initial exchange exposes identity metadata.
- **C.** PPK protects specified derived keys, including Child-SA and subsequent rekeyed IKE-SA keys, but not all initial control traffic or metadata.
- **D.** PPK is used only to authenticate the peer and contributes nothing to Child-SA key derivation, which still depends entirely on the ordinary exchange.

### Q380

- **Domain:** IPT
- **Subtopic:** ike-and-ipsec
- **Subtopic name:** IKE, IPsec and Post-Quantum Preshared Keys
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A VPN team proposes a human-generated passphrase that is 40 characters long as its PPK. A random PPK of at least 256 bits of entropy is available through the organization's secure provisioning process. Which choice is better supported?

- **A.** Prefer the human passphrase because its character count provides a reliable measure of its entropy.
- **B.** Prefer the manually chosen passphrase because secure out-of-band delivery compensates for uncertainty about its generation entropy.
- **C.** Hash the human-generated passphrase with SHA-256 and treat the resulting 256-bit output as proof of 256 bits of entropy.
- **D.** Use the random high-entropy PPK; length alone does not establish passphrase entropy, and secure provisioning remains necessary.

### Q045

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** conceptual

Why should one not infer from a PQC public key in an end-entity certificate that the entire trust chain is resistant?

- **A.** The end-entity algorithm is sufficient because the chain itself contains only public information
- **B.** A PQC key at the end entity automatically replaces all signatures of issuers above it
- **C.** A short validity period for the end-entity certificate eliminates any need to check the trust chain
- **D.** There may be vulnerable signatures or trust components in the chain

### Q089

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

Why must certificate validation not be disabled to make a PQC pilot succeed?

- **A.** Certificate validation affects only compatibility and does not change the threat model
- **B.** This could solve a compatibility issue at the cost of vulnerability to impersonation
- **C.** Certificate validation can be disabled temporarily, and the result used as proof of the security of the entire protocol
- **D.** If the KEM returns a secret of the correct length, the other party's identity has necessarily been checked

### Q101

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** conceptual

Why is an X.509 certificate alone not proof of quantum resistance?

- **A.** The algorithms and keys in it and in the trust chain must be checked
- **B.** Every X.509 certificate uses AES
- **C.** A certificate with a long validity period is necessarily PQC
- **D.** Certificates are public data and therefore do not require security

### Q315

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A service deploys a leaf certificate with a PQC public key, but the certificate issuer is classical and clients still trust an old classical root. What is the sound assessment?

- **A.** Assess the complete path to relying-party trust anchors and plan how legacy trust paths will be removed or handled.
- **B.** Review the leaf certificate's validity period and defer issuer analysis unless it expires soon.
- **C.** Treat the leaf key as sufficient because clients can validate its certificate using the existing trust store and the service now presents a PQ key.
- **D.** Replace the leaf key again, then test the chain only if clients reject it.

### Q381

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, protocol_analysis

A certificate contains an ML-DSA subject public key, but the certificate itself is signed by an RSA intermediate CA. A service owner describes the certificate chain as fully post-quantum because the leaf key is ML-DSA. Which assessment is correct?

- **A.** Different subject and issuer algorithms mean the certificate is self-signed rather than CA-issued, so the RSA signature does not affect its trust path.
- **B.** The leaf has an ML-DSA subject key, but the RSA issuer signature is a separate classical dependency in the path.
- **C.** The RSA issuer signature changes the leaf subject key to RSA for certificate and service use.
- **D.** The issuer signature is irrelevant to the path once the leaf subject key uses a PQ algorithm.

### Q382

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

A relying party accepts a PQ-signature leaf certificate, but its validated certification path includes a classical intermediate certificate signature. The organization wants to claim that the whole path is quantum resistant. What is the correct conclusion?

- **A.** A PQ leaf key supersedes intermediate signatures, which matter only when the leaf certificate expires.
- **B.** The classical intermediate signature is irrelevant if the trust anchor is self-signed.
- **C.** The classical intermediate signature remains a vulnerable dependency; assess the full validated path and trust policy.
- **D.** The path is quantum resistant because relying parties use only the leaf key for certificate validation.

### Q383

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, troubleshooting

A vendor delivers a self-signed PQ certificate for a new internal service. The certificate verifies under its own key, but the organization's clients have not received a trust-anchor update or other approved trust configuration. What should the relying party do?

- **A.** Add it to the trust store because a self-signed certificate cannot be substituted by an attacker.
- **B.** Trust the certificate automatically if its self-signature verifies and its key uses a standardized PQ algorithm.
- **C.** Treat self-signature verification as sufficient proof that the key belongs to the named service.
- **D.** Accept it only if it chains to a trust anchor recognized under the relying party’s approved trust policy.

### Q384

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

A service administrator finds a certificate with digitalSignature key usage and an extendedKeyUsage of codeSigning. The administrator wants to use it for TLS server authentication because the signing key is PQ-capable. What is the correct validation conclusion?

- **A.** Accept it if the issuer permits server authentication, regardless of the leaf certificate's extended key usage, because the PQ key can sign.
- **B.** Accept it when the server negotiates hybrid key exchange, which overrides the code-signing EKU.
- **C.** Do not assume it is suitable for TLS server authentication; both key usage and extended key usage must permit that purpose.
- **D.** Accept it for TLS server authentication because digitalSignature permits any use that requires a signature.

### Q385

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, protocol_analysis

A CA certificate has basicConstraints CA:true and pathLenConstraint set to zero. The team wants to use it to sign end-entity certificates and also plans to issue a new non-self-issued intermediate CA below it. Which assessment is correct?

- **A.** It can issue the intermediate if its key usage permits digital signatures, regardless of pathLenConstraint.
- **B.** It may issue one additional non-self-issued intermediate, because pathLenConstraint zero counts only the CAs beneath that new intermediate.
- **C.** A pathLenConstraint of zero makes the certificate a non-CA, so it cannot issue any certificates.
- **D.** With CA:true, it may issue leaf certificates, but pathLenConstraint zero disallows another non-self-issued intermediate beneath it.

### Q386

- **Domain:** IPT
- **Subtopic:** pki-and-certificates
- **Subtopic name:** PKI, Certificates and Trust Validation
- **Difficulty:** Applied
- **Tags:** scenario, troubleshooting

A private signing key is confirmed compromised six months before its certificate's stated expiry. The operations team proposes leaving the certificate in use until expiry to avoid disruption. What is the appropriate PKI response?

- **A.** Revoke or otherwise invalidate the credential, then rotate to a new key and certificate without waiting for expiry.
- **B.** Remove the expiry date from local validation while operations prepares a replacement certificate.
- **C.** Renew the certificate with the same key so clients can update their trust without changing the compromised credential.
- **D.** Keep the certificate active until expiry; the validity period determines when a compromised key becomes unsafe.

### Q393

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Foundational
- **Tags:** scenario

A product team reads RFC 9180's description of HPKE as a hybrid public-key encryption construction and claims that every HPKE suite combines a classical algorithm with a PQ algorithm. Which interpretation is accurate?

- **A.** In HPKE, hybrid means encryption combined with a sender signature, so even Base mode necessarily authenticates the sender.
- **B.** HPKE is post-quantum only, so its KEM cannot use classical elliptic-curve algorithms and every suite includes PQ key establishment.
- **C.** In HPKE, hybrid describes the asymmetric and symmetric components; it does not necessarily mean classical plus PQ algorithms.
- **D.** HPKE’s hybrid construction always combines ML-KEM with AES, regardless of the selected suite.

### Q394

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Applied
- **Tags:** scenario

A client uses HPKE Base mode to encrypt a confidential report to a recipient's public key. The recipient asks whether successful decryption proves which employee sent the report. What is the correct answer?

- **A.** A sender name inside the encrypted report establishes authorship once the recipient verifies the plaintext.
- **B.** Successful decryption proves the sender’s identity when the recipient uses a unique private key.
- **C.** Base mode authenticates the sender because only the intended recipient can decrypt the ciphertext.
- **D.** Base mode encrypts to the recipient but does not authenticate the sender’s identity.

### Q395

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Advanced
- **Tags:** scenario

An application uses HPKE to deliver a multi-gigabyte archive. A developer proposes applying the KEM independently to every file block and omitting the AEAD context. Which design explanation is correct?

- **A.** Use the KDF to encrypt each block and the KEM to authenticate filenames before transmission.
- **B.** Use the KEM secret directly as a nonce for every block and omit the key-derivation step.
- **C.** Use the KEM to encrypt successive archive blocks and the AEAD only to protect metadata, keeping bulk content outside the symmetric encryption context.
- **D.** Use the KEM to establish a shared secret, derive AEAD keys with the KDF, and encrypt payload data in the AEAD context.

### Q396

- **Domain:** IPT
- **Subtopic:** hpke
- **Subtopic name:** HPKE and Hybrid Public-Key Encryption
- **Difficulty:** Advanced
- **Tags:** scenario, protocol_analysis

An organization uses HPKE Base mode with a recipient's long-term public key to encrypt archived messages. Years later, the recipient's corresponding private key is compromised, and an attacker has stored old ciphertexts. What protection can the organization safely claim?

- **A.** The archive remains protected if the recipient rotates its key after the attacker has copied the ciphertexts, since the old key is no longer active.
- **B.** Only compromise of the sender’s private key can expose ciphertext produced in Base mode.
- **C.** It cannot claim forward secrecy against compromise of the recipient's private key; retained ciphertexts may be exposed.
- **D.** Base mode provides forward secrecy because each sender creates a new encapsulation for every message.

### Q059

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

What should a safe KEM test log contain?

- **A.** The seed for every key to make sharing easier
- **B.** Test identifiers, parameters, and results, without secrets
- **C.** All production private keys
- **D.** The shared secret for every session

### Q105

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

How should malformed cryptographic inputs be handled?

- **A.** Validate and reject them according to the specification without exposing secrets or sensitive failure details
- **B.** Skip checks to save CPU
- **C.** Always proceed as if the input were valid
- **D.** Return the private key to assist with debugging

### Q131

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

What is appropriate when creating an independent ML-KEM implementation for production after reading pseudocode?

- **A.** Prefer a maintained, tested implementation and assess its suitability for the requirements
- **B.** It is enough for the code to return the same secret once
- **C.** Pseudocode guarantees resistance to side-channel attacks
- **D.** Randomness is unnecessary if the example is copied

### Q156

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

Why is a successful KEM round-trip test not enough to secure a system?

- **A.** It proves that the entire protocol is resistant to every attacker
- **B.** It does not, by itself, test authentication, side channels, randomness, or input handling
- **C.** It replaces negative testing
- **D.** It always proves FIPS 140-3 compliance

### Q187

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

What is the purpose of a constant-time implementation?

- **A.** Automatically increase the NIST category
- **B.** Reduce leakage of secret information through execution timing
- **C.** Guarantee that every network connection lasts exactly one second
- **D.** Always shorten encryption time

### Q189

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

What is the failure if an implementation ignores the return value of Verify?

- **A.** Messages with invalid signatures may be accepted
- **B.** Signatures become shorter
- **C.** The algorithm receives a higher security category
- **D.** ML-DSA becomes a KEM

### Q298

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** conceptual

What is the risk of a predictable random number generator in KeyGen or Encaps?

- **A.** There is no risk because the key is long
- **B.** Loss of confidentiality even if the algorithm itself is standardized
- **C.** The problem is solved by choosing a higher parameter-set name
- **D.** Only a change in file size

### Q387

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, troubleshooting

Two service replicas use the same AES-GCM key and independently generate nonces from local counters that both start at zero after restart. The replicas may encrypt records concurrently. What is the most important correction?

- **A.** Permit nonce reuse for non-sensitive records, since GCM uniqueness matters only for confidential plaintext.
- **B.** Increase AES key size while retaining the counters; stronger keys make occasional nonce collisions less consequential across service replicas.
- **C.** Coordinate unique IV allocation across uses of the shared key, or use suitably independent keys for the replicas.
- **D.** Add the customer identifier as AAD so repeated nonces are safe when records belong to different customers.

### Q389

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, troubleshooting

A cryptographic library's streaming decrypt API yields plaintext chunks before it reports whether the final AES-GCM tag is valid. The application forwards each chunk to an untrusted downstream service immediately. What is the safe handling requirement?

- **A.** Release the chunks and notify the downstream service if final tag validation later fails.
- **B.** Buffer or quarantine provisional plaintext and release it only after the AEAD tag has been verified.
- **C.** Disable final tag verification for streamed data, since each chunk has already been decrypted.
- **D.** Forward each chunk after checking its format, then rely on the final tag to detect any consequential changes.

### Q390

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

A team upgrades an application from AES-128-GCM to AES-256-GCM but leaves its faulty nonce generator unchanged, including the same possible nonce reuse under a key. Which conclusion should the security review reach?

- **A.** AES-256 makes repeated IVs sufficiently unpredictable that the existing nonce generator can remain unchanged.
- **B.** The larger key protects only future records, while nonce reuse affects records encrypted under AES-128.
- **C.** The key-size upgrade does not address nonce reuse; AES-GCM still requires unique IVs under each key.
- **D.** AES-256-GCM removes the need for unique nonces, but tag verification must still be retained.

### Q392

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A legacy file-transfer service uses AES-CTR to encrypt messages but attaches no MAC or authentication tag. A recipient can decrypt altered files without detecting tampering. Which remediation best addresses the identified flaw?

- **A.** Replace the construction with a maintained, approved authenticated-encryption scheme and handle authentication failures safely.
- **B.** Compress ciphertext before transfer so that modifications are less likely to produce valid plaintext.
- **C.** Use the CTR encryption key as a signing key so each ciphertext authenticates itself.
- **D.** Increase the AES key length but retain CTR without authentication, since longer keys make tampering harder to perform successfully.

### Q400

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario, hands_on, troubleshooting

A production KEM service receives malformed ciphertexts and shows measurable timing differences between failure cases. A developer proposes skipping input validation to reduce latency. Which engineering response is best?

- **A.** Accept malformed inputs and derive a fallback key from the raw ciphertext to avoid timing differences.
- **B.** Skip validation for correctly sized ciphertexts and return detailed errors only when lengths are malformed.
- **C.** Use a maintained, validated implementation with input checks, side-channel protections, and careful failure handling.
- **D.** Remove input checks to reduce latency, then rely on the application protocol to detect incorrect shared secrets without exposing decapsulation details.

### Q421

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario

A KEM implementation passes known-answer tests and uses a standardized post-quantum algorithm. A lab observes that decapsulation time correlates with a branch influenced by secret data. What should the engineering team prioritize?

- **A.** Disable timing measurements in testing while retaining the production behavior.
- **B.** Increase the public-key size without changing the decapsulation implementation, since a larger standardized key provides a stronger security margin.
- **C.** Treat standardization as evidence that secret-correlated timing is acceptable.
- **D.** Assess and mitigate implementation leakage, including secret-dependent execution paths.

### Q422

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario

A production KEM service creates shared secrets in memory, and its crash-dump system uploads full process images to a general diagnostics bucket. The team has no evidence that a crash has occurred. What control should it implement?

- **A.** Restrict dump collection and access, and minimize the time secrets remain in memory.
- **B.** Rely on transport encryption to protect secrets copied into diagnostics storage, since uploaded process images travel over an encrypted connection.
- **C.** Allow broad dump access because the KEM secrets exist only temporarily.
- **D.** Log shared secrets separately so operators can reconstruct failed sessions.

### Q434

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario, hands_on

A financial record decrypts to plausible values, but its AES-GCM authentication tag fails verification. A downstream accounting job can process the record only if it receives plaintext. What should the service do?

- **A.** Reject the record and alert on the authentication failure.
- **B.** Process plausible fields and flag the record for review afterward.
- **C.** Try alternative nonces until decryption returns an accepted tag.
- **D.** Ignore the tag because the ciphertext came from an internal service.

### Q435

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Advanced
- **Tags:** scenario

A distributed service uses AES-GCM with a shared key and per-node counter nonces. After a snapshot restore, two instances restart their counters at the same value and may encrypt different records concurrently. What is the primary corrective action?

- **A.** Keep each nonce secret so attackers cannot identify repeated values.
- **B.** Increase the AES key length while retaining the restored counter scheme.
- **C.** Add authenticated data while allowing counters to repeat after restoration.
- **D.** Ensure nonce uniqueness under the key across nodes and restore epochs.

### Q441

- **Domain:** IPT
- **Subtopic:** cryptographic-engineering
- **Subtopic name:** Cryptographic Engineering and Implementation Safety
- **Difficulty:** Applied
- **Tags:** scenario

An internet-facing gateway negotiates a post-quantum profile with external clients, then forwards requests over a plain-text connection to an operational-technology network. Which statement should the security report make?

- **A.** Remove external encryption so the gateway uses the same protection on both paths, keeping the end-to-end security design consistent.
- **B.** The gateway ensures that every connection into the OT network is protected.
- **C.** The backend path is safe because it is not directly internet-facing.
- **D.** The external segment is protected; the backend path needs separate controls and risk treatment.

### Q003

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

What is the purpose of a Known-answer test?

- **A.** Comparing outputs for given inputs with expected results to check correctness
- **B.** Testing whether the user understands the password
- **C.** Proving correctness for every possible system configuration
- **D.** Proving that there are no side channels

### Q051

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** hands_on, scenario

A signature is verified using the public key of a different signer. What is expected in a correct implementation, under the usual security assumptions?

- **A.** The message will be decrypted automatically
- **B.** Verification will succeed because the algorithm is the same
- **C.** Verification will fail
- **D.** The public key will update itself

### Q065

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

What should you check when a server offers Hybrid but the connection selects a classical option?

- **A.** Immediately replace all network hardware
- **B.** Assume that all clients are attackers
- **C.** Client capabilities, configuration, policy, profile, and negotiation evidence
- **D.** Declare Hybrid active merely because it is offered

### Q088

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

Both parties produced values that are 32 bytes long. Does length alone prove successful key establishment?

- **A.** Yes, every value of this length is identical
- **B.** Yes, ML-KEM cannot accept invalid input
- **C.** No, matching and completion of the protocol must be verified
- **D.** Only if the file name is the same

### Q107

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

What is a sound next step when a legacy client fails with the new profile?

- **A.** Allow all clients an unrestricted classical path and mark the transition complete
- **B.** Immediately conclude that PQC is unsafe and replace the algorithm throughout the organization
- **C.** Disable certificate validation in the pilot to prove that only encryption works
- **D.** Isolate the cause of the compatibility issue and select an approved remediation path

### Q123

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

Why should file formats and APIs also be tested?

- **A.** Because a protocol can accept any key size if the server supports the algorithm
- **B.** Because an algorithm specification automatically approves all encodings and APIs as well
- **C.** New sizes, encodings, and algorithm identifiers may require adaptations
- **D.** Because library support for PQC guarantees that every existing certificate format will accept it

### Q140

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

What is a sound conclusion from a pilot that both succeeded and rejected invalid inputs?

- **A.** All product versions are now validated
- **B.** Future security updates can be skipped
- **C.** There is evidence for the scenarios tested, not proof of absolute security
- **D.** There is no need to test permissions and keys

### Q198

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

What is a good interoperability test?

- **A.** A client and server from independent implementations using compatible profiles and parameters
- **B.** Comparing the colors of the user interfaces
- **C.** Testing a KEM against a signature and expecting identical output
- **D.** Two calls to the same function only

### Q216

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** conceptual

Why does publication of a PQC standard not guarantee that every TLS product supports it?

- **A.** TLS does not use key establishment
- **B.** Protocol implementations and products need to integrate and test it
- **C.** An algorithm standard installs itself remotely
- **D.** The standard applies only to files, not networks

### Q279

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** hands_on

Which negative test is essential in a signature experiment?

- **A.** Verifying the same valid message repeatedly, and nothing else
- **B.** Changing the message and checking that the existing signature is rejected
- **C.** Deleting all failure results
- **D.** Measuring the time taken to generate a filename

### Q318

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario, troubleshooting

A library benchmark shows that a candidate handshake is fast, but a middlebox rejects its larger handshake messages. The team has not yet achieved a working connection through the production-representative path. What is the next priority?

- **A.** Resolve and test interoperability through the middlebox before optimizing small performance differences.
- **B.** Deploy the library behind the middlebox and monitor connection failures during rollout.
- **C.** Continue tuning the library until its benchmark is faster, then repeat the production-path test.
- **D.** Reject the candidate based on the middlebox result without testing whether configuration changes can resolve it.

### Q331

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A proposed PQC firmware signature is larger than the verification buffer in a deployed device's ROM. The algorithm performs well in a desktop benchmark. What should the engineering team assess before selecting it for this fleet?

- **A.** Prefer the option named in procurement documents, since it has already passed organizational review.
- **B.** Assess device memory, verification limits, boot and update chains, and feasible upgrade or replacement paths.
- **C.** Split the signature across packets and assume the device can verify it incrementally.
- **D.** Select the scheme based on desktop verification speed, then evaluate device constraints during deployment, when the actual firmware is available.

### Q334

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A migration test successfully backs up and restores data created after the new profile was enabled. The organization also retains historical archives encrypted under older key-wrapping arrangements. What additional test is important?

- **A.** Test restoration of historical archives and confirm controlled availability of any old decryption keys they require.
- **B.** Delete retired decryption keys once new backup tests pass, reducing reliance on old arrangements.
- **C.** Repeat the new-data restore test on another storage server and use that result for archive coverage, since both workflows use the backup service.
- **D.** Assume archived data will restore because recent backups succeeded under the new profile.

### Q347

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, troubleshooting

A migration pilot works on the nominal provider route, but the service loses compatibility when traffic fails over to a secondary provider. What should the team test before rollout?

- **A.** Use the secondary provider's algorithm list as evidence of failover compatibility.
- **B.** Test compatibility and cryptographic behavior on the failover route as part of the service path.
- **C.** Test only the primary provider route, since failover is an availability rather than cryptographic concern.
- **D.** Increase primary-route throughput testing before deciding whether to examine the secondary route.

### Q431

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A build-time CBOM lists a post-quantum provider, but production traffic uses a different library version and appears to negotiate a classical group. Which evidence should the assurance team correlate before concluding that the deployed service enforces the intended policy?

- **A.** Rely on the CBOM because it came from the approved build pipeline.
- **B.** Use a successful local test of the provider's default configuration.
- **C.** Check the product page and hardware inventory for deployment evidence, since the approved provider is listed as compatible with the service.
- **D.** Correlate build inventory, deployed versions, runtime configuration, and observed negotiations.

### Q433

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

An industrial controller accepts a firmware image with a valid signature from the trusted vendor, but the update bricks the process during startup. The change had not been tested against the plant's configuration. What should the migration team conclude for future updates?

- **A.** A valid signature establishes that the firmware is compatible with every plant configuration, so the startup failure likely reflects a transient condition.
- **B.** Remove signature checks so operators can freely install earlier firmware versions.
- **C.** Repeat the same update because a subsequent installation may avoid the failure.
- **D.** Authenticity is necessary, but compatibility and operational safety require staged validation.

### Q445

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A canary test succeeds for newly issued desktop clients using the new profile. The production fleet also includes older clients, mobile agents, proxies, and failover routes. What should the team add before expanding the rollout?

- **A.** Skip compatibility tests because the cryptographic library is standardized.
- **B.** Test representative older, mobile, proxy, failover, and negative-use cases.
- **C.** Test the newest server hardware on the primary route only.
- **D.** Repeat the desktop test until its measured success rate reaches one hundred percent.

### Q448

- **Domain:** IPT
- **Subtopic:** interoperability-and-testing
- **Subtopic name:** Interoperability, Positive and Negative Testing
- **Difficulty:** Applied
- **Tags:** scenario, hands_on

A service owner wants evidence that a post-quantum-only policy is enforced, not merely that post-quantum clients can connect. Which test provides the strongest direct evidence?

- **A.** Confirm that the server configuration file lists a post-quantum group.
- **B.** Connect an approved post-quantum client and record a successful handshake.
- **C.** Count installed post-quantum libraries across the application hosts.
- **D.** Attempt a classical-only connection and verify rejection with policy evidence in the logs.

### Q049

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

Why can replacing a signature algorithm also affect the network?

- **A.** Signatures eliminate the need to transmit certificates
- **B.** Keys and signatures may change the size of protocol messages
- **C.** A signature algorithm operates only at the physical layer
- **D.** Signatures always change IP addresses

### Q080

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** calculation

A handshake message grew from 2KB to 5KB. What is the increase in size?

- **A.** 7KB
- **B.** 2.5KB
- **C.** 5KB
- **D.** 3KB

### Q110

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

Why should CPU and memory usage also be tested on the client side?

- **A.** A public key requires no processing
- **B.** PQC always uses zero additional memory
- **C.** Edge resources can be a bottleneck different from the server's
- **D.** Every cryptographic operation is performed only on the server

### Q119

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

Why is it important to measure before and after migration under the same conditions?

- **A.** To attribute differences to the change rather than to different loads or environments
- **B.** To prove that PQC alone is responsible for every improvement, even if the hardware was upgraded
- **C.** To allow averages to be compared even when the number of connections differs by a factor of ten
- **D.** To dispense with different tests across servers as long as the algorithm name is the same

### Q160

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** scenario, hands_on, troubleshooting

After migrating to larger signatures, some clients fail. What is a reasonable check?

- **A.** Assume the problem is always Shor's algorithm
- **B.** Disable signature verification for all clients
- **C.** Increase only the user's password
- **D.** Size limits, buffers, encoding, and compatibility throughout the path

### Q219

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** calculation

Handshake time increased from 20 to 30 milliseconds. What is the percentage increase?

- **A.** 33.3%
- **B.** 10%
- **C.** 50%
- **D.** 150%

### Q224

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

Which metrics are suitable for a communications migration pilot, beyond throughput?

- **A.** Number of supported algorithms without checking which profile was selected in the connection
- **B.** Local key-generation time only, without regard to the path and client versions
- **C.** Average throughput only, as long as the server library completed a round trip
- **D.** Handshake times, failure rate, traffic volume, and compatibility

### Q233

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** troubleshooting

The average has barely changed, but p99 has deteriorated significantly. What should be examined?

- **A.** Remove all load testing
- **B.** The effect of tail latency on service experience and the SLO
- **C.** Ignore it because the average is sufficient
- **D.** Declare that all clients are faster

### Q251

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** conceptual

Which benchmark comparison is fairer?

- **A.** A single average with no number of measurements
- **B.** PQC on a new computer versus RSA on an old one, without stating this
- **C.** Comparing only the algorithm name
- **D.** The same scenario, hardware, workload, and relevant security level

### Q317

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario, troubleshooting

A migration pilot shows acceptable median latency but recurring p99 outages on remote links. Before approving expansion, what should the team investigate?

- **A.** Compare average latency with the previous release and expand if the averages are similar.
- **B.** Benchmark central-server CPU use and address network behavior only if that test shows a bottleneck, since server capacity is easier to measure.
- **C.** Investigate the handshake path, message sizes, packet loss, retransmissions, and remote-link capacity before expansion.
- **D.** Approve expansion because median latency reflects the experience of most users.

### Q439

- **Domain:** IPT
- **Subtopic:** performance-and-diagnostics
- **Subtopic name:** Performance, Measurements and Diagnostics
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A migration board receives a benchmark report stating that a post-quantum handshake met its latency target. The report lists no asset identifier, software version, or configuration. What should the board request before treating the result as reproducible assurance evidence?

- **A.** Request a broader algorithm summary without adding machine or configuration details, so the board can compare the benchmark with general practice.
- **B.** Request the tested asset, version, configuration, and provenance needed to reproduce the result.
- **C.** Remove the system owner's name and use the report as assurance evidence.
- **D.** Accept the supplier's statement that the result represents typical performance.

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

Why is protecting key exchange not sufficient on its own?

- **A.** Peer authentication and a sound protocol are also required
- **B.** Key exchange already guarantees application-level authorization
- **C.** Every key exchange automatically replaces certificates
- **D.** It is enough to increase the ciphertext length

### Q083

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

What is the relationship between RSA security and factorization?

- **A.** Factoring the modulus compromises the private key
- **B.** RSA security is based on photon properties
- **C.** Factorization affects only AES keys
- **D.** Factorization creates an ML-DSA signature

### Q109

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

Which statement about symmetric and asymmetric mechanisms is correct?

- **A.** A symmetric mechanism requires a public certificate for every encryption
- **B.** Choosing PQC requires removing all symmetric encryption
- **C.** They can be combined in one protocol for different purposes
- **D.** An asymmetric mechanism is always faster for encrypting a large file

### Q159

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

Which component primarily provides confidentiality for large content after a shared key has been established?

- **A.** A digital signature alone
- **B.** A public certificate alone
- **C.** An unkeyed hash function
- **D.** Symmetric encryption such as AES

### Q180

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

What input is required to create a digital signature?

- **A.** A public certificate without a private key
- **B.** A message and a private signing key
- **C.** A message and only a public verification key
- **D.** KEM ciphertext only

### Q212

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

What is the primary role of a digital signature?

- **A.** Hiding the message content from the public
- **B.** Creating a quantum channel
- **C.** Authenticating the source and integrity of information
- **D.** Distributing a symmetric key without an additional protocol

### Q218

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** conceptual

Why should a public signing key be tied to a trusted identity?

- **A.** Otherwise, an attacker can provide their own key and a valid signature of their own
- **B.** A public key must be secret from all users
- **C.** The identity association changes the signature size
- **D.** Authentication is unnecessary if Verify returns true

### Q284

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

Which condition is required for a one-time pad to provide perfect secrecy?

- **A.** A short public key reused across messages
- **B.** A long key known to two attackers
- **C.** A secret, random key at least as long as the message, used only once
- **D.** The same random key for every message of the year

### Q388

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** scenario

A storage service places a customer identifier in the associated authenticated data supplied to AES-GCM, while encrypting the record contents as the plaintext. A privacy reviewer asks whether the identifier is concealed. What is the correct answer?

- **A.** AAD is neither encrypted nor authenticated, so it should be removed from the record format.
- **B.** AAD is encrypted by GCM but becomes visible if the authentication tag is omitted from storage.
- **C.** AAD is authenticated but not encrypted; the identifier remains visible unless separately protected.
- **D.** AAD is confidential when the nonce is unique, though it is not covered by the authentication tag, so the identifier is concealed in storage.

### Q418

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Applied
- **Tags:** scenario

A server's disks are fully encrypted at rest, but an attacker obtains privileged access while the server is running. The attacker can read application data through the operating system. What should the incident assessment conclude?

- **A.** The attacker must first obtain a copy of the disk key from backup storage.
- **B.** At-rest encryption does not prevent privileged access to plaintext on a running host.
- **C.** A post-quantum network channel prevents local access to mounted application data.
- **D.** Disk encryption keeps the running application's plaintext isolated from privileged processes.

### Q506

- **Domain:** CYB
- **Subtopic:** cryptography-basics
- **Subtopic name:** Supporting Cryptography Concepts
- **Difficulty:** Foundational
- **Tags:** conceptual

AES, ChaCha20, and 3DES are all examples of which kind of cryptography?

- **A.** Symmetric block or stream ciphers
- **B.** Asymmetric public-key cryptosystems
- **C.** Key encapsulation mechanism schemes
- **D.** One-way cryptographic hash functions

### Q031

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

What is a sound principle for deleting a temporary KEM key?

- **A.** Reuse it without limit and call it temporary
- **B.** Send it to the other party when the connection ends
- **C.** Always retain it in a log for diagnostics
- **D.** Use it for one key-establishment run and delete it as soon as possible after use

### Q072

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

What is key confirmation?

- **A.** Proof of real-world identity without any further assumptions
- **B.** Checking that the other party possesses matching key material
- **C.** Checking that the algorithm was selected in the NIST competition
- **D.** Checking the validity of the course certificate

### Q113

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

Why does a secret KeyGen seed require the same level of protection as a private key?

- **A.** The seed loses its value as soon as the key is generated
- **B.** The key pair can be regenerated from it
- **C.** A seed is always a public key
- **D.** A seed is used only for display purposes

### Q152

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

What is an advantage of separating keys for different roles?

- **A.** It guarantees confidentiality even if all the keys are leaked
- **B.** It makes all keys public
- **C.** It eliminates the need for signatures
- **D.** It reduces unsafe cross-use and links each key to its role

### Q154

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** conceptual

What distinguishes an ephemeral key from a static key?

- **A.** It is always public and therefore is not sensitive
- **B.** It must have fewer bits
- **C.** It is intended for a particular key-establishment run rather than for long-term use
- **D.** It replaces the need for a source of randomness

### Q391

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A storage service encrypts large objects under per-object DEKs, with each DEK wrapped by a KEK. The DEKs and payload encryption are believed uncompromised, but the organization must rotate the KEK. It also knows an attacker may have copied old wrapped DEKs. Which plan is accurate?

- **A.** Rewrap each DEK under the new KEK without bulk payload re-encryption, while recognizing copied old wraps cannot be recalled.
- **B.** Retain the old KEK permanently, since a copied wrapped DEK cannot be used outside the storage service.
- **C.** Re-encrypt each payload because changing the KEK necessarily changes the DEK used for its contents.
- **D.** Delete old wrapped DEKs immediately; their prior copies become unusable when the new KEK is activated and the old wrapping key is retired.

### Q417

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

A backup archive is encrypted with AES, but the encryption key is exported to an unprotected file during each backup job. The archive itself is stored in a restricted repository. Which design change most directly addresses the weakness?

- **A.** Compress the archive before encryption to reduce exposure of its key.
- **B.** Protect the key-management and export path with appropriate access controls.
- **C.** Store the exported key beside the archive to simplify restoration.
- **D.** Increase the AES key length while continuing to export it to an unprotected file.

### Q419

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

A service uses the same raw key for data encryption and for generating message authentication codes. The team says the key is sufficiently long and stored in an HSM. What change best follows sound key management?

- **A.** Publish the key identifier in source control so both functions remain consistent.
- **B.** Retain the shared key but shorten its rotation interval.
- **C.** Use separate keys for distinct purposes, or an approved derivation scheme.
- **D.** Replace the HSM with a longer random key held in application memory.

### Q420

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

A developer generates a 512-bit cryptographic key by concatenating several outputs from a language's ordinary Math.random function. The output looks long and varied in tests. What should the review require?

- **A.** Hash the generated output repeatedly to supply missing unpredictability.
- **B.** Generate the key with an operating-system-backed cryptographically secure random generator.
- **C.** Extend the Math.random output until the key has several thousand bits.
- **D.** Add the current time as another seed to strengthen the generated key.

### Q438

- **Domain:** CYB
- **Subtopic:** keys-and-secrets
- **Subtopic name:** Key and Secret Management
- **Difficulty:** Applied
- **Tags:** scenario

A team stores encrypted customer files and their decryption keys in the same world-readable object-storage bucket. The files use a maintained authenticated-encryption library. What storage change best addresses the key exposure?

- **A.** Increase the file-cipher key length without changing storage permissions, making the exposed ciphertext more resistant to cryptanalysis.
- **B.** Move keys behind an independent, access-controlled key-management boundary.
- **C.** Encrypt the keys with another key stored beside them in the same bucket.
- **D.** Rename the key objects to make them less apparent to bucket readers.

### Q363

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

An internal API validates a client's mutual-TLS certificate and confirms proof of possession of its private key. The application team proposes granting the client access to every API route based solely on that successful TLS check. What is the correct response?

- **A.** Authenticate the client with mTLS, then apply separate policies to authorize particular resources and operations.
- **B.** Use the negotiated cipher suite to decide which API operations an authenticated client may invoke.
- **C.** Treat proof of private-key possession as authorization for all routes covered by the API’s certificate.
- **D.** Grant access based on certificate authentication, then use authorization checks only for clients without a recognized role.

### Q401

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

An internal service mesh now encrypts every connection with a post-quantum key exchange. A team proposes skipping authorization checks for requests from inside the mesh to reduce latency. Which design decision best preserves the intended security boundary?

- **A.** Permit requests from approved subnets, then review access logs for suspicious patterns.
- **B.** Require post-quantum client certificates at the perimeter and inherit that decision internally.
- **C.** Authenticate each workload and authorize access to the specific resource it requests.
- **D.** Treat mesh membership as sufficient because workload traffic is encrypted and confined to the service network.

### Q402

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

A partner service presents a valid mutual-TLS client certificate issued for its tenant. Its API request names a customer record belonging to another tenant. The certificate proves the caller's service identity, but does not encode permission for every record. What should the API do?

- **A.** Allow the request because the authenticated connection uses a post-quantum profile.
- **B.** Check the tenant boundary and the caller's authorization for the requested record.
- **C.** Use the certificate's organization field as the record-level authorization decision.
- **D.** Return the record because mutual TLS verified the partner's certificate and tenant identity.

### Q416

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

A broad service account can ask a KMS to decrypt any tenant's data key, with no workload binding or approval boundary. The team proposes changing the KMS connection to a post-quantum profile as its sole corrective action. What is the stronger control plan?

- **A.** Increase KMS key size while preserving the service account's broad permissions.
- **B.** Reduce request logging because encrypted transport protects KMS operations.
- **C.** Limit decrypt permissions by workload and purpose, and audit the authorization boundaries.
- **D.** Move the endpoint to an internal subnet without changing its access policy.

### Q436

- **Domain:** CYB
- **Subtopic:** identity-and-access
- **Subtopic name:** Identity, Authorization and Zero Trust
- **Difficulty:** Applied
- **Tags:** scenario

An attacker steals a user's authenticated session token and reuses it from a new device. The application connection uses a strong post-quantum TLS profile. Which response best addresses the incident?

- **A.** Replace the TLS group while preserving the current session token.
- **B.** Keep the token active because the connection uses strong post-quantum TLS.
- **C.** Treat the bearer token as proof that its original user remains present.
- **D.** Revoke the session and apply contextual access checks to subsequent requests.

### Q404

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Applied
- **Tags:** scenario

After a transport upgrade, an audit finds that user passwords are still stored as unsalted SHA-256 hashes. The team argues that the new post-quantum channel makes password recovery attacks impractical. Which remediation addresses the remaining database risk?

- **A.** Use a maintained adaptive password hash, such as Argon2id, with a tested cost setting.
- **B.** Encrypt the existing SHA-256 values with the key used for network connections.
- **C.** Retain SHA-256 but add a longer output field to the password database.
- **D.** Apply one shared public salt before hashing every account's password.

### Q405

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Foundational
- **Tags:** scenario

Two employees independently choose the same password. The authentication database uses a different randomly generated salt for each account and stores each resulting password hash. Which conclusion should an auditor draw?

- **A.** The hashes should match because both accounts use the same password.
- **B.** The salts increase the shared password's entropy and make it harder to guess.
- **C.** The salts act as a secret authentication factor that replaces password policy, so the shared password creates no meaningful account risk.
- **D.** The hashes should differ, limiting reuse of one precomputed result across accounts.

### Q406

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Applied
- **Tags:** scenario

A database breach exposes password hashes and a pepper stored in the same table. The pepper was intended to provide a separate secret. Which response addresses the disclosed pepper as well as the failed storage separation?

- **A.** Store a longer pepper in another field of the breached database.
- **B.** Use each account's public identifier as a replacement pepper.
- **C.** Replace the exposed pepper, arrange affected password resets, and keep its replacement in a separately controlled vault or HSM.
- **D.** Put the replacement pepper in the application repository so every server can retrieve it reliably, while keeping it out of the database table.

### Q407

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Advanced
- **Tags:** scenario

An authentication service raises Argon2id's memory setting to the largest value supported by its library. Under peak login load, legitimate users experience timeouts and the service exhausts memory. What is the best engineering response?

- **A.** Limit concurrent logins during peaks without evaluating the configured hash cost.
- **B.** Benchmark suitable costs under expected load and apply request rate limits.
- **C.** Replace Argon2id with a fast hash to reduce authentication latency.
- **D.** Retain the maximum memory setting and scale out until peak logins complete.

### Q408

- **Domain:** CYB
- **Subtopic:** password-security
- **Subtopic name:** Password Storage and Verification
- **Difficulty:** Applied
- **Tags:** scenario

A service is moving accounts from a legacy password hash to a modern adaptive scheme. The database contains only old hashes, and the team has no access to users' plaintext passwords. How should it upgrade existing accounts?

- **A.** Rehash a supplied password after it verifies at login or during a reset.
- **B.** Keep legacy hashes active until a database refresh makes plaintext available.
- **C.** Recover each plaintext password by reversing the legacy hash computation.
- **D.** Hash each legacy hash again and use that value as the new password verifier.

### Q397

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Foundational
- **Tags:** scenario

An API receives a signed JWT over HTTPS. A developer assumes the claims are secret because the token has a digital signature and traveled over TLS. What should the application team understand?

- **A.** Claims are confidential when a JWT uses an RSA signature, but visible with other algorithms, so the token's algorithm determines privacy.
- **B.** A digital signature encrypts JWT claims so only the issuer and intended API can read them.
- **C.** TLS keeps the token confidential in later logs and storage, even after the connection ends.
- **D.** A signed JWT is generally readable by token holders; its signature and TLS transport do not encrypt claims at rest.

### Q409

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Advanced
- **Tags:** scenario

A token-validation service accepts a signed JWT. During a security review, testers show that an attacker can modify the token's algorithm header and cause the verifier to try a different validation method. What change should the service make?

- **A.** Pin permitted algorithms and bind each verification key to its intended algorithm.
- **B.** Accept the token's stated algorithm whenever its signature check succeeds.
- **C.** Rely on encrypted service connections instead of validating token signatures.
- **D.** Accept any signature algorithm when the token includes a trusted issuer claim, since that claim is sufficient to determine the verification policy.

### Q410

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Applied
- **Tags:** scenario

A billing service issues a correctly signed JWT for its own API. A separate administration API accepts that token because it trusts the same issuer and verifies the signature. The token was not intended for administration. What validation is missing?

- **A.** Check that the token audience and context are valid for the receiving API.
- **B.** Require a longer subject claim before the API accepts the token.
- **C.** Require the administration API to use a post-quantum transport cipher suite.
- **D.** Verify the same issuer's signature a second time with its private key.

### Q411

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Advanced
- **Tags:** scenario

A service receives a nested JWT whose outer layer decrypts successfully. The decrypted inner JWT contains a signature that fails verification. The application proposes accepting the claims because the outer encryption succeeded. What should it do?

- **A.** Reject the token because the required inner signature did not validate.
- **B.** Trust the inner claims when the outer token names a recognized issuer.
- **C.** Accept the claims because successful outer decryption confirms the sender's identity.
- **D.** Retry verification using another algorithm advertised in the inner header.

### Q412

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Applied
- **Tags:** scenario

An API expects an access token but mistakenly accepts a valid identity token issued to the same client. The identity token has a valid signature, and both tokens come from the same provider. Which control best prevents this token-confusion path?

- **A.** Accept both token types when they share a signing key and issuer.
- **B.** Require identity tokens to arrive over a separately routed network.
- **C.** Check the expiration time and otherwise treat both token types alike.
- **D.** Apply distinct token validation rules, including type and audience checks.

### Q413

- **Domain:** CYB
- **Subtopic:** tokens-and-application-security
- **Subtopic name:** Tokens and Application Security
- **Difficulty:** Applied
- **Tags:** scenario

A service signs JWTs with HS256 using a short human-generated passphrase. The team argues that the passphrase is adequate because all traffic uses post-quantum-protected TLS. What should the security review recommend?

- **A.** Choose a faster HMAC algorithm while retaining the existing passphrase.
- **B.** Keep the passphrase because TLS prevents attackers from testing token signatures offline.
- **C.** Append a public service name to the passphrase to increase its effective entropy.
- **D.** Generate and manage a high-entropy secret suitable for HS256.

### Q099

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** conceptual

What is an appropriate response to discovering a vulnerability in a PQC implementation in use?

- **A.** Increase the parameter only, without checking whether the vulnerability depends on key size
- **B.** Ignore the vulnerability if the mathematical specification has not changed and the algorithm is standardized
- **C.** Assess the scope, update or replace the implementation, and evaluate key impact
- **D.** Always revert to RSA without assessing scope, policy, or confidentiality implications

### Q120

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** conceptual

What additional measure is needed alongside PQC for a compromised endpoint?

- **A.** Only increase the ML-KEM parameter set
- **B.** Address the compromise, keys, and permissions
- **C.** Only change the algorithm name
- **D.** Assume that quantum resistance has resolved the compromise

### Q304

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An organization discovers active exploitation of a remote-access flaw while a separate team is preparing a PQC lab pilot. There is no evidence of a quantum attack. What is the sound response?

- **A.** Complete the PQC pilot first so incident responders can use its new baseline.
- **B.** Contain and investigate the exploited flaw through incident response while the migration work proceeds separately.
- **C.** Prioritize cryptographic discovery of the remote-access environment before containing the flaw.
- **D.** Treat the exploitation as evidence that the affected service needs immediate PQC replacement.

### Q403

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

An application host is compromised, but its service account still has permission to request KMS decryption of customer records. The network path to the KMS is protected with a post-quantum transport profile. Which response best addresses the immediate risk?

- **A.** Re-encrypt the records but retain the application identity for routine service access.
- **B.** Contain the host and identity, restrict decryption rights, and investigate prior key use.
- **C.** Strengthen the KMS transport profile while leaving the compromised service identity active.
- **D.** Keep current permissions and use KMS audit alerts to identify unauthorized requests.

### Q414

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario

A developer discovers a production private key in a public repository. The file has just been deleted in a new commit, and a post-quantum replacement is planned for next quarter. What is the appropriate immediate response?

- **A.** Keep the key active until the future replacement passes deployment testing.
- **B.** Wait for the planned migration because the replacement key will supersede it, avoiding an interim rotation that will soon be retired.
- **C.** Remove repository history and assume the private key was not copied.
- **D.** Treat the key as exposed, revoke or rotate it, and investigate possible prior use.

### Q415

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

An incident team confirms that an attacker stole a data-encryption key and may have copied the ciphertext it protects. The organization proposes using a post-quantum key exchange for future KMS sessions. Which statement should guide the recovery plan?

- **A.** Larger keys for future KMS sessions make copied ciphertext safe retroactively.
- **B.** The new exchange prevents decryption of ciphertext already copied under the stolen key.
- **C.** A future key exchange cannot undo exposure of data decryptable with the stolen key.
- **D.** Close the incident if current KMS logs show no further decryption requests.

### Q423

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario, troubleshooting

A monitoring alert reports a bug in one vendor's ML-KEM decapsulation library. Investigation has found a crash on malformed input but no evidence of a mathematical break or secret recovery. What is the most defensible initial incident assessment?

- **A.** Remove post-quantum controls before collecting details about the affected library.
- **B.** Dismiss the issue because standardized algorithms cannot have implementation defects, and the observed behavior concerns malformed input only.
- **C.** Declare the post-quantum key-establishment algorithm family broken immediately.
- **D.** Determine the implementation's exposure and impact before characterizing the algorithm family.

### Q424

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

An organization confirms that an attacker obtained an active software-signing private key. The attacker may have signed artifacts, but the affected release set is not yet known. What should the incident lead prioritize?

- **A.** Delete signing records to limit further disclosure about the incident.
- **B.** Keep signing available until all customers have installed replacement trust material.
- **C.** Re-sign existing packages before establishing their provenance and integrity.
- **D.** Stop unauthorized signing, revoke or rotate the key, and investigate potentially affected artifacts.

### Q425

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario

During a cryptographic incident, responders find logs that may contain sensitive identifiers and evidence of unauthorized key use. One manager proposes deleting all logs immediately to prevent further disclosure. What is the better response?

- **A.** Share the logs broadly so teams can independently search for indicators.
- **B.** Preserve relevant evidence with restricted access while containing the incident.
- **C.** Delay containment until every administrator has reviewed the available logs, ensuring the response decision reflects a complete incident timeline
- **D.** Delete all logs and reconstruct the event timeline after service recovery.

### Q427

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario

A database backup file restores successfully in a recovery exercise, but the restored service cannot decrypt its records because the required historical keys and permissions are unavailable. What should the next recovery test include?

- **A.** Test the current production key regardless of the archive's age.
- **B.** Test the required keys, permissions, metadata, and restored-data integrity.
- **C.** Verify only that the backup archive passes a file-integrity check, which confirms the recovery file is intact and ready for service use.
- **D.** Apply a new encryption algorithm after the restoration attempt.

### Q443

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A security platform generates ten thousand cryptographic alerts in one day, but no team owns triage and there is no escalation process. Leadership proposes collecting more telemetry to improve detection. What should be fixed first?

- **A.** Suppress alerts until the organization deploys another cryptographic algorithm.
- **B.** Increase alert volume so less common cryptographic incidents appear more often.
- **C.** Forward every alert to all administrators without assigning triage responsibility.
- **D.** Assign ownership and define triage, escalation, and response actions for alerts.

### Q446

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Advanced
- **Tags:** scenario

An attacker modifies a fleet trust store to add a rogue post-quantum root certificate. All algorithms in the new certificate chain are considered strong. Which control should the incident team prioritize?

- **A.** Restore trust anchors through an approved, integrity-protected distribution process.
- **B.** Disable certificate path validation to prevent selection of the rogue root.
- **C.** Accept the added root because it uses a post-quantum signature algorithm.
- **D.** Increase the root certificate's key size without changing the trust-store contents, so the accepted anchor is harder to compromise cryptographically.

### Q449

- **Domain:** CYB
- **Subtopic:** incident-response-and-recovery
- **Subtopic name:** Incident Response, Evidence and Recovery
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

After a cryptographic outage, a post-incident review finds that teams lacked an accurate dependency map, recovery instructions were outdated, and responders had not practiced escalation. What should the organization prioritize in its improvement plan?

- **A.** Update dependency maps, runbooks, monitoring, and training based on the findings.
- **B.** Remove incident records to avoid delaying upcoming migration work.
- **C.** Attribute the outage to the algorithm choice and repeat deployment without further analysis.
- **D.** Close the review because service restoration has already been completed.

### Q155

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** conceptual

What is the risk when plaintext is written to a log before PQC encryption?

- **A.** Replacing the server's signature is sufficient to protect the log contents retroactively
- **B.** There is no leak if the information is encrypted before it leaves the network, even when the log itself is accessible
- **C.** Disclosure outside the cryptographic protection
- **D.** Increasing the ML-KEM parameter also makes a plaintext copy in the log confidential

### Q329

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A dataset has expired under its approved retention schedule, has no legal hold, and has no remaining business need. The owner suggests keeping it indefinitely because it is encrypted. What is the sound advice?

- **A.** Keep the data and rotate its encryption key periodically to preserve future options.
- **B.** Retain the records until every system using the same encryption algorithm has migrated.
- **C.** Apply validated data minimization and remove it through the controlled disposal process.
- **D.** Create an additional encrypted copy before deciding whether the data still has a business use.

### Q428

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario

Ransomware uses valid stolen credentials to encrypt files on a server whose network connections use post-quantum protection. The incident team is reviewing controls to reduce recurrence and restore operations. Which plan addresses the principal risk?

- **A.** Remove backups so ransomware cannot locate recovery copies.
- **B.** Treat the incident as unrelated to security because encryption was involved.
- **C.** Use segmentation and least privilege, and validate tested recovery procedures.
- **D.** Strengthen transport keys while leaving file access permissions unchanged.

### Q429

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A dashboard reports zero TLS downgrade alerts, but the collection agent has been offline for two days and has sent no health heartbeat. A manager wants to mark the migration control green. What should the monitoring team do?

- **A.** Mark the evidence incomplete and restore or verify monitoring coverage.
- **B.** Suppress the health warning because no downgrade event was reported.
- **C.** Report zero alerts as evidence that no downgrade has occurred.
- **D.** Replace the collector with periodic manual sampling of selected hosts, then treat the absence of sampled downgrade alerts as fleet-wide enforcement evidence.

### Q430

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

An asset scanner cannot reach several production systems because a network change is pending. The inventory dashboard currently labels every unreachable system as compliant because it has no findings. How should the reporting model change?

- **A.** Remove unreachable systems from the inventory until the scanner can connect.
- **B.** Separate unknown coverage from pass and fail, and document the scan limitation.
- **C.** Retain compliant status because an empty scan result indicates no issue was found.
- **D.** Mark every unreachable system failed without recording the evidence gap.

### Q432

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario, business_scenario

A supplier provides a technically valid benchmark for its cryptographic module, but the update package containing that module is unsigned. The procurement team wants to accept the update because the measured algorithm performance meets its target. What is the sound conclusion?

- **A.** Accept the update because its benchmark confirms that the supplier produced it.
- **B.** Require appropriate evidence of package authenticity and integrity as well.
- **C.** Reject performance benchmarks as irrelevant to cryptographic assurance decisions.
- **D.** Install the package first and check its signature after deployment.

### Q437

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Applied
- **Tags:** scenario

An application sends customer data over a post-quantum encrypted connection, but debug logs record the same plaintext before transmission. The logs are retained in a shared analytics platform. What change most directly reduces this exposure?

- **A.** Retain logs longer so unusual access can be investigated retrospectively, relying on the encrypted transport to protect customer data.
- **B.** Disable transport encryption because the logs already contain plaintext.
- **C.** Increase the transport key size to protect data already written to logs.
- **D.** Minimize and redact sensitive log fields, and restrict access to retained logs.

### Q442

- **Domain:** CYB
- **Subtopic:** defensive-controls-and-resilience
- **Subtopic name:** Defensive Controls, Monitoring and Resilience
- **Difficulty:** Advanced
- **Tags:** scenario, business_scenario

A threat model distinguishes a passive adversary that records encrypted traffic from an active attacker who can steal credentials and issue valid requests. The architecture team wants one control set for both cases. What is the better planning approach?

- **A.** Select controls according to each attacker's objective, capability, and access path.
- **B.** Treat credential theft as evidence that the cryptographic algorithm has failed.
- **C.** Prioritize larger transport keys because both attackers observe network traffic, using one cryptographic control to address their shared exposure.
- **D.** Use the passive-collection scenario as a sufficient model for both attackers.

