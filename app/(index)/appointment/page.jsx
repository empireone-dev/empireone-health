import React from 'react'
import HeroSection from './sections/hero-section'

export const metadata = {
  title: "Book an Appointment | EmpireOne Health",
  description:
    "Schedule a 30-minute call with EmpireOneHealth to discuss provider and payer operations, revenue cycle, and workflow support.",
};

export default function Page() {
  return (
    <div>
        <HeroSection    />
    </div>
  )
}
