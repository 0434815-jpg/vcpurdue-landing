import { Link } from 'react-router-dom'
import { featuredProject, fallProjects } from '../config/site'

export default function Projects() {
  const p = featuredProject

  return (
    <>
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm italic mb-4 tracking-wide">Our Work</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            We work for real funds.
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            Our members run research engagements for working venture funds and present
            the findings to their investors.
          </p>
        </div>
      </section>

      {/* ---------- FEATURED ENGAGEMENT ---------- */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm italic mb-4 tracking-wide">
              {p.term} · {p.partner}
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
              {p.headline}
            </h2>
            <p className="text-ink/65 text-lg leading-relaxed max-w-2xl mx-auto">
              {p.summary}
            </p>
          </div>

          <div className="border-t border-b border-gold/25 py-8 mb-16 text-center">
            <p className="font-serif text-xl text-ink">{p.team}</p>
          </div>

          {/* Thesis */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
              Their thesis was sharp
            </h3>
            <div className="w-8 h-px bg-gold mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/20 border border-gold/20">
              {p.thesis.map(t => (
                <div key={t} className="bg-ivory px-7 py-6">
                  <p className="text-ink text-sm font-medium">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverable */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-semibold text-ink mb-3">Our mandate</h3>
            <div className="w-8 h-px bg-gold mb-6" />
            <p className="text-ink/65 leading-relaxed">{p.deliverable}</p>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-3">
              Four months, one roadmap
            </h3>
            <div className="w-8 h-px bg-gold mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {p.timeline.map((t, i) => (
                <div key={t.month} className="border-l border-gold/30 pl-5">
                  <p className="font-serif text-gold text-sm mb-2">
                    0{i + 1}
                  </p>
                  <p className="font-serif text-ink font-semibold mb-1">{t.month}</p>
                  <p className="text-ink/50 text-sm">{t.milestone}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CURRENT PROJECTS ---------- */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm italic mb-4 tracking-wide">Fall 2026</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Three engagements this semester.
            </h2>
            <p className="text-white/50 leading-relaxed max-w-xl mx-auto">
              Every member joins one of the three project teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fallProjects.map(fp => (
              <div
                key={fp.partner}
                className="border border-gold/25 p-8 hover:border-gold/60 transition-colors duration-300"
              >
                <h3 className="font-serif text-xl font-semibold text-white mb-4">
                  {fp.partner}
                </h3>
                <div className="w-8 h-px bg-gold mb-5" />
                <p className="text-white/50 text-sm leading-relaxed">{fp.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-6">
            Want to work on one of these?
          </h2>
          <Link
            to="/apply"
            className="inline-block px-8 py-3.5 bg-ink text-white text-sm font-semibold tracking-wide hover:bg-ink/80 transition-colors duration-200"
          >
            How Recruiting Works
          </Link>
        </div>
      </section>
    </>
  )
}
