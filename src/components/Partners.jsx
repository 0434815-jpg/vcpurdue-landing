const partners = [
  { name: 'Charmides Capital', href: 'https://charmidescapital.com' },
  { name: 'Elevate Ventures', href: 'https://elevateventures.com' },
  { name: 'Purdue Innovates', href: 'https://purdueinnovates.org/build-my-startup' },
]

export default function Partners() {
  return (
    <section id="partners" className="bg-ivory border-t border-gold/15 py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-16">
          Partners
        </h2>
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          {partners.map(p => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-serif text-xl text-ink/60 hover:text-gold transition-colors duration-200 group"
            >
              {p.name}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
