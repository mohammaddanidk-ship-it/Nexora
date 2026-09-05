import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: { ignoreBuildErrors: false },
  allowedDevOrigins: ["*.space-z.ai", "preview-*.space-z.ai"],
  env: {
    NEXORA_APP_NAME: process.env.NEXORA_APP_NAME ?? "Nexora",
    NEXORA_APP_VERSION: process.env.NEXORA_APP_VERSION ?? "0.1.0",
    NEXORA_DEPLOYMENT_MODE: process.env.NEXORA_DEPLOYMENT_MODE ?? "local",
  },
};

export default nextConfig;
