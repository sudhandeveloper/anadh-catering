import React, { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

import AnanthamLogo from "../../assets/images/home-images/anandham-Logo.jpg";
const NavOne = () => {
  const [drawer, setDrawer] = useState("false");

  const clickerhandler = () => {
    setDrawer(!drawer);
    console.log(drawer);
  };

  return (
    <>
      <section>
        <div className=" h-auto text-white bg-black ">
          <div className="w-[100%] flex justify-end  h-auto ">
            <div className="w-[20%] max-md:w-full bg- max-sm:px-10">
              <ul className="flex w-full max-md:pb-3 cursor-pointer pt-3 gap-5  justify-center max-md:justify-start">
                <li className="w-8 h-8 pt-[5px]  rounded-full">
                  <center>
                    <BiLogoFacebook className="text-[25px] text-white" />
                  </center>
                </li>
                <li className="w-8 h-8 pt-[5px]  text-white rounded-full">
                  <center>
                    <AiOutlineTwitter className="text-[25px]" />
                  </center>
                </li>
                <li className="w-8 h-8 pt-[5px]  text-white rounded-full">
                  <center>
                    <AiOutlineInstagram className="text-[25px] " />
                  </center>
                </li>
              </ul>
            </div>

            <div className="w-[80%] max-md:hidden">
              <ul className="flex justify-end gap-3 pr-10 sm:pb-2 max-sm:gap-0 max-sm:flex ">
                <li className="pt-4 pl-2 max-sm:w-full max-sm:text-center">
                  +91 7558 999 111
                </li>
                <li className="pt-5">
                  <div className="w-[1.2px] h-4 max-sm:hidden bg-orange-600"></div>
                </li>
                <li className="pt-4 tracking-wider max-sm:text-center max-sm:w-[100%] max-sm:pb-3 ">
                  marketing@d2rinteriors.com
                </li>
                <li className="pt-5">
                  <div className="w-[1.2px] h-4 max-sm:hidden bg-orange-600"></div>
                </li>
                <li className="mt-[10px] max-sm:hidden">
                  <button className=" px-5 pt-2 pb-1 rounded-md uppercase font-serif text-white bg-green-600  ">
                    <span>Contact us</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ------- */}
        <div className=" h-[70px] max-md:h-auto    shadow-lg ">
          <div className="w-full md:pt-3 md:hidden">
            <div
              className=" right-10 absolute top-4 text-right text-[25px] text-white"
              onClick={clickerhandler}
            >
              {drawer ? <FaBars /> : <AiOutlineClose />}
            </div>
          </div>

          <div
            className={`z-30 flex max-md:flex-col  ${
              drawer ? "max-md:hidden" : "show helo"
            }`}
          >
            <div className="w-auto h-auto  pl-10 max-md:hidden max-lg:pl-2 max-lg:pr-3">
              <img
                className="object-contain h-[70px] "
                src={AnanthamLogo}
                alt="loading"
              />
            </div>
            <div className="w-full h-full ">
              <ul className="md:pt-6 max-md:pt-3 max-md:flex-col  max-md:pb-5 justify-center  max-lg:pr-10 max-md:pr-0 flex head-ul cursor-default  h-auto md:gap-3 text-[16px] text-black uppercase font-serif tracking-wide ">
                <li className="he header-line one max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="max-md:pt-3 header-line he max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to="about-us"> About Us</Link>
                </li>
                <li className="header-line relative max-md:h-auto max-md:w-auto servicesmenu max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <div className="flex ">
                    {" "}
                    <span className="he">Services </span>
                    <h2>
                      <IoMdArrowDropdown className="ml-2 text-[18px] mt-[3px]" />
                    </h2>
                  </div>

                  <div className="absolute z-20 max-md:static w-80 servicedropdownitem top-5">
                    <div className="py-3 pl-2 pr-2 mt-8 bg-white shadow-xl rounded-md max-md:mt-2 innerserviceitem ">
                      <ul>
                        <li className="pb-2 header-line he border-b-[1px] border-b-gray-100">
                          <Link to={"Home-interiories"}> Home Interiors </Link>
                        </li>

                        <li className="pb-2 header-line he pt-2 border-b-[1px] border-b-gray-100">
                          <Link to={"Commercial-interior"}>
                            Commercisal Interios{" "}
                          </Link>
                        </li>

                        <li className="pt-2 he border-b-[1px] border-b-gray-100">
                          <Link to={"Corporate-interior"}>
                            Corporate Office Intereriors{" "}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="he header-line max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"Gallary"}>Menu </Link>
                </li>
                <li className="he header-line max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"Gallary"}>Fixed Menu </Link>
                </li>
                <li className="he header-line max-md:pt-3 max-md:pl-5 max-md:pb-2 ">
                  <Link to="Contact-us">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavOne;
