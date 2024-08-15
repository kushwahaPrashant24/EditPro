import React, { useState, useEffect } from "react";
import Sideleft from "../../../../assets/Homepage/leftlogo.png";
import Sideright from "../../../../assets/Homepage/rightlogo.png";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Increaser from "./increaser";
import "./serve.css";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../../Services/MainServices/Components/Button/NewButton"

function Serve() {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  const variants = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 5,
        staggerChildren: 1,
      },
    },
  };

  return (
    <>
      <div className="flex flex-col items-center mb-10">
        <div
          id="servebg"
          className="flex flex-col md:flex-row justify-between items-center w-full mt-16 bg-Amber"
        >
          <div className="hidden md:block">
            <img className="h-64" src={Sideright} alt="Side Right" />
          </div>
          <div className="w-full md:w-auto flex justify-center md:justify-start">
            <Increaser />
          </div>
          <div className="hidden md:block">
            <img className="h-64" src={Sideleft} alt="Side Left" />
          </div>
        </div>
        {hasAnimated && (
          <motion.div
            id="Serve"
            className="h-24 w-10/12  text-white bg-increaser flex flex-col md:flex-row items-center justify-between rounded-xl -mt-10 p-4"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            <h1 className="mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl  font-black md:mb-0">Let's Get Your Project Started</h1>
           
             <Button buttonText="Get Started"   link="/contact" />
                
              
        
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Serve;
