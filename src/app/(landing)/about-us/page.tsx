import AboutUsPage from '@/pages/about-us/about-us'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return <AboutUsPage/>
}

export default page



export const metadata: Metadata = {
  title: "About Us | Equity Case",
  description: "Smarter Trading Starts With Execution",
};