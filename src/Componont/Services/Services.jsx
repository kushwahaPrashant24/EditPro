
import React, { useState,useRef, createRef } from "react";
import Counter from "./counter";
import Increase from "./increase";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import "./Services.css";
import { AiFillCloseCircle } from "react-icons/ai";
import service from "../../assets/final background for service section.mp4";
import logo from "../../assets/logo-noname.png";
import brand1 from "../../assets/Brand Identity.png";
import brand2 from "../../assets/Brand Consulting.png";
import brand3 from "../../assets/2d design.png";
import brand4 from "../../assets/Logo design.png";
import brand5 from "../../assets/graphic design.png";
import logo1 from "../../assets/logo1.png";
import logo5 from "../../assets/logo5.png";
import { MdKeyboardArrowRight } from "react-icons/md";




export default function Services() {

  const services = [
    {
      imgClass: "img1",
      title: "Branding",
      description: "Build a powerful brand with EditQuasar's comprehensive branding solutions. We create unique identities that resonate with your target audience.",
    },
    {
      imgClass: "img2",
      title: "Design Fusion",
      description: "Transform your ideas into captivating visuals with EditQuasar's Design Fusion package. We provide comprehensive design solutions tailored to your needs.",
    },
    {
      imgClass: "img3",
      title: "Digital Marketing",
      description: "Boost your online presence with EditQuasar's Digital Marketing solutions. We deliver targeted strategies to reach and engage your audience.",
    },
    {
      imgClass: "img4",
      title: "Experience Design",
      description: "Create intuitive and engaging digital experiences with EditQuasar's Experience Design package. We design interfaces that delight users.",
    },
    {
      imgClass: "img5",
      title: "Technology",
      description: "Empower your business with EditQuasar's Technology solutions. We offer innovative tech services to meet your unique needs.",
    },
    {
      imgClass: "img6",
      title: "Creativity",
      description: "Turn your ideas into stunning content with EditQuasar's Creativity package. We bring your creative visions to life.",
    },
  ];

  const absol = [
     [
            {
                image: brand1,
                heading: "Brand Identity:",
                subtitle: "Develop a strong and consistent brand identity with EditQuasar. Our experts craft a memorable presence for your business.",
                btntext: "Service Details"
            },
            {
                image: brand2,
                heading: "Brand Consulting:",
                subtitle: "Receive expert advice to enhance your brand’s market presence. Our consulting services help align your brand with its mission.",
                btntext: "Service Details"
            },
            {
                image: brand4,
                heading: "Logo Design:",
                subtitle: "Make a memorable impression with EditQuasar’s meaningful logo design. Our creative team ensures a logo that resonates.",
                btntext: "Service Details"
            },
            {
                image: brand3,
                heading: "2D/3D Visualization:",
                subtitle: "Bring your ideas to life with stunning 2D and 3D visualizations. We create visuals that captivate and engage.",
                btntext: "Service Details"
            },
            {
                image: brand5,
                heading: "Graphic Design:",
                subtitle: "Elevate your brand with our exceptional graphic design services. We create visuals that communicate your brand’s message effectively.",
                btntext: "Service Details"
            }
        ],
        [
            {
                image: logo5,
                heading: "Personalized Advertising Poster Creation:",
                subtitle: "Design impactful posters tailored to your specific needs. Our posters capture attention and convey your message effectively.",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Personal Portfolio Creation:",
                subtitle: "Build professional portfolios that highlight your achievements. Our personalized portfolios make you stand out.",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Company Portfolio Making:",
                subtitle: "Showcase your company’s success with comprehensive portfolios. We create portfolios that impress and inform.",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Personalized Business Card Making:",
                subtitle: "Create unique business cards that leave a lasting impression. Our custom designs reflect your professional identity.",
                btntext: "Service Details"
            },
            {
                image: logo5,
                heading: "Social Media Creatives & Other Advertising Materials:",
                subtitle: "Develop engaging creatives for effective social media campaigns. Our advertising materials drive engagement and visibility.",
                btntext: "Service Details"


            },
            {
              image: logo5,
              heading: "Brochures:",
              subtitle: "Design informative and visually appealing brochures. Our brochures communicate your message clearly and attractively.",
              btntext: "Service Details"
            }
        ],
     [
          {
              image: logo1,
              heading: "Search Engine Optimization:",
              subtitle: "Enhance your online visibility with our SEO services. We help you rank higher and attract more traffic.",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Social Media Management:",
              subtitle: "Manage your social presence and engage with your audience. Our experts handle your social media for maximum impact.",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Performance Marketing:",
              subtitle: "Drive targeted results with our data-driven marketing strategies. We optimize your campaigns for the best ROI.",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Content Marketing:",
              subtitle: "Create valuable content that resonates with your audience. Our content marketing boosts engagement and brand loyalty.",
              btntext: "Service Details"
          },
          {
              image: logo1,
              heading: "Marketing Automation:",
              subtitle: "Streamline your marketing efforts with automated solutions. We implement automation for efficient and effective campaigns.",
              btntext: "Service Details"
          },
          {
            image: logo1,
            heading: "Analytics:",
            subtitle:"Gain insights and measure the effectiveness of your campaigns. Our analytics services provide actionable data." ,
            btntext: "Service Details"
          }
      ],
      [
        {
            image: logo5,
            heading: "UI/UX Design:",
            subtitle: "Enhance user experiences with our intuitive UI/UX designs. We make interactions seamless and enjoyable.",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Website Design:",
            subtitle: "Create stunning and user-friendly websites with our design services. We ensure your site is both beautiful and functional.",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Mobile Experience:",
            subtitle: "Optimize mobile interfaces for seamless user interactions. Our designs enhance mobile usability and engagement.",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Commerce Experience:",
            subtitle: "Build effective and engaging e-commerce platforms. Our designs drive sales and improve user satisfaction.",
            btntext: "Service Details"
        },
        {
            image: logo5,
            heading: "Human Machine Interface (HMI):",
            subtitle: "Design advanced interfaces for seamless human-machine interaction. We create intuitive and efficient HMIs.",
            btntext: "Service Details"
        },
        {
          image: logo5,
          heading: "Applications & Dashboard:",
          subtitle: "Develop interactive applications and dashboards. Our designs provide clear, actionable insights and user-friendly experiences.",
          btntext: "Service Details"

        }
    ],
     [
      {
          image: logo1,
          heading: "Data & Analytics:",
          subtitle: "Leverage data for actionable insights and informed decisions. Our analytics services help you understand and grow your business.",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "Web Development:",
          subtitle: "Build robust and scalable web solutions with our development services. We create websites that are secure and efficient.",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "Mobile App Development:",
          subtitle: "Create user-friendly mobile applications with our expert team. We develop apps that enhance user experience and engagement.",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "E-commerce:",
          subtitle: "Develop effective e-commerce platforms to boost sales. Our solutions are tailored to your business needs.",
          btntext: "Service Details"
      },
      {
          image: logo1,
          heading: "AI & Machine Learning (ML):",
          subtitle: "Integrate advanced AI and ML solutions into your operations. We help you stay ahead with cutting-edge technology.",
          btntext: "Service Details"
      },
      {
        image: logo1,
        heading: "Cyber Security:",
        subtitle: "Protect your digital assets with our advanced cybersecurity measures. We ensure your data and systems are secure.",
        btntext: "Service Details"
      }
  ],
   [
      {
          image: logo5,
          heading: "Video Editing:",
          subtitle: "Create professional and engaging videos with our editing services. We enhance your content to captivate your audience.",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Photo Editing:",
          subtitle: "Enhance images to perfection with our photo editing services.We make your visuals look their best.",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Blog Writing:",
          subtitle: "Craft compelling and informative blog posts with our writing services. We help you connect with your audience.",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Content Writing:",
          subtitle: "Produce high-quality content that engages readers. Our writing services boost your brand’s visibility and credibility.",
          btntext: "Service Details"
      },
      {
          image: logo5,
          heading: "Resume Making:",
          subtitle: "Create unique cards for any occasion. Our personalized designs add a special touch to your celebrations.",
          btntext: "Service Details"
      },
      {
        image: logo5,
        heading: "Personalized Occasion Card Making:",
        subtitle:"Create unique cards for any occasion. Our personalized designs add a special touch to your celebrations.",
        btntext:"Service Details"
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
  console.log(ind)

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
            <div className="container1">
              <div className="cards">
                {absol[ind].map((item,index) => (
                  <div className="box" key={index}>
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
            </div>
          </div>

        </div>



        
        {/* contact section */}
        <div className="contact-section text-center flex h-[25vh] w-[40vw]  p-10 " style={{alignItems:"center",position:"relative" ,top:"-5vh", left:"28vw",paddingBottom:"4vh"}}>
          <div className="Contact text-center p-6" style={{border:"2px solid green",position:"relative",bottom:"5vh",borderRadius:"15px",backgroundColor:"green"}}>
            
            <Link to="/contact" className="text-lg text-center text-black font-bold text-richblack-100 md:text-2xl us" style={{position:"relative",bottom:"0vw"}}><p>CONTACT US</p></Link>
          </div>
          <div className="phone flex text-sm text-center text-black font-bold  text-richblack-200  " style={{position:"relative",bottom:"5vh",left:"5vw",fontSize:"1.5vw",lineHeight:"1.5"}} >
            <Link to="tel:+918967908081"><PhoneIcon style={{position:"relative",right:"2vw",top:"1vh",border:"2px solid green",fontSize:"4vw",borderRadius:"50%",backgroundColor:"green"}}/></Link>
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
