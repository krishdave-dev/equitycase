import TutorialCard, { Tutorial } from "./TutorialCard"

interface TutorialSectionProps {
  title: string
  tutorials: Tutorial[]
}

const TutorialSection = ({ title, tutorials }: TutorialSectionProps) => {
  // Split tutorials into chunks of 3 for grid rows
  const tutorialRows = []
  for (let i = 0; i < tutorials.length; i += 3) {
    tutorialRows.push(tutorials.slice(i, i + 3))
  }

  return (
    <section className="mb-8 flex flex-col items-center w-full">
      {/* heading  */}
      <div className="mb-6 w-full">
        <div className="inline-block">
          <h2 
            className="text-black "
            style={{
              fontFamily: "Nunito, Arial, sans-serif",
              fontSize: "24px",
              fontWeight: 400,
            }}
          >
            {title}
          </h2>
          <div className="h-px bg-whites-2 w-full" />
        </div>
      </div>
      
      {/* Dynamic Rows */}
      <div className="space-y-10">
        {tutorialRows.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {row.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}

export default TutorialSection