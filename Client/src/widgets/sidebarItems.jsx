import Category from "../components/icons/Category";
import Graph from "../components/icons/Graph";
import Activity from "../components/icons/Activity";
import Folder from "../components/icons/Folder";
const sidebarItems = [
  {
    icon: <Category className={"w-[1.3em] h-[1.3em]"} />,
    path: "/dashboard/overview",
    label: "Overview",
  },
  {
    icon: <Graph className={"w-[1.3em] h-[1.3em]"} />,
    path: "/dashboard/analytics",
    label: "Analytics",
  },
  {
    icon: <Activity className={"w-[1.3em] h-[1.3em]"} />,
    path: "/dashboard/activities",
    label: "Activities",
  },
  {
    icon: <Folder className={"w-[1.3em] h-[1.3em]"} />,
    path: "/dashboard/projects",
    label: "Projects",
  },
];
export default sidebarItems;
