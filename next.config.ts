import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    target: 'server', // This is required for Next.js to work correctly with Netlify
    reactStrictMode: true,
};

export default nextConfig;
