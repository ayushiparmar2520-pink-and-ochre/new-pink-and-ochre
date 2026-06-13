import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'

export const metadata: Metadata = {
  title: 'Stories | Pink & Ochre — Fashion, Beauty, Wellness & Lifestyle Guides',
  description: 'Browse all stories on Pink & Ochre — fashion outfit guides, skincare rituals, wellness routines, easy recipes, and curated book lists for women who love intentional living.',
  alternates: { canonical: 'https://pinkandochre.com/blog' },
  openGraph: {
    title: 'Stories | Pink & Ochre — Fashion, Beauty, Wellness & Lifestyle Guides',
    description: 'Browse all stories on Pink & Ochre — fashion outfit guides, skincare rituals, wellness routines, easy recipes, and curated book lists for women who love intentional living.',
    url: 'https://pinkandochre.com/blog',
    siteName: 'Pink & Ochre',
    type: 'website',
  },
}

const allPosts = [
  {
    id: 18,
    title: 'Low Cortisol Morning Routine: How to Start Your Day Without Spiking Your Stress Hormones',
    excerpt: 'What spikes your cortisol before 9am — and the 7 gentle habits that protect your energy all day.',
    date: '2026-06-09',
    category: 'Wellness',
    slug: 'low-cortisol-morning-routine',
    image: '/images/blog/low-cortisol-morning-routine.webp',
  },
  {
    id: 17,
    title: 'Aesthetic Grazing Board Ideas for Any Occasion (That Look Like a Pinterest Dream)',
    excerpt: 'The complete guide to building a beautiful grazing board — ingredients, styling tips, and the secrets that make it look like a Pinterest dream.',
    date: '2026-05-24',
    category: 'Food',
    slug: 'aesthetic-grazing-board-ideas',
    image: '/images/blog/aesthetic-grazing-board-brie-strawberries.webp',
  },
  {
    id: 1,
    title: 'The Art of Mindful Living in Modern Times',
    excerpt: 'Discover how to cultivate presence and intention in your everyday life.',
    date: '2024-05-10',
    category: 'Wellness',
    slug: 'mindful-living-modern-times',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=750&q=75',
  },
  {
    id: 2,
    title: 'Capsule Wardrobe for Women 2026: The Complete Beginner\'s Guide to Dressing With Less (and Looking More)',
    excerpt: '30 essential pieces, outfit formulas, and a complete checklist to build a wardrobe that actually works.',
    date: '2026-06-01',
    category: 'Fashion',
    slug: 'capsule-wardrobe-guide',
    image: '/images/blog/capsule-wardrobe-for-women-2026.webp',
  },
  {
    id: 5,
    title: 'How to Get Glass Skin: The Skincare Ritual That Actually Works (For Every Skin Tone)',
    excerpt: 'Three ingredients, one method, and the honest 6-month timeline that creates glass skin for every skin tone.',
    date: '2026-06-05',
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
    excerpt: 'A heartfelt review of the book that broke a million hearts and changed how we talk about love and the courage to walk away.',
    date: '2026-05-20',
    category: 'Books',
    slug: 'it-ends-with-us-book-review',
    image: '/images/blog/it-ends-with-us-book-review.webp',
  },
  {
    id: 13,
    title: 'The Devil Wears Prada Book Review: Why Everyone Is Obsessing Over It Again in 2026',
    excerpt: 'With the sequel breaking box office records, explore why the original novel is having its biggest moment yet — and why you need to read it.',
    date: '2026-05-05',
    category: 'Books',
    slug: 'devil-wears-prada-book-review',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=750&q=75',
  },
  {
    id: 14,
    title: '7 Reasons *The Devil Wears Prada* Book Is Better Than the Movie — And Why Everyone Is Reading It Again in 2026',
    excerpt: 'A detailed comparison of why the original novel surpasses the film adaptation in humor, depth, and emotional honesty.',
    date: '2026-05-05',
    category: 'Books',
    slug: 'devil-wears-prada-book-vs-movie',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=750&q=75',
  },
  {
    id: 15,
    title: 'Books Like The Devil Wears Prada: 10 Reads You\'ll Devour Next',
    excerpt: '10 addictive reads with the same fashion, ambition, and sharp wit — your next great book is on this list.',
    date: '2026-05-15',
    category: 'Books',
    slug: 'books-like-devil-wears-prada',
    image: '/images/blog/books-like-devil-wears-prada-hero.webp',
  },
  {
    id: 16,
    title: 'Summer 2026 Fashion Trends: 10 Viral Styles That Are Taking Over Right Now',
    excerpt: 'From the Glamoratti aesthetic to Transformative Teal — the complete guide to what everyone will be wearing this summer.',
    date: '2026-05-28',
    category: 'Fashion',
    slug: 'summer-2026-fashion-trends',
    image: '/images/blog/summer-2026-fashion-trends.webp',
  },
]

export default function BlogPage() {
  return (
    <>
      <section className="py-20 md:py-28 bg-ivory">
        <div className="section-container">
          <h1 className="heading-large mb-6">All Stories</h1>
          <p className="subtitle max-w-2xl">
            A curated collection of stories on fashion, wellness, beauty, lifestyle, books, and food.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
