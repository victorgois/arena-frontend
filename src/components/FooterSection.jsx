import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col text-left mx-10 my-2">
        <span>criado por @victorgois</span>
        <span>projeto open source sob licença creative commons</span>
      </div>
      <div className="flex flex-col align-right text-right mx-10 my-2">
        <span>sobre</span>
        <span>receba em seu whatsapp</span>
        <span>contribua</span>
      </div>
    </div>
  );
};

export default DisclaimerSection;
