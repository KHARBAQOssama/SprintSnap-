import ClipIcon from "../../../icons/ClipIcon";
import TrashIcon from "../../../icons/TrashIcon";

const Backlog = ({ activeProject }) => {
  return (
    <div className="py-2 flex flex-col gap-1">
      {activeProject?.tasks.length != 0 &&
        activeProject?.tasks.map((task) => (
          <div
            key={task._id}
            className="group  overflow-hidden bg-gray-100 rounded-xl hover:bg-blue-100 flex"
          >
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

export default Backlog;
