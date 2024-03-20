import { useEffect, useState } from "react";
import Column from "./Column";
const Board = ({ activeProject }) => {
  const [separatedTasks, setSeparatedTasks] = useState({});
  const separateTasks = () => {
    const newSeparatedTasks = {};
    activeProject.task_status.forEach((status) => {
      newSeparatedTasks[status] = [];
    });
    activeProject.tasks.forEach((task) => {
      const status = task.status;
      newSeparatedTasks[status].push(task);
    });
    setSeparatedTasks(newSeparatedTasks);
  };
  useEffect(() => {
    if (activeProject) separateTasks();
  }, [activeProject]);
  return (
    <div
      className="flex min-h-[37.5vh] w-full gap-3
    overflow-x-scroll p-2 my-2 rounded-lg bg-gray-50"
    >
      {activeProject.task_status.map((status, index) => (
        <Column
          key={index}
          status={status}
          tasks={separatedTasks[status]}
        ></Column>
      ))}
    </div>
  );
};
export default Board;
