import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <li className="flex gap-3 items-center">
      <img className="h-8 w-8" src={project.icon} alt="" />
      <span className="text-sm">{project.name}</span>
      <span className="text-[#9896A3] text-sm ms-auto font-semibold">{project.analytics}</span>
    </li>
  );
};

export default ProjectItem;
