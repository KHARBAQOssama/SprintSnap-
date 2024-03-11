import React from "react";
import { Link, useLocation } from "react-router-dom";
import Category from "../../icons/Category";
import Activity from "../../icons/Activity";
import Graph from "../../icons/Graph";
import Folder from "../../icons/Folder";
import SidebarItem from "./SidebarItem";

const SidebarItems = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className="">
      <SidebarItem pathname={"/dashboard"}>
        <Category active={pathname == "/dashboard"} />
        <Link to={"/dashboard"}>Overview</Link>
      </SidebarItem>
      <SidebarItem pathname={"/dashboard/activities"}>
        <Activity active={pathname == "/dashboard/activities"} />
        <Link to={"/dashboard/activities"}>Activities</Link>
      </SidebarItem>
      <SidebarItem pathname={"/dashboard/analytics"}>
        <Graph active={pathname == "/dashboard/analytics"} />
        <Link to={"/dashboard/analytics"}>Analytics</Link>
      </SidebarItem>
      <SidebarItem pathname={"/dashboard/projects"}>
        <Folder active={pathname == "/dashboard/projects"} />
        <Link to={"/dashboard/projects"}>Projects</Link>
      </SidebarItem>
    </ul>
  );
};

export default SidebarItems;
