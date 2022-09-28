import 'nextra-theme-docs/style.css'
import './css/index.css'

export default function Nextra({ Component, pageProps }) {
  const navigate = (version) => {
    
  }
  return (
    <div>
      <div></div>
     
      <Component {...pageProps} />
      <div className="dropDown">
        <select value={'Version 4.4'}>
          <option>Version 4.4</option>
          <option >Version 4.3</option>
          <option>Version 4.2</option>
          <option>Version 4.0</option>
        </select>
      </div>
    </div>
  )
}
