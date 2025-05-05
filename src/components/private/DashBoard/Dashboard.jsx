import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Sidebar from "../SideBar/SideBar";
import TopNav from "../TopNav/TopNav";
import "./Dashboard.css";
const DashboardLayout = ({ role }) => {
  const { id } = useParams();

  return (
    <div className="dashboard-layout">
      {id}
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <main className="main-content">
        <TopNav
          role={role}
          patient={{
            name: "John Doe",
            onLogout: () => {
              alert("Logged Out");
            },
          }}
        />
        <section className="content">
          <Outlet /> {/* Renders nested routes */}
        </section>
      </main>
    </div>
  );
};

export default DashboardLayout;
