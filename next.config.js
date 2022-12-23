/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'emojipedia-us.s3.dualstack.us-west-1.amazonaws.com']
  },
  "presets": ["next/babel"]
}

module.exports = nextConfig
