// One horizontal bar split into proportional segments, with a text legend.
// No chart library: each segment's width is just its percentage.
// For dark backgrounds. The legend carries the numbers, so the bar itself
// is decorative (aria-hidden) and color is never the only signal.
const fills = ['bg-gold', 'bg-gold-light', 'bg-white', 'bg-white/50', 'bg-white/25']

export default function SplitBar({ title, items }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
        {title}
      </p>
      <div className="flex h-3.5 gap-0.5" aria-hidden="true">
        {items.map((item, i) => (
          <div
            key={item.label}
            className={fills[i % fills.length]}
            style={{ flexGrow: item.pct, flexBasis: 0 }}
          />
        ))}
      </div>
      <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-baseline gap-2">
            <span
              aria-hidden="true"
              className={`inline-block h-2.5 w-2.5 shrink-0 ${fills[i % fills.length]}`}
            />
            <span className="text-sm text-white/80">{item.label}</span>
            <span className="font-display text-sm font-bold text-white">{item.pct}%</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
