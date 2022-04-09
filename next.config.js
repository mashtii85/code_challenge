/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  // i18n,
  eslint: {
    // Disable Next.js internal ESLint check due to differences with our config
    ignoreDuringBuilds: true
  },
  experimental: {
    outputStandalone: true // For Docker support
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
    removeConsole: {
      exclude: ['error','log']
    }
  }
}

module.exports = nextConfig
