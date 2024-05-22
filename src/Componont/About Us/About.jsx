import React from "react";
import AboutUsPageImg from "../../assets/AboutUs.png";

function About() {
  return (
    <div className="w-[90%] m-auto ">
      <div className="w-[100%] flex  bg-richblue-200 text-white border border-white ">
        <div className="sm:flex sm:flex-row border">
          {/*  Heading Section  */}
          <div className="flex flex-col  border border-black">
            <h2 className="text-2xl font-bold text-yellow-50 sm:text-5xl ">
              {" "}
              Our Mission{" "}
            </h2>
            <p className="hidden sm:block sm-text-lg mt-4">
              At EditQuasar, our mission is to harness creativity and innovation
              to deliver exceptional editing services that elevate brands and
              transform visions into reality. We are dedicated to crafting
              excellence and redefining creativity through our expertise.
            </p>

            <p className="font-bold text-xl sm:2xl mt-5">
              {" "}
              Dare to Dream: Designing Tomorrow’s Visual Identities & Digital
              Experiences
            </p>
          </div>
        <div className="border">  <img
            src={AboutUsPageImg}
            alt="About us robo"
            className="fixed-size bg-richblue-200 scale-x-[-1]  "
          /></div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
