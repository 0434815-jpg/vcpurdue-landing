import { Fragment } from 'react'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import LinkCard from '../components/LinkCard'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import { StatStack } from '../components/StatStrip'
import { ArrowUpRight } from '../components/Icons'
import SidePhoto from '../components/SidePhoto'
import worksession from '../assets/photos/worksession.jpg'
import presenting from '../assets/photos/presenting.jpg'
import { featuredProject, fallProjects, partners } from '../config/site'

// The funnel narrows left to right: each stage is a little shorter than the
// last on desktop. "Top picks" shows a numeral only if the club has
// confirmed a total (`companiesRecommended` in site.js).
function buildFunnel(p) {
  return [
    { numeral: '30+', label: 'Analysts', size: 'md:min-h-[11rem] py-6' },
    { numeral: '4', label: 'Project teams', size: 'md:min-h-[9.5rem] py-6' },
    {
      numeral: p.companiesRecommended || '',
      title: 'Top picks',
      label: p.companiesRecommended ? 'Companies recommended' : "Each team's top picks",
      size: 'md:min-h-[8rem] py-6',
    },
    {
      title: 'Presented',
      label: "Final rankings presented to Charmides' investors",
      size: 'md:min-h-[6.5rem] py-6',
    },
  ]
}

const partnerByName = Object.fromEntries(partners.map(p => [p.name, p]))

export default function Projects() {
  const p = featuredProject
  const spring = partnerByName[p.partner]
  const funnel = buildFunnel(p)

  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
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
          <SidePhoto
            src={worksession}
            ratio={1400 / 1050}
            alt="VCPurdue members working a research session around a table"
            caption="A VCPurdue working session."
            eager
          />
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
          <div className="mb-16 max-w-3xl">
            <Reveal>
              <Eyebrow dark className="mb-5">
                {p.term} · {p.role}
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-6">{p.partner}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-5 text-lg leading-relaxed text-white/75">{p.about}</p>
            </Reveal>
            <Reveal delay={200}>
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

          <Reveal className="mb-20 border-l-2 border-gold pl-6 sm:pl-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The brief
            </p>
            <p className="font-display max-w-3xl text-2xl font-semibold leading-snug sm:text-3xl">
              {p.brief}
            </p>
          </Reveal>

          {/* Thesis + numbers */}
          <div className="mb-24 grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <Reveal className="border border-gold/50">
              <p className="border-b border-gold/50 px-6 py-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold sm:px-8">
                The thesis
              </p>
              <ul>
                {p.thesis.map((t, i) => (
                  <li
                    key={t}
                    className={`font-display px-6 py-6 text-xl font-bold sm:px-8 sm:text-2xl ${
                      i > 0 ? 'border-t border-white/15' : ''
                    }`}
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <p className="border-t border-gold/50 px-6 py-4 text-xs uppercase tracking-[0.18em] text-white/60 sm:px-8">
                The screening lens we used
              </p>
            </Reveal>
            <StatStack items={p.stats} />
          </div>

          {/* Funnel */}
          <Reveal>
            <Eyebrow dark className="mb-8">
              From the class to the shortlist
            </Eyebrow>
          </Reveal>
          <Reveal className="mb-24">
            <ol className="flex flex-col items-stretch md:flex-row md:items-center">
              {funnel.map((st, i) => (
                <Fragment key={st.label}>
                  {i > 0 && (
                    <li
                      aria-hidden="true"
                      className="mx-auto h-8 w-px shrink-0 bg-gold/60 md:mx-0 md:h-px md:w-8"
                    />
                  )}
                  <li
                    className={`flex flex-1 flex-col justify-center border border-gold/50 px-6 ${st.size}`}
                  >
                    {st.numeral ? (
                      <p className="type-numeral text-5xl text-gold sm:text-6xl">{st.numeral}</p>
                    ) : (
                      <p className="font-display text-2xl font-bold text-gold-light sm:text-3xl">
                        {st.title}
                      </p>
                    )}
                    <p className="mt-3 text-xs font-semibold uppercase leading-snug tracking-[0.16em] text-white/75">
                      {st.label}
                    </p>
                  </li>
                </Fragment>
              ))}
            </ol>
          </Reveal>

          {/* What we delivered + photo */}
          <div className="mb-24 grid items-start gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow dark className="mb-8">
                  What we delivered
                </Eyebrow>
              </Reveal>
              <ol className="space-y-3">
                {p.delivered.map((d, i) => (
                  <Reveal as="li" key={d} delay={stagger(i)} className="flex bg-white/[0.04]">
                    <span className="font-display flex w-16 shrink-0 items-center justify-center bg-gold text-xl font-bold text-ink">
                      0{i + 1}
                    </span>
                    <p className="px-6 py-6 text-lg leading-relaxed text-white/90">{d}</p>
                  </Reveal>
                ))}
              </ol>
            </div>
            <SidePhoto
              src={presenting}
              ratio={1045 / 1400}
              alt="VCPurdue executive board presenting to members in a classroom"
              caption="VCPurdue's executive board presenting to members."
              className="mx-auto w-full max-w-[19rem]"
            />
          </div>

          {/* Timeline */}
          <Reveal>
            <Eyebrow dark className="mb-10">
              Four months
            </Eyebrow>
          </Reveal>
          <ol className="mb-20 grid gap-10 border-l border-gold/60 pl-8 md:grid-cols-4 md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-8">
            {p.timeline.map((t, i) => (
              <Reveal as="li" key={t.when} delay={stagger(i)} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[2.3rem] top-1 h-2.5 w-2.5 rounded-full bg-gold md:-top-[2.3rem] md:left-0"
                />
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {t.when}
                </p>
                <p className="leading-relaxed text-white/85">{t.what}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="border-t border-white/15 pt-6 text-sm text-white/60">{p.note}</p>
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
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
