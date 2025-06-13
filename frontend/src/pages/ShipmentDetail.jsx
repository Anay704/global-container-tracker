import React from "react";
import { useParams } from "react-router-dom";
import { shipments } from "../mockData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ShipmentDetail = () => {
  const { id } = useParams();
  const shipment = shipments.find((s) => s.id === id);

  if (!shipment) {
    return <h2>Shipment not found</h2>;
  }

  const {
    id: trackingId,
    carrier,
    eta,
    dispatch,
    origin,
    destination,
    items
  } = shipment;

  return (
    <div>
      <h2>📦 Shipment Details for: {trackingId}</h2>
      <p><strong>Status:</strong> {
        (() => {
          const etaDate = new Date(eta);
          const today = new Date();
          const diff = Math.ceil((etaDate - today) / (1000 * 60 * 60 * 24));
          return diff < 0 ? "Delayed 🔴" : diff <= 3 ? "At Risk 🟡" : "On Time 🟢";
        })()
      }</p>
      <p><strong>Carrier:</strong> {carrier}</p>
      <p><strong>Dispatch Date:</strong> {dispatch}</p>
      <p><strong>ETA:</strong> {eta}</p>
      <p><strong>From:</strong> {origin} → <strong>To:</strong> {destination}</p>

      <div style={{ height: "300px", margin: "1rem auto" }}>
        <MapContainer
          center={[20.5937, 78.9629]}
          zoom={2}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution="© OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[shipment.originLat, shipment.originLong]}>
            <Popup>Origin: {origin}</Popup>
          </Marker>
          <Marker position={[shipment.destLat, shipment.destLong]}>
            <Popup>Destination: {destination}</Popup>
          </Marker>
        </MapContainer>
      </div>

      <h3 style={{ marginTop: "2rem" }}>📄 Items in Shipment</h3>
      <table style={{ margin: "auto", borderCollapse: "collapse", width: "90%" }}>
        <thead>
          <tr style={{ backgroundColor: "#facc15" }}>
            <th style={cellStyle}>Item</th>
            <th style={cellStyle}>Qty</th>
            <th style={cellStyle}>Boxes</th>
            <th style={cellStyle}>PO No.</th>
            <th style={cellStyle}>Inco Terms</th>
          </tr>
        </thead>
        <tbody>
          {items.map((itm, i) => (
            <tr key={i}>
              <td style={cellStyle}>{itm.description}</td>
              <td style={cellStyle}>{itm.qty}</td>
              <td style={cellStyle}>{itm.boxes}</td>
              <td style={cellStyle}>
                {itm.po}
                {itm.po && (
                  <div style={{ marginTop: "0.3rem" }}>
                    <a
                      href={`/dummy-po-files/${itm.po}.pdf`}
                      download
                      style={{
                        fontSize: "0.8rem",
                        color: "#2563eb",
                        textDecoration: "underline",
                      }}
                    >
                      Download PO
                    </a>
                  </div>
                )}
              </td>
              <td style={cellStyle}>
                {itm.inco}
                {itm.inco === "DPU" && (
                  <span title="Delivered at Place Unloaded – seller is responsible until delivery."> ℹ️</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "center"
};

export default ShipmentDetail;
