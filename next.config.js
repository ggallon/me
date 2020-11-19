const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

const prod = process.env.NODE_ENV == "production"

function getCsp() {
  let csp = ''
  /* fetch directives */
  csp += `connect-src 'self'; `
  csp += `default-src 'self'; `
  csp += `font-src 'self'; `
  csp += `frame-src 'self'; `
  csp += `img-src 'self'; `
  csp += `manifest-src 'self'; `
  csp += `media-src 'self'; `
  csp += `object-src 'none'; `
  csp += `prefetch-src 'self'; `
  // NextJS requires 'unsafe-eval' in dev
  csp += `script-src 'self' ${prod ? "" : "'unsafe-eval'"} 'unsafe-inline' vitals.vercel-analytics.com; `
  // NextJS requires 'unsafe-inline' in dev
  csp += `style-src ${prod ? "'self'" : "'unsafe-inline'"}; `
  csp += `worker-src 'self'; `
  /* Document directives */
  csp += `base-uri 'self'; `
  /* Navigation directives */
  csp += `form-action 'self'; `
  csp += `frame-ancestors 'self'; `
  /* Other directives */
  csp += prod ? `block-all-mixed-content; ` : ''
  csp += prod ? `upgrade-insecure-requests;` : ''
  return csp;
}

module.exports = bundleAnalyzer({
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: getCsp(),
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
