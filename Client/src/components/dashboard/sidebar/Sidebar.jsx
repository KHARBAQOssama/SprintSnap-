import { useDispatch, useSelector } from "react-redux";
import Logo from "../../common/Logo";
import SidebarProjects from "./SidebarProjects";
import sidebarItems from "../../../widgets/sidebarItems";
import SidebarItems from "./SidebarItems";
import LogoutIcon from "../../icons/LogoutIcon";
import { randomColorGenerator } from "../../../utils/functions";
import { logout } from "../../../../features/auth/slice";

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const sideItem = sidebarItems[0];
  return (
    <aside className="bg-white min-h-[100vh] min-w-[256px] w-[16em] p-[1em] px-[1.6em] border-r flex flex-col">
      <div className="p-2 py-3 flex gap-1">
        <Logo classItems={"h-[2.5em]"} />
      </div>
      <div className="py-2">
        <SidebarItems />
      </div>
      <SidebarProjects />
      <div className="border rounded-xl flex gap-2 mt-auto overflow-hidden items-center">
        <div
          className="relative h-full w-[48px] flex items-center justify-center"
          style={{ backgroundColor: randomColorGenerator() }}
        >
          {user.image_url ? (
            <img className="h-full" src={user.image_url} alt="" />
          ) : (
            <span className="text-2xl font-bold text-white">
              {user.first_name[0]}
              {user.last_name[0]}
            </span>
          )}
        </div>
        {user && (
          <div className="flex flex-col py-2">
            <span className=" font-medium text-gray-500 text-sm">{`${user.first_name} ${user.last_name}`}</span>
            <span className="text-gray-400 text-xs font-light w-[15ch] overflow-hidden whitespace-nowrap text-ellipsis">{`${user.email}`}</span>
          </div>
        )}
        <button onClick={() => dispatch(logout())}>
          <LogoutIcon className={"h-5 w-5"} />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
