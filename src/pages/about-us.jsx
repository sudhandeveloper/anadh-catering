import React from "react";
import { Helmet } from "react-helmet";

import AboutUsBanner from "../assets/images/about-us-images/about-us-image.jpg";
import Chef from "../assets/images/about-us-images/chef.png";
import Aboutusimage from "../assets/images/about-us-images/aboutus-menu.png";
import ImageTwo from "../assets/images/about-us-images/our-special.png";
import Healthy from "../assets/images/about-us-images/pasta.jpeg";
import { Link } from "react-router-dom";
const Abouts = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Anantham Catering Services is the Best Caterers in Coimbatore
        </title>
        <meta
          name="description"
          content="Discover the story of Anantham Catering Services, founded by Senthilkumar in 2010. We take pride in being among the best caterers in Coimbatore, dedicated to culinary excellence."
        />
        <link
          rel="canonical"
          href="https://bestcaterersincoimbatore.com/about-us"
        />
      </Helmet>
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
              <Link to={"/Contact"}>
                <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
                  Hire us
                </button>{" "}
              </Link>
            </div>
          </div>
        </section>
        {/* =============== about us ============================== */}
        <section>
          <div className="flex h-auto px-20 max-lg:px-6 max-lg:flex-col AboutusBgImage">
            <div className="h-auto max-lg:w-[100%]  w-[50%] mt-5 ">
              <center>
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
                  Anantham Caterers
                </h2>
                <h2 className="text-[20px]">
                  THE EXCELLENCE SINCE IT IS 20+ YEARS
                </h2>
                <div className="w-full mt-5 border-t-2 border-b-2">
                  <p className="my-10 font-cormantThiner text-[20px]">
                    Since our inception in 2010, we have consistently strived to
                    exceed the expectations of our clients. Over the past
                    decade, we have established ourselves as one of the best
                    caterers in Coimbatore, known for our diverse menu options,
                    innovative flair, and an unyielding commitment to service
                    excellence.
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
                <div className="w-20 h-[1px] bg-red-600 mt-10"></div>{" "}
                <Link to={"/Contact"}><button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
                  Hire us
                </button> </Link>
                {" "}
              </center>
            </div>
          </div>
        </section>
        {/* ============================================= */}
        <section>
          <div className="flex h-auto px-20 max-lg:px-6 max-lg:flex-col ">
            <div className="h-auto max-lg:w-[100%]  w-[50%]  pt-10">
              <center>
                <img
                  className="object-cover mt-40 max-lg:mt-5 h-96 max-md:w-full max-md:object-contain"
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
                <h2 className="text-[20px]">Diverse Event Expertise</h2>
                <div className="w-full h-auto mt-5 border-t-2 border-b-2">
                  <p className="my-10 font-cormantThiner text-[18px]">
                    Our journey in the catering industry has been marked by
                    successful collaborations with clients across a wide
                    spectrum of events, including weddings, corporate
                    gatherings, family celebrations, and more. Our versatility,
                    adaptability, and innovative approach have contributed to
                    our status as the best caterers in Coimbatore.
                    <br />
                    <br />
                    Our team of trained waiters plays a pivotal role in ensuring
                    that your event unfolds seamlessly. They are attentive,
                    professional, and dedicated to making your event stress-free
                    and enjoyable. Our commitment to using fresh, locally
                    sourced ingredients ensures that every dish reflects the
                    beauty of nature and offers superior taste and nutritional
                    value. What We Do is not just about catering; it's about
                    creating memorable moments, capturing the essence of your
                    event, and celebrating the love of delicious food.
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
                  We believe in offering personalized service that starts with
                  understanding your needs. Your event is an opportunity to
                  bring your culinary vision to life, and we're here to make it
                  a reality.
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
