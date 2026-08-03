"use client"

import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTAProps {
  title: string
  subtitle?: string
  description?: string
  action: {
    text: string
    href: string
    variant?: 'default' | 'glow'
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({
  title,
  subtitle,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section
      className={cn(
        'relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[var(--color-blush-field)] text-[var(--color-charcoal-ink)]',
        className,
      )}
    >
      {withGlow ? (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border-y border-[rgba(235,71,38,0.12)] bg-[rgba(255,255,255,0.16)]"
        />
      ) : null}

      <div className="relative mx-auto flex w-full max-w-[1200px] flex-1 flex-col items-center justify-center px-6 py-24 text-center sm:px-8 md:py-32">
        <div className="flex w-full max-w-[1000px] flex-col items-center gap-5 sm:gap-6">
          <h1
            className="text-[clamp(4rem,12vw,11rem)] font-normal leading-[0.82] tracking-[-0.04em]"
            style={{ fontFamily: 'var(--font-custom47178)', color: '#16302b' }}
          >
            {title}
          </h1>

          {subtitle ? (
            <p
              className="text-[clamp(1.125rem,2vw,1.375rem)] leading-[1.35] tracking-[-0.006em] text-[var(--color-charcoal-ink)]"
              style={{ fontFamily: 'var(--font-custom47163)' }}
            >
              {subtitle}
            </p>
          ) : null}

          <Button
            variant={action.variant || 'default'}
            size="lg"
            className="mt-2 inline-flex items-center gap-2 text-[16px] opacity-0 animate-fade-in-up delay-500"
            asChild
          >
            <a href={action.href}>
              <span>{action.text}</span>
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
