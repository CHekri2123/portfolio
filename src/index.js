import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom"; // Import HashRouter
import App from "./App";
import './App.css';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
