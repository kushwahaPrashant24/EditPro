import React, { useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Main() {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <>
      <div className="h-screen  flex justify-center items-center p-36">
        <div className="w-1/2 flex flex-col gap-28">
          <h1 className="text-7xl font-thin text-white">
            Advancing Industry Innovation
          </h1>
          <div>
            <h2 className="text-xl text-white">
              Delivering excellence across diverse industries and making a
              significant impact in each.
            </h2>
            <div className="w-56 sticky bottom-0 border-t-1 mt-10 bg-white">
              <button className="w-56 h-12 border-2 ">
                Let's talk <ArrowForwardIcon />
              </button>
            </div>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
        >
          <div className="w-1/2 h-96 flex  items-end mt-96 m-5">
            <h1 id="industrycount" className="text-[300px] text-white">
              {counterOn && (
                <CountUp className="text-[300px] " start={0} end={10} delay={0} />
              )}
              +
            </h1>
          </div>
        </ScrollTrigger>
      </div>
    </>
  );
}

export default Main;
