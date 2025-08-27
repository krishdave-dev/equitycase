'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Separator } from './ui/separator'

const Heading = ({ className, children }: { className?: string, children: React.ReactNode }) => {
    return (
        <div className={cn("w-full flex flex-col gap-2", className)}>
            {children}
            <Separator />
        </div>
    )
}

export default Heading
