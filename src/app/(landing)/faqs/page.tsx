import FaqsPage from '@/pages/faqs/faqs-page'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return <FaqsPage/>
}

export default page


export const metadata: Metadata = {
    title: "FAQ'S | Equity Case",
    description: "Smarter Trading Starts With Execution",
  };