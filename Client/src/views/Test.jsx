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
      <main className="min-w-[60em]">
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
      </main>
      <div className="flex-1 bg-white border-l p-6">
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
      </div>
      <Modal
        open={open}
        closeModal={() => {
          setOpen(!open);
        }}
      />
    </div>
  );
};

export default Test;
