import { useParams } from "react-router-dom";
import { shipments } from "../mockData";

const ShipmentDetail = () => {
  const { id } = useParams();
  const shipment = shipments.find((s) => s.id === id);

  if (!shipment) return <p>Shipment not found</p>;

  return (
    <div>
      <h2>Shipment Details: {shipment.id}</h2>
      <p><strong>Carrier:</strong> Maersk (mock)</p>
      <p><strong>Origin:</strong> {shipment.origin}</p>
      <p><strong>Destination:</strong> {shipment.destination}</p>
      <p><strong>Status:</strong> {shipment.status}</p>
      <p><strong>ETA:</strong> {shipment.eta}</p>
      <p><strong>Container Type:</strong> 40ft High Cube (mock)</p>
      <p><strong>Weight:</strong> 21,000 kg (mock)</p>
      <p><strong>Route:</strong> {shipment.origin} → {shipment.destination}</p>
      <p><strong>Milestones:</strong> {shipment.milestones.join(" → ")}</p>
    </div>
  );
};

export default ShipmentDetail;
