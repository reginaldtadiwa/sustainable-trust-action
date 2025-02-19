import React from "react";
import "./Beneficiaries.css";

const Beneficiaries = () => {
  return (
    <section id="beneficiaries" className="beneficiaries">
      <h2>Our Beneficiaries</h2>
      <div className="beneficiaries-grid">
        <div className="beneficiary-card">
          <h3>People Living with Disabilities</h3>
          <p>
            We provide support and resources to empower individuals with
            disabilities, ensuring they have equal opportunities to thrive.
          </p>
        </div>
        <div className="beneficiary-card">
          <h3>Children</h3>
          <p>
            Our programs focus on education, health, and well-being to create a
            brighter future for children in need.
          </p>
        </div>
        <div className="beneficiary-card">
          <h3>Unemployed</h3>
          <p>
            We offer skill development and job placement services to help
            unemployed individuals regain their independence.
          </p>
        </div>
        <div className="beneficiary-card">
          <h3>Marginalized Communities</h3>
          <p>
            We work to uplift marginalized groups by providing access to
            resources, education, and opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Beneficiaries;
