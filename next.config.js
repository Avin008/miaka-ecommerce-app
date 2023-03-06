/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "assets.myntassets.com",
      "firebasestorage.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
