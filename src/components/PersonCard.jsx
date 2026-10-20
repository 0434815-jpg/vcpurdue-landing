import { useState, useEffect } from 'react'
import Reveal from './Reveal'
import { LinkedInGlyph } from './Icons'

// 4:5 portrait box, object-cover, so any source ratio is cropped rather
// than stretched. `photoPosition` (optional, on the person) nudges the
// crop so heads aren't cut; the default keeps the upper part of the frame.
function Photo({ person, className = '' }) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden bg-gold/15 ${className}`}>
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
          style={{ objectPosition: person.photoPosition || '50% 20%' }}
        />
      ) : (
        <span className="font-display absolute inset-0 flex items-center justify-center text-4xl font-bold text-gold">
          {person.initials}
        </span>
      )}
    </div>
  )
}

export default function PersonCard({ person, dark = false, delay = 0 }) {
  const [open, setOpen] = useState(false)
  const hasBio = Boolean(person.bio)
  const hasLink = Boolean(person.linkedin)

  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const frame = `border transition-colors duration-200 ${
    dark ? 'border-white/15 group-hover:border-gold' : 'border-ink/15 group-hover:border-gold'
  }`
  const action = `mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] ${
    dark ? 'text-gold' : 'text-ink'
  } underline decoration-gold decoration-1 underline-offset-4`

  const Label = (
    <>
      <p
        className={`font-display mt-4 text-lg font-bold leading-tight ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {person.name}
      </p>
      <p className={`mt-1 text-sm leading-snug ${dark ? 'text-white/70' : 'text-ink/70'}`}>
        {person.title}
      </p>
    </>
  )

  let Card
  if (hasBio) {
    Card = (
      <button
        onClick={() => setOpen(true)}
        className="group block w-full cursor-pointer text-left"
        aria-label={`Read about ${person.name}`}
      >
        <div className={frame}>
          <Photo person={person} />
        </div>
        {Label}
        <span className={action}>Read bio</span>
      </button>
    )
  } else if (hasLink) {
    Card = (
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group block w-full"
        aria-label={`${person.name} on LinkedIn (opens in a new tab)`}
      >
        <div className={frame}>
          <Photo person={person} />
        </div>
        {Label}
        <span className={action}>
          <LinkedInGlyph className="h-3 w-3" />
          LinkedIn
        </span>
      </a>
    )
  } else {
    Card = (
      <div className="group block w-full">
        <div className={frame}>
          <Photo person={person} />
        </div>
        {Label}
      </div>
    )
  }

  return (
    <Reveal delay={delay}>
      {Card}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 px-6 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={person.name}
        >
          <div
            className="relative w-full max-w-lg border border-gold/40 bg-ivory p-8 text-ink shadow-2xl sm:p-10"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-5 top-5 text-ink/60 transition-colors hover:text-ink"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="mb-6 flex items-center gap-5">
              <Photo person={person} className="w-20 shrink-0" />
              <div className="text-left">
                <p className="font-display text-2xl font-bold leading-tight">{person.name}</p>
                <p className="mt-1 text-sm text-ink/70">{person.title}</p>
              </div>
            </div>

            <p className="mb-7 text-left text-base leading-relaxed text-ink/80">{person.bio}</p>

            {hasLink && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink/80"
              >
                <LinkedInGlyph />
                View LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            )}
          </div>
        </div>
      )}
    </Reveal>
  )
}
