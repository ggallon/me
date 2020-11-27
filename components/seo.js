import Head from 'next/head'
import { useRouter } from 'next/router'

const isProd = process.env.NODE_ENV === 'production'

export const getAbsoluteURL = (path) => {
  const baseURL = process.env.APP_URL ? `https://${process.env.APP_URL}` : "http://localhost:3000"
  return baseURL + path
}

export default function SEO() {
  console.log(process.env)
  console.log('ME ', process.env.APP_URL)
  const router = useRouter()
  const isDefaultLocale = router.defaultLocale === router.locale
  const baseURL = isProd
    ? `https://${process.env.APP_URL}`
    : `http://locahost:3000`
  const pageFrUrl = `${baseURL}${router.pathname}`
  const pageEnUrl = `${baseURL}/en${router.pathname}`
  const twitterAccount = '@gwengallon'
  const title = 'Gwenaël Gallon'
  const description =
    'Entrepreneur enthousiaste, optimisation des organisations, et créateur de valeur'

  return (
    <Head>
      <link rel="canonical" href={isDefaultLocale ? pageFrUrl : pageEnUrl} />
      <link rel="alternate" href={isDefaultLocale ? pageEnUrl : pageFrUrl} hreflang={isDefaultLocale ? 'en' : 'fr'} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={isDefaultLocale ? pageFrUrl : pageEnUrl} />
      <meta property="og:image" content={getAbsoluteURL('/og.png')} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </Head>
  )
}
