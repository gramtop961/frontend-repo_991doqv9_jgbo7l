const products = [
  {
    title: 'Chiffon Abaya — Classic',
    price: 'From 100–140 AED',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop',
    category: 'Chiffon Abayas'
  },
  {
    title: 'Velvet Abaya — Midnight',
    price: 'From 120–160 AED',
    image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1400&auto=format&fit=crop',
    category: 'Velvet Abayas'
  },
  {
    title: 'Abaya + Sheila Set — Sand',
    price: 'From 130–170 AED',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop',
    category: 'Abaya + Sheila Sets'
  },
  {
    title: 'Chiffon Abaya — Breeze',
    price: 'From 100–140 AED',
    image: 'https://images.unsplash.com/photo-1717007404665-fc3a4da9fb48?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaGlmZm9uJTIwQWJheWElMjAlRTIlODAlOTQlMjBCcmVlemV8ZW58MHwwfHx8MTc2Mzc3MDgwNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Chiffon Abayas'
  },
  {
    title: 'Velvet Abaya — Cocoa',
    price: 'From 120–160 AED',
    image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1400&auto=format&fit=crop',
    category: 'Velvet Abayas'
  },
  {
    title: 'Abaya + Sheila Set — Pearl',
    price: 'From 130–170 AED',
    image: 'https://images.unsplash.com/photo-1654699991494-892326ee8171?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBYmF5YSUyMCUyQiUyMFNoZWlsYSUyMFNldCUyMCVFMiU4MCU5NCUyMFBlYXJsfGVufDB8MHx8fDE3NjM3NzA4MDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    category: 'Abaya + Sheila Sets'
  }
]

function ShopGrid() {
  return (
    <section id="shop" className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl tracking-wide text-neutral-700 uppercase">Daily Pieces</h2>
            <p className="text-neutral-600 mt-2">Chiffon, velvet, and paired sets</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <div key={idx} className="group flex flex-col border border-neutral-200 rounded-xl overflow-hidden bg-[#fcfbf9]">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition duration-300 group-hover:saturate-75" />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <p className="text-xs uppercase tracking-wide text-neutral-500">{p.category}</p>
                <h3 className="text-lg font-medium text-neutral-900">{p.title}</h3>
                <p className="text-neutral-700">{p.price}</p>
                <div className="pt-2">
                  <a href="#product" className="inline-flex items-center justify-center px-4 py-2 border border-neutral-300 rounded-md text-neutral-900 hover:bg-neutral-100 transition-colors">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShopGrid
