import { useState, useEffect } from 'react'

const LinkedInGlyph = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

// Photos use object-cover inside a fixed square, so any source aspect
// ratio is safe — stretched photos were flagged early by the president.
function Avatar({ person, size = 'w-24 h-24' }) {
  return (
    <div
      className={`${size} rounded-full overflow-hidden border border-gold/40 bg-gold/10 flex items-center justify-center shrink-0 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-200`}
    >
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="font-serif text-gold font-semibold text-lg">{person.initials}</span>
      )}
    </div>
  )
}

export default function PersonCard({ person, dark = false }) {
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

  const Label = (
    <>
      <p
        className={`font-serif font-semibold text-base mb-1 group-hover:text-gold transition-colors duration-200 ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {person.name}
      </p>
      <p className={`text-sm leading-snug ${dark ? 'text-white/50' : 'text-ink/50'}`}>
        {person.title}
      </p>
    </>
  )

  // With a bio the card opens a modal; without one it links straight to
  // LinkedIn. Either way the LinkedIn URL stays reachable — advisors
  // have bios, so their links were previously buried.
  let Card
  if (hasBio) {
    Card = (
      <button
        onClick={() => setOpen(true)}
        className="flex flex-col items-center text-center group cursor-pointer w-full"
        aria-label={`Read about ${person.name}`}
      >
        <div className="mb-5">
          <Avatar person={person} />
        </div>
        {Label}
        <span className="mt-2 text-[11px] tracking-wide uppercase text-gold/70 group-hover:text-gold transition-colors">
          Read bio
        </span>
      </button>
    )
  } else if (hasLink) {
    Card = (
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center group w-full"
      >
        <div className="mb-5">
          <Avatar person={person} />
        </div>
        {Label}
        <span className="mt-2 inline-flex items-center gap-1 text-[11px] tracking-wide uppercase text-gold/70 group-hover:text-gold transition-colors">
          <LinkedInGlyph className="w-3 h-3" />
          LinkedIn
        </span>
      </a>
    )
  } else {
    Card = (
      <div className="flex flex-col items-center text-center group w-full">
        <div className="mb-5">
          <Avatar person={person} />
        </div>
        {Label}
      </div>
    )
  }

  return (
    <>
      {Card}

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-ink/75 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-ivory max-w-lg w-full p-10 relative shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 text-ink/40 hover:text-ink transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-5 mb-6">
              <Avatar person={person} size="w-20 h-20" />
              <div className="text-left">
                <p className="font-serif text-2xl font-bold text-ink leading-tight">
                  {person.name}
                </p>
                <p className="text-gold text-sm mt-1">{person.title}</p>
              </div>
            </div>

            <p className="text-ink/70 text-sm leading-relaxed text-left mb-7">{person.bio}</p>

            {hasLink && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink text-white text-sm font-medium hover:bg-ink/80 transition-colors"
              >
                <LinkedInGlyph />
                View LinkedIn
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
