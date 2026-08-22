import group from '../assets/photos/group.jpg'
import vcicStage from '../assets/photos/vcic-stage.jpg'
import vcicAward from '../assets/photos/vcic-award.jpg'
import presenting from '../assets/photos/presenting.jpg'
import worksession from '../assets/photos/worksession.jpg'
import expo from '../assets/photos/expo.jpg'

// Photo band. Every tile uses object-cover inside a fixed aspect box,
// so nothing stretches regardless of the source dimensions.
const shots = [
  { src: group, alt: 'VCPurdue members at the Daniels School of Business', span: 'row-span-2' },
  { src: vcicStage, alt: 'VCPurdue team at VCIC Undergraduate Midwest' },
  { src: worksession, alt: 'Members working a research session' },
  { src: presenting, alt: 'Executive board presenting to members' },
  { src: expo, alt: 'Members at the Purdue Innovates Startup and Technology Expo' },
  { src: vcicAward, alt: 'VCPurdue team at the Carnegie Mellon Swartz Center' },
]

export default function PhotoBand({ dark = false }) {
  return (
    <section className={`${dark ? 'bg-ink' : 'bg-ivory'} py-20 px-6`}>
      <div className="max-w-6xl mx-auto">
        <p className="text-gold text-sm italic mb-10 tracking-wide text-center">
          The Team
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[190px] gap-3">
          {shots.map((s, i) => (
            <div
              key={i}
              className={`overflow-hidden bg-ink/5 ${s.span || ''} group`}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>

        <p
          className={`text-center text-sm mt-8 ${dark ? 'text-white/45' : 'text-ink/50'}`}
        >
          VCIC Midwest · Charmides Capital · Purdue Innovates Expo
        </p>
      </div>
    </section>
  )
}
