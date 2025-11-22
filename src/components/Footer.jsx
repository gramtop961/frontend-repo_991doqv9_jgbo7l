function Footer() {
  return (
    <footer className="bg-[#f6f1ea] border-t border-neutral-200">
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-xl text-neutral-900 mb-3">BAB AL-AIN™ / <span className="tracking-wide">باب العين™</span></h4>
          <p className="text-neutral-600">Modestwear, handcrafted.</p>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-wide text-neutral-600 mb-2">Instagram</h5>
          <a href="https://instagram.com/design._anonymous" target="_blank" rel="noreferrer" className="text-neutral-900 underline underline-offset-4">@design._anonymous</a>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-wide text-neutral-600 mb-2">Delivery</h5>
          <p className="text-neutral-800">UAE & Saudi Arabia</p>
        </div>
        <div>
          <h5 className="text-sm uppercase tracking-wide text-neutral-600 mb-3">Stay in touch</h5>
          <form onSubmit={(e)=>e.preventDefault()} className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400" />
            <button className="px-4 py-2 bg-neutral-900 text-white rounded-md border border-neutral-900">Send</button>
          </form>
        </div>
      </div>
      <div className="border-t border-neutral-200 text-center text-neutral-600 text-sm py-4">© {new Date().getFullYear()} Bab Al-Ain™. All rights reserved.</div>
    </footer>
  )
}

export default Footer
