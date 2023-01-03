import { Suspense } from 'react'
import { useEffect, useState } from 'react'

import { ToggleTheme } from '#/components/toggle-theme'
import SEO from '#/components/seo'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      <SEO />
      <Suspense fallback={null}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div>
            <h1 className="m-0 text-center font-medium text-6xl">
              Gwenaël Gallon
            </h1>
            {mounted && <ToggleTheme />}
          </div>
        </div>
      </Suspense>
    </>
  )
}
