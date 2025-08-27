'use client'
import React, { useState } from 'react'
import { PillHeading } from './pill-heading'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import WidthWrapper from '@/components/width-wrapper'



const TestimonialCard = () => {
    return (
        <Card className='relative bg-primary-blue-3 rounded-[40px] h-122 w-full py-0'>
            <CardContent className='relative'>

                <div className='absolute right-5 z-0'>
                    <Image src={'/icons/landing-page/lines.svg'} alt='lines' height={300} width={100} className='object-cover w-178 z-0' />
                </div>
                <div className='absolute right-17 bottom-10 z-10'>
                    <Image src={'/icons/landing-page/msg.png'} alt='quate' height={200} width={200} className='h-53 w-75' />
                </div>

                <div className='font-helvetica-neue-roman px-12 py-12 z-20 flex flex-col items-start justify-start gap-20'>
                    <div className='w-2xl'>
                        <h6 className='text-[2rem] text-primary-foreground ' >"EquityCase completely revolutionized
                            our trading process — seamless execution,
                            better coordination, zero wasted time.
                            Truly a game-changer!"</h6>
                    </div>

                    <div className='flex items-center justify-start gap-4'>
                        <div>

                            <Avatar className='h-25 w-25'>
                                <AvatarImage src="/icons/landing-page/avatar.png" />
                                <AvatarFallback>Profile Image</AvatarFallback>
                            </Avatar>

                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h6 className='text-[2rem] font-inter text-primary-foreground font-medium'>Esther Jackson</h6>
                            <div><Image src={'/icons/landing-page/stars.svg'} alt='starts' height={14} width={85} /></div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

const TestimonialsSection = () => {
    const [api, setApi] = useState<CarouselApi>()
    return (

        <>
        <WidthWrapper className='pt-17 pb-52'>
            {/* Heading section */}
            <div className='flex items-start justify-between'>

                <div className='flex flex-col py-9'>
                    <PillHeading heightClass='h-19' widthClass='w-1.5'>
                        <h4 className='font-helvetica-neue-roman font-medium text-[2.5rem] text-primary-blue-3 leading-tight'>
                            The <span className='text-primary-green-2'>Customer is Hero</span>
                            <br /> of Our Business
                        </h4>
                    </PillHeading>

                </div>

                <div className='flex items-center justify-between gap-3 mt-6'>
                    <Button onClick={() => api?.scrollPrev()} variant={'outline'} className=' border-2 border-[#838383] rounded-lg px-2'>
                        <Image src={'/icons/landing-page/left-arrow.svg'} width={20} height={20} alt='arrow' />
                    </Button>
                    <Button onClick={() => api?.scrollNext()} variant={'outline'} className='border-2 border-primary-blue-100 rounded-lg px-2'>
                        <Image src={'/icons/landing-page/right-arrow.svg'} width={20} height={20} alt='arrow' />
                    </Button>

                </div>
            </div>
            <div className='w-full pt-35'>
                <Carousel setApi={setApi} opts={{
                    startIndex: 0,
                    loop: true, // optional: enables infinite loop
                }}>
                    <CarouselContent>
                        <CarouselItem>
                            <TestimonialCard />
                        </CarouselItem>
                        <CarouselItem>
                            <TestimonialCard />
                        </CarouselItem>
                        <CarouselItem>
                            <TestimonialCard />
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
            </div>
        </WidthWrapper>
        </>
    )
}

export default TestimonialsSection
