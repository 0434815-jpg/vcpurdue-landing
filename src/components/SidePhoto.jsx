import Reveal from './Reveal'

// A photo that sits beside a text section (not part of a gallery). `ratio`
// is the source file's width / height, so nothing is cropped. The offset
// frame is gold on dark sections, ink on the gold CTA band.
export default function SidePhoto({
  src,
  alt,
  caption,
  ratio,
  frame = 'border-gold/60',
  captionClass = 'text-white/70',
  className = '',
  eager = false,
}) {
  return (
    <Reveal as="figure" delay={120} className={className}>
      <div className="relative">
        <div
          aria-hidden="true"
          className={`absolute inset-0 translate-x-3 translate-y-3 border ${frame}`}
        />
        <div className="relative overflow-hidden bg-white/5" style={{ aspectRatio: ratio }}>
          <img
            src={src}
            alt={alt}
            loading={eager ? undefined : 'lazy'}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <figcaption className={`mt-7 text-sm ${captionClass}`}>{caption}</figcaption>
    </Reveal>
  )
}
