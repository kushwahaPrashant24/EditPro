import React from "react";
import Model2 from "../../../../assets/model2.png";

function Abouthome() {
  return (
    <>
      <div className="flex">
        <div className="w-4/12  ">
          <img className="h-full w-full" src={Model2} />
        </div>
        <div className="w-8/12  flex flex-col gap-5 ">
        <div>
          <h2 className="w-full sm:w-3/4 md:w-1/2 text-lg md:text-xl lg:text-2xl font-medium text-left text-head2">About Us</h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white">We Harness creativity to Serve Our Clients</h1>
          </div>
          <p className="text-head text-lg sm:text-xl font-semibold">
            At EditQuasar, creativity isn't just a tool; it's our guiding
            principle. We believe in harnessing the power of imagination to
            craft solutions that not only meet but exceed our clients'
            expectations. From innovative designs to captivating content, we
            weave creativity into every aspect of our work, ensuring that each
            project is a masterpiece in its own right.
          </p>
          <div className="bg-Amber flex flex-col gap-16">
          <div className=" flex justify-around ">
            <div className="bg-pink-300">
              <div>
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
              
            </div>
            <div>
              <div>
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
          <div className=" flex justify-around">
            <div className="bg-pink-300">
              <div>
                <div className="flex bg-caribbeangreen">
                  <div className="h-36 w-36 bg-pure-greys-5 rounded-full"></div>
                  <h1 className="">sdfbadlf</h1>
                </div>
                <p className="">
                  Providing customized services for individualized results.
                </p>
              </div>
              
            </div>
            <div>
              <div>
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
        </div>
      </div>
    </>
  );
}

export default Abouthome;
