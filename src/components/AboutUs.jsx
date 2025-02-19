import React from 'react';
import './Aboutus.css';
import aboutImage from './homepic.jpg'; // Replace with your image path

const Aboutus = () => {
  return (
    <section id="aboutus" className="aboutus">
      <div className="aboutus-container">
        <div className="aboutus-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="aboutus-content">
          <h2>About Us</h2>
          <p>
            We are a dedicated team working towards building a sustainable future. Our mission is to
            create a cleaner, greener, and more inclusive community by addressing the climate and
            environmental crisis through innovative solutions and community action.
          </p>
          <p>
            Join us in our journey to make a positive impact on the environment and society. Together,
            we can create a better world for future generations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;