import React from "react";
import "./ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="services-zone" aria-labelledby="services-title">
      <div className="sz-wrap">
        <header className="sz-head">
          <span className="sz-pill">Our Services</span>
          <h2 id="services-title">Tailored support for every stage</h2>
          <p className="sz-lead">
            From 11+ preparation to subject-specific boosters, our sessions are
            structured, engaging and built around your child’s goals.
          </p>
        </header>

        <div className="sz-grid" role="list">
          <article className="sz-card" role="listitem">
            <div className="sz-icon" aria-hidden>🧠</div>
            <h3>11+ Preparation</h3>
            <p>Strategy + practice for Verbal, Non-Verbal, Maths & English with mock papers and timed drills.</p>
            <a className="sz-link" href="/elevenplus">Learn more →</a>
          </article>

          <article className="sz-card" role="listitem">
            <div className="sz-icon" aria-hidden>➗</div>
            <h3>Maths Tutoring</h3>
            <p>Clear explanations, exam-board aligned past papers and step-by-step methods.</p>
            <a className="sz-link" href="/services#maths">Learn more →</a>
          </article>

          <article className="sz-card" role="listitem">
            <div className="sz-icon" aria-hidden>🧪</div>
            <h3>Science Help</h3>
            <p>Concept-led lessons across Biology, Chemistry & Physics that build real understanding.</p>
            <a className="sz-link" href="/services#science">Learn more →</a>
          </article>

          <article className="sz-card" role="listitem">
            <div className="sz-icon" aria-hidden>✍️</div>
            <h3>English Support</h3>
            <p>Reading comprehension & writing skills to sharpen analysis and expression.</p>
            <a className="sz-link" href="/services#english">Learn more →</a>
          </article>

          <article className="sz-card" role="listitem">
            <div className="sz-icon" aria-hidden>⏱️</div>
            <h3>Exam Technique</h3>
            <p>Timing, question selection and high-impact strategies to maximise marks.</p>
            <a className="sz-link" href="/services#exam-technique">Learn more →</a>
          </article>

          <article className="sz-card" role="listitem">
            <div className="sz-icon" aria-hidden>🎯</div>
            <h3>Targeted Boosters</h3>
            <p>Short focused blocks to fix weak spots and build confidence fast.</p>
            <a className="sz-link" href="/services#boosters">Learn more →</a>
          </article>
        </div>
      </div>
    </section>
  );
}

