import 'nextra-theme-docs/style.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <div>
    <div></div>
      <Component {...pageProps} />
    </div>
  )
}
