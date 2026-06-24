import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pinkandochre.com'

  return [
    // Main pages
    {
      url: baseUrl,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/start-here`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },

    // Blog archive
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Category pages
    {
      url: `${baseUrl}/category/beauty`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/fashion`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/wellness`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/food`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/books`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/lifestyle`,
      lastModified: new Date('2026-06-15'),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Blog posts
    {
      url: `${baseUrl}/blog/greek-yogurt-banana-bread`,
      lastModified: new Date('2026-06-24'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/5-diy-toner-recipes-for-all-skin`,
      lastModified: new Date('2026-06-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/low-cortisol-morning-routine`,
      lastModified: new Date('2026-06-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/how-to-get-glass-skin`,
      lastModified: new Date('2026-06-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/capsule-wardrobe-guide`,
      lastModified: new Date('2026-06-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/summer-2026-fashion-trends`,
      lastModified: new Date('2026-05-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/aesthetic-grazing-board-ideas`,
      lastModified: new Date('2026-05-24'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/it-ends-with-us-book-review`,
      lastModified: new Date('2026-05-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/books-like-devil-wears-prada`,
      lastModified: new Date('2026-05-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/mindful-living-modern-times`,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Additional live articles (not in the original list, added for complete indexing)
    {
      url: `${baseUrl}/blog/devil-wears-prada-book-review`,
      lastModified: new Date('2026-05-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/devil-wears-prada-book-vs-movie`,
      lastModified: new Date('2026-05-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/orange-peel-powder-diy-recipes`,
      lastModified: new Date('2026-05-04'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/throw-pillow-guide`,
      lastModified: new Date('2026-05-05'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
