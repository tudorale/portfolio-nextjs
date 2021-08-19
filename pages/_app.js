import '../styles/globals.css'
import "aos/dist/aos.css"
import {useEffect} from "react"

function MyApp({ Component, pageProps }){

  useEffect(() => {  

      let root = document.querySelector(':root');
      root.style.setProperty('--main-color', `#6930c3`)

  }, [])
  
  return <Component {...pageProps} />
}

export default MyApp
