const contactLinks = [
  {
    label: 'eqbernardo@gmail.com',
    href: 'mailto:eqbernardo@gmail.com',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/__enzobernardo__',
    external: true,
  },
]

function ContactSection() {
  return (
    <article className="panel contact-panel" id="contact">
      <div className="section-heading">
        <span>04</span>
        <h2>Contact</h2>
      </div>
      <div className="contact-links">
        {contactLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}

export default ContactSection
