import { Link } from 'react-router-dom'
import { ArrowUpRight } from './Icons'

const base =
  'inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-200'

const sizes = {
  md: 'px-7 py-3.5',
  sm: 'px-5 py-2.5',
}

// On dark sections: gold / outlineGold / outlineWhite.
// On ivory sections: ink / outlineInk.
const variants = {
  gold: 'bg-gold text-ink hover:bg-gold-light',
  outlineGold: 'border border-gold text-gold hover:bg-gold/10',
  outlineWhite: 'border border-white/40 text-white hover:border-white hover:bg-white/5',
  ink: 'bg-ink text-white hover:bg-ink/80',
  outlineInk: 'border border-ink text-ink hover:bg-ink hover:text-white',
}

// `to` = in-app route, `href` = anything else (mailto:, https://...).
// https links open in a new tab.
export default function Button({
  to,
  href,
  variant = 'gold',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  const external = /^https?:/.test(href)
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {external && <ArrowUpRight className="h-4 w-4" />}
      {external && <span className="sr-only">(opens in a new tab)</span>}
    </a>
  )
}
