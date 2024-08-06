import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import NewButton from './../Button/NewButton'; // Adjust the import based on your project structure
import './Form.css'; // Assuming you save the CSS in a file named FormComponent.css
import sohamImage from './../../../../../assets/Services/sohamimage.jpg'; // Replace with actual path to image
import krishImage from './../../../../../assets/Services/krishsir.jpg'; // Replace with actual path to image

const Form= () => {
  return (
    <div className="new-section">
      <div className="section-container">
        <div className="text-and-images">
          <div className="text">
            <h2 className="heading">We Are Happy to Help You</h2>
            <p className="descrip">
              With touchpoints across numerous verticals and a passionate team at the helm, we have what it takes to give your brand the digital evolution.
            </p>
          </div>
          <div className="images">
            <div className="image-container">
              <img src={sohamImage} alt="Soham Mandal" />
              <div className="name">
                <p>Mr. Soham Mandal</p>
                <h2>Chief Executive Officer</h2>
                <a href="https://www.linkedin.com/in/soham-mandal-founder-and-ceo-08058427a/"><FaLinkedin /></a>
              </div>
            </div>
            <div className="image-container">
              <img src={krishImage} alt="Krish Kumar" />
              <div className="name">
                <p>Mr. Krish Kumar</p>
                <h2>Chief Operating Officer</h2>
                <a href="https://www.linkedin.com/in/krish-kumar/?originalSubdomain=in"><FaLinkedin /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-container">
          <form>
            <div className="form-section">
              <label htmlFor="firstname">First Name <span>*</span></label>
              <input type="text" id="firstname" name="firstname" placeholder="Enter First Name" required />
            </div>
            <div className="form-section">
              <label htmlFor="lastname">Last Name <span>*</span></label>
              <input type="text" id="lastname" name="lastname" placeholder="Enter Last Name" required />
            </div>
            <div className="form-section">
              <label htmlFor="email">Email <span>*</span></label>
              <input type="email" id="email" name="email" placeholder="Enter Email" required />
            </div>
            <div className="form-section">
              <label htmlFor="phonenumber">Phone Number <span>*</span></label>
              <input type="tel" id="phonenumber" name="phonenumber" placeholder="Enter Phone Number" required />
            </div>
            <div className="form-section">
              <label htmlFor="message">Tell us more <span>*</span></label>
              <textarea id="message" name="message" placeholder="Brief about your project" rows="5" required></textarea>
            </div>
            <div className='submit-button'>
              <NewButton buttonText="Submit" link="https://example.com" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
