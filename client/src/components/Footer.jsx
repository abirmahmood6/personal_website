import React from 'react'

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abir-mahmood1/' },
  { label: 'GitHub', href: 'https://github.com/abirmahmood6' },
]

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p className="site-footer-copy">
          © {year} Abir Mahmood
        </p>
        <nav className="site-footer-links" aria-label="Footer">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
