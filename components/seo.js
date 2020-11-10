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
    </Head>
  )
}
