// src/IoT.js
import React from 'react';
import './IoT.css'; // Import CSS for styling

// Import images
import iotOverviewImage from './assets/iot.avif'; // Example image path
import iotDevicesImage from './assets/iot 2.avif'; // Example image path
import iotApplicationsImage from './assets/iot 3.png'; // Example image path

function IoT() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>IoT Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. IoT Overview</h2>
        <img src={iotOverviewImage} alt="IoT Overview" className="section-image" />
        <p>
          The Internet of Things (IoT) refers to the network of physical objects that are embedded with sensors, software, and other technologies to connect and exchange data with other devices and systems over the internet. IoT is transforming various industries by enabling smarter operations, improved efficiency, and enhanced user experiences.
        </p>
        <p>
          Key components include sensors, connectivity, data processing, and user interfaces. Understanding these fundamentals helps in designing effective IoT solutions.
        </p>

        <h2>2. IoT Devices and Connectivity</h2>
        <img src={iotDevicesImage} alt="IoT Devices" className="section-image" />
        <p>
          IoT devices range from simple sensors to complex systems that perform various functions. These devices communicate via different protocols like Wi-Fi, Bluetooth, Zigbee, and LoRaWAN. Selecting the appropriate communication protocol depends on factors like range, power consumption, and data transfer needs.
        </p>
        <p>
          Connectivity is crucial for IoT systems. It involves ensuring reliable and secure connections between devices and networks, enabling seamless data flow and integration with cloud services.
        </p>

        <h2>3. IoT Applications and Security</h2>
        <img src={iotApplicationsImage} alt="IoT Applications" className="section-image" />
        <p>
          IoT applications span various domains including smart homes, healthcare, industrial automation, and smart cities. Each application area requires tailored solutions to address specific needs and challenges.
        </p>
        <p>
          Security is a critical aspect of IoT, involving measures to protect devices, data, and communications from unauthorized access and breaches. Implementing robust security practices and protocols is essential for maintaining the integrity and confidentiality of IoT systems.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Alex Johnson</p>
        <p><strong>Email:</strong> alexjohnson@example.com</p>
        <p><strong>Contact Number:</strong> (555) 987-6543</p>
        <p><strong>Cabin Number:</strong> 407</p>
      </footer>
    </div>
  );
}

export default IoT;
