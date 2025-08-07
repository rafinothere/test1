import React from "react";
import "../components/ElevenPlus.css";

const ElevenPlus = () => {
  return (
    <div className="eleven-plus-container">
      <h1>11+ Exam Preparation</h1>
      <p>
        At Mindspring Tuition, our 11+ exam programme is designed to prepare students with the knowledge, skills, and confidence to succeed in grammar school entrance exams.
      </p>

      <div className="section">
        <h2>What We Cover</h2>
        <ul>
          <li>English Comprehension & Creative Writing</li>
          <li>Mathematics Problem Solving</li>
          <li>Verbal Reasoning</li>
          <li>Non-Verbal Reasoning</li>
          <li>Time Management Techniques</li>
        </ul>
      </div>

      <div className="section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced tutors who specialise in 11+ preparation</li>
          <li>Interactive and engaging online lessons</li>
          <li>Weekly progress tracking and feedback</li>
          <li>Tailored support for your child's learning style</li>
        </ul>
      </div>

      <div className="section">
        <h2>Start Your Child’s 11+ Journey</h2>
        <p>Contact us today to see how we can help your child succeed.</p>
        <button className="trial-button">Contact Us</button>
      </div>
    </div>
  );
};

export default ElevenPlus;

