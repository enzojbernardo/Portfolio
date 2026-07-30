import cathedralImage from '@/assets/Cathedral.jpg'
import uclaImage from '@/assets/UCLA.webp'
import { DestinationCard } from '@/components/ui/card-21'

const uclaDetails = [
  'B.A. Business Economics (2026-2030)',
  'Intro to Microeconomics',
  'Intro to Macroeconomics',
  'Statistics for Economics',
]

const cathedralDetails = [
  'High School Diploma (2022-2026)',
  'AP Physics C',
  'AP Statistics',
]

function EducationSection() {
  return (
    <article className="panel education-panel" id="education">
      <div className="section-heading">
        <h2>Education</h2>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="h-[420px]">
          <DestinationCard
            imageUrl={uclaImage}
            location="UCLA"
            flag=""
            stats="Business Economics Major, 2026-2030"
            href="https://www.ucla.edu"
            themeColor="217 62% 31%"
            hoverDetailsTitle="College & Courses"
            hoverDetails={uclaDetails}
          />
        </div>
        <div className="h-[420px]">
          <DestinationCard
            imageUrl={cathedralImage}
            location="Cathedral Catholic"
            flag=""
            stats="High School, 2022-2026"
            href="https://www.cathedralcatholic.org"
            themeColor="12 58% 35%"
            hoverDetailsTitle="School & Courses"
            hoverDetails={cathedralDetails}
          />
        </div>
      </div>
    </article>
  )
}

export default EducationSection
