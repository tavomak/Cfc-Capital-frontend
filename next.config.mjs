/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 120,
  // Video filenames are versioned (-v1, -v2…): a changed video gets a new name
  async headers() {
    return [
      {
        source: '/videos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  images: {
    deviceSizes: [768, 1440],
    imageSizes: [32, 128],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'us-east-1.graphassets.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
