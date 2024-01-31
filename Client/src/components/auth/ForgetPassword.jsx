import { useState } from "react";
import Header1 from "../custom/Header1";
import CustomInput from "../custom/CustomInput";
import { generateId } from "../../utils/functions";

const ForgetPassword = () => {
  const [credentials, setCredentials] = useState({
    email: "",
  });

  const handleChange = (field, value) => {
    setCredentials({
      ...credentials,
      [field]: value
    });
  };
  return (
    <div className="flex flex-col gap-2 w-max justify-center">
      <Header1 className="text-blue-700">Forget Password</Header1>
      <div className="py-3">
        <form action="" className="min-w-[320px] flex flex-col gap-4">
          <CustomInput
            label={"Email"}
            type={'email'}
            value={credentials.email}
            handleChange={(value) => handleChange("email", value)}
          ></CustomInput>
         
          <button className="py-2 rounded-lg bg-blue-500 text-white font-semibold">Send Me Mail</button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
