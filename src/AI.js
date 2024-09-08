// src/AI.js
import React from 'react';
import './AI.css'; // Import CSS for styling

// Import images
import machineLearningImage from './assets/ai.jpeg';// Example image path
import deepLearningImage from './assets/ai 2.avif';// Example image path
import aiApplicationsImage from './assets/ai 3.png'; // Example image path

function AI() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Artificial Intelligence Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Machine Learning</h2>
        <img src={machineLearningImage} alt="Machine Learning" className="section-image" />
        <p>
          Machine Learning (ML) is a subset of Artificial Intelligence that focuses on developing algorithms that allow computers to learn from and make predictions based on data. It encompasses several types of learning, including supervised, unsupervised, and reinforcement learning. In supervised learning, algorithms are trained on labeled data, while unsupervised learning deals with unlabeled data to find hidden patterns. Reinforcement learning involves training models to make sequences of decisions by rewarding desirable outcomes.
        </p>
        <p>
          Key techniques in machine learning include regression, classification, clustering, and dimensionality reduction. Tools and frameworks such as Scikit-learn, TensorFlow, and PyTorch are widely used in the industry to build and deploy machine learning models.
        </p>

        <h2>2. Deep Learning</h2>
        <img src={deepLearningImage} alt="Deep Learning" className="section-image" />
        <p>
          Deep Learning is a specialized area within machine learning that focuses on neural networks with many layers, known as deep neural networks. These models are capable of automatically learning representations from data, making them highly effective for complex tasks such as image and speech recognition, natural language processing, and autonomous driving.
        </p>
        <p>
          Deep learning models are typically built using frameworks such as TensorFlow, Keras, and PyTorch. Key architectures include Convolutional Neural Networks (CNNs) for image-related tasks, Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) networks for sequential data, and Transformer models for natural language processing.
        </p>

        <h2>3. AI Applications</h2>
        <img src={aiApplicationsImage} alt="AI Applications" className="section-image" />
        <p>
          AI has a wide range of applications across various domains. In healthcare, AI is used for diagnostics, personalized medicine, and drug discovery. In finance, it aids in fraud detection, algorithmic trading, and customer service automation. AI also plays a significant role in autonomous vehicles, smart cities, and virtual assistants.
        </p>
        <p>
          The development of AI technologies often involves integration with other fields such as robotics, data science, and human-computer interaction. As AI continues to advance, it promises to revolutionize industries and drive innovation in ways we are only beginning to explore.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Jane Smith</p>
        <p><strong>Email:</strong> janesmith@example.com</p>
        <p><strong>Contact Number:</strong> (987) 654-3210</p>
        <p><strong>Cabin Number:</strong> 204</p>
      </footer>
    </div>
  );
}

export default AI;
