import React from "react";
import images from "../assets/images/home-images/corporate-events-catering.jpg";

import ImageOne from "../assets/images/service-images/convo-png-ruchi.png";
import ImageTwo from "../assets/images/service-images/corpratv-png-ruchi-1.png";
import ImageThree from "../assets/images/service-images/convo-png-ruchi.png";
const Service = () => {
  return <> <section>
  <div className="relative h-96 max-md:h-[500px]">
    <img
      className="object-cover w-full h-full"
      src={""}
      alt="loading"
    />

    <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

    <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
      <h2 className="text-[38px] font-medium italic font-Barlow text-white ">
        CATERING SERVICES
      </h2>
      <h2 className="text-[65px] font-semibold font-Barlow max-lg:text-[50px] text-white ">
        ABOUT ANANDTHAM CATERING
      </h2>
      <div className="w-20 h-[1px] bg-red-600"></div>
      <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
        Hire us
      </button>
    </div>
  </div>
</section></>;
};

export default Service;
