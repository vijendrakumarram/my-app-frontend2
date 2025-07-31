import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full font-sans">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-fixed flex items-center justify-center text-white px-6"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.5)), url('/assets/home-bg.jpg')"
        }}
      >
        <div className="text-center max-w-3xl z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Welcome to Digital World</h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md">We build creative websites, apps, and digital experiences that matter.</p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 text-base font-semibold rounded-full bg-pink-500 hover:bg-pink-600 transition text-white"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Web Development</h3>
            <p className="text-gray-600 text-sm">We design and build beautiful responsive websites tailored to your business.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">App Solutions</h3>
            <p className="text-gray-600 text-sm">Mobile apps built with performance, security, and elegance in mind.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-1 transition">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">Branding</h3>
            <p className="text-gray-600 text-sm">Logos, color palettes, and complete brand kits to give your business a unique identity.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
