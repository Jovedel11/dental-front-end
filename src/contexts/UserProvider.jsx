import { createContext, useContext, useState } from "react";
import useUserData from "../hooks/useUserData";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const { users, setUsers } = useUserData();
  const [currentUser, setCurrentUser] = useState(null);
  const [authError, setAuthError] = useState(null);

  const signup = async (patientData) => {
    setAuthError(null);
    try {
      const response = await fetch("http://localhost:3001/patient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });

      if (!response.ok) {
        throw new Error(`Signup failed: ${response.statusText}`);
      }

      const newPatient = await response.json();
      setUsers((prev) => [...prev, newPatient]);
    } catch (error) {
      console.error("Signup failed:", error.message);
      setAuthError(error.message);
      throw new Error("Failed to sign up");
    }
  };

  const login = (user) => {
    try {
      setCurrentUser(user);
      setAuthError(null);
    } catch (error) {
      console.error("Login failed:", error.message);
      setAuthError("Failed to login");
    }
  };

  const logout = () => {
    try {
      setCurrentUser(null);
      setAuthError(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
      setAuthError("Failed to logout");
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        signup,
        login,
        logout,
        currentUser,
        authError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
