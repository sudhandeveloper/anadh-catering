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

      <section>
        <div className="w-full h-full">

        </div>
      </section>
    </>
  );
};

export default Home;
