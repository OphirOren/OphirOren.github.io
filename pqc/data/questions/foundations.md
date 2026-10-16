# Domain: Foundations of Quantum Computing and Cryptography

### Q1. An organization uses RSA-3072 for key exchange and AES-256 for data encryption. Which component is at greatest direct risk from a CRQC?
A. AES-256 only
B. RSA-3072
C. Both equally
D. SHA-384 only
**Answer: B**
**Explanation:** Shor targets the math behind asymmetric cryptography such as RSA. AES-256 is affected by Grover but retains a practical security margin.

### Q2. What does Grover's algorithm imply for symmetric cryptography in practice?
A. It fully breaks AES-256 today
B. It gives a quadratic speedup for brute-force search, so longer keys remain a practical mitigation
C. It replaces the need for PQC
D. It only affects hash-based signatures
**Answer: B**
**Explanation:** Grover reduces brute-force search effort roughly quadratically; doubling key length is the usual practical response, not abandoning symmetric crypto.
