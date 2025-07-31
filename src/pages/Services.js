import React from 'react';
import { FaChalkboardTeacher, FaCube, FaMobileAlt, FaRocket } from 'react-icons/fa';

const services = [
  {
    title: 'Immersive Learning',
    description: 'We design interactive XR experiences that redefine how education is delivered and consumed.',
    icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
  },
  {
    title: 'AR/VR Solutions',
    description: 'Custom Augmented and Virtual Reality applications tailored for training, marketing, and simulations.',
    icon: <FaCube className="text-4xl text-orange-500" />,
  },
  {
    title: 'Mobile App Development',
    description: 'We build smart, responsive mobile apps for both Android and iOS platforms.',
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
  },
  {
    title: 'Creative Prototyping',
    description: 'We rapidly turn your product ideas into functional digital prototypes for user testing and feedback.',
    icon: <FaRocket className="text-4xl text-purple-500" />,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6">Our Services</h2>
        <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
          We craft interactive solutions using cutting-edge XR and web technologies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
