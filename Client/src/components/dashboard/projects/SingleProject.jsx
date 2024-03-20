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
import MembersDisplayer from "./MembersDisplayer";
import Board from "../Kanban/Board";
import Backlog from "./Backlog.jsx";


// const Board = ({ activeProject }) => {
//   const [active, setActive] = useState(false);
//   const [separatedTasks, setSeparatedTasks] = useState({});
//   const [status, setStatus] = useState(activeProject.task_status);
//   const separateTasks = () => {
//     const newSeparatedTasks = {};
//     activeProject.task_status.forEach((status) => {
//       newSeparatedTasks[status] = [];
//     });
//     activeProject.tasks.forEach((task) => {
//       const status = task.status;
//       newSeparatedTasks[status].push(task);
//     });
//     setSeparatedTasks(newSeparatedTasks);
//     console.log(separatedTasks);
//   };
//   const addStatus = (status) => {
//     if (!status.trim().length) return;
//     setSeparatedTasks((prevSeparatedTasks) => {
//       return { ...prevSeparatedTasks, [status]: [] };
//     });
//   };

//   const handleColumnDragStart = (e, index) => {
//     e.dataTransfer.setData("columnId", index.toString());
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     highlightIndicator(e);
//     setActive(true);
//   };
//   const handleColumnDragEnd = (e) => {
//     console.log(e.dataTransfer);
//     e.preventDefault();
//     clearHighlights();
//     setActive(false);

//     const columnId = e.dataTransfer.getData("columnId") || 0;
//     const indicators = getIndicators();
//     const { element } = getNearestIndicator(e, indicators);
//     const before = element.dataset.before;
//     if (before !== columnId) {
//       console.log(before);
//       console.log(columnId);
//       const newStatus = [...status];
//       const element = newStatus.splice(columnId, 1)[0];
//       newStatus.splice(before, 0, element);
//       setStatus(newStatus);
//     }
//   };

//   const highlightIndicator = (e) => {
//     const indicators = getIndicators();
//     clearHighlights(indicators);
//     const el = getNearestIndicator(e, indicators);
//     el.element.style.opacity = "1";
//   };
//   const getNearestIndicator = (e, indicators) => {
//     const el = indicators.reduce(
//       (closest, child) => {
//         const box = child.getBoundingClientRect();
//         const offset = e.clientX - (box.left + 50);
//         if (offset < 0 && offset > closest.offset) {
//           return { offset, element: child };
//         } else {
//           return closest;
//         }
//       },
//       {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length - 1],
//       }
//     );
//     return el;
//   };

//   const clearHighlights = (els) => {
//     const indicators = els || getIndicators();
//     indicators.forEach((i) => {
//       i.style.opacity = "0";
//     });
//   };
//   const getIndicators = () => {
//     return Array.from(document.querySelectorAll(".indicator"));
//   };

//   useEffect(() => {
//     if (activeProject) separateTasks();
//   }, [activeProject]);
//   useEffect(() => {
//     console.log(separatedTasks);
//   }, [separatedTasks]);

//   return (
//     <div
//       className={`py-2 flex overflow-scroll max-h-[87vh] mt-3 ${
//         active ? "bg-violet-200" : ""
//       }`}
//       onDragOver={handleDragOver}
//       // onDragLeave={handleDragLeave}
//     >
//       {/* {activeProject.task_status.map((status, index) => ( */}
//       {status.map((status, index) => (
//         <Column
//           key={index}
//           index={index}
//           tasks={separatedTasks[status]}
//           status={status}
//           handleDragStart={handleColumnDragStart}
//           handleDragEnd={handleColumnDragEnd}
//         ></Column>
//       ))}
//       <DropColumnIndicator beforeId={"-1"} />
//       <AddStatus addStatus={addStatus} />
//     </div>
//   );
// };

// const Column = ({ tasks, status, index, handleDragStart, handleDragEnd }) => {
//   return (
//     <>
//       <DropColumnIndicator beforeId={index} />
//       <div
//         className="min-w-[280px] border max-h-full bg-gray-50 rounded-xl flex flex-col px-1"
//         draggable="true"
//         onDragStart={(e) => handleDragStart(e, index)}
//         onDragEnd={(e) => handleDragEnd(e, index)}
//       >
//         <h1 className="cursor-grab py-3 px-2 font-medium flex justify-between hover:bg-blue-100 my-1 rounded-lg active:cursor-grabbing">
//           {status} <span>{tasks ? tasks.length : ""}</span>
//         </h1>
//         <div className="w-full flex-1 overflow-y-scroll pb-2 flex flex-col gap-1">
//           {tasks &&
//             tasks.map((task, index) => <Card key={index} task={task} />)}
//         </div>
//       </div>
//     </>
//   );
// };

// const AddStatus = ({ addStatus }) => {
//   const [text, setText] = useState("");
//   const [adding, setAdding] = useState(false);
//   return (
//     <>
//       {adding ? (
//         <div className="min-w-[280px]">
//           <input
//             onChange={(e) => setText(e.target.value)}
//             autoFocus
//             placeholder="Add new Status..."
//             className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-900 placeholder-violet-300 focus: outline-0"
//           />
//           <div className="flex items-center justify-end py-2">
//             <button
//               onClick={() => setAdding(false)}
//               className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-900"
//             >
//               Close
//             </button>
//             <button
//               onClick={() => {
//                 addStatus(text);
//                 setAdding(false);
//               }}
//               className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
//             >
//               <span>Add</span>
//             </button>
//           </div>
//         </div>
//       ) : (
//         <div className="min-w-max">
//           <button
//             onClick={() => setAdding(true)}
//             className="bg-blue-200 rounded text-blue-500 px-3 py-2"
//           >
//             {" "}
//             Add Status
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// const Card = ({ task }) => {
//   return (
//     <div className="p-3 bg-white  rounded-lg flex flex-col gap-2 pb-3">
//       <div
//         className="w-full h-[180px] rounded bg-center bg-contain bg-no-repeat"
//         style={{
//           backgroundImage: `url('http://localhost:3000/files${task.images[0]}')`,
//         }}
//       ></div>
//       <h1 className="font-semibold text-lg">{task.name}</h1>
//       <div className="w-full ms-auto relative h-[30px]">
//         <MembersDisplayer members={task.assigned_to} />
//       </div>
//     </div>
//   );
// };

// const DropColumnIndicator = ({ beforeId }) => {
//   return (
//     <div
//       data-before={beforeId}
//       className="indicator mx-0.5 min-w-1 min-h-full bg-violet-300 rounded-lg opacity-0"
//     />
//   );
// };



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
        {activePage == "kanban" && <Board activeProject={activeProject} />}
      </div>
    </div>
  );
};

export default SingleProject;
