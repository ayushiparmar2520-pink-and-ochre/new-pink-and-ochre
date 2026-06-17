/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // NOTE: 301 redirects are defined in vercel.json (statusCode: 301).
  // Next.js redirects() only emits 307/308, so the redirects live in
  // vercel.json to satisfy the literal-301 requirement.
}

module.exports = nextConfig
