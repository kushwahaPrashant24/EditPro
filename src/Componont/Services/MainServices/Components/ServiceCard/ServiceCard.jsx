import React from 'react';
import "./ServiceCard.css"; // Import CSS file

const ServiceCard = ({img_url, title, description, link}) => {
    return (
        <>
        
        <div className="col-lg-4 col-md-6 mb-4">
      <div className="card service-card">
        <div className="card-body">
          <div className="service-image">
            <img
              src={img_url}
              className="img-fluid"
              alt="Service Image"
            />
          </div>
          <h5 className="card-title mt-3">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={link} className="btn btn-primary stretched-link">
            Learn More
          </a>
        </div>
      </div>
    </div>
        </>
    );
};

export default ServiceCard;
