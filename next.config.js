/** @type {import('next').NextConfig} */

const repo = 'fabiundfabi'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  assetPrefix: assetPrefix,
  basePath: basePath,
  output: 'export',
  distDir: 'docs',
}

module.exports = nextConfig
