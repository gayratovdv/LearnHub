// src/components/Loader.jsx
import React from "react";
import "./loader.css"; // Ensure you have appropriate CSS

const Loader = () => (
  <div className="loader-wrapper">
    <div id="loading-bar-spinner" class="spinner">
      <div class="spinner-icon"></div>
    </div>
  </div>
);

export default Loader;
