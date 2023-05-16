/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;
const isInDevelopment = env === "development";

const repo = "";

const assetPrefix = repo;
const basePath = repo;

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export",
  distDir: "docs",
};

module.exports = nextConfig;
