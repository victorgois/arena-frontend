import React from "react";

const AboutSection = ({ text }) => {
  return (
    <div className="flex flex-col p-10 text-justify w-full mx-auto bg-black items-center">
      <div className="flex justify-center items-center max-w-2xl flex-col">
        <p className="text-white text-3xl font-bebasNeue tracking-wide mb-4">
          {text}
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
