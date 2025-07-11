import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="page-container">
      <h1>Our Portfolio</h1>
      <p>Take a look at some of our favorite projects:</p>
      <div className="portfolio-grid">
        <div className="portfolio-item">💼 Project A</div>
        <div className="portfolio-item">🛍️ Project B</div>
        <div className="portfolio-item">📱 Project C</div>
        <div className="portfolio-item">📊 Project D</div>
      </div>
    </div>
  );
};

export default Portfolio;
