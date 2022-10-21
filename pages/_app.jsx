import '../styles/app.css'
import Html from '../components/env/Html'
import Navbar from '../components/Navbar'
import Foot from '../components/Foot'

export default function App({ Component, pageProps }) {
  return ( 
    <Html>
        <title>C0DA</title>
        <Navbar />
        <div className="page">
          <Component {...pageProps} />
        </div>
        <Foot />
    </Html>
  )
}

