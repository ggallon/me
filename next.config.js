const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = bundleAnalyzer({
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "base-uri 'self'; script-src 'self' 'unsafe-inline' vitals.vercel-analytics.com",
          },
          {
            key: 'X-Frame-Options',
            value: 'sameorigin',
          },
          {
            key: 'X-Xss-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
    ]
  },
})
