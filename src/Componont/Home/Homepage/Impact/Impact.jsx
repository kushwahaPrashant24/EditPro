import React from "react";
import Img from "../../../../assets/coding.jpg";

function Impact() {
  return (
    <>
      <div className=" flex">
        <div>
          <img src={Img} />
        </div>
        <div>
          <h2 className="w-full sm:w-3/4 md:w-1/2 text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">Why choose Us</h2>
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white " >OUR IMPACT</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Powering Creativity</h1>
          <div>
            <p className="text-sm md:text-base lg:text-lg font-medium text-left text-caribbeangreen-5 hidden md:block">
              
              At EditQuasar, creativity drives every successful project. Our
              transformative solutions empower clients to reach new heights
              through innovative designs, compelling content, and cutting-edge
              technology. We fuel the creative potential of every brand we work
              with.
              </p> 
              <br />
              <p className="text-sm md:text-base lg:text-lg font-medium text-left text-caribbeangreen-5 hidden md:block">Our commitment to excellence is evident in the diverse
              services we offer, designed to unlock new opportunities and drive
              success. From graphic design to web development and video editing
              to mobile app creation, we ensure each project makes a lasting
              impact. At EditQuasar, we inspire, innovate, and elevate.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Impact;
