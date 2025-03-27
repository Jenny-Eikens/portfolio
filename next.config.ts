/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,

  experimental: {
    turbo: {
      enabled: false,
    },
  },
}

module.exports = nextConfig
