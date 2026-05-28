import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/tutorials', label: 'Tutorials' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-beige">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-2xl">🪚</span>
          <span className="font-heading text-xl font-bold text-walnut">Grandpa's Workshop</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-walnut' : 'text-charcoal hover:text-cedar'}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button aria-label="Menu" className="md:hidden text-walnut text-2xl" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <nav className="md:hidden bg-cream border-t border-beige">
          <div className="container-x py-4 flex flex-col gap-3">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
                className={({ isActive }) => `py-2 font-medium ${isActive ? 'text-walnut' : 'text-charcoal'}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
