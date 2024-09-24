/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/framer-motion/dist/framer-motion.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "monospace"],
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(45deg, #FF8E3C, #FF4E50)",
      },
    },
  },
  plugins: [],
};
