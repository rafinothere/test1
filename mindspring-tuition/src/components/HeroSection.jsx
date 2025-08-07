import React from 'react';
import './HeroSection.css';
import boyImage from '../assets/student-boy.jpg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Achieve 11+ Success with Confidence</h1>
          <p>Tailored lessons, expert tutors, and a proven track record of results.</p>
          <button>📘 Contact Us</button>
        </div>
        <div className="hero-image">
          <img src={boyImage} alt="Student studying" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

