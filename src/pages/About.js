// src/pages/About.js
import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div>
      <section className="about-hero">
        <h1>Who We Are</h1>
        <p>
          We are a passionate team dedicated to creating powerful digital
          solutions that drive business success.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          To deliver cutting-edge websites and applications that help businesses grow and innovate. 
          We combine creativity, technology, and strategy to create seamless user experiences.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Core Values</h2>
        <div className="values-container">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>We constantly explore new ideas to deliver the best digital solutions.</p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>We focus on clean code, modern design, and high-performance apps.</p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>We work closely with our clients to understand and deliver their vision.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2>Meet the Team</h2>
        <div className="team-container">
          <div className="team-card">
            <p>John</p>
            <h3>John Doe</h3>
            <p>Lead Developer</p>
          </div>
          <div className="team-card">
            <p>Jane</p>
            <h3>Jane Smith</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-card">
            <p>Mike</p>
            <h3>Mike Johnson</h3>
            <p>Project Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
