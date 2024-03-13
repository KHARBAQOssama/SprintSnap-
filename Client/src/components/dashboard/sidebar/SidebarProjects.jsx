import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, reset } from "../../../../features/project/slice";
import PlusIcon from "../../icons/PlusIcon";
import ProjectItem from "./ProjectItem";
import { toast } from "react-toastify";
import { addProject } from "../../../../features/appStatus/slice";

const SidebarProjects = () => {
  const dispatch = useDispatch();
  const { projects, message } = useSelector((state) => state.project);
  const openAddModal = () => {
    dispatch(reset());
    dispatch(addProject());
  };
  useEffect(() => {
    dispatch(getAll());
  }, []);
  useEffect(() => {
    if (message) toast(message);
  }, [message]);
  return (
    <div className="mt-3 border-t-2 pt-1">
      <div className="flex justify-between">
        <h2 className="text-[#9896A3] text-lg">Projects</h2>
        <button className="" onClick={openAddModal}>
          <PlusIcon className={"h-6 w-6"} />
        </button>
      </div>
      <ul className="py-3 flex flex-col gap-2 max-h-[320px] overflow-y-scroll">
        {projects.length != 0 ? (
          projects.map((project) => (
            <ProjectItem key={project._id} project={project} />
          ))
        ) : (
          <div className="flex items-center flex-col ">
            <img src="images/noProjects.jpg" className="w-[70%]" alt="" />
            <h3 className="w-[80%] text-center font-bold text-blue-400">
              You have No project To Work On
            </h3>
          </div>
        )}
      </ul>
    </div>
  );
};

export default SidebarProjects;
