import React from "react";
import { Helmet } from "react-helmet";
import Mutton from "../assets/images/service-images/mutton-biriyani.webp";
import Dsash from "../assets/images/home-images/dash.png";

import ServiceCompo from "../components/service-component/service-compo";

import ImageOne from "../assets/images/service-images/wed-png-ruchi-1.png";
import ImageTwo from "../assets/images/service-images/corpratv-png-ruchi-1.png";
import ImageThree from "../assets/images/service-images/convo-png-ruchi.png";
import ImageFour from "../assets/images/service-images/BD.png";
import ImageFive from "../assets/images/service-images/festi-2.png";
import ImageSix from "../assets/images/service-images/associa.png";

import Forms from "../components/email";
import { Link } from "react-router-dom";
const Service = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>What We Offer in Catering Coimbatore's Anantham Caterers</title>
        <meta
          name="description"
          content="Explore the diverse catering services offered by Anantham Catering Services in Coimbatore. From weddings to corporate events, we have your culinary needs covered."
        />
        <link
          rel="canonical"
          href="https://bestcaterersincoimbatore.com/services"
        />
      </Helmet>
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
              ANANDTHAM CATERING
            </h2>
            <div className="w-20 h-[1px] bg-red-600"></div>
            <Link to={"/Contact"}>    <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
              Hire us
            </button> </Link>
        
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
            Welcome to Anantham Catering Services, where the love for delicious
            food, a commitment to sustainability, and a passion for culinary
            artistry intertwine to set the stage for extraordinary dining
            experiences. Founded on a vision of delivering the finest catering
            services in Coimbatore, our journey is marked by culinary
            innovation, quality ingredients, and unparalleled customer
            satisfaction. At Anantham Catering Services, our culinary vision is
            simple yet profound: to transform every event into an unforgettable
            culinary journey. We believe that exceptional food is the
            cornerstone of every memorable celebration.
            <br />
            <br />
            This vision is the driving force behind our commitment to culinary
            excellence, and it's the reason we're celebrated as one of the
            finest caterers in Coimbatore. Our love for delicious food goes hand
            in hand with our love for the environment. We are proud to be
            leaders in sustainable catering services. Our eco-friendly practices
            encompass the use of locally sourced ingredients, waste reduction
            strategies, and eco-conscious packaging. Sustainability isn't just
            an option, it's an integral part of our culinary ethos.
          </p>
        </div>
      </section>
      {/* ============================================== */}
      <section>
        <div className="px-16 max-sm:px-6">
          {" "}
          <h2 className="text-green-700  mt-10 text-[50px] font-cormantfive uppercase mb-5 tracking-normal ">
            Anantham Catering stands out as the ideal choice for your special
            event.
          </h2>
          <p className="text-justify text-[20px] font-cormantThiner">
            We understand that every event is unique, and so are your culinary
            preferences. With our customizable menus, you have the flexibility
            to design a menu that perfectly suits your event's theme and your
            guests' tastes.
            <br />
            <br />
            Our team of experienced chefs is passionate about creating culinary
            masterpieces. They use only the freshest and finest ingredients to
            ensure that every dish is a delight for the palate.
            <br />
            <br />
            We offer a diverse range of appetizers, main courses, and desserts,
            allowing you to choose from a wide selection of dishes. Everything
            from classic favorites to cutting-edge delights is available here.
            <br />
            <br />
            Our culinary experts are here to assist you in selecting the right
            combination of dishes to create a harmonious and delicious meal. We
            collaborate closely with you to realize your culinary idea.
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
              para="We understand that weddings are unique, and our wedding catering services offer fully customized menus tailored to your preferences, cultural requirements, and event theme."
            />

            <ServiceCompo
              img={ImageTwo}
              heading="CORPORATIVE
"
              para="Our culinary offerings include a wide range of international and local flavors, ensuring that your corporate guests experience a delightful and memorable dining experience."
            />

            <ServiceCompo
              img={ImageThree}
              heading="CONVOCATION
"
              para="We offer fully customized menus tailored to the unique needs of convocation ceremonies, ensuring that the menu complements the formal and celebratory nature of the event."
            />

            <ServiceCompo
              img={ImageFour}
              heading="KITTY PARTIES
"
              para="We take pride in offering culturally authentic dishes and flavors that reflect the essence of the festival, ensuring an immersive culinary experience."
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
              para="We provide catering services for a wide range of association events, including meetings, conferences, annual gatherings, and special ceremonies."
            />
          </div>
        </div>
      </section>
      {/* ============================================= */}
      <Forms />
      {/* ============================================= */}
    </>
  );
};

export default Service;
