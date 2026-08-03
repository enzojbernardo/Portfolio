import { motion } from 'motion/react'
import { Globe, Link2, Mail, Play } from 'lucide-react'

import { cn } from '@/lib/utils'

export interface ProfileCardProps {
  name?: string
  title?: string
  description?: string
  bulletPoints?: string[]
  imageUrl?: string
  githubUrl?: string
  twitterUrl?: string
  youtubeUrl?: string
  linkedinUrl?: string
  showSocials?: boolean
  className?: string
}

export function ProfileCard(props: ProfileCardProps) {
  const {
    name = 'Michael Chen',
    title = 'Senior Software Engineer, Cloud Infrastructure',
    description =
      'Michael Chen is a seasoned software engineer at TechFlow Solutions with over 8 years of experience building scalable cloud infrastructure and microservices. He specializes in DevOps automation and leads the platform engineering team that serves millions of users daily.',
    bulletPoints,
    imageUrl =
      'https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl = '#',
    twitterUrl = '#',
    youtubeUrl = '#',
    linkedinUrl = '#',
    showSocials = true,
    className,
  } = props

  const socialIcons = [
    { icon: Globe, url: githubUrl, label: 'Website' },
    { icon: Mail, url: twitterUrl, label: 'Updates' },
    { icon: Play, url: youtubeUrl, label: 'Video' },
    { icon: Link2, url: linkedinUrl, label: 'LinkedIn' },
  ]

  return (
    <div className={cn('mx-auto w-full max-w-5xl px-4', className)}>
      <div className="relative hidden items-center md:flex">
        <div className="flex h-[470px] w-[470px] flex-shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-700">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
            draggable={false}
            loading="eager"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="z-10 ml-[-80px] max-w-xl flex-1 rounded-3xl bg-white p-8 shadow-2xl"
        >
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-gray-900">{name}</h2>
            <p className="text-sm font-medium text-gray-700">{title}</p>
          </div>

          {bulletPoints && bulletPoints.length > 0 ? (
            <ul className="mb-8 list-disc space-y-2 pl-5 text-base leading-relaxed text-black">
              {bulletPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="mb-8 text-base leading-relaxed text-black">{description}</p>
          )}

          {showSocials ? (
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 transition-colors hover:scale-105 hover:bg-gray-800"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          ) : null}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-sm bg-transparent text-center md:hidden"
      >
        <div className="mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-3xl bg-gray-200 dark:bg-gray-700">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover"
            draggable={false}
            loading="eager"
          />
        </div>

        <div className="px-4">
          <h2 className="mb-2 text-xl font-bold text-gray-900">{name}</h2>
          <p className="mb-4 text-sm font-medium text-gray-600">{title}</p>
          {bulletPoints && bulletPoints.length > 0 ? (
            <ul className="mb-6 list-disc space-y-1.5 pl-5 text-left text-sm leading-relaxed text-black">
              {bulletPoints.map((point) => (
                <li key={`mobile-${point}`}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="mb-6 text-sm leading-relaxed text-black">{description}</p>
          )}

          {showSocials ? (
            <div className="flex justify-center space-x-4">
              {socialIcons.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 transition-colors hover:bg-gray-800"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-white" />
                </a>
              ))}
            </div>
          ) : null}
        </div>
      </motion.div>
    </div>
  )
}