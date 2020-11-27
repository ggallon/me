import { isProd, isDev } from '@utils/get-env'
const vercelVitalsUrl = 'vitals.vercel-analytics.com'

function getCsp() {
  const csp = [
    /* fetch directives */
    `connect-src 'self' ${isProd ? vercelVitalsUrl : ''}`,
    `default-src 'self'`,
    `font-src 'self'`,
    `frame-src 'self'`,
    `img-src 'self'`,
    `manifest-src 'self'`,
    `media-src 'self'`,
    `object-src 'none'`,
    `prefetch-src 'self'`,
    // NextJS requires 'unsafe-eval' in dev
    `script-src 'self' ${vercelVitalsUrl} ${
      isDev ? "'unsafe-eval'" : ''
    } 'unsafe-inline' `,
    // NextJS requires 'unsafe-inline' in dev
    `style-src ${isDev ? "'unsafe-inline'" : "'self'"}`,
    `worker-src 'self'`,
    /* Document directives */
    `base-uri 'self'`,
    /* Navigation directives */
    `form-action 'self'`,
    `frame-ancestors 'self'`,
    /* Other directives */
    isProd ? `block-all-mixed-content` : '',
    isProd ? `upgrade-insecure-requests;` : '',
  ]

  return csp.join('; ')
}

exports.getCsp = getCsp
