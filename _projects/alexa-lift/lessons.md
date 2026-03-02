---
title: Lessons Learned
layout: project
sidebar: alexa-lift
project_title: Alexa-Based Elevator Interface
---

## 1. Prototypes Are Not Deployments

The first two versions worked technically but relied on a power bank and exposed wiring.

This was acceptable for testing but not for long-term integration.

Engineering maturity means moving from “it works” to “it belongs there.”

---

## 2. Power Integration Matters More Than Logic

The control logic was simple.

The real improvement came from integrating into the 24V lift supply using a buck converter.

Power architecture often defines system quality more than firmware complexity.

---

## 3. Isolation Is Critical in Unknown Systems

The elevator control circuitry was not fully documented.

Using a relay ensured electrical isolation between the microcontroller and the lift system.

When working with external control systems, assume unknown risk and design conservatively.

---

## 4. Iteration Quality > First Design

The first version solved the problem.

The third version solved it properly.

The biggest improvement was not in features — it was in integration cleanliness.

---

## 5. Future Improvements

- Replace relay with solid-state switching
- Add transient protection across terminals
- Implement watchdog for fail-safe reset
- Add local manual override switch
- Improve enclosure finishing