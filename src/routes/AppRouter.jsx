import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import ClinicProvider from "../contexts/ClinicProvider";
import ScrollTop from "../components/common/ScrollTop";
import UserProvider from "../contexts/UserProvider";
import DashboardLayout from "../components/private/DashBoard/Dashboard";
import StaffDashboard from "../pages/staff/Dashboard";
import UserDashboard from "../pages/patient/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";
import { Navigate } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

const AppRouter = () => {
  return (
    <Router>
      <ScrollTop />
      <UserProvider>
        <ClinicProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/*" element={<PublicRoutes />} />

            {/* Private Routes default dashboard */}
            <Route path="/dashboard">
              {/* Admin Dashboard */}
              <Route element={<ProtectedRoutes role="admin" />}>
                <Route
                  path="admin/:id/*"
                  element={<AdminRoutes role="admin" />}
                />
              </Route>

              {/* Staff Dashboard */}
              <Route element={<ProtectedRoutes role="staff" />}>
                <Route
                  path="staff/:id/*"
                  element={<DashboardLayout role="staff" />}
                >
                  <Route index element={<StaffDashboard />} />
                </Route>
              </Route>

              {/* Patient Dashboard */}
              <Route element={<ProtectedRoutes role="patient" />}>
                <Route
                  path="patient/:id/*"
                  element={<DashboardLayout role="patient" />}
                >
                  <Route index element={<UserDashboard />} />
                </Route>
              </Route>
            </Route>

            {/* Redirect unknown routes */}
            <Route path="*" element={<Navigate to="/patient/login" />} />
          </Routes>
        </ClinicProvider>
      </UserProvider>
    </Router>
  );
};

export default AppRouter;
