import React from 'react'


const WhyChooseUsCompo = props => {
  return (
    <>   <div className="shadow-xl shadow-gray-300 rounded-md ">
    <center>
      <div className="rounded-full h-20 w-20 ">
        <img className="mt-12" src={props.img} alt="loading" />
      </div>
      <h2 className="mt-3 font-MontserratMedium font-bold text-[18px] ">{props.heading}</h2>
      <p className="mt-5 px-5 font-Heeb pb-7">
     {props.para}
      </p>
    </center>
  </div></>
  )
}



export default WhyChooseUsCompo