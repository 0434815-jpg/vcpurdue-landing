import { Link } from 'react-router-dom'
import ApplyButton from '../components/ApplyButton'
import PhotoBand from '../components/PhotoBand'
import { club, featuredProject, partners } from '../config/site'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="bg-ink min-h-[88vh] flex items-center justify-center text-center px-6">
        <div className="max-w-4xl mx-auto">
          {/* Official club slogan. The old line ("Where Founders,
              Investors & Ventures Converge") belongs to an IU club —
              José flagged it Aug 21. Do not reuse it. */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            The Bridge Between Founders, Startups &amp; Investors.
          </h1>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Purdue University's student-led venture capital organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplyButton variant="gold" />
            <Link
              to="/projects"
              className="inline-block px-8 py-3.5 border border-gold text-gold text-sm font-semibold tracking-wide hover:bg-gold/10 transition-colors duration-200"
            >
              See Our Work
            </Link>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-white/40">
            <span>
              <strong className="text-white/80 font-medium">{club.memberCount}</strong> members
            </span>
            <span>
              <strong className="text-white/80 font-medium">3</strong> partner firms
            </span>
            <span>
              <strong className="text-white/80 font-medium">3</strong> investor tracks
            </span>
          </div>
        </div>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="bg-ivory py-28 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-sm italic mb-5 tracking-wide">Who We Are</p>
          <p className="text-ink text-lg md:text-xl leading-relaxed mb-10">
            Forty students who diligence startups for working venture funds, write the
            memos, and defend the calls in front of an investment board.
          </p>
          <ApplyButton variant="gold" />
        </div>
      </section>

      {/* ---------- MISSION ---------- */}
      <section className="bg-ink py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            Our Mission
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Most students learn investing from a case study. Ours learn it by sourcing
            deals, running diligence, and making a recommendation someone actually acts
            on. The work is real, so the reps count.
          </p>
        </div>
      </section>

      {/* ---------- PROOF / FEATURED PROJECT ---------- */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-sm italic mb-4 tracking-wide text-center">
            {featuredProject.term} · {featuredProject.partner}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink text-center mb-6">
            {featuredProject.headline}
          </h2>
          <p className="text-ink/65 text-lg leading-relaxed text-center max-w-2xl mx-auto mb-14">
            {featuredProject.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gold/20 border border-gold/20 mb-12">
            <div className="bg-ivory p-8 text-center">
              <p className="font-serif text-3xl font-bold text-ink mb-1">
                {club.associateCount}
              </p>
              <p className="text-ink/50 text-sm">Associates</p>
            </div>
            <div className="bg-ivory p-8 text-center">
              <p className="font-serif text-3xl font-bold text-ink mb-1">
                {club.analystCount}
              </p>
              <p className="text-ink/50 text-sm">Analysts</p>
            </div>
            <div className="bg-ivory p-8 text-center">
              <p className="font-serif text-3xl font-bold text-ink mb-1">4</p>
              <p className="text-ink/50 text-sm">Months</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/projects"
              className="inline-block px-8 py-3.5 border border-ink text-ink text-sm font-semibold tracking-wide hover:bg-ink/10 transition-colors duration-200"
            >
              Read the full engagement →
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- PHOTOS ---------- */}
      <PhotoBand />

      {/* ---------- VALUES ---------- */}
      <section className="bg-ink py-28 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
          {[
            {
              title: 'Excellence',
              description:
                'Our work goes in front of people who invest for a living. It has to survive their questions.',
            },
            {
              title: 'Collaboration',
              description:
                'Analysts pair with Associates on every engagement. Nobody researches a company alone.',
            },
            {
              title: 'Integrity',
              description:
                "We say what the data supports and flag what it doesn't. A weak thesis is worth more killed early.",
            },
          ].map(v => (
            <div key={v.title}>
              <h3 className="font-serif text-2xl font-semibold text-white mb-4">{v.title}</h3>
              <div className="w-8 h-px bg-gold mx-auto mb-5" />
              <p className="text-white/50 text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- PARTNERS STRIP ---------- */}
      <section className="bg-ivory border-t border-gold/15 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-sm italic mb-10 tracking-wide">Our Partners</p>
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-12">
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
          <Link
            to="/partners"
            className="text-ink/50 text-sm hover:text-gold transition-colors duration-200"
          >
            More on our partnerships →
          </Link>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gold py-28 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
            Ready to Join?
          </h2>
          <p className="text-ink/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            All majors welcome, and no finance background required. We teach the technical
            side. Bring the curiosity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplyButton variant="ink" />
            <Link
              to="/apply"
              className="inline-block px-8 py-3.5 border border-ink text-ink text-sm font-semibold tracking-wide hover:bg-ink/10 transition-colors duration-200"
            >
              How Recruiting Works
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
