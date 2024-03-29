import React, { useState } from "react";
import EditIcon from "../components/icons/EditIcon";

const Modal = ({ open, closeModal }) => {
  const [taskStatus, setTaskStatus] = useState([
    "TO DO",
    "IN PROGRESS",
    "DONE",
  ]);
  const [adding, setAdding] = useState(false);
  const [title, setTitle] = useState("Title");
  const [newStatus, setNewStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [coverNumber, setCoverNumber] = useState(
    Math.floor(Math.random() * 140) + 1
  );
  const [iconNumber, setIconNumber] = useState(
    Math.floor(Math.random() * 677) + 1
  );
  const [coverPickingOn, setCoverPicking] = useState(false);
  const [iconPickingOn, setIconPicking] = useState(false);
  const covers = [];

  for (let i = 1; i <= 100; i++) {
    covers.push(
      <button
        key={i}
        className="bg-center bg-cover bg-no-repeat min-h-[60px] rounded-xl"
        onClick={() => handleClick(i)}
        style={{
          backgroundImage: `url('/images/Gradients/projectCover${i}.jpg')`,
        }}
      ></button>
    );
  }
  const projectIcons = [];

  for (let i = 1; i <= 600; i++) {
    projectIcons.push(
      <button
        key={i}
        className="bg-center bg-cover bg-no-repeat h-6 w-6 rounded-full"
        onClick={() => handleIconPicking(i)}
        style={{
          backgroundImage: `url('/images/logos/projectIcon${i}.png')`,
        }}
      ></button>
    );
  }
  const handleClick = (i) => {
    setCoverNumber(i);
  };
  const handleIconPicking = (i) => {
    setIconNumber(i);
  };
  if (!open) return <></>;
  return (
    <div className="w-[100vw] h-[100vh] overflow-scroll absolute top-0 left-0 bg-[#7442b050] flex items-center justify-center">
      <div className="shadow-2xl bg-white max-w-[750px] min-w-[320px] w-full p-6 rounded-xl relative">
        <h1 className="text-xl font-semibold">Project Creation</h1>
        <div className="py-3">
          <div
            className="flex gap-2 my-2 rounded-xl p-10 pb-6 bg-cover bg-no-repeat bg-center pt-20 relative"
            style={{
              backgroundImage: `url('/images/Gradients/projectCover${coverNumber}.jpg')`,
            }}
          >
            <div className="relative flex gap-3">
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat overflow-hidden relative"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon${iconNumber}.png')`,
                }}
              >
                <button
                  className="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 bg-[#00000050]"
                  onClick={() => setIconPicking(true)}
                >
                  <EditIcon color={"#FFF"} />
                </button>
              </div>
              {iconPickingOn && (
                <div className="top-[102%] bg-white absolute drop-shadow rounded-xl p-3 min-w-[280px]">
                  <div className="flex justify-between items-center">
                    <span>choosing an icon</span>
                    <button
                      className="px-1 rounded-full text-gray-400"
                      onClick={() => setIconPicking(false)}
                    >
                      close
                    </button>
                  </div>
                  <div className="max-h-48 flex flex-wrap gap-2 overflow-scroll">
                    {projectIcons}
                  </div>
                </div>
              )}
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-xl font-semibold bg-transparent focus:outline-none text-white drop-shadow"
              />
            </div>
            {coverPickingOn && (
              <div className="bg-white drop-shadow rounded-lg min-w-[240px]  p-3 absolute top-3 right-3 z-10 flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span>choosing a cover</span>
                  <button
                    className="px-1 rounded-full text-gray-400"
                    onClick={() => setCoverPicking(false)}
                  >
                    close
                  </button>
                </div>
                <div className="flex flex-col max-h-[160px] overflow-scroll gap-2">
                  {covers}
                </div>
              </div>
            )}
            <button
              className="absolute top-3 right-3"
              onClick={() => setCoverPicking(true)}
            >
              <EditIcon />
            </button>
          </div>
          <div className="flex gap-2 py-3">
            <div className="flex-1 flex flex-col gap-2">
              <span>Description</span>
              <textarea
                className="w-full bg-[#F1F1F1] p-2 rounded-lg flex-1 focus:outline-none"
                rows={4}
                // placeholder="Description"
              ></textarea>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <span>Task Status</span>
              <div className="flex flex-col gap-1">
                {taskStatus.map((status) => (
                  <div
                    className="px-3 rounded border-2 border-green-400 text-green-600 bg-green-100 py-1 flex justify-between items-center"
                    draggable="true"
                  >
                    <span>{status}</span>
                    <button
                      className="font-bold"
                      onClick={() =>
                        setTaskStatus(taskStatus.filter((s) => s != status))
                      }
                    >
                      x
                    </button>
                  </div>
                ))}
                {adding && (
                  <div className="relative flex-1">
                    <input
                      placeholder="new status"
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="w-full focus:outline-none p-2 border rounded"
                    />
                    <button
                      className="absolute top-[50%] translate-y-[-50%] right-1 p-1 px-2 rounded bg-[#5577FF] text-white"
                      onClick={() => {
                        if (newStatus) {
                          setTaskStatus([...taskStatus, newStatus]);
                          setNewStatus("");
                        }
                      }}
                    >
                      {"->"}
                    </button>
                  </div>
                )}
                {!adding && (
                  <button
                    className="px-3 rounded py-1 w-max ms-auto"
                    onClick={() => setAdding(!adding)}
                  >
                    + add
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            className="ms-auto px-3 text-white py-1 rounded bg-[#5577FF]"
            onClick={() => setIsLoading(true)}
          >
            Create
          </button>
        </div>
        <button
          className="absolute right-6 top-6 text-gray-500"
          onClick={closeModal}
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Modal;
