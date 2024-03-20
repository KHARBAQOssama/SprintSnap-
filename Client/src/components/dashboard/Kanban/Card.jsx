import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";

const Card = ({ task, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={task._id} column={task.status} />
      <motion.div
        layout
        layoutId={task._id}
        onDragStart={(e) => handleDragStart(e, task)}
        draggable="true"
        className="cursor-grab rounded border.
    border-neutral-200 bg-neutral-300 p-3
    active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-800">{task.name}</p>
      </motion.div>
    </>
  );
};
export default Card;
