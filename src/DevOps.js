// src/DevOps.js
import React from 'react';
import './DevOps.css'; // Import CSS for styling

// Import images
import ciCdImage from './assets/devops.png';// Example image path
import versionControlImage from './assets/devops 2.jpeg';// Example image path
import containerizationImage from './assets/devops 3.png'; // Example image path

function DevOps() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>DevOps Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Continuous Integration and Continuous Deployment (CI/CD)</h2>
        <img src={ciCdImage} alt="CI/CD" className="section-image" />
        <p>
          CI/CD is a crucial practice in DevOps that focuses on automating the process of integrating code changes and deploying them to production. Continuous Integration involves regularly merging code changes into a shared repository, while Continuous Deployment automates the release of new software versions.
        </p>
        <p>
          Key tools in CI/CD include Jenkins, GitLab CI, CircleCI, and Travis CI. Understanding how to set up pipelines, manage build and test automation, and ensure smooth deployments are essential skills.
        </p>

        <h2>2. Version Control Systems</h2>
        <img src={versionControlImage} alt="Version Control" className="section-image" />
        <p>
          Version control systems are essential for managing code changes and collaboration in software development. Tools like Git and platforms like GitHub, GitLab, and Bitbucket enable developers to track changes, branch out, and merge code efficiently.
        </p>
        <p>
          Mastering version control involves understanding concepts such as branching, merging, pull requests, and resolving conflicts. It's crucial for maintaining code integrity and facilitating team collaboration.
        </p>

        <h2>3. Containerization and Orchestration</h2>
        <img src={containerizationImage} alt="Containerization" className="section-image" />
        <p>
          Containerization involves encapsulating an application and its dependencies into a container, providing consistency across different environments. Docker is a popular tool for creating and managing containers.
        </p>
        <p>
          Orchestration tools like Kubernetes are used to manage containerized applications at scale, handling tasks such as deployment, scaling, and monitoring. Knowledge of Docker and Kubernetes is essential for modern DevOps practices.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Alice Johnson</p>
        <p><strong>Email:</strong> alicejohnson@example.com</p>
        <p><strong>Contact Number:</strong> (555) 987-6543</p>
        <p><strong>Cabin Number:</strong> 404</p>
      </footer>
    </div>
  );
}

export default DevOps;
