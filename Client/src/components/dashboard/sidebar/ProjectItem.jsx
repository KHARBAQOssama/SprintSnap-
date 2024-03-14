import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = (_id) => {
    navigate(`/dashboard/projects/${_id}`);
  };
  return (
    <li
      className="flex gap-3 items-center hover:bg-blue-100 cursor-pointer p-1 rounded-md"
      onClick={() => handleClick(project._id)}
    >
      <img className="h-8 w-8" src={project.icon} alt="" />
      <span className="text-sm">{project.name}</span>
      <span className="text-[#9896A3] text-sm ms-auto font-semibold">
        {project.analytics}
      </span>
    </li>
  );
};

export default ProjectItem;
