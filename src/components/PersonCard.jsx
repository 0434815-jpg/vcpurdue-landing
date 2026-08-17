import { useState, useEffect } from 'react'

// Person card with optional click-to-bio modal (José's May 6 request).
// Photos use object-cover inside a fixed square, so images never
// stretch regardless of the source aspect ratio.
export default function PersonCard({ person }) {
  const [open, setOpen] = useState(false)
  const hasBio = Boolean(person.bio)

  useEffect(() => {
    if (!open) return
    const onKey = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const Avatar = (
    <div className="w-24 h-24 rounded-full overflow-hidden border border-gold/40 bg-gold/10 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-200">
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="font-serif text-gold font-semibold text-lg">
          {person.initials}
        </span>
      )}
    </div>
  )

  const Label = (
    <>
      <p className="font-serif text-ink font-semibold text-base mb-1 group-hover:text-gold transition-colors duration-200">
        {person.name}
      </p>
      <p className="text-ink/50 text-sm">{person.title}</p>
    </>
  )

  // With a bio → open modal. Without → link straight to LinkedIn.
  if (hasBio) {
    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="flex flex-col items-center text-center group cursor-pointer"
        >
          {Avatar}
          {Label}
        </button>

        {open && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-ink/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <div
              className="bg-ivory max-w-lg w-full p-10 relative"
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
                <div className="w-20 h-20 rounded-full overflow-hidden border border-gold/40 bg-gold/10 flex items-center justify-center shrink-0">
                  {person.photo ? (
                    <img src={person.photo} alt={person.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="font-serif text-gold font-semibold">{person.initials}</span>
                  )}
                </div>
                <div className="text-left">
                  <p className="font-serif text-2xl font-bold text-ink">{person.name}</p>
                  <p className="text-gold text-sm">{person.title}</p>
                </div>
              </div>

              <p className="text-ink/70 text-sm leading-relaxed text-left mb-6">
                {person.bio}
              </p>

              {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm font-medium hover:underline"
                >
                  View LinkedIn →
                </a>
              )}
            </div>
          </div>
        )}
      </>
    )
  }

  if (person.linkedin) {
    return (
      <a
        href={person.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center text-center group"
      >
        {Avatar}
        {Label}
      </a>
    )
  }

  return (
    <div className="flex flex-col items-center text-center group">
      {Avatar}
      {Label}
    </div>
  )
}
