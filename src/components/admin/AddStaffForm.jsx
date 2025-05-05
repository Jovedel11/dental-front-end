import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserProvider";

const AddStaffForm = () => {
  const { users, setUsers } = useUserContext();
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    role: "staff",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/staff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(staffData),
      });

      if (!response.ok) {
        throw new Error("Failed to add staff");
      }

      const newStaff = await response.json();
      setUsers((prev) => ({
        ...prev,
        staff: [...prev.staff, newStaff],
      }));

      alert("Staff added successfully!");
      setStaffData({ name: "", email: "", role: "staff" });
    } catch (error) {
      console.error(error.message);
      alert("Error adding staff");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={staffData.name}
        onChange={(e) => setStaffData({ ...staffData, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={staffData.email}
        onChange={(e) => setStaffData({ ...staffData, email: e.target.value })}
        required
      />
      <button type="submit">Add Staff</button>
    </form>
  );
};

export default AddStaffForm;
