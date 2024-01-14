/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    clientRouterFilter: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qgzeodsxjjpqfbghflzn.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
