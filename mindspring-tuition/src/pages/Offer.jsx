import React from "react";
import "./Offer.css";

export default function Offer() {
  return (
    <section className="offer-zone" aria-labelledby="offer-title">
      <div className="oz-wrap">
        <header className="oz-head">
          <span className="oz-pill">11+ Programme</span>
          <h2 id="offer-title">What we offer</h2>
          <p className="oz-lead">
            Expert-led 11+ preparation with the structure, practice and feedback
            that turns preparation into performance.
          </p>
        </header>

        <div className="oz-grid">
          <article className="oz-card">
            <h3>Core Package</h3>
            <ul className="oz-list">
              <li>Expert 11+ tutors who know the exam inside-out</li>
              <li>Full coverage: Verbal, Non-Verbal, Maths & English</li>
              <li>Small-group or 1:1 options to suit your child</li>
              <li>Exam-focused resources, mock papers & insider tips</li>
            </ul>
          </article>

          <article className="oz-card">
            <h3>How we get results</h3>
            <ul className="oz-list">
              <li>Confidence building and coached mindset</li>
              <li>Targeted practice on high-impact topics</li>
              <li>Mocks in real exam conditions to reduce nerves</li>
              <li>Strategy coaching: timing & question choice</li>
              <li>Regular parental updates & progress tracking</li>
            </ul>
          </article>
        </div>

        <div className="oz-cta">
          <a className="oz-btn" href="/contact">Book a free call</a>
          <p className="oz-note">We’ll map a plan that fits your child’s goals and timeline.</p>
        </div>
      </div>
    </section>
  );
}

