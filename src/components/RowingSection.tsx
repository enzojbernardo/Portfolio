import { ProfileCard } from '@/components/ui/profile-card'

function RowingSection() {
  return (
    <article className="panel work-panel" id="rowing">
      <div className="section-heading">
        <h2>Rowing</h2>
      </div>
      <ProfileCard
        name="Rowing"
        title="Cathedral Catholic (2022-2026) • UCLA Men's Rowing (2026-Present)"
        bulletPoints={[
          'Cathedral Catholic High School Varsity Rower (2022-2026)',
          'Cathedral Catholic High School Team Captain (2025-2026)',
          "UCLA Men's Rowing (2026-Present)",
        ]}
        imageUrl="/Rowing.jpeg"
        showSocials={false}
      />
    </article>
  )
}

export default RowingSection
