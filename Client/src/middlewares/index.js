import { useSelector } from "react-redux";

export const isAuthenticated = () => {
  const { user } = useSelector((state) => state.auth);
  return user; 
};

