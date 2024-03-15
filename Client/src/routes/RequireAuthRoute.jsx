import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../middlewares";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const RequireAuthRoute = ({ children }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default RequireAuthRoute;
