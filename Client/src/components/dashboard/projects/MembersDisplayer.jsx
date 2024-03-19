import React from "react";
import { randomColorGenerator } from "../../../utils/functions";

const MembersDisplayer = ({ members }) => {
  return (
    <>
      
        {members.map((member, index) => (
          <div
            key={index}
            className={`w-[30px] h-[30px] absolute rounded-full overflow-hidden shadow cursor-pointer hover:bg-white hover:z-10 ${
              !member.image_url ? "flex items-center justify-center" : ""
            }`}
            style={{
              left: `${index * 18}px`,
              // zIndex: project.team.members.length - index,
              backgroundColor: randomColorGenerator(),
            }}
          >
            {member.image_url ? (
              <img
                className="w-full"
                src={member.image_url}
                alt={member.first_name[0] + member.last_name[0]}
                title={member.first_name + " " + member.last_name}
              />
            ) : (
              <span
                className="text-center uppercase text-sm text-white"
                title={member.first_name + " " + member.last_name}
              >
                {member.first_name[0] + member.last_name[0]}
              </span>
            )}
          </div>
        ))}
    </>
  );
};

export default MembersDisplayer;
