import React from 'react'
import HeroSection from './sections/hero-section'
import FeatureWorkSection from './sections/feature-work-section'
import WhatWeMeasureSection from './sections/what-we-measure-section'

export const metadata = {
  title: "Case Studies | EmpireOne Health | Healthcare BPO & RCM Services",
  description:
    "Explore how EmpireOneHealth supports provider and payer teams with structured operations, QA visibility, and scalable execution.",
};

export default function Page() {
  return (
    <div className="bg-white">
      <HeroSection />
     <FeatureWorkSection /> 
     <WhatWeMeasureSection/>
    </div>
  )
}
