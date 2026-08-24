import React from "react";
import HeaderSection from "./sections/header-section";
import BodySection from "./sections/body-section";
import ServiceScopeSection from "./sections/service-scope-section";
import HowWeWorkSection from "./sections/how-we-work-section";

export const metadata = {
  title: "Denial Management | EmpireOneHealth",
  description:
    "Work denied claims, appeal preparation, payer-specific rework, status follow-up, and denial trend reporting to protect revenue.",
};

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
      <HeaderSection />
      <BodySection />
      <ServiceScopeSection />
      <HowWeWorkSection />
    </div>
  );
}
