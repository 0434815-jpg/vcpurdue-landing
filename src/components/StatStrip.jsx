import Reveal from './Reveal'
import { stagger } from './stagger'

// Big gold numerals with small tracked labels, separated by hairlines
// (the look of the club's Instagram "by the numbers" graphic). Dark
// backgrounds only — gold numerals are too faint on ivory.
export function StatStrip({ items, className = '' }) {
  return (
    <dl
      className={`grid border-t border-white/15 ${className}`}
      style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={stagger(i)}
          className={`flex flex-col py-7 sm:py-9 ${
            i > 0 ? 'border-l border-white/15 px-3 sm:px-8' : 'pl-0 pr-3 sm:pr-8'
          }`}
        >
          <dt className="order-2 mt-3 text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-white/70 sm:text-xs sm:tracking-[0.2em]">
            {item.label}
            {item.note && (
              <span className="mt-1 block text-[11px] font-medium normal-case tracking-normal text-white/60 sm:text-xs">
                {item.note}
              </span>
            )}
          </dt>
          <dd className="type-numeral text-[2.25rem] text-gold sm:text-6xl">{item.value}</dd>
        </Reveal>
      ))}
    </dl>
  )
}

// Label-over-value status cells (used for "Application status: Closed").
export function FactStrip({ items, className = '' }) {
  return (
    <dl
      className={`grid grid-cols-1 border-t border-white/15 sm:grid-cols-3 ${className}`}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.label}
          delay={stagger(i)}
          className={`py-6 sm:py-8 ${
            i > 0
              ? 'border-t border-white/15 sm:border-l sm:border-t-0 sm:px-8'
              : 'sm:pr-8'
          }`}
        >
          <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
            {item.label}
          </dt>
          <dd className="font-display mt-2 text-xl font-bold leading-snug text-white sm:text-2xl">
            {item.value}
          </dd>
          {item.note && <p className="mt-1 text-sm text-white/65">{item.note}</p>}
        </Reveal>
      ))}
    </dl>
  )
}

// Three numerals inside a thin gold frame, with a caption underneath
// (the Spring 2026 Charmides numbers). Dark backgrounds only.
export function FramedStats({ items, caption, className = '' }) {
  return (
    <Reveal delay={160} className={`border border-gold/50 ${className}`}>
      <dl className="grid divide-x divide-white/15" style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}>
        {items.map(s => (
          <div key={s.label} className="flex flex-col px-3 py-8 text-center sm:px-6 sm:py-10">
            <dt className="order-2 mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-xs">
              {s.label}
            </dt>
            <dd className="type-numeral text-4xl text-gold sm:text-5xl">{s.value}</dd>
          </div>
        ))}
      </dl>
      {caption && (
        <p className="border-t border-white/15 px-6 py-4 text-center text-xs uppercase tracking-[0.18em] text-white/60">
          {caption}
        </p>
      )}
    </Reveal>
  )
}
