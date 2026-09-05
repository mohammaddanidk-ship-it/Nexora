import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel performs its own serverless packaging. Standalone output is only
  // needed for self-hosted deployments and triggers a known Next 16.3 adapter
  // NFT issue on Vercel.
  output: "standalone",
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
