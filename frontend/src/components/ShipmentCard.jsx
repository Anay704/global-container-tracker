import React from "react";

const ShipmentCard = ({ shipment }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "8px",
      }}
    >
      <h3>{shipment.id}</h3>
      <p>
        <strong>From:</strong> {shipment.origin} <br />
        <strong>To:</strong> {shipment.destination}
      </p>
      <p>
        <strong>Status:</strong> {shipment.status}
      </p>
      <p>
        <strong>ETA:</strong> {shipment.eta}
      </p>
      <p>
        <strong>Milestones:</strong>{" "}
        {shipment.milestones && shipment.milestones.join(" → ")}
      </p>
    </div>
  );
};

export default ShipmentCard;
