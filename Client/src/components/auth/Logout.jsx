import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../../features/auth/slice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logout());
  };
  const navigate = useNavigate();
  const { logoutSuccess } = useSelector((state) => state.auth);

  useEffect(() => {
    if (logoutSuccess) {
      console.log("logged out");
      navigate("/auth/login");
    }

    dispatch(reset());
  }, [logoutSuccess]);
  return (
    <button
      onClick={handleLogOut}
      className="absolute bottom-4 right-4 bg-blue-300 p-2 border text-blue-700"
    >
      Logout
    </button>
  );
};

export default Logout;
