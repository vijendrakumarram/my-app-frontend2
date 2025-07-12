// src/pages/Portfolio.js
import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Train Simulator',
      description: 'A 3D train simulation built with Unity for enterprise training and interactive demos.',
      video: 'https://www.youtube.com/embed/_v7Bt0jJSxo'
    },
    {
      title: 'Tractor Simulator', 
      description: 'Tractor Simulator is a realistic farming game where you drive tractors to plow fields, plant seeds, and harvest crops.',
      video: 'https://youtu.be/3J-Y5bB6vO0?si=Hd7GxIWzZhcUk2-6'
    },
    {
      title: '🛍️ E-Commerce App',
      description: 'A mobile-first e-commerce application with secure payment integration, user profiles, and dynamic product listings.'
    },
    {
      title: '📊 Project D',
      description: 'Data dashboard for analytics'
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Our Portfolio</h1>
        <p>Discover the innovative solutions we've built for our clients.</p>
      </div>

      <div className="portfolio-cards">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.video && (
              <div className="portfolio-video">
                <iframe
                  width="100%"
                  height="250"
                  src={project.video}
                  title={project.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
