import { useEffect, useLayoutEffect, useRef, useState } from 'react'

// Scroll reveal: fade in + rise 16px over 500ms, once, when ~15% of the
// element is visible. No dependencies.
//
// - Content is visible by default. It is only hidden after mount (in a
//   layout effect, before first paint), so nothing is hidden by CSS and
//   a failed/blocked observer never leaves content invisible for long.
// - prefers-reduced-motion: the element is never hidden or moved.
// - After the animation finishes the inline styles are removed, so the
//   element's own hover/transition classes keep working.
// - `delay` (ms) staggers siblings: use stagger(i) (./stagger.js) for grid children.
const DURATION = 500

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  className,
  style,
  children,
  ...rest
}) {
  const ref = useRef(null)
  const [phase, setPhase] = useState('idle') // idle -> hidden -> shown -> done

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      return undefined
    }
    setPhase('hidden')
    const observer = new IntersectionObserver(
      entries => {
        if (entries.some(entry => entry.isIntersecting)) {
          setPhase('shown')
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (phase !== 'shown') return undefined
    const timer = setTimeout(() => setPhase('done'), DURATION + delay + 120)
    return () => clearTimeout(timer)
  }, [phase, delay])

  let motion
  if (phase === 'hidden') {
    motion = { opacity: 0, transform: 'translateY(16px)' }
  } else if (phase === 'shown') {
    motion = {
      opacity: 1,
      transform: 'translateY(0)',
      transition: `opacity ${DURATION}ms ease-out ${delay}ms, transform ${DURATION}ms ease-out ${delay}ms`,
    }
  }

  return (
    <Tag ref={ref} className={className} style={motion ? { ...style, ...motion } : style} {...rest}>
      {children}
    </Tag>
  )
}
