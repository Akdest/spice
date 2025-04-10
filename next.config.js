/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/welcome',
        permanent: false, // set to true if this should always happen
      },
    ]
    
  },
}

module.exports = nextConfig
