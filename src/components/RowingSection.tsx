import { DestinationCard } from '@/components/ui/card-21'

const rowingDetails = [
  'Cathedral Catholic High School Varsity Rower (2022-2026)',
  'Cathedral Catholic High School Team Captain (2025-2026)',
  'UCLA Men\'s Rowing (2026-Present)',
]

function RowingSection() {
  return (
    <article className="panel work-panel" id="rowing">
      <div className="section-heading">
        <h2>Rowing</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-1">
        <div className="h-[420px]">
          <DestinationCard
            imageUrl="/Rowing.jpeg"
            location="Rowing"
            flag=""
            stats="Varsity rower and team captain"
            href="https://www.usrowing.org/"
            themeColor="196 72% 32%"
            hoverDetailsTitle="Experience"
            hoverDetails={rowingDetails}
          />
        </div>
      </div>
    </article>
  )
}

export default RowingSection
