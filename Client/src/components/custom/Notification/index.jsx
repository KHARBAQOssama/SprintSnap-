import { useSelector } from "react-redux";
import InvitationNotification from "./InvitaitonNotification";
import BellIcon from "../../icons/BellIcon";

const Notification = ({ notifications }) => {
  const { isLoading, isError } = useSelector((state) => state.notification);
  return (
    <>
      <div className="p-1 bg-white shadow max-w-[300px] w-[300px] absolute right-1 bottom-[115%] rounded-xl">
        <h3 className="p-3 py-2 flex items-center gap-3 font-semibold">
          <BellIcon className={`w-4 h-4`} /> Notifications
        </h3>
        {notifications.length != 0 && (
          <div className="max-h-[320px] rounded-lg gap-1 flex flex-col overflow-y-scroll">
            {notifications.map((notification,index) =>
              notification.type == "Invitation" ? (
                <InvitationNotification key={index} notification={notification} />
              ) : (
                <div key={index}>{notification.type}</div>
              )
            )}
          </div>
        )}
        {!isLoading && !isError && !notifications.length && (
          <div>
            <p>There is no notification for the moment</p>
          </div>
        )}
        {isLoading && (
          <div>
            <p>Loading</p>
          </div>
        )}
        {isError && (
          <div>
            <p>something went wrong while fetching notifications</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Notification;
