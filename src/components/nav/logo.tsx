'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from 'next/link'
const Logo = ({logoColor}:{logoColor:string}) => {
    return (
        <div>
            <div>
                <Avatar className={` p-4 h-20 w-20 cursor-pointer ${logoColor}`}> {/* Bigger container */}
                    <Link href={'/'} >
                    <AvatarImage src="/icons/landing_logo.svg" className="h-full w-full" />
                    </Link>
                    <AvatarFallback className="text-lg">Logo</AvatarFallback>
                </Avatar>
            </div>

        </div>
    )
}

export default Logo
