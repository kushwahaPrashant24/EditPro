import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Hero.css";
import Aura from "../../Aura/Aura";
import Model1 from "../../../../assets/Homepage/NewModel1.png";

export default function Hero() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div
          id="Hero"
          className="flex flex-col md:flex-row items-center justify-center pt-20 rounded-3xl"
        >
          <div className="w-full md:w-1/2 flex flex-col px-7 mt-12 md:mt-24 lg:mt-48 gap-6 md:gap-9">
            <div>
              <h3 className="w-full sm:w-3/4 md:w-full text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
                CREATIVE AGENCY
              </h3>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
                TRANSFORM VISION INTO DIGITAL MASTERPIECES
              </h1>
            </div>
            <div>
              <p className="hidden md:block text-sm md:text-base lg:text-lg font-medium text-left text-caribbeangreen-5">
                Welcome to EditQuasar, where creativity meets precision. We
                specialize in diverse editing services to bring your visions to
                life. Let your vision shine through our expert craftsmanship.
                Together, we'll create something extraordinary.
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
          <div className="w-full md:w-1/2 flex justify-center items-end bg-contain h-96  md:h-auto">
            <img
              className="w-full h-auto max-w-xl mt-16  z-10"
              src={Model1}
              alt="Model"
            />
          </div>
        </div>
      </div>
    </>
  );
}
