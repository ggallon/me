import { Inter } from '@next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '#/assets/main.css'

const interVariable = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <main className={interVariable.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </ThemeProvider>
  )
}
