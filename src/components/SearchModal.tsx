'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type Article = {
  title: string
  url: string
  category: string
  excerpt: string
  keywords: string[]
}

// Client-side article index (slugs corrected to the real live routes).
const ARTICLES: Article[] = [
  { title: 'Low Cortisol Morning Routine: 7 Habits to Start Your Day Without Stress', url: '/blog/low-cortisol-morning-routine', category: 'wellness', excerpt: 'What spikes your cortisol before 9am — and the 7 gentle habits that protect your energy all day long.', keywords: ['cortisol', 'morning routine', 'stress hormones', 'gentle morning', 'wired tired', 'wellness'] },
  { title: 'How to Get Glass Skin: The HER Method Skincare Ritual', url: '/blog/how-to-get-glass-skin', category: 'beauty', excerpt: '3 ingredients, the HER Method, and the honest 6-month timeline for glowing even-toned skin.', keywords: ['glass skin', 'skincare', 'HER method', 'retinol', 'niacinamide', 'indian skin', 'glow'] },
  { title: 'Capsule Wardrobe for Women 2026: Quiet Luxury Guide', url: '/blog/capsule-wardrobe-guide', category: 'fashion', excerpt: '30 essential pieces, outfit formulas, and quiet luxury updates for a wardrobe that actually works.', keywords: ['capsule wardrobe', 'quiet luxury', 'wardrobe essentials', 'fashion', 'outfit', '2026'] },
  { title: 'Summer 2026 Fashion Trends: Glamoratti, Teal & 10 Viral Styles', url: '/blog/summer-2026-fashion-trends', category: 'fashion', excerpt: 'The Glamoratti aesthetic, Transformative Teal, cow print, lace — the complete trend guide.', keywords: ['summer fashion', '2026 trends', 'glamoratti', 'transformative teal', 'lace', 'fashion trends'] },
  { title: 'Aesthetic Grazing Board Ideas for Any Occasion', url: '/blog/aesthetic-grazing-board-ideas', category: 'food', excerpt: 'The complete guide to a beautiful grazing board — ingredients, styling secrets, and tips.', keywords: ['grazing board', 'charcuterie', 'entertaining', 'food', 'aesthetic', 'party food', 'cheese board'] },
  { title: 'It Ends With Us — An Honest Book Review', url: '/blog/it-ends-with-us-book-review', category: 'books', excerpt: "An honest heartfelt review of Colleen Hoover's most important novel.", keywords: ['it ends with us', 'colleen hoover', 'book review', 'romance', 'booktok', 'fiction'] },
  { title: 'Books Like The Devil Wears Prada: 10 Addictive Reads', url: '/blog/books-like-devil-wears-prada', category: 'books', excerpt: '10 books with the same fashion glamour, female ambition, and addictive drama.', keywords: ['devil wears prada', 'books like', 'fashion books', 'chick lit', 'book recommendations'] },
  { title: 'The Art of Mindful Living in Modern Times', url: '/blog/mindful-living-modern-times', category: 'lifestyle', excerpt: '8 small practical habits for more presence, less distraction, and genuine intentional living.', keywords: ['mindful living', 'intentional living', 'slow living', 'mindfulness', 'presence', 'habits'] },
  { title: '5 Easy DIY Toner Recipes for Every Skin Type', url: '/blog/5-diy-toner-recipes-for-all-skin', category: 'beauty', excerpt: 'Green tea toner, viral rice water toner, rose water for sensitive skin and more.', keywords: ['diy toner', 'rice water toner', 'green tea toner', 'homemade toner', 'natural skincare'] },
  { title: 'Orange Peel Powder DIY Recipes for Glowing Skin', url: '/blog/orange-peel-powder-diy-recipes', category: 'beauty', excerpt: '6 easy DIY recipes using orange peel powder for healthy glowing skin at home.', keywords: ['orange peel powder', 'diy skincare', 'glowing skin', 'natural skincare', 'vitamin c'] },
  { title: 'The Complete Throw Pillow Guide', url: '/blog/throw-pillow-guide', category: 'lifestyle', excerpt: 'Everything you need to choose and style throw pillows for an intentional, beautiful home.', keywords: ['throw pillows', 'home decor', 'interior styling', 'living room', 'pillows', 'home'] },
  { title: 'The Devil Wears Prada Book Review: Why Everyone Is Obsessing in 2026', url: '/blog/devil-wears-prada-book-review', category: 'books', excerpt: 'Why the original Lauren Weisberger novel is having its biggest moment yet.', keywords: ['devil wears prada', 'book review', 'lauren weisberger', 'fashion books', 'sequel'] },
  { title: 'The Devil Wears Prada: Book vs Movie', url: '/blog/devil-wears-prada-book-vs-movie', category: 'books', excerpt: '7 reasons the original novel surpasses the film in humour, depth, and emotional honesty.', keywords: ['devil wears prada', 'book vs movie', 'lauren weisberger', 'film adaptation'] },
]

const CATEGORIES = ['all', 'beauty', 'fashion', 'wellness', 'food', 'books', 'lifestyle']
const POPULAR = [
  { label: 'glass skin', term: 'glass skin' },
  { label: 'capsule wardrobe', term: 'capsule wardrobe' },
  { label: 'cortisol', term: 'cortisol' },
  { label: 'DIY toner', term: 'toner' },
  { label: 'grazing board', term: 'grazing board' },
  { label: 'book reviews', term: 'book review' },
]

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input + lock body scroll when opening; Escape closes.
  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => inputRef.current?.focus(), 100)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      clearTimeout(t)
      document.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  // Reset query/filter each time it reopens.
  useEffect(() => {
    if (open) {
      setQuery('')
      setFilter('all')
    }
  }, [open])

  if (!open) return null

  const q = query.trim().toLowerCase()
  const results = q
    ? ARTICLES.filter((a) => {
        const matchesCategory = filter === 'all' || a.category === filter
        const matchesQuery =
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.keywords.some((k) => k.toLowerCase().includes(q))
        return matchesCategory && matchesQuery
      })
    : []

  return (
    <div
      className="search-modal"
      role="dialog"
      aria-label="Site search"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="search-modal-inner">
        <div className="search-header">
          <h2 className="search-title">Search Pink &amp; Ochre</h2>
          <button className="search-close" onClick={onClose} aria-label="Close search">✕</button>
        </div>

        <div className="search-input-wrapper">
          <svg className="search-icon-input" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C7060" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            className="search-input-field"
            placeholder="Search articles, recipes, book reviews..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
          />
          {query && (
            <button className="search-clear" onClick={() => setQuery('')} aria-label="Clear search">✕</button>
          )}
        </div>

        <div className="search-categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`search-cat${filter === cat ? ' active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-results">
          {!q ? (
            <div className="search-default">
              <p className="search-prompt">Start typing to search all Pink &amp; Ochre articles...</p>
              <div className="search-popular">
                <p className="search-popular-label">Popular Topics</p>
                <div className="search-tags">
                  {POPULAR.map((p) => (
                    <span key={p.term} className="search-tag" onClick={() => setQuery(p.term)}>
                      {p.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="search-no-results">
              <p className="search-none-text">
                No articles found for &quot;<strong>{query}</strong>&quot;
              </p>
              <p className="search-none-sub">Try searching for beauty, fashion, wellness, food, books, or lifestyle</p>
            </div>
          ) : (
            <>
              <p className="search-count">
                {results.length} article{results.length !== 1 ? 's' : ''} found
              </p>
              <div className="search-results-list">
                {results.map((a) => (
                  <Link key={a.url} href={a.url} className="search-result-item" onClick={onClose}>
                    <span className="search-result-cat">{a.category.toUpperCase()}</span>
                    <h3 className="search-result-title">{a.title}</h3>
                    <p className="search-result-excerpt">{a.excerpt}</p>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
