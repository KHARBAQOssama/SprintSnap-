import { useEffect, useState } from "react";
import EditIcon from "../../../icons/EditIcon";
import IconsPicker from "../../../Pickers/IconsPicker";
import CoversPicker from "../../../Pickers/CoversPicker";
import TrashIcon from "../../../icons/TrashIcon";
import CheckedBoxIcon from "../../../icons/CheckedBoxIcon";
import { useDispatch, useSelector } from "react-redux";
import { createProject } from "../../../../../features/project/slice";
import { closeModal } from "../../../../../features/appStatus/slice";
const AddProjectModal = () => {
  const [iconPicking, setIconPicking] = useState(false);
  const [coverPicking, setCoverPicking] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [taskStatusAdding, setTaskStatusAdding] = useState(false);
  const [localMessage, setLocalMessage] = useState({
    type: "info",
    content: "",
  });

  const [project, setProject] = useState({
    name: "Title",
    description: "",
    cover: `/images/Gradients/projectCover${
      Math.floor(Math.random() * 100) + 1
    }.jpg`,
    icon: `/images/logos/projectIcon${Math.floor(Math.random() * 677) + 1}.png`,
    task_status: ["TO DO", "IN PROGRESS", "DONE"],
  });

  const dispatch = useDispatch();
  const { isSuccess } = useSelector((state) => state.project);
  const handleSubmit = () => {
    if (!project.name.trim() || !project.description.trim()) {
      setLocalMessage({
        type: "error",
        content: "Title and description are required",
      });
      return;
    }
    if (project.name == "Title") {
      setLocalMessage({
        type: "error",
        content: "You should rename the project",
      });
      return;
    }

    if (project.task_status.length < 2) {
      setLocalMessage({
        type: "error",
        content: "At least 2 task status are required",
      });
      return;
    }
    setLocalMessage({
      type: "info",
      content: "",
    });
    dispatch(createProject(project));
  };
  useEffect(() => {
    if(isSuccess){
        dispatch(closeModal())
    }
  }, [isSuccess]);
  return (
    <div className="flex min-w-[320px] w-full flex-col gap-2">
      <h1 className="font-semibold text-xl">Add New Project</h1>
      <div className="flex flex-col gap-3">
        {localMessage.content && (
          <div
            className={`mt-2 rounded-lg py-2 px-3 ${
              localMessage.type == "error" ? "bg-red-200 text-red-600" : ""
            }`}
          >
            <p>{localMessage.content}</p>
          </div>
        )}
        <div className="pb-3 pt-1">
          <div
            className="flex gap-2 my-2 rounded-xl p-10 pb-6 bg-cover bg-no-repeat bg-center pt-20 relative"
            style={{
              backgroundImage: `url('${project.cover}')`,
            }}
          >
            <div className="relative flex gap-3">
              <div
                className="w-10 h-10 rounded-full bg-center bg-cover bg-no-repeat overflow-hidden relative"
                style={{
                  backgroundImage: `url('${project.icon}')`,
                }}
              >
                <button
                  className="w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 bg-[#00000050]"
                  onClick={() => setIconPicking(true)}
                >
                  <EditIcon color={"#FFF"} />
                </button>
              </div>
              {iconPicking && (
                <IconsPicker
                  close={() => setIconPicking(false)}
                  choose={(icon) => setProject({ ...project, icon })}
                />
              )}
              <input
                type="text"
                value={project.name}
                onChange={(e) =>
                  setProject({ ...project, name: e.target.value })
                }
                className="text-xl font-semibold bg-transparent focus:outline-none text-white drop-shadow"
              />
            </div>
            {coverPicking && (
              <CoversPicker
                close={() => setCoverPicking(false)}
                choose={(cover) => setProject({ ...project, cover })}
              />
            )}
            <button
              className="absolute top-3 right-3 p-2 bg-white rounded-full shadow"
              onClick={() => setCoverPicking(true)}
            >
              <EditIcon color={"#A2A2A2"} />
            </button>
          </div>
          <div className="flex gap-2 py-3">
            <div className="flex-1 flex flex-col gap-2">
              <span>Description</span>
              <textarea
                className="w-full bg-[#F1F1F1] p-2 rounded-lg flex-1 focus:outline-none"
                rows={4}
                value={project.description}
                // placeholder="Description"
                onChange={(e) =>
                  setProject({ ...project, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <span>Task Status</span>
              <div className="flex gap-1 flex-col">
                <div className="flex gap-1 flex-wrap">
                  {project.task_status.map((status) => (
                    <div
                      className="px-3  rounded-xl text-green-600 bg-green-100 py-1 flex gap-3 justify-between items-center"
                      draggable="true"
                    >
                      <span className=" capitalize">{status}</span>
                      <button
                        className="font-bold"
                        onClick={() => {
                          const taskStatus = project.task_status.filter(
                            (s) => s != status
                          );
                          setProject({ ...project, task_status: taskStatus });
                        }}
                      >
                        <TrashIcon
                          className={"w-[16px] h-[16px] fill-green-600"}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                {taskStatusAdding && (
                  <div className="relative flex-1">
                    <input
                      placeholder="new status"
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value)}
                      className="w-full focus:outline-none p-2 border rounded"
                    />
                    <button
                      className="absolute top-[50%] translate-y-[-50%] right-1 rounded bg-[#5577FF] text-white"
                      onClick={() => {
                        if (newStatus) {
                          const status = [...project.task_status, newStatus];
                          setProject({ ...project, task_status: status });
                          setNewStatus("");
                        }
                      }}
                    >
                      <CheckedBoxIcon className={"w-[24px] h-[24px]"} />
                    </button>
                  </div>
                )}
                {!taskStatusAdding && (
                  <button
                    className="px-3 rounded py-1 w-max ms-auto"
                    onClick={() => setTaskStatusAdding(!taskStatusAdding)}
                  >
                    + add
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <button
          className="w-max py-1 px-3 rounded bg-blue-500 text-white ms-auto"
          onClick={handleSubmit}
        >
          create
        </button>
      </div>
    </div>
  );
};

export default AddProjectModal;
