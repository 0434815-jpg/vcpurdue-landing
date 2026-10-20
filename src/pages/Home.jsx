import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import LinkCard from '../components/LinkCard'
import PhotoBand from '../components/PhotoBand'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import SplitBar from '../components/SplitBar'
import { FramedStats, StatStrip } from '../components/StatStrip'
import { ArrowRight } from '../components/Icons'
import clubFormal from '../assets/photos/club-formal.jpg'
import {
  club,
  deliverables,
  featuredProject,
  membership,
  partnershipMailto,
  partners,
  tracks,
} from '../config/site'

export default function Home() {
  const fallPartners = partners.filter(p => p.season === 'Fall 2026')

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="bg-ink px-6 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 pb-14 pt-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14 lg:pb-20 lg:pt-20">
          <div>
            <Reveal>
              <Eyebrow dark>{club.fullName}</Eyebrow>
            </Reveal>
            {/* Official slogan is "The Bridge Between Founders, Startups &
                Investors." (footer). The old line ("Where Founders,
                Investors & Ventures Converge") belongs to an IU club —
                José flagged it Aug 21. Do not reuse it. */}
            <Reveal delay={100}>
              <h1 className="type-hero mb-6 mt-5">
                Research startups. Build investment conviction.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mb-9 max-w-xl text-lg leading-relaxed text-white/75 lg:text-xl">
                Purdue&rsquo;s student-led venture capital organization. {club.memberCount}&nbsp;members
                source companies, run diligence, and present recommendations to venture partners.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button to="/projects" variant="gold">
                  Our Work
                </Button>
                <Button to="/partners" variant="outlineGold">
                  Partner With Us
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={450} className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-0 hidden translate-x-3 translate-y-3 border border-gold/60 lg:block"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
              <img
                src={clubFormal}
                alt="VCPurdue's Fall 2026 class gathered on a staircase"
                className="h-full w-full object-cover"
                style={{ objectPosition: '50% 100%' }}
                fetchPriority="high"
              />
            </div>
          </Reveal>
        </div>

        <div className="mx-auto max-w-6xl">
          <StatStrip
            items={[
              { value: club.memberCount, label: 'Members', note: club.memberLabel },
              { value: club.colleges, label: 'Purdue colleges' },
              { value: club.projectTeams, label: 'Project teams' },
            ]}
          />
        </div>
      </section>

      {/* ---------- MISSION ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow className="mb-6">Our mission</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-ink md:text-[2rem]">
              Most students learn investing from a case study. Ours learn it by sourcing deals,
              running diligence, and making a recommendation someone actually acts on. The work is
              real, so the reps count.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROOF / FEATURED PROJECT ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow dark className="mb-5">
                {featuredProject.term} · {featuredProject.partner}
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-6">{featuredProject.headline}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/75">
                {featuredProject.summary}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold underline decoration-gold/60 underline-offset-8 transition-colors duration-200 hover:text-gold-light"
              >
                Read the full engagement <ArrowRight />
              </Link>
            </Reveal>
          </div>

          <FramedStats
            items={featuredProject.stats}
            caption={`${featuredProject.term} engagement`}
          />
        </div>
      </section>

      {/* ---------- TWO AUDIENCES ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow className="mb-5">Get involved</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-14 max-w-2xl">For students and for venture firms.</h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Students */}
            <Reveal delay={0} className="border border-l-2 border-ink/15 border-l-gold bg-white/50 p-8 md:p-10">
              <h3 className="type-h3 mb-4">For students</h3>
              <p className="mb-8 leading-relaxed text-ink/80">
                Members source companies, run diligence, and present recommendations to venture
                partners. All majors welcome, and no finance background required.
              </p>

              <ol className="mb-9 space-y-5">
                {tracks.map((t, i) => (
                  <li key={t.tier} className="flex gap-4">
                    <span className="font-display flex h-9 w-9 shrink-0 items-center justify-center bg-gold text-sm font-bold text-ink">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="font-display font-bold leading-tight">
                        {t.tier}{' '}
                        <span className="ml-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
                          {t.tag}
                        </span>
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-ink/75">{t.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <Button to="/apply" variant="outlineInk">
                Recruiting
              </Button>
            </Reveal>

            {/* Firms */}
            <Reveal delay={120} className="border border-l-2 border-ink/15 border-l-gold bg-white/50 p-8 md:p-10">
              <h3 className="type-h3 mb-4">For venture firms</h3>
              <p className="mb-8 leading-relaxed text-ink/80">
                We partner with venture firms, accelerators, and founders who want serious
                research support from a team that treats it like the job it is.
              </p>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                What we deliver
              </p>
              <ul className="mb-8 space-y-2">
                {deliverables.map(d => (
                  <li key={d} className="flex items-center gap-3 font-display font-bold">
                    <span aria-hidden="true" className="h-px w-5 bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                Proof
              </p>
              <Link
                to="/projects"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink/70"
              >
                Read the {featuredProject.partner} engagement <ArrowRight />
              </Link>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                Current partners
              </p>
              <p className="mb-9 text-sm leading-relaxed text-ink/80">
                {fallPartners.map(p => p.name).join(', ')}.{' '}
                <span className="text-ink/65">
                  Spring 2026: {partners.find(p => p.season === 'Spring 2026')?.name}.
                </span>
              </p>

              <div className="flex flex-wrap gap-3">
                <Button href={partnershipMailto} variant="ink">
                  Start a conversation
                </Button>
                <Button to="/partners" variant="outlineInk">
                  Our partners
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- WHO WE ARE ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
            <div>
              <Reveal>
                <Eyebrow dark className="mb-5">
                  Who we are · {membership.term}
                </Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="type-h2">
                  {club.memberCount} members from {club.colleges} Purdue colleges.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <p className="font-display text-2xl font-semibold leading-snug text-gold-light md:text-3xl">
                {membership.outsideBusiness} of our members come from outside the business school.
              </p>
            </Reveal>
          </div>

          <div className="space-y-10 border border-gold/50 p-6 sm:p-10">
            <Reveal>
              <SplitBar title="By college" items={membership.byCollege} />
            </Reveal>
            <Reveal delay={120}>
              <SplitBar
                title={`By class · ${membership.classLevels} class levels`}
                items={membership.byClass}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- PHOTOS ---------- */}
      <PhotoBand />

      {/* ---------- PARTNERS STRIP ---------- */}
      <section className="border-t border-gold/20 bg-ivory px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow className="mb-10">Our partners</Eyebrow>
          </Reveal>
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((p, i) => (
              <LinkCard
                key={p.name}
                href={p.href}
                label={p.name}
                delay={stagger(i)}
                className="p-5 pr-12"
              >
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/65">
                  {p.season}
                </p>
                <p className="font-display text-lg font-bold leading-tight">{p.name}</p>
              </LinkCard>
            ))}
          </div>
          <Reveal>
            <Link
              to="/partners"
              className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink/70"
            >
              More on our partnerships <ArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
