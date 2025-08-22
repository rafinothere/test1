// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";   // 👈 uppercase "N" (case matters!)
import Footer from "./components/Footer.jsx";   // check if you actually have Footer.jsx
import HeroSection from "./components/HeroSection.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import ElevenPlus from "./pages/ElevenPlus.jsx";
import OfferPage from "./pages/Offer.jsx";
import English from "./pages/English.jsx";
import Maths from "./pages/Maths.jsx";
import Science from "./pages/Science.jsx";

// ← ADDED: Import favicon from assets
import favicon from './assets/mindspring-logo.png';

// ← ADDED: Set favicon dynamically
const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
link.type = 'image/png';
link.rel = 'icon';
link.href = favicon;
document.head.appendChild(link);

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Home />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/elevenplus" element={<ElevenPlus />} />
        <Route path="/offer" element={<OfferPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/english" element={<English />} />
        <Route path="/maths" element={<Maths />} />
        <Route path="/science" element={<Science />} />
      </Routes>

      <Footer />
    </>
  );
}