import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";
import ImageIcon from "../../icons/ImageIcon";
import MembersDisplayer from "../projects/MembersDisplayer";
import { addTaskToShow } from "../../../../features/appStatus/slice";
import { useDispatch } from "react-redux";
const Card = ({ task, handleDragStart }) => {
  const dispatch = useDispatch();
  return (
    <>
      <DropIndicator beforeId={task._id} column={task.status} />
      <motion.div
        layout
        layoutId={task._id}
        onDragStart={(e) => handleDragStart(e, task)}
        draggable="true"
        className="bg-white p-4 rounded-lg relative pb-10 cursor-grab active:cursor-grabbing"
        onClick={() => {
          dispatch(addTaskToShow(task))
        }}
      >
        {task.images.length != 0 && (
          <div
            className="h-[140px] relative w-full bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('http://localhost:3000/files${task.images[0]}')`,
            }}
          >
            {task.images.length > 1 && (
              <div className="absolute bg-black bg-opacity-60 flex items-center gap-1 p-1 rounded-lg text-white font-medium bottom-0 right-0 m-2">
                +{task.images.length - 1}{" "}
                <ImageIcon className="h-4 w-4 fill-white" />
              </div>
            )}
          </div>
        )}
        <p className="font-bold py-2">{task.name}</p>
        <p className="pb-2 max-w-[20ch] truncate text-gray-500">
          {task.description}
        </p>
        <div></div>
        <div>
          <MembersDisplayer ml={"ms-4"} members={task.assigned_to} />
        </div>
      </motion.div>
    </>
  );
};
export default Card;
