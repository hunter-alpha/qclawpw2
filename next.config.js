/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return 'qclaw-' + Date.now();
  },
}

module.exports = nextConfig
