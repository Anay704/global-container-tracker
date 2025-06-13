// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ShipmentDetail from "./pages/ShipmentDetail";
import Analytics from "./pages/Analytics";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App" style={{ padding: "2rem", textAlign: "center" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shipment/:id" element={<ShipmentDetail />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
