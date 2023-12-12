/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "steamuserimages-a.akamaihd.net",
        protocol: "https",
      },
    ],
  },
};

module.exports = nextConfig;
