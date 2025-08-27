'use client'
import React from 'react'
import { NavbarItems } from './navbar-items'
import Logo from './logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const LandingNavbar = () => {

    const pathname = usePathname();
    const whiteNavbar = ["/", "/about-us"];
    let bgColor = "bg-whites/50 backdrop-blur-[40px]"
    let navItemsColor = "bg-primary-blue"
    let logoColor = "bg-primary-blue"

    if (pathname && whiteNavbar.includes(pathname)) {
        bgColor = "bg-primary-blue-2"
        navItemsColor = "bg-navbar-1"
        logoColor = "bg-navbar-1"
    }

    return (
        <div className={` sticky top-0 ${bgColor}   w-full flex justify-center items-center z-20 `}>
            <div className='pt-6 pb-3 flex items-center justify-center gap-16'>

                <Logo logoColor={logoColor} />
                <NavbarItems navItemsColor={navItemsColor} />
                <Link href={'/login'}>
                    <Button
                        className={`${navItemsColor} text-primary-blue-2 font-helvetica-neue-roman rounded-[50px] text-2xl h-19 w-39 ${navItemsColor === "bg-navbar-1"
                                ? "hover:bg-navbar-1/90"
                                : "hover:bg-primary-blue/90"
                            }`}
                    >
                        Sign In
                    </Button>

                </Link>

            </div>
        </div>
    )
}

