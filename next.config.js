/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "image.tmdb.org",
      "upload.wikimedia.org",
      "occ-0-1190-2774.1.nflxso.net",
    ],
  },
};

module.exports = nextConfig;
