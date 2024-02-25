import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ResetPassword from "./components/auth/ResetPassword";
import ForgetPassword from "./components/auth/forgetPassword";
import Auth from "./views/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import RequireAuthRoute from "./routes/RequireAuthRoute";
import { isAuthenticated } from "./middlewares";
import { useEffect } from "react";
import api from "./api";

function App() {
  // useEffect(async () => {
  //   let resp = await api.post('/project',{name:'p1',description:'hkfsdb',task_status:[]});
  //   console.log(resp);
  // }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/password/forget" element={<ForgetPassword />} />
            <Route path="/auth/password/reset" element={<ResetPassword />} />
          </Route>
          <Route element={<RequireAuthRoute />}>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          {/* <RequireAuthRoute
            path="/dashboard"
            component={<Dashboard />}
          ></RequireAuthRoute> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
