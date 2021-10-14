import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <Head>
        <title>Page introuvable - Gwenaël Gallon</title>
      </Head>
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            404
          </p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                La page est introuvable.
              </h1>
              <p className="mt-1 text-base text-gray-500">
                L'URL est peut-être mal orthographié ou la page que vous recherchez n'est plus disponible.
              </p>
            </div>
            <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
              <Link href="/">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Retour à l'accueil
                </a>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
