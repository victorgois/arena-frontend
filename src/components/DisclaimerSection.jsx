import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="flex flex-col p-10 text-justify w-full mx-auto bg-yellow-300 items-center">
      <div className="flex justify-center items-center max-w-2xl m-10 flex-col">
        <p className=" text-black font-inconsolata">
          Esse site não tem nenhum vínculo com a Arena MRV ou o clube Atlético
          Mineiro. Não nos responsabilizamos por informações erradas nem por
          cancelamentos de eventos.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerSection;
