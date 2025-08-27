import React from 'react'
import { PillHeading } from './pill-heading'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import WidthWrapper from '@/components/width-wrapper'

type CardProp = {
    tP1: string;
    tP2: string;
    desc: string;
    bgColor: string;
    textColor: string;
}

const cardDetails: CardProp[] = [
    {
        tP1: 'Integrated Risk',
        tP2: 'Management Tools',
        desc: 'Protect your capital with built-in risk controls such as stop-loss, trailing stop, position sizing, and portfolio-level exposure limits. Trade with confidence knowing that risk is calculated and contained at every step.',
        bgColor: 'bg-primary-card-gray',
        textColor: 'text-black'
    },
    {
        tP1: 'Smart Strategy ',
        tP2: 'Optimizer',
        desc: 'Go beyond basic testing—our strategy optimizer uses advanced analytics and parameter sweeps to help you discover the most profitable version of your trading ideas without curve-fitting.',
        bgColor: 'bg-primary-high-blue-2',
        textColor: 'text-primary-blue-3'
    },
    {
        tP1: 'Seamless Broker',
        tP2: 'Integration',
        desc: 'Connect effortlessly to leading brokers and exchanges for smooth, real-time trade execution. No technical setup needed—just link your account and start trading with full control.',
        bgColor: 'bg-primary-card-gray',
        textColor: 'text-black'
    }
]


const Cards = ({ tP1, tP2, desc, bgColor, textColor }: CardProp) => {

    return (
        <>

            <Card className={`shadow-none ${bgColor} border-none w-[23vw] gap-2`}>
                <CardHeader className=" relative">
                    <div className="absolute -top-1/2 left-1/2 transform -translate-x-1/2">
                        <div className={`w-22 h-22  rounded-full ${bgColor} flex items-center justify-center border-6 border-white `}>
                            <Image src={'/icons/landing-page/tradingArrow.svg'} alt='trading-symbole' width={31} height={31} />
                        </div>
                    </div>
                    <div className="pt-12 font-helvetica-neue-roman">
                        <h5 className={`text-2xl font-medium ${textColor}`}>
                            {tP1}
                            <br />
                            {tP2}
                        </h5>
                    </div>
                </CardHeader>
                <CardContent className="pt-0">
                    <p className={`${textColor} font-helvetica-neue-roman text-base leading-relaxed`}>
                        {desc}
                    </p>
                </CardContent>
            </Card>


        </>
    )
}

const AdvantagesSection = () => {
    return (
        <WidthWrapper className='pt-4 pb-4' >
            {/* Heading section */}
            <div className='flex items-center py-9' >
                <PillHeading>
                    <h4 className='font-helvetica-neue-medium font-medium text-[2.5rem] text-primary-blue-3'>Advantages</h4>
                </PillHeading>
            </div>
            <div className='flex items-center justify-between flex-wrap'>
                {
                    cardDetails.map((cd, index) => (
                        <Cards key={index} tP1={cd.tP1} tP2={cd.tP2} desc={cd.desc} textColor={cd.textColor} bgColor={cd.bgColor} />
                    ))
                }
            </div>
        </WidthWrapper>
    )
}

export default AdvantagesSection
