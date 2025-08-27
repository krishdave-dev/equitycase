import Brandcontent from "@/components/auth/Brandcontent"
import Brandpanel from "@/components/auth/Brandpanel"
import React from "react"

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        < section className="bg-primary-blue-100" >
            <div className="min-h-screen flex" >
                {/* Brand Section */}
                <Brandpanel />

                {/* Form Section */}
                {children}

                {/* Brand content */}
                <Brandcontent />
            </div>
        </section >
    )
}