# (Work in progress)Crowd Tracking using BLE on Raspberry Pi Pico W

This project focuses on the development of a crowd tracking system using Bluetooth Low Energy (BLE) technology in conjunction with the Raspberry Pi Pico W microcontroller. The primary objective is to create a reliable solution for accurately monitoring and tracking the movement of individuals within a designated area.

# Project Overview

The implementation involves the integration of BLE technology to facilitate seamless communication between the Raspberry Pi Pico W and various BLE-enabled wearable devices. By leveraging the capabilities of the Raspberry Pi Pico W, I aim to achieve precise localization and data collection, enabling effective crowd management and optimization of spatial resources.

# Key Features

BLE communication for efficient data exchange
Accurate tracking and monitoring of individual movements
Real-time data collection for crowd management analysis
Compatibility with a wide range of BLE-enabled wearable devices
Flexible deployment in diverse crowded environments

# Panda - BLE Device

The 'Panda' directory contains the MicroPython code specifically designed for the Raspberry Pi Pico W. It includes the necessary scripts and configurations to enable BLE communication and accurate tracking of individuals within the designated area. [Click here to access Panda](https://github.com/Olszewski-Jakub/Panda)

# Bamboo - API that conects evrything together

The 'Bamboo' directory consists of the API code responsible for connecting the Crowdeo Dashboard with the 'Panda' device. The API facilitates seamless data transmission between the crowd tracking system and the dashboard, enabling real-time visualization and analysis of crowd movement data. [Click here to access Bamboo](https://github.com/Olszewski-Jakub/Bamboo)
