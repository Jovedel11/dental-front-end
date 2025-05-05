import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PendingStaffApplications = () => {
  const [pendingStaff, setPendingStaff] = useState([]);

  useEffect(() => {
    const fetchPendingStaff = async () => {
      try {
        const response = await fetch("http://localhost:3001/pending-staff");
        if (!response.ok) {
          throw new Error("Failed to fetch pending staff");
        }
        const data = await response.json();
        setPendingStaff(data);
      } catch (error) {
        console.error(error.message);
        toast.error("Failed to fetch pending staff applications");
      }
    };

    fetchPendingStaff();
  }, []);

  const handleApprove = async (id) => {
    try {
      const application = pendingStaff.find((staff) => staff.id === id);
      const response = await fetch("http://localhost:3001/staff", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(application),
      });

      if (!response.ok) {
        throw new Error("Failed to approve application");
      }

      await fetch(`http://localhost:3001/pending-staff/${id}`, {
        method: "DELETE",
      });

      setPendingStaff((prev) => prev.filter((staff) => staff.id !== id));
      toast.success("Application approved successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to approve application");
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/pending-staff/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to reject application");
      }

      setPendingStaff((prev) => prev.filter((staff) => staff.id !== id));
      toast.success("Application rejected successfully!");
    } catch (error) {
      console.error(error.message);
      toast.error("Failed to reject application");
    }
  };

  return (
    <div>
      <h2>Pending Staff Applications</h2>
      <ul>
        {pendingStaff.map((staff) => (
          <li key={staff.id}>
            <div>
              <strong>{staff.doctorName}</strong> ({staff.experience} years)
              <p>Clinic: {staff.location}</p>
              <p>Services: {staff.services.join(", ")}</p>
            </div>
            <button onClick={() => handleApprove(staff.id)}>Approve</button>
            <button onClick={() => handleReject(staff.id)}>Reject</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PendingStaffApplications;
