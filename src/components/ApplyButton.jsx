import { links, ctaMode, applyOpen, interestOpen } from '../config/site'

// The single CTA used everywhere on the site.
//
// Which form it points at is controlled by `ctaMode` in config/site.js:
//   'interest' — early-season signup, before recruiting dates exist
//   'apply'    — recruiting is open, link the full application
//
// A button only becomes clickable when the URL exists AND its flag is
// true. Otherwise it renders a disabled label. This exists because the
// Apply button shipped pointing at forms.gle/placeholder for months.
export default function ApplyButton({ variant = 'gold', className = '', children }) {
  const base =
    'inline-block px-8 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200'

  const variants = {
    gold: 'bg-gold text-ink hover:bg-gold-light',
    ink: 'bg-ink text-white hover:bg-ink/80',
    outlineGold: 'border border-gold text-gold hover:bg-gold/10',
    outlineInk: 'border border-ink text-ink hover:bg-ink/10',
  }

  const interest = ctaMode === 'interest'
  const url = interest ? links.interest : links.apply
  const live = interest ? interestOpen && !!links.interest : applyOpen && !!links.apply
  const label = children || (interest ? 'Join the Interest List' : 'Apply Now')

  if (!live) {
    return (
      <span
        className={`${base} ${variants[variant]} opacity-50 cursor-not-allowed ${className}`}
        title={interest ? 'Interest form opens soon' : 'Applications are closed'}
      >
        {interest ? 'Interest Form Opens Soon' : 'Applications Closed'}
      </span>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  )
}
