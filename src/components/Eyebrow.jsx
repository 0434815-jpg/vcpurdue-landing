// Small tracked caps label above a heading, with a short gold rule.
// Gold text only goes on dark backgrounds (it's too faint on ivory), so
// `dark` switches the text color; the rule is gold either way.
export default function Eyebrow({ children, dark = false, center = false, className = '' }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        dark ? 'text-gold' : 'text-ink/70'
      } ${center ? 'justify-center' : ''} ${className}`}
    >
      <span aria-hidden="true" className="inline-block h-px w-6 bg-gold" />
      {children}
    </p>
  )
}
