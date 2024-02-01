import { useSelector } from "react-redux";
import SendVerification from "../components/auth/SendVerification";
import Logout from "../components/auth/Logout";
import { useState } from "react";
import Logo from "../components/common/Logo";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="flex flex-col items-center justify-center h-[100vh] overflow-y-auto gap-2 bg-light-auth-bg bg-center bg-cover bg-no-repeat">
        <Logo containerClass={`absolute top-8 left-8`} classItems={` h-[3.5em]`}></Logo>
      <div className="font-bold text-3xl">Welcome, {user?.first_name}</div>

      {!user?.verified && (
        <SendVerification className="p-2 px-4 border bg-green-300 text-green-700"/>
      )}
      <Logout></Logout>
    </section>
  );
};

export default Dashboard;
