import { useEffect, useState } from "react";
import Header1 from "../custom/Header1";
import CustomInput from "../custom/CustomInput";
import { generateId } from "../../utils/functions";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { reset, resetPassword } from "../../../features/auth/authSlice";

const ResetPassword = () => {
  const [credentials, setCredentials] = useState({
    password: "",
    password_confirmation: "",
    token: "",
  });
  const [searchParams] = useSearchParams();

  const handleChange = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value,
    });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    dispatch(resetPassword(credentials));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [isError, isSuccess, message]);
  useEffect(() => {
    setCredentials({
      ...credentials,
      token: searchParams.get("token"),
    });
  }, [searchParams]);
  return (
    <div className="flex flex-col gap-2 w-max justify-center">
      <Header1 className="text-blue-700">Reset Password</Header1>
      <div className="py-3">
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="min-w-[320px] flex flex-col gap-4"
        >
          <CustomInput
            label={"Password"}
            type={"password"}
            value={credentials.password}
            handleChange={(value) => handleChange("password", value)}
          ></CustomInput>
          <CustomInput
            label={"Repeat Password"}
            type={"password"}
            value={credentials.password_confirmation}
            handleChange={(value) =>
              handleChange("password_confirmation", value)
            }
          ></CustomInput>
          <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
