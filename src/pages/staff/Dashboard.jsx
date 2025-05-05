import React from "react";
import "./Dashboard.css"; // Common styles for dashboards.
import { useParams } from "react-router-dom";
import { useUserContext } from "../../contexts/UserProvider";

const UserDashboard = () => {
  // Mock data (replace with dynamic data later)
  const stats = [
    { name: "Upcoming Appointments", value: 2 },
    { name: "Completed Appointments", value: 5 },
    { name: "Total Payments", value: "$230" },
  ];

  return (
    <div className="dashboard">
      <h2>Patient Dashboard</h2>
      <div className="dashboard-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h3>{stat.name}</h3>
            <p>{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
