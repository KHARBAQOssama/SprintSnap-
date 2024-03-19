import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject, reset } from "../../../../features/project/slice";
import SingleProjectHeader from "./SingleProjectHeader";
import ListIcon from "../../icons/ListIcon";
import Category from "../../icons/Category";
import { addTask } from "../../../../features/appStatus/slice";
import ClipIcon from "../../icons/ClipIcon";
import TrashIcon from "../../icons/TrashIcon";

const Backlog = ({ activeProject }) => {
  return (
    <div className="py-2 flex flex-col gap-1">
      {activeProject?.tasks.length != 0 &&
        activeProject?.tasks.map((task) => (
          <div className="group  overflow-hidden bg-gray-100 rounded-xl hover:bg-blue-100 flex">
            <div className="flex-1 flex items-center p-2 px-4 gap-6">
              <div className="flex-1">
                <p className="font-semibold text-sm">{task.name}</p>
                {/* <p className="tet-sm text-gray-600">{task.description}</p> */}
              </div>
              <div className="flex items-center gap-4 pt-1 ms-auto">
                <div className="font-medium text-blue-400 bg-white lowercase text-sm px-2 py-1 rounded-md">
                  {task.status}
                </div>
                <div className="bg-white rounded-lg flex gap-1 p-1 items-center font-semibold text-sm text-gray-500">
                  <span>{task.images.length + task.files.length}</span>
                  <ClipIcon className={`h-4 w-4`} />
                </div>
              </div>
            </div>
            <button className="bg-red-400 flex justify-center items-center w-0 group-hover:w-10 transition-all">
              <TrashIcon className={`fill-white h-5 w-5`} />
            </button>
          </div>
        ))}
    </div>
  );
};

const SingleProject = () => {
  const [activePage, setActivePage] = useState("backlog");
  const { id } = useParams();
  const { activeProject } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const openAddTaskModal = () => {
    dispatch(reset());
    dispatch(addTask());
  };
  useEffect(() => {
    if (id) {
      dispatch(getProject(id));
    }
  }, [id]);
  return (
    <div className="h-full overflow-y-scroll">
      <SingleProjectHeader project={activeProject} />
      <div className="py-3">
        <div className="flex gap-2">
          <button
            onClick={() => setActivePage("backlog")}
            className={`p-1 px-3 rounded-md flex items-center gap-2 ${
              activePage == "backlog"
                ? "bg-blue-500 text-white font-medium"
                : "text-gray-700 bg-gray-300"
            } `}
          >
            <ListIcon
              className={`fill-white h-4 w-4`}
              color={activePage == "backlog" ? "white" : ""}
            />
            <span>Backlog</span>
          </button>
          <button
            onClick={() => setActivePage("kanban")}
            className={`p-1 px-3 rounded-md flex items-center gap-2 ${
              activePage == "kanban"
                ? "bg-blue-500 text-white font-medium"
                : "text-gray-700 bg-gray-300"
            } `}
          >
            <Category
              className={`fill-white h-4 w-4`}
              active={activePage == "kanban"}
            />
            <span>Kanban</span>
          </button>
          {activePage == "backlog" && (
            <button
              onClick={openAddTaskModal}
              className="ms-auto px-2 bg-blue-200 text-blue-600 rounded-lg text-xl font-medium"
            >
              +
            </button>
          )}
        </div>
        {activePage == "backlog" && <Backlog activeProject={activeProject} />}
      </div>
    </div>
  );
};

export default SingleProject;
