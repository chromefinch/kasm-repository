/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Tech',
    description: 'A store for Kasm supported workspaces.',
    icon: 'https://raw.githubusercontent.com/chromefinch/kasm-repository/1.0/site/finchTransparent.png',
    listUrl: 'https://chromefinch.github.io/kasm-repository/',
    contactUrl: 'https://airgapped.systems',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
