import SignUpPage from '@/pages/auth/signup-page'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return <SignUpPage/>
}

export default page


export const metadata: Metadata = {
  title: "Sign Up | Equity Case",
  description: "Smarter Trading Starts With Execution",
};