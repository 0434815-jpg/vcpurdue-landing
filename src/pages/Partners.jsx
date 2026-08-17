import { Link } from 'react-router-dom'
import { partners, links } from '../config/site'

export default function Partners() {
  return (
    <>
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm italic mb-4 tracking-wide">Who We Work With</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Partners
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Our partnerships are what separate VCPurdue from a case-study club. These are
            the firms whose mandates our members actually work.
          </p>
        </div>
      </section>

      {/* ---------- PARTNER DETAIL ---------- */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-px bg-gold/20 border border-gold/20">
          {partners.map(p => (
            <div key={p.name} className="bg-ivory p-10">
              <p className="text-gold text-xs uppercase tracking-[0.15em] mb-4">{p.role}</p>
              <h2 className="font-serif text-3xl font-bold text-ink mb-4">{p.name}</h2>
              <div className="w-8 h-px bg-gold mb-6" />
              <p className="text-ink/65 leading-relaxed mb-6 max-w-2xl">{p.blurb}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-medium hover:underline"
              >
                Visit {p.name} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- BECOME A PARTNER ---------- */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-white mb-6">
            Work with our members.
          </h2>
          <p className="text-white/55 leading-relaxed mb-10">
            We partner with venture firms, accelerators, and founders who want serious
            research support — market maps, competitive landscapes, diligence memos — from
            a team that treats it like the job it is.
          </p>
          <a
            href={`mailto:${links.email}?subject=Partnership%20Inquiry%20%E2%80%94%20VCPurdue`}
            className="inline-block px-8 py-3.5 bg-gold text-ink text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200"
          >
            Start a conversation
          </a>
        </div>
      </section>

      <section className="bg-ivory py-20 px-6 text-center border-t border-gold/20">
        <p className="text-ink/50 text-sm mb-4">
          Curious what a partner engagement looks like in practice?
        </p>
        <Link
          to="/projects"
          className="font-serif text-xl text-gold hover:underline"
        >
          Read the Charmides Capital engagement →
        </Link>
      </section>
    </>
  )
}
