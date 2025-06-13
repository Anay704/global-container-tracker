import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css"; // Optional: for styling if needed

const Header = () => {
  const location = useLocation();

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <span role="img" aria-label="box">📦</span> Global Container Tracker
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={location.pathname === "/" ? styles.active : styles.link}>Home</Link>
        <Link to="/analytics" style={location.pathname === "/analytics" ? styles.active : styles.link}>Analytics</Link>
        {/* Optional future button */}
        {/* <Link to="/add" style={location.pathname === "/add" ? styles.active : styles.link}>Add Shipment</Link> */}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "#1E293B",
    color: "#F8FAFC",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "1.4rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "#F8FAFC",
    textDecoration: "none",
    fontSize: "1rem",
  },
  active: {
    color: "#FACC15",
    textDecoration: "underline",
    fontSize: "1rem",
  },
};

export default Header;
