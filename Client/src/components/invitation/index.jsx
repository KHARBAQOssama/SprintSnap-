import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../api";
import Logo from "../common/Logo";

const InvitationConfirmation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [invitation, setInvitation] = useState(null);
  const getInvitation = async () => {
    try {
      const response = await api.get(`/invitation/${id}`);
      setInvitation(response.data.invitation);
    } catch (error) {
      console.log(error);
    }
  };
  const handleConfirm = async () => {
    try {
      const response = await api.post(`/invitation/${id}/confirm`);
      if (response.status == 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleRefuse = async () => {
    try {
      const response = await api.get(`/invitation/${id}/refuse`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) getInvitation();
  }, [id]);
  return (
    <>
      {invitation && (
        <div className="w-[100vw] h-[100vh] bg-light-auth-bg bg-no-repeat bg-cover bg-center flex items-center justify-center p-4">
          <div className="bg-white p-5 shadow-lg shadow-green-200 rounded-xl flex flex-col items-center gap-2 max-w-[400px]">
            <Logo className={"max-w-[200px]"}></Logo>
            <div className=" flex flex-col gap-3">
              <p className="text-lg text-justify">
                Hi{" "}
                <span className="text-green-400 font-">
                  {invitation.user.first_name}
                </span>{" "}
                you have been invited by{" "}
                {invitation.by.first_name + " " + invitation.by.last_name} to
                Collaborate in the project bellow as a "
                <span className="font-semibold text-blue-400">
                  {invitation.role}
                </span>
                "
              </p>
              <div
                className="bg-no-repeat bg-cover bg-center p-3 rounded-lg flex items-center gap-3"
                style={{
                  backgroundImage: `url('${invitation.project.cover}')`,
                }}
              >
                <img src={invitation.project.icon} className="w-12" alt="" />
                <p className="text-2xl text-white drop-shadow font-semibold">
                  {invitation.project.name}
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-full pt-4">
              <button
                className="flex-1 hover:shadow-lg hover:shadow-orange-100 p-3 rounded-xl bg-gray-100  "
                onClick={handleRefuse}
              >
                Refuse
              </button>
              <button
                className="flex-1 hover:shadow-lg hover:shadow-orange-100 p-3 rounded-xl text-white bg-blue-500 "
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvitationConfirmation;
