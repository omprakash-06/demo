import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth();

  if (loading) return <p>Loading...</p>; // wait for context

  if (!admin) return <Navigate to="/admin/login" replace />;

  return children;
}
