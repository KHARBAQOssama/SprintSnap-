import { useState } from "react";
import DropIndicator from "./DropIndicator";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { changeTaskStatus } from "../../../../features/project/slice";

const Column = ({ status, tasks, setTasks }) => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card._id);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);
    setActive(true);
  };
  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };
  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },

      {
        offset: Number.NEGATIVE_INFINITY,

        element: indicators[indicators.length - 1],
      }
    );

    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${status}"]`));
  };
  const handleDragEnd = (e) => {
    clearHighlights();
    setActive(false);
    const cardId = e.dataTransfer.getData("cardId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const before = element.dataset.before || "-1";

    if (before !== cardId) {
        dispatch(changeTaskStatus({id:cardId, status}))
    }
  };
  return (
    <div className="min-w-[280px] h-full flex flex-col gap-2 ">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium `}>{status}</h3>
        <span className="rounded text-sm text-neutral-400">
          {tasks && tasks.length}{" "}
        </span>
      </div>
      <div
        className={`h-max max-h-[70vh] min-h-[10vh] overflow-y-scroll w-full transition-colors ${
          active ? "bg-gray-200" : "bg-neutral-800/0"
        }`}
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {tasks &&
          tasks.map((task) => {
            return (
              <Card
                key={task._id}
                handleDragStart={handleDragStart}
                task={task}
              />
            );
          })}
        <DropIndicator beforeId="-1" column={status} />
      </div>
    </div>
  );
};

export default Column;
