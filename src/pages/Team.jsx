import PersonCard from '../components/PersonCard'
import { executiveBoard, seniorAssociates, advisors, founders } from '../config/team'

function Group({ eyebrow, title, blurb, people, dark = false }) {
  if (!people.length) return null
  return (
    <section className={`${dark ? 'bg-ink' : 'bg-ivory'} py-24 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          {eyebrow && (
            <p className="text-gold text-sm italic mb-4 tracking-wide">{eyebrow}</p>
          )}
          <h2
            className={`font-serif text-3xl md:text-4xl font-bold ${
              dark ? 'text-white' : 'text-ink'
            } mb-4`}
          >
            {title}
          </h2>
          {blurb && (
            <p
              className={`text-sm leading-relaxed max-w-xl mx-auto ${
                dark ? 'text-white/50' : 'text-ink/55'
              }`}
            >
              {blurb}
            </p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {people.map(p => (
            <PersonCard key={p.name} person={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Team() {
  return (
    <>
      <section className="bg-ink py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-gold text-sm italic mb-4 tracking-wide">Our People</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            The Team
          </h1>
          <p className="text-white/55 text-lg leading-relaxed">
            VCPurdue is structured like the firms our members go on to join. Six Partners
            run the organization, Senior Associates lead engagements, and every member
            works real deals.
          </p>
        </div>
      </section>

      <Group
        eyebrow="Leadership"
        title="Executive Board"
        blurb="Six Partners, each owning a function — mirroring the structure of a working venture firm."
        people={executiveBoard}
      />

      <Group
        eyebrow="Deal Leadership"
        title="Senior Associates"
        blurb="Senior Associates drive sourcing strategy, coach Associates, and work directly with our partner firms."
        people={seniorAssociates}
        dark
      />

      <Group
        eyebrow="Guidance"
        title="Faculty Advisors"
        blurb="Our advisors provide academic oversight and industry connections through the Daniels School of Business."
        people={advisors}
      />

      <Group eyebrow="Origins" title="Founders" people={founders} dark />
    </>
  )
}
