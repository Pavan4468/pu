// src/GameDev.js
import React from 'react';
import './GameDev.css'; // Import CSS for styling

// Import images
import gameDesignImage from './assets/game dev.jpeg'; // Example image path
import gameDevelopmentImage from './assets/game 2.jpg'; // Example image path
import gameDeploymentImage from './assets/game 3.jpg';// Example image path

function GameDev() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Game Development Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Game Design</h2>
        <img src={gameDesignImage} alt="Game Design" className="section-image" />
        <p>
          Game design is the process of creating the rules, structure, and content of a game. This includes defining gameplay mechanics, storylines, characters, and levels. Game designers use tools such as storyboard sketches, design documents, and prototyping software to visualize and iterate on their ideas.
        </p>
        <p>
          Key concepts in game design include level design, narrative design, and user experience. Tools like Unity and Unreal Engine offer features for game design and prototyping, allowing designers to build and test game concepts.
        </p>

        <h2>2. Game Development</h2>
        <img src={gameDevelopmentImage} alt="Game Development" className="section-image" />
        <p>
          Game development involves the actual creation of the game using programming and scripting. Developers use languages such as C++, C#, and Python, and frameworks like Unity or Unreal Engine to bring the game to life. This stage includes coding gameplay mechanics, integrating assets, and optimizing performance.
        </p>
        <p>
          Key areas include artificial intelligence (AI) for NPC behavior, physics engines, and graphics rendering. Developers also work on implementing user interfaces (UI) and ensuring the game runs smoothly on different platforms.
        </p>

        <h2>3. Game Deployment and Testing</h2>
        <img src={gameDeploymentImage} alt="Game Deployment" className="section-image" />
        <p>
          Game deployment involves preparing the game for release on various platforms, including PC, consoles, and mobile devices. This includes packaging the game, optimizing performance, and ensuring compatibility across platforms.
        </p>
        <p>
          Testing is crucial to identify and fix bugs, improve gameplay, and ensure the game meets quality standards. Techniques include alpha and beta testing, user feedback, and quality assurance (QA). Tools like JIRA and TestRail are commonly used for tracking issues and managing the testing process.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Emily Clarke</p>
        <p><strong>Email:</strong> emilyclarke@example.com</p>
        <p><strong>Contact Number:</strong> (555) 123-4567</p>
        <p><strong>Cabin Number:</strong> 305</p>
      </footer>
    </div>
  );
}

export default GameDev;
