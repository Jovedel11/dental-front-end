import React from "react";
import PendingStaffApplications from "./PendingStaffApplications";
import AddStaffForm from "./AddStaffForm";

const StaffManagement = () => {
  return (
    <div>
      <h1>Staff Management</h1>
      <AddStaffForm />
      <PendingStaffApplications />
    </div>
  );
};

export default StaffManagement;
