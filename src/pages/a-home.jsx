import React from "react";
import BannerImage from "../assets/images/home-images/aboutus-image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Helmet } from "react-helmet";

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
import Imagess from "../assets/images/home-images/The Republic _ 2017.jpeg";
import MenuBaground from "../assets/images/home-images/bg-menu.jpg";

import GalleryimageOne from "../assets/images/Gallary-images/Image-two.jpg";
import GalleryimageTwo from "../assets/images/Gallary-images/image-three.jpg";
import GalleryimageThree from "../assets/images/Gallary-images/image-four.webp";
import GalleryimageFour from "../assets/images/Gallary-images/image-five.webp";
import GalleryimageFive from "../assets/images/Gallary-images/image-six.webp";
import Galleryimagesix from "../assets/images/Gallary-images/image-seven.jpeg";
import Galleryimageseven from "../assets/images/Gallary-images/Mutton-grevy.jpg";
import GalleryimageEight from "../assets/images/Gallary-images/chiken gravey.jpg";
import Email from "../components/email";
import { Link } from "react-router-dom";
const Home = () => {
  const setingOne = {
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,

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
      <div className="absolute z-40 flex h-auto pt-1 top-[15rem] max-md:top-5 left-5 max-sm:left-0">
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
        className="absolute  w-[20px] max-md:top-5 flex h-auto pt-1 top-[15rem]   max-md:left-10 right-4"
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
      <Helmet>
        <meta charSet="utf-8" />
        <title>Coimbatore Catering Services from Anantham catering</title>
        <meta
          name="description"
          content="Welcome to Anantham Catering Services in Coimbatore. We are the best catering service provider for weddings, corporate events, and special occasions. Experience the finest cuisine and impeccable hospitality."
        />
        <link rel="canonical" href="https://inddecoreinteriors.com/home" />
      </Helmet>
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
                    <p className="text-white font-cormantThiner px-8 text-[18px] mt-5 uppercase font-extrabold pb-16">
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
            <p className="px-10 text-[20px] uppercase font-cormantThiner text-center text-black font-extrabold">
              Anantham Catering Services is Premier for Exquisite Culinary
              Delights
            </p>
            <p className="px-6 mt-5 text-center font-cormantThiner font-extrabold text-[19px] max-lg:px-10 max-sm:px-5">
              Welcome to Anantham Catering Services - Your Culinary Destination
              for Coimbatore Catering Service. At Anantham Catering Services, we
              take immense pride in being your go-to catering partner in the
              vibrant city of Coimbatore. We are passionate about creating
              unforgettable dining experiences that cater to all your culinary
              desires. Our commitment to culinary excellence and impeccable
              service sets us apart as the premier choice for catering services
              in Coimbatore. Our skilled chefs curate a diverse menu that
              celebrates the rich tapestry of flavors, from traditional South
              Indian delicacies to international cuisines, ensuring there's
              something for everyone. Whether you're planning a grand wedding, a
              corporate gathering, or an intimate family celebration, we
              specialize in crafting tailor-made catering solutions to match the
              unique essence of your occasion. Our culinary team's unwavering
              dedication to using premium ingredients, innovative cooking
              techniques, and artful presentation ensures that each dish is a
              culinary masterpiece. Beyond the delectable cuisine, our team is
              committed to providing top-notch service, ensuring a seamless and
              memorable experience for you and your guests from start to finish.
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
                We recognize that corporate gatherings require a special touch, and we are committed to delivering exceptional dining experiences that enhance your business meetings and conferences.
                          "
              />

              <ServiceComponent
                mainimage={Wedding}
                Headingone="Exquisite!"
                headingtwo={"Wedding Catering"}
                Dashimage={Dash}
                para="
                           
                We understand that weddings are a celebration of love and togetherness, and we are dedicated to making your special day extraordinary with exceptional dining experiences.
              
                          "
              />

              <ServiceComponent
                mainimage={OutdoorCatering}
                Headingone="You can’t miss this!"
                headingtwo={"Outdoor Events Catering"}
                Dashimage={Dash}
                para="
                           
                We understand that outdoor gatherings demand a unique touch, and we are passionate about delivering unforgettable dining experiences that elevate your alfresco occasions.                            
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
          <p className="px-16 mb-10 text-center font-cormantThiner text-[22px] font-extrabold">
            At Anantham Catering Services, we understand that choosing the right
            catering partner is a significant decision, especially when it comes
            to important events like weddings, corporate gatherings, and outdoor
            celebrations. Our dedication to crafting exquisite cuisine is at the
            heart of what we do. We take pride in being your preferred choice
            for catering services in Coimbatore. Our experienced chefs are
            passionate about creating dishes that not only tantalize the taste
            buds but also reflect the beauty and essence of your event.
          </p>
          <div className="grid grid-cols-1 gap-4 pb-10 lg:grid-cols-4 sm:grid-cols-2">
            <WhyChooseUsCompo
              img={ImageOne}
              heading="Fresh Product"
              para="Fresh products guarantee the highest quality. We work closely with trusted suppliers to ensure that every ingredient used in our dishes meets the highest standards of excellence."
            />

            <WhyChooseUsCompo
              img={ImageTwo}
              heading="Trained Waiters"
              para="Our waiters are well-versed in the art of service. They have the knowledge and expertise to handle various types of events, from formal corporate gatherings to intimate family celebrations."
            />

            <WhyChooseUsCompo
              img={ImageThree}
              heading="Satisfied Clients"
              para="The success of Anantham Catering Services is best reflected in the satisfaction of our clients. The fresh products used in the dishes made a significant difference in taste."
            />

            <WhyChooseUsCompo
              img={ImageFour}
              heading="Flexible & Efficient"
              para="Whether you're planning an intimate gathering or a large-scale event, our efficient team is equipped to cater to your needs. We scale our services to match your event's size and type."
            />
          </div>
        </div>
      </section>

      {/* ==============  Customize menu =============================== */}

      <section>
        <div className="relative max-md:h-[630px] h-[550px] max-sm:h-[700px] mt-10 mb-10">
          <img
            className="object-cover w-full h-full"
            src={MenuBaground}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] max-sm:text-[25px] font-medium italic font-cormantThiner text-white ">
              Your Wish Is Our Command
            </h2>
            <h2 className="text-[65px] max-sm:text-[40px] font-semibold font-cormantThiner text-white ">
              Customizable Menu
            </h2>
            <p className="mt-5 text-white font-cormantThiner text-[20px text-[20px]">
              Discover the freedom to design your perfect dining experience with
              our Customizable Menu. We offer a wide range of appetizers, main
              courses, and desserts that you can mix and match to create a
              personalized menu that suits your event's theme and your guests'
              tastes. Choose from an extensive selection of dishes to create a
              menu that matches your unique preferences. We use only the
              freshest and finest ingredients to ensure every dish is a
              masterpiece.
            </p>
            <div className="w-20 h-[1px] bg-red-600 mt-10"></div>
            <button className="w-auto px-5 py-1 mt-5 font-bold text-white uppercase bg-green-700 font-cormantThiner tracking-wider]">
              Hire us
            </button>
          </div>
        </div>
      </section>
      {/* ======================== Gallary =================================== */}
      <section>
        <div className="">
          <div className="flex px-16">
            <div className=" h-[3px] w-[50%] mt-10 max-sm:hidden bg-black "></div>{" "}
            <h2 className="text-center w-[40%] max-sm:w-full text-[#c69204]  text-[60px]  font-GreatVibes ">
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
                  src={GalleryimageOne}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  alt="loading"
                  src={GalleryimageTwo}
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={GalleryimageThree}
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={GalleryimageFour}
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={GalleryimageFive}
                />
                <img
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  alt="loading"
                  src={Galleryimagesix}
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={Galleryimageseven}
                />
                <img
                  alt="loading"
                  className="object-cover w-full dark:bg-gray-500 aspect-square"
                  src={GalleryimageEight}
                />
              </div>
            </div>

            <center>
              <Link to={"Gallary"}>
                <div className="lg:w-[15%] md:w-[40%] max-md:w-[40%] py-2 bg-green-700 max-sm:w-[60%]  mt-10 flex justify-evenly">
                  <div className="text-white uppercase font-cormantThiner">
                    <h2 className="mt-1">Gallery</h2>
                  </div>
                  <BsArrowRight className="font-bold text-[35px] text-white " />
                </div>{" "}
              </Link>
            </center>
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

            <h2 className="text-[42px]  font-cormantThiner ">
              Our Achievements
            </h2>
            <p className="mt-5 text-justify text-black font-extrabold text-[18px] font-cormantThiner">
              We are proud recipients of the "Culinary Excellence Award" in
              recognition of our dedication to crafting exceptional dishes and
              creating unforgettable dining experiences for our clients. Our
              consistent positive feedback and client testimonials have earned
              us the "Client Choice Award" for delivering top-notch catering
              services that exceed expectations.
            </p>
            <div className="lg:w-[38%] md:w-[40%] max-md:w-[40%] py-2 bg-green-700 max-sm:w-[60%]  mt-10 flex justify-evenly">
              <div className="text-white uppercase font-cormantThiner">
                <h2 className="mt-1">Contact us</h2>
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
        <div className="relative max-md:h-[670px] h-[550px] max-sm:h-[700px]  mb-10">
          <img
            className="object-cover w-full h-full"
            src={Imagess}
            alt="loading"
          />

          <div className="absolute top-0 w-full h-full px-16 py-10 Contact-banner"></div>

          <div className="absolute top-0 z-10 w-full h-auto px-16 pt-20 max-sm:px-3">
            <h2 className="text-[38px] max-sm:text-[25px] font-medium italic font-cormantThiner text-white ">
              Choose From A Wide Range
            </h2>
            <h2 className="text-[65px] max-sm:text-[40px] font-semibold font-cormantThiner text-white ">
              Get A Variety Of Menu Options​
            </h2>
            <p className="mt-5 text-white text-[20px] font-cormantThiner">
              When offering a variety of menu options, it's important to cater
              to different tastes and preferences. Here's a selection of menu
              options that Anantham Catering in Coimbatore can consider
              including in their customizable menu. Appetizer, Main Courses,
              Side Dishes, Salads and Accompaniments, Desserts, Beverages. This
              diverse selection of menu options allows customers to mix and
              match dishes to create a personalized menu that suits their
              event's theme and their guests' tastes.
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
                        <p className="text-[18px] max-md:text-[20px]  text-black font-cormantThiner text-justify">
                          Anantham Catering Services made our wedding day truly
                          unforgettable. The food was not just delicious; it was
                          a work of art. They treated us like royalty with their
                          meticulous attention to detail and individualized
                          care.
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
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner  text-justify">
                          Anantham Catering Services has been our go-to choice
                          for corporate event catering, and they never
                          disappoint. Their culinary excellence and
                          professionalism are unmatched. Our guests are always
                          impressed, and so are we. We highly recommend their
                          services for any business gathering.
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
                        <p className="text-[18px] max-md:text-[20px] text-black font-cormantThiner  text-justify">
                          Our family celebration was made truly memorable by the
                          exceptional catering services provided by Anantham.
                          The flavors, the presentation, and the courteous staff
                          all contributed to a wonderful event. We couldn't have
                          asked for more. Thank you, Anantham Catering Services.
                        </p>
                      </div>
                    </li>
                  </ul>
                </center>
              </Slider>
            </div>
          </div>
        </section>

        <Email />
      </section>
    </>
  );
};

export default Home;
