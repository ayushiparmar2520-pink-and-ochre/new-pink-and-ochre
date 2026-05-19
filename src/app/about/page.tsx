import Link from 'next/link'

export default function AboutPage() {
  const categories = [
    {
      title: 'Lifestyle',
      description: 'Real-life inspiration, slow-living tips, home rituals, productivity habits, and the small mindset shifts that make life better.',
      slug: 'lifestyle',
    },
    {
      title: 'Fashion',
      description: 'Outfit ideas, seasonal trends, capsule wardrobe guides, and styling tips for women who dress for themselves.',
      slug: 'fashion',
    },
    {
      title: 'Beauty',
      description: 'Honest skincare reviews, makeup tutorials, glow-up routines, and DIY beauty recipes for every skin type.',
      slug: 'beauty',
    },
    {
      title: 'Food',
      description: 'Easy, nutritious recipes from weeknight dinners to crowd-pleasing brunches and seasonal comfort food.',
      slug: 'food',
    },
    {
      title: 'Wellness',
      description: 'Mindfulness practices, mental health tools, fitness routines, and holistic habits for a better life.',
      slug: 'wellness',
    },
    {
      title: 'Book Reviews',
      description: 'Honest reviews and curated reading lists across literary fiction, romance, memoir, and self-help.',
      slug: 'book',
    },
  ]

  const faqs = [
    {
      question: 'What is Pinkandochre?',
      answer: 'Pinkandochre is an independent women\'s lifestyle blog covering six categories: lifestyle, fashion, beauty, food, wellness, and books. It is written and edited by founder Aayushi Parmar.',
    },
    {
      question: 'Who writes for Pinkandochre?',
      answer: 'Every post is written and edited personally by Aayushi Parmar, the founder. The blog is independently owned and not affiliated with any media network.',
    },
    {
      question: 'What kind of content does Pinkandochre publish?',
      answer: 'The blog publishes outfit guides, skincare and beauty reviews, easy healthy recipes, wellness and mindfulness articles, and honest book reviews — all with a practical, friend-to-friend tone.',
    },
    {
      question: 'Is Pinkandochre suitable for U.S. readers?',
      answer: 'Yes. While the blog is read globally, the majority of its readership is based in the United States, and content is curated with U.S. readers in mind.',
    },
    {
      question: 'How can I collaborate with Pinkandochre?',
      answer: 'For brand partnerships, sponsorships, gifting, or press inquiries, reach out via the contact page or email hello@pinkandochre.com.',
    },
    {
      question: 'How do I stay updated with new posts?',
      answer: 'The easiest way is to subscribe to the newsletter or follow Pinkandochre on Instagram and Pinterest.',
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <span className="text-xs font-sans tracking-widest text-gold uppercase">Welcome</span>
          <h1 className="heading-large mt-4 mb-6">About Pinkandochre</h1>
          <p className="subtitle max-w-3xl">
            A women's lifestyle blog covering fashion, beauty, food, wellness, books, and everyday lifestyle inspiration — written for readers who believe living well is in the details.
          </p>
        </div>
      </section>

      {/* What is Pinkandochre */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container max-w-3xl">
          <div className="mb-16 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Our Story</span>
            <h2 className="heading-medium mt-4">What is Pinkandochre?</h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-taupe font-body leading-relaxed">
            <p>
              Founded by <strong>Aayushi Parmar</strong>, a digital marketer turned full-time lifestyle writer, Pinkandochre is your everyday guide to dressing better, glowing brighter, eating smarter, feeling stronger, and reading deeper. Every post is researched, tested, and written to help you make small, joyful upgrades to the way you live.
            </p>
            <p>
              If you're looking for a women's lifestyle blog that reads less like a billboard and more like a friend with great recommendations, you're in the right corner of the internet.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                SUBSCRIBE TO THE NEWSLETTER
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=75"
                alt="Aayushi Parmar"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-xs font-sans tracking-widest text-gold uppercase">Meet The Founder</span>
                <h2 className="heading-medium mt-4">Hi, I'm Aayushi</h2>
              </div>

              <p className="text-taupe leading-relaxed text-lg font-body">
                I'm a digital marketer with a big passion for all things lifestyle, and the writer behind every post on Pinkandochre.
              </p>

              <p className="text-taupe leading-relaxed text-lg font-body">
                Pinkandochre is my little corner of the internet, where I share my favorite things: outfit ideas, skincare routines, beauty rituals, easy and delicious recipes, wellness habits, the books I can't stop talking about, and small everyday tips for living your best life.
              </p>

              <p className="text-taupe leading-relaxed text-lg font-body">
                I truly believe life is a beautiful journey worth celebrating. My goal here is simple — to inspire you to embrace every moment, find your unique style, and take care of your well-being inside and out. Pinkandochre is built as a warm, friendly community where we can all discover the art of living well, together.
              </p>

              <p className="text-taupe leading-relaxed text-lg font-body">
                So pull up a chair, stay a while. I'm so glad you're here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container">
          <div className="mb-16 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Explore</span>
            <h2 className="heading-medium mt-4">What You'll Find on Pinkandochre</h2>
            <p className="subtitle mt-4">Six core lifestyle categories, with new posts published regularly</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {categories.map((cat, idx) => (
              <Link key={idx} href={`/category/${cat.slug}`}>
                <div className="card-elevated p-8 h-full hover:shadow-lg transition-all group cursor-pointer">
                  <h3 className="heading-xs mb-4 group-hover:text-gold transition-colors">{cat.title}</h3>
                  <p className="text-taupe font-body text-sm leading-relaxed mb-6">{cat.description}</p>
                  <span className="text-sm text-gold font-semibold group-hover:text-charcoal transition-colors">
                    Browse posts →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Pink and Ochre */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container max-w-3xl">
          <div className="mb-12 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-gold uppercase">The Name</span>
            <h2 className="heading-medium mt-4">Why "Pink and Ochre"?</h2>
          </div>

          <p className="text-taupe leading-relaxed text-lg font-body">
            The name is a love letter to two colors I can't live without — soft, romantic pink for the things that make life feel pretty, and warm, grounded ochre for the things that keep us steady. Together, they're the palette of a life that's both beautiful and real.
          </p>
        </div>
      </section>

      {/* Editorial Promise */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container max-w-3xl">
          <div className="mb-12 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Promise</span>
            <h2 className="heading-medium mt-4">Our Editorial Promise</h2>
          </div>

          <p className="text-taupe leading-relaxed text-lg font-body">
            Every recommendation on this site has been tested, used, or genuinely loved before it earns a spot in a post. No pay-to-play product placements. No recycled press releases. No AI-generated filler. Just honest, well-researched writing from a real person who wants you to walk away with something useful — whether that's a new go-to lipstick, a Sunday recipe, or a book that ruins all other books for a week.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container max-w-3xl">
          <div className="mb-16 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-gold uppercase">Questions</span>
            <h2 className="heading-medium mt-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="pb-8 border-b border-warm-stone last:border-b-0">
                <h3 className="heading-xs mb-4 text-charcoal">{faq.question}</h3>
                <p className="text-taupe leading-relaxed font-body">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stay in Touch */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container max-w-3xl">
          <div className="mb-12 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Connect</span>
            <h2 className="heading-medium mt-4">Let's Stay in Touch</h2>
          </div>

          <p className="text-taupe leading-relaxed text-lg font-body mb-8">
            If something here speaks to you — a recipe you tried, a book you devoured, a routine that worked — I'd genuinely love to hear about it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-ivory p-8 border border-warm-stone rounded-sm">
              <h3 className="font-semibold text-charcoal mb-3">Email</h3>
              <a href="mailto:hello@pinkandochre.com" className="text-gold hover:text-charcoal transition font-body">
                hello@pinkandochre.com
              </a>
            </div>
            <div className="bg-ivory p-8 border border-warm-stone rounded-sm">
              <h3 className="font-semibold text-charcoal mb-3">Get in Touch</h3>
              <Link href="/contact" className="text-gold hover:text-charcoal transition font-body">
                Contact Page →
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-charcoal mb-4">Follow Along</h4>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gold hover:text-charcoal transition font-body">Instagram</a>
              <a href="#" className="text-gold hover:text-charcoal transition font-body">Pinterest</a>
              <a href="#" className="text-gold hover:text-charcoal transition font-body">YouTube</a>
              <a href="#" className="text-gold hover:text-charcoal transition font-body">Facebook</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-charcoal text-cream">
        <div className="section-container max-w-2xl text-center">
          <h2 className="heading-medium mb-6">Ready to Join the Community?</h2>
          <p className="subtitle text-cream mb-10">
            Discover the art of living well, straight to your inbox.
          </p>
          <Link href="/contact" className="btn-primary">
            SUBSCRIBE NOW
          </Link>
        </div>
      </section>
    </>
  )
}
