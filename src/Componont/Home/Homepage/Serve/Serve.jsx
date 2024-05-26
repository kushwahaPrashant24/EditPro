import React, { useState } from "react";
import Sideleft from "../../../../assets/sideleft.png";
import Sideright from "../../../../assets/sideright.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Increaser from "./increaser";
import "./serve.css"

function Serve() {
  
  return (
    <>
     <div className="flex flex-col items-center mb-10">
  <div className="flex flex-col md:flex-row justify-between items-center w-full mt-16">
    <div className="hidden md:block">
      <img className="h-56" src={Sideright} alt="Side Right" />
    </div>
    <div className="w-full md:w-auto flex justify-center md:justify-start">
      <Increaser />
    </div>
    <div className="hidden md:block">
      <img className="h-56" src={Sideleft} alt="Side Left" />
    </div>
  </div>
  <div id="Serve" className="h-24 w-10/12 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white bg-increaser flex flex-col md:flex-row items-center justify-between rounded-xl -mt-10 p-4">
    <h1 className="mb-4 md:mb-0">Let's Get Your Project Started</h1>
    <Link to="/Services">
      <Stack spacing={2} direction="row">
        <Button variant="contained">View All</Button>
      </Stack>
    </Link>
  </div>
</div>

    </>
  );
}

export default Serve;
