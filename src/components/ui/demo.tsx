import cathedralImage from '@/assets/Cathedral.jpg'
import uclaImage from '@/assets/UCLA.webp'
import { DestinationCard } from '@/components/ui/card-21'

const DestinationCardDemo = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-background p-8 md:flex-row md:gap-12">
      <div className="h-[450px] w-full max-w-[320px]">
        <DestinationCard
          imageUrl={uclaImage}
          location="UCLA"
          flag="US"
          stats="Business Economics, Class of 2030"
          href="https://www.ucla.edu"
          themeColor="217 62% 31%"
        />
      </div>
      <div className="h-[450px] w-full max-w-[320px]">
        <DestinationCard
          imageUrl={cathedralImage}
          location="Cathedral Catholic"
          flag="US"
          stats="High School Diploma, Class of 2026"
          href="https://www.cathedralcatholic.org"
          themeColor="12 58% 35%"
        />
      </div>
    </div>
  )
}

export default DestinationCardDemo
