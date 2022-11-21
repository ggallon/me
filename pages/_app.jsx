import { Analytics } from '@vercel/analytics/react'
import { Inter } from '@next/font/google'
import { ThemeProvider } from 'next-themes'

import '@/assets/main.css'

const interVariable = Inter()

function MyApp({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class" defaultTheme="system" >
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
