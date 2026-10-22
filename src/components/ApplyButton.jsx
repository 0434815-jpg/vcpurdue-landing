import { links, ctaMode, applyOpen, interestOpen } from '../config/site'
import Button from './Button'

// The single "apply" CTA, for any page that wants one.
//
// Which form it points at is controlled by `ctaMode` in config/site.js:
//   'interest' — early-season signup, before recruiting dates exist
//   'apply'    — recruiting is open, link the full application
//
// The external form only becomes a link when its URL exists AND its flag
// is true. Otherwise the button goes to the on-site /apply page (which
// explains the closed state) instead of a dead form. This exists because
// the Apply button once shipped pointing at forms.gle/placeholder for
// months.
export default function ApplyButton({ variant = 'gold', className = '', children }) {
  const interest = ctaMode === 'interest'
  const url = interest ? links.interest : links.apply
  const live = interest ? interestOpen && !!links.interest : applyOpen && !!links.apply
  const label = children || (interest ? 'Join the Interest List' : 'Apply Now')

  if (!live) {
    return (
      <Button to="/apply" variant={variant} className={className}>
        Recruiting
      </Button>
    )
  }

  return (
    <Button href={url} variant={variant} className={className}>
      {label}
    </Button>
  )
}
