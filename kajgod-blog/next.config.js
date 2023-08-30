/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withBundleAnalyzer(nextConfig);
