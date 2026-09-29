import ApplyButton from '../components/ApplyButton'
import { tracks, links, boilerlinkLive, applyDeadline } from '../config/site'

// Fall 2026 cycle closed Sept 4 (see `applyOpen` in config/site.js).
// These steps describe how that closed cycle ran; update `when` on
// step 01 and reopen the flow (applyOpen/applyDeadline) once a new
// cycle's dates and form are confirmed.
const steps = [
  {
    step: '01',
    title: 'Submit the application',
    when: 'Closed',
    detail:
      'A short written application with your resume. All majors welcome, and no finance background required.',
  },
  {
    step: '02',
    title: 'Call-out session',
    when: 'Aug 31 or Sept 2',
    detail:
      'Two sessions, same content. Monday, August 31 at 6:00 PM in KRAN G012, or Wednesday, September 2 at 6:30 PM in RAWL 2079.',
  },
  {
    step: '03',
    title: 'Interview',
    when: 'After applications close',
    detail:
      'A conversation with members of the Executive Board. We care how you think, not what you already know.',
  },
  {
    step: '04',
    title: 'Onboarding',
    when: 'Before projects kick off',
    detail:
      'New Analysts join a project team and start the curriculum right away — term sheets, cap tables, and sourcing from the ground up.',
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
    a: 'Yes. Last spring, Charmides Capital gave us their thesis and asked which companies fit it. Our members ranked the market and presented to their investors. This fall we are running three engagements.',
  },
  {
    q: 'Are applications still open?',
    a: 'No. Applications for Fall 2026 closed Friday, September 4.',
  },
  {
    q: 'When does the club meet?',
    a: 'General club sessions run Thursdays, 6:30 to 7:30 PM.',
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
          <p className="text-white/55 text-lg leading-relaxed mb-6">
            Applications for Fall 2026 are closed.
          </p>
          {applyDeadline && (
            <p className="text-gold text-sm font-semibold tracking-wide uppercase mb-10">
              {applyDeadline}
            </p>
          )}
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
