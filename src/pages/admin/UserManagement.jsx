import React, { useState } from "react";
import { useUserContext } from "../../contexts/UserProvider";
import "./UserManagement.css";

const UserManagement = () => {
  const { users, setUsers } = useUserContext();
  const [form, setForm] = useState({ id: null, name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update user
      setUsers((prev) =>
        prev.map((patient) =>
          patient.id === form.id ? { ...patient, ...form } : patient
        )
      );
      setIsEditing(false);
    } else {
      // Add new user
      setUsers((prev) => [
        ...prev,
        { ...form, id: Date.now() }, // Generating a temporary ID
      ]);
    }
    setForm({ id: null, name: "", email: "" });
  };

  const handleEdit = (patient) => {
    setForm(patient);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((patient) => patient.id !== id));
    }
  };

  return (
    <div className="user-management">
      <h2>Patient Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"} Patient</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>
                <button onClick={() => handleEdit(patient)}>Edit</button>
                <button onClick={() => handleDelete(patient.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
