import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Закоментовано для підтримки Server Actions на Vercel
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
