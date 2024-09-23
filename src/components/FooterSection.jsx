import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col text-left mx-10 my-2 justify-center">
        <span>
          criado por{" "}
          <a className="underline" href="https://github.com/victorgois">
            @victorgois
          </a>
        </span>
      </div>
      <div className="flex flex-col align-right text-right mx-10 my-10">
        <span>sobre</span>
        <span>receba em seu whatsapp</span>
        <span>contribua</span>
        <span>
          <a className="underline" href="mailto:victorgois18@gmail.com">
            anuncie
          </a>
        </span>
      </div>
    </div>
  );
};

export default DisclaimerSection;
