import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

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
      className="fixed bottom-0 z-50 left-0 right-0 bg-yellow-300 p-4 shadow-lg flex justify-between items-center"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="text-black text-justify font-inconsolata text-sm m-2 p-4">
        Este site utiliza cookies para melhorar a experiência do usuário.
      </div>
      <Button text="Aceitar" onClick={handleAccept} className="m-10" />
    </motion.div>
  );
};

export default CookieConsent;
