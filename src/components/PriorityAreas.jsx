import React from 'react';

const PriorityAreas = () => {
  const areas = [
    "Climate Change",
    "Waste Management",
    "Women and Youth Empowerment",
    "Drugs and Substance Abuse",
    "Indigenous Traditions and Culture"
  ];

  return (
    <section id="priority-areas" className="priority-areas">
      <h2>Priority Areas</h2>
      <div className="areas-list">
        {areas.map((area, index) => (
          <div key={index} className="area-card">
            <h3>{area}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriorityAreas;