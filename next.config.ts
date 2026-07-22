import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "upload.wikimedia.org",
        protocol: "https",
      },
    ],
  },
  async redirects() {
    return [
      {
        destination: "/courses",
        permanent: true,
        source: "/subjects",
      },
      {
        destination: "/contact",
        permanent: true,
        source: "/venues",
      },
      {
        destination: "/solutions",
        permanent: true,
        source: "/workshops",
      },
    ];
  },
};

export default nextConfig;
