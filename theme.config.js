export default {
  github: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – Hoolva SDK',
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
      <meta name="description" content="Nextra: the Next.js site builder" />
      <meta name="og:description" content="Nextra: the Next.js site builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://nextra.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="nextra.vercel.app" />
      <meta name="twitter:url" content="https://nextra.vercel.app" />
      <meta name="og:title" content="Nextra: Next.js static site generator" />
      <meta name="og:image" content="https://nextra.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/fav"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/fav-icon-2.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/fav-icon-2.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/fav-icon-2.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/fav-icon-2.png"
      />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>MIT {new Date().getFullYear()} © Hoolva SDK.</>,
  unstable_faviconGlyph: '',
}
