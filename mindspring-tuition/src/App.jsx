import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ElevenPlus from "./pages/ElevenPlus";
import OfferPage from "./pages/Offer"; // renamed import for clarity
import English from "./pages/English"; 
import Maths from "./pages/Maths";
import Science from "./pages/Science"; // ✅

export default function App() {
  return (
    <Router>
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
        <Route path="/science" element={<Science />} />  {/* ✅ */}
      </Routes>

      <Footer />
    </Router>
  );
}


