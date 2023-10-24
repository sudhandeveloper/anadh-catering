import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import AnanthamLogo from "../../assets/images/home-images/anandtham-bg-black.png";
import { FaLocationDot } from "react-icons/fa6";
// import Footerbg from "../../assets/images/home/footerbg.webp";
// bg-[#00677f]
const Footer = () => {
  return (
    <>
      <section>
        <div className="relative w-full h-full ">
          <div>
            <section className="pt-10  bg-black">
              <div className="px-10 pb-10 max-sm:pb-3">
                <div className="flex justify-evenly  gap-5 mt-5 max-sm:gap-5">
                  <div className="w-[20%]  h-auto max-md:w-full">
                    <center>
                      {" "}
                      <img
                        className="object-contain "
                        src={AnanthamLogo}
                        alt="loading"
                      />
                    </center>

                    {/* <p className="mt-5 text-justify text-white font-Barlow">
                      The Royal Interior give most important for satisfying our
                      client needs they are what need to think us
                    </p> */}
                  </div>

                  <div className="w-[22%]  mt-5">
                    <div className="">
                      <h2 className="text-[23px]  font-MontserratMedium text-white">
                        ANANDHAM CATERING
                      </h2>
                      <p className="text-gray-300 font-Heeb w-[100%] text-justify mt-5 ">
                        A legacy of vegetarian food catering services that
                        brings to you traditional and modern cuisines,under the
                        rich expertise of master cooks, to make your every event
                        memorable. We cater to personal and corporate events of
                        all sizes.
                      </p>
                      {/* <ul className="mt-2 font-medium text-white font-Barlow">
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span className="">About us </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>Services </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>Portfolio </span>
                        </li>
                        <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>Contact Us </span>
                        </li>
                      </ul> */}
                    </div>
                  </div>

                  <div className="w-[15%]  mt-5">
                    <div>
                      <h2 className="text-[23px] font-MontserratMedium  text-white">
                        QUICK LINK
                      </h2>

                      <ul className="mt-2 font-medium pb-2 text-white font-Heeb">
                        <li className="flex pb-2">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span className=""> HOME</span>
                        </li>
                        <li className="flex pb-2">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span> ABOUT </span>
                        </li>
                        <li className="flex pb-2">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>SERVICES </span>
                        </li>
                        <li className="flex pb-2">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>MENU</span>
                        </li>
                        <li className="flex pb-2">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>FIXED MENU</span>
                        </li>
                        <li className="flex pb-2">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>CONTACT</span>
                        </li>
                        {/* <li className="flex ">
                          <AiOutlineDoubleRight className="mt-1 mr-4 text-green-400" />
                          <span>Privacy policy </span>
                        </li> */}
                      </ul>
                    </div>
                  </div>

                  

                  <div className="w-[25%] max-md:w-full ">
                    <div>
                      <h2 className="text-[23px] mt-5 font-MontserratMedium uppercase  text-white">
                        Contact Us
                      </h2>

                      <ul className="mt-2 font-medium text-white font-Heeb">
                        <li className="flex pb-2">
                          <BsFillTelephoneForwardFill className="mt-1 mr-4 text-green-400" />
                          <span className=""> +91 98418 33554</span>
                        </li>
                        <li className="flex pb-2">
                          <BiLogoGmail className="mt-1 mr-4 text-green-400" />
                          <span>sales@perilinteriors.com </span>
                        </li>
                        <li className="flex pb-2">
                          <FaLocationDot className="mt-1 text-[25px] mr-4 text-green-400" />
                          <span className="text-justify">
                            Medavakkam Branch: No 1/12, Jalladianpet, Ricemill
                            Road, Medavakkam, Chennai - 600100.{" "}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="flex justify-between tracking-wider px-10 py-2 text-white bg-green-600 font-Barlow">
          <p>Design and Developed by Honey Iconics</p>
          <p className="text-end">
            Copyright © Anandtham Catering All rights reserved
          </p>
        </div>
      </section>
      {/* ========================== */}
    </>
  );
};

export default Footer;
