'use client'

import { useParams } from 'next/navigation'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

const allPosts: Record<string, any[]> = {
  lifestyle: [
    {
      id: 11,
      title: 'The Only Throw Pillow Guide You\'ll Ever Need (Designer Secrets Inside)',
      excerpt: 'Master the art of throw pillow styling with the designer\'s size formula, pattern mixing secrets, and seasonal swap strategies.',
      date: '2026-05-05',
      category: 'Lifestyle',
      slug: 'throw-pillow-guide',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=750&q=75',
    },
  ],
  fashion: [
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
      id: 16,
      title: 'Summer 2026 Fashion Trends: 10 Viral Styles That Are Taking Over Right Now',
      excerpt: 'Discover the 10 hottest fashion trends of summer 2026, from the Glamoratti aesthetic to cow print, with styling tips and shopping recommendations.',
      date: '2026-05-03',
      category: 'Fashion',
      slug: 'summer-2026-fashion-trends',
      image: '/images/blog/summer-2026-fashion-trends.webp',
    },
  ],
  wellness: [
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
      id: 4,
      title: 'The Art of Mindful Living in Modern Times',
      excerpt: 'Discover how to cultivate presence and intention in your everyday life.',
      date: '2024-05-10',
      category: 'Wellness',
      slug: 'mindful-living-modern-times',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=750&q=75',
    },
  ],
  'book': [
    {
      id: 12,
      title: 'It Ends With Us Book Review: Colleen Hoover\'s Most Powerful Story Yet',
      excerpt: 'An honest, deep dive into why this book matters — exploring its complex characters, powerful themes, and the conversations it sparks.',
      date: '2026-05-05',
      category: 'Book',
      slug: 'it-ends-with-us-book-review',
      image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=750&q=75',
    },
    {
      id: 13,
      title: 'The Devil Wears Prada Book Review: Why Everyone Is Obsessing Over It Again in 2026',
      excerpt: 'With the sequel breaking box office records, explore why the original novel is having its biggest moment yet — and why you need to read it.',
      date: '2026-05-05',
      category: 'Book',
      slug: 'devil-wears-prada-book-review',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=750&q=75',
    },
    {
      id: 14,
      title: '7 Reasons *The Devil Wears Prada* Book Is Better Than the Movie — And Why Everyone Is Reading It Again in 2026',
      excerpt: 'A detailed comparison of why the original novel surpasses the film adaptation in humor, depth, and emotional honesty.',
      date: '2026-05-05',
      category: 'Book',
      slug: 'devil-wears-prada-book-vs-movie',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=750&q=75',
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
  ],
  beauty: [
    {
      id: 7,
      title: 'How to Get Glass Skin: The Skincare Ritual That Actually Works (For Every Skin Tone)',
      excerpt: 'Want glass skin? This complete ritual guide covers the exact ingredients, the HER Method, and a routine that works for every skin tone — in 6–8 months.',
      date: '2026-06-01',
      category: 'Beauty',
      slug: 'how-to-get-glass-skin',
      image: '/images/blog/how-to-get-glass-skin-skincare-ritual.webp',
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
  ],
  food: [
    {
      id: 17,
      title: 'Aesthetic Grazing Board Ideas for Any Occasion (That Look Like a Pinterest Dream)',
      excerpt: 'Stunning grazing board ideas for parties, brunch, holidays and more — easy tips, full ingredient lists, and styling secrets for a Pinterest-worthy spread.',
      date: '2025-06-01',
      category: 'Food',
      slug: 'aesthetic-grazing-board-ideas',
      image: '/images/blog/aesthetic-grazing-board-brie-strawberries.webp',
    },
  ],
}

const categoryLabels: Record<string, string> = {
  lifestyle: 'Lifestyle',
  fashion: 'Fashion',
  wellness: 'Wellness',
  'book': 'Book',
  beauty: 'Beauty',
  food: 'Food',
}

export default function CategoryPage() {
  const params = useParams()
  const slug = params.slug as string
  const categoryName = categoryLabels[slug] || slug
  const posts = allPosts[slug] || []

  return (
    <>
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <Link href="/blog" className="text-sm font-sans tracking-widest text-taupe uppercase hover:text-gold transition mb-6 inline-block">
            ← BACK TO STORIES
          </Link>
          <h1 className="heading-large mb-4">{categoryName}</h1>
          <p className="subtitle">
            Stories and inspiration on {categoryName.toLowerCase()}
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {posts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-taupe font-body mb-6">
                More stories coming soon in the {categoryName} category.
              </p>
              <Link href="/blog" className="btn-primary">
                EXPLORE ALL STORIES
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
