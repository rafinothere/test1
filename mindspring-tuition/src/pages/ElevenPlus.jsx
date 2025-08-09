import React from "react";
import "./ElevenPlus.css";

export default function ElevenPlus() {
  return (
    <main className="elevenplus">
      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="pill">11+ Programme</span>
            <h1>11+ Exam Preparation</h1>
            <p className="lead">
              At Mindspring Tuition, our 11+ programme equips students with the
              knowledge, skills, and confidence to succeed in grammar school
              entrance exams.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="/contact">Book a Free Assessment</a>
              <a className="btn btn--ghost" href="/services/elevenplus">View Curriculum</a>
            </div>
          </div>

          <div className="hero__media" aria-hidden="true">
            <img
              src="/images/hero-11plus.jpg"
              alt=""
              className="hero__img"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE COVER */}
      <section className="section">
        <div className="container grid grid--2">
          <div className="card cover__card">
            <h2 className="h3">What We Cover</h2>

            <ul className="dotlist">
              <li><span className="dot dot--blue" /> English Comprehension & Creative Writing</li>
              <li><span className="dot dot--purple" /> Mathematics Problem Solving</li>
              <li><span className="dot dot--teal" /> Verbal Reasoning</li>
              <li><span className="dot dot--green" /> Non-Verbal Reasoning</li>
              <li><span className="dot dot--grey" /> Time Management & Exam Technique</li>
            </ul>

            <ul className="checklist">
              <li>Mock exams & timed drills</li>
              <li>Personalised feedback & targets</li>
              <li>Exam strategies & confidence building</li>
            </ul>

            <div className="stats">
              <div><strong>20+</strong><span>years combined experience</span></div>
              <div><strong>90%</strong><span>offer rate*</span></div>
            </div>
            <p className="fineprint">
              *Offer rate based on historical cohorts across partner regions. Results may vary.
            </p>
          </div>

          <div className="cover__image-wrap">
            <img
              src="/images/cover-11plus.jpg"
              alt="Student working through practice questions"
              className="cover__image"
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section section--padTopSm">
        <div className="container">
          <h2 className="h2 center">How it works</h2>

          <div className="hiw__highlights">
            <p><span className="highlight">Tailored to your chosen schools:</span> Tell us which schools you’re applying for. We’ll create a focused plan for those exams.</p>
            <p><span className="highlight">Centre or online tuition:</span> Choose weekly online lessons or attend our partner venues in select areas.</p>
            <p><span className="highlight">Everything you need to ace the exam:</span> Structured lessons, homework, and progress reviews keep your child on track.</p>
          </div>

          <div className="grid grid--2 hiw__block">
            <div className="hiw__media">
              <img
                src="/images/hiw-grammarschool.jpg"
                alt="Two pupils celebrating success"
                className="hiw__img"
              />
            </div>
            <div className="hiw__copy">
              <h3 className="h3">Tailored to your chosen grammar schools</h3>
              <p>
                Whether you’re preparing for GL, CEM-style, or a local consortium exam,
                we map your child’s plan to the exact topics and formats that matter.
              </p>
              <a className="btn btn--primary" href="/contact">Find your plan</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="cta">
        <div className="container cta__inner">
          <h3 className="h3">Ready to get started?</h3>
          <p>Book a free assessment and receive a personalised 11+ study roadmap.</p>
          <a className="btn btn--inverse" href="/contact">Book Now</a>
        </div>
      </section>
    </main>
  );
}

