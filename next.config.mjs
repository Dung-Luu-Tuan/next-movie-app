/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["img.phimapi.com"],
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  reactStrictMode: false,
};

export default nextConfig;
