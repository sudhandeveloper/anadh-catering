import React from "react";
import Mainimageone from "../assets/images/Gallary-images/Main-Gallary-images/chikenbiriyani.jpg";
import MainimageTwo from "../assets/images/Gallary-images/Main-Gallary-images/mutton-biriyani.jpg";
import MainimageThree from "../assets/images/Gallary-images/Main-Gallary-images/Prawn-biriyani.jpg";
import MainimageFour from "../assets/images/Gallary-images/Main-Gallary-images/fish-biriyani.jpg";
import MainimageFive from "../assets/images/Gallary-images/Main-Gallary-images/Dosai.jpg";
import MainimageSix from "../assets/images/Gallary-images/Main-Gallary-images/virunthu soru.webp";
import MainimageSeven from "../assets/images/Gallary-images/Main-Gallary-images/veg biriyani.webp";
import MainimageEight from "../assets/images/Gallary-images/Main-Gallary-images/chikengrvey.webp";
import MainimageNine from "../assets/images/Gallary-images/Main-Gallary-images/mutton-grvey.webp";
import MainimageTen from "../assets/images/Gallary-images/Main-Gallary-images/easy-fish-gravy.png";
import Mainimageeleven from "../assets/images/Gallary-images/Main-Gallary-images/Shrimp-Masala-2-3.jpg";
import MainimagThreetin from "../assets/images/Gallary-images/Main-Gallary-images/tattu-idly.jpg";
import MainimagFourteen from "../assets/images/Gallary-images/Main-Gallary-images/idly.webp";
import MainimagTwele from "../assets/images/Gallary-images/Main-Gallary-images/fish-fry.jpg";
import Mainimagsisteen from "../assets/images/Gallary-images/Main-Gallary-images/leg.jpg";
import MainimagSeventeen from "../assets/images/Gallary-images/Main-Gallary-images/prwan65.jpeg";
import MainimagEithen from "../assets/images/Gallary-images/Main-Gallary-images/goli-soda.png";
import Mainimagnineteen from "../assets/images/Gallary-images/Main-Gallary-images/beeda.jpg";

const Gallary = () => {
  return (
    <>
      <section>
        <div className="w-full relative h-[50%] banner-image ">
          <div className="absolute top-0 w-full h-full bg-black -z-0 opacity-40"></div>
          <div className="absolute top-0 w-full h-full pt-28">
            <center>
              <div class="styled px-16 max-sm:px-5">
                <fieldset>
                  <legend className="">Gallary</legend>
                  <div>
                    <h2 className="text-white text-[50px] font-bold">
                      DELICIOUS MEMORIES
                    </h2>
                    <p className="text-white font-cormantThiner px-8 text-[18px] mt-5 uppercase font-extrabold pb-16">
                      Cater-Inc strives to produce innovative culinary art,
                      creating memorable experiences through inspired cuisine
                      and impeccable service.
                    </p>
                  </div>
                </fieldset>
              </div>
            </center>
          </div>
        </div>
      </section>
      {/* ========================== */}

      <div className="text-center mt-10 text-[30px] font-cormantThiner uppercase  font-extrabold">
        Indulge Your Senses Dive into Our Culinary Showcase
      </div>
      <center>
        <div className="bg-green-700 w-96 h-[2px] mt-5"></div>
      </center>
      {/* ========================== */}
      <section className="py-6 dark:bg-gray-800">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 sm:grid-cols-2">
            <img
              className="h-96 w-full object-cover"
              src={Mainimageone}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageTwo}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageThree}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageFour}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageSeven}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageFive}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageSix}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageEight}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageNine}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimageTen}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={Mainimageeleven}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimagThreetin}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimagFourteen}
              alt="loading"
            />

            <img
              className="h-96 w-full object-cover"
              src={MainimagTwele}
              alt="loading"
            />

     
            <img
              className="h-96 w-full object-cover"
              src={Mainimagsisteen}
              alt="loading"
            />

<img
              className="h-96 w-full object-cover"
              src={MainimagSeventeen}
              alt="loading"
            />

<img
              className="h-96 w-full object-cover"
              src={MainimagEithen}
              alt="loading"
            />

            
<img
              className="h-96 w-full object-cover"
              src={Mainimagnineteen}
              alt="loading"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallary;
