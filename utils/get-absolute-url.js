const isProd = process.env.NODE_ENV === 'production'

export const getAbsoluteURL = (path, lang) => {
  const baseURL = isProd ? `https://${process.env.APP_URL}` : "http://localhost:3000"
  const cleanPath = path ? path : ''
  const cleanLang = lang ? `/${lang}` : ''
  return `${baseURL}${cleanLang}${cleanPath}`
}
