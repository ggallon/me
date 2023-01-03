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
          <h1 className="text-center text-6xl font-medium mb-10 sm:mb-6">
            Gwenaël Gallon
          </h1>
          {mounted && <ToggleTheme />}
        </div>
      </Suspense>
    </>
  )
}
