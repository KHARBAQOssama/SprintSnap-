import { useLocation } from "react-router-dom";

const SidebarItem = ({ children, pathname }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <li
      className={` w-full flex items-center gap-2 ${
        pathname == path
          ? "text-white px-4 py-3 rounded-2xl bg-[#5577FF]"
          : "text-[#9896A3] px-2 py-2"
      }`}
    >
      {children}
    </li>
  );
};

export default SidebarItem;
