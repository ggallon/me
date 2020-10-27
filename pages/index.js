import Head from 'next/head'
import styles from '@assets/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gwenaël Gallon</title>
        <meta name="description" content="Gwenaël Gallon Site -> https://gwenaelgallon.fr" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gwenaël Gallon
        </h1>
      </main>
    </div>
  )
}
