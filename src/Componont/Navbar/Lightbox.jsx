import React, { useState } from 'react';
import SelectableButton from './selectableButton/selectableButton';
import './Lightbox.css';

const Lightbox = ({ onClose }) => {
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleSelection = (mainService, subService = null) => {
    if (subService) {
      // Toggle subservice selection
      setSelectedServices(prevSelected => {
        const isSelected = prevSelected.includes(subService);
  
        if (isSelected) {
          return prevSelected.filter(service => service !== subService);
        } else {
          return [...prevSelected, subService];
        }
      });
    } else {
      // Toggle main service and all its subservices
      const allSubservices = services.find(service => service.name === mainService).subservices;
      const areAllSelected = allSubservices.every(subservice => selectedServices.includes(subservice));
  
      setSelectedServices(prevSelected => {
        if (areAllSelected) {
          return prevSelected.filter(service => !allSubservices.includes(service));
        } else {
          return [...new Set([...prevSelected, ...allSubservices])]; // Use Set to avoid duplicates
        }
      });
    }
  };
  
  
  

  const services = [
    {
      name: "Branding",
      subservices: ["Brand Identity", "Brand Consulting", "Logo Design", "2D/3D Visualisation", "Graphic Design"]
    },
    {
      name: "Design Fusion",
      subservices: ["Personalized Advertising Poster Creation", "Personal Portfolio Creation", "Company Portfolio Making", "Personalized Business Card Making", "Social Media Creatives & Other Advertising Materials", "Brochures"]
    },
    {
      name: "Digital Marketing",
      subservices: ["Search Engine Optimisation", "Social Media Management", "Performance Marketing", "Content Marketing", "Marketing Automation", "Analytics"]
    },
    {
      name: "Experience Design",
      subservices: ["UI/UX Design", "Website Design", "Mobile Experience", "Commerce Experience", "Human Machine Interface (HMI)", "Applications & Dashboard"]
    },
    {
      name: "Technology",
      subservices: ["Data & Analytics", "Web Development", "Mobile App Development", "E-commerce", "AI & Machine Learning (ML)", "Cyber Security"]
    },
    {
      name: "Creativity",
      subservices: ["Video Editing", "Photo Editing", "Blog Writing", "Content Writing", "Resume Making", "Personalized Occasion Card Making"]
    }
  ];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="title">Customize Your Services & Schedule a Consultation</h2>
        <h3 className="sub-title">Tailor your needs and book a session with our experts today.</h3>
        {services.map(service => (
  <div className="main-service" key={service.name}>
    <div className="main-service-button">
      <SelectableButton
        content={service.name}
        isSelected={selectedServices.includes(service.name)}
        onClick={() => toggleSelection(service.name)}
      />
    </div>
    <div className="main-service-buttons">
      {service.subservices.map(subservice => (
        <SelectableButton
          key={subservice}
          content={subservice}
          isSelected={selectedServices.includes(subservice)}
          onClick={() => toggleSelection(service.name, subservice)}
        />
      ))}
    </div>
  </div>
))}
       
      </div>
    </div>
  );
};
export default Lightbox;
