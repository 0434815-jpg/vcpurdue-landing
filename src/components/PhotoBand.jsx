import group from '../assets/photos/group.jpg'
import vcicStage from '../assets/photos/vcic-stage.jpg'
import vcicAward from '../assets/photos/vcic-award.jpg'
import presenting from '../assets/photos/presenting.jpg'
import worksession from '../assets/photos/worksession.jpg'
import expo from '../assets/photos/expo.jpg'
import Reveal from './Reveal'
import { stagger } from './stagger'
import Eyebrow from './Eyebrow'

// Photo band. Every tile uses object-cover inside a fixed-height box, so
// nothing stretches regardless of the source dimensions.
const shots = [
  { src: group, alt: 'VCPurdue members at the Daniels School of Business', span: 'row-span-2' },
  { src: vcicStage, alt: 'VCPurdue team at VCIC Undergraduate Midwest' },
  { src: worksession, alt: 'Members working a research session' },
  { src: presenting, alt: 'Executive board presenting to members' },
  { src: expo, alt: 'Members at the Purdue Innovates Startup and Technology Expo' },
  { src: vcicAward, alt: 'VCPurdue team at the Carnegie Mellon Swartz Center', span: 'md:col-span-2' },
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

        <div className="grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4">
          {shots.map((s, i) => (
            <Reveal
              key={s.alt}
              delay={stagger(i)}
              className={`group overflow-hidden bg-ink/5 ${s.span || ''}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
              />
            </Reveal>
          ))}
        </div>

        <p className={`mt-8 text-sm ${dark ? 'text-white/65' : 'text-ink/65'}`}>
          VCIC Midwest · Charmides Capital · Purdue Innovates Expo
        </p>
      </div>
    </section>
  )
}
