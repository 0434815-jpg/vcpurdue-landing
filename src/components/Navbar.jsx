import { useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { applyOpen } from '../config/site'
import Button from './Button'

const linkList = [
  { label: 'Home', to: '/' },
  { label: 'Team', to: '/team' },
  { label: 'Projects', to: '/projects' },
  { label: 'Events', to: '/events' },
  { label: 'Venture Capital', to: '/venture-capital' },
  { label: 'Partners', to: '/partners' },
  // "Apply" only while applications are open; "Recruiting" otherwise.
  { label: applyOpen ? 'Apply' : 'Recruiting', to: '/apply' },
]

export default function Navbar() {
  // The menu is "open" only for the route it was opened on, so it closes
  // itself on navigation without an effect.
  const { pathname } = useLocation()
  const [openPath, setOpenPath] = useState(null)
  const open = openPath === pathname

  const cls = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 group ${
      isActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
    }`

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-gold/20 bg-ivory px-6"
      aria-label="Main"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link
          to="/"
          className="font-wordmark shrink-0 text-xl font-bold tracking-tight text-ink"
        >
          VCPurdue
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {linkList.map(link => (
            <NavLink key={link.label} to={link.to} className={cls}>
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
          <Button to="/partners" variant="outlineInk" size="sm">
            Partner With Us
          </Button>
        </div>

        <button
          className="p-1 text-ink lg:hidden"
          onClick={() => setOpenPath(open ? null : pathname)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="-mx-6 flex flex-col gap-5 border-t border-gold/20 bg-ivory px-6 py-6 lg:hidden"
        >
          {linkList.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                `text-base font-medium ${isActive ? 'text-ink' : 'text-ink/70'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Button to="/partners" variant="ink" className="mt-1">
            Partner With Us
          </Button>
        </div>
      )}
    </nav>
  )
}
