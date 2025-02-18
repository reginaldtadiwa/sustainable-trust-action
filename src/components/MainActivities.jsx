import React from 'react';

const MainActivities = () => {
  const activities = [
    "Community Sanitization",
    "Clean Up Campaigns",
    "Tree Planting",
    "Distribution of Sanitary Items"
  ];

  return (
    <section id="activities" className="main-activities">
      <h2>Main Activities</h2>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div key={index} className="activity-card">
            <h3>{activity}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainActivities;