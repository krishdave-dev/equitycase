"use client"

import * as React from "react"
import { cn } from "@/lib/utils" // shadcn's class merge helper

type WidthWrapperProps = {
  children: React.ReactNode
  className?: string
}

const WidthWrapper = ({ children, className }: WidthWrapperProps) => {
  return (
    <div
      className={cn(
        "px-42", 
        className
      )}
    >
      {children}
    </div>
  )
}

export default WidthWrapper
