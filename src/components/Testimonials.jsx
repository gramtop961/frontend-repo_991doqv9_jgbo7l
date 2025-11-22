const quotes = [
  '“So soft and elegant. I wear it everyday.”',
  '“Perfect length and beautiful drape.”',
  '“Exactly the minimal style I wanted.”',
]

function Testimonials() {
  return (
    <section className="bg-[#f7f3ee] border-t border-neutral-200">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-2xl tracking-wide text-neutral-700 uppercase mb-6">Customer Notes</h2>
        <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white">
          {/* simple, swipeable row that snaps; no JS needed */}
          <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
            {quotes.map((q, idx) => (
              <div key={idx} className="min-w-full p-10 text-center snap-center">
                <p className="text-xl text-neutral-800">{q}</p>
              </div>
            ))}
          </div>
        </div>
        {/* static nav dots for aesthetic only */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {quotes.map((_, i) => (
            <span key={i} className="h-2 w-2 rounded-full bg-neutral-300"></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
