import Head from 'next/head'
import styles from '@assets/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gwenaël Gallon</title>
        <meta name="description" content="Personal website for Gwenaël Gallon" />
        <meta property="og:title" content="Gwenaël Gallon" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Personal website for Gwenaël Gallon" />
        <meta property="og:url" content="https://gwenaelgallon.fr" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gwenaël Gallon
        </h1>
      </main>
    </div>
  )
}
