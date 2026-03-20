/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return 'qclaw-' + Date.now();
  },
}

module.exports = nextConfig
