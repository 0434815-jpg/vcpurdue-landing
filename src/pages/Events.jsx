import { events } from '../config/site'

export default function Events() {
  return (
    <>
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm italic mb-4 tracking-wide">What's Coming</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Events
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Competitions, summits, and the places to find us on campus.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-px bg-gold/20 border border-gold/20">
          {events.map(e => (
            <div key={e.title} className="bg-ivory p-10 md:flex md:gap-10">
              <div className="md:w-56 shrink-0 mb-4 md:mb-0">
                <p className="text-gold text-sm font-medium mb-1">{e.date}</p>
                {e.time && <p className="text-ink/45 text-sm mb-1">{e.time}</p>}
                <p className="text-ink/45 text-sm">{e.location}</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
                  {e.title}
                </h3>
                <div className="w-8 h-px bg-gold mb-5" />
                <p className="text-ink/60 text-sm leading-relaxed">{e.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
