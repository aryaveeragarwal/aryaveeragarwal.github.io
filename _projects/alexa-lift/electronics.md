---
title: Electronics
layout: project
sidebar: alexa-lift
project_title: Alexa-Based Elevator Interface
---

## Button Interface Strategy

The elevator call button operates on a 24V control circuit.

Instead of modifying the control board, the relay was wired in parallel across the button terminals.

When activated, the relay momentarily shorts the terminals, simulating a button press.

This method ensures:

- No firmware-level integration with elevator controller
- Electrical isolation via relay
- Minimal intrusion into existing circuitry

## Power Evolution

### Iteration 1 & 2
- Powered via USB power bank
- External wiring visible
- Prototyping stage

### Iteration 3
- Identified unused 24V rail in lift power supply
- Integrated DC-DC buck converter
- Removed dependency on external battery

This significantly improved deployment cleanliness and reliability.                                                                                                                                      