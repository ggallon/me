const { getCsp } = require('./config/get-csp')
const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = bundleAnalyzer({
  reactStrictMode: true,

  env: {
    APP_URL: process.env.VERCEL_URL,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        locale: false,
        headers: [
          {
            key: 'Content-Security-Policy',
            value: getCsp(),
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
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
        locale: false,
        headers: [
          {
            key: 'Vary',
            value: 'Accept-Encoding',
          },
        ],
      },
      {
        source: '/(.jpg|.png|.webp|.gif)',
        locale: false,
        headers: [
          {
            key: 'cache-control',
            value: 'public,max-age=31536000,immutable',
          },
        ],
      },
    ]
  },
})
