// src/pages/Contact.jsx
import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending…");

    try {
      const res = await fetch("https://formspree.io/f/xpwlegnv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent! We’ll be in touch shortly.");
        setFormData({ name: "", email: "", phone: "", message: "", consent: false });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("Network error. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to learn more about our tutoring? Get in touch
          with us — we’d love to hear from you.
        </p>
      </header>

      {/* Quick info cards */}
      <section className="contact-grid" aria-label="Contact details">
        <div className="contact-card">
          <h2>Email</h2>
          <p>
            <a href="mailto:Mindspringtuition@outlook.com">
              Mindspringtuition@outlook.com
            </a>
          </p>
        </div>
        <div className="contact-card">
          <h2>Phone</h2>
          <p>0121 751 1308</p>
        </div>
        <div className="contact-card">
          <h2>Location</h2>
          <p>Birmingham, UK</p>
        </div>
      </section>

      {/* Socials strip */}
      <section className="contact-socials" aria-labelledby="connect-title">
        <div className="socials-wrap">
          <h2 id="connect-title">Connect with us</h2>

          <div className="socials-row">
            {/* Instagram */}
            <a
              className="soc ig"
              href="https://www.instagram.com/mindspringtuition"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm4.9-.9a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                />
              </svg>
            </a>

            {/* Email */}
            <a
              className="soc mail"
              href="mailto:Mindspringtuition@outlook.com"
              aria-label="Email us"
              title="Email"
            >
              <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 12 4 6.01V6h16ZM4 18V8l8 6 8-6v10H4Z"
                />
              </svg>
            </a>
          </div>

          <div className="availability">
            <h3>Availability:</h3>
            <p>We operate remotely and are available 24/7.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form" aria-labelledby="form-title">
        <h2 id="form-title">Send us a message</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">Your Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field full">
              <label htmlFor="phone">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="01234 567890"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="field full">
              <label htmlFor="message">How can we help? *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell us a little about your child and what you’re looking for…"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <div className="field full checkbox">
              <label className="chk">
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  required
                />
                <span>
                  I’m happy for Mindspring Tuition to contact me about my enquiry.
                </span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Send message</button>
          {status && <p className="status">{status}</p>}
        </form>
      </section>
    </div>
  );
}

