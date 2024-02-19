import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes() {
  const userInfo = true;

  return userInfo ? <Outlet /> : <Navigate to={"/login"} />;
}
