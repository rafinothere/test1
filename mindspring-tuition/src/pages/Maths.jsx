import React from "react";
import { Link } from "react-router-dom";  // ← ADDED THIS LINE
import "./Maths.css";
import mathsImage from "../assets/maths-tutoring.jpg"; // adjust if your filename differs

export default function Maths() {
  return (
    <section className="math-page" aria-labelledby="math-title">
      <div className="m-wrap">
        {/* Header */}
        <header className="m-head">
          <span className="m-pill">Maths</span>
          <h1 id="math-title">Maths Tuition</h1>
          <p className="m-lead">
            Build rock-solid number sense, fluent methods and confident problem
            solving. Lessons are tailored to your child's level and exam board
            (GL, CEM, ISEB & independent schools).
          </p>
        </header>

        {/* Main card */}
        <div className="m-card">
          <div className="m-content">
            <div className="m-block">
              <h2 className="m-sub">What we cover</h2>
              <ul className="m-list">
                <li><span className="m-dot m-blue" /> Arithmetic fluency & mental strategies</li>
                <li><span className="m-dot m-purple" /> Fractions, decimals & percentages</li>
                <li><span className="m-dot m-amber" /> Ratio, proportion & scale</li>
                <li><span className="m-dot m-pink" /> Algebra foundations & word problems</li>
                <li><span className="m-dot m-green" /> Geometry, measures & area/volume</li>
                <li><span className="m-dot m-gray" /> Data, averages & probability</li>
              </ul>
            </div>

            <div className="m-block">
              <h2 className="m-sub">How we teach</h2>
              <ul className="m-checks">
                <li>Short, clear teaching then guided practice</li>
                <li>Worked examples that model exam-ready methods</li>
                <li>Timed drills to build accuracy and pace</li>
                <li>Rich word problems to train reasoning</li>
                <li>Personalised feedback and next-step targets</li>
              </ul>
            </div>

            <div className="m-cta">
              <Link className="m-btn" to="/contact">📘 Contact Us </Link>  {/* ← CHANGED THIS LINE */}
              <p className="m-note">We'll map a plan that fits your child's goals and timeline.</p>
            </div>
          </div>

          <figure className="m-figure">
            <img src={mathsImage} alt="Student practicing maths problem solving" />
          </figure>
        </div>

        {/* Optional mini cards under main card */}
        <div className="m-mini">
          <div className="mini-card">
            <h3>Exam Skills</h3>
            <p>Pacing, checking and calculator-free techniques for 11+ style papers.</p>
          </div>
          <div className="mini-card">
            <h3>Targeted Practice</h3>
            <p>Question sets that hit weak spots and build quick wins.</p>
          </div>
          <div className="mini-card">
            <h3>Stretch & Challenge</h3>
            <p>Enrichment problems for high attainers aiming for top marks.</p>
          </div>
        </div>
      </div>

      {/* Decorative wave kept underneath content */}
      <div className="m-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path fill="#ffffff"
            d="M0,48L48,53.3C96,59,192,69,288,69.3C384,69,480,59,576,53.3C672,48,768,48,864,58.7C960,69,1056,91,1152,96C1248,101,1344,91,1392,85.3L1440,80V80H0Z" />
        </svg>
      </div>
    </section>
  );
}