import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://pinkandochre.com'),
  title: {
    default: 'Pink & Ochre | Lifestyle Blog',
    template: '%s',
  },
  description: 'Pink & Ochre is an independent lifestyle blog by Aayushi Parmar covering fashion, beauty, wellness, food, and books. Honest guides, tested recommendations, and quiet rituals for intentional living.',
  verification: {
    other: {
      'p:domain_verify': '8165a9961f0540ef26dc0336e387af7c',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Lora:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-charcoal font-body">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
