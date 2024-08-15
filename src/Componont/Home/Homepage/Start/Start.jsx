import React from "react";
import Homevid1 from "../../../../assets/homevid1.mp4";
import Startcard from "./StartCard/StartCard";
import { motion } from "framer-motion";

function Start() {
  const variants = {
    initial: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 1,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.3, // Corrected spelling and timing
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="mt-8 md:mt-16 w-full md:w-6/12 lg:w-7/12 px-4 md:px-8 lg:px-10">
          <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
            Why choose Us
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2">
            What We Offer
          </h1>
          <div className="mt-6">
            <Startcard />
          </div>
        </div>
        <motion.div
          className="w-full md:w-5/12 lg:w-4/12 mb-6 md:mb-0 mt-32 md:mt-32 m-16"
          variants={variants}
          initial="initial"
          whileInView="animate"
        >
          <video className="w-full rounded-lg shadow-lg" autoPlay loop muted>
            <source src={Homevid1} type="video/mp4" />
          </video>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Start;
