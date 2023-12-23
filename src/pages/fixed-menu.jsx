import React from "react";
import { Helmet } from "react-helmet";
import Banner from "../assets/images/fixed-menu-image/fixed-menu.webp";
import FiexedMneu from "../components/menus-component/fixed-menu-compo/fixed-menu-compo";
import { Link } from "react-router-dom";
const Fixedmenu = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Discover Our Predetermined Menu Options at Anantham Catering Services
          in Coimbatore
        </title>
        <meta
          name="description"
          content="Discover Anantham Catering Services' curated fixed menu options, designed to simplify your catering choices. Explore a range of set menus for various occasions, from weddings to corporate events.

          "
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
            src={Banner}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] font-cormantThiner font-medium italic font-Barlow text-white ">
              CATERING SERVICES
            </h2>
            <h2 className="text-[55px] max-sm:text-[40px] font-semibold font-cormantThiner max-lg:text-[50px] text-white ">
              FIXED MENUS OF ANANDTHAM CATERING
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>
            <Link to={"/Contact"}>
            
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
                Hire us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================== */}
      <section>
        <h2 className="text-center mt-20 text-[30px] font-cormantThiner text-green-700">
          DELICIOUS FIXED MENUS OF ANANDTHAM CATERING
        </h2>
        <center>
          <div className="mt-5 mb-10 h-[2px] bg-green-700 w-96 max-sm:w-auto"></div>
        </center>
        <p className="px-16 max-md:px-6 mb-20 font-cormantThiner text-center text-[22px] mt-5">
          We make sure there is something for everyone on our menus by offering
          a wide variety of delectable options, from South Indian fusion dishes
          to classic North Indian cuisine. Because every menu is completely
          customizable, you can choose the ideal selection of dishes to fit the
          theme of your event, the dietary needs of your guests, and their
          cultural expectations.
          <br />
          <br />
          Our menus adapt to the changing seasons by incorporating a range of
          flavors into your dining experience through the use of seasonal,
          locally sourced, and fresh ingredients to create dishes that reflect
          the season.
          <br />
          <br />
          To add a unique touch to your celebration or get-together, we can
          create themed menus that correspond with the theme of your event. From
          menu planning to on-site
        </p>
      </section>
      {/* ====================================== */}
      <section>
        <FiexedMneu />
      </section>
    </>
  );
};

export default Fixedmenu;
