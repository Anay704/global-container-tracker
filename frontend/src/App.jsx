import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShipmentDetail from "./pages/ShipmentDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem" }}>
          📦 <span style={{ color: "#facc15" }}>Global Container Tracker</span>
        </h1>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipment/:id" element={<ShipmentDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
