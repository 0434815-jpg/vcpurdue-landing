import ApplyButton from '../components/ApplyButton'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import { FactStrip } from '../components/StatStrip'
import {
  applyDeadline,
  applyOpen,
  boilerlinkLive,
  club,
  links,
  membership,
  partners,
  tracks,
} from '../config/site'

// Hero photo for the closed state. Used when src/assets/photos/club-apply.jpg
// exists (glob so the page still builds, text-only, without it).
const heroPhotos = import.meta.glob('../assets/photos/club-apply.jpg', {
  eager: true,
  import: 'default',
})
const heroPhoto = Object.values(heroPhotos)[0]

const fallPartners = partners.filter(p => p.season === 'Fall 2026').map(p => p.name)
const fallPartnerList = `${fallPartners.slice(0, -1).join(', ')}, and ${fallPartners.at(-1)}`

// Closed-state "why join": only facts that are already on the site.
const whyJoin = [
  {
    title: 'Real work with real partners',
    body: `${club.projectTeams} project teams across ${fallPartners.length} partners this fall: ${fallPartnerList}.`,
  },
  {
    title: 'A path up',
    body: 'Analyst, Associate, Senior Associate, and a path onto the Partner-level Executive Board.',
  },
  {
    title: 'VCIC',
    body: "VCPurdue represents Purdue at VCIC, the world's largest venture capital competition.",
  },
  {
    title: 'Any major',
    body: `All majors welcome, and no finance background required. ${membership.outsideBusiness} of our members come from outside the business school.`,
  },
]

// Kept to answers that are confirmed. Time commitment and regular meeting
// time were removed until the club confirms them (see TODO in site.js).
const faqs = [
  {
    q: 'Do I need a finance or business background?',
    a: `No. We recruit from every major on campus, and ${membership.outsideBusiness} of our members come from outside the business school. Our onboarding curriculum covers term sheets, cap tables, and sourcing from the ground up. What matters is curiosity and follow-through.`,
  },
  {
    q: 'What track will I join?',
    a: 'New members join as Analysts. Analysts who take on more scope move to Associate, then Senior Associate. Senior Associates have a path onto the Partner-level Executive Board.',
  },
  {
    q: 'Do members actually work on real deals?',
    a: `Yes. Last spring, Charmides Capital gave us their thesis and asked which companies fit it. Our members ranked the market and presented to their investors. This fall, ${club.projectTeams} project teams are working with ${fallPartners.length} partners.`,
  },
]

function Questions() {
  return (
    <>
      <div className="space-y-10">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={stagger(i)}>
            <h3 className="type-h3 mb-3 text-xl">{f.q}</h3>
            <p className="leading-relaxed text-ink/80">{f.a}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 border-t border-gold/40 pt-10">
        <p className="mb-3 text-ink/80">Still have questions? Reach out — we&rsquo;re happy to talk.</p>
        <a
          href={`mailto:${links.email}`}
          className="font-display text-xl font-bold underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink/70"
        >
          {links.email}
        </a>
      </Reveal>
    </>
  )
}

function ClosedView() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="bg-ink px-6 text-white">
        <div
          className={`mx-auto grid max-w-6xl items-center gap-12 pb-14 pt-14 lg:pb-20 lg:pt-20 ${
            heroPhoto ? 'lg:grid-cols-[1.1fr_0.9fr] lg:gap-16' : ''
          }`}
        >
          <div>
            <Reveal>
              <Eyebrow dark className="mb-5">
                Recruitment complete
              </Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="type-hero mb-6">Applications are closed.</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/75">
                Thank you for your interest in VCPurdue. Next semester&rsquo;s recruitment dates
                will be posted here and on our{' '}
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-light"
                >
                  Instagram
                </a>{' '}
                and{' '}
                <a
                  href={links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-gold-light"
                >
                  LinkedIn
                </a>
                .
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button to="/venture-capital" variant="gold">
                  Learn how VC works
                </Button>
                <Button href={links.instagram} variant="outlineGold">
                  Follow for dates
                </Button>
              </div>
            </Reveal>
          </div>

          {heroPhoto && (
            <Reveal delay={450} className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 hidden translate-x-3 translate-y-3 border border-gold/60 lg:block"
              />
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <img
                  src={heroPhoto}
                  alt="VCPurdue's Fall 2026 class gathered on a staircase"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: '50% 70%' }}
                  fetchPriority="high"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-ink/35" />
              </div>
            </Reveal>
          )}
        </div>

        <div className="mx-auto max-w-6xl">
          <FactStrip
            items={[
              { label: 'Application status', value: 'Closed for Fall 2026' },
              { label: 'Next semester', value: 'Dates to be announced' },
              { label: 'Members', value: club.memberCount, note: club.memberLabel },
            ]}
          />
        </div>
      </section>

      {/* ---------- WHY JOIN ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow className="mb-5">Why join</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-12">What members get.</h2>
          </Reveal>
          <ol className="space-y-3">
            {whyJoin.map((item, i) => (
              <Reveal as="li" key={item.title} delay={stagger(i)} className="flex bg-ink text-white">
                <span className="font-display flex w-16 shrink-0 items-center justify-center bg-gold text-xl font-bold text-ink sm:w-24 sm:text-2xl">
                  0{i + 1}
                </span>
                <div className="px-5 py-6 sm:px-8">
                  <p className="type-h3 mb-1.5">{item.title}</p>
                  <p className="leading-relaxed text-white/75">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- QUESTIONS ---------- */}
      <section className="border-t border-gold/20 bg-ivory px-6 pb-24 pt-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow className="mb-5">Questions</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-12">Frequently asked.</h2>
          </Reveal>
          <Questions />
        </div>
      </section>
    </>
  )
}

// ---------------------------------------------------------------------
// OPEN STATE — shown only while `applyOpen` is true in config/site.js.
// TODO before flipping applyOpen: confirm the real recruiting dates and
// update `openSteps`, then set `applyDeadline` in site.js. Nothing here
// states a date on purpose.
// ---------------------------------------------------------------------
const openSteps = [
  {
    step: '01',
    title: 'Submit the application',
    when: 'Open now',
    detail:
      'A short written application with your resume. All majors welcome, and no finance background required.',
  },
  {
    step: '02',
    title: 'Call-out session',
    when: 'Dates to be announced',
    detail: 'Meet the Partners, hear how the club runs, and get the details on the semester’s project teams.',
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

function OpenView() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow dark center className="mb-5">
              Recruiting
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="type-hero mb-6">Join VCPurdue</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mb-6 text-lg leading-relaxed text-white/75">
              Applications are open. Bring curiosity, a strong work ethic, and an opinion about a
              company you wish existed.
            </p>
          </Reveal>
          {applyDeadline && (
            <p className="mb-10 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
              {applyDeadline}
            </p>
          )}
          <Reveal delay={240}>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ApplyButton variant="gold" />
              {boilerlinkLive && (
                <Button href={links.boilerlink} variant="outlineGold">
                  View on BoilerLink
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow className="mb-5">The process</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-12">How recruiting works.</h2>
          </Reveal>
          <ol className="space-y-3">
            {openSteps.map((s, i) => (
              <Reveal as="li" key={s.step} delay={stagger(i)} className="flex bg-ink text-white">
                <span className="font-display flex w-16 shrink-0 items-center justify-center bg-gold text-xl font-bold text-ink sm:w-24 sm:text-2xl">
                  {s.step}
                </span>
                <div className="px-5 py-6 sm:px-8">
                  <p className="type-h3 mb-1">{s.title}</p>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {s.when}
                  </p>
                  <p className="leading-relaxed text-white/75">{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              Where you can go
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-12">Three tracks.</h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {tracks.map((t, i) => (
              <Reveal
                key={t.tier}
                delay={stagger(i)}
                className="border border-l-2 border-white/15 border-l-gold bg-white/[0.04] p-8"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {t.tag}
                </p>
                <h3 className="type-h3 mb-4">{t.tier}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/75">{t.description}</p>
                <ul className="space-y-2">
                  {t.points.map(pt => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-white/70">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow className="mb-5">Questions</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-12">Frequently asked.</h2>
          </Reveal>
          <Questions />
        </div>
      </section>
    </>
  )
}

export default function Apply() {
  return applyOpen ? <OpenView /> : <ClosedView />
}
