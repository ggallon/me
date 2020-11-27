import Head from 'next/head'

export default function SEO() {
  const twitterAccount = '@gwengallon'
  const title = 'Gwenaël Gallon'
  const description =
    'Entrepreneur enthousiaste, optimisation des organisations, et créateur de valeur'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterAccount} />
      <meta name="twitter:creator" content={twitterAccount} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://gwenaelgallon.fr" />
      <meta property="og:image" content="https://gwenaelgallon.fr/og.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
    </Head>
  )
}
