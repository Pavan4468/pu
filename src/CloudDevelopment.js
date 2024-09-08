// src/CloudDevelopment.js
import React from 'react';
import './CloudDevelopment.css'; // Import CSS for styling

// Import images
import awsImage from './assets/cloud.jpg';// Example image path
import azureImage from './assets/cloud 2.jpeg';// Example image path
import googleCloudImage from './assets/cloud 3.jpg'; // Example image path

function CloudDevelopment() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Cloud Development Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Amazon Web Services (AWS)</h2>
        <img src={awsImage} alt="AWS" className="section-image" />
        <p>
          Amazon Web Services (AWS) is a comprehensive cloud platform offering over 200 fully featured services from data centers globally. AWS provides a range of cloud services including computing power, storage, and databases, as well as machine learning, analytics, and Internet of Things (IoT).
        </p>
        <p>
          Key areas to focus on include understanding AWS EC2 for scalable computing, S3 for storage, RDS for managed databases, and Lambda for serverless computing. Familiarity with AWS's IAM for security and CloudFormation for infrastructure as code is also essential.
        </p>

        <h2>2. Microsoft Azure</h2>
        <img src={azureImage} alt="Azure" className="section-image" />
        <p>
          Microsoft Azure is a cloud computing platform and service created by Microsoft for building, testing, deploying, and managing applications and services. Azure provides a broad range of services including virtual machines, databases, and networking.
        </p>
        <p>
          Key components include Azure Virtual Machines for compute resources, Azure Blob Storage for scalable storage, Azure SQL Database for relational data, and Azure Functions for serverless computing. Understanding Azure Active Directory for identity management and Azure DevOps for continuous integration and deployment is crucial.
        </p>

        <h2>3. Google Cloud Platform (GCP)</h2>
        <img src={googleCloudImage} alt="Google Cloud" className="section-image" />
        <p>
          Google Cloud Platform (GCP) offers a range of cloud computing services from Google, including computing, storage, and machine learning. GCP is known for its data analytics capabilities and integration with Google’s powerful AI and machine learning tools.
        </p>
        <p>
          Focus areas include Google Compute Engine for scalable computing, Google Cloud Storage for durable object storage, Google Cloud SQL for managed databases, and Google Cloud Functions for event-driven serverless computing. Familiarity with Google Kubernetes Engine (GKE) for container orchestration and BigQuery for large-scale data analytics is also important.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Emily Davis</p>
        <p><strong>Email:</strong> emilydavis@example.com</p>
        <p><strong>Contact Number:</strong> (555) 123-4567</p>
        <p><strong>Cabin Number:</strong> 303</p>
      </footer>
    </div>
  );
}

export default CloudDevelopment;
