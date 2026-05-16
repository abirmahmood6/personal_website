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
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
      <div className="container">
        <nav className="flex items-center justify-center py-5">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <li key={l.href} className="list-none">
                <Link
                  to={l.href}
                  className={`text-sm font-medium px-3 py-2 rounded-full transition duration-200 ${
                    pathname === l.href ? 'bg-slate-100 text-slate-900' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
