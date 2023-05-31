module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'cfc-capital-strapi.herokuapp.com',
      'cfc-capital.s3.amazonaws.com',
      'media.graphassets.com',
    ],
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};
