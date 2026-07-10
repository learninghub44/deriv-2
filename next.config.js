/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@deriv/core'],
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
