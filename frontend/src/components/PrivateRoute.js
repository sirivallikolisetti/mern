import { Navigate } from "react-router-dom";

function PrivateRoute({ children, roles }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if (!token) return <Navigate to="/login" />; // not logged in
  if (roles && !roles.includes(user.role)) return <Navigate to="/login" />; // role mismatch

  return children;
}

export default PrivateRoute;