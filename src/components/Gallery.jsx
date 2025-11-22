const images = [
  'https://images.unsplash.com/photo-1560347876-aeef00ee58a1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342394121-480f71c6b5dc?q=80&w=1200&auto=format&fit=crop',
]

function Gallery() {
  return (
    <section className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl tracking-wide text-neutral-700 uppercase mb-8">Fabric & Light</h2>
        {/* masonry using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
          {images.map((src, idx) => (
            <div key={idx} className="mb-4 overflow-hidden rounded-xl border border-neutral-200">
              <img src={src} alt="Gallery" className="w-full h-auto object-cover saturate-[.9] hover:saturate-75 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
