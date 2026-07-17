const workItems = [
  {
    role: 'Content Health Management Intern',
    company: 'American Specialty Health',
    years: 'Summer 2026',
  },
  {
    role: 'Tutor',
    company: 'CrossRoads Tutoring',
    years: '2025-2026',
  },
]

function WorkSection() {
  return (
    <article className="panel" id="work">
      <div className="section-heading">
        <span>02</span>
        <h2>Work</h2>
      </div>
      <div className="stack">
        {workItems.map((item) => (
          <div className="entry-card" key={`${item.role}-${item.company}`}>
            <div>
              <h3>{item.role}</h3>
              <p>{item.company}</p>
            </div>
            <span>{item.years}</span>
          </div>
        ))}
      </div>
    </article>
  )
}

export default WorkSection
