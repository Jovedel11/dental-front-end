import React from "react";
import { NavLink } from "react-router-dom"; // For navigation links.
import "./Sidebar.css"; // Styling for the sidebar.

const Sidebar = ({ role }) => {
  // Define the navigation items based on the role.
  const navItems = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Manage Users", path: "/admin/users" },
      { name: "Settings", path: "/admin/settings" },
    ],
    staff: [
      { name: "Dashboard", path: "/staff" },
      { name: "Appointments", path: "/staff/appointments" },
      { name: "Patients", path: "/staff/patients" },
    ],
    patient: [
      { name: "Dashboard", path: "/patient" },
      { name: "My Profile", path: "/patient/profile" },
      { name: "Appointments", path: "/patient/appointments" },
    ],
  };

  // return (
  //   <aside className="sidebar">
  //     <h2>{role} Panel</h2>
  //     <ul>
  //       {navItems[role].map((item, index) => (
  //         <li key={index}>
  //           <NavLink
  //             to={item.path}
  //             className={({ isActive }) => (isActive ? "active" : "")}
  //           >
  //             {item.name}
  //           </NavLink>
  //         </li>
  //       ))}
  //     </ul>
  //   </aside>
  // );
};

export default Sidebar;
