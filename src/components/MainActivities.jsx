import React from "react";
import "./MainActivities.css";
import aboutImage from "./homepic.jpg"; // Replace with your image path

const MainActivities = () => {
  return (
    <section id="activities" className="main-activities">
      <h2>Main Activities</h2>
      <div className="activities-grid">
        <div className="content">
          <h2>Helping is a Great Virtue for Every Human</h2>
          <p>
            Helping the community fosters unity, compassion, and progress. When
            we support those in need, we create a better society where everyone
            has opportunities to thrive. Small acts of kindness—whether through
            volunteering, donations, or mentorship—can make a lasting impact.
            Strong communities lead to safer neighborhoods, better education,
            and economic growth. By uplifting others, we also find purpose and
            fulfillment in our own lives. A thriving community benefits
            everyone, ensuring a brighter future for generations to come.
          </p>
          <ul>
            <li>Tree Planting</li>
            <li>Waste Segregation and Recycling</li>
            <li>Clean-up Campaigns</li>
            <li>Distribution of Sanitary Items</li>
            <li>Refuse Collection</li>
          </ul>
        </div>
        <div className="side-image">
          <img src={aboutImage} alt="Image 1" />
        </div>
      </div>
    </section>
  );
};

export default MainActivities;
