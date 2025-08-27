'use client'

import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Brandpanel() {
  return (
    <Card
      className="hidden  lg:flex lg:w-lg rounded-none border-none shadow-none relative overflow-hidden bg-primary-blue-100 py-0 h-screen"
    >
      <CardContent className="flex flex-col justify-start  px-3 py-5 relative gap-10 z-10">


        {/* bg-image */}
        <div className='absolute overflow-hidden top-0 right-2 h-screen'>
          <Image src={'/icons/auth/auth-logo.svg'} alt='bg-image' className=' h-230 w-170 object-cover object-top' height={170} width={100} />
        </div>
        {/* Logo */}
        <div className="mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg">
            <Image
              src="/icons/login_logo.svg"
              alt="Login Logo"
              width={28}
              height={50}
            />
          </div>
        </div>

        {/* Brand Content */}
        <div className="max-w-sm flex flex-col gap-4">
          <h1
            className="mb-1.5 leading-tight text-4xl font-semibold text-primary-foreground font-poppins"
          >
            Growth on<br />Autopilot
          </h1>

          <p
            className=" font-roboto text-md text-primary-foreground"
          >
            Optimize your stock, minimize losses — Invest smarter with us.
          </p>
        </div>
      </CardContent>


    </Card>
  )
}
