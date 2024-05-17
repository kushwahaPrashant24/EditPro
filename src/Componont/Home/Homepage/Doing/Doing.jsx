import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";


function Doing() {
  return (
    <>
      <div className="w-full h-3/6 bg-Amber flex">
        <div className="w-1/2 bg-caribbeangreen-5 flex flex-col gap-4">
          <div>
            <h1 className="max-h-10  max-w-2xl sm:text-lg md:text-3xl divide-x-2 font-black  mt-3">
              OUR SERVICES
            </h1>
            <h1 className="text-7xl font-black">What we do</h1>
            <div className="h-4 w-48 bg-black rounded-md"></div>
          </div>
          <p>
            At EditQuasar, we offer a comprehensive range of digital solutions
            tailored to your needs. Our team specializes in Graphic Design, Web
            Development, Video Editing, Academic Writing, and Mobile App
            Development.
          </p>
          <br />
          <p>
            At EditQuasar, we offer a comprehensive range of digital solutions
            tailored to your needs. Our team specializes in Graphic Design, Web
            Development, Video Editing, Academic Writing, and Mobile App
            Development. We combine creativity with technical excellence to
            transform your ideas into stunning realities. Discover the
            difference today.
          </p>
          <Link to="/Services">
            <Stack  spacing={2} direction="row">
            <Button  variant="contained">View All</Button>
          </Stack>
          </Link>
        </div>
        <div className="w-1/2">
          <div className="bg-caribbeangreen-500 flex justify-around">
            <div className=" flex flex-col gap-5">
              <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
              <div className="w-36 bg-yellow-5">fdjfd</div>
            </div>
            <div className=" flex flex-col gap-5">
                <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
                <div className="w-36 bg-yellow-5">fdjfd</div>
                </div>    
          </div>
          <div className="bg-caribbeangreen-500 flex justify-around">
            <div className=" flex  flex-col gap-5">
              <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
              <div className="w-36 bg-yellow-5">fdjfd</div>
            </div>
            <div className=" flex  flex-col gap-5">
                <div className="w-36 min-h-36 mt-8 bg-white rounded-full"> </div>
                <div className="w-36 bg-yellow-5">fdjfd</div>
                </div>    
          </div>
        </div>
      </div>
    </>
  );
}

export default Doing;
