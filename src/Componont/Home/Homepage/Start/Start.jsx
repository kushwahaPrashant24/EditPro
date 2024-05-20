import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Img from "../../../../assets/coding.jpg"
import StartCard from "./Startcard";

function Start() {
  return (
    <>
      <div className="flex justify-center flex-col pl-5">
      
        <div className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white ">
          <h1>Let's Get Your Project Started</h1>
          <Link to="/Services">
            <Stack className="mt-5" spacing={2} direction="row">
              <Button  variant="contained">View All</Button>
            </Stack>
          </Link>
        </div>
        <div className="flex">
        <div className="mt-16">
          <h2 className="w-full sm:w-3/4 md:w-1/2 text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">Why choose Us</h2>
          <h1  className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white ">What We Offer</h1>
          <StartCard />
        </div>
        <div><img src={Img} /> </div>
        </div>
      </div>
    </>
  );
}

export default Start;
