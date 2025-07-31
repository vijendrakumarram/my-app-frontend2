// src/pages/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const Register = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!phone.trim()) return alert("Please enter your phone number");
    setShowOtp(true);
    // Simulate sending OTP here
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
       {/* ✅ Navbar */}
      <header className="bg-white shadow-md px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-orange-500 rounded-full" />
          <h1 className="text-lg sm:text-xl font-bold text-gray-800">
            SUSHRUSA <span className="text-sm font-normal text-gray-500">eClinic</span>
          </h1>
        </div>
        <button
          onClick={() => navigate("/")}
          className="border border-gray-300 px-3 py-1 sm:px-4 rounded text-sm hover:bg-gray-100 transition"
        >
          ← Back to Home
        </button>
      </header>

      {/* Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Join Sushrusa eClinic</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Your journey to better health starts here
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-8 h-8 rounded-full bg-orange-500 text-white font-semibold flex items-center justify-center">
            1
          </div>
          <div className="h-0.5 w-6 bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-semibold flex items-center justify-center">
            2
          </div>
          <div className="h-0.5 w-6 bg-gray-300" />
          <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 font-semibold flex items-center justify-center">
            3
          </div>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8 space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-800">Get Started</h3>
            <p className="text-sm text-gray-500">
              We'll send you a secure verification code
            </p>
          </div>

          <form onSubmit={handleSendOtp} className="space-y-4">
            {/* Phone Input */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
                <FiPhone className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Test OTP Box */}
            {showOtp && (
              <div className="bg-blue-50 border border-blue-200 text-blue-600 text-sm rounded px-3 py-2">
                Test OTP: <span className="font-medium">123456</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 rounded-md transition-all"
            >
              Send Verification Code
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign in here
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
