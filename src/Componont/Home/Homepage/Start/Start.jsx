import React from "react";
import Img from "../../../../assets/coding.jpg"
import StartCard from "./Startcard";
import Homevid1 from "../../../../assets/homevid1.mp4"

function Start() {
  return (
    <>
      <div className="flex justify-center items-center flex-col pl-5">
        <div className="flex justify-center items-center">
        <div className="mt-16">
          <h2 className="w-full sm:w-3/4 md:w-1/2 text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">Why choose Us</h2>
          <h1  className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white ">What We Offer</h1>
          <StartCard />
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 mb-6 md:mb-0 mt-24">
    <video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
      <source src={Homevid1} type="video/mp4" />
    </video>
  </div>
        </div>
      </div>
    </>
  );
}

export default Start;
