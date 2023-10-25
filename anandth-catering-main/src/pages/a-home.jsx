import React from "react";
import BannerImage from "../assets/images/home-images/banner-image.jpg";
const Home = () => {
  return (
    <>
      <section>
        <div className="w-full relative h-[50%] banner-image mb-10">
          <div className="absolute top-0 -z-0 bg-black opacity-40 w-full h-full"></div>
          <div className="absolute top-0 w-full h-full pt-28">
            <center>
              <div class="styled px-16 max-sm:px-5">
                <fieldset>
                  <legend className="">Creating</legend>
                  <div>
                    <h2 className="text-white text-[50px] font-bold">DELICIOUS MEMORIES</h2>
                    <p className="text-white text-[18px] pb-16">
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

  {/* ================== MEET KERALA'S BEST INTERIOR DESIGNERS ================ */}

  <section>
          <div className="pt-10 pb-1 bg-gray-200">
            <div className="">
              <h1 className="text-center max-md:text-[50px] text-gray-500 font-bold uppercase text-[45px] font-cormantThiner ">
                About <span className="text-red-600"> Inddecore Interio </span>
              </h1>
              <center>
                <div className="h-1 bg-red-600 rounded-full w-96 max-md:hidden"></div>
              </center>
            </div>
            <div className="flex w-full h-auto px-20 mt-20 mb-20 max-md:px-6 max-lg:flex-col ">
              <div className="w-[50%] max-lg:w-full h-[500px] Baner-black-white">
                <img
                  className="object-cover w-full h-full"
                  src={ImageThree}
                  alt="loading"
                />
              </div>

              <div className="w-[50%] max-lg:w-full  h-auto ">
                <div className="h-[30%] text-center pt-5">
                  <h1 className="text-center text-gray-500 font-bold uppercase text-[45px] font-cormantThiner ">
                    <span className="text-red-600"> Inddecore </span>Interio
                  </h1>
                </div>

                <div className="w-full h-[70%] px-16 py-16 max-sm:px-6 bg-white ">
                  <h2 className="uppercase tracking-widest text-[22px] text-gray-500">
                    MEET KERALA'S BEST
                  </h2>
                  <p className="text-[32px] tracking-wider font-medium text-red-600">
                    INTERIOR DESIGNERS
                  </p>
                  <p className="text-justify font-extrabold text-[16px] text-gray-800  font-cormantThiner">
                    stablished in the year 2018, THOMAR is a highly reputed
                    interior brand. It is supported by a powerful team of
                    architects, interior designers and supervisors etc. This
                    widely acclaimed brand, which offers turnkey interior
                    solutions, is known for its exceptional research and
                    development wing. It handles both residential and commercial
                    projects. It maintains international standards in design,
                    material, as well as execution..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default Home;
