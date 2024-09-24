import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col text-left text-sm md:text-base lg:text-lg mx-10 my-2 justify-center">
        <span>
          criado por{" "}
          <a className="underline" href="https://github.com/victorgois">
            @victorgois
          </a>
          <p className="text-black text-sm font-playfair mt-4 w-1/2">
            * Esse site não tem nenhum vínculo com a Arena MRV ou o clube
            Atlético Mineiro. Não nos responsabilizamos por informações erradas
            nem por cancelamentos de eventos.
          </p>
        </span>
      </div>
      <div className="flex flex-col align-right text-sm md:text-base lg:text-lg text-right mx-10 my-10">
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
