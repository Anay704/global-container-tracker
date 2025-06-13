import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import { shipments } from "../mockData";

const Analytics = () => {
  // Classify shipment status
  const delayThreshold = 30;
  const statusCounts = { "On Time": 0, "Delayed": 0 };
  const carrierCounts = {};
  const originCounts = {};
  const destinationCounts = {};

  shipments.forEach((shipment) => {
    const dispatchDate = new Date(shipment.dispatch);
    const etaDate = new Date(shipment.eta);
    const transitTime = (etaDate - dispatchDate) / (1000 * 60 * 60 * 24);

    const status = transitTime > delayThreshold ? "Delayed" : "On Time";
    statusCounts[status]++;

    carrierCounts[shipment.carrier] = (carrierCounts[shipment.carrier] || 0) + 1;
    originCounts[shipment.origin] = (originCounts[shipment.origin] || 0) + 1;
    destinationCounts[shipment.destination] = (destinationCounts[shipment.destination] || 0) + 1;
  });

  // Transform for charts
  const formatChartData = (dataObj) =>
    Object.entries(dataObj).map(([key, value]) => ({ name: key, value }));

  const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28", "#8884d8", "#82ca9d"];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>📈 Shipment Analytics Dashboard</h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", marginTop: "2rem" }}>
        {/* Shipment Status Pie */}
        <PieChart width={300} height={300}>
          <Pie data={formatChartData(statusCounts)} cx="50%" cy="50%" outerRadius={100} label>
            {formatChartData(statusCounts).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>

        {/* Carrier Distribution Bar */}
        <BarChart width={500} height={300} data={formatChartData(carrierCounts)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>

        {/* Origin Port Bar */}
        <BarChart width={500} height={300} data={formatChartData(originCounts)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#00C49F" />
        </BarChart>

        {/* Destination Bar */}
        <BarChart width={500} height={300} data={formatChartData(destinationCounts)}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#FF8042" />
        </BarChart>
      </div>
    </div>
  );
};

export default Analytics;
