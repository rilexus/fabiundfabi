/** @type {import('next').NextConfig} */

const repo = 'fabiundfabi'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  assetPrefix: 'https://rilexus.github.io/fabiundfabi/',
  basePath: basePath,
  output: 'export',
  distDir: 'docs',
}

module.exports = nextConfig
