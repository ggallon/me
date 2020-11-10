import Head from 'next/head'

export default function SEO() {
  const title = 'Gwenaël Gallon'
  const description = 'Personal website for Gwenaël Gallon'

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://gwenaelgallon.fr" />
      <meta property="og:image" content="https://gwenaelgallon.fr/og.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
