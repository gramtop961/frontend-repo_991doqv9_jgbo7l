import { useEffect, useRef } from 'react'

function Hero() {
  const arrowRef = useRef(null)

  useEffect(() => {
    // gentle float on arrow (CSS animation alternative kept minimal)
    if (arrowRef.current) {
      arrowRef.current.animate([
        { transform: 'translateY(0px)' },
        { transform: 'translateY(6px)' },
        { transform: 'translateY(0px)' }
      ], {
        duration: 2000,
        iterations: Infinity,
        easing: 'ease-in-out'
      })
    }
  }, [])

  const whatsappLink = 'https://wa.me/0000000000?text=Hello%20Bab%20Al-Ain%20—%20I%20would%20like%20to%20order'

  return (
    <section className="relative min-h-[100vh] flex items-center isolate overflow-hidden bg-[#f6f1ea]">
      {/* subtle texture with 1px grid lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]; [background-size:40px_40px] opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-3 text-sm tracking-wide text-neutral-700">
            <span className="inline-block h-2 w-2 rounded-full bg-neutral-400"></span>
            <span>Design._Anonymous</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-neutral-900">
            BAB AL-AIN™
            <span className="block text-neutral-700 text-3xl sm:text-4xl mt-3">باب العين™</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-700/90">
            Modest Fashion for UAE & KSA.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a href="#shop" className="px-5 py-3 bg-neutral-900 text-white rounded-md hover:opacity-90 transition-opacity border border-neutral-900">
              Shop Abayas
            </a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-5 py-3 bg-white text-neutral-900 rounded-md hover:bg-neutral-100 transition-colors border border-neutral-300">
              Order on WhatsApp
            </a>
          </div>
        </div>

        {/* Floating image */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-white/50 blur-xl"></div>
          <img
            src="https://images.unsplash.com/photo-1615639158535-0f3d5987f92b?q=80&w=1400&auto=format&fit=crop"
            alt="Abaya silhouette"
            className="relative rounded-3xl w-full h-[70vh] object-cover object-center border border-neutral-200 shadow-[0_10px_40px_rgba(0,0,0,0.08)] saturate-[.9]"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" ref={arrowRef} className="absolute bottom-6 left-1/2 -translate-x-1/2 text-neutral-700/70 hover:text-neutral-900 transition-colors" aria-label="Scroll down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </a>
    </section>
  )
}

export default Hero
