import React from "react";
import { motion } from "framer-motion";
const Button = ({ text, icon, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className="relative overflow-hidden font-bold py-3 px-6 rounded-lg text-white"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.div
        className="absolute z-1 inset-y-1/2 border-black"
        initial={{ background: "linear-gradient(45deg, #FF8E3C, #FF4E50)" }}
        whileHover={{
          background: "linear-gradient(45deg, #FF4E50, #FF8E3C)",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 z-0 border-yellow-500"
        initial={{ background: "black" }}
        whileHover={{
          background: "linear-gradient(45deg, #FF4E50, #FF8E3C)",
        }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default Button;
