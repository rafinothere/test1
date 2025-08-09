import React from "react";
  import "../components/ElevenPlus.css";
                // ✅ uses your stylesheet
import englishImage from "../assets/student.png"; // swap to another image if you have one

export default function English() {
  return (
    <section className="eng-section">
      <div className="eng-wrap">

        {/* Header */}
        <div className="eng-head">
          <span className="eng-pill">English</span>
          <h1>English Tuition</h1>
          <p className="eng-lead">
            Our English programme focuses on building strong comprehension, grammar,
            and creative writing skills — tailored for real exam success.
          </p>
        </div>

        {/* Content Card */}
        <div className="eng-card">
          <div className="eng-content">
            <div className="eng-block">
              <h2 className="eng-sub">What We Cover</h2>
              <ul className="eng-list">
                <li><span className="eng-dot eng-blue" /> Reading comprehension</li>
                <li><span className="eng-dot eng-purple" /> Grammar & punctuation</li>
                <li><span className="eng-dot eng-amber" /> Spelling & vocabulary</li>
                <li><span className="eng-dot eng-pink" /> Creative writing techniques</li>
                <li><span className="eng-dot eng-green" /> Exam-style practice questions</li>
              </ul>
            </div>

            <div className="eng-block">
              <h2 className="eng-sub">Why Choose Mindspring?</h2>
              <ul className="eng-checks">
                <li>Experienced English tutors</li>
                <li>Tailored 1-to-1 and small-group sessions</li>
                <li>Engaging, interactive online lessons</li>
                <li>Weekly feedback and progress reports</li>
              </ul>
            </div>

            <div className="eng-cta">
              <a href="/contact" className="eng-btn">📘 Book a Free Call</a>
              <span className="eng-note">Online lessons only • Flexible scheduling</span>
            </div>
          </div>

          <figure className="eng-figure">
            <img src={englishImage} alt="Student learning English online" />
          </figure>
        </div>
      </div>
    </section>
  );
}

