import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

import Mutton from "../assets/images/service-images/mutton-biriyani.webp";
import Dsash from "../assets/images/home-images/dash.png";

import ServiceCompo from "../components/service-component/service-compo";

import ImageOne from "../assets/images/service-images/wed-png-ruchi-1.png";
import ImageTwo from "../assets/images/service-images/corpratv-png-ruchi-1.png";
import ImageThree from "../assets/images/service-images/convo-png-ruchi.png";
import ImageFour from "../assets/images/service-images/BD.png";
import ImageFive from "../assets/images/service-images/festi-2.png";
import ImageSix from "../assets/images/service-images/associa.png";
const Service = () => {
  return (
    <>
      <section>
        <div className="relative h-96 max-md:h-[500px]">
          <img
            className="object-cover w-full h-full"
            src={Mutton}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] font-cormantThiner font-medium italic font-Barlow text-white ">
              CATERING SERVICES
            </h2>
            <h2 className="text-[65px] font-semibold font-cormantThiner max-lg:text-[50px] text-white ">
              ABOUT ANANDTHAM CATERING
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>
            <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
              Hire us
            </button>
          </div>
        </div>
      </section>
      {/* ============================================== */}
      <section>
        <div className="px-16 max-sm:px-6">
          {" "}
          <h2 className="text-green-700  mt-10 text-[50px] font-cormantfive uppercase mb-5 tracking-normal ">
            About Anandtham Catering
          </h2>
          <p className="text-justify text-[20px] font-cormantThiner">
            Jaiganesh Catering Services has been a culinary cornerstone in
            Coimbatore since our inception in 1990. With over 25 years of
            dedicated service, we have earned a reputation as one of the best
            catering providers in Coimbatore. Our dedication to delivering the
            finest culinary experiences has led to our recognition as the “best
            catering in Coimbatore.”
            <br />
            <br />
            Over the past two and a half decades, Jaiganesh Catering Services
            has garnered extensive experience and expertise in the art of
            catering. Our journey has been filled with countless celebrations,
            weddings, corporate events, and special occasions, all of which have
            allowed us to refine our craft and set new standards in catering
            excellence.
          </p>
        </div>
      </section>
      {/* ============================================== */}
      <section>
        <div className="px-16 max-sm:px-6">
          {" "}
          <h2 className="text-green-700  mt-10 text-[50px] font-cormantfive uppercase mb-5 tracking-normal ">
            Why us?
          </h2>
          <p className="text-justify text-[20px] font-cormantThiner">
            At Jaiganesh Catering Services, we understand that choosing the
            right catering service for your special event is a decision that
            reflects your taste, style, and commitment to creating memorable
            moments. When it comes to catering in Coimbatore, we are proud to be
            your top choice for a multitude of reasons:
            <br />
            <br />
            Our dedication to the culinary arts is unmatched. With a legacy
            spanning over 25 years, of Services has perfected the art of
            creating exquisite dishes that tantalize the taste buds and leave a
            lasting impression. Our team of experienced chefs takes pride in
            crafting diverse menus that blend traditional flavors with modern
            innovation.
            <br />
            <br />
            Our services is not just a part of our job; it’s our passion. Our
            professional and courteous staff ensures that your event runs
            seamlessly. We go the extra mile to provide attentive, efficient,
            and friendly service, leaving you and your guests with nothing to
            worry about except enjoying the moment.
            <br />
            <br />
            Your safety and health are our top priorities.Our Services adheres
            to the highest standards of hygiene and sanitation. We follow
            stringent protocols to maintain cleanliness and ensure the safety of
            our food and services, giving you peace of mind during your event.
          </p>
        </div>
      </section>
      {/* ============================================= */}
      <section>
        <h2 className="text-center   mt-10 text-[50px] font-cormantThiner text-green-700 uppercase tracking-normal ">
          Planning a Fabulous Event?{" "}
        </h2>
        <center>
          <img className="w-50" src={Dsash} alt="loading" />
        </center>
      </section>
      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 sm:grid-cols-2">
            <ServiceCompo
              img={ImageOne}
              heading="WEDDING"
              para="On one of the most important days of your life, we provide a full catering program."
            />

            <ServiceCompo
              img={ImageTwo}
              heading="CORPORATIVE
"
              para="You can order a corporate full time or part-time service for personnel/staff lunches"
            />

            <ServiceCompo
              img={ImageThree}
              heading="CONVOCATION
"
              para="We offer catering services to Professional students who need catering for special occasions"
            />

            <ServiceCompo
              img={ImageFour}
              heading="KITTY PARTIES
"
              para="A private dining room, or a penthouse catering is one of our many great services."
            />

            <ServiceCompo
              img={ImageFive}
              heading="FESTIVALS
"
              para="We are completely capable of serving for big, open, small, adults or kids festivals"
            />

            <ServiceCompo
              img={ImageSix}
              heading="ASSOCIATION
"
              para="Social events are highly important to our clients, and we guarantee perfect service"
            />
          </div>
        </div>
      </section>
      {/* ============================================= */}
      <section>
        <div className="flex max-lg:flex-col  px-16 max-md:px-6 bg-[#28282B] py-10">
          <div className="w-[50%]  max-md:text-center items-center max-lg:w-full max-md:mb-10">
            <h2 className="uppercase  text-[24px] text-green-700 italic">
              Contact Now
            </h2>
            <h2 className="mt-5 text-[30px] max-md:text-[30px] text-white font-semibold">
              For Any Inquiries Please Call
            </h2>
            <h2 className="mt-4 text-[25px]  text-green-700 ">
              +91 866 722 3919
            </h2>

            <div className="w-48 h-[2px] mt-5 max-lg:w-full bg-white rounded-full"></div>

            <div className="w-full mt-10 max-sm:px-10">
              <ul className="flex w-full gap-5 max-sm:justify-between">
                <li className="w-10 h-10 pt-[8px]  bg-green-700  rounded-full">
                  <center>
                    <BiLogoFacebook className="text-[25px] text-white" />
                  </center>
                </li>
                <li className="w-10 h-10 pt-[8px]  bg-green-700  text-white rounded-full">
                  <center>
                    <AiOutlineTwitter className="text-[25px]" />
                  </center>
                </li>
                <li className="w-10 h-10 pt-[8px] bg-green-700  text-white rounded-full">
                  <center>
                    <AiOutlineInstagram className="text-[25px]" />
                  </center>
                </li>
              </ul>
            </div>
          </div>
          {/* ============= */}
          <div className="p-5 w-[60%] max-lg:w-full max-lg:mt-10">
            <h2 className="text-center text-[25px] mb-5  text-green-700 italic ">
              Contact Form
            </h2>
            <form
              action="
                "
            >
              <input
                type="text"
                className=" w-[100%] py-2 pl-2"
                placeholder="Name"
              />
              <input
                type="text"
                className="mt-5 w-[100%] py-2 pl-2 mb-5"
                placeholder="Gmail.com"
              />
              <div>
                <h2 className="mb-2 mt-5 text-white font-RobatoCondesed text-[18px] tracking-wider">
                  Message
                </h2>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  placeholder="Message Here"
                  rows="5"
                  className="pt-3 pl-3 w-full border-[1px] border-gray-600 "
                ></textarea>
                <button className="w-auto px-5 py-1 mt-5 font-medium text-white uppercase bg-green-700  font-Barlow">
                  Submite
                </button>
              </div>{" "}
            </form>
          </div>
          <div></div>
        </div>
      </section>
      {/* ============================================= */}
    </>
  );
};

export default Service;
