import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/BaristaCourses",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
