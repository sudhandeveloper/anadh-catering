import React from "react";
import { Link } from "react-router-dom";
const ServiceComponent = (props) => {
  return (
    <>
      <section>
        <div className="flex w-full h-[400px] ">
          {" "}
          <div className="w-[50%] h-full max-lg:hidden ">
            <img
              className="object-cover w-full h-full"
              src={props.mainimage}
              alt="loading"
            />
          </div>
          <div className="w-[50%] max-lg:w-full pb-5 bg-white px-10 pt-14 ">
            <center>
              <h2 className="font-Heeb text-[18px] text-gray-500">
                {props.Headingone}
              </h2>
              <h2 className="uppercase mt-2 text-[23px]">{props.headingtwo}</h2>
              <img className="mt-5 mb-5" src={props.Dashimage} alt="loading" />
              <p className="font-Heeb   ">{props.para}</p>
              <button className="w-auto h-auto px-5 py-2 mt-10 bg-green-700 text-white rounded-md">
                <Link to={props.link}>View More </Link>
              </button>
            </center>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceComponent;
