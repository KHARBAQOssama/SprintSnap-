import { useEffect, useState } from "react";
import Header1 from "../custom/Header1";
import CustomInput from "../custom/CustomInput";
import { generateId } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../features/auth/slice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value
    });
  };

  const navigate = useNavigate();
  const dispatch = "useDispatch"();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(credentials));
  };
  
  useEffect(() => {
    if (isError) {
      console.log(message);
      toast.error(message);
    }

    if (isSuccess) {
      toast.success(message);
      navigate('/dashboard')
    }

      dispatch(reset())
    
  }, [user, isError, isSuccess, isLoading, message]);

  return (
    <div className="flex flex-col gap-2 w-max justify-center">
      <Header1 className="text-blue-700">Login</Header1>
      <p className="min-w-[320px] max-w-[40ch]">Sprint Snap: Organize, Collaborate, and Deliver. Log In to Power Your Projects</p>
      <div className="py-3">
        <form action="" onSubmit={(e)=>handleSubmit(e)} className="min-w-[320px] flex flex-col gap-4">
          <CustomInput
            label={"Email"}
            type={'email'}
            value={credentials.email}
            handleChange={(value) => handleChange("email", value)}
          ></CustomInput>
          <CustomInput
            label={"Password"}
            type={'password'}
            value={credentials.password}
            handleChange={(value) => handleChange("password", value)}
          ></CustomInput>
          <div className="flex items-center justify-between font-medium">
            <Link to={`/auth/password/forget`} className="hover:text-blue-500">forget Password?</Link>
            <Link to={`/auth/register`} className="hover:text-blue-500">Register</Link>
          </div>
          <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
