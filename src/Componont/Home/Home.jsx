import React from "react";
import "./Home.scss";
import model1 from "../../assets/model1.png";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Doing from "./Homepage/Doing/Doing";
import Abouthome from "./Homepage/About/Abouthome";
import Start from "./Homepage/Start/Start";
import Serve from "./Homepage/Serve/Serve";
import Impact from "./Homepage/Impact/Impact";
import Gotproject from "./Homepage/Getproject/Getproject";
import Review from "./Homepage/Review/Review";
import Aura from "./Aura/Aura";
import CaseStudies from "./Homepage/Casestudies/Casestudies";
import Compnies from "./Homepage/Compnies/Compnies";

export default function Home() {
  return (
    <>
      <div className="sm:block   flex align-center flex-col">
      <div className="flex py-10 items-center justify-center flex-col md:flex-row">
  <div className="w-full md:w-1/2 flex flex-col px-7 mt-12 md:mt-48 gap-6 md:gap-9">
    <div>
      <h3 className="w-full sm:w-3/4 md:w-1/2 text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
        CREATIVE AGENCY
      </h3>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
        TRANSFORM VISION INTO DIGITAL MASTERPIECES
      </h1>
    </div>
    <div>
      <p className="text-sm md:text-base lg:text-lg font-medium text-left text-caribbeangreen-5 hidden md:block">
        Welcome to EditQuasar, where creativity meets precision. We specialize in diverse editing services to bring your visions to life. Let your vision shine through our expert craftsmanship. Together, we'll create something extraordinary.
      </p>
    </div>
    <Link to="/About">
      <Button
        sx={{
          my: 2,
          color: "black",
          "&:hover": {
            color: "#1E40AF",
          },
          backgroundColor: "#adbbd8",
          "&:hover": {
            backgroundColor: "#1E40AF",
          },
          borderRadius: "20%",
        }}
        variant="contained"
      >
        About Us
      </Button>
    </Link>
  </div>
  <div className="w-full md:w-1/2 flex justify-center relative mt-8 md:mt-0">
    <Aura />
    <img className="absolute  max-w-xl z-10" src={model1} />
  </div>
</div>

       
        <Compnies />
        <Doing />
        <Abouthome />
        <Serve />
        <Start />
        <Impact />
        <CaseStudies />
        <Gotproject />
        <Review />
      </div>
    </>
  );
}
