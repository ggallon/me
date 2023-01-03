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
          <div>
            <h1 className="m-0 text-center text-6xl font-medium">
              Gwenaël Gallon
            </h1>
            {mounted && <ToggleTheme />}
          </div>
        </div>
      </Suspense>
    </>
  )
}
