/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  generateBuildId: async () => {
    return 'qclaw-' + Date.now();
  },
}

module.exports = nextConfig
