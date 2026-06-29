'use client'

import { useState } from 'react'

// Newsletter form — the one interactive island on the (now server-rendered)
// article page. Ready for ConvertKit: replace the <form> with the embed.
export default function EmailCapture() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <section className="email-capture">
      <div className="email-capture-inner">
        <p className="email-capture-label">Join the Community</p>
        <h2 className="email-capture-heading">Good Things, Straight to Your Inbox</h2>
        <p className="email-capture-desc">
          Weekly beauty tips, outfit ideas, wellness habits, and book recommendations — plus content that never makes it to the blog. No spam, ever.
        </p>
        {submitted ? (
          <p className="email-note" style={{ display: 'block', color: '#E6B884', fontSize: '0.95rem' }}>
            🌸 You&apos;re in! Check your inbox soon.
          </p>
        ) : (
          <form
            className="email-capture-form"
            onSubmit={(e) => {
              e.preventDefault()
              setSubmitted(true)
            }}
          >
            <input type="email" placeholder="your@email.com" required className="email-input" aria-label="Email address" />
            <button type="submit" className="email-btn">Subscribe →</button>
          </form>
        )}
        <p className="email-note">Join 12,000+ readers. Unsubscribe any time.</p>
      </div>
    </section>
  )
}
