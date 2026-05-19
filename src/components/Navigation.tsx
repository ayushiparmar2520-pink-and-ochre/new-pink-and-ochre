'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-cream border-b border-warm-stone sticky top-0 z-50">
      <div className="section-container">
        <div className="flex items-center justify-between h-24 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="font-display text-2xl md:text-3xl text-charcoal font-bold tracking-tight">
              Pinkandochre
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-12">
            <Link href="/" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              HOME
            </Link>
            <Link href="/blog" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              STORIES
            </Link>
            <Link href="/about" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              CONTACT
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-ivory rounded-sm transition-colors"
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

        {isOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-warm-stone pt-4">
            <Link href="/" className="block px-0 py-2 font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              HOME
            </Link>
            <Link href="/blog" className="block px-0 py-2 font-body text-sm tracking-wide text-charcoal hover:text-gold transition-colors">
              STORIES
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
    </nav>
  )
}
