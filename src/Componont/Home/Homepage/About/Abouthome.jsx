import React from "react";
import Model2 from "../../../../assets/model2.png";

function Abouthome() {
  return (
    <>
      <div className="flex">
        <div className="w-4/12  bg-pink-500">
          <img src={Model2} />
        </div>
        <div className="w-8/12  bg-pink-5">
          <h2>About Us</h2>
          <h1>We Harness creativity to Serve Our Clients</h1>
          <p>
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
