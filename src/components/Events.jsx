const events = [
  {
    title: 'VCPurdue VCIC Competition',
    date: 'October–November 2026',
    location: 'Midwest Regionals',
  },
  {
    title: 'VCPurdue Summit',
    date: 'Spring 2027',
    location: 'Purdue Memorial Union',
  },
]

export default function Events() {
  return (
    <section className="bg-ink py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map(e => (
            <div
              key={e.title}
              className="border border-gold/25 p-10 hover:border-gold/60 transition-colors duration-300"
            >
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">{e.title}</h3>
              <div className="w-8 h-px bg-gold mb-5" />
              <p className="text-gold text-sm font-medium mb-2">{e.date}</p>
              <p className="text-white/50 text-sm">{e.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
