import React from 'react';
import '../styles/Home.css';

const ServiceCard = ({ title }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <p>We deliver outstanding {title} solutions to our clients.</p>
    </div>
  );
};

export default ServiceCard;
