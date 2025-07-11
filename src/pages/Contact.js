import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Reach out using the details below:</p>
      <ul className="contact-info">
        <li>📧 Email: info@yourdomain.com</li>
        <li>📞 Phone: +91-9876543210</li>
        <li>📍 Location: Jaipur, India</li>
      </ul>
    </div>
  );
};

export default Contact;
