import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../theme/ThemeProvider'

const links = [
  { href: '/', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
]

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M12 2.5v2.25M12 19.25V21.5M4.22 4.22l1.59 1.59M18.19 18.19l1.59 1.59M2.5 12H4.75M19.25 12H21.5M4.22 19.78l1.59-1.59M18.19 5.81l1.59-1.59"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
)

const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M20.2 14.1A7.8 7.8 0 0 1 9.9 3.8 8.4 8.4 0 1 0 20.2 14.1Z"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const Navbar = () => {
  const { pathname } = useLocation()
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

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

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
