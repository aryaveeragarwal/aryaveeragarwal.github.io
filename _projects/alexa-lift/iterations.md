---
title: Iterations
layout: project
sidebar: alexa-lift
project_title: Alexa-Based Elevator Interface
---

## Iteration 1 — ESP8266 + Power Bank

- ESP8266 module
- Single channel relay
- External USB power bank
- Wire exiting enclosure

Issues:
- Visible wiring
- Power bank charging dependency
- Not installation-ready

---

## Iteration 2 — ESP32-C3 Upgrade

- Migrated to ESP32-C3 SuperMini
- Lower footprint
- Better efficiency

Improvements:
- Smaller enclosure
- Improved stability

Still required external power bank.

---

## Iteration 3 — Integrated Power Solution

- Located unused 24V rail inside lift PSU
- Added buck converter (24V → 5V USB)
- Fully internalized power system

Results:
- Cleaner install
- No charging dependency
- Closer to production-grade integration