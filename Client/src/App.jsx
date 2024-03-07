import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import ForgetPassword from "./components/auth/forgetPassword";
import Auth from "./views/Auth";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import RequireAuthRoute from "./routes/RequireAuthRoute";
import { useEffect } from "react";
import Test from "./views/Test";
import { useDispatch, useSelector } from "react-redux";
import { unauthorized } from "../features/auth/slice";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status: projectsStatus } = useSelector((state) => state.project);
  useEffect(() => {
    if (projectsStatus == 401) {
      dispatch(unauthorized());
      navigate("/auth/login");
    }
  }, [projectsStatus]);
  return (
    <>
      <Routes>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/password/forget" element={<ForgetPassword />} />
          <Route path="/auth/password/reset" element={<ResetPassword />} />
        </Route>
        <Route element={<RequireAuthRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
