import Button from '../components/Button'
import Eyebrow from '../components/Eyebrow'
import Reveal from '../components/Reveal'
import SidePhoto from '../components/SidePhoto'
import { stagger } from '../components/stagger'
import presenting from '../assets/photos/presenting.jpg'
import clubFormal from '../assets/photos/club-formal.jpg'

// Then/now lines are limited to what a named source states. Sources are the
// company's own announcement, the investor's own write-up, or a news record.
const companies = [
  {
    name: 'Airbnb',
    founded: '2008',
    investor: 'Sequoia Capital',
    then: 'Sequoia made a $585,000 seed investment in April 2009.',
    now: 'Public since December 2020.',
    sources: [
      { label: 'Sequoia', href: 'https://sequoiacap.com/article/airbnb-ipo-embracing-the-adventure' },
    ],
  },
  {
    name: 'Uber',
    founded: '2009',
    investor: 'Benchmark',
    then: 'Benchmark led an $11 million Series A in February 2011.',
    now: 'Public since May 2019 (NYSE).',
    sources: [
      {
        label: 'Fortune',
        href: 'https://www.fortune.com/2014/06/06/these-are-the-venture-firms-celebrating-ubers-massive-17b-valuation/',
      },
      {
        label: 'Uber',
        href: 'https://investor.uber.com/news-events/news/press-release-details/2019/Uber-Announces-Pricing-of-Initial-Public-Offering/default.aspx',
      },
    ],
  },
  {
    name: 'Facebook',
    founded: '2004',
    investor: 'Accel Partners',
    then: 'Accel invested $12.7 million in 2005.',
    now: 'Public since May 2012; the company is now Meta.',
    sources: [
      { label: 'TechCrunch', href: 'https://techcrunch.com/2010/11/22/accel-partners-fund-ix-facebook-extraordinary/' },
      { label: 'Wikipedia', href: 'https://en.wikipedia.org/wiki/Initial_public_offering_of_Facebook' },
    ],
  },
  {
    name: 'Apple',
    founded: '1976',
    investor: 'Sequoia Capital',
    then: 'Sequoia partnered with Apple in 1978.',
    now: 'Public since 1980.',
    sources: [{ label: 'Sequoia', href: 'https://articles.sequoiacap.com/apple-story' }],
  },
  {
    name: 'Google',
    founded: '1998',
    investor: 'Kleiner Perkins',
    then: 'Kleiner Perkins and Sequoia led a $25 million round in June 1999.',
    now: 'Public since August 2004.',
    sources: [
      { label: 'Google release', href: 'https://thenextweb.com/news/googles-press-release' },
      {
        label: 'Renaissance Capital',
        href: 'https://www.renaissancecapital.com/IPO-Center/News/2810/It%E2%80%99s-official-Google-prices-at-%2485-a-share',
      },
    ],
  },
  {
    name: 'DoorDash',
    founded: '2013',
    investor: 'Khosla Ventures',
    then: 'A $2.4 million round in 2013 was co-led by Khosla Ventures and Charles River Ventures.',
    now: 'Public since December 2020 (NYSE).',
    sources: [
      {
        label: 'Y Combinator',
        href: 'https://www.ycombinator.com/blog/doordasy-yc-s13-raises-2-dollars-dot-4m-to-improve-food-delivery-growing-over-20-percent-weekly/',
      },
      {
        label: 'DoorDash',
        href: 'https://ir.doordash.com/news/news-details/2020/DoorDash-Announces-Pricing-of-Initial-Public-Offering',
      },
    ],
  },
]

const differences = [
  'Unlike traditional finance, VC rewards judgment as well as analysis.',
  'You bet on people as much as ideas.',
  'Every investment is a long-term relationship.',
  'A failed investment is information.',
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
            <h1 className="type-hero max-w-3xl text-ink">What is Venture Capital?</h1>
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
        <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow dark className="mb-5">
                The job
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-8">What does a VC do?</h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg leading-relaxed text-white/75">
                Venture capitalists spend their days sourcing deals, conducting due diligence,
                evaluating business models, and making investment decisions. The job is part
                research analyst, part psychologist, and part operator: finding founders and
                markets early.
              </p>
            </Reveal>
          </div>
          <SidePhoto
            src={clubFormal}
            ratio={1200 / 1800}
            alt="VCPurdue's Fall 2026 class gathered on a staircase"
            caption="VCPurdue's Fall 2026 class."
            className="mx-auto w-full max-w-[19rem]"
          />
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
                <p className="mb-4 text-sm text-ink/80">Early investor: {c.investor}</p>
                <dl className="space-y-2 border-t border-ink/10 pt-4 text-sm leading-relaxed text-ink/85">
                  <div>
                    <dt className="inline font-bold">Then: </dt>
                    <dd className="inline">{c.then}</dd>
                  </div>
                  <div>
                    <dt className="inline font-bold">Now: </dt>
                    <dd className="inline">{c.now}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-xs text-ink/70">
                  Sources:{' '}
                  {c.sources.map((src, j) => (
                    <span key={src.href}>
                      {j > 0 && ', '}
                      <a
                        href={src.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-gold decoration-2 underline-offset-2 transition-colors hover:text-ink"
                      >
                        {src.label}
                        <span className="sr-only"> (opens in a new tab)</span>
                      </a>
                    </span>
                  ))}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT MAKES VC DIFFERENT ---------- */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto grid max-w-5xl items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow dark className="mb-5">
                How it differs
              </Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="type-h2 mb-10">What makes VC different?</h2>
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
          <SidePhoto
            src={presenting}
            ratio={1045 / 1400}
            alt="VCPurdue executive board presenting to members in a classroom"
            caption="VCPurdue's executive board presenting to members."
            className="mx-auto w-full max-w-[19rem]"
          />
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gold px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="type-h2 mb-8 text-ink">Want to learn VC by doing it?</h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-4">
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
