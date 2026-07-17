import ContactSection from './components/ContactSection'
import EducationSection from './components/EducationSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import RowingSection from './components/RowingSection'
import WorkSection from './components/WorkSection'

function App() {
  return (
    <div className="page-shell">
      <div className="page-background" aria-hidden="true" />
      <Navbar />

      <main>
        <HeroSection />

        <section className="content-grid">
          <EducationSection />
          <WorkSection />
          <RowingSection />
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
