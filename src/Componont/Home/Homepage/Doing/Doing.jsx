import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Card1 from "./Cards/Card1";

function Doing() {
  return (
    <>
      <div className="w-full h-3/6 flex flex-col md:flex-row mt-10">
  <div className="w-full md:w-1/2 pl-4 md:pl-10 flex flex-col gap-4 mt-44">
    <div>
      <h1 className="w-full sm:w-3/4 md:w-1/2 text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">
        OUR SERVICES
      </h1>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">
        What we do
      </h1>
      <div className="h-4 w-24 sm:w-36 md:w-48 bg-pure-greys-500 rounded-md"></div>
    </div>
    <p className="text-head text-lg sm:text-xl font-semibold">
      At EditQuasar, we offer a comprehensive range of digital solutions tailored to your needs. Our team specializes in Graphic Design, Web Development, Video Editing, Academic Writing, and Mobile App Development.
    </p>
    <p className="text-head text-lg sm:text-xl font-semibold">
      We combine creativity with technical excellence to transform your ideas into stunning realities. Discover the difference today.
    </p>
    <Link to="/Services">
      <Stack spacing={2} direction="row">
        <Button variant="contained">View All</Button>
      </Stack>
    </Link>
  </div>
  <div className="w-full md:w-1/2 flex flex-wrap flex-col gap-10">
    <div className="w-full  flex  justify-center gap-10">
      <Card1 />
      <Card1 />
    </div>
    <div className="w-full  flex   justify-center gap-10">
      <Card1 />
      <Card1 />
    </div>
  </div>
</div>

    </>
  );
}

export default Doing;
