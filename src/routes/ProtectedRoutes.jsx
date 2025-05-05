import { useUserContext } from "../contexts/UserProvider";
import { Outlet, Navigate, useParams } from "react-router-dom";

const redirectToLogin = (role) => {
  switch (role) {
    case "admin":
      return "/admin/login";
    case "staff":
      return "/staff/login";
    default:
      return "/login";
  }
};

const redirectToDashboard = (role) => {
  switch (role) {
    case "admin":
      return "/admin";
    case "staff":
      return "/staff";
    default:
      return "/login";
  }
};

// Added debugging logs to trace the currentUser state and id parameter.

const ProtectedRoutes = ({ role }) => {
  const { currentUser } = useUserContext();
  const { id } = useParams();

  console.log("ProtectedRoutes: currentUser:", currentUser);
  console.log("ProtectedRoutes: id parameter:", id);

  // If the user is not logged in, redirect to the login page
  if (!currentUser) {
    console.warn("ProtectedRoutes: No currentUser, redirecting to login");
    return <Navigate to={redirectToLogin(role)} replace />;
  }

  // If the user is logged in but does not have the correct role, redirect to their dashboard
  if (currentUser.role !== role) {
    console.warn("ProtectedRoutes: Role mismatch, redirecting to dashboard");
    return <Navigate to={redirectToDashboard(currentUser.role)} replace />;
  }

  // If an id is provided, validate it against the current user's id
  if (id && String(currentUser.id) !== id) {
    console.warn("ProtectedRoutes: ID mismatch, redirecting to dashboard");
    return <Navigate to={redirectToDashboard(currentUser.role)} replace />;
  }

  console.log("ProtectedRoutes: Access granted");
  return <Outlet />;
};

export default ProtectedRoutes;
