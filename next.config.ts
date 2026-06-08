import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If you are deploying to username.github.io/portfolio (without a custom domain),
  // uncomment the line below:
  basePath: '/portfolio',
};

export default nextConfig;
