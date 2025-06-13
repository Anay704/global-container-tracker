// src/components/ShipmentCard.jsx

import React from "react";
import { Link } from "react-router-dom";

const getETAStatus = (eta) => {
  const today = new Date();
  const etaDate = new Date(eta);
  const diff = Math.ceil((etaDate - today) / (1000 * 60 * 60 * 24));
  if (diff < 0) return "Delayed 🔴";
  if (diff <= 3) return "At Risk 🟡";
  return "On Time 🟢";
};

const ShipmentCard = ({ shipment }) => {
  return (
    <Link to={`/shipment/${shipment.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          borderRadius: "8px",
          backgroundColor: "#1e1e1e",
        }}
      >
        <h3>{shipment.id}</h3>
        <p>
          <strong>From:</strong> {shipment.origin}<br />
          <strong>To:</strong> {shipment.destination}
        </p>
        <p>
          <strong>Status:</strong> {getETAStatus(shipment.eta)}
        </p>
        <p>
          <strong>ETA:</strong> {shipment.eta}
        </p>
        <p>
          <strong>Milestones:</strong> {shipment.milestones?.join(" → ")}
        </p>
      </div>
    </Link>
  );
};

export default ShipmentCard;
