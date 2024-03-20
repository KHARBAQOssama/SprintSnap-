import { useSelector } from "react-redux";
import SendVerification from "../components/auth/SendVerification";
import Logout from "../components/auth/Logout";
import { useEffect, useState } from "react";
import Logo from "../components/common/Logo";
import api from "../api";
import Sidebar from "../components/dashboard/sidebar/Sidebar";
import Modal from "../components/dashboard/modal";
import { Outlet } from "react-router-dom";
import Category from "../components/icons/Category";
import PlusIcon from "../components/icons/PlusIcon";
import CheckedBoxIcon from "../components/icons/CheckedBoxIcon";

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <section className="flex h-[100vh] w-[100vw]">
      <Sidebar />
      <Modal />
      <main className="p-5 h-[100vh] " style={{ width: "calc(100vw - 556px)" }}>
        <Outlet />
      </main>
      <div className="w-[300px] border-l p-6 bg-gray-50">
        <div className="flex gap-2 items-center pb-2 border-b-2">
          <Category color={"#56555C"} />
          <h3 className="text-xl">Todos</h3>
          <button className="ms-auto">
            <PlusIcon className={"h-6 w-6"} />
          </button>
        </div>
        <div className="py-4">
          <div className="bg-[#F9F8FF] border-2 rounded-xl p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckedBoxIcon className={"h-5 w-5"} color={"#5577FF"} />
              <span className="text-[#5577FF] line-through flex-1 text-nowrap overflow-hidden whitespace-nowrap">
                Donate $500 to the charity
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#FFC800] bg-[#FFC80062] px-2 rounded-full">
                Donations
              </span>
              <span className="text-[#00B884] bg-[#00B88462] px-2 rounded-full">
                Social
              </span>
            </div>
          </div>
        </div>
      </div>
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
