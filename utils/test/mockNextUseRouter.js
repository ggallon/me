// Mocks useRouter
const useRouter = jest.spyOn(require('next/dist/client/router'), 'useRouter')

/**
 * mockNextUseRouter
 * Mocks the useRouter React hook from Next.js on a test-case by test-case basis
 */
export function mockNextUseRouter(props) {
  useRouter.mockImplementationOnce(() => ({
    // pathname: String - Current route. That is the path of the page in /pages,
    // the configured basePath or locale is not included.
    pathname: props.pathname,

    // query: Object - The query string parsed to an object.
    // It will be an empty object during prerendering if the page doesn't
    // have data fetching requirements. Defaults to {}
    query: props.query,

    // asPath: String - The path (including the query) shown in the browser without
    // the configured basePath or locale.
    asPath: props.asPath,

    // isFallback: boolean - Whether the current page is in fallback mode.
    // isFallback: props.isFallback,

    // basePath: String - The active basePath (if enabled in next.config.js).
    basePath: props.basePath,

    // locale: String - The active locale (if enabled).
    locale: props.locale,

    // locales: String[] - All supported locales (if enabled).
    locales: props.locales,

    // defaultLocale: String - The current default locale (if enabled).
    defaultLocale: props.defaultLocale,

    // domainLocales: Array<{domain, defaultLocale, locales}> - Any configured domain locales.
    domainLocales: props.domainLocales,

    // isReady: boolean - Whether the router fields are updated client-side and ready for use.
    // Should only be used inside of useEffect methods and not for conditionally rendering on the server.
    // isReady: props.isReady,

    // isPreview: boolean - Whether the application is currently in preview mode.
    // isPreview: props.isPreview,
  }))
}
