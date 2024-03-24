import { Link } from "react-router-dom";
import { formatTimestamp } from "../../../utils/functions";
import QuestionIcon from "../../icons/QuestionIcon";

const InvitationNotification = ({ notification }) => {
  console.log(notification.context);
  return (
    <Link
      to={`/invitation/${notification.context}/confirm`}
      className="p-2 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer flex flex-col gap-2"
    >
      <div className="flex items-center gap-3">
        <QuestionIcon className={`w-4 h-4 fill-blue-400`} />{" "}
        <span className="text-xs font-light text-blue-400">
          collaboration invitation
        </span>
      </div>
      <div className="flex gap-2">
        <div
          className="bg-cover bg-center bg-no-repeat w-10 h-10 rounded-full flex shadow-lg"
          style={{
            backgroundImage: `url('${notification.project.icon}')`,
          }}
        >
          <div
            className="bg-cover bg-center bg-no-repeat w-5 h-5 rounded-full border-white border-2 mt-auto ms-auto"
            style={{
              backgroundImage: `url('${
                notification.by.icon || "/images/defaultProfile.png"
              }')`,
            }}
          ></div>
        </div>
        <div className="flex-1 flex flex-col">
          <p className="text-xs text-gray-400">
            <span className="font-semibold text-black">
              {notification.by.first_name} {notification.by.last_name}
            </span>{" "}
            invited you to his team working on the project{" "}
            <span className="text-blue-500 font-semibold">
              {notification.project.name}
            </span>
          </p>
          <p className=" text-[10px] ms-auto">
            {formatTimestamp(notification.createdAt)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default InvitationNotification;
