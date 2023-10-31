import React from "react";
import AboutUsBanner from "../assets/images/about-us-images/about-us-image.jpg";
import Chef from "../assets/images/about-us-images/chef.png";
import Aboutusimage from "../assets/images/about-us-images/aboutus-menu.png";
import ImageTwo from "../assets/images/about-us-images/our-special.png";
import Healthy from "../assets/images/about-us-images/pasta.jpeg";
const Abouts = () => {
  return (
    <>
      <section>
        <section>
          <div className="relative h-96 max-md:h-[500px]">
            <img
              className="object-cover w-full h-full"
              src={AboutUsBanner}
              alt="loading"
            />

            <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

            <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
              <h2 className="text-[38px] font-medium italic font-cormantThiner text-white ">
                CATERING SERVICES
              </h2>
              <h2 className="text-[60px] font-medium font-cormantThiner max-lg:text-[50px] text-white ">
                ABOUT ANANDTHAM CATERING
              </h2>
              <div className="w-20 h-[1px] bg-red-600"></div>
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
                Hire us
              </button>
            </div>
          </div>
        </section>
        {/* =============== about us ============================== */}
        <section>
          <div className="flex h-auto px-20 max-lg:px-6 max-lg:flex-col AboutusBgImage">
            <div className="h-auto max-lg:w-[100%]  w-[50%] mt-5 ">
              <center>
                {" "}
                <img
                  className="object-cover mt-20 h-96 max-md:w-full max-md:object-contain"
                  src={Aboutusimage}
                  alt="loading"
                />{" "}
              </center>
            </div>
            <div className="w-[50%]  max-lg:w-[100%] max-md:pt-0 pt-32">
              <center>
                <h2 className="text-[40px] font-GreatVibes text-[#c69204]">
                  Harvest Caterers
                </h2>
                <h2 className="text-[20px]">
                  THE EXCELLENCE SINCE IT IS 25 YEARS
                </h2>
                <div className="w-full mt-5 border-t-2 border-b-2">
                  <p className="my-10 font-cormantThiner text-[20px]">
                    "Harvest has catered to the personal expressions of clients
                    with excellence and flair for 25 years. Hard work and
                    dedication contributes to the success of Harvest."
                  </p>
                </div>
              </center>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        <section>
          <div className="relative max-md:h-[630px] h-[550px] max-sm:h-[600px] mt-10 mb-10">
            <img
              className="object-cover w-full h-full"
              src={Healthy}
              alt="loading"
            />

            <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

            <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-2">
              <h2 className="text-[65px] text-center max-sm:text-[40px] font-semibold font-GreatVibes tracking-widest text-[#c69204]">
                Customizable Menu
              </h2>
              <p className="mt-5 text-white text-center  font-cormantThiner tracking-wider text-[25px] max-md:text-[20px]">
                WE STRIVE TO DELIVER HIGH CLASS SERVICE AND CREATIVITY ON EVERY
                LEVEL WITH CONSISTENT PROFESSIONALISM. FROM HIGH QUALITY FOOD TO
                UNIQUE CONCEPTS, OUR GOAL IS TO COMPLEMENT AND EXCEED THE VISION
                OF OUR CLIENTS.
              </p>

              <center>
                {" "}
                <div className="w-20 h-[1px] bg-red-600 mt-10"></div>{" "}
                <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
                  Hire us
                </button>{" "}
              </center>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        <section>
          <div className="flex h-auto px-20 max-lg:px-6 max-lg:flex-col ">
            <div className="h-auto max-lg:w-[100%]  w-[50%]  pt-10">
              <center>
                {" "}
                <img
                  className="object-cover mt-20 h-96 max-md:w-full max-md:object-contain"
                  src={ImageTwo}
                  alt="loading"
                />{" "}
              </center>
            </div>
            <div className="w-[50%]  max-lg:w-[100%] max-md:pt-0 pt-32">
              <center>
                <h2 className="text-[40px] font-GreatVibes text-[#c69204]">
                  What we do
                </h2>
                <h2 className="text-[20px]">ALWAYS FRESH INGREDIENTS</h2>
                <div className="w-full h-auto mt-5 border-t-2 border-b-2">
                  <p className="my-10 font-cormantThiner text-[18px]">
                    Harvest explore all avenues of catering services to serve
                    our guests. With devoted professionals, we organize all
                    types of functions including weddings, anniversaries,
                    corporate events, get together, birthday parties,
                    celebration of life services and any other types of small
                    and grand events.
                    <br />
                    <br />
                    Harvest specialises in high class catering services in
                    Kerala state. Memories are created in breaking bread with
                    others. We create formal and informal meal plans, complete
                    with the decorations, cutlery, crockery and other items to
                    make it experience flow easily.
                  </p>
                </div>
              </center>
            </div>
          </div>
        </section>
        {/* ================================================== */}
        <section>
          <div className="flex px-10 max-lg:mx-5 max-md:flex-col mx-28 bg-[#f2ece0] mt-10 mb-10 rounded-xl">
            <div>
              <img src={Chef} alt="loading" />
            </div>
            <div>
              <div className="mt-20 ">
                <h2 className=" text-[30px] font-cormantThiner">
                  Discuss Your Needs With Us
                </h2>
                <div className="w-96 h-[2px] max-lg:w-auto bg-[#f39a12]  mb-2"></div>
                <p className="font-cormantThiner text-[20px] mt-5 max-md:pb-10">
                  Looking for a catering service that understands your unique
                  needs? Look no further than Discuss Your Needs With Us. We
                  tailor our services to you
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Abouts;
