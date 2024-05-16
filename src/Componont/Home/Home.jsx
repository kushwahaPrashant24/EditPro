import React from "react";
import "./Home.scss";
import model1 from "../../assets/model1.png";
import Main from "./Homepage/main";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="flex align-center flex-col">
        <div className="bg-white flex py-10 align-center justify-center">
          <div className="w-1/2  flex  flex-col items-center flex-wrap px-7 mt-48 gap-9">
            <div>
              <h3 className="w-1/2 sm:text-lg md:text-1xl lg:text-2xl font-medium text-left ">
                CREATIVE AGENCY
              </h3>
              <h1 className=" md:text-4xl lg:text-5xl font-black">
                TRANSFORM VISION INTO DIGITAL MASTERPIECES
              </h1>
            </div>
            <div>
              <p className=" md:text-0 lg:text-sm hidden md:flex  justify-center font-medium text-left">
                Welcome to EditQuasar, where creativity meets precision. We
                specialize in diverse editing services to bring your visions to
                life. Let your vision shine through our expert craftsmanship.
                Together, we'll create something extraordinary.
              </p>
            </div>
            <Link to="/About">
            <Stack  spacing={2} direction="row">
            <Button  variant="contained">About Us</Button>
          </Stack>
          </Link>
          </div>
          <div className="w-1/2   flex justify-center">
            <img className="max-w-xl" src={model1} alt="Model" />
          </div>
         
        </div>
        <Main />
      </div>
    </>
  );
}
