import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Building a Sustainable Future</h1>
        <p>
          Join us in creating a cleaner, greener, and more inclusive community.
        </p>
        <button className="cta-button">Get Involved</button>
      </div>
    </section>
  );
};

export default Hero;
