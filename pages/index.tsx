import { Suspense, useEffect, useState } from 'react'
import SEO from '#/components/seo'
import { ToggleTheme } from '#/components/toggle-theme'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <SEO />
      <Suspense fallback={null}>
        <div className="flex min-h-screen flex-col items-center justify-center">
          <h1 className="mb-10 text-center text-6xl font-medium sm:mb-6">
            Gwenaël Gallon
          </h1>
          {mounted ? <ToggleTheme isShowing={mounted} /> : (
            <div className="w-36 h-9"></div>
          )}
        </div>
      </Suspense>
    </>
  )
}
