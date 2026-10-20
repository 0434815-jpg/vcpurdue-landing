import Eyebrow from '../components/Eyebrow'
import PersonCard from '../components/PersonCard'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import clubCasual from '../assets/photos/club-casual.jpg'
import { executiveBoard, seniorAssociates, advisors, founders } from '../config/team'

function Group({ eyebrow, title, blurb, people, dark = false }) {
  if (!people.length) return null
  return (
    <section className={`${dark ? 'bg-ink' : 'bg-ivory'} px-6 py-24`}>
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 max-w-2xl">
          {eyebrow && (
            <Reveal>
              <Eyebrow dark={dark} className="mb-5">
                {eyebrow}
              </Eyebrow>
            </Reveal>
          )}
          <Reveal delay={80}>
            <h2 className={`type-h2 mb-4 ${dark ? 'text-white' : 'text-ink'}`}>{title}</h2>
          </Reveal>
          {blurb && (
            <Reveal delay={160}>
              <p className={`leading-relaxed ${dark ? 'text-white/70' : 'text-ink/75'}`}>{blurb}</p>
            </Reveal>
          )}
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 md:gap-x-8">
          {people.map((p, i) => (
            <PersonCard key={p.name} person={p} dark={dark} delay={stagger(i % 3)} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Team() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              Our people
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="type-hero mb-6">The Team</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              VCPurdue is structured like the firms our members go on to join. Six Partners run
              the organization, Senior Associates lead engagements, and every member works real
              deals.
            </p>
          </Reveal>
        </div>
      </section>

      <Group
        eyebrow="Leadership"
        title="Executive Board"
        blurb="The executive board runs the club day to day. Each partner owns one part of it."
        people={executiveBoard}
      />

      <Group
        eyebrow="Deal Leadership"
        title="Senior Associates"
        blurb="Senior Associates drive sourcing strategy, coach Associates, and work directly with our partner firms."
        people={seniorAssociates}
        dark
      />

      <Group
        eyebrow="Guidance"
        title="Faculty Advisors"
        blurb="Our advisors provide academic oversight and industry connections through the Daniels School of Business."
        people={advisors}
      />

      <Group eyebrow="Origins" title="Founders" people={founders} dark />

      {/* ---------- FULL CLUB ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Reveal className="relative mx-auto w-full max-w-md">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/60"
            />
            <div className="relative aspect-[2/3] overflow-hidden bg-white/5">
              <img
                src={clubCasual}
                alt="VCPurdue's Fall 2026 general body gathered on a staircase"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-10 text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Fall 2026 general body.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
