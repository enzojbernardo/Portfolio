import { useEffect, useState } from 'react'

const navItems = [
  { label: 'Education', href: '#education' },
  { label: 'Work', href: '#work' },
  { label: 'Rowing', href: '#rowing' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`topbar ${isScrolled ? 'topbar-scrolled' : ''}`}>
      <a className="brand" href="#hero">
        EB
      </a>
      <nav className="nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
