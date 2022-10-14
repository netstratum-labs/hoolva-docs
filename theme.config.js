export default {
  github: 'https://github.com/netstratum-labs/hoolva-docs',
  docsRepositoryBase: 'https://github.com/netstratum-labs/hoolva-docs',
  titleSuffix: ' – Hoolva Documentation',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Hoolva SDK</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Hoolva: Developer Documentation" />
      <meta name="og:description" content="Hoolva: Developer Documentation" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://docs.hoolva.com/hoolva-icon.png" />
      <meta name="twitter:site:domain" content="docs.hoolva.com" />
      <meta name="twitter:url" content="https://docs.hoolva.com" />
      <meta name="og:title" content="Hoolva: Developer Documentation" />
      <meta name="og:image" content="https://docs.hoolva.com/hoolva-icon.png" />
      <meta name="apple-mobile-web-app-title" content="Hoolva" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/Hoolva-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/16x16.png"
      />
      <meta name="msapplication-TileImage" content="/144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditLink: 'Edit this page',
  footerText: <> {new Date().getFullYear()} © Hoolva SDK. All rights reserved</>,
  unstable_faviconGlyph: '',
}
