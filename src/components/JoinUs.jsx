const tiers = [
  {
    tier: 'Analyst',
    description: 'Entry-level membership for students building foundational VC knowledge and deal-flow skills.',
  },
  {
    tier: 'Associate',
    description: 'Active deal sourcing, due diligence, and direct engagement with portfolio companies.',
  },
  {
    tier: 'Senior Associate',
    description: 'Investment committee participation and leadership across club initiatives.',
  },
]

export default function JoinUs() {
  return (
    <section id="apply" className="bg-gold py-28 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-10">
          Ready to Join?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="https://forms.gle/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-ink text-white text-sm font-semibold tracking-wide hover:bg-ink/80 transition-colors duration-200"
          >
            Apply Now
          </a>
          <a
            href="https://boilerlink.purdue.edu/organization/smvf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-ink text-ink text-sm font-semibold tracking-wide hover:bg-ink/10 transition-colors duration-200"
          >
            View on BoilerLink
          </a>
        </div>

        <div className="border-t border-ink/20 pt-12 grid grid-cols-1 sm:grid-cols-3 gap-10 text-left">
          {tiers.map(t => (
            <div key={t.tier}>
              <p className="font-serif text-lg font-semibold text-ink mb-2">{t.tier}</p>
              <p className="text-ink/65 text-sm leading-relaxed">{t.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
