// src/components/Header.jsx

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ marginBottom: "2rem" }}>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
          📦 <span style={{ color: "#facc15" }}>Global Container Tracker</span>
        </h1>
      </Link>
      <p style={{ fontSize: "1rem", color: "#aaa" }}>
        Track any shipping container across carriers in one place.
      </p>
      <nav style={{ marginTop: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem", color: "#61dafb" }}>
          🏠 Dashboard
        </Link>
        <Link to="/analytics" style={{ color: "#61dafb" }}>
          📊 Analytics
        </Link>
      </nav>
    </header>
  );
};

export default Header;
