import type { Metadata } from 'next'

// Contact page is a Client Component, so its metadata (incl. hreflang) lives here.
export const metadata: Metadata = {
  title: 'Contact | Pink & Ochre',
  description: 'Get in touch with Aayushi Parmar and Pink & Ochre — questions, collaborations, or just to say hello.',
  alternates: {
    canonical: 'https://pinkandochre.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
