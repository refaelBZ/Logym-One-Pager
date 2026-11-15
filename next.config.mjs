/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
    ],
  },
  async headers() {
    // www.logym.fit stays indexable. Every other host this app serves
    // (vercel.app aliases, preview URLs, localhost) gets noindex.
    return [
      {
        source: '/:path*',
        missing: [{ type: 'host', value: 'www.logym.fit' }],
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      },
    ];
  },
  async redirects() {
    // 308, not 307. This runs only when the request reaches Next.js.
    // Vercel's own apex redirect is answered at the edge and never gets here.
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'logym.fit' }],
        destination: 'https://www.logym.fit/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
