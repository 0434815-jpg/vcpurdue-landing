import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import LinkCard from '../components/LinkCard'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import { FramedStats } from '../components/StatStrip'
import { ArrowUpRight } from '../components/Icons'
import { featuredProject, fallProjects, partners } from '../config/site'

const partnerByName = Object.fromEntries(partners.map(p => [p.name, p]))

export default function Projects() {
  const p = featuredProject
  const spring = partnerByName[p.partner]

  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              Our work
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="type-hero mb-6 max-w-3xl">Real work with real partners.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Six project teams across four partners this fall.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- FALL 2026 ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <Reveal>
              <Eyebrow className="mb-5">Fall 2026</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-4">This semester&rsquo;s teams.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-xl leading-relaxed text-ink/75">
                Every member joins one of the project teams. Each card links to the partner&rsquo;s
                site.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {fallProjects.map((fp, i) => {
              const partner = partnerByName[fp.partner]
              return (
                <LinkCard
                  key={fp.partner}
                  href={partner.href}
                  label={fp.partner}
                  delay={stagger(i)}
                  className="p-8 pr-14 md:p-10 md:pr-16"
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                    {partner.role}
                  </p>
                  <h3 className="type-h3 mb-2">{fp.partner}</h3>
                  <p className="mb-6 leading-relaxed text-ink/75">{partner.tagline}</p>

                  <div className="mb-4 flex items-baseline gap-3 border-t border-ink/10 pt-5">
                    <span className="type-numeral text-4xl">{fp.teams}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
                      {fp.jointWith ? 'joint team' : fp.teams === 1 ? 'team' : 'teams'}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {fp.work.map(w => (
                      <li key={w} className="flex items-start gap-3 text-sm leading-relaxed text-ink/80">
                        <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-gold" />
                        {w}
                      </li>
                    ))}
                  </ul>
                  {fp.jointWith && (
                    <p className="mt-4 text-sm text-ink/65">Joint team with {fp.jointWith}.</p>
                  )}
                </LinkCard>
              )
            })}
          </div>
        </div>
      </section>

      {/* ---------- SPRING 2026 CASE STUDY ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <Reveal>
                <Eyebrow dark className="mb-5">
                  {p.term} · {p.partner}
                </Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="type-h2 mb-6">{p.headline}</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mb-6 max-w-xl text-lg leading-relaxed text-white/75">{p.summary}</p>
              </Reveal>
              <Reveal delay={240}>
                <a
                  href={spring.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold underline decoration-gold/60 underline-offset-8 transition-colors duration-200 hover:text-gold-light"
                >
                  Visit {p.partner} <ArrowUpRight />
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Reveal>
            </div>
            <FramedStats items={p.stats} caption={`${p.term} engagement`} />
          </div>

          <Reveal className="mb-14">
            <h3 className="type-h3 mb-6">Their thesis was sharp</h3>
            <div className="grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-2">
              {p.thesis.map(t => (
                <div key={t} className="bg-ink px-7 py-6">
                  <p className="font-medium text-white">{t}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mb-14 border-l-2 border-gold pl-6">
            <h3 className="type-h3 mb-3">Our mandate</h3>
            <p className="max-w-2xl leading-relaxed text-white/75">{p.deliverable}</p>
          </Reveal>

          <Reveal>
            <h3 className="type-h3 mb-6">Four months, one roadmap</h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {p.timeline.map((t, i) => (
                <div key={t.month} className="border-t border-gold/50 pt-4">
                  <p className="type-numeral mb-2 text-2xl text-gold">0{i + 1}</p>
                  <p className="font-display font-bold">{t.month}</p>
                  <p className="mt-1 text-sm text-white/70">{t.milestone}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gold px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="type-h2 mb-8 text-ink">Want to work on one of these?</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/apply" variant="ink">
                Recruiting
              </Button>
              <Button to="/partners" variant="outlineInk">
                Partner With Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
