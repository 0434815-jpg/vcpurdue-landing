import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'
import { StatStrip } from '../components/StatStrip'
import vcicStage from '../assets/photos/vcic-stage.jpg'
import { events, vcic } from '../config/site'

export default function Events() {
  return (
    <>
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              What&rsquo;s coming
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="type-hero mb-6">Events</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="max-w-2xl text-lg leading-relaxed text-white/75">
              Competitions, summits, and the places to find us on campus.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- EVENT LIST ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-6">
          {events.map((e, i) => (
            <Reveal
              key={`${e.title}-${e.date}`}
              delay={stagger(i)}
              className="border border-l-2 border-ink/15 border-l-gold bg-white/50 p-8 md:grid md:grid-cols-[15rem_1fr] md:gap-10 md:p-10"
            >
              <div className="mb-5 md:mb-0">
                <p className="font-display text-lg font-bold leading-snug">{e.date}</p>
                {e.time && <p className="mt-1 text-sm text-ink/75">{e.time}</p>}
                <p className="mt-1 text-sm text-ink/75">{e.location}</p>
              </div>
              <div>
                <h2 className="type-h3 mb-3">{e.title}</h2>
                <p className="mb-5 max-w-2xl leading-relaxed text-ink/80">{e.description}</p>
                {e.note && (
                  <p className="mb-5 inline-block border border-ink/25 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/80">
                    {e.note}
                  </p>
                )}
                {e.href && (
                  <div>
                    <Button href={e.href} variant="outlineInk" size="sm">
                      {e.linkLabel || 'Learn more'}
                    </Button>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- ABOUT VCIC ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow dark className="mb-5">
                  About VCIC
                </Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="type-h2 mb-6">What is VCIC?</h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mb-5 text-lg leading-relaxed text-white/80">{vcic.about}</p>
              </Reveal>
              <Reveal delay={240}>
                <p className="font-display mb-8 text-xl font-bold text-gold-light">
                  {vcic.represent}
                </p>
              </Reveal>
              <Reveal delay={300}>
                <Button href={vcic.officialUrl} variant="outlineGold">
                  Official VCIC page
                </Button>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <figure>
                <div className="relative">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-3 translate-y-3 border border-gold/60"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                    <img
                      src={vcicStage}
                      alt="VCPurdue team standing in front of a VCIC Undergraduate Midwest slide"
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <figcaption className="mt-7 text-sm text-white/70">{vcic.photoCaption}</figcaption>
              </figure>
            </Reveal>
          </div>

          <StatStrip items={vcic.stats} className="mb-3" />
          <Reveal>
            <p className="mb-16 text-xs text-white/60">
              Source:{' '}
              <a
                href={vcic.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
              >
                vcic.org
              </a>
              <span className="sr-only"> (opens in a new tab)</span>
            </p>
          </Reveal>

          <Reveal>
            <Eyebrow dark className="mb-8">
              Purdue&rsquo;s path to Global Finals
            </Eyebrow>
          </Reveal>
          <ol className="space-y-3">
            {vcic.path.map((s, i) => (
              <Reveal as="li" key={s.step} delay={stagger(i)} className="flex bg-white/[0.04]">
                <span className="font-display flex w-16 shrink-0 items-center justify-center bg-gold text-xl font-bold text-ink sm:w-24 sm:text-2xl">
                  {s.step}
                </span>
                <div className="px-5 py-5 sm:px-8 sm:py-6">
                  <p className="type-h3 mb-1">{s.title}</p>
                  <p className="text-white/80">{s.date}</p>
                  <p className="text-sm text-white/65">{s.place}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
