import { Outlet } from "react-router-dom";
import Logo from "../components/common/Logo";
const Auth = () => {
  return (
    <div className="flex flex-col px-8 h-[100vh] w-[100vw] py-4 overflow-y-auto bg-light-auth-bg bg-no-repeat bg-cover bg-center gap-24">
      <Logo className={"h-[3.5em]"}></Logo>
      <Outlet />
    </div>
  );
};

export default Auth;
