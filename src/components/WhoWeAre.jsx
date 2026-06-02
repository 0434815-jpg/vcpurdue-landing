export default function WhoWeAre() {
  return (
    <section className="bg-ivory py-28 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-gold text-sm italic mb-5 tracking-wide">Who We Are</p>
        <p className="text-ink text-lg md:text-xl leading-relaxed mb-10">
          VCPurdue is a student-led venture capital organization home to some of the most
          driven individuals at Purdue University.
        </p>
        <a
          href="https://forms.gle/placeholder"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 bg-gold text-ink text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200"
        >
          Join Us
        </a>
      </div>
    </section>
  )
}
