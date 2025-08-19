import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';
import boyImage from '../assets/student-boy.jpg';
import mathImage from '../assets/maths-tutoring.jpg';
import englishImage from '../assets/english.jpg';
import scienceImage from '../assets/science.jpg';
import examTechniqueImage from '../assets/examtechnique.jpg';

function HeroSection() {
  const slides = [
    { id: 1, image: mathImage, alt: 'Student studying math', title: 'Math Tutoring' },
    { id: 2, image: boyImage, alt: 'Student learning', title: '11+ Preparation' },
    { id: 3, image: englishImage, alt: 'Student working on English', title: 'English Support' },
    { id: 4, image: scienceImage, alt: 'Student studying science', title: 'Science Help' },
    { id: 5, image: examTechniqueImage, alt: 'Student practicing exam techniques', title: 'Exam Technique' }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Achieve 11+ Success with Confidence</h1>
          <p>Tailored lessons, expert tutors, and a proven track record of results.</p>

          {/* Contact button now routes to /contact */}
          <Link to="/contact" className="cta-button">
            📘 Contact Us
          </Link>
        </div>

        <div className="hero-image">
          <div className="carousel-container">
            {slides.map((slide, index) => {
              let position = index - currentSlide;
              if (position < -2) position += slides.length;
              if (position > 2) position -= slides.length;

              return (
                <div
                  key={slide.id}
                  className={`carousel-slide position-${position}`}
                  style={{ '--position': position }}
                  onClick={() => goToSlide(index)}
                >
                  <img src={slide.image} alt={slide.alt} className="slide-img" />
                  <div className="slide-label">{slide.title}</div>
                </div>
              );
            })}

            <div className="carousel-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

