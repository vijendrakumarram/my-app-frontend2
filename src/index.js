import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/output.css";
import BASE_URL from "./api/apiConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch(`${BASE_URL}/`)
  .then((response) => {
    if (response.ok) {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    } else {
      return response.text().then(text => {
        throw new Error(`Status ${response.status}: ${text}`);
      });
    }
  })
  .catch((error) => {
    console.error("⚠️ Backend Connection Error:", error.message);
    document.body.innerHTML = `
      <div style="text-align:center; margin-top: 100px; font-size: 24px; color: red;">
        ❌ Backend server is not running or unreachable.<br>
        ${error.message}
      </div>
    `;
  });

