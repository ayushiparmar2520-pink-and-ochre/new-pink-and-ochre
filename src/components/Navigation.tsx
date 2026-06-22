'use client'

import Link from 'next/link'
import { useState } from 'react'
import SearchModal from '@/components/SearchModal'

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <nav className="bg-cream border-b border-warm-stone sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-24 md:h-20">
          <Link href="/" className="logo">
            Pink <span className="logo-symbol">&amp;</span> Ochre
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              HOME
            </Link>
            <Link href="/blog" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              STORIES
            </Link>
            <Link href="/start-here" className="font-body text-sm tracking-wide text-[#D4607A] hover:text-[#bf4f69] transition-colors">
              START HERE
            </Link>
            <Link href="/about" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              CONTACT
            </Link>
            <button
              onClick={() => setSearchOpen(true)}
              className="search-toggle"
              aria-label="Search Pink & Ochre"
            >
              <SearchIcon />
            </button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="search-toggle p-2"
              aria-label="Search Pink & Ochre"
            >
              <SearchIcon />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-ivory rounded-sm transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-warm-stone pt-4">
            <button
              onClick={() => {
                setIsOpen(false)
                setSearchOpen(true)
              }}
              className="mobile-search-trigger"
            >
              <SearchIcon />
              <span>Search articles...</span>
            </button>
            <Link href="/" className="block px-0 py-2 font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              HOME
            </Link>
            <Link href="/blog" className="block px-0 py-2 font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              STORIES
            </Link>
            <Link href="/start-here" className="block px-0 py-2 font-body text-sm tracking-wide text-[#D4607A] hover:text-[#bf4f69] transition-colors">
              START HERE
            </Link>
            <Link href="/about" className="block px-0 py-2 font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="block px-0 py-2 font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              CONTACT
            </Link>
          </div>
        )}
      </div>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  )
}
