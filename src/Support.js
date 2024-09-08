// src/Support.js
import React from 'react';
import './Support.css'; // Import CSS for styling

// Import images
import webDevImage from './assets/web dev.avif';
import aiImage from './assets/ai.jpeg';
import cybersecurityImage from './assets/cyber.avif';
import dataScienceImage from './assets/data.jpg';
import mobileAppImage from './assets/app dev.png';
import cloudDevImage from './assets/cloud.jpg';
import devopsImage from './assets/devops.png';
import gameDevImage from './assets/game dev.jpeg';
import virtualRealityImage from './assets/virtual.jpg';
import iotImage from './assets/iot.avif';

function Support() {
  return (
    <div className="support-container">
      <header className="support-header">
        <h1>Explore Different Paths</h1>
      </header>
      <section className="cards-container">
        <div className="card" onClick={() => window.location.href = '/web-development'}>
          <img src={webDevImage} alt="Web Development" />
          <h3>Web Development</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/ai'}>
          <img src={aiImage} alt="Artificial Intelligence" />
          <h3>Artificial Intelligence</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/cybersecurity'}>
          <img src={cybersecurityImage} alt="Cybersecurity" />
          <h3>Cybersecurity</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/data-science'}>
          <img src={dataScienceImage} alt="Data Science" />
          <h3>Data Science</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/mobileApp'}>
          <img src={mobileAppImage} alt="Mobile App Development" />
          <h3>Mobile App Development</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/cloud-development'}>
          <img src={cloudDevImage} alt="Cloud Development" />
          <h3>Cloud Development</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/devops'}>
          <img src={devopsImage} alt="DevOps" />
          <h3>DevOps</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/game-dev'}>
          <img src={gameDevImage} alt="Game Development" />
          <h3>Game Development</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/virtual-reality'}>
          <img src={virtualRealityImage} alt="Virtual Reality" />
          <h3>Virtual Reality</h3>
        </div>
        <div className="card" onClick={() => window.location.href = '/iot'}>
          <img src={iotImage} alt="IoT" />
          <h3>IoT</h3>
        </div>
      </section>
      <footer className="support-footer">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Support;
