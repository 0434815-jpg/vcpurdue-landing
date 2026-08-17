import ApplyButton from '../components/ApplyButton'
import { tracks, links, boilerlinkLive } from '../config/site'

// TODO — dates are placeholders until Anshul finalizes the
// recruiting timeline. Update `steps` below once confirmed.
const steps = [
  {
    step: '01',
    title: 'Application opens',
    when: 'First week of classes',
    detail:
      'Submit the online application with your resume and short responses. No finance background required.',
  },
  {
    step: '02',
    title: 'Callout & info session',
    when: 'First two weeks',
    detail:
      'Come learn how the club runs, meet the Partners, and hear about the semester’s three project engagements.',
  },
  {
    step: '03',
    title: 'Interviews',
    when: 'Following week',
    detail:
      'A conversational interview with members of the Executive Board. We care how you think, not what you already know.',
  },
  {
    step: '04',
    title: 'Decisions & onboarding',
    when: 'Before projects kick off',
    detail:
      'New Analysts are placed on a project team and start the onboarding curriculum immediately.',
  },
]

const faqs = [
  {
    q: 'Do I need a finance or business background?',
    a: 'No. We recruit from every major on campus. Our onboarding curriculum covers term sheets, cap tables, and sourcing from the ground up. What matters is curiosity and follow-through.',
  },
  {
    q: 'What is the time commitment?',
    a: 'A weekly club session plus project work with your team. Expect a few hours a week — more during a live engagement push.',
  },
  {
    q: 'What track will I join?',
    a: 'New members join as Analysts. Analysts who take on more scope move to Associate, then Senior Associate. Senior Associates have a path onto the Partner-level Executive Board.',
  },
  {
    q: 'Do members actually work on real deals?',
    a: 'Yes. This past spring our members ran a full research engagement for Charmides Capital and presented findings directly to their investors. This fall we are running three project engagements.',
  },
  {
    q: 'When can I meet the team in person?',
    a: 'Find our table at the B-Involved activities fair on August 22 from 12 to 3 PM, or come to the callout during the first weeks of the semester.',
  },
]

export default function Apply() {
  return (
    <>
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm italic mb-4 tracking-wide">Recruiting</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Join VCPurdue
          </h1>
          <p className="text-white/55 text-lg leading-relaxed mb-10">
            We recruit each fall. Bring curiosity, a strong work ethic, and an opinion about
            a company you wish existed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplyButton variant="gold" />
            {boilerlinkLive && (
              <a
                href={links.boilerlink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 border border-gold text-gold text-sm font-semibold tracking-wide hover:bg-gold/10 transition-colors duration-200"
              >
                View on BoilerLink
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-ink mb-4">
              How recruiting works
            </h2>
            <div className="w-8 h-px bg-gold mx-auto" />
          </div>

          <div className="space-y-px bg-gold/20 border border-gold/20">
            {steps.map(s => (
              <div key={s.step} className="bg-ivory p-8 md:flex md:gap-8">
                <div className="md:w-32 shrink-0 mb-3 md:mb-0">
                  <p className="font-serif text-gold text-2xl font-bold">{s.step}</p>
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-4 mb-2">
                    <h3 className="font-serif text-xl font-semibold text-ink">{s.title}</h3>
                    <span className="text-gold text-xs tracking-wide uppercase">
                      {s.when}
                    </span>
                  </div>
                  <p className="text-ink/60 text-sm leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TRACKS ---------- */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-white mb-4">
              Where you can go
            </h2>
            <div className="w-8 h-px bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tracks.map(t => (
              <div
                key={t.tier}
                className="border border-gold/25 p-8 hover:border-gold/60 transition-colors duration-300"
              >
                <p className="text-gold text-xs uppercase tracking-widest mb-3">{t.tag}</p>
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                  {t.tier}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{t.description}</p>
                <ul className="space-y-2">
                  {t.points.map(pt => (
                    <li key={pt} className="text-white/40 text-sm pl-4 relative leading-relaxed">
                      <span className="absolute left-0 text-gold">→</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-ink mb-4">
              Frequently asked
            </h2>
            <div className="w-8 h-px bg-gold mx-auto" />
          </div>

          <div className="space-y-10">
            {faqs.map(f => (
              <div key={f.q}>
                <h3 className="font-serif text-lg font-semibold text-ink mb-3">{f.q}</h3>
                <p className="text-ink/60 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-gold/25 text-center">
            <p className="text-ink/60 text-sm mb-6">
              Still have questions? Reach out — we're happy to talk.
            </p>
            <a
              href={`mailto:${links.email}`}
              className="font-serif text-xl text-gold hover:underline"
            >
              {links.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
