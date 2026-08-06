import React from 'react'
import HeroSection from './sections/hero-section'
import FeatureWorkSection from './sections/feature-work-section'
import WhatWeMeasureSection from './sections/what-we-measure-section'

export default function Page() {
  return (
    <div className="bg-white">
      <HeroSection />
     <FeatureWorkSection /> 
     <WhatWeMeasureSection/>
    </div>
  )
}
