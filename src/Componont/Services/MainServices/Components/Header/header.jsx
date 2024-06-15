import React from 'react';
import "../../../Services.css"; // Import CSS file

const ServiceHeader = ({video_link}) => {
    return (
        <div className="relative my-8  h-[88vh] -mt-36 mb-56  ">
          <video autoPlay loop muted>
            <source src={video_link} type="video/mp4" />
          </video>
          <div className="absolute top-[25%] left-[11%]  w-[50%] h-[60%] flex flex-col justify-evenly videosection">
            <p className="text-xl   sm:text-3xl lg:text-6xl text-richblack-5  ">
              Creating Experiences That Inspire:
            </p>

            <p className="text-sm hidden md:block  text-richblack-5 sm:text-lg"style={{fontSize:"1.1vw"}}>
              We specialize in the art and science of designing, building,
              and marketing, mastering every detail to deliver exceptional
              results.
            </p>

          </div>
        </div>
    );
};

export default ServiceHeader;
