import { CTASection } from '@/components/ui/cta-with-rectangle'

export function CTADemo() {
  return (
    <CTASection
      badge={{
        text: 'Agency',
      }}
      title="Worth Agency"
      subtitle="Studio gallery at golden hour"
      description="A warm editorial landing page with a single vermilion accent and confident restraint."
      action={{
        text: 'Get Started',
        href: '/docs',
        variant: 'default',
      }}
    />
  )
}
