import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    output: 'export',
  // Optional: highly recommended for static hosting platforms to keep URLs clean
  trailingSlash: true, 
};

export default nextConfig;
