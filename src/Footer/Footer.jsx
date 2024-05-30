import React from "react";
import Logotwo from "../assets/logo-noname.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { motion } from "framer-motion";



 function Footer() {
    return <>
      <section>
            <div className="sm bg-myblue flex justify-center flex-col items-center flex-wrap gap-6 py-10">
                  <img className="max-w-24 " src={Logotwo} />
                  <h1 className="text-center text-7xl text-white font-black  ">Don't be shy and <br />talk to us?</h1>
                  <h3 className="text-center text-dimwite">SAY HI AT EDITQUASAR@GMAIL.COM
                  </h3>
                  <div className="flex gap-5">
                   <motion.a 
                   whileHover={{ scale: 1.4 }} // Define the scale change on hover
                    transition={{ duration: 0.3 }} 
                    href="https://www.instagram.com/editquasar?igsh=MTVlYzBlb24zN3RhcQ==" target="main">
                    <InstagramIcon className="text-white" /> 
                    </motion.a>
                   <motion.a
                     whileHover={{ scale: 1.4 }} // Define the scale change on hover
                     transition={{ duration: 0.3 }} 
                    href="">
                    <TwitterIcon className="text-white" />
                    </motion.a>
                    <motion.a 
                    whileHover={{ scale: 1.4 }} // Define the scale change on hover
                    transition={{ duration: 0.3 }} 
                    href="https://www.linkedin.com/company/editquasar-creativemagic/" target="main">
                    <LinkedInIcon className="text-white"/>
                    </motion.a>
                   <motion.a 
                    whileHover={{ scale: 1.4 }} // Define the scale change on hover
                    transition={{ duration: 0.3 }} 
                   href="">
                   <YouTubeIcon className="text-white"/>
                   </motion.a>
                  </div>
                  <p className="text-center text-white">© 2023 EditQuasar | Powered by SensioSynci | All Rights Reserved</p>
            </div>
            </section>
    </>
} 

export default Footer;