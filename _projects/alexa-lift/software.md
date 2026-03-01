---
title: Software
layout: project
sidebar: alexa-lift
---

## Overview

The software connects voice commands to embedded motor control logic.

The focus was reliability and low-latency actuation.

---

## Architecture

- Alexa Skill (Voice Interface)
- Cloud Function / IoT Endpoint
- Embedded Firmware
- GPIO Control Layer

---

## Firmware Logic

Pseudo flow:

1. Wait for incoming command
2. Validate command
3. Activate motor for fixed duration
4. Stop motor
5. Return confirmation

---

## Failure Handling

- Timeout protection
- Prevent double-trigger
- Fail-safe motor stop

---

## Lessons Learned

- Cloud latency must be expected
- Always debounce physical outputs
- State tracking is critical for mechanical systems
