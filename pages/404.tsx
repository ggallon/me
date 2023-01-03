import Head from 'next/head'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-white px-8 py-16 sm:px-10 sm:py-24 md:grid md:place-items-center lg:px-8">
      <Head>
        <title>Page introuvable - Gwenaël Gallon</title>
      </Head>
      <div className="mx-auto max-w-max">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                La page est introuvable.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                <Balancer>L&apos;URL est peut-être mal orthographié ou la page que vous
                recherchez n&apos;est plus disponible.</Balancer>
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/" legacyBehavior>
                <a className="inline-flex items-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  Retour à l&apos;accueil
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
