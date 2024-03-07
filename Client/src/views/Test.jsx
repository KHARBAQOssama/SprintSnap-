import { useState } from "react";
import Logo from "../components/common/Logo";
import Category from "../components/icons/Category";
import Folder from "../components/icons/Folder";
import Graph from "../components/icons/Graph";
import Activity from "../components/icons/Activity";
import PlusIcon from "../components/icons/PlusIcon";
import EditIcon from "../components/icons/EditIcon";
import MoreIcon from "../components/icons/MoreIcon";
import TimeIcon from "../components/icons/TimeIcon";
import ListIcon from "../components/icons/Listicon";
import ProfileIcon from "../components/icons/ProfileIcon";
import CheckedBoxIcon from "../components/icons/CheckedBoxIcon";
import Modal from "./Modal";
import { motion } from "framer-motion";

const Test = () => {
  const [open, setOpen] = useState();
  const [number, setNumber] = useState(Math.floor(Math.random() * 140) + 1);
  return (
    <div className="min-h-[100vh] w-full bg-[#F9F8FF] flex">
      <aside className="bg-white min-h-[100vh] min-w-[16em] w-[16em] p-[1em] px-[1.6em] border-r">
        <div className="p-2 py-3">
          <Logo classItems={"h-[2.5em]"} />
        </div>
        <div className="py-2">
          <ul className="flex flex-col">
            <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
              <Category color={"#9896A3"} className={"w-[1.3em] h-[1.3em]"} />
              Overview
            </li>
            <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
              <Graph className={"w-[1.3em] h-[1.3em]"} />
              Analytics
            </li>
            <li className="text-[#9896A3] px-2 py-2 w-full flex items-center gap-2">
              <Activity className={"w-[1.3em] h-[1.3em]"} />
              Activities
            </li>
            <li className="text-white px-4 py-3 rounded-2xl w-full flex items-center gap-2 bg-[#5577FF]">
              <Folder active className={"w-[1.3em] h-[1.3em]"} />
              Projects
            </li>
          </ul>
        </div>
        <div className="mt-3 border-t-2 pt-1">
          <div className="flex justify-between">
            <h2 className="text-[#9896A3] text-lg">Projects</h2>
            <button
              className=""
              onClick={() => {
                setOpen(!open);
              }}
            >
              <PlusIcon className={"h-6 w-6"} />
            </button>
          </div>
          <ul className="py-3 flex flex-col gap-2">
            <li className="flex gap-3 items-center">
              <img src="/icons/projectIcon1.png" alt="" />
              <span className="text-sm">Flower Shop</span>
              <span className="text-[#9896A3] text-sm ms-auto font-semibold">
                23
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <img src="/icons/projectIcon2.png" alt="" />
              <span className="text-sm">Cloth</span>
              <span className="text-[#9896A3] text-sm ms-auto font-semibold">
                212
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <img src="/icons/projectIcon3.png" alt="" />
              <span className="text-sm">Gamer boy</span>
              <span className="text-[#9896A3] text-sm ms-auto font-semibold">
                84
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <img src="/icons/projectIcon4.png" alt="" />
              <span className="text-sm">Kick Off</span>
              <span className="text-[#9896A3] text-sm ms-auto font-semibold">
                4
              </span>
            </li>
          </ul>
        </div>
        <div className="border rounded-lg p-1 flex gap-3 mt-40">
          <div className="relative">
            <img className="h-10" src="/icons/defaultProfile.png" alt="" />
            <div className="h-2 w-2 bg-green-600 rounded-sm absolute top-8 left-8 border border-white"></div>
          </div>
          <div>
            <span className=" font-light text-sm">Muhammed Ali</span>
          </div>
        </div>
      </aside>
      {/* <main className="min-w-[60em]">
        <div className="bg-white p-6 border-b">
          <div className="flex gap-2 items-baseline">
            <div className="flex gap-2 items-center">
              <div className="h-4 w-4 rounded bg-green-600"></div>
              <span className="font-semibold text-xl ">Cloth</span>
            </div>
            <button className="ms-auto">
              <EditIcon />
            </button>
            <button>
              <MoreIcon />
            </button>
          </div>
          <div
            className="my-2 rounded-xl p-10 bg-cover bg-no-repeat bg-center pt-28"
            style={{
              backgroundImage: `url('/images/Gradients/projectCover${number}.jpg')`,
            }}
          >
            <div>
              <div className="flex gap-3">
                <img
                  src="/icons/projectIcon2.png"
                  className="h-12 w-12"
                  alt=""
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-xl text-white drop-shadow drop-shadow-black">
                    Cloth
                  </span>
                  <span className="text-[#FFFFFF72]">
                    Small and Consices headline
                  </span>
                </div>
                <div className="flex gap-6 ms-auto">
                  <div className="flex flex-col">
                    <span className="text-[#4E4E4E]">CREATED</span>
                    <span className="">Mar 23, 10:34 PM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#4E4E4E]">DEADLINE</span>
                    <span className="">Jun 02, 04:01 PM</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#4E4E4E]">TRACKED TIME</span>
                    <span className="">10H 32M</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 py-3 px-2">
            <div className="flex-1 flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <TimeIcon /> <span className="text-[#5E5E5E]">Created At</span>
                <div className="w-[55%] ms-auto">
                  <span className="text-[#AEAEAE]">May, 15 2022 14:23 PM</span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ListIcon /> <span className="text-[#5E5E5E]">Tags</span>
                <div className="w-[55%] ms-auto flex flex-wrap gap-2">
                  <span className="text-[#FD71AF] bg-[#FD71AF62] font-medium px-2 py-1 rounded-full">
                    Profitable
                  </span>
                  <span className="text-[#00B884] bg-[#00B88462] font-medium px-2 py-1 rounded-full">
                    AI
                  </span>
                  <span className="text-[#5577FF] bg-[#5577FF62] font-medium px-2 py-1 rounded-full">
                    1 Person
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ProfileIcon /> <span className="text-[#5E5E5E]">Assign</span>
                <div className="w-[55%] ms-auto">
                  <span className="text-[#AEAEAE] font-light bg-[#AEAEAE50] px-3 rounded-lg">
                    @ Mustafa
                  </span>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <ProfileIcon /> <span className="text-[#5E5E5E]">Progress</span>
                <div className="w-[55%] ms-auto flex gap-2 items-center">
                  <div className="h-2 w-[60%] bg-[#5577FF42] rounded overflow-hidden">
                    <div className="h-2 w-[60%] bg-[#5577FF] rounded"></div>
                  </div>
                  <span className="text-[#5577FF]">53%</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-medium mb-2">Description</h3>
              <p className="text-[#AEAEAE]">
                TaskFlow is an intuitive task management system designed to help
                teams collaborate and manage their projects with ease. It offers
                powerful features such as task tracking, project organization,
                scheduling, and communication tools to keep teams organized and
                on top of their projects.
              </p>
            </div>
          </div>
        </div>
      </main> */}
      {/* <div className="flex-1 bg-white border-l p-6">
        <div className="flex gap-2 items-center pb-2 border-b-2">
          <Category color={"#56555C"} />
          <h3 className="text-xl">Todos</h3>
          <button className="ms-auto">
            <PlusIcon className={"h-6 w-6"} />
          </button>
        </div>
        <div className="py-4">
          <div className="bg-[#F9F8FF] border-2 rounded-xl p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <CheckedBoxIcon className={"h-5 w-5"} color={"#5577FF"} />
              <span className="text-[#5577FF] line-through flex-1 text-nowrap overflow-hidden whitespace-nowrap">
                Donate $500 to the charity
              </span>
            </div>
            <div className="flex gap-2">
              <span className="text-[#FFC800] bg-[#FFC80062] px-2 rounded-full">
                Donations
              </span>
              <span className="text-[#00B884] bg-[#00B88462] px-2 rounded-full">
                Social
              </span>
            </div>
          </div>
        </div>
      </div>*/}
      <Modal
        open={open}
        closeModal={() => {
          setOpen(!open);
        }}
      />
      <main className="min-w-[60em] flex-1 h-[100vh] bg-white">
        <Board />
      </main>
    </div>
  );
};

export default Test;

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  return (
    <div
      className="flex h-full w-full gap-3
  overflow-scroll p-12"
    >
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />

      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />

      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />

      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};
const Column = ({ title, headingColor, column, cards, setCards }) => {
  const [active, setActive] = useState(false);
  const filteredCards = cards.filter((c) => c.column === column);
  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
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
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };
  const handleDragEnd = (e) => {
    clearHighlights();
    setActive(false);
    const cardId = e.dataTransfer.getData("cardId");
    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);
    const before = element.dataset.before || "-1";

    if (before !== cardId) {
      let copy = [...cards];
      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);
      const moveToBack = before === "-1";
      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;
        copy.splice(insertAtIndex, 0, cardToTransfer);
      }
      setCards(copy);
    }
  };
  return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}{" "}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors ${
          active ? "Obg-neutral-800/50" : "bg-neutral-800/0"
        }`}
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {filteredCards.map((c) => {
          return <Card handleDragStart={handleDragStart} key={c.id} {...c} />;
        })}
        <DropIndicator beforeId="-1" column={column} />
      </div>
    </div>
  );
};
const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        draggable="true"
        className="cursor-grab rounded border.
  border-neutral-200 bg-neutral-300 p-3
  active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-800">{title}</p>
      </motion.div>
    </>
  );
};
const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};
const DEFAULT_CARDS = [
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },

  { title: "SOX compliance checklist", id: "2", column: "backlog" },

  { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },

  { title: "Document Notifications service", id: "4", column: "backlog" },

  {
    title: "Research DB options for new microservice",
    id: "5",
    column: "todo",
  },

  { title: "Postmortem for outage", id: "6", column: "todo" },

  { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

  {
    title: "Refactor context providers to use Zustand",
    id: "8",
    column: "doing",
  },

  { title: "Add logging to daily CRON", id: "9", column: "doing" },

  {
    title: "Set up DD dashboards for Lambda listener",
    id: "10",
    column: "done",
  },
];
