import React from "react";
import "./Offer.css";

export default function Offer() {
  return (
    <section className="offer-page" aria-labelledby="offer-title">
      <div className="offer-wrap">
        <div className="offer-head">
          <span className="offer-pill">11+ Programme</span>
          <h1 id="offer-title">What We Offer</h1>
          <p className="offer-lead">
            Expert-led 11+ preparation with the structure, practice and feedback
            that turns preparation into performance.
          </p>
        </div>

        <div className="offer-grid">
          {/* Left card */}
          <article className="offer-card" aria-labelledby="offer-left">
            <h2 id="offer-left">What We Offer</h2>
            <ul className="tick-list">
              <li>
                <strong>Expert 11+ Tutors</strong> – Specialists who know the
                exam inside-out.
              </li>
              <li>
                <strong>Full Subject Coverage</strong> – Verbal, Non-Verbal,
                Maths, and English.
              </li>
              <li>
                <strong>Small Group & 1:1 Options</strong> – Choose the style
                that works best.
              </li>
              <li>
                <strong>Exam-Focused Resources</strong> – Practice papers, mock
                exams, and insider tips.
              </li>
            </ul>
          </article>

          {/* Right card */}
          <article className="offer-card" aria-labelledby="offer-right">
            <h2 id="offer-right">How We Get The Best Results</h2>
            <ul className="tick-list">
              <li>
                <strong>Confidence Building</strong> – Boosting skills and
                self-belief.
              </li>
              <li>
                <strong>Targeted Practice</strong> – Focus on the areas that
                make the biggest difference.
              </li>
              <li>
                <strong>Real Exam Conditions</strong> – Mock tests to reduce
                nerves.
              </li>
              <li>
                <strong>Strategy Coaching</strong> – Time management & problem-
                solving shortcuts.
              </li>
              <li>
                <strong>Parental Updates</strong> – Keeping you in the loop
                every step of the way.
              </li>
            </ul>
          </article>
        </div>

        <div className="offer-cta">
          <a href="/contact" className="offer-btn">Book a free call</a>
          <p className="offer-note">
            We’ll map a plan that fits your child’s goals and timeline.
          </p>
        </div>
      </div>

      {/* Decorative bottom wave (optional) */}
      <div className="offer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,53.3C672,43,768,53,864,69.3C960,85,1056,107,1152,112C1248,117,1344,107,1392,101.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}

