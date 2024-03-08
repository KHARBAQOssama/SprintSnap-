import { useDispatch, useSelector } from "react-redux";
import Logo from "../../common/Logo";
import Activity from "../../icons/Activity";
import Category from "../../icons/Category";
import Folder from "../../icons/Folder";
import Graph from "../../icons/Graph";
import PlusIcon from "../../icons/PlusIcon";
import { useEffect } from "react";
import { getAll } from "../../../../features/project/slice";
import ProjectItem from "./ProjectItem";
import SidebarProjects from "./SidebarProjects";
import sidebarItems from "../../../widgets/sidebarItems";
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItems";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const sideItem = sidebarItems[0];
  return (
    <aside className="bg-white min-h-[100vh] min-w-[16em] w-[16em] p-[1em] px-[1.6em] border-r flex flex-col">
      <div className="p-2 py-3 flex gap-1">
        <Logo classItems={"h-[2.5em]"} />
      </div>
      <div className="py-2">
        {/* <ul className="flex flex-col">
          <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
            <Category className={"w-[1.3em] h-[1.3em]"} />
            Overview
          </li>
          <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
            <Graph className={"w-[1.3em] h-[1.3em]"} />
            Analytics
          </li>
          <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
            <Activity className={"w-[1.3em] h-[1.3em]"} />
            Activities
          </li>
          <li className="text-white px-4 py-3 rounded-2xl w-full flex items-center gap-2 bg-[#5577FF]">
            <Folder className={"w-[1.3em] h-[1.3em]"} />
            Projects
          </li>
        </ul> */}
        <SidebarItems />
      </div>
      <SidebarProjects />
      <div className="border rounded-xl flex gap-2 mt-auto overflow-hidden items-center">
        <div className="relative">
          <img className="h-13" src="/icons/defaultProfile.png" alt="" />
        </div>
        {user && (
          <div className="flex flex-col">
            <span className=" font-semibold text-gray-500 text-sm">{`${user.first_name} ${user.last_name}`}</span>
            <span className="text-gray-400 text-xs">{`${user.email}`}</span>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
