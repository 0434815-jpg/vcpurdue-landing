const members = [
  {
    name: 'José Sándigo',
    title: 'President',
    initials: 'JS',
    href: 'https://www.linkedin.com/in/josesandigo',
  },
  {
    name: 'Hieu Duy Nguyen',
    title: 'Partner Operations',
    initials: 'HN',
    href: 'https://www.linkedin.com/in/hieunguyenlouis',
  },
  {
    name: 'Cristobal Muñoz',
    title: 'Partner Projects',
    initials: 'CM',
    href: 'https://www.linkedin.com/in/cristobal-munoz-legarre-2bb867327',
  },
  {
    name: 'Nilay Mehta',
    title: 'Partner Finance',
    initials: 'NM',
    href: 'https://www.linkedin.com/in/nilaymehta1',
  },
  {
    name: 'Giang Nguyen',
    title: 'Partner Partnerships',
    initials: 'GN',
    href: 'https://www.linkedin.com/in/giangnguyenpurdue',
  },
  {
    name: 'Jake White',
    title: 'Partner Marketing',
    initials: 'JW',
    href: 'https://www.linkedin.com/in/jake-white-785b08317',
  },
]

export default function Team() {
  return (
    <section id="team" className="bg-ivory py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink text-center mb-20">
          The Team
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          {members.map(m => (
            <a
              key={m.name}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center mb-5 group-hover:border-gold group-hover:bg-gold/20 transition-all duration-200">
                <span className="font-serif text-gold font-semibold text-lg">{m.initials}</span>
              </div>
              <p className="font-serif text-ink font-semibold text-base mb-1 group-hover:text-gold transition-colors duration-200">
                {m.name}
              </p>
              <p className="text-ink/50 text-sm">{m.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
