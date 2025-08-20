import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about-section" aria-labelledby="about-title">
      <div className="about-wrap">

        {/* Header */}
        <header className="about-head">
          <span className="about-pill">Our Story</span>
          <h1 id="about-title">About Mindspring Tuition</h1>
          <div className="about-intro">
            <p>
              Hi, we’re so glad you found us! With over 15 years of experience in
              teaching and tutoring, we’ve had the privilege of working with learners
              of all ages and abilities. Alongside our classroom and tutoring work,
              we’ve also supported behavioural schools, worked closely with students
              with a wide range of special educational needs, and even gained valuable
              experience in governing schools — giving us a deeper understanding of how
              education works both inside and outside the classroom.
            </p>
            <p>
              We know that no two learners are the same, which is why we adapt our
              approach to bring out the very best in each student. Our goal isn’t just
              to help with schoolwork — it’s to build confidence, spark curiosity, and
              make learning enjoyable and rewarding.
            </p>
            <p>
              If you’re looking for tutoring that goes beyond textbooks and grades,
              and truly supports your child as an individual, we’d love to show you
              how we can make a difference.
            </p>
          </div>
        </header>

        {/* Grid */}
        <div className="about-grid">
          <article className="about-card">
            <h2>What we bring</h2>
            <ul className="about-list">
              <li><span className="dot blue" /> 15+ years teaching & tutoring experience</li>
              <li><span className="dot purple" /> Support across mainstream & behavioural schools</li>
              <li><span className="dot green" /> SEN-aware practice tailored to each learner</li>
              <li><span className="dot amber" /> School governance insight — how systems work</li>
            </ul>
          </article>

          <article className="about-card">
            <h2>How we teach</h2>
            <ul className="about-checks">
              <li>Personalised plans that target real needs</li>
              <li>Confidence building through small wins</li>
              <li>Clear modelling, then supported practice</li>
              <li>Exam-smart strategies & time management</li>
              <li>Regular feedback and parent updates</li>
            </ul>
          </article>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <a className="about-btn" href="/contact">📘 Contact Us </a>
          <p className="about-note">Let’s map out the right plan for your child.</p>
        </div>
      </div>
    </section>
  );
}


