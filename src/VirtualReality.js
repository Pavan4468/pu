// src/VirtualReality.js
import React from 'react';
import './VirtualReality.css'; // Import CSS for styling

// Import images
import vrOverviewImage from './assets/virtual.jpg'; // Example image path
import vrTechnologiesImage from './assets/vr 2.png';// Example image path
import vrApplicationsImage from './assets/vr 3.avif'; // Example image path

function VirtualReality() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Virtual Reality Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. VR Overview</h2>
        <img src={vrOverviewImage} alt="VR Overview" className="section-image" />
        <p>
          Virtual Reality (VR) immerses users in a fully digital environment, creating interactive experiences that feel real. It involves using VR headsets and controllers to simulate a virtual world. Key components include VR hardware, software, and user interaction techniques.
        </p>
        <p>
          VR is used in various fields, including gaming, education, healthcare, and training. Understanding VR fundamentals helps in creating immersive and engaging virtual experiences.
        </p>

        <h2>2. VR Technologies</h2>
        <img src={vrTechnologiesImage} alt="VR Technologies" className="section-image" />
        <p>
          Key VR technologies include head-mounted displays (HMDs), motion tracking systems, and haptic feedback devices. HMDs like Oculus Rift and HTC Vive provide the visual and auditory components of VR, while motion tracking systems enable users to interact with the virtual environment.
        </p>
        <p>
          Haptic feedback devices enhance immersion by providing physical sensations that correspond to virtual interactions. Understanding these technologies is crucial for developing effective VR systems.
        </p>

        <h2>3. VR Applications</h2>
        <img src={vrApplicationsImage} alt="VR Applications" className="section-image" />
        <p>
          VR applications span multiple domains, such as entertainment, education, and therapy. In gaming, VR provides immersive experiences that engage players in new ways. In education, VR can simulate complex scenarios and environments for enhanced learning.
        </p>
        <p>
          VR is also used in therapy and rehabilitation, offering virtual environments for treating phobias, managing pain, and improving motor skills. Each application area requires tailored approaches to leverage VR’s full potential.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Jane Smith</p>
        <p><strong>Email:</strong> janesmith@example.com</p>
        <p><strong>Contact Number:</strong> (555) 654-3210</p>
        <p><strong>Cabin Number:</strong> 305</p>
      </footer>
    </div>
  );
}

export default VirtualReality;
