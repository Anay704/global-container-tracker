import React, { useState } from "react";
import { shipments } from "../mockData";
import ShipmentCard from "../components/ShipmentCard";

const Dashboard = () => {
  const [query, setQuery] = useState("");

  const filteredShipments = shipments.filter((s) =>
    s.id.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by Tracking ID"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "0.5rem",
          fontSize: "1rem",
          width: "300px",
          marginBottom: "1.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
      <h2>Showing {filteredShipments.length} shipment(s)</h2>
      {filteredShipments.map((shipment) => (
        <ShipmentCard key={shipment.id} shipment={shipment} />
      ))}
    </div>
  );
};

export default Dashboard;
