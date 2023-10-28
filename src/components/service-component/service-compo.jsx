import React from "react";

const ServiceCompo = (props) => {
  return (
    <>
      <div className=" rounded-sm  shadow-md shadow-gray-400  ">
        <img
          src={props.img}
          alt="loading"
          className="object-contain object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <center>
              {" "}
              <h2 className="text-3xl font-extrabold tracking-normal text-green-700   font-cormantfive">
                {props.heading}
              </h2>
              <p className="font-cormantfive text-[23px] mt-5 ">{props.para}</p>{" "}
            </center>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ServiceCompo;
