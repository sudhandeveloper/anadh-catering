import React from "react";
import BannerImage from "../assets/images/home-images/aboutus-image.png";
const Home = () => {
  return (
    <>
      <section>
        <div className="w-full relative h-[50%] banner-image ">
          <div className="absolute top-0 -z-0 bg-black opacity-40 w-full h-full"></div>
          <div className="absolute top-0 w-full h-full pt-28">
            <center>
              <div class="styled px-16 max-sm:px-5">
                <fieldset>
                  <legend className="">Creating</legend>
                  <div>
                    <h2 className="text-white text-[50px] font-bold">
                      DELICIOUS MEMORIES
                    </h2>
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
        <div className="flex max-lg:flex-wrap">
          <div className="w-[50%] max-lg:w-full h-auto">
            <h2 className="font-GreatVibes text-[60px] text-[#c69204] text-center mt-10">
              Cater-Inc
            </h2>
            <p className="text-center px-10 font-serif text-gray-700">
              A CATERING EXPERIENCE LIKE NO OTHER, CATER-INC OFFERS A BOLD &
              REFRESHING TAKE ON TRADITIONAL CUISINE.
            </p>
            <p className="px-24 max-lg:px-10 max-sm:px-5 mt-5  text-justify">
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
    </>
  );
};

export default Home;
