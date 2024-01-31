import { useState } from "react";
import Header1 from "../custom/Header1";
import CustomInput from "../custom/CustomInput";
import { generateId } from "../../utils/functions";

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
  return (
    <div className="flex flex-col gap-2 w-max justify-center">
      <Header1 className="text-blue-700">Login</Header1>
      <p className="min-w-[320px] max-w-[40ch] font-semibold">Sprint Snap: Organize, Collaborate, and Deliver. Log In to Power Your Projects</p>
      <div className="py-3">
        <form action="" className="min-w-[320px] flex flex-col gap-4">
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
          <div className="flex items-center justify-between font-semibold">
            <a href="" className="hover:text-blue-500">forget Password?</a>
            <a href="" className="hover:text-blue-500">Register</a>
          </div>
          <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
