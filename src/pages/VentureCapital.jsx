import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import { stagger } from '../components/stagger'

const companies = [
  { name: 'Airbnb', founded: '2008', investor: 'Sequoia Capital' },
  { name: 'Uber', founded: '2009', investor: 'Benchmark' },
  { name: 'Facebook', founded: '2004', investor: 'Accel Partners' },
  { name: 'Apple', founded: '1976', investor: 'Sequoia Capital' },
  { name: 'Google', founded: '1998', investor: 'Kleiner Perkins' },
  { name: 'DoorDash', founded: '2013', investor: 'Khosla Ventures' },
]

const differences = [
  'Unlike traditional finance, VC rewards judgment, not just analysis.',
  'You bet on people as much as ideas.',
  'Every investment is a long-term relationship.',
  'Failure is a data point, not a dead end.',
]

export default function VentureCapital() {
  return (
    <>
      {/* ---------- HEADER ---------- */}
      <section className="border-b border-gold/20 bg-ivory px-6 pb-16 pt-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <Eyebrow className="mb-6">Primer</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="type-hero max-w-3xl text-ink">
              What is Venture Capital?
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ---------- DEFINITION ---------- */}
      <section className="border-b border-gold/20 bg-ivory px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-14 md:grid-cols-2">
          <Reveal>
            <p className="text-xl leading-relaxed text-ink md:text-2xl">
              Venture capital is a form of private equity financing where investors provide
              capital to early-stage, high-potential startups in exchange for equity. But VC is
              rarely just about money.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <blockquote className="border-l-2 border-gold pl-8">
              <p className="leading-relaxed text-ink/80">
                &ldquo;[Venture capital] is all about figuring out which questions are the right
                questions to ask, and since we don&rsquo;t have a clue what the right answer is,
                we&rsquo;re very interested in the process by which the entrepreneur gets to the
                conclusion that he offers.&rdquo;
              </p>
              <cite className="mt-4 block text-sm font-semibold not-italic text-ink/70">
                — Don Valentine
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ---------- WHAT A VC DOES ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              The job
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-8">What does a VC actually do?</h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg leading-relaxed text-white/75">
              Venture capitalists spend their days sourcing deals, conducting due diligence,
              evaluating business models, and making investment decisions. The job is part
              research analyst, part psychologist, and part operator — building conviction in
              founders and markets long before the rest of the world catches on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- FAMOUS COMPANIES ---------- */}
      <section className="bg-ivory px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14">
            <Reveal>
              <Eyebrow className="mb-5">Examples</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-4 max-w-3xl">Household names that started as risky bets</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-ink/75">
                A few companies that began with venture capital behind them.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companies.map((c, i) => (
              <Reveal
                key={c.name}
                delay={stagger(i % 3)}
                className="border border-l-2 border-ink/15 border-l-gold bg-white/50 p-8"
              >
                <p className="type-h3 mb-3">{c.name}</p>
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-ink/65">
                  Founded {c.founded}
                </p>
                <p className="text-sm text-ink/80">Early investor: {c.investor}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT MAKES VC DIFFERENT ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Eyebrow dark className="mb-5">
              How it differs
            </Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="type-h2 mb-12">What makes VC different?</h2>
          </Reveal>
          <ol className="space-y-3">
            {differences.map((d, i) => (
              <Reveal as="li" key={d} delay={stagger(i)} className="flex bg-white/[0.04]">
                <span className="font-display flex w-16 shrink-0 items-center justify-center bg-gold text-xl font-bold text-ink">
                  0{i + 1}
                </span>
                <p className="px-6 py-6 text-lg leading-relaxed text-white/85">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gold px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <h2 className="type-h2 mb-8 text-ink">Want to learn VC by doing it?</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button to="/apply" variant="ink">
                Recruiting
              </Button>
              <Button to="/projects" variant="outlineInk">
                See our work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
