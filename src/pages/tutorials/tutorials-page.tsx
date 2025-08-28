'use client'
import React from 'react'
import TutorialSection from '@/components/tutorials/TutorialSection'
import WidthWrapper from '@/components/width-wrapper'
import TutorialHeading from '@/components/tutorials/TutorialsHeading'
import { Tutorial } from '@/components/tutorials/TutorialCard'

const thumbnails = [
  '/icons/tutorials/thumbnail-image1.jpg',
  '/icons/tutorials/thumbnail-image2.jpg',
  '/icons/tutorials/thumbnail-image3.jpg'
]

const makeTutorials = (startId: number) =>
  Array.from({ length: 6 }, (_, i) => ({
    id: `${startId + i}`,
    title: `Tutorial ${((i % 3) + 1)}`,
    description: 'Getting Started with EquityCase',
    thumbnail: thumbnails[i % 3]
  }))

const generalTutorials: Tutorial[] = makeTutorials(1)
const screenersTutorials: Tutorial[] = makeTutorials(7)
const backtestTutorials: Tutorial[] = makeTutorials(13)

const TutorialsPage = () => {
  return (
    <WidthWrapper>
      <TutorialHeading/>
      <main className="py-5">
        <div className="space-y-16">
          <TutorialSection title="General" tutorials={generalTutorials} />
          <TutorialSection title="Screeners" tutorials={screenersTutorials} />
          <TutorialSection title="Backtest" tutorials={backtestTutorials} />
        </div>
      </main>
    </WidthWrapper>
  )
}

export default TutorialsPage