import React from "react";
import {ImWhatsapp} from "react-icons/im";
const WatsApp = () => {
  return (
    <>
    
      <a
        href="https://api.whatsapp.com/send?phone=+919943106789&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        class="float"
        target="blank"
      >
        <ImWhatsapp className="my-float"/>
  
      </a>
    </>
  );
};

export default WatsApp;
