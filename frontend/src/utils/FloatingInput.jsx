import React from "react";
import { Field, ErrorMessage } from "formik";

const FloatingInput = ({ label, name, type = "text" }) => {
  return (
    <div className="relative w-full mt-4">
      <Field
        type={type}
        name={name}
        className="
          peer w-full px-3 pt-5 pb-2 
          border rounded-lg 
          text-sm 
          focus:outline-none 
          focus:ring-2 focus:ring-blue-500 
          focus:border-blue-500
        "
        placeholder=" "   
      />

      <label
        className="
          absolute left-3 top-3 text-gray-500 
          text-sm 
          transition-all duration-200
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-sm 
          peer-focus:top-1 
          peer-focus:text-xs 
          peer-focus:text-blue-600
          peer-placeholder-shown:text-gray-400
        "
      >
        {label}
      </label>

      <ErrorMessage
        name={name}
        component="p"
        className="text-red-500 text-xs mt-1"
      />
    </div>
  );
};

export default FloatingInput;
