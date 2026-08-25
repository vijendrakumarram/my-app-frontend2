import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/output.css";
import BASE_URL from "./api/apiConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Show loader immediately
// Show premium loader immediately
root.render(
  <div
    className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center"
    style={{
      background:
        "radial-gradient(circle at center, #172554 0%, #0f172a 45%, #020617 100%)",
    }}
  >
    <div className="flex flex-col items-center justify-center text-center">

      {/* Logo / Brand */}
      <div className="relative mb-8">

        {/* Outer Glow */}
        <div
          className="absolute inset-0 animate-pulse rounded-full blur-2xl"
          style={{
            backgroundColor: "rgba(59, 130, 246, 0.25)",
          }}
        ></div>

        {/* Spinner */}
        <div
          className="relative h-16 w-16 animate-spin rounded-full"
          style={{
            border: "3px solid rgba(255,255,255,0.08)",
            borderTop: "3px solid #60a5fa",
            borderRight: "3px solid #3b82f6",
            boxShadow: "0 0 25px rgba(59,130,246,0.35)",
          }}
        ></div>

        {/* Inner Ring */}
        <div
          className="absolute inset-2 rounded-full"
          style={{
            border: "1px solid rgba(96,165,250,0.25)",
          }}
        ></div>
      </div>

      {/* Brand Name */}
      <h2
        className="text-2xl font-semibold tracking-[0.15em]"
        style={{
          color: "#ffffff",
          textShadow: "0 0 20px rgba(96,165,250,0.25)",
        }}
      >
        CodeMantra Labs
      </h2>

      {/* Loading Message */}
      <div className="mt-4 flex items-center gap-1">
        <p
          className="text-sm tracking-wide"
          style={{
            color: "#94a3b8",
          }}
        >
          Please wait
        </p>

        <span
          className="animate-pulse"
          style={{ color: "#60a5fa" }}
        >
          ...
        </span>
      </div>

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
      <div
        className="flex min-h-screen items-center justify-center px-5 text-center"
        style={{
          backgroundColor: "#0f172a",
        }}
      >
        <div style={{ color: "#ef4444" }}>
          <p className="text-2xl font-semibold">
            ❌ Backend server is not running or unreachable.
          </p>

          <p
            className="mt-3 text-sm"
            style={{
              color: "#94a3b8",
            }}
          >
            {error.message}
          </p>
        </div>
      </div>
    );
  });
