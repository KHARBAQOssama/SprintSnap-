import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ShowTask = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { taskToShow } = useSelector((state) => state.appStatus);
  useEffect(() => {
    console.log(taskToShow);
  }, [taskToShow]);
  return (
    <>
      {taskToShow && (
        <div className="max-w-[800px]">
          <h1 className="text-xl font-semibold">{taskToShow.name}</h1>
          <div className="w-full flex gap-2 py-4">
            <div className="flex-1">
              <p className="text-sm text-gray-500">{taskToShow.description}</p>
              <div className="py-2">
                <h3 className="font-medium">assigned to</h3>
                {taskToShow.assigned_to.map((member) => (
                  <div className="flex items-center gap-2 text-sm pt-2">
                    <img
                      src={
                        member.image
                          ? member.image
                          : "/images/defaultProfile.png"
                      }
                      className="h-5 w-5"
                      alt=""
                    />
                    {member.first_name} {member.last_name}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-start gap-1">
                {taskToShow.files.map((file, index) => (
                  <button
                    key={index}
                    className="bg-gray-200 w-max p-1 px-3 rounded"
                    onClick={() => {
                      window.location.href = `http://localhost:3000/api/download/${file.replace(
                        "/uploads/",
                        ""
                      )}`;
                    }}
                  >
                    {"file" + (index + 1)}
                  </button>
                ))}
              </div>
            </div>
            {taskToShow.images.length != 0 && (
              <div className="flex-1 bg-gray-100 rounded-xl p-3">
                <div
                  className="w-full h-[200px] bg-center bg-contain bg-no-repeat"
                  style={{
                    backgroundImage: `url('http://localhost:3000/files${taskToShow.images[activeImageIndex]}')`,
                  }}
                ></div>
                <div className="flex flex-wrap gap-3 p-8 pb-2 justify-center ">
                  {taskToShow.images.map((image, index) => (
                    <button
                      key={index}
                      className="h-12 w-12 hover:scale-125 transition-all rounded-lg bg-center bg-cover  bg-no-repeat bg-white"
                      style={{
                        backgroundImage: `url('http://localhost:3000/files${image}')`,
                      }}
                      onClick={() => setActiveImageIndex(index)}
                    ></button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTask;
