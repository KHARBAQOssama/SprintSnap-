import { useSelector } from "react-redux";
import FoldersIcon from "../../icons/FoldersIcon";

const Overview = () => {
  const teams = [1, 2, 3, 4, 5];
  const { user } = useSelector((state) => state.auth);
  const { projects } = useSelector((state) => state.project);
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
          <span className="text-sm text-gray-400 cursor-pointer hover:text-blue-500">
            View All
          </span>
        </div>
        <div className="py-3 flex gap-3 flex-wrap">
          {projects.map((project) => (
            <div className="p-4 min-w-max flex-1 flex flex-col gap-3 border bg-white shadow-xl shadow-gray-100 rounded-xl">
              <div className="flex gap-3">
                <img src={project.icon} className="w-8 h-8" alt="" />
                <span className="text-lg font-semibold">{project.name}</span>
              </div>
              <p className="text-sm text-gray-500">{project.description}</p>
              <div className="flex relative h-4">
                {teams.map((team, index) => (
                  <div
                    className={`w-[25px] absolute`}
                    style={{
                      left: `${index * 15}px`,
                      zIndex: `${index * -1}px`,
                    }}
                  >
                    <img
                      className="w-full"
                      src="/images/logos/projectIcon1.png"
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Overview;