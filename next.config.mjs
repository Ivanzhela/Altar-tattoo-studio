/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  basePath: "/Altar-tattoo-studio",
  assetPrefix: "/Altar-tattoo-studio/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "scontent-sof1-1.xx.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "scontent-sof1-2.xx.fbcdn.net",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "scontent.fsof11-1.fna.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
