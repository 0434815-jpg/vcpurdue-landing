import { Link } from 'react-router-dom'
import { links, club, boilerlinkLive } from '../config/site'

const explore = [
  { label: 'Team', to: '/team' },
  { label: 'Projects', to: '/projects' },
  { label: 'Events', to: '/events' },
  { label: 'Venture Capital', to: '/venture-capital' },
  { label: 'Partners', to: '/partners' },
  { label: 'Apply', to: '/apply' },
]

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-16">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          <div>
            <p className="font-serif text-white text-lg font-bold mb-3">
              {club.fullName}
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Where founders, investors, and ventures converge.
            </p>
          </div>

          <div>
            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-5">Explore</p>
            <ul className="space-y-2.5">
              {explore.map(l => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-white/60 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-gold text-xs uppercase tracking-[0.15em] mb-5">Connect</p>
            <a
              href={`mailto:${links.email}`}
              className="text-white/60 hover:text-gold transition-colors duration-200 text-sm block mb-5"
            >
              {links.email}
            </a>

            <div className="flex items-center gap-6">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/50 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/50 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>

              {boilerlinkLive && (
                <a
                  href={links.boilerlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BoilerLink"
                  className="text-white/50 hover:text-gold transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-white/30 text-xs tracking-wide">© VCPurdue 2026</p>
          <p className="text-white/30 text-xs tracking-wide">{club.legalNote}</p>
        </div>

      </div>
    </footer>
  )
}
