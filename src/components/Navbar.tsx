const navItems = [
  { label: 'Education', href: '#education' },
  { label: 'Work', href: '#work' },
  { label: 'Rowing', href: '#rowing' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="topbar">
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
