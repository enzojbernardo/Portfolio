const education = [
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

const work = [
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

const rowing = [
  'Cathedral Catholic High School Varsity Rower (2022-2026)',
  'Cathedral Catholic High School Team Captain (2025-2026)',
  'UCLA Mens Rowing (2026-Present)',
]

const navItems = [
  { label: 'Education', href: '#education' },
  { label: 'Work', href: '#work' },
  { label: 'Rowing', href: '#rowing' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="page-shell">
      <div className="page-background" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#hero">
          EB
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="eyebrow">React, TypeScript, and Vite</div>
          <h1>Enzo Bernardo</h1>
          <p className="hero-copy">Business Economics Student at UCLA</p>
          <p className="hero-support">
            A concise portfolio scaffold built around the sections in the architecture doc, ready
            for content and polish.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#contact">
              Contact
            </a>
            <a className="secondary-button" href="#education">
              View background
            </a>
          </div>
        </section>

        <section className="content-grid">
          <article className="panel" id="education">
            <div className="section-heading">
              <span>01</span>
              <h2>Education</h2>
            </div>
            <div className="stack">
              {education.map((item) => (
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

          <article className="panel" id="work">
            <div className="section-heading">
              <span>02</span>
              <h2>Work</h2>
            </div>
            <div className="stack">
              {work.map((item) => (
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

          <article className="panel" id="rowing">
            <div className="section-heading">
              <span>03</span>
              <h2>Rowing</h2>
            </div>
            <ul className="feature-list">
              {rowing.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel contact-panel" id="contact">
            <div className="section-heading">
              <span>04</span>
              <h2>Contact</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:eqbernardo@gmail.com">eqbernardo@gmail.com</a>
              <a
                href="https://www.instagram.com/__enzobernardo__"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="footer">
        <p>Enzo Bernardo</p>
        <p>Built with React, TypeScript, and Vite.</p>
      </footer>
    </div>
  )
}

export default App
