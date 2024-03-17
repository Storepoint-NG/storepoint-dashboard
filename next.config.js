const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "nothing",
});

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

module.exports = withPWA(nextConfig);
