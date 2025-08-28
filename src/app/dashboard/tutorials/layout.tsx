import Footer from "@/components/Footer"
import { LandingNavbar } from "@/components/nav/landing-navbar"
import React from "react"

export default function LandingLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <LandingNavbar />
            {children}
            <Footer />
        </div>
    )
}