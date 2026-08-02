import { FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Footer7 } from '@/components/ui/footer-7'

function Footer() {
  return (
    <footer id="contact">
      <Footer7
        logo={{
          url: '#hero',
          src: '/logo.png',
          alt: 'Enzo Bernardo logo',
          title: 'EnzoBernardo.com',
        }}
        sections={[
          {
            title: 'Education',
            links: [
              { name: 'UCLA Business Economics', href: '#education' },
              { name: 'Cathedral Catholic', href: '#education' },
            ],
          },
          {
            title: 'Work',
            links: [
              { name: 'American Specialty Health', href: '#work' },
              { name: 'CrossRoads Tutoring', href: '#work' },
            ],
          },
          {
            title: 'Rowing',
            links: [
              { name: 'Varsity & Captain', href: '#rowing' },
              { name: 'UCLA Men\'s Rowing', href: '#rowing' },
            ],
          },
        ]}
        description="A collection of projects and experiences in economics, athletics, and technology."
        socialLinks={[
          {
            icon: <FaInstagram className="size-5" />,
            href: 'https://www.instagram.com/__enzobernardo__',
            label: 'Instagram',
          },
          {
            icon: <FaLinkedin className="size-5" />,
            href: 'https://www.linkedin.com/in/enzojbernardo',
            label: 'LinkedIn',
          },
        ]}
        copyright="© 2026 Enzo Bernardo. All rights reserved."
        legalLinks={[]}
      />
    </footer>
  )
}

export default Footer
