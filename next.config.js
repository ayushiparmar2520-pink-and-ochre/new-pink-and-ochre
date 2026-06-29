/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    unoptimized: true,
  },
  // Long-lived immutable cache for static images (faster repeat visits +
  // resolves the "efficient cache policy" Lighthouse audit). The image
  // filenames are content-specific, so immutable is safe.
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        // Declare site language at the HTTP layer too (complements <html lang>
        // and the content-language <meta>). Single-language site, so 'en'
        // applies to every route.
        source: '/:path*',
        headers: [
          { key: 'Content-Language', value: 'en' },
        ],
      },
    ]
  },
  // NOTE: 301 redirects are defined in vercel.json (statusCode: 301).
  // Next.js redirects() only emits 307/308, so the redirects live in
  // vercel.json to satisfy the literal-301 requirement.
}

module.exports = nextConfig
