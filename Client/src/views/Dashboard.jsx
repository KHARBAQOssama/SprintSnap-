import { useSelector } from "react-redux";
import SendVerification from "../components/auth/SendVerification";
import Logout from "../components/auth/Logout";
import { useEffect, useState } from "react";
import Logo from "../components/common/Logo";
import api from "../api";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Modal from "../components/dashboard/modal";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="flex h-[100vh] w-[100vw]">
      <Sidebar />
      <Modal />
      <Outlet />
      {/* <Logo
        containerClass={`absolute top-8 left-8`}
        classItems={` h-[3.5em]`}
      ></Logo>
      <div className="font-bold text-3xl">Welcome, {user?.first_name}</div>

      {!user?.verified && (
        <SendVerification className="p-2 px-4 border bg-green-300 text-green-700" />
      )}
      <Logout></Logout> */}
    </section>
  );
};

export default Dashboard;
