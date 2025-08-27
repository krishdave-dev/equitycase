import ManagersPage from '@/pages/managers/managers-page'
import { Metadata } from 'next'
import React from 'react'

const page = () => {
  return <ManagersPage/>
}

export default page


export const metadata: Metadata = {
    title: "Managers | Equity Case",
    description: "Smarter Trading Starts With Execution",
  };