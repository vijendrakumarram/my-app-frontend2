import React from 'react';
import '../styles/Portfolio.css';

const Portfolio = () => {
const projects = [
  {
    title: 'Train Simulator',
    description: 'A realistic 3D train simulator built with Unity, designed for enterprise training and immersive interactive experiences.',
    video: 'https://www.youtube.com/embed/_v7Bt0jJSxo'
  },
  {
    title: 'Tractor Simulator',
    description: 'A realistic 3D farming simulator where players drive tractors to plow fields, plant crops, and manage agricultural tasks.',
    video: 'https://www.youtube.com/embed/YiWx7XSGnYA'
  },
  {
    title: 'Flight Simulator',
    description: 'A high-fidelity 3D flight simulation experience featuring takeoff, landing, and in-air navigation using realistic aircraft physics.',
    video: 'https://www.youtube.com/embed/RmnS7ToFECc'
  },
  {
    title: 'Edverse Metaverse',
    description: 'A 3D metaverse app for virtual education, training, and collaboration in immersive environments.',
    video: 'https://www.youtube.com/embed/5NRsN7OY3cg'
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
