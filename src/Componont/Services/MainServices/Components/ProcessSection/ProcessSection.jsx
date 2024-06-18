import React, { useState } from 'react';
import './ProcessSection.css'; // Import CSS file

const OurService = ({  title, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <section className="our-service">
      
        <div className="service-description">
          <div className="title" onClick={toggleDescription}>
            {title}
          </div>
          {showDescription && (
            <div className="description">
              <p>{description}</p>
            </div>
          )}
        </div>
     
    </section>
  );
};

export default OurService;
