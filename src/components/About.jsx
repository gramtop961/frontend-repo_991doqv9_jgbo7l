function About() {
  return (
    <section id="about" className="bg-[#f7f3ee] border-t border-neutral-200">
      <div className="container mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl tracking-wide text-neutral-700 uppercase">The Story</h2>
          <p className="text-3xl sm:text-4xl leading-normal text-neutral-900">
            Bab Al-Ain™ creates simple, graceful modestwear using chiffon, velvet, and everyday fabrics. Clean lines. Soft textures. Designed for comfort and elegance.
          </p>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-neutral-900/5"></div>
          <img
            src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1400&auto=format&fit=crop"
            alt="Fabric texture"
            className="relative rounded-2xl w-full h-[360px] object-cover border border-neutral-200 saturate-[.9]"
          />
        </div>
      </div>
    </section>
  )
}

export default About
