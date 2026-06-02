const values = [
  {
    title: 'Excellence',
    description:
      'We hold ourselves to the highest standard in everything we do — from research to relationships.',
  },
  {
    title: 'Collaboration',
    description:
      'The best decisions emerge from diverse perspectives working toward a shared goal.',
  },
  {
    title: 'Integrity',
    description:
      "We build trust through transparency, honesty, and a commitment to doing what's right.",
  },
]

export default function Values() {
  return (
    <section className="bg-ivory py-28 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        {values.map(v => (
          <div key={v.title}>
            <h3 className="font-serif text-2xl font-semibold text-ink mb-4">{v.title}</h3>
            <div className="w-8 h-px bg-gold mx-auto mb-5" />
            <p className="text-ink/60 text-sm leading-relaxed">{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
