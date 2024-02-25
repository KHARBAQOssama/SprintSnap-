import { useEffect, useState } from "react";
import { generateId } from "../../utils/functions";

const CustomInput = ({ label, value, handleChange, type }) => {
  const [focus, setFocus] = useState(false);
  const id = generateId();
  useEffect(() => {}, []);
  return (
    <div className="w-full relative h-max rounded-lg overflow-hidden">
      <label
        htmlFor={id}
        className={`cursor-text transition-all duration-300 absolute left-3 translate-y-[-50%] ${
          focus || value
            ? "top-4 text-xs text-blue-700"
            : "top-[50%] text-gray-400"
        } `}
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`w-full transition-all duration-300 focus:outline-none focus:border-blue-700 rounded-lg bg-gray-100 overflow-hidden border-gray-400 border-spacing-0 py-2 px-3 min-w-[300px] ${
          focus || value ? "pt-6" : ""
        }`}
        value={value}
        onChange={(event) => handleChange(event.target.value)}
      />
    </div>
  );
};

export default CustomInput;
