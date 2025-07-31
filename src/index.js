import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/output.css";

/*
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/

//fetch('https://my-app-backend-62bz.onrender.com/')
fetch('http://localhost:5000/')
  .then((response) => {
    if (response.ok) {
      ReactDOM.render(<App />, document.getElementById('root'));
    } else {
      throw new Error('Backend not responding');
    }
  })
  .catch((error) => {
    console.error(error);
    document.body.innerHTML = `
      <div style="text-align:center; margin-top: 100px; font-size: 24px; color: red;">
        ❌ Backend server is not running. Please start it first.
      </div>
    `;
  });