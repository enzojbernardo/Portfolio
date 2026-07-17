const rowingItems = [
  'Cathedral Catholic High School Varsity Rower (2022-2026)',
  'Cathedral Catholic High School Team Captain (2025-2026)',
  'UCLA Mens Rowing (2026-Present)',
]

function RowingSection() {
  return (
    <article className="panel" id="rowing">
      <div className="section-heading">
        <span>03</span>
        <h2>Rowing</h2>
      </div>
      <ul className="feature-list">
        {rowingItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  )
}

export default RowingSection
