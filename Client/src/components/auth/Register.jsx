import { useState } from "react";
import Header1 from "../custom/Header1";
import CustomInput from "../custom/CustomInput";
import { generateId } from "../../utils/functions";

const Register = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    first_name:"",
    last_name:"",
    password_confirmation: ""
  });

  const handleChange = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value
    });
  };
  return (
    <div className="flex flex-col gap-2 w-max justify-center">
      <Header1 className="text-blue-700">Register</Header1>
      <div className="py-3">
        <form action="" className="min-w-[320px] flex flex-col gap-4">
          <CustomInput
            label={"First Name"}
            type={'text'}
            value={credentials.first_name}
            handleChange={(value) => handleChange("first_name", value)}
          ></CustomInput>
          <CustomInput
            label={"Last Name"}
            type={'text'}
            value={credentials.last_name}
            handleChange={(value) => handleChange("last_name", value)}
          ></CustomInput>
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
          <CustomInput
            label={"Repeat Password"}
            type={'password'}
            value={credentials.password_confirmation}
            handleChange={(value) => handleChange("password_confirmation", value)}
          ></CustomInput>
          <div className="flex items-center justify-between font-semibold">
            <a href="" className="hover:text-blue-500 ms-auto">Login</a>
          </div>
          <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
