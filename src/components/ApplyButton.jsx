import { links, applyOpen } from '../config/site'

// Single Apply button used everywhere. When `applyOpen` is false
// in config/site.js it renders a disabled state instead of
// linking to a dead form — no more placeholder URLs shipping live.
export default function ApplyButton({ variant = 'gold', className = '', children }) {
  const base =
    'inline-block px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200'

  const variants = {
    gold: 'bg-gold text-ink hover:bg-gold-light',
    ink: 'bg-ink text-white hover:bg-ink/80',
    outlineGold: 'border border-gold text-gold hover:bg-gold/10',
    outlineInk: 'border border-ink text-ink hover:bg-ink/10',
  }

  if (!applyOpen) {
    return (
      <span
        className={`${base} ${variants[variant]} opacity-50 cursor-not-allowed ${className}`}
        title="Applications open soon"
      >
        Applications Open Soon
      </span>
    )
  }

  return (
    <a
      href={links.apply}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children || 'Apply Now'}
    </a>
  )
}
