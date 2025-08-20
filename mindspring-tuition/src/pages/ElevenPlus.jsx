// src/pages/ElevenPlus.jsx
import React from "react";
import { Link } from "react-router-dom";          // ✅ use Link for internal navigation
import "../components/ElevenPlus.css";

// images
import heroImg from "../assets/student-boy.jpg";
import tutorImg from "../assets/english.jpg";
import onlineClassImg from "../assets/examtechnique.jpg";
import mathsKidImg from "../assets/maths-tutoring.jpg";

export default function ElevenPlus() {
  return (
    <section className="eleven-plus-page">
      <div className="ep-wrap">
        {/* Header */}
        <header className="ep-head">
          <span className="ep-pill">11+ Programme</span>
          <h1>11+ Exam Preparation</h1>
          <p className="ep-lead">
            At Mindspring Tuition, our 11+ exam programme prepares students
            with the knowledge, skills, and confidence to succeed in grammar
            school entrance exams.
          </p>
        </header>

        {/* Main card: list + hero image */}
        <div className="ep-card">
          <div className="ep-content">
            <div className="ep-block">
              <h3 className="ep-sub">What We Cover</h3>
              <ul className="ep-list">
                <li><span className="ep-dot ep-blue" /> English Comprehension &amp; Creative Writing</li>
                <li><span className="ep-dot ep-purple" /> Mathematics Problem Solving</li>
                <li><span className="ep-dot ep-pink" /> Verbal Reasoning</li>
                <li><span className="ep-dot ep-green" /> Non-Verbal Reasoning</li>
                <li><span className="ep-dot ep-gray" /> Time Management Techniques</li>
              </ul>
            </div>

            <div className="ep-block">
              <h3 className="ep-sub">Why Choose Us?</h3>
              <ul className="ep-checks">
                <li>Experienced tutors specialising in 11+ preparation</li>
                <li>Interactive and engaging online lessons</li>
                <li>Weekly progress tracking and feedback</li>
                <li>Tailored support for your child’s learning style</li>
              </ul>
            </div>

            <div className="ep-cta">
              {/* ⬇️ Use Link instead of <a href> */}
              <Link className="ep-btn" to="/contact">📘 Contact Us</Link>
              <span className="ep-note">Let’s plan your child’s 11+ journey.</span>
            </div>
          </div>

          <figure className="ep-figure">
            <img src={heroImg} alt="Student preparing for the 11+ exam" />
          </figure>
        </div>

        {/* Visual highlights */}
        <div className="ep-gallery">
          <figure className="ep-figure sm">
            <img src={tutorImg} alt="One-to-one tutoring support" />
          </figure>
          <figure className="ep-figure sm">
            <img src={onlineClassImg} alt="Exam technique and practice" />
          </figure>
          <figure className="ep-figure sm">
            <img src={mathsKidImg} alt="Focused maths preparation" />
          </figure>
        </div>
      </div>
    </section>
  );
}

