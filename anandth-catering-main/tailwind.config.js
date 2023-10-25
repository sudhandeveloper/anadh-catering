/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      Montserrat:["'Montserrat', sans-serif"],
      MontserratMedium:["'Montserrat', sans-serif"],
      Heeb:["'Heebo', sans-serif"],
      GreatVibes:["'Great Vibes', cursive"] 
    },
  },
};
export const plugins = [];