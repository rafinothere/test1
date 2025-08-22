import React from "react";
import "./Science.css";
import scienceImg from "../assets/science.jpg";

export default function Science() {
  return (
    <section className="sci-section" aria-labelledby="sci-title">
      <div className="sci-wrap">

        {/* Header */}
        <header className="sci-head">
          <span className="sci-pill">Science</span>
          <h1 id="sci-title">Science Tuition</h1>
          <p className="sci-lead">
            Build secure understanding across Biology, Chemistry and Physics.
            Lessons target your child’s level and the exam board focus (GL, CEM,
            ISEB & independent schools) with clear models, lots of practice and
            feedback.
          </p>
        </header>

        {/* Main card */}
        <div className="sci-card">
          <div className="sci-content">
            <div className="sci-block">
              <h2 className="sci-sub">What we cover</h2>
              <ul className="sci-list">
                <li><span className="dot blue" /> Biology fundamentals & practical skills</li>
                <li><span className="dot purple" /> Chemistry particles, reactions & investigation</li>
                <li><span className="dot green" /> Physics forces, energy, electricity & graphs</li>
                <li><span className="dot amber" /> Data handling, graphs & required vocabulary</li>
                <li><span className="dot pink" /> Exam-style questions & problem solving</li>
              </ul>
            </div>

            <div className="sci-block">
              <h2 className="sci-sub">How we teach</h2>
              <ul className="sci-checks">
                <li>Short, crystal-clear explanations then guided practice</li>
                <li>Scaffolded model answers that show “what great looks like”</li>
                <li>Retrieval & timed drills to build fluency and pace</li>
                <li>Regular low-stakes quizzes and exam-style questions</li>
                <li>Personalised feedback and simple next-step targets</li>
              </ul>
            </div>

            <div className="sci-cta">
              <a className="sci-btn" href="/contact">📘 Contact Us </a>
              <p className="sci-note">We’ll map a plan that fits your child’s goals and timeline.</p>
            </div>
          </div>

          <figure className="sci-figure" aria-hidden="true">
            <img src={scienceImg} alt="" />
          </figure>
        </div>
      </div>
    </section>
  );
}

