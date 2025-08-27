// components/ui/pill-heading.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

interface PillHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  colorClass?: string; // optional, for pill color
  heightClass?: string;// optional, for pill height
  widthClass?: string; // optional, for pill width
  gap?:string;
}

export function PillHeading({
  children,
  className,
  colorClass = "bg-primary-blue-3",
  heightClass = "h-8",
  widthClass = "w-1",
  gap = "gap-4", // default gap between pill and text
  ...props
}: PillHeadingProps) {
  return (

    <blockquote className={`flex items-center ${gap}`}>
      {/* Pill shape */}
      <span className={cn("rounded-full", colorClass, heightClass,widthClass)}></span>

      {/* Heading text */}
      {children}

    </blockquote>

  );
}
