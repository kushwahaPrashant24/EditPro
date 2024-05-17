import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

function Start() {
  return (
    <>
      <div className="flex justify-center flex-col">
        <div className=" h-10 bg-Lime-5 flex align-center justify center">
          <h1>Let's Get Your Project Started</h1>
          <Link to="/Services">
            <Stack spacing={2} direction="row">
              <Button variant="contained">View All</Button>
            </Stack>
          </Link>
        </div>
        <div className="bg-Amber">
          <h2>Why choose Us</h2>
          <h1>What We Offer</h1>

          <div id="1" className="flex flex-col gap-5">
            <div id="2" className="flex gap-5">
              <div id="3" className="bg-zinc">
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
              <div id="3" className="bg-zinc">
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
            </div>

            <div id="2" className="flex gap-5">
              <div id="3" className="bg-zinc">
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
              <div id="3" className="bg-zinc">
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
            </div>

            <div id="2" className="flex gap-5">
              <div id="3" className="bg-zinc">
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
              <div id="3" className="bg-zinc">
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Start;
