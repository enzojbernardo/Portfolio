const heroContent = {
  eyebrow: 'React, TypeScript, and Vite',
  title: 'Enzo Bernardo',
  subtitle: 'Business Economics Student at UCLA',
  support:
    'A concise portfolio scaffold built around the sections in the architecture doc, ready for content and polish.',
  primaryCta: { label: 'Contact', href: '#contact' },
  secondaryCta: { label: 'View background', href: '#education' },
}

function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="eyebrow">{heroContent.eyebrow}</div>
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
    </section>
  )
}

export default HeroSection
