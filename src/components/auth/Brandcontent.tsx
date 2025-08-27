'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function Brandcontent() {
  return (
    <Card className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary-blue-100 px-6 py-4">
      <CardContent className="text-center p-0">
        <h3 className="font-semibold text-base text-primary-foreground">
          Growth on Autopilot
        </h3>
        <p className="text-sm text-primary-foreground/80">
          Invest smarter with us
        </p>
      </CardContent>
    </Card>
  )
}
