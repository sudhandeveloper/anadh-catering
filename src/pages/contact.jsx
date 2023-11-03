import React from "react";
import { Helmet } from "react-helmet";

import Contacts from "../assets/images/contact-image/Contact-image.jpg";
import { BsArrowRight } from "react-icons/bs";
import Forms from "../components/email";
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Get in touch with Coimbatore's Top Catering Partner, AnanDtham Catering
          Services.
        </title>
        <meta
          name="description"
          content="Get in touch with Anantham Catering Services for all your catering needs in Coimbatore. Our experienced team is here to assist you with exceptional culinary solutions for your events.

          "
        />
        <link
          rel="canonical"
          href="https://bestcaterersincoimbatore.com/contact"
        />{" "}
      </Helmet>
      
      <section>
        <section>
          <div className="relative h-[430px] max-md:h-[500px] w-full">
            <img
              className="object-cover w-full h-full"
              src={Contacts}
              alt="loading"
            />

            <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

            <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
              <h2 className="text-[38px] font-medium italic font-cormantThiner text-white ">
                CATERING SERVICES
              </h2>
              <h2 className="text-[65px] max-sm:text-[45px] font-semibold font-cormantThiner text-white ">
                ANANDTHAM CATERING
              </h2>
              <div className="w-20 h-[1px] bg-red-600"></div>
              <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
                Hire us
              </button>
            </div>
          </div>
        </section>
        {/* =================== achivements ========================== */}
        <section>
          <div className="flex gap-5 px-16 py-20  bg-gray-100 max-sm:px-6 max-lg:flex-col">
            <div className="w-[40%] max-lg:w-full">
              <ul className="flex">
                <li className="pt-3 pr-3">
                  <div className="h-[2px] w-[70px] bg-green-700"></div>
                </li>
                <li>
                  <h2 className=" font-cormantThiner">
                    ENHANCE YOU LIVING EXPERIENCE
                  </h2>
                </li>
              </ul>

              <h2 className="text-[42px] font-cormantThiner  ">
                Our Achievements
              </h2>
              <p className="mt-5 text-justify text-black  text-[18px] font-cormantThiner">
              We are proud recipients of the "Culinary Excellence Award" in
              recognition of our dedication to crafting exceptional dishes and
              creating unforgettable dining experiences for our clients. Our
              consistent positive feedback and client testimonials have earned
              us the "Client Choice Award" for delivering top-notch catering
              services that exceed expectations.
              </p>
              <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-green-700 max-sm:w-[50%] mt-10 flex justify-evenly">
                <div className="text-white uppercase font-cormantThiner">
                  <h2 className="mt-1">Contact Us </h2>
                </div>
                <BsArrowRight className="font-bold text-[35px] text-white " />
              </div>
            </div>

            <div className="w-[60%] pt-24 max-lg:w-full rounded-xl  ">
              <ul className="flex justify-evenly ">
                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>3,726</span>{" "}
                      <span className="text-green-700 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-green-700">
                      Finished Projects
                    </h2>
                  </div>
                </li>

                <li className="pt-10 max-sm:hidden">
                  <div className="h-[30px] w-[2px] bg-gray-400"></div>
                </li>

                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>69</span>{" "}
                      <span className="text-green-700 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-green-700">
                      On Going Projects
                    </h2>
                  </div>
                </li>

                <li className="pt-10 max-sm:hidden">
                  <div className="h-[30px] w-[2px]  bg-gray-400"></div>
                </li>

                <li>
                  <div>
                    <h2 className="text-[50px] max-sm:text-[30px] font-semibold flex">
                      <span>150</span>{" "}
                      <span className="text-green-700 text-[25px] ml-3">+</span>{" "}
                    </h2>
                    <h2 className="font-semibold text-green-700">Awards</h2>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* =============== Contact-us =================== */}
        <Forms />
      </section>
    </>
  );
};

export default Contact;
