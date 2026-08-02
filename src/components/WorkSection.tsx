import { DestinationCard } from '@/components/ui/card-21'

const ashDetails = [
  'Content Health Management Intern (Summer 2026)',
  'Assisted with healthcare content operations',
  'Supported process tracking and quality checks',
]

const crossroadsDetails = [
  'Tutor (2025-2026)',
  'Delivered one-on-one academic support',
  'Built personalized study plans for students',
]

function WorkSection() {
  return (
    <article className="panel work-panel" id="work">
      <div className="section-heading">
        <h2>Work</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="h-[420px]">
          <DestinationCard
            imageUrl="/ASH.webp"
            location="American Specialty Health"
            flag=""
            stats="Content Health Management Intern, Summer 2026"
            href="https://www.ashcompanies.com/"
            themeColor="205 46% 34%"
            hoverDetailsTitle="Role & Highlights"
            hoverDetails={ashDetails}
          />
        </div>
        <div className="h-[420px]">
          <DestinationCard
            imageUrl="/Crossroads.png"
            location="CrossRoads Tutoring"
            flag=""
            stats="Tutor, 2025-2026"
            href="https://www.crossroadstutoring.com/"
            themeColor="24 56% 36%"
            hoverDetailsTitle="Role & Highlights"
            hoverDetails={crossroadsDetails}
          />
        </div>
      </div>
    </article>
  )
}

export default WorkSection
