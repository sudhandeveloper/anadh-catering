import React from "react";
import Contacts from "../assets/images/contact-image/Contact-image.jpg";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Contact = () => {
  return (
    <>
      <section>
        <section>
          <div className="relative h-96 max-md:h-[500px]">
            <img
              className="object-cover w-full h-full"
              src={Contacts}
              alt="loading"
            />

            <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

            <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
              <h2 className="text-[38px] font-medium italic font-Barlow text-white ">
                CATERING SERVICES
              </h2>
              <h2 className="text-[65px] font-semibold font-Barlow text-white ">
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

            <h2 className="text-[42px]  font-MontserratMedium ">
              Our Achievements
            </h2>
            <p className="mt-5 text-justify text-black  text-[18px] font-Heeb">
              We keep promises and deliver on-time as per commitments. Every
              project we undertake is unique and we bring holistic satisfaction
              to our esteemed clients. Our maximum is to create captivating
              interior design experiences for home and workplace that are
              unique, elegant, made of superior quality and full of luxury.
            </p>
            <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-green-700  mt-10 flex justify-evenly">
              <button className="text-white uppercase font-cormantThiner">
                Contact Us
              </button>
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

              <li className="pt-10">
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

              <li className="pt-10">
                <div className="h-[30px] w-[2px] bg-gray-400"></div>
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
      </section>
    </>
  );
};

export default Contact;
