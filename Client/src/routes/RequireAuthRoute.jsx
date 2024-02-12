import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "../middlewares";

const RequireAuthRoute = ({ children }) => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/auth/login" />;
};

export default RequireAuthRoute;
