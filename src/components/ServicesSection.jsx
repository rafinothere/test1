// src/components/ServicesSection.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ import Link
import "./ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services__wrap">
        <h2 className="services__title">What makes us different?</h2>

        <div className="services__grid">
          <article className="service">
            <div className="service__icon" aria-hidden>📈</div>
            <h3>Build strong foundations</h3>
            <p>Personalised approach so your child gains confidence and steady progress.</p>
            {/* ✅ FIXED: Link instead of <a> */}
            <Link className="service__btn" to="/elevenplus">Learn more</Link>
          </article>

          <article className="service">
            <div className="service__icon" aria-hidden>🧑‍💻</div>
            <h3>Online & personalised</h3>
            <p>Structured, engaging online sessions tailored to pace and learning style.</p>
            {/* ✅ FIXED */}
            <Link className="service__btn" to="/offer">Explore</Link>
          </article>

          <article className="service">
            <div className="service__icon" aria-hidden>🛡️</div>
            <h3>Trusted tutors</h3>
            <p>DBS-checked, trained tutors delivering safe and effective learning.</p>
            {/* ✅ FIXED */}
            <Link className="service__btn" to="/about">Why it matters</Link>
          </article>
        </div>
      </div>
    </section>
  );
}