import React from 'react'
import HeaderSection from './sections/header-section'
import BodySection from './sections/body-section'
import ServiceScopeSection from './sections/service-scope-section'
import HowWeWorkSection from './sections/how-we-work-section'

export const metadata = {
  title: "Appointment Scheduling & Referral Management | EmpireOneHealth",
  description:
    "Coordinate scheduling, rescheduling, referral intake, reminders, and follow-up workflows with a trained healthcare operations team focused on patient access.",
};

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">
        <HeaderSection />
        <BodySection    />
        <ServiceScopeSection />
        <HowWeWorkSection />
    </div>
  )
}
