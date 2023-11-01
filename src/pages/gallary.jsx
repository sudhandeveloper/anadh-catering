import React from 'react'

const Gallary = () => {
  return (
   <>
    <section>
        <div className="w-full relative h-[50%] banner-image ">
          <div className="absolute top-0 w-full h-full bg-black -z-0 opacity-40"></div>
          <div className="absolute top-0 w-full h-full pt-28">
            <center>
              <div class="styled px-16 max-sm:px-5">
                <fieldset>
                  <legend className="">Gallary</legend>
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

   </>
  )
}

export default Gallary