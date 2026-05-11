import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Next.js 16: local `src` with query strings must match a pattern (omit `search` to allow any query).
    localPatterns: [{ pathname: '/**' }],
  },
};

export default nextConfig;
