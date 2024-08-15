import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Hero.css";
import Aura from "../../Aura/Aura";
import Model1 from "../../../../assets/Homepage/NewModel1.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Butt from "../../../Services/MainServices/Components/Button/NewButton";

export default function Hero() {
  return (
    <>
      <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/background-image.jpg')" }}>
        <div
          id="Hero"
          className="flex flex-col md:flex-row items-center justify-center w-full text-white pt-16 px-4 md:px-7"
          style={{ paddingTop: "calc(10vh + 60px)", minHeight: "80vh" }} // Reduced top padding and min-height
        >
          <div className="w-full md:w-1/2 flex flex-col mt-8 md:mt-16 lg:mt-24 gap-4 sm:gap-6 md:gap-8">
            <div>
              <h3 className="w-full sm:w-3/4 md:w-full text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
                CREATIVE AGENCY
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                TRANSFORM VISION INTO DIGITAL MASTERPIECES
              </h1>
            </div>
            <div>
              <p className="hidden md:block text-sm md:text-base lg:text-xl  text-left font-bold ">
                Welcome to EditQuasar, where creativity meets precision. We
                specialize in diverse editing services to bring your visions to
                life. Let your vision shine through our expert craftsmanship.
                Together, we'll create something extraordinary.
              </p>
            </div>
            <div className="w-full sm:w-64 md:w-80">
              <Butt buttonText="Know More" link="/Services" target="main" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-end h-full">
            <img
              className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mt-12 z-10"
              src={Model1}
              alt="Model"
            />
          </div>
        </div>
      </div>
    </>
  );
}
