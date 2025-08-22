// src/pages/Home.jsx
import React from "react";
import ServicesSection from "../components/ServicesSection";
import OfferCards from "../components/OfferCards"; // <-- rename your cards component import

export default function Home() {
  return (
    <>
      <ServicesSection />
      <OfferCards />
    </>
  );
}



