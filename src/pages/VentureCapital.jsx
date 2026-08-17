import { Link } from 'react-router-dom'
import ApplyButton from '../components/ApplyButton'

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
      <section className="bg-ivory pt-24 pb-16 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6">Primer</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-ink leading-none">
            What is <span className="italic text-gold font-normal">Venture Capital?</span>
          </h1>
        </div>
      </section>

      {/* ---------- DEFINITION ---------- */}
      <section className="bg-ivory py-20 px-6 border-b border-gold/20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          <p className="text-ink text-xl md:text-2xl leading-relaxed">
            Venture capital is a form of private equity financing where investors provide
            capital to early-stage, high-potential startups in exchange for equity. But VC
            is rarely just about money.
          </p>
          <blockquote className="border-l border-gold/40 pl-8">
            <p className="font-serif italic text-ink/70 leading-relaxed">
              "[Venture capital] is all about figuring out which questions are the right
              questions to ask, and since we don't have a clue what the right answer is,
              we're very interested in the process by which the entrepreneur gets to the
              conclusion that he offers."
            </p>
            <cite className="not-italic text-gold text-sm mt-4 block">— Don Valentine</cite>
          </blockquote>
        </div>
      </section>

      {/* ---------- WHAT A VC DOES ---------- */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-8">
            What does a VC actually do?
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Venture capitalists spend their days sourcing deals, conducting due diligence,
            evaluating business models, and making investment decisions. The job is part
            research analyst, part psychologist, and part operator — building conviction in
            founders and markets long before the rest of the world catches on.
          </p>
        </div>
      </section>

      {/* ---------- FAMOUS COMPANIES ---------- */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-ink mb-4">
              Household names that started as risky bets
            </h2>
            <p className="text-ink/55 text-sm">
              A few companies that began with venture capital behind them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/20 border border-gold/20">
            {companies.map(c => (
              <div key={c.name} className="bg-ivory p-8">
                <p className="font-serif text-2xl font-bold text-ink mb-3">{c.name}</p>
                <div className="w-6 h-px bg-gold mb-4" />
                <p className="text-ink/40 text-xs tracking-wide uppercase mb-1">
                  Founded {c.founded}
                </p>
                <p className="text-ink/60 text-sm">Early investor: {c.investor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHAT MAKES VC DIFFERENT ---------- */}
      <section className="bg-ink py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-white text-center mb-16">
            What makes VC different?
          </h2>
          <div className="space-y-px bg-gold/20 border border-gold/20">
            {differences.map((d, i) => (
              <div key={d} className="bg-ink p-8 flex gap-8 items-baseline">
                <span className="font-serif text-gold text-lg shrink-0">
                  0{i + 1}
                </span>
                <p className="text-white/70 text-lg leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="bg-gold py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-ink mb-8">
            Want to learn VC by doing it?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ApplyButton variant="ink" />
            <Link
              to="/projects"
              className="inline-block px-8 py-3.5 border border-ink text-ink text-sm font-semibold tracking-wide hover:bg-ink/10 transition-colors duration-200"
            >
              See our work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
