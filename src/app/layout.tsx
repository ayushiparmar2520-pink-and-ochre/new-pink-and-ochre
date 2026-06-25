import type { Metadata } from 'next'
import { Playfair_Display, Lora, Inter, Jost } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/app/components/GoogleAnalytics'

// Self-hosted fonts (no render-blocking Google Fonts request). Weights match
// what was loaded before, so headings/body render identically — Jost is now
// loaded too (it was referenced everywhere but never loaded before).
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700', '800'], display: 'swap', variable: '--font-playfair' })
const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-lora' })
const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-inter' })
const jost = Jost({ subsets: ['latin'], weight: ['300', '400', '500', '600'], display: 'swap', variable: '--font-jost' })

export const metadata: Metadata = {
  metadataBase: new URL('https://pinkandochre.com'),
  title: {
    default: 'Pink & Ochre | Lifestyle Blog',
    template: '%s',
  },
  description: 'Pink & Ochre is an independent lifestyle blog by Aayushi Parmar covering fashion, beauty, wellness, food, and books. Honest guides, tested recommendations, and quiet rituals for intentional living.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
    ],
  },
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
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${inter.variable} ${jost.variable}`}>
      <head>
        {/* Analytics connection warmup (fonts are now self-hosted via next/font). */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className="bg-cream text-charcoal font-body">
        <GoogleAnalytics />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
