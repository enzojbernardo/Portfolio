import * as React from 'react'
import { ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string
  location: string
  flag: string
  stats: string
  href: string
  themeColor: string
  hoverDetailsTitle?: string
  hoverDetails?: string[]
}

const isExternalLink = (href: string) => /^(https?:)?\/\//.test(href) || href.startsWith('mailto:')

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      stats,
      href,
      themeColor,
      hoverDetailsTitle,
      hoverDetails,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={
          {
            '--theme-color': themeColor,
          } as React.CSSProperties
        }
        className={cn('group h-full w-full', className)}
        {...props}
      >
        <a
          href={href}
          target={isExternalLink(href) ? '_blank' : undefined}
          rel={isExternalLink(href) ? 'noreferrer noopener' : undefined}
          className="relative block h-full w-full overflow-hidden rounded-2xl shadow-lg transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.6)]"
          aria-label={`Explore details for ${location}`}
          style={{
            boxShadow: '0 0 40px -15px hsl(var(--theme-color) / 0.5)',
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, hsl(var(--theme-color) / 0.9), hsl(var(--theme-color) / 0.6) 30%, transparent 60%)',
            }}
          />

          <div className="relative flex h-full flex-col justify-end p-6 text-white">
            <h3 className="text-3xl font-bold tracking-tight">
              {location}
              {flag ? <span className="ml-1 text-2xl">{flag}</span> : null}
            </h3>
            <p className="mt-1 text-sm font-medium text-white/80">{stats}</p>

          </div>

          {hoverDetails && hoverDetails.length > 0 ? (
            <div className="absolute inset-x-4 top-4 rounded-xl border border-white/60 bg-white/25 p-4 text-slate-950 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100">
              {hoverDetailsTitle ? (
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-800/90">
                  {hoverDetailsTitle}
                </p>
              ) : null}
              <ul className="m-0 space-y-1.5 p-0 pl-4 text-sm text-slate-900/90">
                {hoverDetails.map((detail) => (
                  <li key={`${location}-${detail}`}>{detail}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </a>
      </div>
    )
  },
)

DestinationCard.displayName = 'DestinationCard'

export { DestinationCard }