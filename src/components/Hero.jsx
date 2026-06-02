export default function Hero() {
  return (
    <section id="home" className="bg-ink min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          Where Founders, Investors &amp; Ventures Converge.
        </h1>
        <p className="text-white/60 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed">
          Purdue University's student-led venture capital organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/placeholder"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-gold text-ink text-sm font-semibold tracking-wide hover:bg-gold-light transition-colors duration-200"
          >
            Apply Now
          </a>
          <a
            href="#mission"
            className="px-8 py-3.5 border border-gold text-gold text-sm font-semibold tracking-wide hover:bg-gold/10 transition-colors duration-200"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
