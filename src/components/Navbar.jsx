import { useState } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Team', href: '#team' },
  { label: 'Apply', href: '#apply' },
  { label: 'Venture Capital', href: '#our-work' },
  { label: 'Partners', href: '#partners' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ivory border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#home" className="font-serif text-xl font-bold text-ink tracking-tight">
          VCPurdue
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm font-medium text-ink hover:text-gold transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-ink p-1"
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
        <div className="md:hidden bg-ivory border-t border-gold/20 px-6 py-5 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-ink hover:text-gold transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
