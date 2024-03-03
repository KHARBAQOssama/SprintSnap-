import { useDispatch, useSelector } from "react-redux";
import Logo from "../common/Logo";
import Activity from "../icons/Activity";
import Category from "../icons/Category";
import Folder from "../icons/Folder";
import Graph from "../icons/Graph";
import PlusIcon from "../icons/PlusIcon";
import { useEffect } from "react";
import { getAll } from "../../../features/project/slice";
import ProjectItem from "./ProjectItem";
import SidebarProjects from "./SidebarProjects";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <aside className="bg-white min-h-[100vh] min-w-[16em] w-[16em] p-[1em] px-[1.6em] border-r flex flex-col">
      <div className="p-2 py-3 flex gap-1">
        <Logo classItems={"h-[2.5em]"} /> <h1>Sprint Snap</h1>
      </div>
      <div className="py-2">
        <ul className="flex flex-col">
          <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
            <Category color={"#9896A3"} className={"w-[1.3em] h-[1.3em]"} />
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
            <Folder active className={"w-[1.3em] h-[1.3em]"} />
            Projects
          </li>
        </ul>
      </div>
      <SidebarProjects />
      <div className="border rounded-lg p-1 flex gap-3 mt-auto">
        <div className="relative">
          <img className="h-10" src="/icons/defaultProfile.png" alt="" />
          <div className="h-2 w-2 bg-green-600 rounded-sm absolute top-8 left-8 border border-white"></div>
        </div>
        <div>
          {user && (
            <span className=" font-light text-sm">{`${user.first_name} ${user.last_name}`}</span>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
