import 'styles/globals.css'

export function reportWebVitals(metric) {
	const body = JSON.stringify(metric)
	console.log('body', metric)
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
