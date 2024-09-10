/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // This will allow all paths from the Unsplash domain
      },
    ],
  },
};

export default nextConfig;
