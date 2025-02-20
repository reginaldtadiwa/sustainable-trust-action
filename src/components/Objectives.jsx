import React from "react";
import "./Objectives.css";

// Import images for each objective
import objective1 from "./homepic.jpg"; // Replace with your image paths
import objective2 from "./homepic.jpg";
import objective3 from "./homepic.jpg";

const Objectives = () => {
  const objectives = [
    {
      text: "To stimulate community action to address the climate and environmental crisis.",
      image: objective1,
    },
    {
      text: "To initiate and promote inclusive community-based climate solutions.",
      image: objective2,
    },
    {
      text: "To create a sustainable clean environment.",
      image: objective3,
    },
  ];

  return (
    <section id="objectives" className="objectives">
      <h2>Our Objectives</h2>
      <div className="objectives-container">
        {objectives.map((objective, index) => (
          <div key={index} className="objective-card">
            <img src={objective.image} alt={`Objective ${index + 1}`} />
            <p>{objective.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
