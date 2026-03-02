---
title: Electronics
layout: project
sidebar: alexa-lift
project_title: Alexa-Based Elevator Interface
---

## Power Architecture Evolution

### Iteration 1 & 2
- Powered via USB power bank
- External cable exposed
- Portable but inelegant

### Iteration 3
- Located unused 24V output rail inside lift control supply
- Added DC-DC buck converter (24V → 5V USB)
- Eliminated external power bank
- Cleaner installation

## Switching Mechanism

All versions used a single-channel relay module to simulate a button press.

Design reasoning:
- Galvanic isolation
- Simple actuation logic
- Low firmware complexity

Future improvement:
- Replace relay with optocoupler or MOSFET for longevity