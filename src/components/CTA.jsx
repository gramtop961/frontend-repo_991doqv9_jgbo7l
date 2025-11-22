function CTA() {
  const whatsappLink = 'https://wa.me/0000000000?text=Hello%20Bab%20Al-Ain%20—%20I%20am%20ready%20to%20order'
  return (
    <section className="bg-white border-t border-neutral-200">
      <div className="container mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl text-neutral-900 mb-5">Ready To Order Your Abaya?</h3>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex px-6 py-3 bg-neutral-900 text-white rounded-md hover:opacity-90 transition-opacity border border-neutral-900">Chat on WhatsApp</a>
      </div>
    </section>
  )
}

export default CTA
