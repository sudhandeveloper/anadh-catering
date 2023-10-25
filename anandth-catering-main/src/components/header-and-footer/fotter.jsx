import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";

import AnanthamLogo from "../../assets/images/home-images/anandtham-bg-black.png";
import { FaLocationDot } from "react-icons/fa6";
import FooterBagroundImage from "../../assets/images/home-images/footer-banner.jpg";
// import Footerbg from "../../assets/images/home/footerbg.webp";
// bg-[#00677f]
const Footer = () => {
  return (
    <>
      <section>
        <footer className="px-4 divide-y  text-white footer-banner ">

          <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
            <div className="lg:w-1/3">
              <span className="self-center text-2xl font-semibold">
                <span className="text-green-600 font-Heeb">ANANDTHAM </span>
                CATERING SERVICES
              </span>
              <div className="w-[85%] h-[3px] bg-green-500 "></div>
              <div>
                <p className="text-white  pr-8 font-Heeb w-[100%] text-justify mt-5 ">
                  A legacy of vegetarian food catering services that brings to
                  you traditional and modern cuisines,under the rich expertise
                  of master cooks, to make your every event memorable. We cater
                  to personal and corporate events of all sizes.
                </p>
              </div>
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
                      <span className="header-line"> HOME</span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line"> ABOUT </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">SERVICES </span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">MENU</span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">FIXED MENU</span>
                    </li>
                    <li className="flex pb-2">
                      <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
                      <span className="header-line">CONTACT</span>
                    </li>
                    {/* <li className="flex ">
           <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
           <span>Privacy policy </span>
         </li> */}
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
                      <span className=""> +91 98418 33554</span>
                    </li>
                    <li className="flex pb-2">
                      <BiLogoGmail className="mt-1 mr-4 text-green-700" />
                      <span>sales@perilinteriors.com </span>
                    </li>
                    <li className="flex pb-2">
                      <FaLocationDot className="mt-1 text-[25px] mr-4 text-green-700" />
                      <span className="text-justify">
                        Medavakkam Branch: No 1/12, Jalladianpet, Ricemill Road,
                        Medavakkam, Chennai - 600100.{" "}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                    </svg>
                  </div>

                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"></path>
                    </svg>{" "}
                  </div>
                  <div>
                   
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-5 h-5 fill-current"
                    >
                      <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-6 text-sm text-center dark:text-gray-400">
            © 1968 Company Co. All rights reserved.
          </div>
        </footer>
      </section>
      {/* ========================== */}
    </>
  );
};

export default Footer;
<div className="relative w-full h-full bg-red-400">
  <img
    className="w-full h-[500px] object-cover"
    src={FooterBagroundImage}
    alt="loading"
  />
</div>;
<section>
  <div className="relative h-auto w-auto">
    <div className="max-md:h-[2000px] w-auto">
      <img
        className="h-full w-full object-cover"
        src={FooterBagroundImage}
        alt="loading"
      />
      <div className=" z-20">
        <section className="pt-10 absolute top-0 ">
          <div className="px-10 pb-10 max-sm:pb-3">
            <section className="py-6 ">
              <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-5 sm:grid-cols-2">
                  <div className="  h-full ">
                    <img
                      className="object-cover h-auto"
                      src={AnanthamLogo}
                      alt="loading"
                    />
                  </div>

                  <div className="w-[120%]  mt-5">
                    <div className="">
                      <h2 className="text-[23px]  font-MontserratMedium text-white ">
                        <span className="text-green-500">ANANDHAM </span>{" "}
                        CATERING
                      </h2>
                      <div className="w-full bg-green-500 h-[1px] mt-2"></div>

                      {/* <ul className="mt-2 font-medium text-white  font-Barlow">
         <li className="flex ">
           <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
           <span className="">About us </span>
         </li>
         <li className="flex ">
           <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
           <span>Services </span>
         </li>
         <li className="flex ">
           <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
           <span>Portfolio </span>
         </li>
         <li className="flex ">
           <AiOutlineDoubleRight className="mt-1 mr-4 text-green-700" />
           <span>Contact Us </span>
         </li>
       </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div></div>
            {/* <div className="h-[1px] mt-16 opacity-60 rounded-full bg-green-500 w-full"></div>
<div className="flex "></div> */}
          </div>
        </section>
      </div>
    </div>
    <div className="h-full w-full bg-black opacity-30 absolute top-0"></div>
  </div>
  <div className="flex max-md:flex-col justify-between font-Heeb tracking-wider px-10 py-2 text-white  bg-green-600 ">
    <p>Design and Developed by Honey Iconics</p>
    <p className="text-end">
      Copyright © Anandtham Catering All rights reserved
    </p>
  </div>
</section>;