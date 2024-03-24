import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject, reset } from "../../../../features/project/slice";
import SingleProjectHeader from "./SingleProjectHeader";
import ListIcon from "../../icons/ListIcon";
import Category from "../../icons/Category";
import { addTask } from "../../../../features/appStatus/slice";
import Board from "../Kanban/Board";
import Backlog from "./Backlog.jsx";

const SingleProject = () => {
  const [activePage, setActivePage] = useState("backlog");
  const { id } = useParams();
  const { activeProject, isLoading, isError } = useSelector(
    (state) => state.project
  );
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
  // useEffect(() => {
  //   if (isError) {
  //     dispatch(getProject(id));
  //   }
  // }, [isError]);
  return (
    <>
      {!activeProject && !isLoading ? (
        <div className="h-full flex items-center justify-center">
          <img src="/images/notfound.jpg" className="h-96" alt="" />
        </div>
      ) : (
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
            {activePage == "backlog" && (
              <Backlog activeProject={activeProject} />
            )}
            {activePage == "kanban" && <Board activeProject={activeProject} />}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProject;
