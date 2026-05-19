'use client'

import BlogCard from '@/components/BlogCard'

const allPosts = [
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
    title: 'Timeless Fashion: Building a Capsule Wardrobe',
    excerpt: 'Learn how to create an elegant, versatile wardrobe that transcends trends.',
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
    category: 'Book',
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
  {
    id: 7,
    title: 'The Beauty of Slow Fashion',
    excerpt: 'Why investing in quality pieces matters more than quantity.',
    date: '2024-04-22',
    category: 'Fashion',
    slug: 'slow-fashion-movement',
    image: 'https://images.unsplash.com/photo-1595777712802-fc80f5a5c5d8?w=750&q=75',
  },
  {
    id: 8,
    title: 'Nourishing Bowls for Every Season',
    excerpt: 'Creative, nutritious bowls designed for wellness and taste.',
    date: '2024-04-20',
    category: 'Food',
    slug: 'nourishing-bowls-season',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=750&q=75',
  },
  {
    id: 9,
    title: 'Creating Meaningful Moments in Daily Life',
    excerpt: 'How small intentional practices can transform your lifestyle.',
    date: '2024-04-18',
    category: 'Lifestyle',
    slug: 'meaningful-moments-daily',
    image: 'https://images.unsplash.com/photo-1495808312672-d0f13d4f70b1?w=750&q=75',
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
    title: '10 Books to Read If You Loved *The Devil Wears Prada* (2026 Updated List)',
    excerpt: 'A curated list of 10 must-read books that capture the wit, ambition, and glamorous workplace drama of The Devil Wears Prada.',
    date: '2026-05-05',
    category: 'Book',
    slug: 'books-like-devil-wears-prada',
    image: 'https://images.unsplash.com/photo-1507842217343-583f20270319?w=750&q=75',
  },
  {
    id: 16,
    title: 'Summer 2026 Fashion Trends: 10 Viral Styles That Are Taking Over Right Now',
    excerpt: 'Discover the 10 hottest fashion trends of summer 2026, from the Glamoratti aesthetic to cow print, with styling tips and shopping recommendations.',
    date: '2026-05-03',
    category: 'Fashion',
    slug: 'summer-2026-fashion-trends',
    image: '/images/blog/summer-fashion-trends.jpeg',
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
