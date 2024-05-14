/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['doic.vercel.app','images.prismic.io','jaipur.manipal.edu'],
  },
}
