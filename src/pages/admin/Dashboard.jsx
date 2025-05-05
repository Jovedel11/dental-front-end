import { Link } from "react-router-dom";
import UserManagement from "../admin/UserManagement";

const AdminDashboard = () => {
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="dashboard-sections">
        <Link to="staff" className="dashboard-link">
          Manage Staff
        </Link>
        <Link to="patients" className="dashboard-link">
          Manage Patients
        </Link>
        <Link to="reports" className="dashboard-link">
          View Reports
        </Link>
      </div>
      <div>
        <UserManagement />
      </div>
    </div>
  );
};

export default AdminDashboard;
