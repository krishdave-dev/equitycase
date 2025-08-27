import Image from 'next/image'
import React from 'react'
import { PillHeading } from '../landing/landing-page-components/pill-heading'

const HeroSection = () => {
    return (
        <div className='w-full h-[138vh]'>
            <div className=' h-[130vh] w-full bg-primary-blue-2 rounded-b-4xl'>

                <div className='absolute right-0 -top-35 z-30 pointer-events-none '>
                    <Image src={'/icons/landing-page/bg-image.svg'} alt='Logo' className=' h-300 w-165' height={10} width={10} />
                </div>
                <div className='absolute left-0 top-0 z-30 pointer-events-none '>
                    <Image src={'/icons/landing-page/bg-image1.svg'} alt='Logo' className='h-60 w-60' height={10} width={10} />
                </div>
                <div className="relative top-16 z-10   flex flex-col  gap-15 text-start text-white w-4xl mx-auto">
                    {/* Heading Part */}
                    <div className='text-5xl font-helvetica-neue-medium flex flex-col gap-4 items-start justify-start font-[500]'>
                        <h1>Harnessing Algorithms to Redefine</h1>
                        <h1 className='text-[#5BF699] font-[750]'>The Future of Trading</h1>
                    </div>

                    <div className='flex flex-col items-start justify-start gap-30'>


                        <div className='flex flex-col w-4xl items-start justify-start gap-4 '>
                            <div>
                                <PillHeading colorClass='bg-white'>
                                    <h2 className='text-4xl  font-helvetica-neue-roman'>Our Story</h2>
                                </PillHeading>
                            </div>
                            <div className=' text-2xl pl-5'>
                                <p>
                                    Founded in 1999, Anand Money Changers Private Limited is a trusted name in India's foreign exchange industry. As a Full-Fledged Money Changer (FFMC), the company is authorized by the Reserve Bank of India to offer a range of forex services to individuals and businesses. With over two decades of experience, the company has built a strong reputation for reliability, compliance, and customer-centric service.
                                </p>

                            </div>
                        </div>
                        <div className='flex flex-col w-4xl items-start justify-start gap-4 font-helvetica-neue'>
                            <div>
                                <PillHeading colorClass='bg-white'>
                                    <h2 className='text-4xl  font-helvetica-neue-roman'>About Us</h2>
                                </PillHeading>
                            </div>
                            <div className=' text-2xl pl-5'>
                                <p>
                                    Founded in 1999, Anand Money Changers Private Limited is a trusted name in India's foreign exchange industry. As a Full-Fledged Money Changer (FFMC), the company is authorized by the Reserve Bank of India to offer a range of forex services to individuals and businesses. With over two decades of experience, the company has built a strong reputation for reliability, compliance, and customer-centric service.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
