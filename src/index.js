import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Ping the backend server
//fetch('http://localhost:5000/')
//https://my-app-backend-5n6c.onrender.com

fetch('https://my-app-backend-62bz.onrender.com/')
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
