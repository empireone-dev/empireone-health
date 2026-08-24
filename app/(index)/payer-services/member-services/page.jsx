import React from 'react'
import HeaderSection from './sections/header-section'
import BodySection from './sections/body-section'
import ServiceScopeSection from './sections/service-scope-section'
import HowWeWorkSection from './sections/how-we-work-section'

export const metadata = {
  title: "Member Services | EmpireOneHealth",
  description:
    "Support member inquiries, coverage questions, benefit navigation, and service request routing for clearer health plan experiences.",
};

export default function Page() {
  return (
   
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
        <HeaderSection />
        <BodySection />
        <ServiceScopeSection />
        <HowWeWorkSection />
    </div>
  )
}
