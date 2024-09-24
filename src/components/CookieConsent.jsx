import React, { useState } from "react";
import { motion } from "framer-motion";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
    // Save consent to local storage or handle it as needed
    localStorage.setItem("cookieConsent", "true");
  };

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-yellow-300 p-4 shadow-lg flex justify-between items-center"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="text-black font-inconsolata text-sm">
        Este site utiliza cookies para melhorar a experiência do usuário.
      </div>
      <button
        onClick={handleAccept}
        className="bg-black text-white font-bold py-2 px-4 rounded-full ml-4"
      >
        Aceitar
      </button>
    </motion.div>
  );
};

export default CookieConsent;
