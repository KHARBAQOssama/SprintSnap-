import { useEffect, useState } from "react";
import { formatDate, randomColorGenerator } from "../../../utils/functions";
import EditIcon from "../../icons/EditIcon";
import MoreIcon from "../../icons/MoreIcon";
import PlusIcon from "../../icons/PlusIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import ProgressIcon from "../../icons/ProgressIcon";
import TimeIcon from "../../icons/TimeIcon";
import api from "../../../api";
import { useSelector } from "react-redux";
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const TopHead = ({ project }) => {
  return (
    <div className="flex gap-2 items-baseline">
      <div className="flex gap-2 items-center">
        <div
          className={`h-4 w-4 rounded `}
          style={{ backgroundColor: randomColorGenerator() }}
        ></div>
        <span className="font-semibold text-xl ">{project.name}</span>
      </div>
      <button className="ms-auto">
        <EditIcon />
      </button>
      <button>
        <MoreIcon />
      </button>
    </div>
  );
};
const Cover = ({ project }) => {
  return (
    <div
      className="my-2 rounded-xl p-10 bg-cover bg-no-repeat bg-center pt-28"
      style={{
        backgroundImage: `url('${project.cover}')`,
      }}
    >
      <div>
        <div className="flex gap-3 items-center">
          <div
            className="h-12 w-12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${project.icon}')` }}
          ></div>
          <div className="flex flex-col justify-center">
            <span className="font-semibold text-xl text-white drop-shadow drop-shadow-black">
              {project.name}
            </span>
          </div>
          <div
            className="flex gap-6 ms-auto bg-opacity-30 rounded p-3"
            style={{
              backgroundImage:
                "linear-gradient(to bottom , #00000040, #FFFFFF40)",
            }}
          >
            <div className="flex flex-col">
              <span className="text-white">CREATED</span>
              <span className="">{formatDate(project.createdAt)}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white">TRACKED TIME</span>
              <span className=""> -- : -- </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const AddTeammateModal = ({ open, project, toggleForm }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [invited, setInvited] = useState([]);
  const [invitation, setInvitation] = useState({
    role: "Contributor",
    user: null,
    project: project._id,
  });
  const { user: sender } = useSelector((state) => state.auth);
  const roles = ["Administrator", "Lead", "Contributor", "Viewer"];
  const [activeRole, setActiveRole] = useState("Contributor");
  const fetchUser = async () => {
    console.log(email);
    try {
      const result = await api.get(`/user/getbyemail/${email}`);
      console.log(result);

      if (result.data.user) setUser(result.data.user);
      else setUser(null);
    } catch (error) {
      console.log(error);
    }
  };
  const invite = async (user) => {
    const data = { ...invitation, user, sender };
    try {
      const response = await api.post("/invitation", data);
      setInvited([...invited, user._id]);
    } catch (error) {}
  };
  useEffect(() => {
    if (emailPattern.test(email)) fetchUser();
    else setUser(null);
  }, [email]);
  const userUnInvited = () => {
    return !(
      invited.includes(user._id) ||
      project.invitations.some((invitation) => invitation.user == user._id)
    );
  };

  useEffect(() => {
    // if (user) {
    //   if (
    //     project.invitations.some((invitation) => invitation.user == user._id)
    //   ) {
    //     setInvited([...invited, user._id]);
    //   }
    // }
  }, [user]);

  return open ? (
    <>
      <div className="absolute w-max bg-white p-2 shadow-lg shadow-green-100 rounded flex flex-col gap-2">
        <div className="text-gray-400 flex justify-between items-center">
          <h1 className="text-sm text-gray-400">Invite new Member</h1>
          <span onClick={toggleForm} className="font-bold cursor-pointer">
            x
          </span>
        </div>

        <div>
          <input
            type="email"
            className="border outline-none p-1 rounded w-full"
            placeholder="search by email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {user && (
            <div className="p-2 flex gap-2 items-center bg-gray-100 mt-2 rounded">
              <div
                className={`w-[30px] rounded-full overflow-hidden border-2 border-white`}
              >
                <img
                  className="w-full"
                  src={user.image_url || "/icons/defaultProfile.png"}
                  alt={user.first_name[0] + user.last_name[0]}
                  title={user.first_name + " " + user.last_name}
                />
              </div>
              <div className="flex flex-col ">
                <span className="text-sm">
                  {user.first_name + " " + user.last_name}
                </span>
                <span className="text-xs text-gray-400">{user.email}</span>
              </div>
              <div className="px-2">
                {userUnInvited() ? (
                  <select
                    className="bg-gray-200 p-1 rounded-lg"
                    value={invitation.role}
                    onChange={(e) => {
                      setInvitation({ ...invitation, role: e.target.value });
                    }}
                    name=""
                    id=""
                  >
                    {roles.map((role) => (
                      <option value={role} key={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                ) : (
                  <></>
                )}
              </div>
              {userUnInvited() ? (
                <button
                  onClick={() => {
                    invite(user);
                  }}
                  className="bg-gray-200 text-gray-600 text-xs py-1 rounded ms-auto px-3"
                >
                  invite
                </button>
              ) : (
                <p className="bg-green-200 text-green-600 text-xs py-1 rounded ms-auto px-3">
                  invited
                </p>
              )}
            </div>
          )}
          {email && !user ? (
            <p className="p-2 flex gap-2 items-center bg-gray-100 mt-2 rounded text-sm text-gray-500">
              no users with this email
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};
const InviteButton = ({ inviteFormOpen, toggleForm, project }) => {
  return (
    <div
      className={`w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] hover:z-50`}
      style={{
        left: `${project.team.members.length * 10 + 35}px`,
        zIndex: 10,
      }}
    >
      <button className="w-full h-full" onClick={toggleForm}>
        <PlusIcon className="w-full h-full" />
      </button>

      <div className="relative">
        <AddTeammateModal
          project={project}
          open={inviteFormOpen}
          toggleForm={toggleForm}
        />
      </div>
    </div>
  );
};
const ProjectInfo = ({ project }) => {
  const [inviteFormOpen, setInviteFormOpen] = useState(false);
  // const { user } = useSelector((state) => state.user);
  const toggleForm = () => setInviteFormOpen(!inviteFormOpen);
  return (
    <div className="flex gap-4 py-3 px-2">
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <TimeIcon /> <span className="text-[#5E5E5E]">Created At</span>
          <div className="w-[55%] ms-auto">
            <span className="text-[#AEAEAE]">
              {formatDate(project.createdAt)}
            </span>
          </div>
        </div>
        {/* <div className="flex gap-2 items-center">
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
        </div> */}
        <div className="flex gap-2 ">
          <ProfileIcon /> <span className="text-[#5E5E5E]">Assign</span>
          <div className="w-[55%] ms-auto relative">
            {/* <span className="text-[#AEAEAE] font-light bg-[#AEAEAE50] px-3 rounded-lg">
              @ Mustafa
            </span> */}
            {project.team.members.map((member, index) => (
              <div
                key={index}
                className={`w-[30px] absolute rounded-full overflow-hidden hover:z-50`}
                style={{
                  left: `${index * 15}px`,
                  zIndex: project.team.members.length - index,
                }}
              >
                <img
                  className="w-full"
                  src={member.image_url || "/icons/defaultProfile.png"}
                  alt={member.first_name[0] + member.last_name[0]}
                  title={member.first_name + " " + member.last_name}
                />
              </div>
            ))}
            <InviteButton
              inviteFormOpen={inviteFormOpen}
              project={project}
              toggleForm={toggleForm}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <ProgressIcon color={"#56555C"} />{" "}
          <span className="text-[#5E5E5E]">Progress</span>
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
        <p className="text-[#AEAEAE]">{project.description}</p>
      </div>
    </div>
  );
};

const SingleProjectHeader = ({ project }) => {
  return (
    <>
      {project && (
        <>
          <TopHead project={project} />
          <Cover project={project} />
          <ProjectInfo project={project} />
        </>
      )}
    </>
  );
};

export default SingleProjectHeader;
