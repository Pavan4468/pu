// src/WebDevelopment.js
import React from 'react';
import './WebDevelopment.css'; // Import CSS for styling

// Import images
import frontEndImage from './assets/web dev.avif'; // Example image path
import backEndImage from './assets/web 2.jpg'; // Example image path
import devOpsImage from './assets/web 3.png'; // Example image path

function WebDevelopment() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Web Development Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Front-End Development</h2>
        <img src={frontEndImage} alt="Front-End Development" className="section-image" />
        <p>
          Front-End Development focuses on creating the visual and interactive aspects of a website. Key technologies include HTML, CSS, and JavaScript. Frameworks and libraries like React, Angular, or Vue.js are also important for building dynamic user interfaces.
        </p>

        <h2>2. Back-End Development</h2>
        <img src={backEndImage} alt="Back-End Development" className="section-image" />
        <p>
          Back-End Development involves server-side programming and database management. This includes working with server-side languages like Node.js, Python, Ruby, or PHP, and understanding databases such as MySQL, PostgreSQL, or MongoDB. APIs facilitate communication between front-end and back-end systems.
        </p>

        <h2>3. DevOps & Deployment</h2>
        <img src={devOpsImage} alt="DevOps & Deployment" className="section-image" />
        <p>
          DevOps encompasses practices for automating and streamlining the software development lifecycle. Key areas include version control with Git, continuous integration/continuous deployment (CI/CD), and deployment strategies. Tools like Docker and cloud platforms play a significant role in modern DevOps practices.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Contact Number:</strong> (123) 456-7890</p>
        <p><strong>Cabin Number:</strong> 102</p>
      </footer>
    </div>
  );
}

export default WebDevelopment;
