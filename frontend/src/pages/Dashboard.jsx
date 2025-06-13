// src/pages/Dashboard.jsx

import React, { useState } from "react";
import { shipments } from "../mockData";
import ShipmentCard from "../components/ShipmentCard";

// Extract unique filter values
const uniqueValues = (field) => [...new Set(shipments.map(s => s[field]))];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [carrierFilter, setCarrierFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");

  const filteredShipments = shipments.filter((s) => {
    return (
      s.id.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === "" || s.status === statusFilter) &&
      (carrierFilter === "" || s.carrier === carrierFilter) &&
      (destinationFilter === "" || s.destination === destinationFilter)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Tracking ID"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          width: "300px",
          marginBottom: "1.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {/* Filters */}
      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Statuses</option>
          {uniqueValues("status").map(status => (
            <option key={status} value={status}>{status}</option>
          ))}
        </select>

        <select value={carrierFilter} onChange={(e) => setCarrierFilter(e.target.value)}>
          <option value="">All Carriers</option>
          {uniqueValues("carrier").map(carrier => (
            <option key={carrier} value={carrier}>{carrier}</option>
          ))}
        </select>

        <select value={destinationFilter} onChange={(e) => setDestinationFilter(e.target.value)}>
          <option value="">All Destinations</option>
          {uniqueValues("destination").map(port => (
            <option key={port} value={port}>{port}</option>
          ))}
        </select>
      </div>

      <h2>Showing {filteredShipments.length} shipment(s)</h2>
      {filteredShipments.map((shipment) => (
        <ShipmentCard key={shipment.id} shipment={shipment} />
      ))}
    </div>
  );
};

export default Dashboard;
