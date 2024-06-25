import React, { useRef, useState, useEffect } from 'react';
import './Branding.css'; // Import CSS file
import ServiceHeader from './Components/Header/header';
import ServiceCard from './Components/ServiceCard/ServiceCard';
import ProcessSection from './Components/ProcessSection/ProcessSection';

import brandVideo from "../../../assets/Services/Branding.mp4";
import serImg from '../../../assets/Services/image.webp';
import descriptionVideo from "../../../assets/Services/descriptionVideo.mp4";
import processVideo from "../../../assets/Services/Companyprocess.mp4";

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
  </svg>
);

const PauseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" fill="white"/>
  </svg>
);

const MuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V15H12L17 20V4L12 9H9Z" fill="white"/>
  </svg>
);

const UnmuteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 9V15H12L17 20V4L12 9H9Z" fill="white"/>
    <line x1="1" y1="1" x2="23" y2="23" stroke="white" strokeWidth="2"/>
  </svg>
);

const Branding = () => {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePauseClick = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  const handleMuteClick = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
          setIsPaused(false);
        } else {
          videoElement.pause();
          setIsPaused(true);
        }
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  useEffect(() => {
    const videoElement = document.getElementById('process-video');
    if (videoElement) {
      videoElement.play(); // Ensure video starts playing when component mounts
    }
  }, []);

  return (
    <>
      <ServiceHeader video_link={brandVideo} />

      <div className='branding-description'>
        <p className='text'>People's expectations of brands have never been higher. They want brands to go beyond the ordinary. EditQuasar inspires brands and individuals to make a meaningful impact.</p>
        <div style={{ position: 'relative' }}>
          <video className='description-video' ref={videoRef} loop>
            <source src={descriptionVideo} type='video/mp4' />
          </video>
          <button className='pause-button' onClick={handlePauseClick}>
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
          <button className='mute-button' onClick={handleMuteClick}>
            {isMuted ? <UnmuteIcon /> : <MuteIcon />}
          </button>
        </div>
      </div>

      <p className='Title'>Services</p>

      <div className='ServicesGrid'>
        <ServiceCard 
          img_url={serImg} 
          title='Brand Consulting' 
          description='Helping businesses dissolve complexity and stay focused on their core competencies for fast results.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Logo Design' 
          description="Creating unique and memorable logos that reflect your brand's identity and values." 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='2D/3D Visualization' 
          description='Bringing your ideas to life with stunning 2D and 3D visualizations that captivate and engage.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Graphic Design' 
          description='Crafting visually compelling designs that communicate your message and elevate your brand.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
        <ServiceCard 
          img_url={serImg} 
          title='Brand Identity' 
          description='Developing a cohesive and powerful brand identity that resonates with your audience and sets you apart from the competition.' 
          link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' 
        />
      </div>
      <p className='Title'>Our Process</p>
      <section className="our-process">
     
            <video className='process-video' autoPlay loop muted>
              <source src={processVideo} type='video/mp4' />
            </video>
          
            <div className='processes'>
            <ProcessSection
              title="Target Audience Research"
              description="We conduct in-depth research to understand your target audience, their needs, and preferences." />
            <ProcessSection
              title="Brand Strategy Development"
              description="We develop a comprehensive brand strategy that aligns with your business goals and resonates with your audience." />
            <ProcessSection
              title="Brand Messaging Development"
              description="We create compelling brand messages that effectively communicate your brand’s value and vision." />
            <ProcessSection
              title="Brand Design"
              description="We design visually appealing and cohesive brand elements that reflect your brand’s identity." />
            <ProcessSection
              title="Brand Style Guide Creation"
              description="We create detailed brand style guides to ensure consistency in your brand’s visual and verbal elements across all channels." />
            <ProcessSection
              title="Brand Implementation "
              description="We put your branding into practice across all marketing materials, ensuring a cohesive and impactful brand presence." />
            </div>
        
      </section>

      <div className='FAQ'>
        <p className='Title'>FAQ</p>
        <ProcessSection
          imageSrc={serImg}
          title="Service Title 1"
          description="This is a brief description of Service 1." />
        <ProcessSection
          imageSrc={serImg}
          title="Service Title 1"
          description="This is a brief description of Service 1." />
      </div>

      <div className='FAQ'>
        <p className='Title'>Related Services</p>
        <div className='ServicesGrid'>
          <ServiceCard img_url={serImg} title='Hello World' description='10000' link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' />
          <ServiceCard img_url={serImg} title='Hello World' description='10000' link='https://chatgpt.com/c/47fb970e-e929-4166-a2f5-c444d2a712e7' />
        </div>
      </div>
    </>
  );
};

export default Branding;
