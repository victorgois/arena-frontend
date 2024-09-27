import React from "react";
import { motion } from "framer-motion";
const Button = ({ text, icon, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="h-16"
    >
      <motion.button
        onClick={onClick}
        className="relative overflow-hidden z-1 font-bold py-3 px-4 rounded-lg text-white flex flex-row justify-center items-center"
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
          className="absolute inset-0 z-10"
          initial={{ background: "black" }}
          transition={{ duration: 0.3 }}
        />
        <span className="relative z-10 mr-2">{text}</span>
        <span className="relative z-10 ">{icon}</span>
      </motion.button>
      <motion.div className="relative z-0 h-12 inset-x-0 -left-2 -top-10 py-3 px-4 rounded-lg bg-gradient-to-r from-yellow-500 to-red-500"></motion.div>
    </motion.div>
  );
};

export default Button;
