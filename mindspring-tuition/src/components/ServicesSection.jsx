import React from "react";
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
            <a className="service__btn" href="/elevenplus">Learn more</a>
          </article>

          <article className="service">
            <div className="service__icon" aria-hidden>🧑‍💻</div>
            <h3>Online & personalised</h3>
            <p>Structured, engaging online sessions tailored to pace and learning style.</p>
            <a className="service__btn" href="/about">Explore</a>
          </article>

          <article className="service">
            <div className="service__icon" aria-hidden>🛡️</div>
            <h3>Trusted tutors</h3>
            <p>DBS-checked, trained tutors delivering safe and effective learning.</p>
            <a className="service__btn" href="/about">Why it matters</a>
          </article>
        </div>
      </div>
    </section>
  );
}

