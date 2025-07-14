/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
        hostname: 'us-east-1.cdn.hygraph.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

export default nextConfig;
