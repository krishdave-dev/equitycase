'use client'
import React from 'react'
import { PillHeading } from './pill-heading'
import WidthWrapper from '@/components/width-wrapper'
import Image from 'next/image'

const features = [
    {
      id: 1,
      t1: "Algorithmic",
      t2:"Trading",
      description:
        "Automate your strategies with real-time execution and zero emotions.",
      image: "/icons/landing-page/algorithmic-trading.png", 
      reverse: false, 
    },
    {
      id: 2,
      t1: "Advanced",
      t2:"Back testing Engine",
      description:
        "Validate your ideas with historical market data—fast and accurate.",
      image: "/icons/landing-page/advance-backtesting.png", // replace with your actual image path
      reverse: true, // text left, image right
    },
    {
      id: 3,
      t1: "Powerful",
      t2:"Screeners",
      description:
        "Generate curated stock lists based on your selected filters.",
      image: "/icons/landing-page/powerfull-screeners.png", // replace with your actual image path
      reverse: false,
    },
  ]
  


const PlatformFeatures = () => {
    return (
        <div className='pt-4' >

            {/* Heading section */}
            <WidthWrapper className=' py-9' >
                <PillHeading>
                    <h4 className='font-helvetica-neue-medium font-medium text-[2.5rem] text-primary-blue-3'>Everything You Need to <span className='text-primary-green-2'>Trade Smarter</span></h4>
                </PillHeading>

                <div className='px-15 py-20 font-helvetica-neue-roman -space-y-8'>

                    {
                        features.map((feature)=>(

                    <div key={feature.id} className={`image flex items-center gap-28 ${feature.reverse ? 'flex-row-reverse' : 'flex-row'} `}>
                        <Image src={feature.image} alt={feature.t1 + ' ' + feature.t2}
                            className='h-134 w-114'
                            height={300} width={300} />
                        <div>

                            <PillHeading heightClass='h-24' widthClass='w-3' gap='gap-9 items-start'>
                                <div className='flex flex-col gap-7'>
                                    <div className='flex flex-col '>
                                        <h4 className='text-[2.5rem] text-primary-blue-3 leading-tight'>{feature.t1}</h4>
                                        <h4 className='text-[2.5rem] text-primary-blue-3 leading-tight'>{feature.t2}</h4>
                                    </div>
                                    <p className='text-mid-1 text-2xl'>{feature.description}</p>
                                </div>
                            </PillHeading>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </WidthWrapper>




        </div>
    )
}

export default PlatformFeatures
