'use client'
import AdvantagesSection from '@/components/landing/landing-page-components/AdvantagesSection'
import BrokersSection from '@/components/landing/landing-page-components/BrokersSection'
import { HeroSection } from '@/components/landing/landing-page-components/HeroSection'
import PlatformFeatures from '@/components/landing/landing-page-components/PlatformFeatures'
import TestimonialsSection from '@/components/landing/landing-page-components/TestimonialsSection'
import React from 'react'

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <BrokersSection />
      <PlatformFeatures />
      <AdvantagesSection/>
      <TestimonialsSection/>
    </div>
  )
}

export default LandingPage
