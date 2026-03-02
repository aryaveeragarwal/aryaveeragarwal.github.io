---
title: Alexa-Based Elevator Interface
layout: project
sidebar: alexa-lift
project_title: Alexa-Based Elevator Interface
is_project_home: true
date: 2025-02-09
description: Voice-controlled parallel elevator button interface using ESP32 and relay isolation.
---

## Overview

This project integrates voice control with a standard elevator call button by electrically paralleling the button circuit.

Instead of mechanically pressing the button, the system uses a relay to momentarily short the button terminals, simulating a press.

The system evolved from an external prototype to a fully integrated embedded installation powered directly from the lift’s 24V supply.

## Design Constraints

- Unknown elevator control circuitry
- Must not interfere with existing functionality
- Must remain electrically isolated from microcontroller logic
- Must be compact and installation-ready
- Must avoid visible external power sources

## Final System Architecture

- ESP32-C3 SuperMini
- Single-channel relay module
- 24V → 5V buck converter
- Parallel button shorting interface