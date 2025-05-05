import { createContext, useContext } from "react";
import useClinics from "../hooks/useClinic";

const ClinicContext = createContext();

const ClinicProvider = ({ children }) => {
  const { clinics, loading, error } = useClinics();

  return (
    <ClinicContext.Provider value={{ clinics, loading, error }}>
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinicContext = () => useContext(ClinicContext);

export default ClinicProvider;
