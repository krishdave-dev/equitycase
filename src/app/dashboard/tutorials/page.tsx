import TutorialsPage from '@/pages/tutorials/tutorials-page'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return <TutorialsPage/>
}

export default page



export const metadata: Metadata = {
  title: "Tutorials | Equity Case",
  description: "Smarter Trading Starts With Execution",
};