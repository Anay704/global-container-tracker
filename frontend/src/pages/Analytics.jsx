// src/pages/Analytics.jsx

import React from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts";
import { shipments } from "../mockData";

// Prepare chart data
const getStatusData = () => {
  const count = {};
  shipments.forEach(s => count[s.status] = (count[s.status] || 0) + 1);
  return Object.entries(count).map(([name, value]) => ({ name, value }));
};

const getCarrierData = () => {
  const count = {};
  shipments.forEach(s => count[s.carrier] = (count[s.carrier] || 0) + 1);
  return Object.entries(count).map(([name, value]) => ({ name, value }));
};

const getDestinationData = () => {
  const count = {};
  shipments.forEach(s => count[s.destination] = (count[s.destination] || 0) + 1);
  return Object.entries(count).map(([name, value]) => ({ name, value }));
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF2", "#F47CAB", "#F79E3D"];

const Analytics = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📊 Analytics Dashboard</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "3rem", justifyContent: "center", marginTop: "2rem" }}>
        {/* Shipment Status Pie Chart */}
        <div>
          <h4>Shipment Status Breakdown</h4>
          <PieChart width={300} height={300}>
            <Pie
              data={getStatusData()}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {getStatusData().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>

        {/* Carrier Bar Chart */}
        <div>
          <h4>Top Carriers Used</h4>
          <BarChart width={350} height={300} data={getCarrierData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>

        {/* Destination Port Chart */}
        <div>
          <h4>Most Popular Destination Ports</h4>
          <BarChart width={350} height={300} data={getDestinationData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
