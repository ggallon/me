import { useTheme } from 'next-themes'

import SEO from '@components/seo'
import styles from '@assets/Home.module.css'

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.container}>
      <SEO />

      <main className={styles.main}>
        <h1 className={styles.title}>Gwenaël Gallon</h1>

        <button
          className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          Change theme
        </button>
      </main>
    </div>
  )
}
