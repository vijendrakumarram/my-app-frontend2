// src/pages/About.js
import React from 'react';
import '../styles/About.css';
import vijendraPhoto from '../assets/vijendra.jpg'; // ✅ add this line

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
            <img src={vijendraPhoto} alt="Vijendra Kumar" className="team-photo" /> {/* ✅ Image added */}
            <h3>Vijendra Kumar</h3>
            <p>Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
