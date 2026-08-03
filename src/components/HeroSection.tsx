import { CTASection } from '@/components/ui/cta-with-rectangle'

const heroContent = {
  title: 'Enzo Bernardo',
  subtitle: 'Business Economics Student at UCLA',
  support:
    'Exploring economics through analysis, data, and technology. Interested in how systems work and building solutions to complex problems.',
}

function HeroSection() {
  return (
    <section id="hero" className="hero">
      <CTASection
        title={heroContent.title}
        subtitle={heroContent.subtitle}
        description={heroContent.support}
        action={{
          text: 'Scroll to Explore',
          href: '#work',
          variant: 'default',
        }}
      />
    </section>
  )
}

export default HeroSection
