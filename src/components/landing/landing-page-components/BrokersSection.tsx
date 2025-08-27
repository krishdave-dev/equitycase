'use client'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import { PillHeading } from './pill-heading'
import WidthWrapper from '@/components/width-wrapper'
const Brokers = () => {
    return (
        <>
            <Card className='rounded-none shadow-none py-4 bg-primary-blue-2'>
                <CardContent className=' px-0'>

                    <WidthWrapper className='flex items-center justify-between'>
                    
                    <div>
                        <Image src={'/icons/landing-page/sharekhan.png'} alt='brokers icon' height={170} width={180}  />
                    </div>
                    <div>
                        <Image src={'/icons/landing-page/grow.png'} alt='brokers icon' height={170} width={180} />
                    </div>
                    <div>
                        <Image src={'/icons/landing-page/kite.png'} alt='brokers icon' height={170} width={180} />
                    </div>
                    </WidthWrapper>
                </CardContent>
            </Card>
        </>
    )
}
const BrokersSection = () => {
    return (
        <div className='flex flex-col gap-9'>
            <div className='flex justify-center items-center'>
                <PillHeading colorClass='bg-primary-blue-2' heightClass='h-8' widthClass='w-2'>
                    <h3 className='font-helvetica-neue-roman text-[2.5rem] text-primary-blue-2'>
                        Working with world class Brokers.
                    </h3>
                </PillHeading>

            </div>

            <div>
                <Brokers />
            </div>
        </div>
    )
}

export default BrokersSection
