import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardLayout from "../components/private/DashBoard/Dashboard";
import AdminDashboard from "../pages/admin/Dashboard";
import StaffManagement from "../components/admin/StaffManagement";
import PatientManagement from "../components/admin/PatientManagement";
import Reports from "../components/admin/Reports";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout role="admin" />}>
        <Route index element={<AdminDashboard />} />
        <Route path="staff" element={<StaffManagement />} />
        <Route path="patients" element={<PatientManagement />} />
        <Route path="reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
