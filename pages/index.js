import SEO from '@components/seo'
import styles from '@assets/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Gwenaël Gallon
        </h1>
      </main>
    </div>
  )
}
