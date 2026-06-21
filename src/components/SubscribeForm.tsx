'use client'

import { useState } from 'react'

// FIX 4 — functional newsletter form (shows a success message on submit).
// Ready for ConvertKit: replace the <form> below with the embed script.
export default function SubscribeForm({
  formClassName = '',
  inputClassName = '',
  buttonClassName = '',
  buttonLabel = 'Subscribe',
  successClassName = '',
  successText = "🌸 You're in! Check your inbox soon.",
}: {
  formClassName?: string
  inputClassName?: string
  buttonClassName?: string
  buttonLabel?: string
  successClassName?: string
  successText?: string
}) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return <p className={successClassName}>{successText}</p>
  }

  return (
    <form
      className={formClassName}
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
    >
      <input
        type="email"
        placeholder="Your email address"
        aria-label="Email address"
        required
        className={inputClassName}
      />
      <button type="submit" className={buttonClassName}>
        {buttonLabel}
      </button>
    </form>
  )
}
