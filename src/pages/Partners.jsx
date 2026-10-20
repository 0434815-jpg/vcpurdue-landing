import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import LinkCard from '../components/LinkCard'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import { ArrowRight } from '../components/Icons'
import { deliverables, featuredProject, partnershipMailto, partners } from '../config/site'

export default function Partners() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              Who we work with
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="type-hero mb-6">Partners</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Our partnerships are what separate VCPurdue from a case-study club. These are the
              firms whose mandates our members actually work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- PARTNER CARDS ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {partners.map((p, i) => {
            const lastOdd = i === partners.length - 1 && partners.length % 2 === 1
            return (
              <LinkCard
                key={p.name}
                href={p.href}
                label={p.name}
                delay={stagger(i % 2)}
                className={`flex flex-col p-8 pr-14 md:p-10 md:pr-16 ${lastOdd ? 'md:col-span-2' : ''}`}
              >
                <p className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.2em] text-ink/70">
                  <span>{p.role}</span>
                  <span aria-hidden="true" className="h-3 w-px bg-ink/25" />
                  <span>{p.season}</span>
                </p>
                <h2 className="type-h3 mb-3">{p.name}</h2>
                <p className="mb-8 max-w-xl leading-relaxed text-ink/80">{p.blurb}</p>
                <span className="mt-auto text-sm font-semibold underline decoration-gold decoration-2 underline-offset-4">
                  Visit {p.name}
                </span>
              </LinkCard>
            )
          })}
        </div>
      </section>

      {/* ---------- FOR FIRMS ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow dark className="mb-5">
                For venture firms
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-6">Work with our members.</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mb-9 leading-relaxed text-white/75">
                We partner with venture firms, accelerators, and founders who want serious
                research support — market maps, competitive landscapes, diligence memos — from a
                team that treats it like the job it is.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button href={partnershipMailto} variant="gold">
                  Start a conversation
                </Button>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gold underline decoration-gold/60 underline-offset-8 transition-colors hover:text-gold-light"
                >
                  Read the {featuredProject.partner} engagement <ArrowRight />
                </Link>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                What we deliver
              </p>
            </Reveal>
            <ol className="space-y-3">
              {deliverables.map((d, i) => (
                <Reveal as="li" key={d} delay={stagger(i)} className="flex bg-white/[0.04]">
                  <span className="font-display flex w-16 shrink-0 items-center justify-center bg-gold text-lg font-bold text-ink">
                    0{i + 1}
                  </span>
                  <span className="font-display px-6 py-6 text-xl font-bold">{d}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  )
}
