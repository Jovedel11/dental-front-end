import React from "react";
import "./Dashboard.css"; // Common styles for dashboards.

const StaffDashboard = () => {
  // Mock data (replace with dynamic data later)
  const stats = [
    { name: "Today's Appointments", value: 8 },
    { name: "Pending Approvals", value: 3 },
    { name: "Patients", value: 50 },
  ];

  return (
    <div className="dashboard">
      <h2>Staff Dashboard</h2>
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

export default StaffDashboard;
