export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-cream mt-20">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div>
            <h3 className="font-display text-2xl mb-4 text-cream">Pink <span className="logo-symbol">&amp;</span> Ochre</h3>
            <p className="text-taupe text-sm leading-relaxed font-body">
              Thoughtful stories on lifestyle, fashion, wellness, books, and food.
            </p>
            <div className="flex gap-6 mt-6">
              <a href="#" className="text-taupe hover:text-gold transition text-sm font-sans tracking-wide uppercase">Instagram</a>
              <a href="#" className="text-taupe hover:text-gold transition text-sm font-sans tracking-wide uppercase">Pinterest</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-cream">Stories</h4>
            <ul className="space-y-3">
              <li><a href="/category/lifestyle" className="text-taupe hover:text-gold transition text-sm font-body">Lifestyle</a></li>
              <li><a href="/category/fashion" className="text-taupe hover:text-gold transition text-sm font-body">Fashion</a></li>
              <li><a href="/category/wellness" className="text-taupe hover:text-gold transition text-sm font-body">Wellness</a></li>
              <li><a href="/category/books" className="text-taupe hover:text-gold transition text-sm font-body">Book</a></li>
              <li><a href="/category/food" className="text-taupe hover:text-gold transition text-sm font-body">Food</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-6 text-cream">Pages</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-taupe hover:text-gold transition text-sm font-body">Home</a></li>
              <li><a href="/blog" className="text-taupe hover:text-gold transition text-sm font-body">Stories</a></li>
              <li><a href="/about" className="text-taupe hover:text-gold transition text-sm font-body">About</a></li>
              <li><a href="/contact" className="text-taupe hover:text-gold transition text-sm font-body">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-warm-stone pt-8 text-center">
          <p className="text-taupe text-sm font-sans tracking-wide">© {currentYear} Pink &amp; Ochre. All rights reserved. · <a href="/terms" className="hover:text-gold transition">Terms</a> · <a href="/privacy" className="hover:text-gold transition">Privacy</a></p>
        </div>
      </div>
    </footer>
  )
}
