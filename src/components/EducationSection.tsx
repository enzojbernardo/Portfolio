const educationItems = [
  {
    school: 'Cathedral Catholic High School',
    years: '2022-2026',
    note: 'Building a strong foundation across math, science, and leadership.',
  },
  {
    school: 'UCLA Business Economics Major',
    years: '2026-2030',
    note: 'Focused on data, decision-making, and the economics of growth.',
  },
]

const courses = [
  'Multivariable Calculus at UCSD Extension',
  'AP Physics C',
  'AP Statistics',
  'AP Macroeconomics',
]

function EducationSection() {
  return (
    <article className="panel" id="education">
      <div className="section-heading">
        <span>01</span>
        <h2>Education</h2>
      </div>
      <div className="stack">
        {educationItems.map((item) => (
          <div className="entry-card" key={item.school}>
            <div>
              <h3>{item.school}</h3>
              <p>{item.note}</p>
            </div>
            <span>{item.years}</span>
          </div>
        ))}
      </div>
      <div className="course-list">
        <h3>Notable Courses</h3>
        <ul>
          {courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export default EducationSection
