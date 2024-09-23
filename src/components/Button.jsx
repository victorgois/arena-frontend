import React from "react";

const Button = ({ text, icon, onClick }) => {
  return (
    <div className="relative bg-black p-4 rounded-lg inline-block overflow-hidden">
      <button
        onClick={onClick}
        className="relative z-10 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex items-center"
      >
        <span className="mr-2 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-112 sm:inline">
          {text}
        </span>
        {icon}
      </button>
    </div>
  );
};

export default Button;
