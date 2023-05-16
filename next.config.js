/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;
const isInDevelopment = env === "development";

const repo = isInDevelopment ? "" : "fabiundfabi";

const assetPrefix = isInDevelopment ? "" : `/${repo}`;
const basePath = isInDevelopment ? "" : `/${repo}`;

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: "export",
  distDir: "docs",
};

module.exports = nextConfig;
