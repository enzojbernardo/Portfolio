import OrbitingCirclesGlobe from '@/components/ui/orbiting-circles-02'

const heroContent = {
  title: 'Enzo Bernardo',
  subtitle: 'Business Economics Student at UCLA',
  support:
    'Exploring economics through analysis, data, and technology. Interested in how systems work and building solutions to complex problems.',
  primaryCta: { label: 'Contact', href: '#contact' },
  secondaryCta: { label: 'About me', href: '#education' },
}

function HeroSection() {
  return (
    <section className="hero hero-with-orbits" id="hero">
      <div className="hero-orbits" aria-hidden="true">
        <OrbitingCirclesGlobe />
      </div>

      <div className="hero-content">
        <h1>{heroContent.title}</h1>
        <p className="hero-copy">{heroContent.subtitle}</p>
        <p className="hero-support">{heroContent.support}</p>
        <div className="hero-actions">
          <a className="primary-button" href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
          </a>
          <a className="secondary-button" href={heroContent.secondaryCta.href}>
            {heroContent.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
