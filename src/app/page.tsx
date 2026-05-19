'use client'

import Link from 'next/link'
import BlogCard from '@/components/BlogCard'

// Sample featured blogs - will be replaced with real data
const featuredPosts = [
  {
    id: 1,
    title: 'The Art of Mindful Living in Modern Times',
    excerpt: 'Discover how to cultivate presence and intention in your everyday life, even in our fast-paced world.',
    date: '2024-05-10',
    category: 'Wellness',
    slug: 'mindful-living-modern-times',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1080&q=75',
    featured: true,
  },
  {
    id: 2,
    title: 'Timeless Fashion: Building a Capsule Wardrobe',
    excerpt: 'Learn how to create a elegant, versatile wardrobe that transcends trends.',
    date: '2024-05-08',
    category: 'Fashion',
    slug: 'capsule-wardrobe-guide',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=750&q=75',
  },
  {
    id: 3,
    title: 'Seasonal Recipes Worth Savoring',
    excerpt: 'Simple yet elegant recipes that celebrate the best of each season.',
    date: '2024-05-05',
    category: 'Food',
    slug: 'seasonal-recipes',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=750&q=75',
  },
  {
    id: 4,
    title: 'Literature That Changed My Perspective',
    excerpt: 'Thoughtful book reviews of titles that have shaped my worldview.',
    date: '2024-05-01',
    category: 'Book Review',
    slug: 'books-changed-perspective',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=750&q=75',
  },
  {
    id: 5,
    title: 'Skincare Rituals for Radiant Skin',
    excerpt: 'Simple rituals and products that have transformed my skin.',
    date: '2024-04-28',
    category: 'Beauty',
    slug: 'skincare-rituals',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=750&q=75',
  },
  {
    id: 6,
    title: 'Wellness Practices for Better Sleep',
    excerpt: 'Expert-backed habits to help you sleep better and wake refreshed.',
    date: '2024-04-25',
    category: 'Wellness',
    slug: 'better-sleep-habits',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c006ad4c?w=750&q=75',
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
