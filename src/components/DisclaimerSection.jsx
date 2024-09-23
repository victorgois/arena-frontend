import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="flex flex-col p-10 text-justify w-full mx-auto bg-yellow-300">
      <div className="flex max-w-2xl m-10 flex-col justify-center items-center">
        <p className=" text-black font-inconsolata">
          Esse site tem propósitos não comerciais e não tem nenhum vínculo com a
          Arena MRV ou o clube Atlético Mineiro. Não nos responsabilizamos por
          informações erradas nem por cancelamentos de eventos.
        </p>
      </div>
    </div>
  );
};

export default DisclaimerSection;
