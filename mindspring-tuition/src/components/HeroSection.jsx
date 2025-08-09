import React, { useEffect, useRef, useState } from "react";
import "./HeroSection.css";

/* 👉 Put these four images in src/assets and adjust names if needed */
import imgEleven  from "../assets/student-boy.jpg";      // 11+ photo
import imgMaths   from "../assets/maths-man.jpg";       // maths photo
import imgScience from "../assets/girl-sci.jpg";     // science photo (online class)
import imgEnglish from "../assets/tomm-man.jpg";     // english/creative writing photo

const SLIDES = [
  {
    tag: "11+ Preparation",
    title: "Achieve 11+ Success with Confidence",
    desc: "Targeted online lessons, mock papers and timed practice to build speed, accuracy and exam confidence.",
    cta: "📘 Contact Us",
    image: imgEleven,
    alt: "Child preparing for the 11+ exam",
  },
  {
    tag: "Maths",
    title: "Improve your Maths",
    desc: "Clear explanations, past papers, and step-by-step strategies tailored to your exam board.",
    cta: "🔢 Explore Maths",
    image: imgMaths,
    alt: "Student practising maths problems",
  },
  {
    tag: "Science",
    title: "Understand Science, Don’t Memorise It",
    desc: "Engaging lessons that connect concepts so results improve and curiosity grows.",
    cta: "🧪 Explore Science",
    image: imgScience,
    alt: "Online science lesson with a tutor",
  },
  {
    tag: "English",
    title: "Write with Clarity & Confidence",
    desc: "Reading comprehension and creative writing that sharpen analysis and expression.",
    cta: "✍️ Improve English",
    image: imgEnglish,
    alt: "Student writing and practising English",
  },
];

const AUTOPLAY_MS = 4500;

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(0);

  // autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      AUTOPLAY_MS
    );
    return () => clearInterval(id);
  }, [paused]);

  // pause when tab hidden
  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  // swipe (mobile)
  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      setIndex((i) =>
        (i + (dx < 0 ? 1 : -1) + SLIDES.length) % SLIDES.length
      );
    }
  };

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Key services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="hero-bg" aria-hidden="true" />

      <div className="viewport" role="group" aria-live="polite">
        <div
          className="track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {SLIDES.map((s, i) => (
            <article className="slide" key={i}>
              <div className="hero-text">
                <span className="pill">{s.tag}</span>
                <h1>{s.title}</h1>
                <p>{s.desc}</p>
                <button className="cta-btn">{s.cta}</button>
              </div>

              <div className="hero-image">
                <img src={s.image} alt={s.alt} />
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="dots" role="tablist" aria-label="Slide selector">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          />
        ))}
      </div>
    </section>
  );
}

