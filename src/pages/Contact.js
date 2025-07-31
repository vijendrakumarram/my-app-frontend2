// src/pages/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://my-app-backend-62bz.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        alert('❌ Failed to send message. Try again later.');
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Server error. Please try again later.');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto my-16 px-4 py-8 bg-gradient-to-br from-[#f5faff] to-white rounded-xl shadow-xl">
      <h1 className="text-3xl md:text-4xl font-semibold text-center text-blue-900 mb-2">Contact Us</h1>
      <p className="text-center text-gray-600 mb-8">We’d love to hear from you! Fill out the form below:</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-blue-900 hover:to-blue-700 transition-all duration-200"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <ul className="mt-10 p-5 bg-blue-50 rounded-lg text-gray-700 text-sm md:text-base space-y-3 shadow-inner">
        <li className="flex items-center gap-2">📧 <span>Email: vijendrakumarram@gmail.com</span></li>
        <li className="flex items-center gap-2">📞 <span>Phone: +91-8107819076</span></li>
        <li className="flex items-center gap-2">📍 <span>Location: Jaipur, India</span></li>
      </ul>
    </div>
  );
};

export default Contact;
