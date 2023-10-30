import React from "react";
import Menu from "../assets/images/menu-image/menu-images.jpg";
import Menus from "../components/menus-component/menu-compo/menu-compo";
const menu = () => {
  return (
    <>
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
          We are proud to offer a catering service that features a wide range of
          food menus. Whether you’re planning a small, intimate gathering or a
          large event, we have the perfect menu for you. Our chefs are experts
          in preparing delicious dishes that will satisfy all tastes.
          <br />
          <br />
          No matter what type of event you’re hosting, we have the perfect menu
          for you. From breakfast and lunch menus to dinner menus and dessert
          buffets, we have something for everyone. We also offer specialty menus
          for themed events.
          <br />
          <br />
          Our catering service is reliable and affordable, and our staff is
          dedicated to ensuring that your event is a success. We will work with
          you to create a custom menu that meets your needs and budget. Contact
          Asparagus Catering Unit today to learn more about our catering
          services.
        </p>
     
      </section>
      {/* ====================================== */}
      <section>
        <Menus />
      </section>
      {/* ===================================== */}
      <section>
        <div></div>
      </section>
    </>
  );
};

export default menu;
