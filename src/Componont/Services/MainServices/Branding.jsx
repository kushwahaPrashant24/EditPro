import React from 'react';
import './Branding.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import ProcessSection from './Components/ProcessSection/ProcessSection'

import brandVideo from "../../../assets/Services/Branding.mp4";
import ser_img from '../../../assets/video.jpg'



const Branding = () => {



    return (
        <>
        <ServiceHeader video_link={brandVideo}/>
        
        <div className='ServicesGrid'>
        <ServiceCard img_url={ser_img} title='Hello Word' description='10000' link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7'/>
        
        </div>
        <section className="our-service">
        <div className="service-content">
         <div className="service-image">
          <img src={ser_img} alt="Service" />
          </div>
          <div className='FAQ'>

          <ProcessSection
             imageSrc={ser_img}
             title="Service Title 1"
             description="This is a brief description of Service 1."/>
             <ProcessSection
             imageSrc={ser_img}
             title="Service Title 1"
             description="This is a brief description of Service 1."/>
             </div>
         </div>
         </section>
         <div className='FAQ'>
            <p className='Tittle'>FAQ</p>
            <ProcessSection
             imageSrc={ser_img}
             title="Service Title 1"
             description="This is a brief description of Service 1."/>
             <ProcessSection
             imageSrc={ser_img}
             title="Service Title 1"
             description="This is a brief description of Service 1."/>

         </div>
         <div className='FAQ'>
         <p className='Tittle'>Related Services</p>
         <div className='ServicesGrid'>
         <ServiceCard img_url={ser_img} title='Hello Word' description='10000' link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7'/>
         <ServiceCard img_url={ser_img} title='Hello Word' description='10000' link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7'/>
         </div>
         </div>
        </>
    );
};

export default Branding;
