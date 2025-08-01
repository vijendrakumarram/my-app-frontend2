import React from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiSmartphone, FiPlay } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";

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
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900">What We Do</h2>
          <p className="text-gray-600 mt-4 text-lg">Innovating Learning Through Technology</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center">
          {/* Web Development */}
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-green-600 text-5xl mb-5 flex justify-center">
              <FiGlobe />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Web Development</h3>
            <p className="text-gray-600 text-sm">
              We craft responsive, modern websites that represent your brand and goals perfectly.
            </p>
          </div>

          {/* App Development */}
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 text-5xl mb-5 flex justify-center">
              <FiSmartphone />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">App Development</h3>
            <p className="text-gray-600 text-sm">
              Custom Android & iOS apps using the latest frameworks tailored to user needs.
            </p>
          </div>

          {/* Game Development */}
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-green-600 text-5xl mb-5 flex justify-center">
              <FiPlay />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Game Development</h3>
            <p className="text-gray-600 text-sm">
              Immersive 2D/3D games built using Unity and Unreal Engine, designed to engage and inspire.
            </p>
          </div>

          {/* UI/UX Design */}
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 text-5xl mb-5 flex justify-center">
              <MdDesignServices />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-sm">
              We design intuitive interfaces and beautiful experiences that delight users and improve engagement.
            </p>
          </div>

          {/* Online Training */}
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-green-600 text-5xl mb-5 flex justify-center">
              <FaChalkboardTeacher />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Online Training</h3>
            <p className="text-gray-600 text-sm">
              Interactive tech-based learning modules and live sessions for students and professionals.
            </p>
          </div>

          {/* Cloud Solutions */}
          <div className="bg-white shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
            <div className="text-blue-600 text-5xl mb-5 flex justify-center">
              <AiOutlineCloudServer />
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Cloud Solutions</h3>
            <p className="text-gray-600 text-sm">
              We build scalable cloud apps and backend systems with high performance and security.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
