'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return <p className="sh-news-success">🌸 You&apos;re in! Check your inbox soon.</p>
  }

  return (
    <>
      <form
        className="sh-news-form"
        onSubmit={(e) => {
          e.preventDefault()
          setSubmitted(true)
        }}
      >
        <input type="email" placeholder="your@email.com" aria-label="Email address" required />
        <button type="submit">Subscribe →</button>
      </form>
      <p className="sh-news-note">Join 12,000+ readers. Unsubscribe any time.</p>
    </>
  )
}
