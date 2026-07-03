import type { Metadata } from 'next'
import Script from 'next/script'
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

// Sitewide entity graph — defined once here so the #organization / #website /
// #person / #blog @id nodes resolve on EVERY page (fixes the dangling isPartOf
// references in the article, about, and start-here schemas).
const siteSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://pinkandochre.com/#organization',
      name: 'Pink & Ochre',
      url: 'https://pinkandochre.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://pinkandochre.com/android-chrome-512x512.png',
        width: 512,
        height: 512,
      },
      founder: { '@id': 'https://pinkandochre.com/#person' },
      sameAs: [
        'https://pinterest.com/pinkandochre',
        'https://www.instagram.com/pinkandochre',
        'https://www.youtube.com/@Pinkandochre-bm1hp',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://pinkandochre.com/#website',
      url: 'https://pinkandochre.com/',
      name: 'Pink & Ochre',
      description: 'An independent lifestyle blog covering fashion, beauty, wellness, food, and books — written by Aayushi Parmar for people who believe living well is in the details.',
      publisher: { '@id': 'https://pinkandochre.com/#organization' },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://pinkandochre.com/?s={search_term_string}',
        },
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Person',
      '@id': 'https://pinkandochre.com/#person',
      name: 'Aayushi Parmar',
      url: 'https://pinkandochre.com/about',
      image: {
        '@type': 'ImageObject',
        url: 'https://pinkandochre.com/images/about/aayushi-parmar-pink-and-ochre.webp',
        width: 1122,
        height: 1402,
      },
      description: 'Aayushi Parmar is a digital marketer and the founder and sole author of Pink & Ochre, an independent lifestyle blog covering fashion, beauty, wellness, food, and books.',
      jobTitle: 'Lifestyle Blogger & Digital Marketer',
      worksFor: { '@id': 'https://pinkandochre.com/#organization' },
      sameAs: [
        'https://pinterest.com/pinkandochre',
        'https://www.instagram.com/pinkandochre',
        'https://medium.com/@ayushi.parmar.2520',
      ],
    },
    {
      '@type': 'Blog',
      '@id': 'https://pinkandochre.com/#blog',
      name: 'Pink & Ochre',
      url: 'https://pinkandochre.com/blog',
      description: 'An independent lifestyle blog covering fashion, beauty, wellness, food, and books for people who believe living well is in the details.',
      publisher: { '@id': 'https://pinkandochre.com/#organization' },
      author: { '@id': 'https://pinkandochre.com/#person' },
      inLanguage: 'en-US',
      about: [
        { '@type': 'Thing', name: 'Fashion' },
        { '@type': 'Thing', name: 'Beauty' },
        { '@type': 'Thing', name: 'Wellness' },
        { '@type': 'Thing', name: 'Food' },
        { '@type': 'Thing', name: 'Books' },
        { '@type': 'Thing', name: 'Intentional Living' },
        { '@type': 'Thing', name: 'Lifestyle' },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${inter.variable} ${jost.variable}`}>
      <head>
        <meta httpEquiv="content-language" content="en" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        {/* Analytics connection warmup (fonts are now self-hosted via next/font). */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* Google AdSense — DNS pre-resolve only. No preconnect/preload so its
            script never competes with the critical render path on slow links. */}
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
      </head>
      <body className="bg-cream text-charcoal font-body">
        <GoogleAnalytics />
        {/* Google AdSense — loads sitewide. lazyOnload defers it to browser
            idle after the page paints, so it never steals bandwidth from
            FCP/LCP (afterInteractive was preloading it too early on slow 4G). */}
        <Script
          id="google-adsense"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6303573384755326"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
