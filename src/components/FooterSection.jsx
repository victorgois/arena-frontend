import React from "react";

const DisclaimerSection = () => {
  return (
    <div className="flex flex-row w-full justify-between">
      <div className="flex flex-col text-left text-base md:text-xl lg:text-xl mx-10 my-2 justify-center">
        <span>
          criado por{" "}
          <a
            className="hover:font-extrabold hover:text-red-500"
            href="https://github.com/victorgois"
          >
            @victorgois
          </a>
          <p className="text-black text-sm font-playfair mt-4 w-1/2">
            * Esse site não tem nenhum vínculo com a Arena MRV ou o clube
            Atlético Mineiro. Não nos responsabilizamos por informações erradas
            nem por cancelamentos de eventos.
          </p>
        </span>
      </div>
      <div className="flex flex-col font-bold align-right text-sm md:text-base lg:text-lg text-right mx-10 my-10">
        <a
          className="hover:font-extrabold hover:text-red-500"
          href="mailto:victorgois18@gmail.com"
        >
          sobre
        </a>
        <a
          className="hover:font-extrabold hover:text-red-500"
          href="mailto:victorgois18@gmail.com"
        >
          receba em seu whatsapp
        </a>
        <a
          className="hover:font-extrabold hover:text-red-500"
          href="mailto:victorgois18@gmail.com"
        >
          contribua
        </a>
        <a
          className="hover:font-extrabold hover:text-red-500"
          href="mailto:victorgois18@gmail.com"
        >
          entre em contato
        </a>
      </div>
    </div>
  );
};

export default DisclaimerSection;
