import React from "react";
import BannerImage from "../assets/images/home-images/aboutus-image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import ServiceComponent from "../components/home-component/services-componet";
import SlideImageOne from "../assets/images/home-images/slide-image.jpeg";
import Wedding from "../assets/images/home-images/buffea.jpeg";
import OutdoorCatering from "../assets/images/home-images/outdoor-catering.jpeg";
import Dash from "../assets/images/home-images/dash.png";

import WhyChooseUsCompo from "../components/home-component/why-choose-us-compo";
import ImageOne from "../assets/images/home-images/why-choos-us-images/image-one.png";
import ImageTwo from "../assets/images/home-images/why-choos-us-images/image-two.png";
import ImageThree from "../assets/images/home-images/why-choos-us-images/image-three.png";
import ImageFour from "../assets/images/home-images/why-choos-us-images/image-four.png";

import MenuBaground from "../assets/images/home-images/bg-menu.jpg";
const Home = () => {
  const setingOne = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 10,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <PrevArrowOne />,
    nextArrow: <NextArrowOne />,
  };
  function PrevArrowOne(props) {
    return <div className="hidden"></div>;
  }

  function NextArrowOne(props) {
    return <div className="hidden"></div>;
  }

  // ===========================
  const settings = {
    // dots: true,

    autoplay: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="absolute  flex h-auto pt-1 top-[18.4rem] max-md:top-5 -left-7 max-sm:left-0">
        <button onClick={onClick}>
          <h2 className="">
            <MdArrowBackIosNew className="text-black text-[30px]" />
          </h2>
        </button>
      </div>
    );
  }

  function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className="absolute  max-md:top-5 flex h-auto pt-1 top-[18.4rem]   max-md:left-10 -right-7"
        style={{ ...style }}
      >
        <button onClick={onClick}>
          <h2 className="">
            <MdArrowForwardIos className="text-black text-[30px]" />
          </h2>
        </button>
      </div>
    );
  }
  return (
    <>
      <section>
        <div className="w-full relative h-[50%] banner-image ">
          <div className="absolute top-0 w-full h-full bg-black -z-0 opacity-40"></div>
          <div className="absolute top-0 w-full h-full pt-28">
            <center>
              <div class="styled px-16 max-sm:px-5">
                <fieldset>
                  <legend className="">Creating</legend>
                  <div>
                    <h2 className="text-white text-[50px] font-bold">
                      DELICIOUS MEMORIES
                    </h2>
                    <p className="text-white font-Heeb text-[18px] pb-16">
                      Cater-Inc strives to produce innovative culinary art,
                      creating memorable experiences through inspired cuisine
                      and impeccable service.
                    </p>
                  </div>
                </fieldset>
              </div>
            </center>
          </div>
        </div>
      </section>

      {/* ================== BEST catering DESIGNERS ================ */}
      <section>
        <div className="flex max-lg:flex-wrap">
          <div className="w-[50%] max-lg:w-full h-auto">
            <h2 className="font-GreatVibes text-[60px] text-[#c69204] text-center mt-10">
              Cater-Inc
            </h2>
            <p className="px-10 font-serif text-center text-gray-700">
              A CATERING EXPERIENCE LIKE NO OTHER, CATER-INC OFFERS A BOLD &
              REFRESHING TAKE ON TRADITIONAL CUISINE.
            </p>
            <p className="px-24 mt-5 text-center font-Heeb max-lg:px-10 max-sm:px-5">
              We are the finest corporate caterers in Mumbai that deliver
              memories with excellent food quality and immaculate services to
              bring new innovative standards in the catering world. The company
              promises to serve up smiles with their out-of-the-box appetizers,
              wholesome main dishes and attractive desserts. With our flair for
              the theatrical, Cater-Inc chefs can tweak the most traditional and
              boring dishes with a contemporary artistry introducing cuisines
              that have never been tried before. Serving as one of the top
              corporate caterers in Mumbai, Cater-Inc specializes in
              personalized weddings, conventions, galas, corporate events and
              parties. We have innovated a flawless and professional corporate
              catering menu that dispels the boring food served under such
              premises and promises interesting flavor combinations. Cater-Inc
              is known for being innovative and accommodating and is listed as
              the best corporate caterers in Mumbai for designing a bespoke menu
              for your memorable events, whether big or small.
            </p>
          </div>
          <div className="w-[50%] h-auto max-lg:w-full ">
            <center>
              <img src={BannerImage} alt="loading" />
            </center>
          </div>
        </div>
      </section>

      {/* ==============   Services slider =============================== */}
      <section>
        <div className="pt-20 pb-20 mt-20 mb-20 bg-white Slide-image-bg">
          <div className="relative px-36 max-md:px-5">
            <Slider {...setingOne} className="Baner-black-white">
              <ServiceComponent
                mainimage={SlideImageOne}
                Headingone="Celebrate corporate life"
                headingtwo={"corporate Catering"}
                Dashimage={Dash}
                para="
                            From years, Cater-Inc has been renowned corporate
                            caterers in Mumbai serving delicious food and
                            beverages to corporate events with time punctuation,
                            and most precisely with exquisite and refreshing
                            menu.
                          "
              />

              <ServiceComponent
                mainimage={Wedding}
                Headingone="Exquisite!"
                headingtwo={"Wedding Catering"}
                Dashimage={Dash}
                para="
                           
                Crafted with love for perfection, Cater-Inc brings a
                wide panorama of cuisines which offers the best
                catering experience and will make your wedding day
                special.
              
                          "
              />

              <ServiceComponent
                mainimage={OutdoorCatering}
                Headingone="You can’t miss this!"
                headingtwo={"Outdoor Events Catering"}
                Dashimage={Dash}
                para="
                           
               
                Outdoor events are the perfect gateways to add a
                unique charm to any occasion. We have an amazing
                outdoor event catering menu to choose from simple
                rustic barbecues to high-dining delicacies, you name
                it.
              
              
                          "
              />
            </Slider>
          </div>
        </div>
      </section>

      {/* ==============  Why Choose us =============================== */}

      <section className="py-6 ">
        <div className="container flex flex-col justify-center p-4 mx-auto">
          <h2 className="text-[55px] text-[#c69204] mb-5 font-GreatVibes text-center ">
            Why Choose Us
          </h2>
          <p className="px-16 mb-10 text-center font-Heeb">
            With over 30 years of excellence in delightful catering services.
            Gupta Caterers is one of the best caterers in Kolkata for your
            occasions. We cater to all types of events like weddings, corporates
            parties, private party, cocktails, niche events or more. We all know
            the importance of the wedding day and everything needs to be
            flawless. Choosing right from the venue to the menu, everything
            needs to be precisely done for making the event perfect.
          </p>
          <div className="grid grid-cols-1 gap-4 pb-10 lg:grid-cols-4 sm:grid-cols-2">
            <WhyChooseUsCompo
              img={ImageOne}
              heading="Fresh Product"
              para="Our dishes are top-notch when it comes to quality and taste. Our customers are most fond of our foods"
            />

            <WhyChooseUsCompo
              img={ImageTwo}
              heading="Trained Waiters"
              para="Our catering team is well-trained and educated in the field of serving. We can handle the crowd as a breeze"
            />

            <WhyChooseUsCompo
              img={ImageThree}
              heading="Satisfied Clients"
              para="All our customers are 100% satisfied with our catering service. They recommend us to others"
            />

            <WhyChooseUsCompo
              img={ImageFour}
              heading="Flexible & Efficient"
              para="We understand that our clients often require last-minute changes, like special dietary requirements"
            />
          </div>
        </div>
      </section>

      {/* ==============  Customize menu =============================== */}

      <section>
        <div className="relative max-md:h-[630px] h-[550px] max-sm:h-[500px] mt-10 mb-10">
          <img
            className="object-cover w-full h-full"
            src={MenuBaground}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] max-sm:text-[25px] font-medium italic font-Barlow text-white ">
              Your Wish Is Our Command
            </h2>
            <h2 className="text-[65px] max-sm:text-[40px] font-semibold font-Barlow text-white ">
              Customizable Menu
            </h2>
            <p className="mt-5 text-white font-Heeb">
              Being the best catering service Kolkata, we kno that every person
              has a different pallete when it comes to food. If you have a
              special event planned out and are struggling to find the right
              menu options, we can help. With Asparagus Catering Unit, you can
              get the opportunity to customise your own menu according to your
              event theme. You choose and we deliver!
            </p>
            <div className="w-20 h-[1px] bg-red-600 mt-10"></div>
            <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
              Hire us
            </button>
          </div>
        </div>
      </section>
      {/* =========================================================== */}
      <section>
        <div className="">
          <div className="flex px-16">
            {" "}
            <div className=" h-[3px] w-[50%] mt-10 max-sm:hidden bg-black "></div>{" "}
            <h2 className="text-center w-[40%] max-sm:w-full text-[#c69204]  text-[60px]  font-GreatVibes ">
              {" "}
              Gallary
            </h2>{" "}
            <div className="w-[50%] h-[3px] mt-10  bg-black max-sm:hidden "></div>
          </div>

          <section className="py-6 ">
            <div className="container flex flex-col justify-center p-4 mx-auto">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  alt="loading"
                  src="https://source.unsplash.com/random/300x300/?1"
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  alt="loading"
                  src="https://source.unsplash.com/random/300x300/?2"
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src="https://source.unsplash.com/random/300x300/?3"
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src="https://source.unsplash.com/random/300x300/?4"
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src="https://source.unsplash.com/random/300x300/?1"
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  alt="loading"
                  src="https://source.unsplash.com/random/300x300/?2"
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src="https://source.unsplash.com/random/300x300/?3"
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src="https://source.unsplash.com/random/300x300/?4"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* =================== achivements ========================== */}
      <section>
        <div className="flex gap-5 px-16 py-20 mt-20 bg-gray-100 max-sm:px-6 max-lg:flex-col">
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

      {/* ==================== choose wide varity of options=========================== */}
      <section>
        <div
          className="relative max-md:h-[670px] h-[550px] max-sm:h-[7
          
          
          
          00px]  mb-10"
        >
          <img
            className="object-cover w-full h-full"
            src={MenuBaground}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] max-sm:text-[25px] font-medium italic font-Barlow text-white ">
              Choose From A Wide Range
            </h2>
            <h2 className="text-[65px] max-sm:text-[40px] font-semibold font-Barlow text-white ">
              Get A Variety Of Menu Options​
            </h2>
            <p className="mt-5 text-white font-Heeb">
              When it comes to catering your event, we have you covered. We have
              a wide variety of menu options to choose from, so you can find the
              perfect fit for your event. And our experienced staff will take
              care of everything, from set-up to clean-up, so you can relax and
              enjoy your special day. Contact us today to learn more about our
              catering service and see how we can help make your event a success
            </p>
            <div className="w-20 h-[1px] bg-red-600 mt-10"></div>
            <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
              Hire us
            </button>
          </div>
        </div>
      </section>
      {/* ======================= testimonial ==================================== */}

      <section>
        <section>
          <div className="px-10 pb-10 max-sm:px-1">
            <div>
              <h2 className="text-center text-[52px] max-sm:text-[30px] font-GreatVibes  text-[#c69204] pt-10 ">
                What Our Clients Says
              </h2>
            </div>
            <div>
              <Slider className="" {...settings}>
                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">21-9-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            Danial
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-green-700" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] font-Heeb text-black font-cormantThiner text-justify">
                          Indo decor is a luxury interior designer who’s
                          passionate about creating environments that reflect
                          the unique personalities of her clients. She founded
                          RDID to bring her bold, eclectic tastes and a high
                          level of sophistication to Chicago interior design’s
                          luxury residential and commercial markets. An adept
                          curator of branded environments, Rae specializes in
                          ensuring RDID’s commercial design work is flawlessly
                          integrated and reflects the branding and culture of
                          her clients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>

                <center className="px-7">
                  <ul className="flex w-[80%] max-md:w-full gap-5 shadow-xl pb-10 pt-10 shadow-gray-500 max-sm:shadow-lg max-lg:flex-col mb-10 mt-20 justify-evenly ">
                    <li>
                      <div className="w-auto h-auto">
                        <div className="px-5 pt-28 max-sm:px-0 max-md:pt-20">
                          <p className="font-cormantThiner">21-9-2023</p>
                          <p className="font-semibold font-cormantThiner text-[25px]">
                            Danial
                          </p>

                          <ul className="flex justify-center ">
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                            <li>
                              <AiFillStar className="text-green-700 text-[30px]" />
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="w-[70%] pr-20 max-lg:px-10 max-lg:w-full">
                      <div className="w-[100%]">
                        <p>
                          <BiSolidQuoteLeft className="text-[102px] text-green-700" />
                        </p>
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner font-Heeb text-justify">
                          Indo decor is a luxury interior designer who’s
                          passionate about creating environments that reflect
                          the unique personalities of her clients. She founded
                          RDID to bring her bold, eclectic tastes and a high
                          level of sophistication to Chicago interior design’s
                          luxury residential and commercial markets. An adept
                          curator of branded environments, Rae specializes in
                          ensuring RDID’s commercial design work is flawlessly
                          integrated and reflects the branding and culture of
                          her clients.
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>
              </Slider>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Home;
