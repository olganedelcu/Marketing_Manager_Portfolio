import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  basePath: isProd ? '/Marketing_Manager_Portfolio' : '',
  assetPrefix: isProd ? '/Marketing_Manager_Portfolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
