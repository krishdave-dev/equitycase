'use client'
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

type InfoSection = {
    title: string;
    desc: string;
    bgColor?: string;
    titleColor?: string;
    textColor?: string;
};


const Cards = ({ title, desc, bgColor, titleColor, textColor }: InfoSection) => {

    return (
        <>

            <Card className={`shadow-none ${bgColor} border-none w-[23vw] gap-2`}>
                <CardHeader className=" relative">

                    <div className=" font-helvetica-neue-roman">
                        <h5 className={`text-4xl  ${titleColor}`}>
                            {title}
                        </h5>
                    </div>
                </CardHeader>
                <CardContent className="pt-0 pb-4">
                    <p className={`${textColor} font-helvetica-neue-roman text-2xl leading-relaxed`}>
                        {desc}
                    </p>
                </CardContent>
            </Card>


        </>
    )
}
// Change the color of the fonts for heading and desc 
const companyInfo: InfoSection[] = [
    {
        title: "Our Mission :",
        desc:
            "We create smart, fast, and reliable trading algorithms that help people trade better and stay ahead in the markets.",
        bgColor: 'bg-primary-card-gray',
        titleColor: 'text-black',
        textColor: 'text-mid-1'
    },
    {
        title: "Our Vision :",
        desc:
            "To lead the future of trading by building a fully autonomous, data-driven financial ecosystem driven by innovation and trust.",
        bgColor: 'bg-primary-high-blue-2',
        titleColor: 'text-primary-blue-3',
        textColor: 'text-primary-blue-2'
    },
    {
        title: "Our Values :",
        desc:
            "Innovation, Precision, Integrity, Agility, and Client-Centric Excellence - shaping every code, strategy, and decision.",
        bgColor: 'bg-primary-card-gray',
        titleColor: 'text-black',
        textColor: 'text-mid-1'
    },
];


const MissionVisionValues = () => {
    return (
        <div className='pt-4 px-42 pb-4'>

            <div className='flex items-stretch justify-between flex-wrap'>
                {
                    companyInfo.map((cd, index) => (
                        <Cards key={index} title={cd.title} desc={cd.desc} textColor={cd.textColor} bgColor={cd.bgColor} titleColor={cd.titleColor} />
                    ))
                }
            </div>

        </div>
    )
}

export default MissionVisionValues
