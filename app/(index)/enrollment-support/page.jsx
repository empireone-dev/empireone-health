import React from 'react'
import HeaderSection from './sections/header-section'
import BodySection from './sections/body-section'
import ServiceScopeSection from './sections/service-scope-section'
import HowWeWorkSection from './sections/how-we-work-section'

export default function Page() {
  return (
    <div className="bg-gradient-to-b from-[#f0f9ff] to-[#e0f2fe]">  
        <HeaderSection/>    
        <BodySection />
        <ServiceScopeSection /> 
        <HowWeWorkSection />
    </div>
  )
}
