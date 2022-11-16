import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes'

import '@/assets/main.css'

const Noop = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop
  const Theme = Component.Theme || undefined

  return (
    <ThemeProvider defaultTheme="system" forcedTheme={Theme} attribute="class">
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  )
}

export default MyApp
