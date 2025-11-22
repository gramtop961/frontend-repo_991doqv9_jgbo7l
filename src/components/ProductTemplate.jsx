function ProductTemplate() {
  const whatsappLink = 'https://wa.me/0000000000?text=Hello%20Bab%20Al-Ain%20—%20I%20would%20like%20to%20order%20this%20product'

  return (
    <section id="product" className="bg-[#f7f5f1] border-t border-neutral-200">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Large image */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-white/60"></div>
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
            alt="Product detail"
            className="relative rounded-2xl w-full h-[520px] object-cover border border-neutral-200 saturate-[.9]"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-5">
          <h3 className="text-2xl sm:text-3xl text-neutral-900">Chiffon Abaya — Classic</h3>
          <p className="text-lg text-neutral-700">From 100–140 AED</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div>
              <h4 className="text-sm uppercase tracking-wide text-neutral-600 mb-2">Fabric</h4>
              <p className="text-neutral-800">Lightweight chiffon with soft drape</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wide text-neutral-600 mb-2">Colors</h4>
              <p className="text-neutral-800">Sand, Pearl, Cocoa</p>
            </div>
            <div>
              <h4 className="text-sm uppercase tracking-wide text-neutral-600 mb-2">Size Notes</h4>
              <p className="text-neutral-800">Relaxed fit. Modest length. Custom adjustments on request.</p>
            </div>
          </div>

          <div className="pt-2">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex px-5 py-3 bg-neutral-900 text-white rounded-md hover:opacity-90 transition-opacity border border-neutral-900">Order on WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductTemplate
