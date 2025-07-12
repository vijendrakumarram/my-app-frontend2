import React from 'react';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
        <p>We offer powerful solutions to help your business grow digitally.</p>
      </div>

      <div className="service-cards">
        <div className="service-card">
          <h3>🌐 Website Development</h3>
          <p>Custom websites built with clean code, modern UI, and optimized for performance.</p>
        </div>
        <div className="service-card">
          <h3>📱 Mobile App Design</h3>
          <p>Engaging, cross-platform mobile apps that deliver a smooth user experience.</p>
        </div>
        <div className="service-card">
          <h3>🎨 UI/UX Design</h3>
          <p>Beautiful interfaces and user-first designs to drive engagement and satisfaction.</p>
        </div>
        <div className="service-card">
          <h3>⚙️ Custom Software</h3>
          <p>End-to-end software solutions tailored to your business logic and goals.</p>
        </div>

      </div>
    </div>
  );
};

export default Services;
