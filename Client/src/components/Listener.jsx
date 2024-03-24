import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import socketIOClient from "socket.io-client";
import BellIcon from "./icons/BellIcon";
import NotificationsHolder from "./custom/Notification";
import OutsideClickHandler from "../widgets/OutsideClickHandler";
import {
  getNotifications,
  setNotification,
} from "../../features/notification/slice";
import { getProject } from "../../features/project/slice";
import { toast } from "react-toastify";
const ENDPOINT = "http://localhost:3000";

function Listener() {
  const [notifOpen, setNotifOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, logoutSuccess } = useSelector((state) => state.auth);
  const { activeProject } = useSelector((state) => state.project);
  const { notifications } = useSelector((state) => state.notification);
  useEffect(() => {
    if (user) {
      const socket = socketIOClient(ENDPOINT);
      console.log(user._id);
      socket.on("connect", () => {
        const userId = user._id;
        socket.emit("authenticate", userId);
      });

      socket.on("notification", (notification) => {
        console.log(activeProject._id == notification.project._id);
        if (
          notification.action == "ChangeStatus" &&
          activeProject._id == notification.project._id
        ) {
          if (user._id != notification.by._id)
            toast.info(
              `${notification.by.first_name} has change a task status in the project '${notification.project.name}'`
            );
          dispatch(getProject(activeProject._id));
        } else {
          dispatch(setNotification(notification));
        }
      });
      socket.on("invitation", ({ invitation }) => {
        console.log("Received notification:", invitation);
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [user]);
  useEffect(() => {
    if (!notifications.length) dispatch(getNotifications());
  }, []);
  useState(() => {
    if (logoutSuccess) {
      console.log("loggedOut");
    }
  }, [logoutSuccess]);
  return (
    <>
      <div className="absolute bottom-8 right-8">
        <div className="relative">
          {notifOpen && <NotificationsHolder notifications={notifications} />}
          <OutsideClickHandler onOutsideClick={() => setNotifOpen(false)}>
            <button
              className="p-2 rounded-full shadow bg-white relative"
              onClick={() => setNotifOpen(!notifOpen)}
            >
              <span className="bg-red-600 absolute top-0 right-0 w-3 h-3 rounded-full"></span>
              <BellIcon className={`w-5 h-5`} />
            </button>
          </OutsideClickHandler>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Listener;
