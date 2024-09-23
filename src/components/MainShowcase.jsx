import React from "react";
import WhatsappAction from "./WhatsappAction";

export function formatDate(timestamp, isHourAndMinutes) {
  // Verifica se o timestamp é uma string e tenta convertê-lo para número
  if (typeof timestamp === "string") {
    timestamp = parseInt(timestamp, 10);
  }

  // Verifica se o timestamp é um número válido
  if (isNaN(timestamp)) {
    return "Data inválida";
  }

  // Verifica se o timestamp está em segundos e não em milissegundos
  if (timestamp < 1000000000000) {
    timestamp *= 1000; // Converte para milissegundos
  }

  const date = new Date(timestamp);

  // Verifica se a data é válida
  if (isNaN(date.getTime())) {
    return "Data inválida";
  }

  const day = date.getDate();
  const month = date.toLocaleString("pt-BR", { month: "long" });
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (isHourAndMinutes) {
    return `${hours}:${minutes}`;
  }

  return `${day} de ${month} às ${hours}:${minutes}`;
}

function MainShowcase({ match }) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reseta a hora para comparar apenas as datas

  const matchDate = new Date(match.date);
  matchDate.setHours(0, 0, 0, 0);

  let beforeText = "";
  let afterText = "";
  let dateText = "";

  if (matchDate.getTime() === today.getTime()) {
    beforeText = "Hoje tem jogo";
    afterText = " às ";
    dateText = formatDate(match.date, true);
  } else if (formatDate(matchDate.getTime()) > formatDate(today.getTime())) {
    beforeText = "O próximo evento na Arena MRV é ";
    afterText = " no dia ";
    dateText = formatDate(match.date, false);
  } else {
    beforeText = "O jogo foi";
    afterText = " no dia ";
    dateText = formatDate(match.date, false);
  }

  return (
    <div className="w-full bg-stone-300 rounded-lg mx-auto h-full md:h-[100vh] p-4 md:p-20">
      <div className="flex flex-col text-center justify-center p-4 md:p-10 max-w-2xl mx-auto ">
        <div className="text-stone-700 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl font-inconsolata leading-relaxed text-center">
          <p className="">{beforeText}</p>
          <p className="font-bold mt-4">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </p>
          <div className="flex justify-center items-center my-10">
            <img
              src={match.homeTeam.logoUrl}
              alt={match.homeTeam.name}
              className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 inline-block"
            />{" "}
            VS
            <img
              src={match.awayTeam.logoUrl}
              alt={match.awayTeam.name}
              className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 inline-block"
            />
          </div>
          {afterText}
          <span className="font-bold">{dateText}</span> pelo{" "}
          <span className="font-bold"> {match.championship}</span>
        </div>
        <p className="mt-4 md:mt-10 text-sm sm:text-base md:text-lg lg:text-xl text-stone-700 font-inconsolata leading-normal">
          <a
            href={match.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-gray-700 cursor-pointer"
          >
            mais detalhes {"->"}
          </a>
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <WhatsappAction />
      </div>
    </div>
  );
}

export default MainShowcase;
