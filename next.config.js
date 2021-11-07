module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'cfc-capital-strapi.herokuapp.com',
      'cfc-capital.s3.amazonaws.com',
    ],
  },
  webpack: (config) => {
    return config
  },
}