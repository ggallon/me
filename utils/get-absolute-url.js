import { isProd, isDev } from '@utils/get-env'

export const getAbsoluteURL = (path, lang) => {
  const baseURL = isProd
    ? 'https://gwenaelgallon.fr'
    : isDev
    ? 'http://localhost:3000'
    : `https://${process.env.APP_URL}`
  const cleanPath = path ? path : ''
  const cleanLang = lang ? `/${lang}` : ''
  return `${baseURL}${cleanLang}${cleanPath}`
}
