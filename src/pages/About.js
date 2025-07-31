import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      desc: 'We constantly explore new ideas to deliver the best digital solutions.',
    },
    {
      title: 'Quality',
      desc: 'We focus on clean code, modern design, and high-performance apps.',
    },
    {
      title: 'Collaboration',
      desc: 'We work closely with our clients to understand and deliver their vision.',
    },
  ];

  const team = [
    {
      name: 'Vijendra Kumar',
      role: 'Co-Founder',
      image: '/assets/vijendra.jpg',
    },
    {
      name: 'Narotham Char',
      role: 'Co-Founder',
      image: '/assets/narotam.jpg',
    },
  ];

  return (
    <div className="w-full font-sans">

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[80vh] bg-cover bg-center md:bg-fixed flex items-center justify-center text-white text-center px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/about-bg.jpg')",
        }}
      >
        <div className="z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Who We Are</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We are a passionate team dedicated to creating powerful digital
            solutions that drive business success.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed">
          To deliver cutting-edge websites and applications that help businesses grow and innovate.
          We combine creativity, technology, and strategy to create seamless user experiences.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-10">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white w-full max-w-xs rounded-2xl shadow-lg mx-auto p-6 text-left hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full border-4 border-blue-600 object-cover mx-auto mb-4"
              />
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-800">{member.name}</h3>
                <p className="text-gray-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
