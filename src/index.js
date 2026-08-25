import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/output.css";
import BASE_URL from "./api/apiConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Show loader immediately
root.render(
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white">
    <div className="text-center">

      {/* Website Name */}
      <h2 className="mb-6 text-2xl font-semibold">
        CodeMantra Labs
      </h2>

      {/* Spinner */}
      <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>

      {/* Message */}
      <p className="mt-5 text-sm text-white/70">
        Please wait...
      </p>

    </div>
  </div>
);

// Check backend connection
fetch(`${BASE_URL}/`)
  .then((response) => {
    if (response.ok) {

      // Backend connected successfully
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );

    } else {
      return response.text().then((text) => {
        throw new Error(`Status ${response.status}: ${text}`);
      });
    }
  })
  .catch((error) => {
    console.error("⚠️ Backend Connection Error:", error.message);

    root.render(
      <div className="flex min-h-screen items-center justify-center px-5 text-center">
        <div className="text-red-500">
          <p className="text-2xl font-semibold">
            ❌ Backend server is not running or unreachable.
          </p>

          <p className="mt-3 text-sm">
            {error.message}
          </p>
        </div>
      </div>
    );
  });
