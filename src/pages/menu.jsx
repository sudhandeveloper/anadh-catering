import React from "react";
import { Helmet } from "react-helmet";
import Menu from "../assets/images/menu-image/menu-images.jpg";
import Menus from "../components/menus-component/menu-compo/menu-compo";
const menu = () => {
  return (
    <>
      {" "}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          See Our Yummy Menus at Anantham Catering Services in Coimbatore
        </title>
        <meta
          name="description"
          content="Discover a world of culinary delights with Anantham Catering Services' diverse and customizable menus. From traditional South Indian flavors to global fusion dishes, our menus are designed to elevate your dining experience."
        />
        <link
          rel="canonical"
          href="https://bestcaterersincoimbatore.com/menu"
        />
      </Helmet>
      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={Menu}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] font-cormantThiner font-medium italic font-Barlow text-white ">
              CATERING SERVICES
            </h2>
            <h2 className="text-[65px] font-semibold font-cormantThiner max-lg:text-[50px] text-white ">
              MENUS OF ANANDTHAM CATERING
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>
            <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
              Hire us
            </button>
          </div>
        </div>
      </section>
      {/* ====================================== */}
      <section>
        <h2 className="text-center mt-20 text-[30px] font-cormantThiner text-green-700">
          DELICIOUS MENUS OF ANANDTHAM CATERING
        </h2>
        <center>
          <div className="mt-5 mb-10 h-[2px] bg-green-700 w-96"></div>
        </center>
        <p className="px-16 max-md:px-6 mb-20 font-cormantThiner text-center text-[22px] mt-5">
          Our menus feature a diverse range of culinary delights, from
          traditional North Indian cuisine to South fusion dishes, ensuring
          there's something for everyone. Each menu is fully customizable,
          allowing you to curate the perfect selection of dishes that align with
          your event's theme, dietary preferences, and cultural requirements.
          <br />
          <br />
          Our menus embrace the changing seasons, using fresh, locally sourced
          ingredients to create dishes that mirror the time of year, infusing a
          variety of flavors into your dining experience
          <br />
          <br />
          We can provide themed menus that align with the nature of your event,
          adding a special touch to your celebration or gathering. Our
          experienced team ensures that your event runs seamlessly, from menu
          planning to on-site cooking, setup, service, and clean-up
        </p>
      </section>
      {/* ====================================== */}
      <section>
        <Menus />
      </section>
    </>
  );
};

export default menu;
