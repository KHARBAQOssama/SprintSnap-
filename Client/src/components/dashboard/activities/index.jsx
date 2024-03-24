import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../../features/activity/slice";
import { formatTimestamp } from "../../../utils/functions";
import { Link } from "react-router-dom";

const Activities = () => {
  const dispatch = useDispatch();
  const { activities } = useSelector((state) => state.activity);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <section>
      <h1 className="text-xl font-semibold">Activities</h1>
      <div className="flex flex-col gap-1 py-3">
        {activities.map((activity) => (
          <div className="flex items-center px-4 rounded bg-blue-100 gap-3 py-2">
            <div className="relative">
              <div
                className="h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('${activity.project.icon}')`,
                }}
              ></div>
              <div
                className="h-5 w-5 rounded-full bg-center bg-no-repeat bg-cover absolute right-0 bottom-0 border-2 border-white bg-black"
                style={{
                  backgroundImage: `url('${
                    activity.by.image
                      ? activity.by.image
                      : "/images/defaultProfile.png"
                  }')`,
                }}
              ></div>
            </div>
            <div className="">
              <p className="text-gray-500">
                <span
                  className="text-black font-semibold
              "
                >
                  {activity.by._id != user._id
                    ? activity.by.first_name + " " + activity.by.last_name
                    : "you"}
                </span>{" "}
                {activity.by._id != user._id ? "has" : "have"} change the task
                status of a task in the{" "}
                <Link
                  to={`/dashboard/projects/${activity.project._id}`}
                  className="font-semibold text-blue-500"
                >
                  {activity.project.name}
                </Link>{" "}
                project
              </p>
              <p className="text-gray-400 font-light text-sm">
                {formatTimestamp(activity.createdAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
