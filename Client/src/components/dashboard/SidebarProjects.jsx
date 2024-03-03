import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../features/project/slice";
import PlusIcon from "../icons/PlusIcon";
import ProjectItem from "./ProjectItem";

const SidebarProjects = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <div className="mt-3 border-t-2 pt-1">
      <div className="flex justify-between">
        <h2 className="text-[#9896A3] text-lg">Projects</h2>
        <button
          className=""
          onClick={() => {
            setOpen(!open);
          }}
        >
          <PlusIcon className={"h-6 w-6"} />
        </button>
      </div>
      <ul className="py-3 flex flex-col gap-2">
        {projects.length != 0 &&
          projects.map((project) => <ProjectItem project={project} />)}
      </ul>
    </div>
  );
};

export default SidebarProjects;
