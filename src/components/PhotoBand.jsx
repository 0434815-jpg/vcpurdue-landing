import vcicStage from '../assets/photos/vcic-stage.jpg'
import presenting from '../assets/photos/presenting.jpg'
import worksession from '../assets/photos/worksession.jpg'
import expo from '../assets/photos/expo.jpg'
import Reveal from './Reveal'
import { stagger } from './stagger'
import Eyebrow from './Eyebrow'

// Event photos, shown at their real aspect ratios so nothing is cropped:
// on desktop every tile in the row has the same height and a width
// proportional to its ratio. `ratio` = width / height of the source file.
// No staircase group shot here — the homepage hero already uses one.
const shots = [
  {
    src: presenting,
    ratio: 1045 / 1400,
    alt: 'Executive board presenting to members in a classroom',
    caption: 'Executive board presenting to members',
  },
  {
    src: vcicStage,
    ratio: 1400 / 1050,
    alt: 'VCPurdue team standing in front of a VCIC Undergraduate Midwest slide',
    caption: 'VCIC Undergraduate Midwest',
  },
  {
    src: worksession,
    ratio: 1400 / 1050,
    alt: 'Members working a research session around a table',
    caption: 'Working session',
  },
  {
    src: expo,
    ratio: 1055 / 1400,
    alt: 'Two members in front of the Purdue Innovates Startup and Technology Expo screen',
    caption: 'Purdue Innovates Startup and Technology Expo',
  },
]

export default function PhotoBand({ dark = false }) {
  return (
    <section className={`${dark ? 'bg-ink' : 'bg-ivory'} px-6 py-20`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow dark={dark} className="mb-8">
            Our members
          </Eyebrow>
        </Reveal>

        <div className="flex flex-wrap gap-x-3 gap-y-8 md:flex-nowrap">
          {shots.map((s, i) => {
            const portrait = s.ratio < 1
            return (
              <Reveal
                as="figure"
                key={s.caption}
                delay={stagger(i)}
                className={`min-w-0 md:order-none md:basis-0 ${
                  portrait ? 'order-1 basis-[calc(50%-0.375rem)]' : 'order-2 basis-full'
                }`}
                style={{ flexGrow: s.ratio }}
              >
                <div className="group overflow-hidden bg-ink/5" style={{ aspectRatio: s.ratio }}>
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption
                  className={`mt-3 text-sm leading-snug ${dark ? 'text-white/70' : 'text-ink/70'}`}
                >
                  {s.caption}
                </figcaption>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
