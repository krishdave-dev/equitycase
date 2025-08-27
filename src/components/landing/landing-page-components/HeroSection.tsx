import Image from 'next/image'
import React from 'react'


const DashboardImage = () => {
    return (
        <>
        <div className='border-12 border-primary-blue-2 absolute left-[10.5%] top-[76%] h-[37rem] w-[77vw] rounded-xl p-1 '>

            <Image  src={'/icons/landing-page/dashboard-image.svg'} alt='Logo' className='object-cover rounded-sm' fill />
        </div>
        </>
    )
}



export const HeroSection = () => {
    return (
        <div className='w-full h-[150vh]'>
            <div className=' h-[100vh] w-full bg-primary-blue-2'>

                <div className='absolute right-0 top-0 z-30 pointer-events-none '>
                    <Image src={'/icons/landing-page/bg-image.svg'} alt='Logo' className=' h-230 w-165' height={10} width={10} />
                </div>
                <div className='absolute left-0 top-0 z-30 pointer-events-none '>
                    <Image src={'/icons/landing-page/bg-image1.svg'} alt='Logo' className='h-60 w-60' height={10} width={10} />
                </div>
                <div className="relative top-10 z-10  font-helvetica-neue-roman flex flex-col justify-center items-center text-start">
                    <div className='flex  flex-col gap-7'>
                        <div className='flex text-[5rem] flex-col  items-start justify-center'>


                         
                                <h1 className="text-primary-foreground leading-tight">Smarter Trading</h1>
                                <h1 className="text-primary-foreground leading-tight">
                                    Starts With <span className="text-[#5BF699]">Execution</span>
                                </h1>
                     
                        </div>
                        <div>
                            <h5 className='text-primary-foreground text-[2rem]'>Equitycase  Growth on Autopilot</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <DashboardImage/>
                </div>


            </div>
        </div>
    )
}

