import React from "react";
import PayerServicesSection from "../payer/sections/payer-services-section";
import PayerFoundationServiceSection from "../payer/sections/payer-foundation-service-section";
import PayerHowWeWorkSection from "../payer/sections/payer-how-we-work-section";
import BookACallSection from "../_sections/book-a-call-section";

export default function Payer() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
      <PayerServicesSection />
      <PayerFoundationServiceSection />
      <PayerHowWeWorkSection />
      <BookACallSection />  
    </div>
  );
}
