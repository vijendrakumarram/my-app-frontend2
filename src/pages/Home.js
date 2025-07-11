// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Background */}
      <div className="hero">
        <div className="hero-content">
          <h1>Welcome to Vijendra's Digital World</h1>
          <p>We build creative websites, apps, and digital experiences that matter.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-box">
          <h3>Web Development</h3>
          <p>We design and build beautiful responsive websites tailored to your business.</p>
        </div>
        <div className="feature-box">
          <h3>App Solutions</h3>
          <p>Mobile apps built with performance, security, and elegance in mind.</p>
        </div>
        <div className="feature-box">
          <h3>Branding</h3>
          <p>Logos, color palettes, and complete brand kits to give your business a unique identity.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
