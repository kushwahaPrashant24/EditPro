import React from "react";
import "./Services.css";
import  service from "../../assets/servicebg.mp4"
import logo from "../../assets/logo-noname.png";

export default function Services() {
  return (
    <>
      <div>
        {/*   video section */}
        <div className="relative my-8  h-[88vh] -mt-36 mb-56 ">
          <video autoPlay loop muted>
            <source src={service} type="video/mp4" />
          </video>
          <div className=" absolute  top-[25%] left-[11%]  w-[50%] h-[60%] flex flex-col justify-evenly ">
            <p className="text-xl   sm:text-3xl lg:text-6xl text-richblack-5">
              Creating Experiences That Inspire:
            </p>
            
              <p className="text-sm hidden md:block  text-richblack-5 sm:text-lg">
                "We specialize in the art and science of designing, building,
                and marketing, mastering every detail to deliver exceptional
                results."
              </p>
            
          </div>
        </div>
        /*{" "}
        <div className="services-section">
          <p className="text-2xl bg-slate-700 py-4 font-extrabold md:text-4xl lg:text-6xl text-center text-richblack-100">
            Our Services
          </p>
          <div className="max-w-maxContent w-11/12 px-5 mx-auto">
            <p className="text-lg text-center text-black font-bold text-white md:text-3xl">
              "Unleash Creative Excellence with EditQuasar Your Partner for
              Crafting Captivating Masterpieces"
            </p>
          </div>
        </div>
        <div className="wrapper ">
          {/* img 1  */}
          <div className="cols">
            <div className="col">
              <div className="container">
                <div className="front img1">
                  <div className="inner">
                    <p className="rp">Photo Editing:</p>
                    <span>
                      Transform images with EditQuasar's professional photo
                      editing. Meticulous attention ensures stunning results.
                      For more samples and pricing.
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* img 2  */}
            <div className="col">
              <div className="container">
                <div className="front img2">
                  <div className="inner">
                    <p className="  "> Logo Designing:</p>
                    <span>
                      Make a memorable impression with EditQuasar's meaningful
                      logo design. Our creative team ensures a logo that
                      resonates.
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 3 */}
            <div className="col">
              <div className="container">
                <div className="front img3">
                  <div className="inner">
                    <p>Website Designing:</p>
                    <span>
                      Create a seamless online experience with EditQuasar's
                      website designing. Modern, responsive, engaging websites
                      that reflect your brand
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 4 */}
            <div className="col">
              <div className="container">
                <div className="front img4">
                  <div className="inner">
                    <p>Blog Writing:</p>
                    <span>
                      Fuel your digital presence with EditPro’s dynamic blog
                      writing. Compelling, informative content tailored to your
                      audience.{" "}
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 5  */}
            <div className="col">
              <div className="container">
                <div className="front img5">
                  <div className="inner">
                    <p>Video Editing:</p>
                    <span>
                      Elevate your storytelling with EditPro’s video editing.
                      Our editors blend footage, add effects, ensuring
                      captivating content.{" "}
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* img 6 */}
            <div className="col">
              <div className="container">
                <div className="front img6">
                  <div className="inner">
                    <p> Content Writing:</p>
                    <span>
                      Drive results with EditQuasar's content writing. Engaging
                      narratives that enhance your brand's visibility.
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 7 */}
            <div className="col">
              <div className="container">
                <div className="front img7">
                  <div className="inner">
                    <p>CV/Resume Making:</p>
                    <span>
                      Land your dream job with EditQuasar's professionally
                      crafted CVs/resumes. Showcase skills and achievements
                    </span>
                  </div>
                </div>
                <div className="back">
                  {" "}
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 8  */}
            <div className="col">
              <div className="container">
                <div className="front img8">
                  <div className="inner">
                    <p> Advertising Poster Creation:</p>

                    <span>
                      Convey messages effectively with EditQuasar's advertising
                      poster creation. Eye-catching designs that leave a lasting
                      impact
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 9  */}
            <div className="col">
              <div className="container">
                <div className="front img9">
                  <div className="inner">
                    <p>Personal Portfolio Creation:</p>
                    <span>
                      Highlight talents with EditQuasar's personal portfolio
                      creation. Showcase skills in a visually appealing manner.
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 10 */}
            <div className="col">
              <div className="container">
                <div className="front img10">
                  <div className="inner">
                    <p>Personalized Occasion Card Making:</p>
                    <span>
                      Celebrate moments with EditQuasar's personalized occasion
                      card making. Custom cards that reflect event uniqueness
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 11 */}
            <div className="col">
              <div className="container">
                <div className="front img11">
                  <div className="inner">
                    <p>Company Portfolio Making::</p>
                    <span>
                      mpress with EditQuasar's comprehensive company portfolio.
                      Highlight strengths and achievements professionally.
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 12 */}
            <div className="col">
              <div className="container">
                <div className="front img12">
                  <div className="inner">
                    <p>Personalized Business Card Making:</p>
                    <span>
                      Stand out with EditQuasar's personalized business card
                      making. Unique, professional cards that leave a lasting
                      impression
                    </span>
                  </div>
                </div>
                <div className="back">
                  <div className="inner">
                    <div className="flex flex-col justify-center  items-center  my-8">
                      <button className="bg-blue-200 mx-auto   hover:bg-blue-900 text-richblack-5 font-bold  rounded-lg mb-6 mt-6 px-3 py-1 transition-transform duration-300 transform hover:-translate-y-3">
                        Service Specifications
                      </button>
                      <img
                        src={logo}
                        alt="logo"
                        width={300}
                        className="absolute z-[-50] "
                      />
                      <button className="bg-blue-200 mx-auto  hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                        View Pricing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* img 13 */}
          </div>
        </div>
      </div>
    </>
  );
}
