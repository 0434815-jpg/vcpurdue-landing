import { Link } from 'react-router-dom'
import { links, club, boilerlinkLive } from '../config/site'
import { InstagramGlyph, LinkedInGlyph } from './Icons'

const explore = [
  { label: 'Team', to: '/team' },
  { label: 'Projects', to: '/projects' },
  { label: 'Events', to: '/events' },
  { label: 'Venture Capital', to: '/venture-capital' },
  { label: 'Partners', to: '/partners' },
  { label: 'Recruiting', to: '/apply' },
]

const linkClass = 'text-sm text-white/70 transition-colors duration-200 hover:text-gold'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-6 py-16 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <p className="font-wordmark mb-2 text-2xl font-bold">VCPurdue</p>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {club.fullName}
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              The Bridge Between Founders, Startups &amp; Investors.
            </p>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Explore
            </p>
            <ul className="space-y-2.5">
              {explore.map(l => (
                <li key={l.label}>
                  <Link to={l.to} className={linkClass}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Connect
            </p>
            <a href={`mailto:${links.email}`} className={`${linkClass} mb-5 block`}>
              {links.email}
            </a>

            <div className="flex items-center gap-5">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/70 transition-colors duration-200 hover:text-gold"
              >
                <LinkedInGlyph className="h-5 w-5" />
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/70 transition-colors duration-200 hover:text-gold"
              >
                <InstagramGlyph className="h-5 w-5" />
              </a>
              {boilerlinkLive && (
                <a
                  href={links.boilerlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  BoilerLink
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-xs tracking-wide text-white/60 sm:flex-row">
          <p>© VCPurdue 2026</p>
          <p>{club.legalNote}</p>
          <p>Photography by Ruby Kivett</p>
        </div>
      </div>
    </footer>
  )
}
