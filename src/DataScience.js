// src/DataScience.js
import React from 'react';
import './DataScience.css'; // Import CSS for styling

// Import images
import dataCollectionImage from './assets/data.jpg'; // Example image path
import dataAnalysisImage from './assets/data 2.jpeg';// Example image path
import dataVisualizationImage from './assets/data 2.jpg'; // Example image path

function DataScience() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Data Science Roadmap</h1>
      </header>
      <section className="page-content">
        <h2>1. Data Collection</h2>
        <img src={dataCollectionImage} alt="Data Collection" className="section-image" />
        <p>
          Data Collection is the initial and crucial step in the data science process. It involves gathering raw data from various sources such as databases, APIs, and web scraping. Effective data collection strategies ensure that the data is representative, accurate, and sufficient for analysis. Common sources include internal company databases, social media platforms, and public datasets.
        </p>
        <p>
          Techniques for data collection include surveys, experiments, and data mining. Data scientists must ensure the data collected is clean and relevant to the problem they aim to solve.
        </p>

        <h2>2. Data Analysis</h2>
        <img src={dataAnalysisImage} alt="Data Analysis" className="section-image" />
        <p>
          Data Analysis involves examining and processing the collected data to uncover patterns, correlations, and insights. This step typically involves statistical methods, data wrangling, and exploratory data analysis (EDA). Tools and libraries such as Pandas, NumPy, and Scikit-learn in Python are commonly used for data manipulation and analysis.
        </p>
        <p>
          Key tasks include cleaning the data to handle missing values, outliers, and inconsistencies, and applying statistical tests to draw conclusions. Data scientists often use machine learning models to predict trends and make data-driven decisions.
        </p>

        <h2>3. Data Visualization</h2>
        <img src={dataVisualizationImage} alt="Data Visualization" className="section-image" />
        <p>
          Data Visualization is the process of representing data in graphical formats to make complex information more accessible and understandable. Effective visualization helps in communicating insights and findings clearly to stakeholders. Common visualization tools include Matplotlib, Seaborn, and Tableau.
        </p>
        <p>
          Visualizations can range from simple charts and graphs to more complex interactive dashboards. Good data visualization practices involve choosing the right type of chart for the data, ensuring clarity and readability, and highlighting key insights effectively.
        </p>
      </section>
      <footer className="page-footer">
        <h3>Contact Information</h3>
        <p><strong>Teacher:</strong> Emma Davis</p>
        <p><strong>Email:</strong> emmadavis@example.com</p>
        <p><strong>Contact Number:</strong> (456) 789-1230</p>
        <p><strong>Cabin Number:</strong> 404</p>
      </footer>
    </div>
  );
}

export default DataScience;
