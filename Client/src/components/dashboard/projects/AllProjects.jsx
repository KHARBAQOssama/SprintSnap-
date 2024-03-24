import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { formatTimestamp } from "../../../utils/functions";
import { addProject } from "../../../../features/appStatus/slice";
import { reset } from "../../../../features/project/slice";

const AllProjects = () => {
  const { projects } = useSelector((state) => state.project);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openAddModal = () => {
    dispatch(reset());
    dispatch(addProject());
  };
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Projects</h1>
        <button
          onClick={openAddModal}
          className="text-blue-500 border-blue-500 border-2 transition-all hover:bg-blue-500 hover:text-white py-2 px-3 rounded-lg"
        >
          + Add New Project
        </button>
      </div>
      <div className="py-2 flex flex-wrap justify-evenly gap-3">
        {projects.map((project) => (
          <div
            key={project._id}
            onClick={() => {
              navigate(`/dashboard/projects/${project._id}`);
            }}
            className="shadow border max-w-[320px] min-w-[240px] flex-1 p-2 rounded-lg cursor-pointer"
          >
            <div
              className="h-40 w-full rounded-lg bg-center bg-cover bg-no-repeat flex justify-end p-2"
              style={{ backgroundImage: `url('${project.cover}')` }}
            >
              <p className="text-sm font-light text-gray-500 p-1 px-3 rounded-lg h-max bg-white">
                created : {formatTimestamp(project.createdAt)}{" "}
              </p>
            </div>
            <div className="py-3 flex gap-2 items-center">
              <div
                className="w-12 h-12 rounded-full bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url('${project.icon}')` }}
              ></div>
              <div>
                <h2 className="font-semibold">{project.name}</h2>
                <p className="text-sm font-light text-gray-700">
                  {project.tasks.length} tasks
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllProjects;
