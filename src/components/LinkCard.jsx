import Reveal from './Reveal'
import { ArrowUpRight } from './Icons'

// A card that is one big external link. Gold left rule (like the club's
// Instagram graphics); on hover the whole border turns gold and a small
// arrow slides in. Touch devices have no hover, so the arrow is always
// visible there.
export default function LinkCard({
  href,
  dark = false,
  delay = 0,
  className = '',
  label,
  children,
}) {
  return (
    <Reveal
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label ? `${label} (opens in a new tab)` : undefined}
      delay={delay}
      className={`group relative block border border-l-2 border-l-gold transition-colors duration-200 hover:border-gold focus-visible:border-gold ${
        dark
          ? 'border-white/15 bg-white/[0.04] text-white'
          : 'border-ink/15 bg-white/50 text-ink'
      } ${className}`}
    >
      {children}
      <ArrowUpRight
        className={`absolute right-5 top-5 h-5 w-5 transition-all duration-200 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 [@media(hover:hover)]:-translate-x-1 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-x-0 [@media(hover:hover)]:group-hover:opacity-100 ${
          dark ? 'text-gold' : 'text-ink'
        }`}
      />
    </Reveal>
  )
}
