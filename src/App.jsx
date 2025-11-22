import Hero from './components/Hero'
import About from './components/About'
import ShopGrid from './components/ShopGrid'
import ProductTemplate from './components/ProductTemplate'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <Hero />
      {/* ABOUT */}
      <About />
      {/* SHOP GRID */}
      <ShopGrid />
      {/* PRODUCT TEMPLATE */}
      <ProductTemplate />
      {/* GALLERY */}
      <Gallery />
      {/* TESTIMONIALS */}
      <Testimonials />
      {/* CTA */}
      <CTA />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
