import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <header className="navbar-header">
      <div className="container">
        <nav className="navbar-nav">
          <ul className="navbar-list">
            {links.map((l) => {
              const active = pathname === l.href
              return (
                <li key={l.href}>
                  <Link to={l.href} className={`navbar-link${active ? ' navbar-link--active' : ''}`}>
                    {l.label}
                    {active && <span className="navbar-indicator" aria-hidden="true" />}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
