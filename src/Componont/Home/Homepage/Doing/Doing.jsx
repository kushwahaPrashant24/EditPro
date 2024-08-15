import React from "react";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Card1 from "./Cards/Card1";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "../../../Services/MainServices/Components/Button/NewButton";

function Doing() {
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
        className="w-full h-auto flex flex-col md:flex-row mt-10"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <div className="w-full md:w-1/2 px-4 md:px-10 flex flex-col gap-4 mt-10 md:mt-24">
          <div className="text-center md:text-left">
            <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-head2">
              OUR SERVICES
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mt-2">
              What we do
            </h1>
          </div>
          <p className="text-lg sm:text-xl font-semibold text-center md:text-left text-head2 mt-4">
            At EditQuasar, we offer a comprehensive range of digital solutions
            tailored to your needs. Our team specializes in Graphic Design, Web
            Development, Video Editing, Academic Writing, and Mobile App
            Development.
          </p>
          <p className="text-lg sm:text-xl font-semibold text-center md:text-left text-head2 mt-2">
            We combine creativity with technical excellence to transform your
            ideas into stunning realities. Discover the difference today.
          </p>
          <div className="mt-6 md:mt-8">
            <Button buttonText="View All" link="/Services" />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-8 mt-10 md:mt-0">
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            <Card1 />
            <Card2 />
          </div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            <Card3 />
            <Card4 />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Doing;
