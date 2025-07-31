import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";

const Login = () => {
  const [role, setRole] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending code to", phone, "as", role);
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

      {/* ✅ Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Welcome Back to Sushrusa</h2>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Continue your health journey with us
          </p>
        </div>

        {/* ✅ Form Card */}
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-center text-gray-800">Sign In Securely</h3>
            <p className="text-sm text-gray-500 text-center">
              We'll send you a secure verification code
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Role */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select your role</option>
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-700 text-sm font-medium mb-1">Mobile Number</label>
              <div className="flex items-center border border-gray-300 rounded px-3 py-2 focus-within:ring-2 focus-within:ring-orange-400">
                <FiPhone className="text-gray-400 mr-2" />
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full outline-none bg-transparent"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2 rounded-md transition-all"
            >
              Send Verification Code
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm text-gray-600">
            New to Sushrusa?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-orange-500 font-semibold hover:underline"
            >
              Create your account
            </button>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Login;
