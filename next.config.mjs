/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kapal-santai.sgp1.cdn.digitaloceanspaces.com',
      },
    ],
  },
}

export default nextConfig
