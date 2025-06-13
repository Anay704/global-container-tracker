import React from "react";
import { useParams } from "react-router-dom";
import { shipments } from "../mockData";
import { MapContainer, TileLayer, Marker, Polyline } from "react-leaflet";
import { portCoordinates } from "../portCoordinates";
import "../fixLeafletIcons";

// Simple AI ETA adjustment logic
const adjustETA = (shipment) => {
  let delayDays = 0;
  if (shipment.carrier === "Maersk") delayDays += 1;
  if (["New York", "Los Angeles"].includes(shipment.destination)) delayDays += 2;

  const etaDate = new Date(shipment.eta);
  etaDate.setDate(etaDate.getDate() + delayDays);
  return etaDate.toISOString().split("T")[0];
};

const ShipmentDetail = () => {
  const { id } = useParams();
  const shipment = shipments.find((s) => s.id === id);

  if (!shipment) return <p>Shipment not found</p>;

  const originCoord = portCoordinates[shipment.origin];
  const destCoord = portCoordinates[shipment.destination];

  return (
    <div>
      <h2>Shipment Details: {shipment.id}</h2>
      <p><strong>Carrier:</strong> {shipment.carrier}</p>
      <p><strong>Origin:</strong> {shipment.origin}</p>
      <p><strong>Destination:</strong> {shipment.destination}</p>
      <p><strong>Status:</strong> {shipment.status}</p>
      <p><strong>Container Type:</strong> {shipment.container_type}</p>
      <p><strong>Weight:</strong> {shipment.weight_kg} kg</p>
      <p><strong>Original ETA:</strong> {shipment.eta}</p>
      <p><strong>AI-Adjusted ETA:</strong> {adjustETA(shipment)}</p>
      <p><strong>Milestones:</strong> {shipment.milestones.join(" → ")}</p>

      {(originCoord && destCoord) && (
        <div style={{ height: "400px", marginTop: "2rem" }}>
          <MapContainer
            center={originCoord}
            zoom={3}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="© OpenStreetMap contributors"
            />
            <Marker position={originCoord}></Marker>
            <Marker position={destCoord}></Marker>
            <Polyline positions={[originCoord, destCoord]} color="blue" />
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default ShipmentDetail;
