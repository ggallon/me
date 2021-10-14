const prod = process.env.NODE_ENV == 'production'
const vercelVitalsUrl = 'vitals.vercel-insights.com'

function getCsp() {
  const csp = [
    /* fetch directives */
    `connect-src 'self' ${prod ? vercelVitalsUrl : ''}`,
    `default-src 'self'`,
    `font-src 'self' https://fonts.gstatic.com/`,
    `frame-src 'self'`,
    `img-src 'self'`,
    `manifest-src 'self'`,
    `media-src 'self'`,
    `object-src 'none'`,
    `prefetch-src 'self'`,
    // NextJS requires 'unsafe-eval' in dev
    `script-src 'self' ${
      prod ? '' : "'unsafe-eval'"
    } 'unsafe-inline' ${vercelVitalsUrl}`,
    // NextJS requires 'unsafe-inline' in dev
    `style-src ${
      prod
        ? "'self' https://fonts.googleapis.com/"
        : "'unsafe-inline' https://fonts.googleapis.com/"
    }`,
    `worker-src 'self'`,
    /* Document directives */
    `base-uri 'self'`,
    /* Navigation directives */
    `form-action 'self'`,
    `frame-ancestors 'self'`,
    /* Other directives */
    prod ? `block-all-mixed-content` : '',
    prod ? `upgrade-insecure-requests;` : '',
  ]

  return csp.join('; ')
}

exports.getCsp = getCsp
