---
title: Electronics
layout: project
sidebar: alexa-lift
---

## Overview

The electronics system connects Alexa-triggered cloud commands to a physical motor driver.

The core challenge was safely controlling a lift motor using a microcontroller without damaging components.

---

## System Components

- Microcontroller (ESP8266 / ESP32)
- Relay or MOSFET driver
- DC motor
- External power supply
- Flyback diode

---

## Control Flow

1. Alexa skill triggers cloud event
2. Event hits webhook / IoT endpoint
3. Microcontroller receives command
4. GPIO pin switches driver stage
5. Motor actuates lift

---

## Safety Considerations

- Never power motor directly from microcontroller
- Always include flyback diode
- Separate logic and motor grounds properly
- Use current-rated wiring

---

## Future Improvements

- Replace relay with MOSFET driver
- Add current monitoring
- Add end-stop limit switches
