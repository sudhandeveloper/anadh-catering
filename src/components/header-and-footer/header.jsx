import React, { useState } from "react";

import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

import AnanthamLogo from "../../assets/images/home-images/anandtham-bg-black.png";
const NavOne = () => {
  const [drawer, setDrawer] = useState("false");

  const clickerhandler = () => {
    setDrawer(!drawer);
    console.log(drawer);
  };

  return (
    <>
      <section className="sticky top-0 z-50">
        <div className="h-auto text-white bg-black ">
          <div className="w-[100%] flex justify-end  h-auto ">
            <div className="w-[20%] max-md:w-full bg- max-sm:px-10">
              <ul className="flex justify-center w-full gap-5 pt-3 cursor-pointer max-md:pb-3 max-md:justify-start">
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
                  <a href="tel:+919943106789">+919943106789</a>
                </li>
                <li className="pt-5">
                  <div className="w-[1.2px] h-4 max-sm:hidden bg-orange-600"></div>
                </li>
                <li className="pt-4 tracking-wider max-sm:text-center max-sm:w-[100%] max-sm:pb-3 ">
                  <a href="mailto:anandhamcatering@gmail.com">
                    anandhamcatering@gmail.com
                  </a>
                </li>
                <li className="pt-5">
                  <div className="w-[1.2px] h-4 max-sm:hidden bg-orange-600"></div>
                </li>
                <li className="mt-[10px] max-sm:hidden">
                  <div className="px-5 pt-2 pb-1 font-serif text-white uppercase bg-green-600 rounded-md ">
                    <Link to={"Contact"}>Contact us </Link>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* ------- */}
        <div className=" h-[70px] max-md:h-auto bg-white  shadow-lg ">
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
            <div className="w-auto h-auto pl-10 max-md:hidden max-lg:pl-2 max-lg:pr-3 bg-white">
              <Link to={"/"}>       <img
                className="object-contain h-[70px] "
                src={AnanthamLogo}
                alt="loading"
              /> </Link>
       
            </div>

            <div className="w-full h-full sticky top-0 bg-white">
              <ul className="md:pt-6 max-md:pt-3 max-md:flex-col  max-md:pb-5 justify-center  max-lg:pr-10 max-md:pr-0 flex head-ul cursor-default  h-auto md:gap-10 text-[16px] text-black uppercase font-serif tracking-wide ">
                <li className="he header-line one max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="max-md:pt-3 header-line he max-md:pl-5  max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to="about"> About Us</Link>
                </li>
                <li className="header-line relative max-md:h-auto max-md:w-auto servicesmenu max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <div className="flex ">
                    <span className="he">
                      <Link to={"Service"}>Services </Link>{" "}
                    </span>
                    <h2 className="hidden">
                      <IoMdArrowDropdown className="ml-2 text-[18px] mt-[3px]" />
                    </h2>
                  </div>
                </li>
                <li className="he header-line max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"Menu"}>Menu </Link>
                </li>
                <li className="he header-line max-md:pt-3 max-md:pl-5 max-md:pb-2 max-md:border-b-[1px] max-md:border-b-gray-500">
                  <Link to={"FixedMenu"}>Fixed Menu </Link>
                </li>
                <li className="he header-line max-md:pt-3 max-md:pl-5 max-md:pb-2 ">
                  <Link to="Contact">Contact</Link>
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
