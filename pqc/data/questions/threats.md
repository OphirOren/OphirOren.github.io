# Domain: Quantum Threats, Risk, and Mitigation

### Q1. Which asset should receive the highest priority against Harvest Now, Decrypt Later (HNDL)?
A. Public telemetry retained for one week
B. A trade secret encrypted today that must stay confidential for 20 years
C. A certificate that expires tomorrow
D. A hash of a public file
**Answer: B**
**Explanation:** Long confidentiality lifetime creates exposure before a CRQC exists, so HNDL risk is highest for long-lived secrets.

### Q2. What is the core idea behind Mosca-style quantum risk logic?
A. Migrate only after a CRQC is public
B. Compare data lifetime, migration time, and time until a relevant quantum threat
C. Replace all hashes immediately
D. Prefer QKD over inventory
**Answer: B**
**Explanation:** Risk rises when the sum of secrecy lifetime and migration time approaches or exceeds the expected arrival of a capable quantum adversary.
