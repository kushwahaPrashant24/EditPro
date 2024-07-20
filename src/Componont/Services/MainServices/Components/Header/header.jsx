import React from 'react';
import './header.css'; // Make sure the path is correct

const ServiceHeader = ({ video_link }) => {
    return (
        <div className="service-header">
            <video className="service-header-video" autoPlay loop muted>
                <source src={video_link} type="video/mp4" />
            </video>
            <div className="service-header-overlay">
                <p className="service-header-title">Branding</p>
                <p className="service-header-description">We build brands that emotionally connect</p>
            </div>
        </div>
    );
};

export default ServiceHeader;
