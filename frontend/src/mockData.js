export const shipments = Array.from({ length: 100 }, (_, i) => {
  const carriers = ["Maersk", "FedEx", "UPS", "Amazon Freight"];
  const ports = ["Mumbai", "Chennai", "New York", "Los Angeles", "Rotterdam", "Dubai", "Shanghai"];
  const statusList = ["At Origin", "Customs Cleared", "On Vessel", "In Transit", "Arrived", "Delivered"];
  const carrier = carriers[i % carriers.length];
  const origin = ports[i % ports.length];
  const destination = ports[(i + 2) % ports.length];
  const id = `${carrier.slice(0, 2).toUpperCase()}${100000000 + i}`;

  return {
    id,
    origin,
    destination,
    carrier,
    status: statusList[i % statusList.length],
    eta: `2024-07-${(10 + (i % 20)).toString().padStart(2, "0")}`,
    container_type: i % 2 === 0 ? "40ft" : "20ft",
    weight_kg: 18000 + (i * 10),
    milestones: statusList.slice(0, (i % statusList.length) + 1),
  };
});
