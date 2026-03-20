/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['zh-CN', 'en', 'de-DE', 'de-AT', 'fr', 'ja', 'ko', 'hi', 'id'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  trailingSlash: false,
  generateBuildId: async () => {
    return 'qclaw-' + Date.now();
  },
}

module.exports = nextConfig