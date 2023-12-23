import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import AnanthamLogo from "../../assets/images/home-images/anandtham-bg-black.png";
import { FaLocationDot } from "react-icons/fa6";

import Upupup from "../move-to-top-btn";
import { Link } from "react-router-dom";
import Whatsapp from "../../components/watsapp-btn";

import { BiLogoFacebook } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";
import { AiOutlineInstagram } from "react-icons/ai";
// import Footerbg from "../../assets/images/home/footerbg.webp";
// bg-[#00677f]
const Footer = () => {
  return (
    <>
      <section className=" footer-banner relative">
        <div className="absolute top-0 w-full h-full bg-black opacity-60"></div>
        <footer className="px-10 divide-y w-[100%] absolute top-0 text-white ">
          <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <center>
                <img className="h-56" src={AnanthamLogo} alt="loading" />
              </center>
            </div>
            <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
              <div className="space-y-3    ">
                <div>
                  <h2 className="text-[23px] font-Montserrat  text-white ">
                    QUICK LINK
                  </h2>
                  <ul className=" pt-7 font-medium pb-2 text-[15px] text-white  font-Heeb">
                    <li className="flex pb-2 ">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">
                        <Link to={"/"}>HOME</Link>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">
                        <Link to={"about"}>ABOUT </Link>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">
                        <Link to={"Service"}>SERVICES</Link>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">
                        <Link to={"Menu"}>MENU</Link>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">
                        <Link to={"FixedMenu"}> FIXED MENU </Link>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">
                        <Link to={"Contact"}>CONTACT </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h2 className="text-[23px] uppercase font-MontserratMedium  text-white ">
                    Services
                  </h2>

                  <ul className="mt-2 text-[16px] pt-5 font-medium pb-2 text-white  font-Heeb">
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line"> Wedding Catering</span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line"> Wedding Catering </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">Mass Gathering </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">Food Fiesta</span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">Barbeque Banquet</span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">Palate to Plate</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h2 className="text-[23px]  font-MontserratMedium uppercase  text-white ">
                    Contact Us
                  </h2>

                  <ul className="pt-6 text-[16px] font-medium text-white  font-Heeb">
                    <li className="flex pb-2">
                      <BsFillTelephoneForwardFill className="mt-1 mr-4 text-green-700" />
                      <span className="">
                        {" "}
                        <a href="tel:+919442425703">+91 9442425703</a>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <BiLogoGmail className="mt-1 mr-4 text-green-700" />
                      <span>
                        <a href="mailto:anandhamcatering@gmail.com">
                          anandhamcatering@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="flex pb-2">
                      <FaLocationDot className="mt-1 text-[25px] mr-4 text-green-700" />
                      <span className="text-justify">
                        12, Kailamman Kovil Street,Saibaba Colony, Coimbatore-641038
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-3 pl-3">
                <div className="text-[23px]  font-MontserratMedium uppercase  text-white ">
                  Social media
                </div>
                <div className="flex justify-start pt-3  space-x-3">
                  <div>
                  <a href="https://www.facebook.com/profile.php?id=100070597942817"> <BiLogoFacebook className="text-[25px] text-white" /></a>    
                
                  </div>

                  <div>
                  <a href="tel:+919943106789 "> <IoCallSharp className="text-[25px]  text-white"/></a>
                 
                  </div>
                  <div>
                  <a href="https://www.instagram.com/anandham_catering_coimbatore/"> <AiOutlineInstagram className="text-[25px] " /></a>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-sm text-center dark:text-gray-400">
            © 2023 Company Co. All rights reserved.
          </div>
        </footer>
      </section>
      <Whatsapp/>
      <Upupup />
      {/* ========================== */}
    </>
  );
};

export default Footer;
