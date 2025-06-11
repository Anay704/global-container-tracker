import React from "react";
import { shipments } from "../mockData";
import ShipmentCard from "../components/ShipmentCard";
import TrackingForm from "../components/TrackingForm";

const Dashboard = () => {
  return (
    <div>
      <TrackingForm />
      <h2>Active Shipments</h2>
      <div>
        {shipments.map((shipment) => (
          <ShipmentCard key={shipment.id} shipment={shipment} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
