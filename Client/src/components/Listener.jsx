import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import socketIOClient from "socket.io-client";
import BellIcon from "./icons/BellIcon";
const ENDPOINT = "http://localhost:3000";

function Listener() {
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    if (user) {
      const socket = socketIOClient(ENDPOINT);
      console.log(user._id);
      socket.on("connect", () => {
        const userId = user._id;
        socket.emit("authenticate", userId);
      });

      socket.on("notification", (message) => {
        console.log("Received notification:", message);
      });
      socket.on("invitation", ({invitation}) => {
        console.log(invitation);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [user]);
  return (
    <>
      <div className="absolute bottom-8 right-8">
        <div className="relative">
          <div className="p-1 bg-white shadow max-w-[300px] w-[300px] absolute right-0 bottom-[105%] rounded-lg">
            <div className="p-2 bg-blue-50 hover:bg-blue-200 rounded cursor-pointer">
              <h1 className="font-semibold">Hello world</h1>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi illum sunt quis.
              </p>
            </div>
          </div>
          <button className="p-2 rounded-full shadow bg-white relative">
            <span className="bg-red-600 absolute top-0 right-0 w-3 h-3 rounded-full"></span>
            <BellIcon className={`w-5 h-5`} />
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Listener;
