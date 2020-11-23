const prod = process.env.NODE_ENV == 'production'
const vercelVitalsUrl = 'vitals.vercel-analytics.com'

function getCsp() {
  let csp = ''
  /* fetch directives */
  csp += `connect-src 'self' ${vercelVitalsUrl}; `
  csp += `default-src 'self'; `
  csp += `font-src 'self'; `
  csp += `frame-src 'self'; `
  csp += `img-src 'self'; `
  csp += `manifest-src 'self'; `
  csp += `media-src 'self'; `
  csp += `object-src 'none'; `
  csp += `prefetch-src 'self'; `
  // NextJS requires 'unsafe-eval' in dev
  csp += `script-src 'self' ${
    prod ? '' : "'unsafe-eval'"
  } 'unsafe-inline' ${vercelVitalsUrl}; `
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
  return csp
}

exports.getCsp = getCsp
