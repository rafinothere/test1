import React from 'react';
import './ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Unlock your child's potential with the best professional tutors</h2>
      <div className="service-cards">
        <div className="service-card">
          <div className="icon icon1"></div>
          <h3>Achieve real progress</h3>
          <p>From ages 4–16, we tailor our approach to every child to best support their entire learning journey.</p>
          <button className="service-btn yellow">Find out more</button>
        </div>
        <div className="service-card">
          <div className="icon icon2"></div>
          <h3>You're in control</h3>
          <p>There's no joining fee, cancel anytime, and choose from centre or online tuition.</p>
          <button className="service-btn orange">Try for free</button>
        </div>
        <div className="service-card">
          <div className="icon icon3"></div>
          <h3>Professional tutors</h3>
          <p>All tutors are DBS checked, personally interviewed, trained by us – so you’re in safe hands.</p>
          <button className="service-btn navy">Meet our tutors</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

