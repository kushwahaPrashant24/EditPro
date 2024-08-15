import { Class } from "@mui/icons-material";
import React from "react";
import photo1 from "../../../assets/Industry/Industry Project/Automobile/6.webp";
import photo3 from "../../../assets/Industry/Industry Project/Construction/4.webp";
import photo5 from "../../../assets/Industry/Industry Project/Corporate/4.webp";
import photo6 from "../../../assets/Industry/Industry Project/Education/5.webp";
import photo7 from "../../../assets/Industry/Industry Project/Electronics/4.webp";
import photo8 from "../../../assets/Industry/Industry Project/Engineering Services/4.webp";
import photo9 from "../../../assets/Industry/Industry Project/Entertainment/3.png";
import photo10 from "../../../assets/Industry/Industry Project/Fashion/5.webp";
import photo11 from "../../../assets/Industry/Industry Project/Event Management/3.webp";
import photo12 from "../../../assets/Industry/Industry Project/Financial/5.webp";
import photo13 from "../../../assets/Industry/Industry Project/Food/5.webp";
import photo14 from "../../../assets/Industry/Industry Project/Healthcare/5.webp";
import photo15 from "../../../assets/Industry/Industry Project/Hospitality/5.webp";
import photo16 from "../../../assets/Industry/Industry Project/Information Technology/5.webp";
import photo17 from "../../../assets/Industry/Industry Project/Manufacturing/6.webp";
import photo18 from "../../../assets/Industry/Industry Project/Media/5.webp";
import photo19 from "../../../assets/Industry/Industry Project/Non-Profit Organisation/5.webp";
import photo20 from "../../../assets/Industry/Industry Project/Real Estate/5.webp";
import photo21 from "../../../assets/Industry/Industry Project/Retail/5.webp";
import photo22 from "../../../assets/Industry/Industry Project/Travel and Tourism/5.webp";


function Client() {
  return (
    <>
      <div className="bg-gray-800 m-10 p-10 rounded-lg shadow-lg">
        <div className="w-full text-center mb-10">
          <p className="text-5xl font-bold text-white">Our Clients</p>
          <p className="text-2xl text-white mt-4">
            Our clients mean the world to us, and we are equally important to them.
          </p>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo1} alt="Automobile" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo3} alt="Construction" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo5} alt="Corporate" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo6} alt="Education" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo7} alt="Electronics" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo8} alt="Engineering Services" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo9} alt="Entertainment" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo10} alt="Fashion" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo11} alt="Event Management" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo12} alt="Financial" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo13} alt="Food" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo14} alt="Healthcare" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo15} alt="Hospitality" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo16} alt="Information Technology" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo17} alt="Manufacturing" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo18} alt="Media" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo19} alt="Non-Profit Organisation" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo20} alt="Real Estate" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo21} alt="Retail" />
          </div>
          <div className="hover:scale-125 transform transition duration-300">
            <img className="h-40 w-40 object-contain" src={photo22} alt="Travel and Tourism" />
          </div>
        </div>
      </div>
    </>
  );
}


export default Client;
