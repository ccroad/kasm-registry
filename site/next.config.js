/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'ChrisCs Custom KASM Registry',
    description: 'ChrisCs KASM Workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://https://github.com/ccroad/kasm-registry/',
    contactUrl: 'https://github.com/ccroad/kasm-registry/issues',
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
