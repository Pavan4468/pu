// src/Cybersecurity.js
import React from 'react';
import './Cybersecurity.css'; // Import CSS for styling

// Import images
import networkSecurityImage from './assets/cyber.avif'; // Example image path
import applicationSecurityImage from './assets/cyber 2.jpg';// Example image path
import incidentResponseImage from './assets/cyber 3.jpeg';// Example image path

function Cybersecurity() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Cybersecurity Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Network Security</h2>
        <img src={networkSecurityImage} alt="Network Security" className="section-image" />
        <p>
          Network Security is a fundamental aspect of cybersecurity focused on protecting the integrity and usability of network and data. It involves measures to safeguard the network infrastructure from unauthorized access, misuse, malfunction, modification, destruction, or improper disclosure. Key components of network security include firewalls, intrusion detection systems (IDS), and encryption protocols.
        </p>
        <p>
          Techniques such as network segmentation, VPNs (Virtual Private Networks), and network monitoring are crucial for identifying and responding to threats. Network security also encompasses the management of network access control, ensuring that only authorized users can access specific network resources.
        </p>

        <h2>2. Application Security</h2>
        <img src={applicationSecurityImage} alt="Application Security" className="section-image" />
        <p>
          Application Security focuses on the measures taken to prevent security vulnerabilities within applications. This includes implementing security practices throughout the software development lifecycle (SDLC), such as secure coding practices, regular security testing, and vulnerability assessments.
        </p>
        <p>
          Common strategies include employing tools for static and dynamic application security testing (SAST and DAST), conducting code reviews, and applying patches and updates. Application security also involves the use of firewalls and intrusion prevention systems to protect applications from attacks.
        </p>

        <h2>3. Incident Response</h2>
        <img src={incidentResponseImage} alt="Incident Response" className="section-image" />
        <p>
          Incident Response is the process of detecting, analyzing, and responding to cybersecurity incidents. An effective incident response strategy involves having a well-defined plan that includes identifying potential threats, assessing the impact, and taking appropriate action to mitigate damage and recover from the incident.
        </p>
        <p>
          Key elements of incident response include incident detection, analysis, containment, eradication, and recovery. Organizations should have an incident response team in place, conduct regular drills, and continuously update their incident response plan based on lessons learned from past incidents.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Alex Johnson</p>
        <p><strong>Email:</strong> alexjohnson@example.com</p>
        <p><strong>Contact Number:</strong> (321) 654-0987</p>
        <p><strong>Cabin Number:</strong> 303</p>
      </footer>
    </div>
  );
}

export default Cybersecurity;
