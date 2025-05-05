import React from "react";
import { useUserContext } from "../../contexts/UserProvider";

const PatientManagement = () => {
  const { users, setUsers } = useUserContext();

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/patient/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete patient");
      }

      setUsers((prev) => ({
        ...prev,
        patients: prev.patients.filter((patient) => patient.id !== id),
      }));

      alert("Patient deleted successfully!");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <h2>Patient Management</h2>
      <ul>
        {users.patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.email}
            <button onClick={() => handleDelete(patient.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientManagement;
