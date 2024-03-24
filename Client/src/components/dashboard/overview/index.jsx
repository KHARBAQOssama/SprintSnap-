import { useSelector } from "react-redux";
import FoldersIcon from "../../icons/FoldersIcon";
import CheckedBoxIcon from "../../icons/CheckedBoxIcon";
import UncheckedBox from "../../icons/UncheckedBox";
import { useNavigate } from "react-router-dom";
import MembersDisplayer from "../projects/MembersDisplayer";

const Overview = () => {
  const teams = [1, 2, 3, 4, 5];
  const { user } = useSelector((state) => state.auth);
  const { projects, isLoading } = useSelector((state) => state.project);
  const navigate = useNavigate();
  const handleClick = (_id) => {
    console.log(_id);
    navigate(`/dashboard/projects/${_id}`);
  };
  return (
    <div className="w-full h-full overflow-y-scroll flex flex-col gap-4 ">
      <div>
        <span className="flex gap-3">
          <img src="/images/hand.png" className="w-6" />
          <span className="font-semibold text-lg text-orange-400">
            Hi {user.first_name}
          </span>
        </span>
      </div>
      <div className="flex gap-5 flex-wrap">
        <div
          className="flex-1 min-w-max p-6 bg-cover bg-no-repeat bg-center rounded-xl shadow-xl shadow-gray-100"
          style={{ backgroundImage: `url('/images/dashItemBg.png')` }}
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <span className="text-white font-semibold text-lg flex gap-3 items-center">
                <FoldersIcon color={"#FFF"} className={"w-6 h-6"} /> Projects
              </span>
              <div className="flex gap-4 text-sm p-2 rounded bg-[#FFFFFF30]">
                <span className="text-green-600">Finisher Projects </span>
                <span className="text-green-600 font-bold">0</span>
              </div>
            </div>

            <span className="text-white font-bold text-xl p-6  rounded-full">
              {projects.length}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-max p-6 bg-white shadow-xl shadow-gray-100 rounded-xl flex items-center">
          <div className="flex-1 min-w-max flex flex-col gap-5">
            <span className="font-semibold">total Task done</span>
            <div>
              <div className="h-2 bg-gray-100 rounded overflow-hidden">
                <div className="h-full bg-blue-400 w-2/3 rounded"></div>
              </div>
              <span className="font-light text-sm">76 left from target</span>
            </div>
          </div>
          <div className="p-6">
            <span className="text-xl font-bold">24</span>
          </div>
        </div>
        <div className="group flex-1 p-6 bg-white shadow-xl shadow-gray-100 rounded-xl hover:bg-blue-500 transition-all text-blue-500 hover:text-white flex items-center gap-3">
          <span className="w-12 h-12 rounded-full flex justify-center items-center bg-blue-500 group-hover:bg-white text-white text-3xl group-hover:text-blue-500">
            +
          </span>
          <span className="text-lg font-semibold">Create New Project</span>
        </div>
      </div>
      <section>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Projects</h2>
          {!isLoading && projects.length != 0 &&<span className="text-sm text-gray-400 cursor-pointer hover:text-blue-500">
            View All
          </span>}
        </div>
        {projects.length != 0 && (
          <div className="py-3 flex gap-3 flex-wrap">
            {projects.map((project, index) =>
              index < 3 ? (
                <div
                  className="p-4 flex-1 flex flex-col gap-3 border bg-white shadow-xl shadow-gray-100 max-w-[300px] hover:shadow-green-200 cursor-pointer"
                  onClick={() => handleClick(project._id)}
                >
                  <div className="flex gap-3 item">
                    <img src={project.icon} className="w-8 h-8" alt="" />
                    <span className="text-lg font-semibold  w-[25ch] overflow-hidden text-ellipsis whitespace-nowrap">
                      {project.name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 w-[25ch] overflow-hidden text-ellipsis whitespace-nowrap">
                    {project.description}
                  </p>
                  <div className="flex relative h-4 mb-2">
                    <MembersDisplayer members={project.team.members} />
                  </div>
                </div>
              ) : (
                <></>
              )
            )}
          </div>
        )}
        {!isLoading && projects.length == 0 && (
          <div className="flex justify-center">
            <img src="/images/noProjects1.jpg" className="h-72" alt="" />
          </div>
        )}
      </section>
      <section className="max-h-[80vh] flex flex-col gap-4 text-sm">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-lg font-semibold">Activities</h2>
          <span className="text-sm text-gray-400 cursor-pointer hover:text-blue-500">
            View All
          </span>
        </div>
        <div className="overflow-y-scroll flex-1 flex flex-col gap-1">
          <div className="flex items-center px-4 rounded bg-blue-100 hover:bg-blue-200 gap-3 py-3">
            <div>
              {false ? (
                <CheckedBoxIcon className={"h-5 w-5"} />
              ) : (
                <UncheckedBox className={"h-5 w-5"} />
              )}
            </div>
            <div className="relative">
              <div
                className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon12.png')`,
                }}
              ></div>
              <div
                className="h-5 w-5 rounded-full bg-center bg-no-repeat bg-cover absolute right-0 bottom-0 border border-white"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon22.png')`,
                }}
              ></div>
            </div>
            <div className="">
              <p className="text-gray-500">
                <span
                  className="text-black font-semibold
              "
                >
                  Ossama Kharbaq
                </span>{" "}
                has change the task status of a task from to do to in progress
              </p>
              <p className="text-gray-400 font-light">today at 12:00 pm </p>
            </div>
          </div>
          <div className="flex items-center px-4 rounded bg-blue-100 hover:bg-blue-200 gap-3 py-3">
            <div>
              {true ? (
                <CheckedBoxIcon className={"h-5 w-5"} />
              ) : (
                <UncheckedBox className={"h-5 w-5"} />
              )}
            </div>
            <div className="relative">
              <div
                className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon18.png')`,
                }}
              ></div>
              <div
                className="h-5 w-5 rounded-full bg-center bg-no-repeat bg-cover absolute right-0 bottom-0 border border-white"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon134.png')`,
                }}
              ></div>
            </div>
            <div className="">
              <p className="text-gray-500">
                <span
                  className="text-black font-semibold
              "
                >
                  Ossama Kharbaq
                </span>{" "}
                has change the task status of a task from to do to in progress
              </p>
              <p className="text-gray-400 font-light">today at 12:00 pm </p>
            </div>
          </div>
          <div className="flex items-center px-4 rounded bg-blue-100 hover:bg-blue-200 gap-3 py-3">
            <div>
              {true ? (
                <CheckedBoxIcon className={"h-5 w-5"} />
              ) : (
                <UncheckedBox className={"h-5 w-5"} />
              )}
            </div>
            <div className="relative">
              <div
                className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon94.png')`,
                }}
              ></div>
              <div
                className="h-5 w-5 rounded-full bg-center bg-no-repeat bg-cover absolute right-0 bottom-0 border border-white"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon90.png')`,
                }}
              ></div>
            </div>
            <div className="">
              <p className="text-gray-500">
                <span
                  className="text-black font-semibold
              "
                >
                  Ossama Kharbaq
                </span>{" "}
                has change the task status of a task from to do to in progress
              </p>
              <p className="text-gray-400 font-light">today at 12:00 pm </p>
            </div>
          </div>
          <div className="flex items-center px-4 rounded bg-blue-100 hover:bg-blue-200 gap-3 py-3">
            <div>
              {true ? (
                <CheckedBoxIcon className={"h-5 w-5"} />
              ) : (
                <UncheckedBox className={"h-5 w-5"} />
              )}
            </div>
            <div className="relative">
              <div
                className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon93.png')`,
                }}
              ></div>
              <div
                className="h-5 w-5 rounded-full bg-center bg-no-repeat bg-cover absolute right-0 bottom-0 border border-white"
                style={{
                  backgroundImage: `url('/images/logos/projectIcon173.png')`,
                }}
              ></div>
            </div>
            <div className="">
              <p className="text-gray-500">
                <span
                  className="text-black font-semibold
              "
                >
                  Ossama Kharbaq
                </span>{" "}
                has change the task status of a task from to do to in progress
              </p>
              <p className="text-gray-400 font-light">today at 12:00 pm </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
