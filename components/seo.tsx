import Head from 'next/head'
import { useRouter } from 'next/router'
import { getAbsoluteURL } from '#/utils/get-absolute-url'

export default function SEO() {
  const router = useRouter()
  const pageUrl = getAbsoluteURL(router.pathname)
  const twitterAccount = '@gwengallon'
  const title = 'Gwenaël Gallon'
  const description =
    'Entrepreneur enthousiaste, optimisation des organisations, et créateur de valeur'

  return (
    <Head>
      <link rel="canonical" href={pageUrl} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${pageUrl}/og.png`} />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </Head>
  )
}
