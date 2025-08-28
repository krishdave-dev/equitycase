import { Play } from "lucide-react"

export interface Tutorial {
  id: string
  title: string
  description: string
  thumbnail: string
  videoUrl?: string
}

interface TutorialCardProps {
  tutorial: Tutorial
}

const TutorialCard = ({ tutorial }: TutorialCardProps) => (
  <div
    className="w-full max-w-[341px] h-[140px] rounded-2xl relative flex items-center cursor-pointer"
    style={{ background: "color-mix(in srgb, var(--primary-high-blue-2) 20%, transparent)" }}
  >
    {/* Thumbnail with Play Button */}
    <div
      className="w-[119px] h-[119px] rounded-lg bg-cover bg-center flex items-center justify-center ml-[11px]"
      style={{ 
        backgroundImage: `url(${tutorial.thumbnail})`}}
    >
      <Play
        className="w-[41px] h-[41px] rounded-lg "
        color="white"
        strokeWidth={2}
      />
    </div>
    {/* Title and Description */}
    <div className="ml-6">
      <h3
        className="mb-2"
        style={{
          fontFamily: "Nunito, Arial, sans-serif",
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: "30px",
          color: "black",
        }}
      >
        {tutorial.title}
      </h3>
      <p className="pr-4"
        style={{
          fontFamily: "Nunito, Arial, sans-serif",
          fontSize: "12px",
          fontWeight: 300,
          lineHeight: "13px",
          color: "var(--darks)",
        }}
      >
        {tutorial.description}
      </p>
    </div>
  </div>
)

export default TutorialCard