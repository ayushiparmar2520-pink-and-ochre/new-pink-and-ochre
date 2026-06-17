/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blogs/beauty/orange-peel-powder-benefits-for-skin-6-diy-for-healthy-glowing-skin',
        destination: '/blog/orange-peel-powder-diy-recipes',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
