'use client'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'
import WidthWrapper from './width-wrapper'

const Footer = () => {
  return (
    <WidthWrapper className='bg-primary-blue-2 h-90  py-10 flex flex-col items-start gap-4'>
      {/* Title Section */}
      <div className='flex items-center gap-4'>
        <div className="logo">
          <Image
            src="/icons/login_logo.svg"
            alt="Login Logo"
            width={20}
            height={20}
          />
        </div>
        <h2 className='font-helvetica-neue text-primary-foreground text-3xl'>Equitycase</h2>
      </div>
      {/* Details of footer */}
      <div className='flex items-start justify-between w-full'>
        {/* Addresh */}
        <div className='flex flex-col items-start gap-4'>
          <div className='text-primary-foreground text-sm font-light'>
            <p>Anand Asset Management, C-3 Haridaya,</p>
            <p>Subhash Rd, opposite Laxmi Cinema,</p>
          </div>
     
           {/* Find us on Section */}
           <div className='flex flex-col items-start justify-start gap-3'>
            <h6 className='text-md font-bold text-primary-foreground'>Find us on :</h6>
            <div className='flex items-center justify-start gap-4'>
              <a href='#' className='cursor-pointer'><Image src={'/icons/footer/facebook.svg'} alt='facebook' height={32} width={32} /></a>
              <a href='#' className='cursor-pointer'><Image src={'/icons/footer/instagrame.svg'} alt='facebook' height={32} width={32} /></a>
              <a href='#' className='cursor-pointer'><Image src={'/icons/footer/whatsapp.svg'} alt='facebook' height={32} width={32} /></a>
              <a href='#' className='cursor-pointer'><Image src={'/icons/footer/youtube.svg'} alt='facebook' height={32} width={32} /></a>
            </div>

          </div>
        
        </div>

        <div className='text-white flex items-start justify-start gap-28 '>
          {/* Company Section */}
          <div className='flex flex-col items-start justify-start '>

            <h6 className='text-md font-bold pb-2'>Company</h6>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>
              <Link href={'/about-us'}>
              About us
              </Link>
              </Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>
              <Link href={'/managers'}>
                Managers
              </Link>
              </Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>
            <Link href={'/faqs'}>
              FAQ&apos;s
            </Link>
              </Button>

          </div>
          {/* Product Section */}
          <div className='flex flex-col items-start justify-start '>

            <h6 className='text-md font-bold pb-2'>Products</h6>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Strategies</Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Screeners</Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Back Test</Button>

          </div>
          {/* Important Disclosures*/}
          <div className='flex flex-col items-start justify-start '>

            <h6 className='text-md font-bold pb-2'>Important Disclosures</h6>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Terms & Conditions</Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Disclaimers</Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Privacy Policy</Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>Refund Policy</Button>

          </div>
          {/* Contact Us Section */}
          <div className='flex flex-col items-start justify-start '>

            <h6 className='text-md font-bold pb-2'>Contact us</h6>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>+91-9925511993</Button>
            <Button variant={'link'} className='text-white text-sm text-start px-0 py-0'>info@profitbuddy.in</Button>
          </div>
        
        </div>
      </div>

      <div className='text-center max-w-md mx-auto pt-8'>
        <p className='text-xs text-primary-foreground text-center'>© {new Date().getFullYear()} Khatavkar Technologies Private Limited. All rights reserved</p>
      </div>
    </WidthWrapper>
  )
}

export default Footer
