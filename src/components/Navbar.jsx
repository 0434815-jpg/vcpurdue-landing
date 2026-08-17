import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const linkList = [
  { label: 'Home', to: '/' },
  { label: 'Team', to: '/team' },
  { label: 'Projects', to: '/projects' },
  { label: 'Events', to: '/events' },
  { label: 'Venture Capital', to: '/venture-capital' },
  { label: 'Partners', to: '/partners' },
  { label: 'Apply', to: '/apply' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const cls = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 group ${
      isActive ? 'text-gold' : 'text-ink hover:text-gold'
    }`

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="font-serif text-xl font-bold text-ink tracking-tight shrink-0">
          VCPurdue
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {linkList.map(link => (
            <NavLink key={link.label} to={link.to} className={cls}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          className="lg:hidden text-ink p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-ivory border-t border-gold/20 px-6 py-5 flex flex-col gap-5">
          {linkList.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-gold' : 'text-ink hover:text-gold'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
