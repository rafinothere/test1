import React from 'react';
import "../components/Home.css";

import studentImage from "../assets/student-boy.jpg";

const Home = () => {
  return (
    <>
      

      <section className="home-services-preview" id="services-preview">
        <h2>What makes us different?</h2>
        <div className="services-cards">
          <div className="service-card">
            <div className="icon-circle">📈</div>
            <h3>Build strong foundations </h3>
            <p>
              Our personalised approach ensures your child gains confidence and makes meaningful progress at every stage of their learning journey.
            </p>
            <button className="card-btn">Learn more</button>
          </div>

          <div className="service-card">
            <div className="icon-circle">🧑‍💻</div>
            <h3>Online & Personalised</h3>
            <p>
              Every child learns differently. We deliver structured, engaging online sessions 
              that fit your child’s pace and style, anytime, anywhere.
            </p>
            <button className="card-btn">Explore</button>
          </div>

          <div className="service-card">
            <div className="icon-circle">🛡️</div>
            <h3>Trusted Tutors</h3>
            <p>
              All tutors are DBS-checked, interviewed, and trained—ensuring a safe, 
              professional, and effective learning experience for your child.
            </p>
            <button className="card-btn">Why it matters</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
