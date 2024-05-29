
import React, { useState,useRef, createRef } from "react";
import Counter from "./counter";
import Increase from "./increase";
import { Link } from "react-router-dom";
import "./Services.css";
import { AiFillCloseCircle } from "react-icons/ai";
import service from "../../assets/final background for service section.mp4";
import logo from "../../assets/logo-noname.png";
import logo5 from "../../assets/logo5.png";
import logo1 from "../../assets/logo1.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowRoundDown } from "react-icons/io";



export default function Services() {

  const services = [
    {
      imgClass: "img1",
      title: "Branding",
      description: "Transform images with EditQuasar's professional photo editing. Meticulous attention ensures stunning results. For more samples and pricing.",
    },
    {
      imgClass: "img2",
      title: "Design Fusion",
      description: "Make a memorable impression with EditQuasar's meaningful logo design. Our creative team ensures a logo that resonates.",
    },
    {
      imgClass: "img3",
      title: "Digital Marketing",
      description: "Create a seamless online experience with EditQuasar's website designing. Modern, responsive, engaging websites that reflect your brand.",
    },
    {
      imgClass: "img4",
      title: "Experience Design",
      description: "Fuel your digital presence with EditPro’s dynamic blog writing. Compelling, informative content tailored to your audience.",
    },
    {
      imgClass: "img5",
      title: "Technology",
      description: "Elevate your storytelling with EditPro’s video editing. Our editors blend footage, add effects, ensuring captivating content.",
    },
    {
      imgClass: "img6",
      title: "Creativity",
      description: "Drive results with EditQuasar's content writing. Engaging narratives that enhance your brand's visibility.",
    },
  ];

  const absol = [
     [
            {
                image: logo1,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo1,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo1,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo1,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo1,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            }
        ],
        [
            {
                image: logo5,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Sub Service Name",
                subtitle: "A supporting Sentence",
                btntext: "Service Details"
            }
        ],
     [
          {
              image: logo1,
              heading: "Sub Service Name",
              subtitle: "A supporting Sentence",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Sub Service Name",
              subtitle: "A supporting Sentence",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Sub Service Name",
              subtitle: "A supporting Sentence",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Sub Service Name",
              subtitle: "A supporting Sentence",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Sub Service Name",
              subtitle: "A supporting Sentence",
              btntext: "Service Details"
          }
      ],
      [
        {
            image: logo5,
            heading: "Sub Service Name",
            subtitle: "A supporting Sentence",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Sub Service Name",
            subtitle: "A supporting Sentence",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Sub Service Name",
            subtitle: "A supporting Sentence",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Sub Service Name",
            subtitle: "A supporting Sentence",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Sub Service Name",
            subtitle: "A supporting Sentence",
            btntext: "Service Details"
        }
    ],
     [
      {
          image: logo1,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      }
  ],
   [
      {
          image: logo5,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Sub Service Name",
          subtitle: "A supporting Sentence",
          btntext: "Service Details"
      }
  ]
];




  const [active, setActive] = useState('navBar')

  
  // function to toggle navbar 
  const showNav = () => {
    setActive('navBar activenavBar');
  }

  const removeNavbar = () => {
    setActive('navBar');
    
  }
  const [ind,setInd]=useState(0);

  const slider = useRef();

  let f=0;
  // const downslide =()=>{
  //   slider.current.style.transform='translateY(-230px)';  
  // }

  const downslide = () => {
    // setCurrentSlide((prevSlide) => (prevSlide + 1) % absol[ind].length);
     slider.current.scrollIntoView({
      behavior: "smooth",
      block:"nearest" ,
    });
  };
  
  

  const con=useRef();

  if (con.current && (ind === 0 || ind === 1)) {
    con.current.style.transform = 'translateY(50px)';
  }
  else if(con.current && (ind === 2 || ind === 3)) {
    con.current.style.transform = 'translateY(160px)';
  }
  else if(con.current && (ind === 4 || ind === 5)) {
    con.current.style.transform = 'translateY(280px)';
  }

  return (
    <>
      <div>
        {/*   video section */}
        <div className="relative my-8  h-[88vh] -mt-36 mb-56  ">
          <video autoPlay loop muted>
            <source src={service} type="video/mp4" />
          </video>
          <div className="absolute top-[25%] left-[11%]  w-[50%] h-[60%] flex flex-col justify-evenly videosection">
            <p className="text-xl   sm:text-3xl lg:text-6xl text-richblack-5  ">
              Creating Experiences That Inspire:
            </p>

            <p className="text-sm hidden md:block  text-richblack-5 sm:text-lg">
              We specialize in the art and science of designing, building,
              and marketing, mastering every detail to deliver exceptional
              results.
            </p>

          </div>
        </div>
        {/* service section */}
        <div className="services-section">
          <p className="text text-center font-bold">
            Our Services
          </p>
          <div className="max-w-maxContent w-11/12 px-5 mx-auto">
            <p className="text-lg text-center text-black font-bold text-richblack-100 md:text-4xl pb-2 text2">
              WHAT WE <span className="text-lg md:text-4xl text-[#7ED957] ">OFFER </span>
            </p>
            <p className="text-sm text-center text-black font-bold  text-richblack-100 md:text-1xl md:pb-4 para">
              Elevate Your Expectations.
            </p>


            <p className="text-center text-white pb-4 ">
              Welcome to EditQuasar, your premier destination for a comprehensive suite of digital services designed  to amplify your online presence and fuel your success in the digital world. Our team of highly skilled  professionals is committed to delivering innovative solutions that are precisely tailored to meet your  unique needs. We take pride in our client-centric approach, ensuring that we consistently provide top tier services that surpass expectations. Collaborate with us to unlock your digital potential and embark  on a path of sustained growth and success in today’s dynamic digital landscape.

            </p>
            <div className="w-full md:w-auto flex justify-center md:justify-start counter">
              <Counter />
            </div>



          </div>
          <div className="max-w-maxContent w-11/12 px-5 mx-auto">
            <p className="text-lg text-center text-black font-bold text-richblack-100 md:text-5xl pb-3 pt-20 text3">
              Unleashing Digital <span className="text-lg md:text-5xl text-[#7ED957]">Excellence</span>
            </p>
            <p className="text-sm text-center text-black font-bold  text-richblack-100 md:text-1xl md:pb-4 para1">
              Explore our comprehensive suite of top-tier digital services today.
            </p>

          </div>

        </div>


        <div className="wrapper">
          <div className="cols">
            {services.map((item, index) => (
              <div className="col" key={index}>
                <div className="container">
                  <div className={`front ${item.imgClass}`}>
                    <div className="inner">
                      <p className="rp">{item.title}:</p>
                      <span>
                        {item.description}
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
                        <button onClick={()=>{setInd(index);showNav()}} className="bg-blue-200  mx-aut o hover:bg-blue-900 text-richblack-5 font-bold py-1 px-3 rounded-lg mb-5 transition-transform duration-300 transform hover:-translate-y-3">
                          View Pricing
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>

          <div className={active} ref={con}>
            <div className="container1" id="container1" >
              <div className="cards" >
                {absol[ind].map((item,index) => (
                  <div className="box" id="box"  key={index} ref={slider} >
                    <div className="head">
                      <img src={item.image} alt="" className="logo" />
                      <h2 className="headingg">{item.heading}</h2>
                    </div>
                    <span className="support">{item.subtitle}</span>
                    <button className="btn1">{item.btntext}<span> <MdKeyboardArrowRight /></span> </button>
                  </div>

                ))}

              </div>
              <div onClick={removeNavbar} className="closeNavbar">
                <AiFillCloseCircle className='icon' />
              </div>

              <div className="arr" onClick={downslide} >
              <IoIosArrowRoundDown />
              </div>

            </div>
          </div>

        </div>



        {/* contact section */}
        <div className="contact-section text-center flex h-[25vh] w-[40vw]  p-10 " style={{ alignItems: "center", position: "relative", top: "-5vh", left: "28vw", paddingBottom: "4vh" }}>
          <div className="Contact text-center p-6" style={{ border: "2px solid green", position: "relative", bottom: "5vh", borderRadius: "15px", backgroundColor: "green" }}>

            <Link to="/contact" className="text-lg text-center text-black font-bold text-richblack-100 md:text-2xl us" style={{ position: "relative", bottom: "0vw" }}><p>CONTACT US</p></Link>
          </div>
          <div className="phone flex text-sm text-center text-black font-bold  text-richblack-200  " style={{ position: "relative", bottom: "4vh", left: "7vw", fontSize: "1.5vw", lineHeight: "1.5" }} >
            <i aria-hidden="true" className="fas fa-phone-alt"></i>
            <div>
              <a href="tel:+918967908081"><p>+91 8967908081</p></a>
              <p>Talk to an Expert</p>
            </div>


          </div>



        </div>
        {/* increase */}
        <div className="relative  md:w-auto flex justify-center md:justify-start ">
          <Increase />
        </div>
      </div>
    </>
  );
}
