import React, { useEffect } from "react";
import Button from "./Button";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";

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
  console.log(date);
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

const handleWhatsAppClick = () => {
  const phoneNumber = "5531999999999"; // Substitua pelo número desejado
  const message = encodeURIComponent(
    "Olá! Gostaria de receber notificações sobre jogos e eventos."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
};

const calendarIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M17 12h-5v5h5v-5zM16 2H8C6.9 2 6 2.9 6 4v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H8V4h8v16z" />
  </svg>
);

const whatsappIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function MainShowcase({ match }) {
  const { scrollYProgress } = useScroll();

  const handleCalendarClick = () => {
    // Convertendo o timestamp para um objeto Date
    const matchDate = new Date(match.date);

    // Verificando se a data é válida
    if (isNaN(matchDate.getTime())) {
      console.error("Data inválida:", match.date);
      return;
    }

    // Definindo o horário para meio-dia para evitar problemas de fuso horário
    matchDate.setHours(12, 0, 0, 0);

    const event = {
      title: `${match.homeTeam.name} vs ${match.awayTeam.name} - ${match.championship}`,
      start: matchDate.toISOString(),
      end: new Date(matchDate.getTime() + 2 * 60 * 60 * 1000).toISOString(), // Assumindo 2 horas de duração
      location: "Arena MRV",
      description: "Jogo da competição de futebol.",
    };

    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${event.start}/${event.end}&location=${encodeURIComponent(
      event.location
    )}&details=${encodeURIComponent(event.description)}`;
    window.open(calendarUrl, "_blank");
  };
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
    <motion.div className="w-full bg-stone-300 rounded-lg mx-auto h-full md:h-[100vh] sm:h-[100vh] p-4 md:p-20">
      <motion.div className="flex flex-col text-center justify-center p-4 md:p-10 max-w-2xl mx-auto">
        <div className="text-stone-700 text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-4xl font-inconsolata leading-relaxed text-center">
          <p className="">{beforeText}</p>
          <p className="font-bold mt-4">
            {match.homeTeam.name} vs {match.awayTeam.name}
          </p>
          <motion.div className="flex justify-center items-center my-10">
            <motion.img
              src={match.homeTeam.logoUrl}
              alt={match.homeTeam.name}
              className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 inline-block"
              whileHover={{ scale: 1.1 }}
            />{" "}
            VS
            <motion.img
              src={match.awayTeam.logoUrl}
              alt={match.awayTeam.name}
              className="w-32 h-32 sm:w-32 sm:h-32 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 inline-block"
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
          <motion.span
            className="font-bold inline-block p-2"
            initial={{
              WebkitMaskImage:
                "linear-gradient(to right, #fde68a 50%, transparent 50%)",
              WebkitMaskSize: "200% 100%",
              WebkitMaskPosition: "0% 0%",
            }}
            animate={{
              WebkitMaskPosition: ["100% 100%", "0% 0%"],
            }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            {" "}
            {afterText}
            <motion.span
              className="font-bold inline-block p-2"
              initial={{
                WebkitMaskImage:
                  "linear-gradient(to right, #fde68a 50%, transparent 50%)",
                WebkitMaskSize: "200% 100%",
                WebkitMaskPosition: "0% 0%",
              }}
              animate={{
                WebkitMaskPosition: ["100% 100%", "0% 0%"],
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            >
              {dateText}
            </motion.span>
            <motion.span
              className="font-bold inline-block p-2"
              initial={{
                WebkitMaskImage:
                  "linear-gradient(to right, #fde68a 50%, transparent 50%)",
                WebkitMaskSize: "200% 100%",
                WebkitMaskPosition: "0% 0%",
              }}
              animate={{
                WebkitMaskPosition: ["100% 100%", "0% 0%"],
              }}
              transition={{ delay: 2.5, duration: 2.5, ease: "easeInOut" }}
            >
              pelo {match.championship}
            </motion.span>
          </motion.span>{" "}
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
      </motion.div>
      <motion.div className="mt-8 flex justify-center">
        <Button
          text="Receba notificações de eventos na arena!"
          icon={whatsappIcon}
          onClick={handleWhatsAppClick}
        />
      </motion.div>
      <motion.div className="mt-8 flex justify-center">
        <Button
          text="Adicione o próximo evento ao seu calendário"
          icon={calendarIcon}
          onClick={handleCalendarClick}
        />
      </motion.div>
    </motion.div>
  );
}

export default MainShowcase;
