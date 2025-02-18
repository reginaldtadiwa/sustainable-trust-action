import React from 'react';

const Objectives = () => {
  const objectives = [
    "To stimulate community action to address the climate and environmental crisis.",
    "To initiate and promote inclusive community-based climate solutions.",
    "To create a sustainable clean environment."
  ];

  return (
    <section id="objectives" className="objectives">
      <h2>Objectives</h2>
      <ul>
        {objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>
    </section>
  );
};

export default Objectives;