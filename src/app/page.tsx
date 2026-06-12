import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Pink & Ochre | Lifestyle Blog — Fashion, Beauty, Wellness, Food & Books',
  description: 'Pink & Ochre is an independent lifestyle blog by Aayushi Parmar covering fashion, beauty, wellness, food, and books. Honest guides, tested recommendations, and quiet rituals for intentional living.',
  alternates: { canonical: 'https://pinkandochre.com/' },
  openGraph: {
    title: 'Pink & Ochre | Lifestyle Blog — Fashion, Beauty, Wellness, Food & Books',
    description: 'Pink & Ochre is an independent lifestyle blog by Aayushi Parmar covering fashion, beauty, wellness, food, and books. Honest guides, tested recommendations, and quiet rituals for intentional living.',
    url: 'https://pinkandochre.com/',
    siteName: 'Pink & Ochre',
    type: 'website',
  },
}

const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://pinkandochre.com/#website',
      url: 'https://pinkandochre.com/',
      name: 'Pink & Ochre',
      description: 'An independent lifestyle blog covering fashion, beauty, wellness, food, and books — written by Aayushi Parmar for people who believe living well is in the details.',
      publisher: { '@id': 'https://pinkandochre.com/#person' },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://pinkandochre.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://pinkandochre.com/#person',
      name: 'Aayushi Parmar',
      url: 'https://pinkandochre.com/about',
      image: {
        '@type': 'ImageObject',
        url: 'https://pinkandochre.com/images/contact-pink-ochre.webp',
        width: 1200,
        height: 628,
      },
      description: 'Aayushi Parmar is a digital marketer and the founder and sole author of Pink & Ochre, an independent lifestyle blog covering fashion, beauty, wellness, food, and books.',
      jobTitle: 'Lifestyle Blogger & Digital Marketer',
      worksFor: {
        '@type': 'Organization',
        name: 'Pink & Ochre',
        url: 'https://pinkandochre.com/',
      },
      sameAs: [
        'https://pinterest.com/pinkandochre',
        'https://medium.com/@ayushi.parmar.2520',
      ],
    },
    {
      '@type': 'Blog',
      '@id': 'https://pinkandochre.com/#blog',
      name: 'Pink & Ochre',
      url: 'https://pinkandochre.com/',
      description: 'An independent lifestyle blog covering fashion, beauty, wellness, food, and books for people who believe living well is in the details.',
      author: { '@id': 'https://pinkandochre.com/#person' },
      publisher: { '@id': 'https://pinkandochre.com/#person' },
      inLanguage: 'en-US',
      about: [
        { '@type': 'Thing', name: 'Fashion' },
        { '@type': 'Thing', name: 'Beauty' },
        { '@type': 'Thing', name: 'Wellness' },
        { '@type': 'Thing', name: 'Food' },
        { '@type': 'Thing', name: 'Books' },
        { '@type': 'Thing', name: 'Intentional Living' },
        { '@type': 'Thing', name: 'Lifestyle' },
      ],
    },
  ],
}

// Sample featured blogs - will be replaced with real data
const featuredPosts = [
  {
    id: 17,
    title: 'Aesthetic Grazing Board Ideas for Any Occasion (That Look Like a Pinterest Dream)',
    excerpt: 'Stunning grazing board ideas for parties, brunch, holidays and more — easy tips, full ingredient lists, and styling secrets for a Pinterest-worthy spread.',
    date: '2025-06-01',
    category: 'Food',
    slug: 'aesthetic-grazing-board-ideas',
    image: '/images/blog/aesthetic-grazing-board-brie-strawberries.webp',
    featured: true,
  },
  {
    id: 18,
    title: 'Low Cortisol Morning Routine: How to Start Your Day Without Spiking Your Stress Hormones',
    excerpt: 'What spikes your stress hormones before 9am — and the 7 gentle habits that protect your energy all day, plus how long it takes to feel calmer.',
    date: '2026-06-09',
    category: 'Wellness',
    slug: 'low-cortisol-morning-routine',
    image: '/images/blog/low-cortisol-morning-routine.webp',
  },
  {
    id: 5,
    title: 'How to Get Glass Skin: The Skincare Ritual That Actually Works (For Every Skin Tone)',
    excerpt: 'Want glass skin? This complete ritual guide covers the exact ingredients, the HER Method, and a routine that works for every skin tone — in 6–8 months.',
    date: '2026-06-01',
    category: 'Beauty',
    slug: 'how-to-get-glass-skin',
    image: '/images/blog/how-to-get-glass-skin-skincare-ritual.webp',
  },
  {
    id: 16,
    title: 'Summer 2026 Fashion Trends: 10 Viral Styles That Are Taking Over Right Now',
    excerpt: 'Discover the 10 hottest fashion trends of summer 2026, from the Glamoratti aesthetic to cow print, with styling tips and shopping recommendations.',
    date: '2026-05-03',
    category: 'Fashion',
    slug: 'summer-2026-fashion-trends',
    image: '/images/blog/summer-2026-fashion-trends.webp',
  },
  {
    id: 2,
    title: 'Capsule Wardrobe for Women 2026: The Complete Beginner\'s Guide to Dressing With Less (and Looking More)',
    excerpt: 'Build your dream capsule wardrobe in 2026 — 30 essential pieces, outfit formulas, quiet luxury tips, and a seasonal checklist for beginners.',
    date: '2026-06-01',
    category: 'Fashion',
    slug: 'capsule-wardrobe-guide',
    image: '/images/blog/capsule-wardrobe-for-women-2026.webp',
  },
  {
    id: 15,
    title: 'Books Like The Devil Wears Prada: 10 Reads You\'ll Devour Next',
    excerpt: 'Just finished The Devil Wears Prada? Here are 10 addictive books with the same fashion, ambition, and drama energy — your next great read is on this list.',
    date: '2026-05-01',
    category: 'Book',
    slug: 'books-like-devil-wears-prada',
    image: '/images/blog/books-like-devil-wears-prada-hero.webp',
  },
  {
    id: 10,
    title: 'Orange Peel Powder Benefits for Skin: 6 DIY Recipes for Healthy, Glowing Skin',
    excerpt: 'Your kitchen might already have the best-kept skincare secret — and it\'s been sitting in your trash bin this whole time.',
    date: '2026-05-04',
    category: 'Beauty',
    slug: 'orange-peel-powder-diy-recipes',
    image: '/images/blog/orange-peel-banner.jpg',
  },
  {
    id: 11,
    title: 'The Only Throw Pillow Guide You\'ll Ever Need (Designer Secrets Inside)',
    excerpt: 'Master the art of throw pillow styling with the designer\'s size formula, pattern mixing secrets, and seasonal swap strategies.',
    date: '2026-05-05',
    category: 'Lifestyle',
    slug: 'throw-pillow-guide',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=750&q=75',
  },
  {
    id: 12,
    title: 'It Ends With Us Book Review: Colleen Hoover\'s Most Powerful Story Yet',
    excerpt: 'An honest, deep dive into why this book matters — exploring its complex characters, powerful themes, and the conversations it sparks.',
    date: '2026-05-05',
    category: 'Book',
    slug: 'it-ends-with-us-book-review',
    image: '/images/blog/it-ends-with-us-book-review.webp',
  },
]

const categories = [
  'Lifestyle',
  'Fashion',
  'Wellness',
  'Book',
  'Beauty',
  'Food',
]

export default function Home() {
  const featured = featuredPosts[0]
  const recent = featuredPosts.slice(1, 7)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center bg-cream">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-taupe rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold rounded-full blur-3xl"></div>
        </div>

        <div className="section-container relative z-10 py-16 md:py-24">
          <div className="max-w-3xl">
            <span className="text-sm font-sans tracking-widest text-gold uppercase">Welcome</span>
            <h1 className="heading-large mt-4 mb-6">
              Stories for Living Well — Fashion, Wellness, Beauty, Food, Books & Beyond
            </h1>
            <p className="subtitle mb-8 max-w-2xl">
              A modern lifestyle journal exploring fashion, wellness, beauty, food, and books through the lens of intentional living. Honest reviews, considered guides, and quiet rituals for slow mornings, mindful choices, and the everyday art of living well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/blog" className="btn-primary">
                EXPLORE STORIES
              </Link>
              <Link href="/about" className="btn-secondary">
                ABOUT ME
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-20 md:py-28 bg-cream">
          <div className="section-container">
            <div className="mb-12 pb-8 border-b border-warm-stone">
              <span className="text-xs font-sans tracking-widest text-taupe uppercase">Featured</span>
              <h2 className="heading-medium mt-4">Latest Story</h2>
            </div>
            <div className="max-w-5xl mx-auto">
              <BlogCard {...featured} />
            </div>
          </div>
        </section>
      )}

      {/* Categories Showcase */}
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <div className="mb-16 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Browse</span>
            <h2 className="heading-medium mt-4">Categories</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-cream hover:bg-charcoal transition-all duration-500 p-8 md:p-12 text-center cursor-pointer border border-warm-stone hover:border-charcoal">
                  <h3 className="font-display text-xl md:text-2xl text-charcoal group-hover:text-cream transition-colors font-semibold tracking-tight">
                    {cat}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container">
          <div className="mb-16 pb-8 border-b border-warm-stone">
            <span className="text-xs font-sans tracking-widest text-taupe uppercase">Recent</span>
            <h2 className="heading-medium mt-4">More Stories</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {recent.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/blog" className="btn-primary">
              VIEW ALL STORIES
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-charcoal text-cream">
        <div className="section-container max-w-2xl text-center">
          <h2 className="heading-medium mb-4">Stay Connected</h2>
          <p className="subtitle text-cream mb-10">
            Receive the latest stories directly in your inbox, thoughtfully crafted and personally shared.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-ivory text-charcoal placeholder-taupe focus:outline-none border border-warm-stone focus:border-gold transition-colors"
              required
            />
            <button
              type="submit"
              className="px-10 py-4 bg-gold text-charcoal font-sans font-semibold tracking-wide uppercase hover:bg-cream transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
