/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  esmExternals: true,
  images: {
    domains: ["res.cloudinary.com"]
  },
};

module.exports = nextConfig;
