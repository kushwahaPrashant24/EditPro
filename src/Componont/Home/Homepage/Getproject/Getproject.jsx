import React from "react";
import Button from "../../../Services/MainServices/Components/Button/NewButton"
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import "./Getproject.scss"

function Gotproject() {
    return <>
         <div id="GetProject" className="w-full  flex items-center justify-center flex-col gap-10 pb-10 ">
         <div className="flex items-center justify-center flex-col mt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">Got New Project</h1>
            <div className="h-2 rounded-md flex align-center bg-head w-36 mt-5"></div>
            </div>
            <div className="flex items-center justify-center flex-col">
                <div className="flex items-center justify-center flex-col mb-10">
                <p className=" text-head text-lg sm:text-xl font-semibold">Call us at this number for instant support</p>
                <p className=" text-head text-lg sm:text-xl font-semibold ">+91 8967908081</p>
                </div>
                
             <Button buttonText="Contact" link="/contact" />
                
             
          
            </div>
         </div>
      
    </>
}

export default Gotproject;