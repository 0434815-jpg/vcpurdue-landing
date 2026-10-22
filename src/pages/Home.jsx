import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import LinkCard from '../components/LinkCard'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import SplitBar from '../components/SplitBar'
import { StatStack, StatStrip } from '../components/StatStrip'
import { ArrowRight } from '../components/Icons'
import memorialUnion from '../assets/photos/campus-memorial-union.jpg'
import {
  club,
  deliverables,
  featuredProject,
  hostProof,
  membership,
  partners,
  tracks,
} from '../config/site'

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      {/* Full-bleed campus photo (Purdue Marketing, non-commercial use; see
          the footer credit). The entrance sits near the middle of the frame,
          so the text stays up and to the left over the sky, and on narrow
          screens object-position keeps the entrance centered. */}
      <section className="bg-ink text-white">
        <div className="relative h-[calc(100svh-4rem)] max-h-[56rem] min-h-[34rem] overflow-hidden">
          <img
            src={memorialUnion}
            alt="Purdue Memorial Union at dusk, lit from within"
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: '50% 50%' }}
            fetchPriority="high"
          />
          {/* Darkens the sky behind the text so white type passes contrast. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink/10 lg:bg-gradient-to-r lg:from-ink/80 lg:via-ink/40 lg:to-transparent"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink/70 to-transparent"
          />

          <div className="relative h-full px-6">
          <div className="mx-auto flex h-full max-w-6xl flex-col justify-start pt-12 sm:pt-16 lg:pt-20">
            <Reveal delay={100}>
              <h1 className="type-hero max-w-[15ch] sm:max-w-[18ch] lg:max-w-[19ch] lg:text-[3.25rem]">
                The Bridge Between Founders, Startups &amp; Investors.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mb-8 mt-5 max-w-md text-lg leading-relaxed text-white/90 lg:max-w-lg lg:text-xl">
                Purdue&rsquo;s student-led venture capital organization. Members source startups,
                run diligence, and present recommendations to venture partners.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4">
                <Button to="/projects" variant="gold">
                  Our Work
                </Button>
                <Button to="/partners" variant="outlineWhite">
                  Partner With Us
                </Button>
              </div>
            </Reveal>
          </div>
          </div>
        </div>

        <div className="px-6">
          <div className="mx-auto max-w-6xl">
            <StatStrip
              items={[
                { value: club.memberCount, label: 'Members', note: club.memberLabel },
                { value: club.colleges, label: 'Purdue colleges' },
                { value: club.projectTeams, label: 'Project teams' },
              ]}
            />
          </div>
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
              Most students learn investing from a case study. Members learn by doing the work:
              sourcing deals, running diligence, and making recommendations to venture partners.
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
                {featuredProject.term} · {featuredProject.role}
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-6">{featuredProject.partner}</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-white/75">
                {featuredProject.brief}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold underline decoration-gold/60 underline-offset-8 transition-colors duration-200 hover:text-gold-light"
              >
                Read the case study <ArrowRight />
              </Link>
            </Reveal>
          </div>

          <StatStack items={featuredProject.stats} />
        </div>
      </section>

      {/* ---------- HOW WE WORK ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <Eyebrow className="mb-5">What members do</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-6">How we work.</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mb-16 max-w-2xl text-xl leading-relaxed text-ink/80">
              Members source companies, run diligence, and present recommendations to venture
              partners.
            </p>
          </Reveal>

          <Reveal>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
              The path
            </p>
          </Reveal>
          <ol className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tracks.map((t, i) => (
              <Reveal
                as="li"
                key={t.tier}
                delay={stagger(i)}
                className="border border-l-2 border-ink/15 border-l-gold bg-white/50 p-7"
              >
                <span className="font-display mb-5 flex h-9 w-9 items-center justify-center bg-gold text-sm font-bold text-ink">
                  0{i + 1}
                </span>
                <p className="type-h3 mb-1">{t.tier}</p>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink/65">
                  {t.tag}
                </p>
                <p className="text-sm leading-relaxed text-ink/80">{t.description}</p>
              </Reveal>
            ))}
          </ol>

          <div className="grid gap-10 border-t border-gold/40 pt-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <Reveal>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                  What we deliver to partners
                </p>
              </Reveal>
              <Reveal delay={80}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-gold decoration-2 underline-offset-4 transition-colors hover:text-ink/70"
                >
                  Read the {featuredProject.partner} case study <ArrowRight />
                </Link>
              </Reveal>
            </div>
            <ul className="grid gap-4 sm:grid-cols-3">
              {deliverables.map((d, i) => (
                <Reveal
                  as="li"
                  key={d}
                  delay={stagger(i)}
                  className="border-t-2 border-gold pt-4 font-display text-xl font-bold leading-snug"
                >
                  {d}
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="mt-12 border-l-2 border-gold pl-6">
            <p className="max-w-3xl text-lg leading-relaxed text-ink/85">{hostProof}</p>
          </Reveal>
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
