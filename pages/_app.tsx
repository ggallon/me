import localFont from '@next/font/local'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '#/assets/main.css'

const interVariable = localFont({
  src: '../assets/fonts/Inter-roman-latin.var.woff2',
  weight: '100 900',
  variable: '--font-inter',
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
