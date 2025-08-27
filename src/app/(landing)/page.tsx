import LandingPage from '@/pages/landing/landing-page'
import { Metadata } from 'next'
import React from 'react'

const Home = () => {
  return <LandingPage/>
}

export default Home


export const metadata: Metadata = {
  title: "Home | Equity Case",
  description: "Smarter Trading Starts With Execution",
};