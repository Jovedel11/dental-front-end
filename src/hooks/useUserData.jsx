import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:3001";

const useUserData = () => {
  const [users, setUsers] = useState({
    patients: [],
    staff: [],
    admin: [],
    pendingstaff: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        // patients, staff, and admin data
        const [patientsRes, staffRes, adminRes, pendingstaffRes] =
          await Promise.all([
            fetch(`${BASE_URL}/patient`),
            fetch(`${BASE_URL}/staff`),
            fetch(`${BASE_URL}/admin`),
            fetch(`${BASE_URL}/pending-staff`),
          ]);

        if (
          !patientsRes.ok ||
          !staffRes.ok ||
          !adminRes.ok ||
          !pendingstaffRes.ok
        ) {
          throw new Error("Failed to fetch user data");
        }

        const [patients, staff, admin, pendingstaff] = await Promise.all([
          patientsRes.json(),
          staffRes.json(),
          adminRes.json(),
          pendingstaffRes.json(),
        ]);

        setUsers({ patients, staff, admin, pendingstaff });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error, setUsers };
};

export default useUserData;
