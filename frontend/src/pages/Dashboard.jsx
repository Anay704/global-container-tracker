import React, { useState } from "react";
import { shipments } from "../mockData";
import ShipmentCard from "../components/ShipmentCard";

const uniqueValues = (field) => [
  ...new Set(
    shipments.map((s) => {
      if (field === "inco") return s.items?.[0]?.inco;
      return s[field];
    })
  )
];

const getETAStatus = (eta) => {
  const today = new Date();
  const etaDate = new Date(eta);
  const diff = Math.ceil((etaDate - today) / (1000 * 60 * 60 * 24));

  if (diff < 0) return "Delayed 🔴";
  if (diff <= 3) return "At Risk 🟡";
  return "On Time 🟢";
};

const Dashboard = () => {
  const [search, setSearch] = useState("");
  const [carrierFilter, setCarrierFilter] = useState("");
  const [destinationFilter, setDestinationFilter] = useState("");
  const [incoFilter, setIncoFilter] = useState("");

  const filteredShipments = shipments.filter((s) => {
    const incoTerm = s.items?.[0]?.inco;
    return (
      s.id.toLowerCase().includes(search.toLowerCase()) &&
      (carrierFilter === "" || s.carrier === carrierFilter) &&
      (destinationFilter === "" || s.destination === destinationFilter) &&
      (incoFilter === "" || incoTerm === incoFilter)
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

      <div style={{ marginBottom: "1rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
        <select value={carrierFilter} onChange={(e) => setCarrierFilter(e.target.value)}>
          <option value="">All Carriers</option>
          {uniqueValues("carrier").map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <select value={destinationFilter} onChange={(e) => setDestinationFilter(e.target.value)}>
          <option value="">All Destinations</option>
          {uniqueValues("destination").map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select value={incoFilter} onChange={(e) => setIncoFilter(e.target.value)}>
          <option value="">All Inco Terms</option>
          {uniqueValues("inco").map((i) => (
            <option key={i} value={i}>{i}</option>
          ))}
        </select>
      </div>

      <h2>Showing {filteredShipments.length} shipment(s)</h2>
      {filteredShipments.map((shipment) => (
        <ShipmentCard key={shipment.id} shipment={shipment} getETAStatus={getETAStatus} />
      ))}
    </div>
  );
};

export default Dashboard;
