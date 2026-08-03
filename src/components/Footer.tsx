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
        description={
          <span className="inline-flex flex-col gap-1">
            <a href="mailto:eqbernardo@gmail.com" className="hover:text-primary">
              eqbernardo@gmail.com
            </a>
            <a href="tel:+18582059156" className="hover:text-primary">
              (858) 205-9156
            </a>
          </span>
        }
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
