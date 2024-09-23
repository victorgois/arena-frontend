import React from "react";

const WhatsappAction = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5531999999999"; // Substitua pelo número desejado
    const message = encodeURIComponent(
      "Olá! Gostaria de receber notificações sobre jogos e eventos."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="relative bg-black p-4  rounded-lg inline-block overflow-hidden">
      <button
        onClick={handleWhatsAppClick}
        className="relative z-10 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl flex items-center"
      >
        <span className="mr-2 w-40 sm:w-60 md:w-80 lg:w-96 xl:w-112 sm:inline">
          Receba notificações de eventos na arena!
        </span>
      </button>
    </div>
  );
};

export default WhatsappAction;
