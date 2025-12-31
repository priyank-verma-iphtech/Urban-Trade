import React from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../../assets/UTLogo.png";

const Modal = ({ isOpen, onClose, children, type }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-3"
      onClick={onClose}
    >
      <div
        className="
          w-full sm:w-[80%] md:w-[70%] lg:w-[50%]
          bg-white rounded-xl shadow-2xl overflow-hidden
          flex flex-col md:flex-row
          relative animate-fadeIn
          max-h-[90vh]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition cursor-pointer"
        >
          <FaTimes size={18} />
        </button>

        {/* Left Section */}
        <div
          className="
            w-full md:w-1/3
            bg-white
            flex flex-col items-center justify-center
            p-4 sm:p-6
             md:border-b-0 
          "
        >
          <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 mb-4"
          />

          <h2 className="text-sm sm:text-lg text-gray-700 text-center">
            {type === "login"
              ? "Sign in to your account"
              : "Create your account"}
          </h2>
        </div>

        {/* Right Section */}
        <div
          className="
            w-full md:w-2/3
            bg-white
            p-4 sm:p-8
            overflow-y-auto
          "
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
